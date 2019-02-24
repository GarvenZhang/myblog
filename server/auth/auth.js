import jwt from '../middleware/jwt'
import config from './config'
import errorMsg from '../middleware/errorMsg'
import referer from '../middleware/referer'

// === ES6模块与COMMONJS模块差异: === //
// === 1 es6输出的是 值的引用, commonjs输出的是 值的拷贝 === //
// === 2 es6是 编译时输出接口(es6模块非对象, 对外接口只是一种静态定义, 在代码静态解析阶段就生成), commonjs是 运行时加载(加载的是一个对象, 即module.exports, 在脚本执行完成后生成) === //
// === 3 es6输出的模块变量只可读, commonjs可重写 module.exports === //
// === 4 export通过接口输出的是同一个值 === //

/**
 * 权限验证中间件
 * @param {...Array} role - 权限值
 * @return {Function} - 中间件
 */
module.exports = function (...role) {

  return async function (ctx, next) {

    // referer校验
    const isLegalReferer = referer(ctx, next)
    if (!isLegalReferer) {
      ctx.status = 401
      ctx.body = errorMsg[401]
      return
    }

    // authorization头校验
    let authorizationHeader = ctx.headers.authorization
    if (!authorizationHeader) {
      ctx.status = 403
      ctx.body = errorMsg(403)
      return
    }

    // jwt校验
    const AUTH = config.AUTH
    const token = authorizationHeader.split(' ')[1]

    await jwt.verify(token, AUTH.JWT_SECRET)
      .then(async (decoded) => {

        // 没有权限
        if (role.length !== 0 && !role.includes(decoded.role)) {
          ctx.status = 403
          ctx.body = errorMsg(403)
          return
        }

        // redis中是否存在此sid
        const sid = await ctx.redis.get(AUTH.SESSION_PREFIX + decoded.sid)

        if (sid !== '1') {

          // 删除sid
          ctx.redis.del('sid')

          ctx.status = 401
          ctx.body = errorMsg(401)

          return
        }

        // 过期, 则从redis中删除会话
        if (decoded.expires <= Date.now()) {

          // 删除sid
          ctx.redis.del('sid')

          ctx.status = 401
          ctx.body = {
            message: 'access_token过期!'
          }
          return
        }

        ctx.payload = {
          uid: decoded.uid,
          sid: decoded.sid,
          role: decoded.role,
          expires: Date.now() + AUTH.MAXAGE
        }

        await next()
      })
      .catch((err) => {
        // 过期，或不正确，重新登录
        console.error(err)
        ctx.status = 401
        ctx.body = errorMsg(401)
      })

  }
}

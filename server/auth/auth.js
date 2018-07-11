import jwt from 'jsonwebtoken'
import config from './config'
import errorMsg from '../middleware/errorMsg'
import referer from '../middleware/referer'

// === ES6模块与COMMONJS模块差异: === //
// === 1 es6输出的是 值的引用, commonjs输出的是 值的拷贝 === //
// === 2 es6是 编译时输出接口(es6模块非对象, 对外接口只是一种静态定义, 在代码静态解析阶段就生成), commonjs是 运行时加载(加载的是一个对象, 即module.exports, 在脚本执行完成后生成) === //
// === 3 es6输出的模块变量只可读, commonjs可重写 module.exports === //
// === 4 export通过接口输出的是同一个值 === //

module.exports = async function (ctx, next) {

  // referer校验
  await referer(ctx, next)

  // authorization头校验
  let authorizationHeader = ctx.headers.authorization
  if (!authorizationHeader) {
    ctx.status = 403
    ctx.body = errorMsg(403)
    return
  }

  // jwt校验
  const token = authorizationHeader.split(' ')[1]
  await jwt.verify(token, config.AUTH.JWT_SECRET, async (err, decoded) => {

    // 过期，或不正确，重新登录
    console.log(err)
    if (err) {
      ctx.status = 401
      ctx.body = errorMsg(401)
      return
    }

    // 没有权限
    if (decoded.role !== 1) {
      ctx.status = 403
      ctx.body = errorMsg(403)
      return
    }

    ctx.playload = decoded
    await next()

  })

}

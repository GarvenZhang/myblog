import jwt from 'jsonwebtoken'
import config from '../../config'

module.exports = async function (ctx, next) {
  let authorizationHeader = ctx.headers.authorization

  if (!authorizationHeader) {
    ctx.status = 403
    ctx.body = {
      retCode: 0,
      msg: '非法请求！'
    }
    return
  }

  let token = authorizationHeader.split(' ')[1]
  await jwt.verify(token, config.jwtSecret, async (err, decode) => {
    if (err) {
      ctx.status = 401
      ctx.body = {
        retCode: 0,
        msg: '未授权！'
      }
    } else {
      ctx.isAuthenticated = true
      await next()
    }
  })
}

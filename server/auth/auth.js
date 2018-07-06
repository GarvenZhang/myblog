import jwt from 'jsonwebtoken'
import config from '../../config'
import errorMsg from '../middleware/errorMsg'
import referer from '../middleware/referer'

module.exports = async function (ctx, next) {

  // referer
  await referer(ctx, next)

  let authorizationHeader = ctx.headers.authorization

  if (!authorizationHeader) {
    ctx.status = 403
    ctx.body = errorMsg[403]
    return
  }

  let token = authorizationHeader.split(' ')[1]
  await jwt.verify(token, config.jwtSecret, async (err, decode) => {
    if (err) {
      ctx.status = 401
      ctx.body = errorMsg[401]
    } else {
      ctx.isAuthenticated = true
      await next()
    }
  })
}

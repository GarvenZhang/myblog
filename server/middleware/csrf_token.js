const errorMsg = require('./errorMsg')
const config = require('../../config')
const md5 = require('js-md5')

// === csrf防御之csrf_token: 由于同源策略, 网站B无法获取cookie，又不能访问网站A, 则可以在网站A前端页面中加入验证信息 === //
// === 1 实现方式: === //
// === 1.1 用户登录后, 后端在cookie中放签名，前端在每次发送请求时携带用协商好的算法生成的csrf_token, 后端拿到后用也从cookie中拿到签名再用算法生成scrf_token然后进行比对  === //
// === 1.2 用户登录后, 后端在传给前端页面时往html中塞入csrf_token放到 input[type='hidden'] 中 === //
// === 1.3 jwt === //

module.exports = async function (ctx, next) {

  const csrf_token = ctx.request.body.csrf_token || ctx.query.csrf_token
  const sign = ctx.cookies.get('sign')

  // csrf_token
  if (csrf_token === config.getCsrfToken(md5, sign)) {
    await next()
  }

  ctx.status = 403
  ctx.body = errorMsg[403]
  
}




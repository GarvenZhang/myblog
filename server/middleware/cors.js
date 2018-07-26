const config = require('../auth/config')

// === CORS(跨域资源共享)：有特定响应字段的ajax, 非IE10以下 === //
// === 1 简单请求: 同时满足 GET/GET/POST + Accept/Accept-Language/Content-Language/Last-Event-ID/Content-Type(application/x-www-form-urlencoded、multipart/form-data、text/plain) === //
// === 1.1 过程: === //
// === > 满足简单请求条件，浏览器自带一个请求头Origin, 若响应头没有Access-Control-Allow-Origin则抛错，被XMLHttpRequest的onerror回调函数捕获； === //
// === > 若得到允许，响应头中会有Access-Control-Allow-Origin，Access-Control-Allow-Credentials[可选]，Access-Control-Expose-Headers[可选] === //
// === 1.2 发送Cookie和HTTP认证信息: === //
// === 1.2.a 服务器: Access-Control-Allow-Credentials: true, 且 Access-Control-Allow-Origin 明确为与请求网站一致 === //
// === 1.2.b 浏览器: xhr.withCredentials = true === //
// === 2 非简单请求: === //
// === 2.1 预请求(preflight): 浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。 === //
// === 2.1.a 请求头: OPTIONS, Origin, Access-Control-Request-Method, Access-Control-Request-Headers === //
// === 2.1.b 响应头: Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Allow-Credentials, Access-Control-Max-Age(预请求有效期) ，设置204=== //
// === 2.2 正常请求: Origin / Access-Control-Allow-** === //

const CORS_HEADERS = config.CORS_HEADERS

module.exports = async function (ctx, next) {
  ctx.set('Access-Control-Allow-Origin', CORS_HEADERS.ACCESS_CONTROL_ALLOW_ORIGIN)
  ctx.set('Access-Control-Allow-Method', CORS_HEADERS.ACCESS_CONTROL_ALLOW_METHOD)
  ctx.set('Access-Control-Allow-Headers', CORS_HEADERS.ACCESS_CONTROL_ALLOW_HEADERS)
  await next()
}

const errorMsg = require('./errorMsg')

const isDev = process.env.NODE === 'development'

module.exports = async function (ctx, next) {

  const referer =  ctx.request.headers.referer

  // === referer验证: 检查是否为合法的网站中发出的请求 === //
  // === 1 referer字段: 用以识别访问来源，进行统计分析、日志记录以及缓存优化等 === //
  // === 1.1 发送条件: 当协议为 file / data / 当前网站为非安全协议而源网站为安全协议时 不会被发送 === //
  // === 1.2 值: 绝对路径或者相对路径 === //
  if (
    (isDev && /^http:(?:\w+?\.|)localhost\.cn/.test(referer)) ||
    (!isDev && /^https:\/\/(?:\w+?\.|)hellojm\.cn/.test(referer))
  ) {
    return await next()
  }

  ctx.status = 401
  ctx.body = errorMsg[401]

}

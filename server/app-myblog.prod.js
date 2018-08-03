// const http2 = require('http2')
const Koa = require('koa')

const serverBase = require('./app-myblog.base')

module.exports = function (port) {
  const app = new Koa()

  // 基础中间件
  serverBase(app, port)

  // === nginx反向代理： === //
  // === 在线上，nodejs只需监听http/1.1的请求，https以及http2会先由nginx处理后，把请求转发给nodejs === //
  // 监听
  app.listen(port, function (err) {
    if (err) {
      console.error(err)
    }
    console.log(`Listening at localhost:${port}`)
  })

  // const httpsOptions = {
  //   key: fs.readFileSync(config.auth.key),
  //   cert: fs.readFileSync(config.auth.cert)
  // }

  // === http2.0 特点： === //
  // === 1.二进制分帧层：应用层与传输层间; 分为HEADERS frame 与 DATA frame；文本流存在解析上复杂性 === //
  // === 2.首部压缩：server与client各存首部表 === //
  // === 3.多路复用：同一个TCP链接 且 并行双向字节流, 无需合并css,js,sprite, 无需多域名并行下载 === //
  // === 4.请求优先级：优先值确定着客户端和服务器处理不同的流采取不同的优先级策略 === //
  // === 5.服务器推送：无需base64 http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html === //
  // === 6.兼容性：https连接时先握手，发Client Hello包说明是否支持h2, 否则用http/1.1 === //
  // http2.createSecureServer(httpsOptions, app.callback()).listen(port, function (err) {
  //   err && console.log(err)
  //   console.log(`http2: listening at localhost: ${port}`)
  // })
}

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
    console.info(`Listening at localhost:${port}`)
  })

  // const httpsOptions = {
  //   key: fs.readFileSync(config.auth.key),
  //   cert: fs.readFileSync(config.auth.cert)
  // }

  // http2.createSecureServer(httpsOptions, app.callback()).listen(port, function (err) {
  //   err && console.log(err)
  //   console.log(`http2: listening at localhost: ${port}`)
  // })
}

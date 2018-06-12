const http2 = require('http2')
const Router = require('koa-router')
const Koa = require('koa')
const fs = require('fs')
const serve = require('koa-static')
const path = require('path')

const serverBase = require('./app-myblog.base')
const config = require('../config')

module.exports = function (port) {
  const app = new Koa()
  const router = new Router()

  // 基础中间件
  serverBase(app)

  app.use(
    port === config.indexPort ? require('../server/routes/router-index') : require('../server/routes/router-cms')
  )
    .use(router.allowedMethods())

  // 静态文件
  app.use(serve(path.resolve(__dirname, '../dist'), {
    gzip: true,
    setHeaders: function (res, path, stat) {
      res.setHeader('Cache-Control', 'max-age=604800')
      res.setHeader('Set-Cookie', `csrf_token=${Date.now()};expires=${new Date(Date.now() + 60 * 60 * 2 * 1000).toUTCString()}`)
    }
  }))

  const httpsOptions = {
    key: fs.readFileSync(config.auth.key),
    cert: fs.readFileSync(config.auth.cert)
  }

  // === http2.0 特点： === //
  // === 1.二进制分帧层：应用层与传输层间; 分为HEADERS frame 与 DATA frame；文本流存在解析上复杂性 === //
  // === 2.首部压缩：server与client各存首部表 === //
  // === 3.多路复用：同一个TCP链接 且 并行双向字节流, 无需合并css,js,sprite, 无需多域名并行下载 === //
  // === 4.请求优先级：优先值确定着客户端和服务器处理不同的流采取不同的优先级策略 === //
  // === 5.服务器推送：无需base64 === //
  // === 6.兼容性：https连接时先握手，发Client Hello包说明是否支持h2, 否则用http/1.1 === //
  http2.createSecureServer(httpsOptions, app.callback()).listen(port, function (err) {
    err && console.log(err)
    console.log(`http2: listening at localhost: ${port}`)
  })
}
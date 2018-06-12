const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const serve = require('koa-static')

const serverBase = require('./app-myblog.base')
const config = require('../config')

// 监听
module.exports = function (port) {
  const app = new Koa()
  const router = new Router()

  // 基础中间件
  serverBase(app)

  // 路由中间件
  app.use(
    port === config.dev.indexServerPort ? require('../server/routes/router-index') : require('../server/routes/router-cms')
  )
    .use(router.allowedMethods())

  // 静态文件
  app.use(serve(path.resolve(__dirname, '../dist'), {
    maxage: 60,
    gzip: true,
    setHeaders: function (res, path, stat) {
      res.setHeader('Set-Cookie', `csrf_token=${Date.now()};expires=${new Date(Date.now() + 60 * 60 * 2 * 1000).toUTCString()}`)
    }
  }))

  app.listen(port, function (err) {
    if (err) {
      console.log(err)
    }
    console.log(`Listening at localhost:${port}`)
  })

  return app
}

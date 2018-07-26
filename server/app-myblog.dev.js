const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const serve = require('koa-static')

const serverBase = require('./app-myblog.base')
const config = require('../config')

/**
 * 获取路由中间件
 * @param {String} port - 端口号
 * @return {Object} - 中间件
 */
const getRouterMiddleware = port => {
  switch (port) {
    case config.INDEX_SEVER_PORT:
      return require('./routes/router-index')
    case config.CMS_SERVER_PORT:
      return require('./routes/router-cms')
    case config.SSO_PORT:
      return require('./routes/router-sso')
  }
}

/**
 * 获取静态文件文件夹名称
 * @param {String} port - 端口号
 * @return {String} - 名称
 */
const getStaticFolderName = port => {
  switch (port) {
    case config.INDEX_SEVER_PORT:
      return 'index'
    case config.CMS_SERVER_PORT:
      return 'cms'
    case config.SSO_PORT:
      return 'sso'
  }
}

// 监听
module.exports = function (port) {

  const app = new Koa()
  const router = new Router()

  // 基础中间件
  serverBase(app)

  // 路由中间件
  app
    .use(getRouterMiddleware(port))
    .use(router.allowedMethods())

  // 静态文件

  // 官网还是cms
  app.use(serve(path.resolve(__dirname, `../dist/${getStaticFolderName(port)}`), {
    maxage: 60,
    gzip: true,
    setHeaders: function (res, path, stat) {
      // res.setHeader('Set-Cookie', `csrf_token=${Date.now()};expires=${new Date(Date.now() + 60 * 60 * 2 * 1000).toUTCString()}`)
    }
  }))

  // 其它
  app.use(serve(path.resolve(__dirname, `../dist/assets`), {
    maxage: 60,
    gzip: true,
    setHeaders: function (res, path, stat) {
      // res.setHeader('Set-Cookie', `csrf_token=${Date.now()};expires=${new Date(Date.now() + 60 * 60 * 2 * 1000).toUTCString()}`)
    }
  }))

  // === 点击劫持: 将目标网站放入iframe中，视觉上隐藏，并指导用户操作 === //
  // === 1 特点: 用户亲手操作, 用户不知情 === //
  // === 2 危害: 盗取用户资金(转账), 获取用户敏感信息 === //
  // === 3 防御: === //
  // === 3.1 Javascript禁止内嵌，但sandbox能禁止js === //
  // === 3.2 X-Frame-Options: 加载网页时的内嵌规定 === //
  // === 3.2.1 DENY[基本兼容] -> 禁止被内嵌 === //
  // === 3.2.2 SAMEORIGIN[edge不兼容]: 同一个网站允许被内嵌 === //
  // === 3.2.3 ALLOW-FROM uri[很多不兼容]: 允许被内嵌在特定uri中 === //
  // === 3.3 其它辅助手段：增加用户操作成本，如验证码 === //

  // if (port === config.SSO_PORT) {
  //   app.use(async (ctx, next) => {
  //
  //     ctx.set('X-Frame-Options', 'DENY')
  //
  //     await next()
  //
  //   })
  // }

  app.listen(port, function (err) {
    if (err) {
      console.log(err)
    }
    console.log(`Listening at localhost:${port}`)
  })

  return app
}

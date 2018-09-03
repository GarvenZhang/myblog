// 服务器端解析前端项目所需的手脚架
require('source-map-support').install()
require('babel-core/register', {
  ignore: /\.css$/
})
require('babel-polyfill')
require('asset-require-hook')({
  extensions: [
    'jpg', 'png', 'gif', 'webp'
  ],
  name: '/dist/img/[name].[ext]',
  limit: 2000
})
require('css-modules-require-hook')({
  generateScopedName: '[local]_[hash:base64:5]'
})

// 常见koa依赖
// const http2 = require('http2')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const mysql = require('mysql2/promise')
const validate = require('koa-validate')
const path = require('path')
const Redis = require('ioredis')
const serve = require('koa-static')
const Router = require('koa-router')
require('url')

const config = require('./auth/config')
const commonConfig = require('../config')

const redis = new Redis(config.REDIS_CONFIG)


/**
 * 获取路由中间件
 * @param {String} port - 端口号
 * @return {Object} - 中间件
 */
const getRouterMiddleware = port => {
  switch (port) {
    case commonConfig.INDEX_SEVER_PORT:
      return require('./routes/router-index')
    case commonConfig.CMS_SERVER_PORT:
      return require('./routes/router-cms')
    case commonConfig.SSO_PORT:
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
    case commonConfig.INDEX_SEVER_PORT:
      return 'index'
    case commonConfig.CMS_SERVER_PORT:
      return 'cms'
    case commonConfig.SSO_PORT:
      return 'sso'
  }
}

// 基础中间件
module.exports = (app, port) => {

  const router = new Router()

  // mysql挂载到global
  global.connectionPool = mysql.createPool(config.DB_CONFIG)

  // 拦截器
  validate(app)

  // 限制ip

  // redis
  app.use(async (ctx, next) => {

    ctx.redis = redis

    await next()

  })

  // mysql
  app.use(async function mysqlConnection (ctx, next) {
    try {
      ctx.state.db = global.db = await global.connectionPool.getConnection()
      ctx.state.db.connection.config.namePlaceholders = true
      await ctx.state.db.query('SET SESSION sql_mode = "TRADITIONAL"')
      await next()
      ctx.state.db.release()
    } catch (e) {
      if (ctx.state.db) {
        ctx.state.db.release()
      }
      throw e
    }
  })

  // 日志记录
  app.use(logger())

  // === xss防御 之 浏览器自带拦截: X-XSS-Protection, 防御 HTML节点内容 和 HTML属性 === //

  // http header
  app.use(async function (ctx, next) {

    ctx.set('X-XSS-Protection', '1; mode=block')

    await next()
  })

  // === DDOS: 分布式拒绝服务 === //
  // === 1 原理: 模拟正常用户, 大量占用服务器资源, 无法服务正常用户 === //
  // === 2 类型: === //
  // === 2.1 TCP办连接: === //
  // === 2.2 HTTP连接 === //
  // === 2.3 DNS: === //



  // 解析请求主体
  app.use(bodyParser({
    jsonLimit: '5mb', // 控制body的parse转换大小 default 1mb
    formLimit: '4096kb'  //  控制你post的大小  default 56kb
  }))

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

  // 第三方库
  app.use(serve(path.resolve(__dirname, `../dist/lib`), {
    maxage: 60,
    gzip: true,
    setHeaders: function (res, path, stat) {
      res.setHeader('Set-Cookie', `csrf_token=${Date.now()};expires=${new Date(Date.now() + 60 * 60 * 2 * 1000).toUTCString()}`)
    }
  }))

}

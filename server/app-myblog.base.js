// 同构依赖
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
const session = require('koa-session')
const passport = require('koa-passport')
const path = require('path')

const config = require('../config')

// 基础中间件
module.exports = (app) => {
  // 解析请求主体
  app.use(bodyParser())

  // session
  // app.keys = ['@#5675!!@!)(*&^%$4r6dd']
  // app.use(session({
  //   key: 'koa:sess',
  //   maxAge: 86400000,
  //   overwrite: true,
  //   httpOnly: true,
  //   signed: true,
  //   rolling: false,
  //   renew: false
  // }, app))

  // passport
  // app.use(passport.initialize())
  // app.use(passport.session())

  // mysql挂载到global
  global.connectionPool = mysql.createPool(config.dbConfig)

  // 拦截器
  validate(app)

  // 限制ip

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

  // http header
  app.use(async function (ctx, next) {
    // xss
    ctx.set('X-XSS-Protection', '1; mode=block')

    // clickjacking
    ctx.set('X-Frame-Options', 'DENY')

    await next()
  })
}

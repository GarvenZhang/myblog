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

  // === 点击劫持: 将目标网站放入iframe中，视觉上隐藏，并指导用户操作 === //
  // === 1 特点: 用户亲手操作, 用户不知情 === //
  // === 2 危害: 盗取用户资金(转账), 获取用户敏感信息 === //
  // === 3 防御: === //
  // === 3.1 Javascript禁止内嵌，但sandbox能禁止js === //
  // === 3.2 X-Frame-Options === //
  // === 3.3 其它辅助手段：增加用户操作成本，如验证码 === //

  // === xss防御 之 浏览器自带拦截: X-XSS-Protection, 防御 HTML节点内容 和 HTML属性 === //

  // http header
  app.use(async function (ctx, next) {

    ctx.set('X-XSS-Protection', '1; mode=block')

    ctx.set('X-Frame-Options', 'DENY')


    await next()
  })

  // === DDOS: 分布式拒绝服务 === //
  // === 1 原理: 模拟正常用户, 大量占用服务器资源, 无法服务正常用户 === //
  // === 2 类型: TCP === //
}

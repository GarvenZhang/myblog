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
  generateScopedName: '[name]__[local]_[hash:base64:3]',
  camelCase: true,
  rootDir: './client/'
})

const https = require('https')
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const serve = require('koa-static')
const mysql = require('mysql2/promise')
const staticCache = require('koa-static-cache')
const fs = require('fs')
const path = require('path')

const routers = require('./server/routes/router')
const config = require('./config')
const router = new Router()

const app = module.exports = new Koa()

// mysql
global.connectionPool = mysql.createPool(config.dbConfig)

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

// middleware
app.use(logger())

app.use(serve(__dirname, {
  maxage: 60,
  gzip: true
}))

app.use(bodyParser())

app.use(routers)
  .use(router.allowedMethods())

// https
const httpsOptions = {
  key: fs.readFileSync(config.key),
  cert: fs.readFileSync(config.cert)
}
https.createServer(httpsOptions, app.callback(function (err) {
  if (err) {
    console.log(err)
  }
  console.log(`Listening at localhost: ${config.serverPort}`)
})).listen(config.serverPort)

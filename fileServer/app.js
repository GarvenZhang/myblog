
/**
 * Module dependencies.
 */
const logger = require('koa-logger')
const serve = require('koa-static')
const koaBody = require('koa-body')
const Router = require('koa-router')
const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const path = require('path')

const config = require('./config.js')
const router = new Router()
const imagePath = path.join(__dirname, config.imagePath)
const crossSite = require('./crossSite')
const httpCache = require('./httpCache')

// log requests
app.use(logger())

app.use(koaBody({ multipart: true }))

// http缓存
router.get('*', httpCache)

// 跨域处理
router.use('/upload', crossSite)

router.post('/upload', function (ctx) {
  // 文件上传
  const file = ctx.request.body.files.file
  const reader = fs.createReadStream(file.path)
  const stream = fs.createWriteStream(path.join(imagePath, file.name))
  reader.pipe(stream)
  ctx.status = 204
})

// 路由
app.use(router.routes())
app.use(router.allowedMethods())

// listen

app.listen(config.serverPort)
console.log(`listening on port ${config.serverPort}`)

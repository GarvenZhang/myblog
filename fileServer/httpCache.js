const fs = require('fs')
const path = require('path')
const config = require('./config')

const imgCache = async (ctx, next) => {
  const maxAge = config.maxAge
  await fs.stat(path.resolve(__dirname, `.${ctx.url}`), function (err, stats) {
    if (err) {
      console.log(err)
    }
    // 304
    const ims = ctx.headers['if-modified-since']
    const mt = stats.mtime.getTime()
    if ( new Date(ims) == new Date(mt) ) {
      ctx.status = 304
      return
    }

    // 更新缓存相关字段
    ctx.set('Cache-Control', `max-age=${maxAge}, public`)
    ctx.set('Last-Modified', mt)
  })
}

module.exports = async function (ctx, next) {
  const ext = /(\.\w+?)$/.exec(ctx.url)[1]
  const absUrl = path.resolve(__dirname, `.${ctx.url}`)
  if (/\.(jpg|png|jpeg|gif|svg)$/.test(ext)) {
    await imgCache(ctx, next)
  }
  ctx.body = fs.createReadStream(absUrl)
  next()
}

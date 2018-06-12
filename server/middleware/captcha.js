const ccap = require('ccap')

let cache = {}

let captcha = {}

captcha.get = async function (ctx, next) {
  const capt = ccap()
  const data = capt.get()

  this.setCache(ctx.cookies.get('uid'), data[0])
  ctx.body = data[1]
}

captcha.setCache = function (uid, data) {
  cache[uid] = data
}

captcha.delete = function (uid) {
  delete cache[uid]
}

captcha.validCache = function (uid, data) {
  return cache[uid] === data
}

module.exports = captcha

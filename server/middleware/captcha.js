// === csrf防御之图片验证码: ccap === //
// === 1 思路: === //
// === 1.1 ccap.get()产生两个值，一个是验证码文字，一个是验证码图形 === //
// === 1.2 将 用户的uid 和 验证码文字 作为key-value放入对象中缓存起来, 验证码图形发给前端 === //
// === 1.3 将用户提交的表单中的验证码文字及通过cookie中的uid找到缓存中的验证码文字进行比对，正确则证明是通过前端页面提交的  === //
// === 2 场景: 因用户体验较差，一般用于高机密的场景 或者 提交表单几次也失败后才出现 === //

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

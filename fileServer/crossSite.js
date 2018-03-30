const config = require('./config')

module.exports = function (ctx, next) {
  ctx.set('Access-Control-Allow-Origin', config.ACCESS_CONTROL_ALLOW_ORIGIN)
  ctx.set('Access-Control-Allow-Method', config.ACCESS_CONTROL_ALLOW_METHOD)
  ctx.set('Access-Control-Allow-Headers', config.ACCESS_CONTROL_ALLOW_HEADERS)
}

const Koa = require('koa')

const serverBase = require('./app-myblog.base')

// 监听
module.exports = function (port) {

  const app = new Koa()

  // 基础中间件
  serverBase(app, port)

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

let Csrf = {}

Csrf.set = function (ctx, next) {
  const csrf_token = ctx.cookies['csrf_token']
  if (!csrf_token) {
    ctx.cookies.set('csrf_token', new Date().getTime(), {
      httpOnly: false,
      sameSite: true
    })
  }
}

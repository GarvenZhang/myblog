const Router = require('koa-router')
const cors = require('../middleware/cors')

const router = new Router()

// 直出
router.get('/', cors, require('../views/server-render').sso)

// user
router.post('/api/login', cors, require('../controller/user').login)
router.get('/api/captcha', cors, require('../controller/user').getCaptcha)
router.get('/github/authorization', require('../auth/github'))

module.exports = router.routes()

import Router from 'koa-router'
import auth from '../auth/auth'

const router = new Router()

// 标签
router.get('/api/category', auth, require('../controller/tag').get)
router.delete('/api/category', auth, require('../controller/tag').del)
router.post('/api/category', auth, require('../controller/tag').add)

// 文章
router.get('/api/article/alllist', auth, require('../controller/article').getAllList)
router.get('/api/article/linklist', auth, require('../controller/article').getLink)
router.get('/api/article', auth, require('../controller/article').getArticle)
router.post('/api/article', auth, require('../controller/article').add)
router.delete('/api/article', auth, require('../controller/article').del)
router.update('/api/article', auth, require('../controller/article').update)

router.get('/api/searchlist', auth, require('../controller/article').getSearchList)

// user
router.post('/api/login', require('../controller/user').login)
router.get('/api/captcha', require('../controller/user').getCaptcha)

module.exports = router.routes()

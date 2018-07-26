import Router from 'koa-router'
import auth from '../auth/auth'

const router = new Router()

// 直出
router.get('/iframe', require('../views/server-render').iframe)

// 标签
router.get('/api/category', auth(), require('../controller/tag').get)
router.delete('/api/category', auth(1), require('../controller/tag').del)
router.post('/api/category', auth(1), require('../controller/tag').add)
router.patch('/api/category', auth(1), require('../controller/tag').update)

// 文章
router.get('/api/article/alllist', auth(), require('../controller/article').getAllList)
router.get('/api/article/linklist', auth(), require('../controller/article').getLink)
router.get('/api/article', auth(), require('../controller/article').getArticle)
router.post('/api/article', auth(1), require('../controller/article').add)
router.delete('/api/article', auth(1), require('../controller/article').del)
router.patch('/api/article', auth(1), require('../controller/article').update)

router.get('/api/searchlist', auth(), require('../controller/article').getSearchList)

// 用户
router.get('/api/user', auth(0, 1), require('../controller/user').get)

module.exports = router.routes()

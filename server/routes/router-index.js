const Router = require('koa-router')
const auth = require('../auth/auth')

const router = new Router()

// 直出页面
router.get('/', require('../views/server-render').index)
router.get('/article/:id', require('../views/server-render').article)
router.get('/bestlist', require('../views/server-render').best)
router.get('/category', require('../views/server-render').category)
router.get('/search', require('../views/server-render').search)
router.get('/iframe', require('../views/server-render').iframe)

// storage缓存
router.get('/api/index/storage', require('../controller/localStorage').get)

// 标签
router.get('/api/category', require('../controller/tag').get)
router.delete('/api/category', require('../controller/tag').del)
router.post('/api/category', require('../controller/tag').add)

// 文章
router.get('/api/article/latestlist', require('../controller/article').getLatest)
router.get('/api/article/bestlist', require('../controller/article').getBest)
router.get('/api/article/linklist', require('../controller/article').getLink)
router.get('/api/article', require('../controller/article').getArticle)
router.post('/api/article', require('../controller/article').add)
router.delete('/api/article', require('../controller/article').del)
router.patch('/api/article', require('../controller/article').update)

router.get('/api/searchlist', require('../controller/article').getSearchList)

// 用户
router.get('/api/user', auth(0, 1), require('../controller/user').get)
router.patch('/api/logout', auth(0, 1), require('../controller/user').logout)

// 评论
router.get('/api/comment', require('../controller/comment').get)
router.delete('/api/comment', auth(0, 1), require('../controller/comment').del)
router.post('/api/comment', auth(0, 1), require('../controller/comment').add)

// 点赞
router.get('/api/liked', require('../controller/liked').get)
router.post('/api/liked', auth(0, 1), require('../controller/liked').add)
router.patch('/api/liked', auth(0, 1), require('../controller/liked').update)

module.exports = router.routes()

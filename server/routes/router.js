import Router from 'koa-router'

const router = new Router()

// 直出页面
router.get('/', require('../views/server-render').index)
router.get('/article/:id', require('../views/server-render').article)
router.get('/best-article', require('../views/server-render').best)
router.get('/article-category', require('../views/server-render').category)
router.get('/admin*', require('../views/server-render').admin)

// 标签
router.get('/api/get_article_category', require('../controller/category').get)
router.get('/api/del_article_category', require('../controller/category').del)
router.post('/api/add_article_category', require('../controller/category').add)

// 文章
router.get('/api/get_latest_article', require('../controller/article').getLatest)
router.get('/api/get_best_article', require('../controller/article').getBest)
router.get('/api/get_article_link_list', require('../controller/article').getLink)
router.get('/api/get_article', require('../controller/article').getArticle)
router.post('/api/add_article', require('../controller/article').add)
router.get('/api/del_article', require('../controller/article').del)
router.post('/api/update_article', require('../controller/article').update)

// cms

module.exports = router.routes()

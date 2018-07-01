import Router from 'koa-router'

const router = new Router()

// 直出页面
router.get('/', require('../views/server-render').index)
router.get('/article/:id', require('../views/server-render').article)
router.get('/best-article', require('../views/server-render').best)
router.get('/article-category', require('../views/server-render').category)
router.get('/article-search', require('../views/server-render').search)

// storage缓存
router.get('/api/get_index_storage', require('../controller/localStorage').get)

// 标签
router.get('/api/get_article_category', require('../controller/tag').get)
router.get('/api/del_article_category', require('../controller/tag').del)
router.post('/api/add_article_category', require('../controller/tag').add)

// 文章
router.get('/api/get_latest_article', require('../controller/article').getLatest)
router.get('/api/get_best_article', require('../controller/article').getBest)
router.get('/api/get_article_link_list', require('../controller/article').getLink)
router.get('/api/get_article', require('../controller/article').getArticle)
router.get('/api/get_search_list', require('../controller/article').getSearchList)
router.post('/api/add_article', require('../controller/article').add)
router.get('/api/del_article', require('../controller/article').del)
router.post('/api/update_article', require('../controller/article').update)

// cms
router.post('/api/login', require('../controller/user').login)

module.exports = router.routes()

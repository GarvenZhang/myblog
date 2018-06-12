import Router from 'koa-router'
import auth from '../auth/auth'

const router = new Router()

// 标签
router.get('/api/get_article_category', auth, require('../controller/tag').get)
router.get('/api/del_article_category', auth, require('../controller/tag').del)
router.post('/api/add_article_category', auth, require('../controller/tag').add)

// 文章
router.get('/api/get_all_list', auth, require('../controller/article').getAllList)
router.get('/api/get_article_link_list', auth, require('../controller/article').getLink)
router.get('/api/get_article', auth, require('../controller/article').getArticle)
router.get('/api/get_search_list', auth, require('../controller/article').getSearchList)
router.post('/api/add_article', auth, require('../controller/article').add)
router.get('/api/del_article', auth, require('../controller/article').del)
router.post('/api/update_article', auth, require('../controller/article').update)

// user
router.post('/api/login', require('../controller/user').login)
router.get('/api/captcha', require('../controller/user').getCaptcha)

module.exports = router.routes()

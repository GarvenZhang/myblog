const crypto = require('crypto')

const ArticleModel = require('../models/article')
const cache = require('../middleware/cache')
const cacheEvent = require('../middleware/event').cacheEvent

class ArticleListCtrl {
  /**
   * 获取最新文章列表
   */
  static async getLatest (ctx) {
    const pageNum = parseInt(ctx.query.pageNum)
    const perPage = parseInt(ctx.query.perPage)
    ctx.body = await ArticleModel.getLatest(pageNum, perPage)
  }
  /**
   * 获取最好文章列表
   */
  static async getBest (ctx) {
    const pageNum = parseInt(ctx.query.pageNum)
    ctx.body = await ArticleModel.getBest(pageNum)
  }
  /**
   * 获取所有文章列表
   */
  static async getAllList (ctx) {
    ctx.body = await ArticleModel.getAllList()
  }
  /**
   * 获取文章链接列表
   */
  static async getLink (ctx) {

    // 从缓存中获取
    let data = cache.get('linkList')

    // 没有，则从数据库中获取
    if (!data) {
      data = await ArticleModel.getLink()
      data = JSON.stringify(data)
    }
    
    // 生成etag
    const hash = crypto.createHash('sha256')
    hash.update(data)
    const etag = hash.digest('hex')

    // 判断304
    const IfNodeMatch = ctx.headers['if-none-match']
    if (IfNodeMatch === etag) {
      ctx.status = 304
    } else {
      ctx.set('Etag', etag)
      ctx.status = 200
      ctx.body = data
    }
    
  }
  /**
   * 获取查询结果
   */
  static async getSearchList (ctx) {
    // 拦截器
    ctx.checkQuery('title').notEmpty().isInt()
    ctx.checkQuery('pageNum').notEmpty().isInt().toInt()
    ctx.checkQuery('perPage').notEmpty().isInt().toInt()

    if (ctx.errors) {
      if (ctx.path === 'article-search') {
        ctx.redirect('/404')
        ctx.status = 307
        return
      } else if (ctx.path === '/api/get_search_list') {
        ctx.body = {
          retCode: 0,
          msg: ctx.errors
        }
        ctx.status = 400
        return
      }
    }

    // 数据库操作
    const ret = await ArticleModel.getSearchList(ctx.query.title, ctx.query.pageNum, ctx.query.perPage)
    if (ret.retCode === 0) {
      ctx.status = 500
    }

    ctx.body = ret
  }
  /**
   * 获取文章详情
   */
  static async getArticle (ctx) {
    const id = parseInt(ctx.query.id)
    const ret = await ArticleModel.getArticle(id)
    if (ret.retCode === 0) {
      ctx.status = 500
    }
    ctx.body = ret
  }
  /**
   * 添加文章
   */
  static async add (ctx) {
    let req = ctx.request.body
    const ret = await ArticleModel.add(req)
    if (ret.retCode === 0) {
      ctx.status = 500
    } else {
      // 更新缓存
      const linkListData = await ArticleModel.getLink()
      cacheEvent.emit('updateLinkList', JSON.stringify(linkListData))
    }
    ctx.body = ret
  }
  /**
   * 删除文章
   */
  static async del (ctx) {
    await ArticleModel.del(ctx.query.id)
  }
  /**
   * 更新文章
   */
  static async update (ctx) {
    await ArticleModel.update(ctx.request.body)
    // 更新缓存
    const linkListData = await ArticleModel.getLink()
    cacheEvent.emit('updateLinkList', JSON.stringify(linkListData))
  }
}

cacheEvent.on('updateLinkList', data => {
  cache.update('linkList', data)
})

module.exports = ArticleListCtrl

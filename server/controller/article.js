const crypto = require('crypto')

const ArticleModel = require('../models/article')
const cache = require('../middleware/cache')
const cacheEvent = require('../middleware/event').cacheEvent
const errorMsg = require('../middleware/errorMsg')
const jwt = require('../middleware/jwt')

class ArticleListCtrl {
  /**
   * 获取最新文章列表
   */
  static async getLatest (ctx) {
    const page_num = parseInt(ctx.query.page_num)
    const per_page = parseInt(ctx.query.per_page)
    ctx.body = await ArticleModel.getLatest(page_num, per_page)
  }
  /**
   * 获取最好文章列表
   */
  static async getBest (ctx) {
    const page_num = parseInt(ctx.query.page_num)
    ctx.body = await ArticleModel.getBest(page_num)
  }
  /**
   * 获取所有文章列表
   */
  static async getAllList (ctx) {
    ctx.status = 200
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

    const {
      title, tag, page_num, per_page
    } = ctx.query

    let key = ''
    if (title) {
      key = {
        type: 'title',
        value: title
      }
    } else {
      key = {
        key: 'tag',
        value: tag
      }
    }

    const ret = await ArticleModel.getSearchList(key, page_num, per_page)

    ctx.body = ret
  }
  /**
   * 获取文章详情
   */
  static async getArticle (ctx) {
    const id = parseInt(ctx.query.id)
    const ret = await ArticleModel.getArticle(id)

    ctx.status = 500

    ctx.body = ret
  }
  /**
   * 添加文章
   */
  static async add (ctx) {
    let req = ctx.request.body

    // 带上user_id
    req = Object.assign({}, req, {
      user_id: ctx.payload.uid
    })

    const ret = await ArticleModel.add(req)

    // 更新缓存
    const linkListData = await ArticleModel.getLink()
    cacheEvent.emit('updateLinkList', JSON.stringify(linkListData))

    let access_token = ''
    await jwt.sign(ctx.payload)
      .then(token => {
        access_token = token
      })

    ctx.body = {
      ...ret,
      access_token
    }
  }
  /**
   * 删除文章
   */
  static async del (ctx) {

    await ArticleModel.del(ctx.query.id)

    let access_token = ''
    await jwt.sign(ctx.payload)
      .then(token => {
        access_token = token
      })

    ctx.body = {
      access_token
    }

  }
  /**
   * 更新文章
   */
  static async update (ctx) {

    await ArticleModel.update(ctx.request.body)

    // 更新缓存
    const linkListData = await ArticleModel.getLink()
    cacheEvent.emit('updateLinkList', JSON.stringify(linkListData))

    let access_token = ''
    await jwt.sign(ctx.payload)
      .then(token => {
        access_token = token
      })

    ctx.body = {
      access_token
    }

  }
}

cacheEvent.on('updateLinkList', data => {
  cache.update('linkList', data)
})

module.exports = ArticleListCtrl

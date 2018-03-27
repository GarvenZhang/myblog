const ArticleModel = require('../models/article')

class ArticleListCtrl {
  /**
   * 获取最新文章列表
   */
  static async getLatest (ctx) {
    ctx.body = await ArticleModel.getLatest(ctx.query.pageNum)
  }
  /**
   * 获取最好文章列表
   */
  static async getBest (ctx) {
    ctx.body = await ArticleModel.getBest(ctx.query.pageNum)
  }
  /**
   * 获取文章链接列表
   */
  static async getLink (ctx) {
    ctx.body = await ArticleModel.getLink()
  }
  /**
   * 获取文章详情
   */
  static async getArticle (ctx) {
    ctx.body = await ArticleModel.getArticle(ctx.query.id)
  }
  /**
   * 添加文章
   */
  static async add (ctx) {
    console.log(ctx.request)
    ctx.body = await ArticleModel.add(ctx.request.body)
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
  }
}

module.exports = ArticleListCtrl

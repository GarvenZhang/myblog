const CategoryModel = require('../models/category')

class CategoryCtrl {
  /**
   * 获取标签
   */
  static async get (ctx) {
    ctx.body = await CategoryModel.get(ctx.query.id)
  }
  /**
   * 删除标签
   */
  static async del (ctx) {
    ctx.body = await CategoryModel.del(ctx.query.id)
  }
  /**
   * 添加标签
   */
  static async add (ctx) {
    const {
      name
    } = ctx.request.body
    ctx.body = await CategoryCtrl.add(name)
  }
}

module.exports = CategoryCtrl

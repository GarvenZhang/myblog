const CategoryModel = require('../models/tag')

class CategoryCtrl {
  /**
   * 获取标签
   */
  static async get (ctx) {
    ctx.status = 200
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
    ctx.status =  201
    ctx.body = await CategoryModel.add(name)
  }
  
  /**
   * 更新标签
   */
  static async update (ctx) {
    
  }

}

module.exports = CategoryCtrl

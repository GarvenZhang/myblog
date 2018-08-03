const CategoryModel = require('../models/tag')
const jwt = require('../middleware/jwt')

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
   * 添加标签
   */
  static async add (ctx) {
    const {
      name
    } = ctx.request.body

    const ret = await CategoryModel.add(name)

    let access_token = ''
    await jwt.sign(ctx.payload)
      .then(token => {
        access_token = token
      })

    ctx.status =  201
    ctx.body = {
      ...ret,
      access_token
    }

  }
  
  /**
   * 更新标签
   */
  static async update (ctx) {
    
  }

}

module.exports = CategoryCtrl

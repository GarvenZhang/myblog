const LikedModel = require('../models/liked')
const jwt = require('../middleware/jwt')

class CommentCtrl {
  /**
   * 获取点赞
   */
  static async get (ctx) {

    let {
      comments_id, article_id, per_page, page_num
    } = ctx.query
    
    let target = {}
    if (comments_id) {
      target.name = 'comment_id'
      target.value = comments_id
    } else {
      target.name = 'article_id'
      target.value = article_id
    }

    ctx.body = await LikedModel.get(target, per_page, page_num)

  }

  /**
   * 删除点赞
   */
  static async del (ctx) {

    // 是否为本人的点赞

    await LikedModel.del(ctx.query.id)
    ctx.status = 204
  }

  /**
   * 添加点赞
   */
  static async add (ctx) {

    const {
      type, status, article_id, comment_id
    } = ctx.request.body

    let target = {}
    if (article_id) {
      target.name = 'article_id'
      target.value = article_id
    } else {
      target.name = 'comment_id'
      target.value = comment_id
    }

    const ret = await LikedModel.add(target, type, status, ctx.payload.uid)

    let access_token = ''
    await jwt.sign(ctx.payload)
      .then(token => {
        access_token = token
      })
    
    ctx.status = 200
    ctx.body = {
      ...ret,
      access_token
    }
  }

  /**
   * 更新点赞
   */
  static async update (ctx) {

    const {
      id, status
    } = ctx.request.body

    await LikedModel.update(id, status)

    let access_token = ''
    await jwt.sign(ctx.payload)
      .then(token => {
        access_token = token
      })

    ctx.status = 200
    ctx.body = {
      access_token
    }

  }

}

module.exports = CommentCtrl

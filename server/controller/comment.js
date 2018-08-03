const CommentModel = require('../models/comment')
const jwt = require('../middleware/jwt')

class CommentCtrl {
  /**
   * 获取评论
   */
  static async get (ctx) {

    const {
      article_id,
      per_page,
      page_num
    } = ctx.query

    ctx.body = await CommentModel.get(parseInt(article_id), parseInt(per_page), parseInt(page_num))

  }

  /**
   * 删除评论
   */
  static async del (ctx) {

    // 是否为本人的评论

    await CommentModel.del(ctx.query.id)
    ctx.status = 204
  }

  /**
   * 添加评论
   */
  static async add (ctx) {
    const {
      time, content, article_id, to_uid
    } = ctx.request.body

    const ret = await CommentModel.add(time, content, parseInt(article_id), parseInt(to_uid), parseInt(ctx.payload.uid))
    ctx.status =  201

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

}

module.exports = CommentCtrl

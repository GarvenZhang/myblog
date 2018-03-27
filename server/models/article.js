const sqlError = require('./modelError')

class ArticleModel {
  /**
   * 获取最新文章列表
   * @param {Number} pageNum - 页数
   * @return {Array}
   */
  static async getLatest (pageNum) {
    const sql = `SELECT * FROM Article ORDER BY pubtime DESC;`
    const [ret] = await global.db.execute(sql)
    return ret
  }
  /**
   * 获取最好文章列表
   * @param {Number} pageNum - 页数
   * @return {Array}
   */
  static async getBest (pageNum) {
    try {
      const sql = `SELECT * FROM Article ORDER BY likedNum DESC;`
      const [ret] = await global.db.execute(sql)
      return ret
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 获取文章链接列表
   * @return {Array}
   */
  static async getLink () {
    try {
      const sql = `SELECT id, title FROM Article;`
      const [ret] = await global.db.execute(sql)
      return ret
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 获取文章详情
   * @param {Number} id - 文章id
   * @return {Object}
   */
  static async getArticle (id) {
    try {
      const sql = `SELECT * FROM Article WHERE id = ${id};`
      const [ret] = await global.db.execute(sql)
      return ret[0]
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 添加文章
   * @param {Object} param - title, summary, content, pubtime, articleType_id, prevId, nextId
   * @return {Number}
   */
  static async add (param) {
    try {
      console.log(param)
      const [ret] = await global.db.execute(
        'INSERT INTO Article(title, summary, content, pubtime, articleType_id, prevId, nextId) VALUES(?, ?, ?, ?, ?, ?, ?);',
        [param.title, param.summary, param.content, param.pubtime, param.articleTypeId, param.prevId, param.nextId]
      )
      return ret.insertId
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 删除文章
   * @param {Number} id - 文章id
   */
  static async del (id) {
    try {
      const sql = `DELETE FROM Article WHERE id = ${id};`
      await global.db.execute(sql)
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 更新文章
   * @param {Object} param - title, summary, content, pubtime, articleType_id, prevId, nextId
   */
  static async update (param) {
    try {
      await global.db.execute(
        'UPDATE Article SET title = ?, summary = ?, content = ?, pubtime = ?, articleType_id = ?, prevId = ?, nextId = ?);',
        [param.title, param.summary, param.content, param.pubtime, param.articleTypeId, param.prevId, param.nextId]
      )
    } catch (e) {
      sqlError(e)
    }
  }
}

module.exports = ArticleModel

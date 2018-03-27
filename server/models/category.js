const sqlError = require('./modelError')

class CategoryModel {
  /**
   * 获取标签
   * @param {Number} id - 标签id
   * @return {Array}
   */
  static async get (id) {
    try {
      const sql = typeof id === 'undefined' ?
        `SELECT * FROM ArticleType;` :
        `SELECT * FROM ArticleType WHERE id = ${id}`
      const [ret] = await global.db.execute(sql)
      return ret
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 删除标签
   * @param {Number} id - 标签id
   * @param {Boolean}
   */
  static async del (id) {
    try {
      const sql = `DELETE FROM ArticleType WHERE id = ${id}`
      await global.db.execute(sql)
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 添加标签
   * @return {Boolean}
   */
  static async add (name) {
    try {
      const sql = `INSERT INTO ArticleType(name) VALUES(${name})`
      const [result] = await global.db.execute(sql)
      return result.insertId
    } catch (e) {
      sqlError(e)
    }
  }
}

module.exports = CategoryModel

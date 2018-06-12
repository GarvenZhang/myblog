const sqlError = require('./modelError')

class ArticleModel {
  /**
   * 获取最新文章列表
   * @param {Number} pageNum - 起始页数, 默认0
   * @param {Number} perPage - 每页数目, 默认10
   * @return {Array}
   */
  static async getLatest (pageNum = 0, perPage = 10) {
    const [[retNum]] = await global.db.execute('SELECT COUNT(*) AS totalCount FROM Article;')
    const sql = `SELECT id, title, cover, summary, pubtime FROM Article ORDER BY pubtime DESC LIMIT ${pageNum * perPage}, ${perPage};`
    const [data] = await global.db.execute(sql)
    return {
      retCode: 1,
      data,
      pageNum,
      perPage,
      totalCount: retNum.totalCount,
      isEndPage: pageNum * perPage + perPage >= retNum.totalCount
    }
  }
  /**
   * 获取最好文章列表
   * @param {Number} pageNum - 起始页数, 默认0
   * @param {Number} perPage - 每页数目, 默认10
   * @return {Array}
   */
  static async getBest (pageNum = 0, perPage = 10) {
    try {
      const [[retNum]] = await global.db.execute('SELECT COUNT(*) AS totalCount FROM Article;')
      const sql = `SELECT id, title, readNum, likedNum, pubtime FROM Article ORDER BY likedNum DESC LIMIT ${pageNum * perPage}, ${perPage};`
      const [data] = await global.db.execute(sql)
      return {
        retCode: 1,
        data,
        pageNum,
        perPage,
        totalCount: retNum.totalCount,
        isEndPage: pageNum * perPage + perPage >= retNum.totalCount
      }
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
      const sql = `SELECT id, title AS name FROM Article;`
      const [ret] = await global.db.execute(sql)
      return {
        retCode: 1,
        data: ret
      }
    } catch (e) {
      sqlError(e)
      return {
        retCode: 0
      }
    }
  }
  /**
   * 获取所有文章列表
   */
  static async getAllList () {
    try {
      const sql = `SELECT id, title, readNum, likedNum, commentNum, pubtime FROM Article;`
      let [data] = await global.db.execute(sql)
      return {
        retCode: 1,
        data,
        totalCount: data.length
      }
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 获取查询结果
   * @param {String} title - 文章标题
   * @param {Number} pageNum - 起始页数, 默认0
   * @param {Number} perPage - 每页数目, 默认10
   * @return {Array}
   */
  static async getSearchList (title, pageNum, perPage) {
    try {
      // 查询
      const sql = `SELECT id, title, readNum, likedNum, pubtime FROM Article WHERE title LIKE '%${title}%';`
      let [data] = await global.db.execute(sql)
      // 筛选
      let endNum = pageNum * perPage + perPage
      data = data
        .map(item => {
          return {
            ...item,
            index: item.title.indexOf(title)
          }
        })
        .sort((prev, next) => {
          return prev.index - next.index
        })
        .slice(pageNum * perPage, endNum >= data.length ? data.length : endNum)
      // 结果返回
      return {
        retCode: 1,
        data,
        pageNum,
        perPage,
        totalCount: data.length,
        isEndPage: endNum >= data.length
      }
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
      return Object.assign({}, {
        retCode: 1
      }, ret[0])
    } catch (e) {
      sqlError(e)
      return {
        retCode: 0
      }
    }
  }
  /**
   * 添加文章
   * @param {Object} param - title, summary, content, pubtime, articleType_id, prevId, nextId
   * @return {Number}
   */
  static async add (param) {
    try {
      const [ret] = await global.db.execute(
        'INSERT INTO Article(title, summary, content, pubtime, articleType_id, prevId, nextId, cover) VALUES(?, ?, ?, ?, ?, ?, ?, ?);',
        [param.title, param.summary, param.content, param.pubtime, param.articleTypeId, param.prevId, param.nextId, param.cover]
      )
      return {
        retCode: 1,
        id: ret.insertId
      }
    } catch (e) {
      sqlError(e)
      return {
        retCode: 0
      }
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

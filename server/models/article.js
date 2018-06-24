const sqlError = require('./modelError')

// === 查: === //
// === 1 检索: === //
// === 1.1 检索列: SELECT 列名1[, 列名2...] FROM 表名; === //
// === 1.2 检索所有列: SELECT * FROM 表名; === //
// === 1.3 检索不同列: SELECT DISTINCT 列名1[, 列名2...] FROM 表名; === //
// === 1.4 分页: SELECT 列名 FROM 表名 LIMIT 行数 OFFSET 开始位置; (简写: LIMIT 开始位置, 行数) === //
// === 2 排序: SELECT 列名1[, 列名2...] FROM 表名 ORDER BY 列名1[, 列名2...]; (先按照列名1排序再按照列名2排序) === //
// === 2.1 按列数: SELECT 列名1[, 列名2...] FROM 表名 ORDER BY 3, 4; (第三列，第四列) === //
// === 2.2 按方向: SELECT 列名1[, 列名2...]  FROM 表名 ORDER BY 列名1 DESC, 列名2; (列名1降序, 列名2默认升序) === //
// === 3 过滤: === //
// === 3.1 单个值: SELECT 列名1[, 列名2...] FROM 表名 WHERE 列名1 [限定符] 参数; === //
// === 3.1.a WHERE子句操作符: = | <> | != | < | <= | !< | > | >= | !> | BETWEEN | IS NULL  === //
// === 3.2 范围值: SELECT 列名1[, 列名2...] FROM 表名 WHERE 列名1 BETWEEN 1 AND 10; === //
// === 3.3 优先级: () > AND > OR  === //
// === 3.4 IN操作符: SELECT 列名1[, 列名2...] FROM 表名 WHERE 列名1 IN('001', '002'); 等同于 列名1 = '001' OR 列名1 = '002'; === //
// === 3.5 NOT操作符: SELECT 列名1[, 列名2...] FROM 表名 WHERE NOT 列名1 = '001' ; 等同于 列名1 <> '001' === //
// === 3.5 LINK操作符: 文本的匹配 === //
// === 3.5.a %: 表示任意字符出现任意字数 - WHERE 列名1 LINK 'Fins%'; === //
// === 3.5.b _: 表示任意字符出现一次 - WHERE 列名1 LINK 'F_Q' === //

// === 增: === //
// === 1 普通插入: INSERT INTO 表名(列名1, 列名2, ...) VALUES(列名1值, 列名2值, ...); === //
// === 2 插入检索出的数据: INSERT INTO 表名(列名1, 列名2, ...) SELECT 列名1, 列名2, ... FROM 另表名 === //
// === 3 复制表(先创建后复制): SELECT * INTO 目标表名 FROM 参考表名;  === //

// === 改: === //
// === 1 普通更新: UPDATE 表名 SET 列名1 = 值, 列名2 = 值, ... WHERE ... === //

// === 删: === //
// === 1 普通删除: DELETE FROM 表名 WHERE ... === //

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

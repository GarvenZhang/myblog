const sqlError = require('./modelError')

/**
 * 获取标签
 * @param {Number} id - 标签id
 * @return {Array}
 */
async function get (id) {
  try {
    const sql = typeof id === 'undefined'
      ? `SELECT id, name, (SELECT COUNT(*) FROM Article WHERE Article.category_id = Category.id) AS count FROM Category;`
      : `SELECT id, name, (SELECT COUNT(*) FROM Article WHERE Article.category_id = ${id}) AS count FROM Category WHERE id = ${id};`
    const [data] = await global.db.execute(sql)
    return {
      data
    }
  } catch (e) {
    sqlError(e)
  }
}

/**
 * 删除标签
 * @param {Number} id - 标签id
 * @param {Boolean}
 */
async function del (id) {
  try {
    const sql = `DELETE FROM Category WHERE id = ${id}`
    await global.db.execute(sql)
  } catch (e) {
    sqlError(e)
  }
}

/**
 * 添加标签
 * @return {Boolean}
 */
async function add (name) {
  try {
    const sql = `INSERT INTO Category(name) VALUES(${name})`
    const [result] = await global.db.execute(sql)
    return result.insertId
  } catch (e) {
    sqlError(e)
  }
}

module.exports = {
  get,
  del,
  add
}

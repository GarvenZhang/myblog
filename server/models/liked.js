const sqlError = require('./modelError')

/**
 * 获取点赞
 * @param {Object} target - 筛选信息
 * @param {Number} per_page - 每页的点赞数
 * @param {Number} page_num - 下一页的页数
 * @return {Array}
 */
async function get (target, per_page = 0, page_num = 10) {
  try {
    const sql = target.name === 'article_id' ?
      `SELECT id, article_id, user_id, status FROM Liked WHERE article_id = ${target.value} AND type = 0;` :
      `SELECT id, comment_id, user_id, status FROM Liked WHERE comment_id IN (${target.value}) AND type = 1;`

    const [data] = await global.db.execute(sql)

    // 整理
    if (target.name === 'comment_id') {

      let newData = {}
      data.forEach(item => {

        if (!newData[item.comment_id]) {
          newData[item.comment_id] = []
        }

        newData[item.comment_id].push({
          id: item.id,
          user_id: item.user_id,
          status: item.status
        })

      })

      return {
        data: newData
      }
    }

    return {
      liked: data
    }

  } catch (e) {
    sqlError(e)
  }
}

/**
 * 删除点赞
 * @param {Number} id - 点赞id
 * @param {Boolean}
 */
async function del (id) {
  try {
    const sql = `DELETE FROM Comment WHERE id = ${id}`
    await global.db.execute(sql)
  } catch (e) {
    sqlError(e)
  }
}

/**
 * 添加点赞
 * @return {Boolean}
 */
async function add (target, type, status, user_id) {
  try {

    const sql = `INSERT INTO Liked(type, status, ${target.name}, user_id) VALUES(${type}, ${status}, ${target.value}, ${user_id});`

    const [result] = await global.db.execute(sql)
    return {
      id: result.insertId,
      user_id
    }
  } catch (e) {
    sqlError(e)
  }
}

/**
 * 更新点赞
 */
async function update (id, status) {
  try {

    const sql = `UPDATE Liked SET status = ${status} WHERE id = ${id};`

    await global.db.execute(sql)

  } catch (e) {
    sqlError(e)
  }
}

module.exports = {
  get,
  del,
  add,
  update
}

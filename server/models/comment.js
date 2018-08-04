const sqlError = require('./modelError')

// === 返回数据设计问题: === //
/*

{
  "data":[
    {
      "id":1,
      "time":"2018-09-09",
      "content":"xxxx",
      "article_id":20,
      "to":{
        "id":98,
        "name":"garven"
      },
      "from":{
        "id":99,
        "name":"fei"
      },
      "liked_num":100
    }
  ],
  "page_num":20,
  "per_page":10,
  "total_count":10,
  "is_end_page":false
}

本来的写法:

`SELECT Comment.id, Comment.time, Comment.content, Comment.article_id, CONCAT('{ id: ', User.id, ', name: ', User.name, ' }') AS from, CONCAT('{ id: ', User.id, ', name: ', User.name, ' }') AS to, COUNT(Like.comment_id) AS liked_num FROM Comment, Like, User
  WHERE Comment.article_id = '${article_id}' AND Like.status = 1 AND Like.comment_id = Comment.id'; `

*/
// === 1 反思: === //
// === 1.1 若是按照以上的设计, to 和 from 的数据结构是很难通过原生的mysql写的, 需要借助 ORM === //
// === 1.2 liked_num 属于计算的语句, 不应该跟着查询一起写, 不然会很好耗费 CPU , 应该单独出来成请求, 比如等所有评论都渲染完毕后, 再单独获取每一个评论的点赞数, 如此页的评论数有10条, 则将这十条的id传过去, 获得各自的点赞数 === //
// === 1.3 关于数据库中 CONCAT(), MAX(), 这些需要计算的功能, 应该由后端程序来完成, 数据库应该只完成查的工作, 这样的话才能在高并发的时候减少CPU的运算量 === //

/**
 * 获取评论
 * @param {Number} article_id - 文章id
 * @param {Number} per_page - 每页的评论数
 * @param {Number} page_num - 下一页的页数
 * @return {Array}
 */
async function get (article_id, per_page = 0, page_num = 10) {
  try {
    const sql = `
      SELECT
        Cm.id,
        Cm.time,
        Cm.content,
        Ur1.id AS from_uid,
        Ur1. NAME AS from_name,
        Ur1. avatar_url AS from_avatar_url,
        Ur2.id AS to_uid,
        Ur2. NAME AS to_name
      FROM
        Comment Cm
      LEFT JOIN Liked Lk ON Cm.article_id = '${article_id}'
      AND Lk.comment_id = Cm.id
      LEFT JOIN USER Ur1 ON Cm.article_id = '${article_id}'
      AND Cm.from_uid = Ur1.id
      LEFT JOIN USER Ur2 ON Cm.article_id = '${article_id}'
      AND Cm.to_uid = Ur2.id
      WHERE
        Cm.article_id = '${article_id}'
      GROUP BY
        Cm.id DESC
      LIMIT ${page_num * per_page}, ${per_page};
    `

    const [[retNum]] = await global.db.execute('SELECT COUNT(*) AS total_count FROM Comment;')
    let [data] = await global.db.execute(sql)

    data = data.map(item => {
      return {
        ...item,
        liked: []
      }
    })

    return {
      data,
      page_num,
      per_page,
      total_count: retNum.total_count,
      is_end_page: page_num * per_page + per_page >= retNum.total_count
    }
  } catch (e) {
    sqlError(e)
  }
}

/**
 * 删除评论
 * @param {Number} id - 评论id
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
 * 添加评论
 * @return {Boolean}
 */
async function add (time, content, article_id, to_uid, from_uid) {
  try {

    const addSql = `INSERT INTO Comment(time, content, article_id, ${to_uid === 0 ? '' : 'to_uid,'} from_uid) VALUES('${time}', '${content}', ${article_id}, ${to_uid === 0 ? '' : to_uid + ','} ${from_uid});`

    const [addResult] = await global.db.execute(addSql)

    const querySql = `
      SELECT
        Cm.id,
        Cm.time,
        Cm.content,
        Ur1.id AS from_uid,
        Ur1. NAME AS from_name,
        Ur1. avatar_url AS from_avatar_url,
        Ur2.id AS to_uid,
        Ur2. NAME AS to_name
      FROM
        Comment Cm
      LEFT JOIN Liked Lk ON Lk.comment_id = Cm.id
      LEFT JOIN USER Ur1 ON Cm.from_uid = Ur1.id
      LEFT JOIN USER Ur2 ON Cm.to_uid = Ur2.id
      WHERE
        Cm.id = '${addResult.insertId}'
      GROUP BY
        Cm.id;
    `

    const [queryResult] = await global.db.execute(querySql)


    return {
      data: {
        ...queryResult[0],
        liked: []
      }
    }

  } catch (e) {
    sqlError(e)
  }
}

module.exports = {
  get,
  del,
  add
}

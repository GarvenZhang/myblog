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


// === 4.6 使用带聚集函数的联结 === //
// === 4.6.a COUNT(): 行数 === //
// === 4.6.b 例子: === //
/*

SELECT Customers.cust_id,
       COUNT(Orders.order_num) AS num_ord
FROM Customers INNER JOIN Orders
 ON Customers.cust_id = Orders.cust_id
GROUP BY Customers.cust_id;

COUNT(DISTINCT XXX) : 不重复的
COUNT([ALL] XXX): 所有

*/
// === 4.6.c SUM() / AVG() / MAX() / MIN() === //

// === 5 分组: === //
// === 5.1 普通分组: === //
// === 5.1.a 例子: GROUP BY子句指示DBMS按vend_id排序并分组数据。这就会对每个vend_id而不是整个表计算num_prods一次 === //
/*

SELECT vend_id, COUNT(*) AS num_prods
FROM Products
GROUP BY vend_id;

*/
// === 5.2 过滤分组: 规定包括哪些分组，排除哪些分组 === //
// === 5.2.a 例子: 列出具有两个以上产品且其价格大于等于4的供应商 === //
/*

SELECT vend_id, COUNT(*) AS num_prods
FROM Products
WHERE prod_price >= 4
GROUP BY vend_id
HAVING COUNT(*) >= 2;

*/
// === 5.2.b HAVING 与 WHERE 区别: WHERE过滤行，而HAVING过滤分组 === //

// === 6 汇总数据: === //
// === 6.1 聚集函数: === //
// === > AVG(): 返回某列的平均值 === //
// === > COUNT(): 返回某列的函数 === //
// === > MAX(): 返回某列的最大值 === //
// === > MIN(): 返回某列的最小值 === //
// === > SUM(): 返回某列值之和 === //

// === 7 计算字段: === //
// === 7.1 CONCAT(参数1, 参数2, ...): 参数可以使列名, 字符, 数字 === //
// === 7.2 例子: === //
/*

SELECT CONCAT(vend_name, ' (', vend_country, ') ') AS vend_title
FROM Vendors
ORDER BY vend_name;

*/

// === 8 函数处理: === //
// === 8.1 文本处理函数: === //
// === > LEFT(str, length): 返回字符串左边的字符 === //
// === > RIGHT(str, length): 返回字符串右边的字符 === //
// === > LENGTH(str): 返回字符串的长度 === //
// === > LOWER(str): 将字符串转换为小写 === //
// === > TRIM(): 去掉字符串左右两边的空格 (也有 LTRIM() 和 RTRIM()) === //
// === > SUBSTRING_INDEX(str, delim[分割符], count[计数 如果为正数，则从左开始数，如果为负数，则从右开始数]): 分割字符串 === //
// === > REPLACE(str, from_str, to_str): 删除或替换字符 === //
// === 8.2 日期和时间处理函数: === //
/*
-- 获取当前系统日期
SET @date = CURDATE();
SELECT @date;
-- 获取年份
SELECT YEAR(@date);
-- 获取月份
SELECT MONTH(@date);
-- 获取天数
SELECT DAY(@date);
-- 获取完整时间
SELECT DATE(@date);

-- 获取当前系统时间
SET @TIME = CURTIME();
SELECT @TIME;
-- 获取小时数
SELECT HOUR(@TIME);
-- 获取分钟数
SELECT MINUTE(@TIME);
-- 获取秒数
SELECT SECOND(@TIME);
*/
// === 8.3 数值处理函数: === //
/*
ABS() 返回一个数的绝对值
COS()	返回一个角度的余弦
EXP()	返回一个数的指数值
PI()	返回圆周率
SIN()	返回一个角度的正弦
SQRT()	返回一个数的平方根
TAN()	返 回一个角度的正切
*/

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
   * @param {Number} page_num - 起始页数, 默认0
   * @param {Number} per_page - 每页数目, 默认10
   * @return {Array}
   */
  static async getLatest (page_num = 0, per_page = 10) {
    const [[retNum]] = await global.db.execute('SELECT COUNT(*) AS total_count FROM Article;')
    const sql = `SELECT Article.id, title, cover_url, summary, pubtime, Category.name AS tag FROM Article, Category WHERE Article.category_id = Category.id ORDER BY pubtime DESC LIMIT ${page_num * per_page}, ${per_page};`
    const [data] = await global.db.execute(sql)
    return {
      data,
      page_num,
      per_page,
      total_count: retNum.total_count,
      is_end_page: page_num * per_page + per_page >= retNum.total_count
    }
  }
  /**
   * 获取最好文章列表
   * @param {Number} page_num - 起始页数, 默认0
   * @param {Number} per_page - 每页数目, 默认10
   * @return {Array}
   */
  static async getBest (page_num = 0, per_page = 10) {
    try {

      const [[retNum]] = await global.db.execute('SELECT COUNT(*) AS total_count FROM Article;')

      const sql = `
        SELECT
          AT .id,
          AT .title,
          AT .read_num,
          AT .pubtime,
          COUNT(DISTINCT Lk.id) AS liked_num,
	        COUNT(DISTINCT Cm.id) AS comment_num
        FROM
          Article AT
        LEFT JOIN Liked Lk ON Lk.article_id = AT.id AND Lk.status = 1 AND Lk.type = 0
        LEFT JOIN COMMENT Cm ON Cm.article_id = AT .id
        GROUP BY
          AT .id DESC
        LIMIT ${page_num * per_page}, ${per_page};
      `

      let [data] = await global.db.execute(sql)

      console.log(data)
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
   * 获取文章链接列表
   * @return {Array}
   */
  static async getLink () {
    try {
      const sql = `SELECT id, title AS name FROM Article;`
      const [ret] = await global.db.execute(sql)
      return {
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
      const sql = `
      SELECT
          AT .id,
          AT .title,
          AT .read_num,
          AT .pubtime,
          COUNT(DISTINCT Lk.id) AS liked_num,
	        COUNT(DISTINCT Cm.id) AS comment_num
        FROM
          Article AT
        LEFT JOIN Liked Lk ON Lk.article_id = AT.id AND Lk.status = 1 AND Lk.type = 0
        LEFT JOIN COMMENT Cm ON Cm.article_id = AT .id
        GROUP BY
          AT .id DESC;
      `
      let [data] = await global.db.execute(sql)
      return {
        data,
        total_count: data.length
      }
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 获取查询结果
   * @param {Object} key - 类型
   * @param {Number} page_num - 起始页数, 默认0
   * @param {Number} per_page - 每页数目, 默认10
   * @return {Array}
   */
  static async getSearchList (key, page_num, per_page) {
    try {

      let sql = ''

      switch (key.type) {

        case 'title':
          sql = `SELECT id, title, pubtime, summary FROM Article WHERE title LIKE '%${key.value}%';`
          break

        case 'tag':
          sql = `SELECT Article.id, title, pubtime, summary, Category.name AS tag FROM Article, Category WHERE Category.name = '${key.value}' AND Article.category_id = Category.id;`
          break
      }

      // 查询
      let [data] = await global.db.execute(sql)
      // 筛选
      let endNum = page_num * per_page + per_page
      data = data
        .map(item => {
          return {
            ...item,
            index: item.title.indexOf(key.value)
          }
        })
        .sort((prev, next) => {
          return prev.index - next.index
        })
        .slice(page_num * per_page, endNum >= data.length ? data.length : endNum)
      
      // 结果返回
      return {
        data,
        page_num,
        per_page,
        total_count: data.length,
        is_end_page: endNum >= data.length
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

      // 先增加一次浏览数
      await global.db.execute(`UPDATE Article SET read_num = read_num + 1 WHERE id = ${id};`)

      // 查询
      let sql = `
        SELECT
          AT .id,
          AT .title,
          AT .read_num,
          AT .pubtime,
          AT .summary,
          AT .content,
          AT .category_id,
          AT .prev_id,
          AT1.title AS prev_title,
          AT .next_id,
          AT2.title AS next_title,
          COUNT(Cm.article_id) AS comment_num
        FROM
          Article AT
        LEFT JOIN COMMENT Cm ON Cm.article_id = AT .id
        LEFT JOIN Article AT1 ON AT1.id = AT .prev_id
        LEFT JOIN Article AT2 ON AT2.id = AT .next_id
        WHERE AT .id = ${id}
        GROUP BY
          AT .id DESC;
      `
      const [ret] = await global.db.execute(sql)
      return ret[0]
    } catch (e) {
      sqlError(e)
    }
  }
  /**
   * 添加文章
   * @param {Object} param - title, summary, content, pubtime, category_id, prev_id, next_id
   * @return {Number}
   */
  static async add (param) {
    try {
      console.log(param)
      const [ret] = await global.db.execute(
        'INSERT INTO Article(title, summary, content, pubtime, category_id, prev_id, next_id, cover_url, user_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [param.title, param.summary, param.content, param.pubtime, param.category_id, param.prev_id, param.next_id, param.cover_url, param.user_id]
      )
      return {
        id: ret.insertId
      }
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
   * @param {Object} param - title, summary, content, pubtime, category_id, prev_id, next_id
   */
  static async update (param) {
    try {
      await global.db.execute(
        'UPDATE Article SET title = ?, summary = ?, content = ?, pubtime = ?, category_id = ?, prev_id = ?, next_id = ?);',
        [param.title, param.summary, param.content, param.pubtime, param.article_type_id, param.prev_id, param.next_id]
      )
    } catch (e) {
      sqlError(e)
    }
  }
}

module.exports = ArticleModel

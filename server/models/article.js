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

// === 4 联结: 联结两个表实际是将第一个表的每一行与第二个表的每一行配对, WHERE子句作为过滤条件, 只包含那些匹配给定条件的行 === //
// === 4.1 等值联结: 表之间的相等测试 === //
// === 4.1.a 语法: SELECT 列名1, 列名2, ... FROM 表名A, 表名B WHERE 表名A.列名1 = 表名B.列名1 === //
// === 4.2 内联结: 也是等值联结, 语法不同而已 === //
// === 4.2.a 语法: SELECT 列名1, 列名2, ... FROM 表名A INNER JOIN 表名B ON 表名A.列名1 = 表名B.列名1 === //
// === 4.3 使用表别名: === //
// === 4.3.a 语法: SELECT 列名1, 列名2, ... FROM 表名A AS 表名A别名, 表名B AS 表名B别名 WHERE ... === //
// === 4.3.b 注意: 表别名只在查询执行中使用。与列别名不一样，表别名不返回到客户端 === //
// === 4.4 自联结: === //
// === 4.4.a 子查询改为自联结: === //
/*
// 子查询:
SELECT cust_name, cust_contact
FROM Customers
WHERE cust_id IN (SELECT cust_id
                  FROM Orders
                  WHERE order_num IN (SELECT order_num
                                      FROM OrderItems
                                      WHERE prod_id = 'RGAN01'));

联结:
SELECT cust_name, cust_contact
FROM Customers, Orders, OrderItems
WHERE Customers.cust_id = Orders.cust_id
 AND OrderItems.order_num = Orders.order_num
 AND prod_id = 'RGAN01';
*/
// === 4.5 外联结: 联结包含了那些在相关表中没有关联行的行 === //
// === 4.5.a 类型: === //
// === > 左外联结(LEFT): OUTER JOIN左边的表 === //
// === > 右外联结(RIGHT): OUTER JOIN右边的表 === //
// === 4.5.b 例子: 要检索包括没有订单顾客在内的所有顾客 === //
/*

SELECT Customers.cust_id, Orders.order_num
FROM Customers LEFT OUTER JOIN Orders
 ON Customers.cust_id = Orders.cust_id;

*/
// === 4.6 使用带聚集函数的联结 === //
// === 4.6.a COUNT(): 行数 === //
// === 4.6.b 例子: === //
/*

SELECT Customers.cust_id,
       COUNT(Orders.order_num) AS num_ord
FROM Customers INNER JOIN Orders
 ON Customers.cust_id = Orders.cust_id
GROUP BY Customers.cust_id;

*/

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
   * @param {Number} pageNum - 起始页数, 默认0
   * @param {Number} perPage - 每页数目, 默认10
   * @return {Array}
   */
  static async getLatest (pageNum = 0, perPage = 10) {
    const [[retNum]] = await global.db.execute('SELECT COUNT(*) AS totalCount FROM Article;')
    const sql = `SELECT id, title, cover, summary, pubtime FROM Article ORDER BY pubtime DESC LIMIT ${pageNum * perPage}, ${perPage};`
    const [data] = await global.db.execute(sql)
    return {
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
      const [ret] = await global.db.execute(
        'INSERT INTO Article(title, summary, content, pubtime, articleType_id, prevId, nextId, cover) VALUES(?, ?, ?, ?, ?, ?, ?, ?);',
        [param.title, param.summary, param.content, param.pubtime, param.articleTypeId, param.prevId, param.nextId, param.cover]
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

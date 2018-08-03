const sqlError = require('./modelError')

// === class的静态方法: 加上 static 的关键字 === //
// === 1 挂载在类而非原型上，因此通过类来访问，可与原型上方法重名 === //
// === 2 父类的静态方法可被继承, 也可在子类中用super来调用 === //

class UserModel {

  static async login (account) {
    try {
      const sql = `SELECT * FROM User WHERE account = '${account}';`
      const [data] = await global.db.execute(sql)
      return {
        data: data[0]
      }
    } catch (e) {
      sqlError(e)
    }
  }

  static async updatePwd (id, password, salt) {
    try {
      const sql = `UPDATE User SET password = '${password}', salt = '${salt}' WHERE id = ${id};`
      await global.db.execute(sql)
    } catch (e) {
      sqlError(e)
    }
  }

  static async add (github_id, avatar_url, github_url, email, name, role) {
    try {

      // 查看有没有
      let sql = `SELECT id, account, name, resume_url, address, wechat, github_url, phone, avatar_url, github_id, role, email FROM User WHERE github_id = '${github_id}';`
      let data = await global.db.execute(sql)
      data = data[0]

      if (data.length !== 0) {
        return data[0]
      }

      // === sql语句中若为 字符类型 一定要要把 值 用引号括起来, 不然就会表示为一个变量; 然后出现一些例如 Error: Malformed communication packet. 的异常, 搞死人!!=== //

      // 没有则插入
      data = await global.db.execute(
        `INSERT INTO User(github_id, avatar_url, github_url, email, name, role) VALUES('${github_id}', '${avatar_url}', '${github_url}', '${email}', '${name}', ${role});`
      )
      data = data[0]

      return {
        id: data.insertId
      }

    } catch (e) {
      sqlError(e)
    }
  }

  static async get (id, isDetail) {

    try {

      let data
      if (isDetail === 'true') {
        [data] = await global.db.execute(`SELECT id, account, name, github_url, resume_url, avatar_url, address, wechat, github_url, phone, email, role FROM User WHERE id = '${id}';`)
      } else {
        [data] = await global.db.execute(`SELECT id, name, github_url, avatar_url, email, role FROM User WHERE id = '${id}';`)
      }
      return {
        data: data[0]
      }


    } catch (e) {
      sqlError(e)
    }

  }

  static async update (params, uid) {

    try {
      let sql = `UPDATE User SET `

      let isPlainObj = true
      for (let key in params) {
        sql += `${key} = '${params[key]}', `
        isPlainObj && (isPlainObj = false)
      }
      
      if (!isPlainObj) {
        sql = sql.slice(0, sql.length - 2)
      }

      sql += ` WHERE id = ${uid};`

      await global.db.execute(sql)

    } catch (e) {
      sqlError(e)
    }

  }

}

module.exports = UserModel

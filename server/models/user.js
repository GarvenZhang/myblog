const sqlError = require('./modelError')

// === class的静态方法: 加上 static 的关键字 === //
// === 1 挂载在类而非原型上，因此通过类来访问，可与原型上方法重名 === //
// === 2 父类的静态方法可被继承, 也可在子类中用super来调用 === //

class UserModel {
  static async login (account) {
    try {
      const sql = `SELECT * FROM Blogger WHERE account = '${account}';`
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
      const sql = `UPDATE Blogger SET password = '${password}', salt = '${salt}' WHERE id = ${id};`
      await global.db.execute(sql)

    } catch (e) {
      sqlError(e)
    }
  }
}

module.exports = UserModel

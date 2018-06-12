const sqlError = require('./modelError')

class UserModel {
  static async login (account) {
    try {
      const sql = `SELECT * FROM Blogger WHERE account = '${account}';`
      const [data] = await global.db.execute(sql)
      return {
        retCode: 1,
        data: data[0]
      }
    } catch (e) {
      sqlError(e)
      return {
        retCode: 0,
        msg: 500
      }
    }
  }

  static async updatePwd (id, password, salt) {
    try {
      const sql = `UPDATE Blogger SET password = '${password}', salt = '${salt}' WHERE id = ${id};`
      await global.db.execute(sql)
      return {
        retCode: 1
      }
    } catch (e) {
      sqlError(e)
      return {
        retCode: 0,
        msg: 500
      }
    }
  }
}

module.exports = UserModel

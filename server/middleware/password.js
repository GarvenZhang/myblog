const crypto = require('crypto')
const config = require('../auth/config')

let password = {}

/**
 * md5加密
 * @param {String} str - 字符
 * @return {String}
 */
const md5 = str => {
  const md5Hash = crypto.createHash('md5')
  md5Hash.update(str)
  return md5Hash.digest('hex')
}

/**
 * 获取盐 - 实质上就是随机字符串
 * @return {String}
 */
password.getSalt = () => {
  return md5(Math.random() * 999999 + '' + new Date().getTime())
}

/**
 * 加密密码
 * @param {String} salt - 盐
 * @param {String} password - 密码
 * @return {String}
 */
password.encryptPassword = (salt, password) => {
  return md5(salt + config.AUTH.SUBTOKEN1 + password + config.AUTH.SUBTOKEN2)
}

module.exports = password

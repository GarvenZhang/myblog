const crypto = require('crypto')
const config = require('../../config')

let password = {}

const md5 = str => {
  const md5Hash = crypto.createHash('md5')
  md5Hash.update(str)
  return md5Hash.digest('hex')
}

password.getSalt = () => {
  return md5(Math.random() * 999999 + '' + new Date().getTime())
}

password.encryptPassword = (salt, password) => {
  return md5(salt + config.auth.subToken01 + password + config.auth.subToken02)
}

module.exports = password

const jsonwebtoken = require('jsonwebtoken')
const config = require('../auth/config')

const AUTH = config.AUTH

const options = {
  algorithm: AUTH.ALGORITHM,
  expiresIn: '7d'
}

// 自己封装的jwt
let jwt = {}
module.exports = jwt

jwt.sign = (payload) =>
  new Promise((resolve, reject) =>
    jsonwebtoken.sign(payload, AUTH.JWT_SECRET, options, (err, token) => {
      err ? reject(err) : resolve(token)
    }))

jwt.verify = (token) =>
  new Promise((resolve, reject) =>
    jsonwebtoken.verify(token, AUTH.JWT_SECRET, options, (err, decoded) => err ? reject(err) : resolve(decoded)))






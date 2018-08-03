const axios = require('axios')
const querystring = require('querystring')
const jwt = require('jsonwebtoken')
const md5 = require('js-md5')

const config = require('./config')
const commonConfig = require('../../config')
const userModel = require('../models/user')
const sso = require('../views/server-render').sso

const GITHUB = config.GITHUB
const ISDEV = commonConfig.ISDEV

module.exports = async function (ctx, next) {

  const postData = querystring.stringify({
    code: ctx.query.code,
    client_id: GITHUB.CLIENT_ID,
    client_secret: GITHUB.CLIENT_SECRET
  })

  // 若出现 Error: getaddrinfo ENOTFOUND api.github.com api.github.com:443 , 是网速问题
  await axios.post(GITHUB.TOKEN_URL, postData)
    .then(res => axios.get(`${GITHUB.USER_URL}?access_token=${querystring.parse(res.data).access_token}`))
    .then(async res => {

      const data = res.data

      // 检查id若存在, 则查
      // 若不存在, 在增
      // ...
      let ret = await userModel.add(data.id, data.avatar_url, data.html_url, data.email, data.name, 0)

      const AUTH = config.AUTH

      // 建立全局会话
      const sid = config.cryptoSign(md5, ret.id)
      ctx.redis.set(AUTH.SESSION_PREFIX + sid, '1')

      const playload = {
        uid: ret.id,
        sid,
        role: 0,
        expires: Date.now() + AUTH.MAXAGE,
      }

      const access_token = jwt.sign(playload, AUTH.JWT_SECRET, {
        algorithm: AUTH.ALGORITHM,
        expiresIn: AUTH.MAXAGE
      })

      // ctx.cookies.set('access_token', access_token, {
      //   expires: new Date(Date.now() + 60 * 60 * 2 * 1000),
      //   httpOnly: false,
      //   domain: commonConfig.COOKIE_DOMAIN,
      //   sameSite: 'strict',
      //   secure: !ISDEV
      // })

      let redirect_url = ctx.query.from + `&access_token=${access_token}`
      // if (/^article-(\d+)$/.prod(redirect_url)) {
      //   redirect_url = commonConfig.INDEX_DOMAIN + '/' + redirect_url.replace(/-/, '/')
      // } else if (redirect_url === 'admin') {
      //   redirect_url = commonConfig.CMS_DOMAIN
      // }

      ctx.redirect(redirect_url)


    })

}

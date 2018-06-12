const md5 = require('js-md5')

const UserModel = require('../models/user')
const config = require('../../config')
const pwd = require('../middleware/password')
const jwt = require('jsonwebtoken')
const validReferer = require('../middleware/referer')
const captcha = require('../middleware/captcha')

class UserCtrl {
  static async login (ctx) {
    // referer验证
    const referer = ctx.request.headers.referer
    if (validReferer(ctx.url).test(referer)) {
      ctx.status = 403
      ctx.body = {
        retCode: 0,
        msg: '非法请求'
      }
      return
    }

    const {
      account, password, csrf_token, captchaTxt, loginFailTimes
    } = ctx.request.body

    // csrf_token
    if (csrf_token !== ctx.cookies.get('csrf_token')) {
      ctx.status = 403
      ctx.body = {
        retCode: 0,
        msg: '非法请求'
      }
      return
    }

    // 图片验证码
    if (loginFailTimes >= 1) {
      const uid = ctx.cookies.get('uid')
      const sign = ctx.cookies.get('sign')
      if (sign !== config.cryptoSign(md5, uid)) {
        ctx.status = 403
        ctx.body = {
          retCode: 0,
          msg: '非法请求'
        }
      }
      if (!captcha.validCache(uid, captchaTxt)) {
        ctx.body = {
          retCode: 0,
          msg: '验证码错误'
        }
        return
      }
    }

    // 获取用户信息
    let ret = await UserModel.login(account)

    // 500
    if (ret.retCode === 0) {
      ctx.status = 500
      return
    }

    // 不存在
    if (!ret.data) {
      ctx.body = Object.assign({}, ret, {
        retCode: 0,
        msg: '不存在此用户！'
      })
      return
    }

    // salt升级及加密
    let salt = ret.data.salt
    if (!salt) {
      salt = pwd.getSalt()
      const cryptedPwd = config.cryptoPwd(md5, ret.data.account, ret.data.password)
      const newPassword = pwd.encryptPassword(salt, cryptedPwd)
      await UserModel.updatePwd(ret.data.id, newPassword, salt)
    }

    // 密码对比
    const encryptoPassword = pwd.encryptPassword(salt, password)
    if (encryptoPassword !== ret.data.password) {
      ctx.body = {
        retCode: 0,
        msg: '密码错误'
      }
      return
    }

    // uid
    ctx.cookies.set('uid', ret.data.id, {
      expires: new Date(Date.now() + 60 * 60 * 2 * 1000),
      httpOnly: false,
      sameSite: true
    })

    ctx.cookies.set('sign', config.cryptoSign(md5, ret.data.id), {
      expires: new Date(Date.now() + 60 * 60 * 2 * 1000),
      httpOnly: false,
      sameSite: true
    })

    // access_token
    ctx.body = {
      retCode: 1,
      access_token: jwt.sign({
        id: ret.data.id,
        account: account
      }, config.jwtSecret)
    }

    // 删除图片验证码记录
    if (captchaTxt) {
      captcha.delete(ret.data.id)
    }
  }

  static async getCaptcha (ctx) {
    // csrf_token
    if (ctx.query.csrf_token !== ctx.cookies.get('csrf_token')) {
      ctx.status = 403
      ctx.body = {
        retCode: 0,
        msg: '非法请求'
      }
      return
    }

    captcha.get(ctx)
  }
}

module.exports = UserCtrl

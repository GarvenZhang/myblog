const md5 = require('js-md5')

const UserModel = require('../models/user')
const config = require('../auth/config')
const pwd = require('../middleware/password')
const jwt = require('jsonwebtoken')
const captcha = require('../middleware/captcha')
const errorMsg = require('../middleware/errorMsg')

const ISDEV = process.env.NODE_ENV === 'development'

class UserCtrl {

  static async login (ctx) {

    const {
      account, password, captchaTxt, role
    } = ctx.request.body

    // 图片验证码
    if (!captcha.validCache(ctx, captchaTxt)) {
      ctx.status = 401
      ctx.body = {
        message: '验证码错误'
      }
      return
    }

    // 获取用户信息
    let ret = await UserModel.login(account)

    // 500
    if (!ret) {
      ctx.status = 500
      ctx.body = errorMsg(500)
      return
    }

    // 不存在
    if (!ret.data) {
      ctx.status = 404
      ctx.body = {
        message: '不存在此用户！'
      }
      return
    }

    // === 密码安全： === //
    // === 1 密码作用：证明你是你 === //
    /*
                           对比
    存储的密码           <-------->             输入的密码
    */
    // === 2 泄露渠道：数据库被偷, 服务器被入侵, 通讯被窃听, 内部人员泄露数据, 其它网站(撞库) === //
    // === 3 哈希算法特点:  === //
    // === 3.1 明文 - 密文 一一对应 === //
    // === 3.2 雪崩效应：差一个字符就会差别很大 === //
    // === 3.3 密文 - 明文 无法反推 === //
    // === 3.4 密文固定长度 === //
    // === 3.5 常见哈希算法：md5 / sha1 / sha256 === //
    // === 4 密码存储安全性 === //
    // === 4.1 严禁明文存储 - 防泄漏 === //
    // === 4.2 单向变换 - 防泄漏 === //
    // === 4.3 变化复杂度要求 - 防猜解， 比如`md5(sha256(sha1(明文))) = 密文` 哈希后再哈希 来防止 单向变换彩虹表 === //
    // === 4.4 密码复杂度要求 - 防猜解 === //
    // === 4.5 加盐 - 防猜解 === //
    // === 5 密码传输安全性 === //
    // === 5.1 https传输 === //
    // === 5.2 频率限制 - 防猜解 === //
    // === 5.3 前端加密 - 防撞库，即原始密码不被拿到，这样在其它网站若用了相同的账号和密码也有保障 === //
    // === 6 生物密码 === //
    // === 6.1 种类：指纹 / 虹膜 / 唇纹 / 脸部识别 === //
    // === 6.2 缺点：唯一性及不可变性，使得一旦被破解或者仿照则会发生永久失效 === //
    // === 7 总结 === //
    // === 7.1 前端需要hash加密，为的是即使在传输过程被监听到也只是拿到加密的密码，而非原码，而加密不可逆，虽然黑客可以照样拿着密码去登录此网站，但是等不了其它网站，因为加密方式不同 === //
    // === 7.2 而到了后端，需要先check下此账号是否存在，存在的话再将此账号用户的盐与传过来的密码进行加密，得出来的密码去与数据库中的密码对比是否一致，这样做的目的是增加复杂度，即使被盗库，黑客也拿不到原密码 === //
    // === 7.3 加密的目的只是**最大程度地不让黑客即使拿到密码也破解不出原密码 === //

    // salt升级及加密
    let salt = ret.data.salt
    if (!salt && role == 1) {
      salt = pwd.getSalt()
      // 加密密码，与前端加密密码算法一致
      const cryptedPwd = config.cryptoPwd(md5, ret.data.account, ret.data.password)
      // 密码加盐
      const newPassword = pwd.encryptPassword(salt, cryptedPwd)
      // 存进数据库
      await UserModel.updatePwd(ret.data.id, newPassword, salt)
    }

    // 密码对比
    const encryptoPassword = pwd.encryptPassword(salt, password)
    if (encryptoPassword !== ret.data.password) {
      ctx.status = 401
      ctx.body = {
        message: '密码错误'
      }
      return
    }

    // === csrf防御之sameSite: 定义cookie如何跨域发送 === //
    // === strict: 不发送 === //
    // === lax: get可以，post不行 === //

    // === Cookies:  === //
    // === 1 使用特性: 前端数据存储、后端通过http头(Set-Cookie)设置、请求时通过http头传给后端、前端可读写(document.cookie)、遵守同源策略 === //
    // === 2 代码特性: 域名, 有效期, 路径, httpOnly, sameSite, secure  === //
    // === 2.1 大小4KB左右 === //
    // === 2.2 需设置过期时间expires、max-age === //
    // === 2.3 只能读写更高的域: === //
    // === 2.3.a 若二级域名间想共享cookie, 则需要把cookie的domain设置为顶级的 === //
    // === 2.3.b cdn的域名和主域应分开，以减少流量损耗，因为静态资源一般不需要cookie === //
    // === 2.4 httpOnly不允许浏览器脚本读写； === //
    // === 2.5 secure只允许在https协议下传输cookie === //
    // === 2.6 samesite=strict不允许跨域传输cookie === //
    // === 3 作用: === //
    // === 3.1 存储个性化设置 === //
    // === 3.2 存储未登录时用户唯一标识 === //
    // === 3.3 存储已登录用户的凭证 === //
    // === 3.4 存储其它业务数据 === //
    // === 4 登录用户凭证: === //
    // === 4.1 步骤：前端提交用户名和密码 -> 后端验证用户名和密码 -> 后端通过http头设置用户凭证 -> 后续访问时后端先验证用户凭证 === //
    // === 4.2 方式: 用户ID: uid / 用户ID + 签名: uid + sign / sessionId 持久化 / token === //
    // === 5 Cookies 与 XSS的关系: XSS可能偷取Cookies：httpOnly === //
    // === 6 Cookies 与 CSRF的关系: === //
    // === 6.1 CSRF利用了用户Cookies === //
    // === 6.2 攻击站点无法读写Cookies === //
    // === 6.3 最好能阻止第三方使用Cookies === //
    // === 7 安全策略 === //
    // === 7.1 签名防篡改 === //
    // === 7.2 私有变换(加密) === //
    // === 7.3 httpOnly / sameSite / secure === //
    
    // uid + sign
    // 用了jwt后其实此处还未有用处 。。。
    ctx.cookies.set('uid', ret.data.id, {
      expires: new Date(Date.now() + 60 * 60 * 2 * 1000),
      httpOnly: true,
      sameSite: 'strict',
      secure: !ISDEV
    })
    ctx.cookies.set('sign', config.cryptoSign(md5, ret.data.id), {
      expires: new Date(Date.now() + 60 * 60 * 2 * 1000),
      httpOnly: true,
      sameSite: 'strict',
      secure: !ISDEV
    })

    // === jwt: 在用户与服务器之间传递安全可靠信息的规范 === //
    // === 1 组成: header.playload.signature === //
    // === 1.1 header: jwt的基本信息，如算法，类型等 === //
    // === 1.2 playload: 需要传递的信息，如uid === //
    // === 1.3 signature: header + playload + secret === //

    const AUTH = config.AUTH

    const playload = {
      uid: ret.data.id,
      role: ret.data.role
    }

    const access_token = jwt.sign(playload, AUTH.JWT_SECRET, {
      algorithm: AUTH.ALGORITHM,
      expiresIn: AUTH.EXPIRESIN
    })

    ctx.body = {
      access_token
    }

    // 删除图片验证码记录
    if (captchaTxt) {
      captcha.delete(ret.data.id)
    }
  }

  /**
   * 获取验证码
   */
  static async getCaptcha (ctx) {
    captcha.get(ctx)
  }
}

module.exports = UserCtrl

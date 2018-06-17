import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import md5 from 'js-md5'

import config from '../../../../config'
import { actions as UserActions } from '../../redux/reducers/User'
import { Cookies } from '../../../lib/index'

import style from './index.css'

const { login } = UserActions

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

// === CSRF: 跨站请求伪造(用户登录A网站，A网站确认身份，B网站带着用户身份请求A网站) === //
// === 1 危害: === //
// === 1.1 利用用户登录态：盗取用户资金(转账 / 消费) === //
// === 1.2 用户不知情：冒充用户发帖背锅 === //
// === 1.3 完成业务请求：损坏网站名誉 === //
// === 2 攻击特征及防御手段 === //
// === 2.1 B网站向A网站请求, 带A网站的cookie: samesite === //
// === 2.2 不访问A网站前端：在前端页面加入验证信息 - 验证码 / token === //
// === 2.3 referer为B网站: 验证referer === //
// === 3 验证码: ccap === //
// === 4 Cookies:  === //
// === 4.1 使用特性 === //
// === 4.1.a 前端数据存储 === //
// === 4.1.b 后端通过http头设置 === //
// === 4.1.c 请求时通过http头传给后端 === //
// === 4.1.d 前端可读写 === //
// === 4.1.e 遵守同源策略 === //
// === 4.2 代码特性: 域名, 有效期, 路径, httpOnly, sameSite, secure  === //
// === 4.3 作用 === //
// === 4.3.a 存储个性化设置 === //
// === 4.3.b 存储未登录时用户唯一标识 === //
// === 4.3.c 存储已登录用户的凭证 === //
// === 4.3.d 存储其它业务数据 === //
// === 4.4 登录用户凭证 === //
// === 4.4.a 步骤：前端提交用户名和密码 -> 后端验证用户名和密码 -> 后端通过http头设置用户凭证 -> 后续访问时后端先验证用户凭证 === //
// === 4.4.b 方式: 用户ID: uid / 用户ID + 签名: uid + sign / sessionId 持久化 / token === //
// === 4.5 Cookies 与 XSS的关系: XSS可能偷取Cookies：httpOnly === //
// === 4.6 Cookies 与 CSRF的关系: === //
// === 4.6.a CSRF利用了用户Cookies === //
// === 4.6.b 攻击站点无法读写Cookies === //
// === 4.6.c 最好能阻止第三方使用Cookies === //
// === 4.7 安全策略 === //
// === 4.7.a 签名放篡改 === //
// === 4.7.b 私有变换(加密) === //
// === 4.7.c httpOnly / sameSite / secure === //

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      csrf_token: '',
      captchaTxt: '',
      captchaId: ''
    }
    this.changeHandle = this.changeHandle.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
    this.clickHandle = this.clickHandle.bind(this)
  }

  componentWillMount () {
    if (window.localStorage.getItem('access_token')) {
      window.location = '/#/post'
    }
  }

  changeHandle (e) {
    const name = e.target.name
    const val = e.target.value
    this.setState({
      [name]: val
    })
  }

  clickHandle (e) {
    this.setState({
      captchaId: new Date().getTime()
    })
  }

  submitHandle (e) {
    e.preventDefault()
    // 加密
    const password = config.cryptoPwd(md5, this.state.account, this.state.password)
    // 请求
    const data = Object.assign({
      account: this.state.account,
      csrf_token: this.state.csrf_token,
      captchaTxt: this.state.captchaTxt,
      loginFailTimes: this.props.loginFailTimes
    }, {
      password
    })
    this.props.login(data)

    // 改变验证码id
    this.setState({
      captchaId: new Date().getTime()
    })
  }

  render () {
    return (
      <div className={style['login-page']}>
        <form className={style['login-form']} onSubmit={this.submitHandle}>
          <div className={style['field']}>
            <div className={`${style['field-inner']} ${style[this.props.tips ? '' : 'hide']}`} >
              tips: <span className={style['tips']}>{this.props.tips}</span>
            </div>
          </div>
          <div className={style['field']}>
            <div className={style['field-inner']}>
              <span className={style['title']}>账号：</span>
              <input
                type='text'
                name='account'
                value={this.state.account}
                onChange={this.changeHandle}
                className={style['inp-account']}
              />
            </div>
          </div>
          <div className={style['field']}>
            <div className={style['field-inner']}>
              <span className={style['title']}>密码：</span>
              <input
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.changeHandle}
                className={style['inp-password']}
              />
            </div>
          </div>
          <div className={style['field']}>
            {
              this.props.loginFailTimes >= 1
              ? <div className={`${style['field-inner']} ${style[this.props.loginFailTimes >= 1 ? '' : 'hide']}`}>
                <img
                  className={style['img']}
                  src={`/api/captcha?csrf_token=${this.state.csrf_token}&id=${this.state.captchaId}`}
                  alt='图片验证码'
                  onClick={this.clickHandle}
                  />
                <input
                  type='text'
                  name='captchaTxt'
                  value={this.state.captchaTxt}
                  onChange={this.changeHandle}
                  className={style['inp-captcah']}
                  />
              </div>
              : ''
            }
          </div>
          <div className={style['field']}>
            <div className={style['field-inner']}>
              <input type='hidden' value={this.state.csrf_token} />
              <input type='submit' className={style['btn-submit']} value='登录' />
            </div>
          </div>
        </form>
      </div>
    )
  }

  componentDidMount () {
    this.setState({
      csrf_token: Cookies.get('csrf_token')
    })
  }
}

function mapStateToProps (state) {
  return state.UserReducer
}

function mapDispatchToProps (dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

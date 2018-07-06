import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import md5 from 'js-md5'

import config from '../../../../config'
import { actions as UserActions } from '../../redux/User'
import Cookies from '../../../lib/cookie'

import style from './index.css'

const { login } = UserActions

// === CSRF: 跨站请求伪造(用户登录A网站，A网站确认身份，B网站带着用户身份请求A网站) === //
// === 1 攻击过程: 用户登录A网站, A网站后台把凭证放在cookie中；用户打开了B网站, B网站隐藏一个iframe, iframe中是登录A网站后的一个表单页面, 通过js代码submit表单达到冒充身份伪造请求的目的 === //
// === 2 攻击特征及防御手段 === //
// === 2.1 B网站向A网站请求, 带A网站的cookie: samesite === //
// === 2.2 不访问A网站前端: 由于同源策略也拿不到A网站的节点内容和cookie, 在前端页面加入验证信息 - 验证码 / token === //
// === 2.3 referer为B网站: 验证referer === //
// === 3 防御手段: === //
// === 3.1 验证码: === //
// === 3.2 sameSite: === //
// === 3.3 token: === //
// === 3.4 referer: === //

// === 同源策略: === //
// === 1 同源: 协议、域名、端口相同 === //
// === 2 限制: Cookie、LocalStorage, IndexDB, DOM 无法获取, AJAX无法发送请求 === //
// === 3 避免: === //
// === 3.1 cookie: 对于两个页面一级域名同而二级域名不同的，可以通过将document.domain设置为一级域名，或者在document.cookie设domain, 或者服务器端设置Set-Cookie的domain来通信 === //
// === 3.2 DOM: 若打开不同源的iframe 或 通过window.open()打开, 无法获取到对方的DOM, 若只是域名级别不同可通过设docuemnt.domain; 若完全不同域, 则有以下3种方法: === //
// === 3.2.a location.hash: hash改变不会刷新页面, 父窗口把信息写入子窗口的hash，子窗口通过监听 hashchange事件 来获取 === //
// === 3.2.b window.name: === //
// === 3.2.c window.postMessage: === //
// === 3.3 AJAX: === //
// === 3.3.a jsonp: script标签中的src不受同源策略限制 === //
// === 3.3.b WebSocket: 服务器通过检查Origin字段是否在白名单中来决定是否通信 === //
// === 3.3.c CORS: === //

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

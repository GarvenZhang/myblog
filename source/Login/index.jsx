import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import md5 from 'js-md5'

import hocTipsbar from '../../components/TipsBar'
import config from '../../../../config'
import { actions as UserActions } from '../../redux/User'
import history from '../../router/history'
import cookies from '../../../lib/cookie'

import style from './index.css'

const { login, update_captcha } = UserActions
const GITHUB = config.GITHUB

@connect(mapStateToProps, mapDispatchToProps)
@hocTipsbar
export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      account: '',
      password: '',
      captchaTxt: '',
      role: 1
    }

    this.changeHandle = this.changeHandle.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

  componentWillMount () {

    const access_token = cookies.get('access_token')
    if (access_token) {
      cookies.unset('access_token', {
        domain: config.COOKIE_DOMAIN,
      })
      window.localStorage.setItem('access_token', access_token)
    }

    // 若已登录，自动跳去管理界面
    if (window.localStorage.getItem('access_token')) {
      history.push('/post')
    }

  }

  /**
   * 表单字段数据处理
   */
  changeHandle (e) {
    const name = e.target.name
    const val = e.target.value
    this.setState({
      [name]: val
    })
  }

  /**
   * 提交表单
   */
  submitHandle (e) {

    e.preventDefault()

    // 加密
    const password = config.cryptoPwd(md5, this.state.account, this.state.password)

    // 请求
    const data = {
      account: this.state.account,
      captchaTxt: this.state.captchaTxt,
      password,
      role: this.state.role
    }

    // 登录
    this.props.login(data)

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
              <div className={`${style['field-inner']} ${style[this.props.loginFailTimes >= 1 ? '' : 'hide']}`}>
                <img
                  className={style['img']}
                  src={`/api/captcha?id=${this.props.captchaId}`}
                  alt='图片验证码'
                  onClick={this.props.update_captcha}
                />
                <input
                  type='text'
                  name='captchaTxt'
                  value={this.state.captchaTxt}
                  onChange={this.changeHandle}
                  className={style['inp-captcah']}
                />
              </div>
            }
          </div>
          <div className={style['field']}>
            <div className={style['field-inner']}>
              <a className={style['link']} href={`${GITHUB.AUTHORIZE_URL}?client_id=${GITHUB.CLIENT_ID}`}>游客登录</a>
              <input type='hidden' value={this.state.csrf_token} />
              <input type='submit' className={style['btn-submit']} value='登录' />
            </div>
          </div>
        </form>
      </div>
    )
  }

  componentDidMount () {

  }
}

function mapStateToProps (state) {
  return state.UserReducer
}

function mapDispatchToProps (dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
    update_captcha: bindActionCreators(update_captcha, dispatch)
  }
}

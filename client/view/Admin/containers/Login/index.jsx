import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import md5 from 'js-md5'

import config from '../../../../../config'
import { actions as UserActions } from '../../../../redux/reducers/User'
import { Cookies } from '../../../../lib/index'

import style from './index.css'

const { login } = UserActions

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

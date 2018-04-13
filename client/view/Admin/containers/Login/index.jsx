import React, { Component } from 'react'

import config from '../../../../../config'

import './index.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      csrf_token: ''
    }
    this.changeHandle = this.changeHandle.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

  changeHandle (e) {
    const name = e.target.name
    const val = e.target.value
    this.setState({
      [name]: val
    })
  }

  submitHandle (e) {
    // 校验

    // 带上token

    // 发送

  }

  render () {

    return (
      <div className="login-page">
        <form className="login-form" action={process.env.NODE_ENV === 'development' ? `http://localhost:${config.dev.cmsServerPort}/api/login` : '/api/login'} method="post" onSubmit={this.submitHandle}>
          <p className="field">
            <span className="title">账号：</span>
            <input
              type="text"
              name="account"
              value={this.state.account}
              onChange={this.changeHandle}
              className="inp-account"
            />
          </p>
          <p className="field">
            <span className="title">密码：</span>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandle}
              className="inp-password"
            />
          </p>
          <p className="field hide">
            <input type="hidden" value={''}/>
          </p>
          <p className="field">
            <input type="submit" className="btn-submit" value="登录"/>
          </p>
        </form>
      </div>
    )
  }
}

export default Login

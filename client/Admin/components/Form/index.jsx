import React, { Component } from 'react'
import PropTypes from 'prop-types'

import config from '../../../../config'

import style from './index.css'

const isDev = process.env.NODE_ENV === 'development'

export class SecondaryPasswordLogin extends Component {
  constructor (props) {
    super(props)

    this.src = isDev ? `${config.dev.fileServerIP}/secret-login.html` : `${config.prod.fileServerDomain}/secret-login.html`
    this.parentSrc = isDev ? `http://localhost:${config.cmsPort}` : config.prod.cmsDomain

    this.msgHandle = this.msgHandle.bind(this)
  }

  static defaultProps = {
    account: '',
    access_token: ''
  }

  msgHandle (e) {
    if (e.origin === config.dev.fileServerIP) {

    }
  }

  render () {

    return (
      <iframe
        ref={iframe => this.$iframe = iframe}
        className={style['secondary-password-login-wrap']}
        src={this.src}>

      </iframe>
    )
  }

  componentDidMount () {

    const msg = {
      account: this.props.account,
      access_token: this.props.access_token,
      parentSrc: this.parentSrc
    }

    const src = this.src

    this.$iframe.onload = function () {
      this.contentWindow.postMessage(msg, src)
    }

    window.addEventListener('message', this.msgHandle, false)

  }

  componentWillUnmount () {

    window.removeEventListener('message', this.msgHandle, false)

  }

}

if (process.env.NODE_ENV === 'development') {
  SecondaryPasswordLogin.propTypes = {
    account: PropTypes.string.isRequired,
    access_token: PropTypes.string.isRequired
  }
}

export class ChatroomLogin extends Component {
  constructor (props) {
    super(props)

    this.toSrc = isDev ? `http://localhost:3001/chatroom-login.html` : `${config.prod.fileServerDomain}/chatroom-login.html`
    this.toDomain = isDev ? 'http://localhost:3001' : config.prod.fileServerDomain
  }

  static defaultProps = {
    csrf_token: ''
  }

  render () {

    return (
      <iframe
        className="chatroom-wrap"
        ref={iframe => this.$iframe = iframe}
        src='/'
      >
      </iframe>
    )
  }

  componentDidMount () {
    
    // === iframe + window.name: 在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name === //
    // === 1 实现: 当前页面下放个同域的iframe, iframe中将页面的数据以string类型存储在window.name, 然后改变src到不同域的页面, 读取window.name === //

    this.$iframe.contentWindow.name = JSON.stringify({
      csrf_token: this.props.csrf_token
    })

    this.$iframe.src = this.toSrc
  }
}

ChatroomLogin.propTypes = {
  csrf_token: PropTypes.string.required
}

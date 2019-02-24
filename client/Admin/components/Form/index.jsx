import React, { Component } from 'react'
import PropTypes from 'prop-types'

import config from '../../../../config'

import style from './index.css'

export class ChatroomLogin extends Component {
  constructor (props) {
    super(props)

    this.toSrc = config.ISDEV ? `${config.FILE_SERVER_DOMAIN}/secret-login.html` : `${config.FILE_SERVER_DOMAIN}/secret-login.html`
    this.toDomain = config.FILE_SERVER_DOMAIN
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

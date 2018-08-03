import React, { Component } from 'react'
import PropTypes from 'prop-types'

import config from '../../../../config'

import style from './index.css'

export class SecondaryPasswordLogin extends Component {
  constructor (props) {
    super(props)

    this.src = config.ISDEV ? `${config.FILE_SERVER_DOMAIN}/secret-login.html` : `${config.FILE_SERVER_DOMAIN}/secret-login.html`
    this.parentSrc = config.CMS_DOMAIN

    this.msgHandle = this.msgHandle.bind(this)
  }

  static defaultProps = {
    account: '',
    access_token: ''
  }

  msgHandle (e) {

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

if (config.ISDEV) {
  SecondaryPasswordLogin.propTypes = {
    account: PropTypes.string.isRequired,
    access_token: PropTypes.string.isRequired
  }
}

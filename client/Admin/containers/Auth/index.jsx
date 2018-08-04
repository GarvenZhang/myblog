import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Popup from '../../components/Popup'
import history from '../../router/history'
import axios, { getRespnseInterceptorsInfo, setResponseInterceptorsInfo } from '../../fetch/axios'
import config from '../../../../config'
import { actions as UserActions } from '../../redux/User'
import { actions as IframeActions } from '../../redux/Iframe'

import style from './index.css'

const { get_user } = UserActions
const { send_message, update_loaded_status } = IframeActions

@connect(state => state.UserReducer, {get_user})
@connect(state => state.IframeReducer, {send_message, update_loaded_status})
export default class Auth  extends PureComponent {
  constructor (props) {
    super(props)

    this.responseInterceptorsHandle = ::this.responseInterceptorsHandle
    this.messageHandle = ::this.messageHandle
    this.userInfoHandle = :: this.userInfoHandle
    this.loadHandle = ::this.loadHandle

  }

  /**
   * 响应拦截处理
   */
  responseInterceptorsHandle () {

    // 响应拦截器
    // 只进行一次
    if (getRespnseInterceptorsInfo()) {
      return
    }

    axios.interceptors.response.use(res => {

      // blacklist
      const notToCheckList = [
        '/api/login',
      ]

      // token过期
      if (res.status === 401 && !notToCheckList.some(item => item === res.config.url)) {

        // 在sso认证中心删除 域下的localStorage 的 access_token
        this.props.send_message({
          messageType: 'logout',
          postFn: ($iframe) => {

            $iframe.contentWindow.postMessage({
              type: 'logout'
            }, $iframe.src)

          }
        })
      }

      // 更新token
      if (res.data && res.data.access_token) {
        window.localStorage.setItem('access_token', res.data.access_token)
      }

      // 若响应的状态码为4xx，则给予用户提示
      if (res.status >= 400 && res.status < 500) {
        return Promise.reject(res.data)
      }

      setResponseInterceptorsInfo()
      return res.data
    })

  }

  /**
   * message事件处理
   */
  messageHandle (e) {

    // origin白名单
    const whitelist = [
      config.SSO_DOMAIN,
    ]

    if (!whitelist.includes(e.origin)) {
      return
    }

    switch (e.data.type) {

      case 'responseAccessToken':

        // 对应单点登出的情况: sso中没有access_token
        if (!e.data.access_token) {
          return
        }

        window.localStorage.setItem('access_token', e.data.access_token)
        this.props.get_user()

        break

      case 'logout':

        if (e.data.retCode !== 1) {
          return
        }

        window.localStorage.removeItem('access_token')

        history.push('/')

        break

    }

  }

  /**
   * 获取用户授权信息处理
   */
  userInfoHandle () {

    // 在首页
    if (history.location.pathname === '/') {
      // 已有用户授权信息
      this.props.id && history.push('/post')
    }
  }

  componentWillMount () {

    this.responseInterceptorsHandle()
    this.userInfoHandle()

  }

  /**
   * iframe加载处理
   */
  loadHandle () {

    this.props.update_loaded_status({
      $iframe: this.$iframe,
      hasLoaded: true
    })

  }

  render () {
    return (
      <div className="global-component-wrap">
        <iframe ref={$iframe => this.$iframe = $iframe}
                src={`${config.SSO_DOMAIN}?from=${config.CMS_DOMAIN}&noOwnIframe=true`}
                frameBorder="0"
                className={style['sso-iframe']}
                onLoad={this.loadHandle}
        />
        <Popup/>
      </div>
    )
  }

  componentDidMount () {

    // 接收消息
    window.addEventListener('message', this.messageHandle, false)

    // 若redux中没有用户信息(如刷新页面后)
    const access_token = window.localStorage.getItem('access_token')
    if (!this.props.id && access_token) {
      this.props.get_user()
      return
    }

    this.props.send_message({
      messageType: 'getAccessToken',
      postFn: ($iframe) => {

        $iframe.contentWindow.postMessage({
          type: 'getAccessToken'
        }, $iframe.src)

      }
    })

  }

  componentWillUnmount () {

  }
}

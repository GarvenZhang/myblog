import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import detectWebp from '../../../lib/detectWebp'
import Cookies from '../../../lib/cookie'
import Popup from '../../components/Popup'
import axios, { getRespnseInterceptorsInfo, setResponseInterceptorsInfo } from '../../fetch/axios'
import config from '../../../../config'
import { actions as UserActions } from '../../redux/User'
import { actions as IframeActions } from '../../redux/Iframe'

import style from './index.css'

const { get_user } = UserActions
const { send_message, update_loaded_status } = IframeActions

@connect(state => state.UserReducer, {get_user})
@connect(state => state.IframeReducer, {send_message, update_loaded_status})
export default class Auth extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      iframeNow: false
    }

    this.responseInterceptorsHandle = ::this.responseInterceptorsHandle
    this.messageHandle = ::this.messageHandle
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
        window.localStorage.removeItem('access_token')
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

        window.localStorage.setItem('access_token', e.data.access_token)
        this.props.get_user()

        break

      case 'logout':

        if (e.data.retCode !== 1) {
          return
        }
        window.localStorage.removeItem('access_token')

        break

    }

  }

  detectWebpHandle () {

    // 检测浏览器是否支持webp
    detectWebp('alpha', function (feature, isSupport) {

      // === 二级域名cookie共享： === //
      // === cookie只能读写大于等于自己的域，因此同一级域名间的cookie共享需要将cookie设置到更高的域中 === //
      if (isSupport) {
        Cookies.set('supportWebp', '1', {
          maxAge: 60 * 60 * 24 * 7,
          domain: config.COOKIE_DOMAIN,
          path: '/'
        })
      } else {
        Cookies.set('supportWebp', '', {
          maxAge: 60 * 60 * 24 * 7,
          domain: config.COOKIE_DOMAIN,
          path: '/'
        })
      }

    })


  }

  componentWillMount () {

    if (typeof window !== 'undefined') {

      this.detectWebpHandle()

      this.responseInterceptorsHandle()
    }

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
      this.state.iframeNow ?
        <div className={'global-component-wrap'}>
          <iframe ref={$iframe => this.$iframe = $iframe}
                  src={`${config.SSO_DOMAIN}?from=${this.props.href || location.href}&noOwnIframe=true`}
                  frameBorder="0"
                  className={style['sso-iframe']}
                  onLoad={this.loadHandle}
          />
          <Popup/>
        </div>
        : <Popup/>
    )
  }

  componentDidMount () {

    // === ssr方案中iframe不会触发load事件: 若是在服务器端整合了react再发给前端, 此时不会触发iframe的 load 事件, 只有在客户端中进行第一次渲染时才会触发 load 事件 === //
    // === 1 原因: 未查明, 估计是 renderToString 后iframe的 load事件 失效 ？？ === //
    // === 2 解决办法: 只能在客户端中动态插入 iframe 才能触发其 load 事件 === //
    this.setState({
      iframeNow: true
    })

    // 接收消息
    window.addEventListener('message', this.messageHandle, false)

    // 若redux中没有用户信息(如刷新页面后)
    const access_token = window.localStorage.getItem('access_token')
    if (access_token) {
      if (this.props.role !== -1) {
        return
      }
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

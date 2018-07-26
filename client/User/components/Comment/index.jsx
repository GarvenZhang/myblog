import React, { Component } from 'react'
import { connect } from 'react-redux'

import config from '../../../../config'
import { actions as UserActions } from '../../redux/User'
import history from '../../router/history'
import { actions as IframeActions } from '../../redux/Iframe'

import style from './index.css'
import img from './GitHub-Mark-32px.png'
import cookie from '../../../lib/cookie'

const { get_user } = UserActions
const { send_message, update_loaded_status } = IframeActions

// === sessionStorage: 会话级别的浏览器存储 === //
// === 1 特点：5M左右, 仅存在客户端, 当前tab关闭后消失 === //
// === 2 使用：表单信息的维护(防止页面 刷新后/跳转后 已填写的表单数据丢失)，是否支持webp等 === //

@connect(
  state => state.UserReducer,
  {get_user}
)
@connect(state => state.IframeReducer, {send_message})
export default class Comment extends Component {

  constructor (props) {
    super(props)

    this.state = {
      value: '',
      name: '',
      email: '',
      isMemoried: '',
      location: ''
    }

    this.submitHandle = ::this.submitHandle
    this.infoHandle = ::this.infoHandle
    this.loginout = ::this.loginout

  }

  /**
   * 登出
   */
  loginout () {

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

  infoHandle () {

    switch (this.props.role) {

      case -1:
        return <a href={`${config.SSO_DOMAIN}?from=${this.state.location}`} className={style['link']}>登录后可评论</a>

      default:
        return (
          <div className={style['info']}>
            <img src={this.props.avatar_url} className={style['avator']}/>
            <span className={style['name']}>{this.props.name}</span>
            <span onClick={this.loginout} className={style['link--logout']}>登出</span>
          </div>
        )

    }

  }

  submitHandle () {

  }

  render () {

    return (
      <section className={style['comment-wrap']}>
        <form className={`${style['form-comment']}`} onSubmit={this.submitHandle}>
          <div className={style['form-hd']}>
            <input
              type='button'
              className={style['btn-post']}
              defaultValue='发表'
            />
            {this.infoHandle()}
          </div>
          <div className={style['form-bd']}>
            <textarea
              className={style['textarea']}
              name='commentContent'
              value={this.state.value}
              placeholder='请填写您的评论。(大神请怒喷^_^)'
              onChange={this.handleInputChange} />
          </div>
        </form>
        <div className={style['comment-list']}>
          <div className={style['comment-item']}>
            <div className={style['comment-hd']}>
              <span className={style['time']}>2018-01-27 10:22:33</span>
              <span className={style['btn-reply']}>回复</span>
              <span className={style['btn-like']}>👍</span>
            </div>
            <div className={style["comment-bd"]}>
              <p>KKKKKfjoewaifmkawflemafwfwefae</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  componentDidMount () {

    this.setState({
      location: location.href
    })

  }
}

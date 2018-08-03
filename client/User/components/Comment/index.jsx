import React, { Component } from 'react'
import { connect } from 'react-redux'

import config from '../../../../config'
import { actions as UserActions } from '../../redux/User'
import { actions as IframeActions } from '../../redux/Iframe'
import { actions as CommentActions } from '../../redux/Comment'
import { actions as PopupActions } from '../../redux/Popup'
import datetime from '../../../lib/datetime'
import { stop } from '../../../lib/iterator'
import Img from '../Img'

import style from './index.css'
import img from './github-default-avatar.png'

const { get_user, logout } = UserActions
const { send_message } = IframeActions

// === sessionStorage: 会话级别的浏览器存储 === //
// === 1 特点：5M左右, 仅存在客户端, 当前tab关闭后消失 === //
// === 2 使用：表单信息的维护(防止页面 刷新后/跳转后 已填写的表单数据丢失)，是否支持webp等 === //

@connect(
  state => state.UserReducer,
  {get_user, logout}
)
@connect(state => state.IframeReducer, {send_message})
@connect(state => state.CommentReducer, {...CommentActions})
@connect(state => ({
  user_id: state.UserReducer.id
}))
@connect(null, {...PopupActions})
export default class Comment extends Component {

  constructor (props) {
    super(props)

    this.state = {
      location: ''
    }

    this.submitHandle = ::this.submitHandle
    this.infoHandle = ::this.infoHandle
    this.changeHandle = ::this.changeHandle
    this.replyHandle = ::this.replyHandle
    this.likedHandle = ::this.likedHandle

  }

  infoHandle () {

    switch (this.props.role) {

      case -1:
        return <a href={`${config.SSO_DOMAIN}?from=${this.state.location}`} className={style['link']}>登录后可评论</a>

      default:
        return (
          <div className={style['info']}>
            <Img src={this.props.avatar_url} className={style['avatar']}/>
            <span className={style['name']}>{this.props.name}</span>
            <span onClick={this.props.logout} className={style['link--logout']}>登出</span>
          </div>
        )

    }

  }

  /**
   * change处理函数
   */
  changeHandle (e) {
    this.props.update_content(e.target.value)
  }

  /**
   * 回复处理
   */
  replyHandle (e) {

    const target = e.target
    const from_uid = target.getAttribute('data-from-uid')

    this.props.update_to_user(parseInt(from_uid))
  }

  /**
   * 点赞处理
   */
  likedHandle (e) {

    if (!window.localStorage.getItem('access_token')) {
      return this.props.update_popup({
        isOpen: 1,
        header: '提示:',
        content: '请先登录'
      })
    }

    // === target 与 currentTarget: === //
    // === 1 currentTarget: 绑定事件的对象, 若想要获取的目标元素有子元素, 最好对目标元素进行事件绑定并通过 currentTarget 获取 === //
    // === 2 target: 触发事件的对象, 如有嵌套的div，对父级div绑定click事件，当点击子div时，currentTarget为父div，target为子div === //
    
    const target = e.currentTarget
    const has_liked = target.getAttribute('data-has-liked')
    const comment_id = parseInt(target.parentNode.parentNode.getAttribute('data-comment-id'))

    // 没有点赞过的情况
    if (has_liked === 'false') {

      this.props.add_liked({
        type: 1,
        status: 1,
        comment_id: parseInt(comment_id)
      })

      return

    }

    // 点赞过的情况

    // 找出liked_id
    let liked_id
    let liked_status
    this.props.data.forEach(outer => {
      if (parseInt(comment_id) === outer.id) {
        outer.liked.forEach(inner => {
          if (inner.user_id === this.props.user_id) {
            liked_id = inner.id
            liked_status = inner.status === 1 ? 0 : 1
          }
        })
      }
    })

    if (!liked_id && !liked_status) {
      return
    }

    this.props.update_liked({
      id: liked_id,
      status: liked_status,
      comment_id
    })

  }

  /**
   * 发表评论处理函数
   */
  submitHandle () {

    if (this.props.role === -1 || this.props.role === 2) {
      return this.props.update_popup({
        isOpen: 1,
        header: '提示:',
        content: '请先登录'
      })
    }

    let content = this.props.content

    // to_uid
    let to_uid = 0
    if (/^@(\w+?):/.test(content)) {
      const to_name = RegExp.$1
      stop(this.props.data, item => {
        if (to_name === item.from_name) {
          to_uid = item.from_uid
          content = content.replace(/^@\w+?:/, '')
          return false
        }
      })
    }

    const time = datetime.toRegular(new Date())
    this.props.post_comment({
      article_id: this.props.article_id,
      to_uid,
      time,
      content
    })

  }

  /**
   * 获取点赞数
   */
  getLikedNum (arr) {

    if (!arr) {
      return
    }

    let num = 0
    arr.forEach(item => {
      if (item.status === 1) {
        ++num
      }
    })
    return num
  }

  /**
   * 是否已经点赞过
   */
  hasLiked (arr) {

    if (!arr) {
      return
    }

    let flag = false
    arr.forEach(item => {
      if (item.user_id === this.props.user_id) {
        flag = true
      }
    })

    return flag

  }

  /**
   * 点赞状态
   */
  getLikedStatus (arr) {

    if (!arr) {
      return
    }

    let flag = false
    arr.forEach(item => {
      if (item.user_id === this.props.user_id && item.status === 1) {
        flag = true
      }
    })

    return flag

  }

  render () {
    
    return (
      <section className={style['comment-wrap']}>
        <form className={`${style['form-comment']}`} onSubmit={this.submitHandle}>
          <div className={style['form-hd']}>
            <input
              type='button'
              onClick={this.submitHandle}
              className={style['btn-post']}
              value='发表'
            />
            {this.infoHandle()}
          </div>
          <div className={style['form-bd']}>
            <textarea
              className={style['textarea']}
              name='commentContent'
              value={this.props.content}
              placeholder='请填写您的评论。(大神请怒喷^_^)'
              onChange={this.changeHandle} />
          </div>
        </form>
        <div className={style['comment-list']}>
          {
            this.props.data.map((item, i) => {
              
              return (
                <div className={style['comment-item']} key={item.id} data-comment-id={item.id}>
                  <div className={style['comment-hd']}>
                    <Img src={item.from_avatar_url} alt="头像" className={style['avatar']} defaultSrc={img}/>
                    <span className={style['username']}>{item.from_name}</span>
                    <span className={style['time']}>{item.time}</span>
                    <span className={style['btn-reply']} data-from-uid={item.from_uid} onClick={this.replyHandle}>回复</span>
                    <span className={style['btn-like']} data-has-liked={this.hasLiked(item.liked)} onClick={this.likedHandle} >
                      {
                        this.getLikedStatus(item.liked) ? (
                         <svg t="1533043872992" className={style["icon--liked"]} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5835" width="20" height="20">
                           <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" p-id="5836" fill="#e7d71b"></path>
                         </svg>
                          ) : (
                         <svg t="1533043671931" className={style["icon--unliked"]} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5833" width="20" height="20">
                           <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" p-id="5834" fill="#e7d71b"></path>
                         </svg>)
                      }
                      &lt;<b className={style['liked-num']}>{this.getLikedNum(item.liked) || 0}</b>&gt;
                    </span>
                  </div>
                  <div className={style["comment-bd"]}>
                    <p className={style['content']}>
                      {item.to_uid ? <span className={style['to-name']}>@{item.to_name}:</span> : ''}
                      {item.content}
                    </p>
                  </div>
                </div>
              )

            })
          }
        </div>
      </section>
    )
  }

  componentDidMount () {

    this.setState({
      location: location.href
    })

    this.props.get_comment(this.props.article_id, 0, 10)

  }
}

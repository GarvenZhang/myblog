import React, { Component } from 'react'

import style from './index.css'
import config from '../../../../config'

const github = config.github

// === sessionStorage: 会话级别的浏览器存储 === //
// === 1 特点：5M左右, 仅存在客户端, 当前tab关闭后消失 === //
// === 2 使用：表单信息的维护(防止页面 刷新后/跳转后 已填写的表单数据丢失)，是否支持webp等 === //

class Comment extends Component {

  constructor (props) {
    super(props)

    this.state = {
      value: '',
      name: '',
      email: '',
      isMemoried: ''
    }

  }

  render () {
    return (
      <section className={style['comment-wrap']}>
        <form className={`${style['form']} ${style['form--comment']}`} onSubmit={this.handleSubmit}>
          <div className="form-bd">
            <img src="./GitHub-Mark-32px.png" className="avator"/>
            <textarea
              className={style['textarea']}
              name='commentContent'
              value={this.state.value}
              placeholder='请填写您的评论。(大神请怒喷^_^)'
              onChange={this.handleInputChange} />
          </div>
          <div className="form-ft">
            <a href={`${github.authorizeUrl}?client_id=${github.client_id}`} className="link link--signin">点此登录github进行认证</a>
            <input
              type='button'
              className={style['btn-post']}
              defaultValue='发表' />
          </div>

        </form>
        <div className="comment-list">
          <div className={style['comment-item']}>
            <div className={style['comment-hd']}>
              <span>2018-01-27 10:22:33</span>
              <span>👍</span>
              <span>回复</span>
            </div>
            <div className="comment-bd">
              <p>KKKKKfjoewaifmkawflemafwfwefae</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Comment

import React, { Component } from 'react'

import './index.css'

class Comment extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="comment-wrap">
        评论区开始
        <div className="comment-area">
          <h2 className="comment-tt">评论区</h2>
          <section className="comment-section">
            <p className="comment-info">
              <span>2018-01-27 10:22:33</span>
              <span>👍</span>
              <span>引用</span>
            </p>
            <p><span className="comment-speaker">小铭铭</span> 说：</p>
            <div className="cite">
              <p>引用来xx的发言：</p>
              <cite>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
              </cite>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </p>
          </section>
          <section className="comment-section">
            <p className="comment-info">
              <span>2018-01-27 10:22:33</span>
              <span>👍</span>
              <span>引用</span>
            </p>
            <p><span className="comment-speaker">小铭铭</span> 说：</p>
            <div className="cite">
              <p>引用来xx的发言：</p>
              <cite>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
              </cite>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </p>
          </section>
          <section className="comment-section">
            <p className="comment-info">
              <span>2018-01-27 10:22:33</span>
              <span>👍</span>
              <span>引用</span>
            </p>
            <p><span className="comment-speaker">小铭铭</span> 说：</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </p>
            <div className="cite">
              <p>引用来xx的发言：</p>
              <cite>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
              </cite>
            </div>
          </section>
        </div>
        发表评论开始
        <div className="post-area">
          <h2 className="area-tt">发表评论：</h2>
          <form className="area-form" onSubmit={this.handleSubmit}>
            <label className="form-field">
              <textarea
                className="area-textarea"
                name="commentContent"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </label>
            <label className="form-field">
              名称：
              <input
                type="text"
                className="inp-name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </label>
            <label className="form-field">
              邮箱：
              <input
                type="text"
                className="inp-email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange} />
            </label>
            <label className="fr form-field">
              <input
                type="submit"
                className="btn-post"
                defaultValue="发表"/>
            </label>
            <label className="form-field" htmlFor="btn-isMemoried" >
              记住个人信息
              <input
                type="checkbox"
                className="btn-isMemoried"
                name="isMemoried"
                id="btn-isMemoried"
                value={this.state.isMemoried}
                onChange={this.handleInputChange} />
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default Comment

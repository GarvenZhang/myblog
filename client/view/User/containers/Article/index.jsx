import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import remark from 'remark'
import reactRenderer from 'remark-react'

import './index.css'

class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      isMemoried: false,
      commentContent: '请发表您的评论！'
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static defaultProps = {
    title: '',
    summary: '',
    content: '',
    pubtime: '',
    articleType_id: 0,
    prev: 0,
    next: 0,
    comments: []
  }

  handleInputChange (e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.valueOf
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
  }

  render () {
    console.log(this.props)
    return (
      <div className="article-page">
        {/* 导航开始 */}
        <nav className="nav">
          <ul className="nav-move-list">
            <li className="nav-move-item">
              <span className="search-control">搜索</span>
            </li>
            <li className="nav-move-item">
              <span className="prev">上一篇</span>
            </li>
            <li className="nav-move-item">
              <span className="next">下一篇</span>
            </li>
          </ul>
          <p className="nav-location">
            所在位置：<Link to='/'>HTML</Link>
          </p>
        </nav>
        {/* 文章开始 */}
        <article className="article">
          <h1 className="article-tt">{this.props.title}</h1>
          <aside className="aside">
            <p className="author">作者：garven</p>
            <p>发表时间：<time className="pubdate" dateTime={`${this.props.pubtime}T00:00`}>{this.props.pubtime}</time></p>
            <p className="read-num">浏览数：{this.props.readNum}</p>
            <p className="link-num">点赞次数：{this.props.likedNum}</p>
            <p className="author">评论数：{this.props.commentsNum}</p>
            <p className="author">简介：{this.props.summary}</p>
          </aside>
          {
            remark().use(reactRenderer).processSync(this.props.content).contents
          }
        </article>
        {/* 评论区开始 */}
        {/*<div className="comment-area">*/}
          {/*<h2 className="comment-tt">评论区</h2>*/}
          {/*<section className="comment-section">*/}
            {/*<p className="comment-info">*/}
              {/*<span>2018-01-27 10:22:33</span>*/}
              {/*<span>👍</span>*/}
              {/*<span>引用</span>*/}
            {/*</p>*/}
            {/*<p><span className="comment-speaker">小铭铭</span> 说：</p>*/}
            {/*<div className="cite">*/}
              {/*<p>引用来xx的发言：</p>*/}
              {/*<cite>*/}
                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.*/}
              {/*</cite>*/}
            {/*</div>*/}
            {/*<p>*/}
              {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.*/}
            {/*</p>*/}
          {/*</section>*/}
          {/*<section className="comment-section">*/}
            {/*<p className="comment-info">*/}
              {/*<span>2018-01-27 10:22:33</span>*/}
              {/*<span>👍</span>*/}
              {/*<span>引用</span>*/}
            {/*</p>*/}
            {/*<p><span className="comment-speaker">小铭铭</span> 说：</p>*/}
            {/*<div className="cite">*/}
              {/*<p>引用来xx的发言：</p>*/}
              {/*<cite>*/}
                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.*/}
              {/*</cite>*/}
            {/*</div>*/}
            {/*<p>*/}
              {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.*/}
            {/*</p>*/}
          {/*</section>*/}
          {/*<section className="comment-section">*/}
            {/*<p className="comment-info">*/}
              {/*<span>2018-01-27 10:22:33</span>*/}
              {/*<span>👍</span>*/}
              {/*<span>引用</span>*/}
            {/*</p>*/}
            {/*<p><span className="comment-speaker">小铭铭</span> 说：</p>*/}
            {/*<p>*/}
              {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.*/}
            {/*</p>*/}
            {/*<div className="cite">*/}
              {/*<p>引用来xx的发言：</p>*/}
              {/*<cite>*/}
                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.*/}
              {/*</cite>*/}
            {/*</div>*/}
          {/*</section>*/}
        {/*</div>*/}
        {/* 发表评论开始 */}
        {/*<div className="post-area">*/}
          {/*<h2 className="area-tt">发表评论：</h2>*/}
          {/*<form className="area-form" onSubmit={this.handleSubmit}>*/}
            {/*<label className="form-field">*/}
              {/*<textarea*/}
                {/*className="area-textarea"*/}
                {/*name="commentContent"*/}
                {/*value={this.state.value}*/}
                {/*onChange={this.handleInputChange} />*/}
            {/*</label>*/}
            {/*<label className="form-field">*/}
              {/*名称：*/}
              {/*<input*/}
                {/*type="text"*/}
                {/*className="inp-name"*/}
                {/*name="name"*/}
                {/*value={this.state.name}*/}
                {/*onChange={this.handleInputChange} />*/}
            {/*</label>*/}
            {/*<label className="form-field">*/}
              {/*邮箱：*/}
              {/*<input*/}
                {/*type="text"*/}
                {/*className="inp-email"*/}
                {/*name="email"*/}
                {/*value={this.state.email}*/}
                {/*onChange={this.handleInputChange} />*/}
            {/*</label>*/}
            {/*<label className="fr form-field">*/}
              {/*<input*/}
                {/*type="submit"*/}
                {/*className="btn-post"*/}
                {/*defaultValue="发表"/>*/}
            {/*</label>*/}
            {/*<label className="form-field" htmlFor="btn-isMemoried" >*/}
              {/*记住个人信息*/}
              {/*<input*/}
                {/*type="checkbox"*/}
                {/*className="btn-isMemoried"*/}
                {/*name="isMemoried"*/}
                {/*id="btn-isMemoried"*/}
                {/*value={this.state.isMemoried}*/}
                {/*onChange={this.handleInputChange} />*/}
            {/*</label>*/}
          {/*</form>*/}
        {/*</div>*/}
      </div>
    )
  }
}

if (process.env.NODE_ENV === 'development') {
  Article.propsTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    pubtime: PropTypes.string.isRequired,
    articleType_id: PropTypes.number.isRequired,
    prevId: PropTypes.number.isRequired,
    nextId: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

function mapStateToProps (state) {
  const {
    title,
    summary,
    content,
    pubtime,
    articleType_id,
    prev,
    next,
    comments
  } = state.ArticleReducer
  return {
    title,
    summary,
    content,
    pubtime,
    articleType_id,
    prev,
    next,
    comments
  }
}

export default connect(
  mapStateToProps
)(Article)

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import remark from 'remark'
import reactRenderer from 'remark-react'

import config from '../../../../../config'
import { actions as ArticleActions } from '../../../../redux/reducers/Article'

import './index.css'

const { get_article } = ArticleActions

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
  }

  static defaultProps = {
    title: '',
    summary: '',
    content: '',
    pubtime: '',
    likedNum: 0,
    commentNum: 0,
    readNum: 0,
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

  contentHandle () {
    const content = remark().use(reactRenderer).processSync(this.changeImgUrl(this.props.content)).contents
    // console.log(content)
    // console.log(xss(content))
    // return xss(content, {
    //   whiteList: {
    //     a: ['href', 'target'],
    //     img: ['src', 'alt', 'title']
    //   }
    // })
    return content
  }

  /**
   * 改变图片uri链接
   * @param {String} content - 文章内容
   * @return {String}
   */
  changeImgUrl (content) {
    return content.replace(/!\[(.+?)\]\((.+?)\)/, `![$1](${config.dev.imageUploadApi}$2)`)
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
            <p className="author">评论数：{this.props.commentNum}</p>
            <p className="author">简介：{this.props.summary}</p>
          </aside>
          {
            this.contentHandle()
          }
        </article>
      </div>
    )
  }
  componentDidMount () {
    if (process.env.NODE_ENV === 'development') {
      this.props.get_article(parseInt(this.props.match.params.id))
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  Article.propsTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    pubtime: PropTypes.string.isRequired,
    likedNum: PropTypes.number.isRequired,
    commentNum: PropTypes.number.isRequired,
    articleType_id: PropTypes.number.isRequired,
    prevId: PropTypes.number.isRequired,
    nextId: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

function mapStateToProps (state) {
  return state.ArticleReducer
}

function mapDispatchToProps (dispatch) {
  return {
    get_article: bindActionCreators(get_article, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)

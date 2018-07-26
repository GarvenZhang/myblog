import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import remark from 'remark'
import remarkReact from 'remark-react'

import config from '../../../../config'
import { actions as ArticleActions } from '../../redux/Article'
import Comment from '../../components/Comment'

import style from './index.css'

@connect(state => state.ArticleReducer, {...ArticleActions})
export default class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      isMemoried: false,
      commentContent: '请发表您的评论！'
    }

    this.handleInputChange = ::this.handleInputChange
  }

  static defaultProps = {
    title: '',
    summary: '',
    content: '',
    pubtime: '',
    liked_num: 0,
    comment_num: 0,
    read_num: 0,
    articleType_id: 0,
    prev: 0,
    next: 0,
    comments: []
  }

  componentWillMount () {

  }

  handleInputChange (e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.valueOf
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  getUniqueWordsNum (str) {

    return new Set(str).size

  }

  // === xss防御之富文本过滤: === //
  // === 1 黑名单: 给出不通过的代码, 如`<script>`, `javascript:;`, `onerror`，但太多要考虑 === //
  // === 1.1 实现原理: 正则替换 === //
  // === 2 白名单：给出通过的代码，其它一律不通过, 如`img: src, alt, title`, 用于输入检出 / 输出检查，可用插件xss === //
  // === 2.1 实现原理: 现将html解析成dom树, 遍历每个元素，只留下允许的，再返回新的字符 === //

  contentHandle () {
    const content = remark().use(remarkReact).processSync(this.changeImgUrl(this.props.content)).contents
    // console.log(content)
    // console.log(xss(content))
    // return xss(content, {
    //   whiteList: {
    //     a: ['href', 'target'],
    //     img: ['src', 'alt', 'title'],
    //     p: [],
    //     span: []
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
    return content.replace(/!\[(.+?)\]\((.+?)\)/, `![$1](${config.ISDEV ? config.FILE_SERVER_DOMAIN : config.FILE_SERVER_DOMAIN}$2)`)
  }

  // === 语义化的优点： === //
  // === 1.可读性更高，利于团队合作与开发 === //
  // === 2.利于SEO === //
  // === 3.利于屏幕阅读软件根据结构来读页面 === //
  // === 4.一般可让HTML文件变的更小 === //
  render () {
    return (
      <div className={style['article-page']}>
        <header className={`header clearfix`}>
          <div className={style['header-search']}>
            <input type="text" className={style['search-inp']} placeholder='搜索点啥呗'/>
            <input type="button" value='🔍'/>
          </div>
          <div className={style['header-location']}>
            <p className={style['location-text']}>
              所在位置：<Link to='/' className={style['location-link']}>HTML</Link>
            </p>
          </div>
          <div className={style['header-control']}>
            <ul className={style['control-list']}>
              <li className={style['control-item']}>
                <Link className={style['item-link']} to='/'>上一篇</Link>
              </li>
              <li className={style['control-item']}>
                <Link className={style['item-link']} to='/'>下一篇</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className={style['container']}>
          {/* 主体开始 */}
          <div className={style['main-block']}>
            <main className={style['main-inner']}>
              <article className={style['article']}>
                <h1 className={style['article-tt']}>{this.props.title}</h1>
                <ul className={`${style['article-desc-list']} clearfix`}>
                  <li className={style['article-desc-item']}>作者：garven</li>
                  <li>发表时间：
                    <time className={style['pubdate']} dateTime={`${this.props.pubtime}T00:00`}>{this.props.pubtime}</time>
                  </li>
                  <li className={style['article-desc-item']}>浏览数：{this.props.read_num}</li>
                  <li className={style['article-desc-item']}>点赞次数：{this.props.liked_num}</li>
                  <li className={style['article-desc-item']}>评论数：{this.props.comment_num}</li>
                  <li className={style['article-desc-item']}>有效字数：{this.getUniqueWordsNum(this.props.content)}</li>
                  <li className={style['article-desc-item']}>简介：{this.props.summary}</li>
                </ul>
                {
                  this.contentHandle()
                }
              </article>
              <div className={style['comment-wrap']}>

              </div>
            </main>
          </div>
          {/* 右边栏开始 */}
          {/* 左边栏开始 */}
          <aside className={style['aside']}>
            树形结构
          </aside>
          {/* 左边栏结束 */}
          <nav className={style['nav']}>
            导航栏
          </nav>
          {/* 右边栏结束 */}
          {/* 主体结束 */}
        </div>
        <Comment/>
      </div>
    )
  }

  componentDidMount () {

  }
}

if (config.ISDEV) {
  Article.propTypess = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    pubtime: PropTypes.string.isRequired,
    liked_num: PropTypes.number.isRequired,
    comment_num: PropTypes.number.isRequired,
    category_id: PropTypes.number.isRequired,
    prev_id: PropTypes.number.isRequired,
    next_id: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

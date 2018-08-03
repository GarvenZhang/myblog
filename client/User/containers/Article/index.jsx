import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import remark from 'remark'
import remarkReact from 'remark-react'

import config from '../../../../config'
import { actions as ArticleActions } from '../../redux/Article'
import { actions as PopupActions } from '../../redux/Popup'
import Comment from '../../components/Comment'

import style from './index.css'

@connect(state => state.ArticleReducer, {...ArticleActions})
@connect(
  state => ({
    user_id: state.UserReducer.id
  })
)
@connect(null, {...PopupActions})
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
    this.likedHandle = ::this.likedHandle
  }

  static defaultProps = {
    id: 0,
    title: '',
    summary: '',
    content: '',
    pubtime: '',
    comment_num: 0,
    read_num: 0,
    category_id: 0,
    prev_id: 0,
    prev_title: '',
    next_id: 0,
    prev_title: '',
    comments: [],
    liked: []
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
    console.log(has_liked)
    // 没有点赞过的情况
    if (has_liked === 'false') {

      this.props.add_liked({
        type: 0,
        status: 1,
        article_id: this.props.id
      })

      return

    }

    // 点赞过的情况

    // 找出liked_id
    let liked_id
    let liked_status
    this.props.liked.forEach(item => {
      if (item.user_id === this.props.user_id) {
        liked_id = item.id
        liked_status = item.status === 1 ? 0 : 1
      }
    })

    if (!liked_id && !liked_status) {
      return
    }

    this.props.update_liked({
      id: liked_id,
      status: liked_status,
      article_id: this.props.id
    })

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

  // === 语义化的优点： === //
  // === 1.可读性更高，利于团队合作与开发 === //
  // === 2.利于SEO === //
  // === 3.利于屏幕阅读软件根据结构来读页面 === //
  // === 4.一般可让HTML文件变的更小 === //
  render () {
    return (
      <div className={style['article-page']}>
        <header className={`${style['header']} ${style['clearfix']}`}>
          <div className={style['header-search']}>
            <input type="text" className={style['search-inp']} placeholder='搜索点啥呗'/>
            <input type="button" value='🔍'/>
          </div>
          <div className={style['header-location']}>
            <p className={style['location-text']}>
              所在位置：<Link to={`/article/${this.props.id}`} className={style['location-link']}>{this.props.title}</Link>
            </p>
          </div>
          <div className={style['header-control']}>
            <ul className={style['control-list']}>
              <li className={style['control-item']}>
                <span className={style['title']}>上一篇:</span>
                {
                  this.props.prev_id == 0 ?
                    <span>无</span> :
                    <Link className={style['item-link']} target='_bank' to={`/article/${this.props.prev_id}`}>{this.props.prev_title}</Link>
                }
              </li>
              <li className={style['control-item']}>
                <span className={style['title']}>下一篇:</span>
                {
                  this.props.next_id == 0 ?
                    <span>无</span> :
                    <Link className={style['item-link']} target='_bank' to={`/article/${this.props.next_id}`}>{this.props.next_title}</Link>
                }
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
                  <li className={style['article-desc-item']}>点赞次数：
                    {this.getLikedNum(this.props.liked)}
                    <span className={style['btn-like']} onClick={this.likedHandle} data-has-liked={this.hasLiked(this.props.liked)}>
                      {
                        this.getLikedStatus(this.props.liked) ? (
                          <svg t="1533042701079" className={style["icon--liked"]} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5991" width="16" height="16">
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" p-id="5992" fill="#1afa29"></path>
                          </svg>
                        ) : (
                          <svg t="1533042671250" className={style["icon--unliked"]} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5831" width="16" height="16">
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" p-id="5832" fill="#1afa29"></path>
                          </svg>
                        )
                      }
                    </span>
                  </li>
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
            文章大纲
          </aside>
          {/* 左边栏结束 */}
          <nav className={style['nav']}>
            广告栏
          </nav>
          {/* 右边栏结束 */}
          {/* 主体结束 */}
        </div>
        <Comment article_id={this.props.id}/>
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
    comment_num: PropTypes.number.isRequired,
    category_id: PropTypes.number.isRequired,
    prev_id: PropTypes.number.isRequired,
    prev_title: PropTypes.number.isRequired,
    next_id: PropTypes.number.isRequired,
    next_title: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    liked: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
}

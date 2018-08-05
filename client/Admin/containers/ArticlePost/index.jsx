import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Sidebar from '../../components/Slidebar/index'
import Upload from '../../components/Upload'
import TipsBar from '../../components/TipsBar'
import simptrad from '../../../lib/simp-trad'
import { actions as ArticleCategoryActions } from '../../redux/ArticleCategory'
import { actions as ArticleLinkListActions } from '../../redux/ArticleLinkList'
import { actions as ArticleActions } from '../../redux/Article'
import { actions as PopupActions } from '../../redux/Popup'
import config from '../../../../config'
import { Validator } from '../../../lib/validator'

import style from './index.css'

const { get_category_list } = ArticleCategoryActions
const { get_article_link_list } = ArticleLinkListActions

// === redux优化之connect: 当state更新时会更新props, 因此只传组件有关的state, 从而避免不相关的state更新时也重新渲染了组件 === //
@connect(
  state => ({
    ...state.ArticleReducer,
    tagsList: state.ArticleCategoryReducer.data,
    articleList: state.ArticleLinkListReducer.data,
  }), {
    ...ArticleActions,
    get_category_list,
    get_article_link_list
  })
@connect(null, {...PopupActions})
export default class AdminArticlePost extends Component {

  constructor (props) {
    super(props)
    this.state = {

    }

    this.handleChange = ::this.handleChange
  }

  componentWillMount () {

  }

  /**
   * 更新数据处理
   */
  handleChange (e) {

    const target = e.target
    const value = target.value
    const name = target.name
    const dispatch = `update_${name}`

    this.props[dispatch](value)

  }

  /**
   * 发表文章
   */
  saveArticle () {
    
    let {
      title, summary, content, pubtime, category_id, prev_id, next_id, cover_url, tagsList, articleList
    } = this.props

    // 标签 - 默认值
    if (category_id === 0) {

      if (tagsList.length === 0) {
        return this.props.update_popup({
          isOpen: 1,
          header: '提示:',
          content: '无可选标签!'
        })
      }
      
      category_id = tagsList[0].id

    }

    // 上一篇 - 默认值
    if (prev_id === 0) {

      if (articleList.length === 0) {
        return this.props.update_popup({
          isOpen: 1,
          header: '提示:',
          content: '无可选文章!'
        })
      }

      prev_id = articleList[0].id

    }

    // 下一篇 - 默认值
    if (next_id === 0) {

      if (articleList.length === 0) {
        return this.props.update_popup({
          isOpen: 1,
          header: '提示:',
          content: '无可选文章!'
        })
      }

      next_id = articleList[0].id
      
    }
    
    // 检验
    let validator = new Validator()

    validator
      .add(title, [{
        strategy: 'isEmpty',
        errMsg: '标题不能为空!'
      }])
      .add(summary, [{
        strategy: 'isEmpty',
        errMsg: '摘要不能为空!'
      }])
      .add(pubtime, [{
        strategy: 'isEmpty',
        errMsg: '日期不能为空!'
      }, {
        strategy: 'isDate',
        errMsg: '日期不符合 YYYY-MM-DD 格式!'
      }])

    const ret = validator.start()
    if (ret) {
      return this.props.update_popup({
        isOpen: 1,
        header: '提示:',
        content: ret
      })
    }

    // 发送请求
    this.props.save_article({
      title, summary, content, pubtime, category_id, prev_id, next_id, cover_url
    })
  }

  render () {

    return (
      <div className={'admin-page'}>
        <TipsBar/>
        <div className={'sildebar-wrap'}>
          <Sidebar />
        </div>
        <div className={'admin-wrap'}>
          <div className={`${style['admin-article-post-wrap']} ${style['admin-inner']}`}>
            <form className={style['article-post-form']}>
              <p className={style["field"]}>
                <span className={style['title']}>标题：</span>
                <input
                  type="text"
                  className={'inp-title'}
                  name="title"
                  value={this.props.title}
                  onChange={this.handleChange}
                />
              </p>
              <p className={style['field']}>
                <span className={style['title']}>日期：</span>
                <input
                  type="date"
                  className={'inp-date'}
                  name="pubtime"
                  value={this.props.pubtime}
                  onChange={this.handleChange}
                />
              </p>
              <p className={style['field']}>
                <span className={style['title']}>摘要：</span>
                <input
                  type="text"
                  className={'inp-summary'}
                  name="summary"
                  value={this.props.summary}
                  onChange={this.handleChange}
                />
              </p>
              <p className={style['field']}>
                <span className={style['title']}>类别：</span>
                <select
                  name="article_type_id"
                  value={this.props.category_id}
                  onChange={this.handleChange}
                  className={'select-type'}>
                  {
                    this.props.tagsList.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
              </p>
              <p className={style['field']}>
                <span className={style['title']}>上一篇：</span>
                <select
                  name="prev_id"
                  value={this.props.prev_id}
                  onChange={this.handleChange}
                  className={'select-prev'}>
                  {
                    this.props.articleList.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
              </p>
              <p className={style['field']}>
                <span className={style['title']}>下一篇：</span>
                <select
                  name="next_id"
                  value={this.props.next_id}
                  onChange={this.handleChange}
                  className={'select-next'}>
                  {
                    this.props.articleList.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
              </p>
              <p className={style['field']}>
                <span className={style['title']}>封面uri：</span>
                <input
                  type="text"
                  className={'inp-cover_url'}
                  name="cover_url"
                  value={this.props.cover_url}
                  onChange={this.handleChange}
                />
              </p>
              <p className={style['field']}>
                <textarea
                  name="content"
                  value={this.props.content}
                  onChange={this.handleChange}
                  className={style['textarea']}
                />
              </p>
              <p className={`${style['field']} ${style['field--btn']}`}>
                <input
                  type="button"
                  className={style['btn-submit']}
                  onClick={this.saveArticle.bind(this)}
                  value='发表'/>
              </p>
            </form>
            <Upload/>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {

    this.props.get_category_list()
    this.props.get_article_link_list()

    simptrad(true)
  }

  componentWillUnmount () {
    simptrad(false)
  }
}

AdminArticlePost.defualtProps = {
  tagsList: [],
  articleList: []
}

if (config.ISDEV) {
  AdminArticlePost.propTypes = {
    tagsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

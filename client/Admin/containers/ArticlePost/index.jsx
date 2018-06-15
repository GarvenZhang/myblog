import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import Upload from 'antd/lib/upload'
// import Button from 'antd/lib/button'
// import Icon from 'antd/lib/icon'

import Sidebar from '../../components/Slidebar/index'
import Upload from '../../components/Upload'
import simptrad from '../../../lib/simp-trad'
import { actions as ArticleCategoryActions } from '../../redux/reducers/ArticleCategory'
import { actions as ArticleLinkListActions } from '../../redux/reducers/ArticleLinkList'
import { actions as ArticleActions } from '../../redux/reducers/Article'

import style from './index.css'

const { get_category_list } = ArticleCategoryActions
const { get_article_link_list } = ArticleLinkListActions
const { save_article, update_title, update_summary, update_content, update_pubtime, update_article_type_id, update_prev_id, update_next_id, update_cover } = ArticleActions

class AdminArticlePost extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }

    this.handleChange = this.handleChange.bind(this)
  }

  static defualtProps = {
    tagsList: [],
    articleList: []
  }

  componentWillMount () {

  }

  handleChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name
    const dispatch = `update_${name}`
    this.props[dispatch](value)
  }

  saveArticle () {
    let data = {}
    data.title = this.props.title
    data.summary = this.props.summary
    data.content = this.props.content
    data.pubtime = this.props.pubtime
    data.articleTypeId = this.props.articleTypeId
    data.prevId = this.props.prevId || 0
    data.nextId = this.props.nextId || 0
    data.cover = this.props.cover
    this.props.save_article(data)
  }

  render () {

    const {
      tagsList, articleList
    } = this.props

    return (
      <div className={'admin-page'}>
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
                  value={this.props.articleTypeId}
                  onChange={this.handleChange}
                  className={'select-type'}>
                  {
                    tagsList.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
              </p>
              <p className={style['field']}>
                <span className={style['title']}>上一篇：</span>
                <select
                  name="prev_id"
                  value={this.props.prevId}
                  onChange={this.handleChange}
                  className={'select-prev'}>
                  {
                    articleList.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
              </p>
              <p className={style['field']}>
                <span className={style['title']}>下一篇：</span>
                <select
                  name="next_id"
                  value={this.props.nextId}
                  onChange={this.handleChange}
                  className={'select-next'}>
                  {
                    articleList.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
              </p>
              <p className={style['field']}>
                <span className={style['title']}>封面uri：</span>
                <input
                  type="text"
                  className={'inp-cover'}
                  name="cover"
                  value={this.props.cover}
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
              <p className={style['field']}>
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

if (process.env.NODE_ENV === 'development') {
  AdminArticlePost.propTypes = {
    tagsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

function mapStateToProps (state) {
  return {
    tagsList: state.ArticleCategoryReducer.data,
    articleList: state.ArticleLinkListReducer.data,
    title: state.ArticleReducer.title,
    summary: state.ArticleReducer.summary,
    content: state.ArticleReducer.content,
    pubtime: state.ArticleReducer.pubtime,
    articleTypeId: state.ArticleReducer.articleTypeId,
    prevId: state.ArticleReducer.prevId,
    nextId: state.ArticleReducer.nextId,
    cover: state.ArticleReducer.cover
  }
}

function mapDispatchToProps (dispatch) {
  return {
    get_category_list: bindActionCreators(get_category_list, dispatch),
    get_article_link_list: bindActionCreators(get_article_link_list, dispatch),
    update_title: bindActionCreators(update_title, dispatch),
    update_summary: bindActionCreators(update_summary, dispatch),
    update_content: bindActionCreators(update_content, dispatch),
    update_pubtime: bindActionCreators(update_pubtime, dispatch),
    update_article_type_id: bindActionCreators(update_article_type_id, dispatch),
    update_prev_id: bindActionCreators(update_prev_id, dispatch),
    update_next_id: bindActionCreators(update_next_id, dispatch),
    update_cover: bindActionCreators(update_cover, dispatch),
    save_article: bindActionCreators(save_article, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminArticlePost)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Upload from 'antd/lib/upload'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'

import { actions as ArticleCategoryActions } from '../../../../redux/reducers/ArticleCategory'
import { actions as ArticleListActions } from '../../../../redux/reducers/ArticleList'
import { actions as ArticleActions } from '../../../../redux/reducers/Article'
import config from '../../../../../config'

import './index.css'

const { get_category_list } = ArticleCategoryActions
const { get_latest_list } = ArticleListActions
const { save_article, update_title, update_summary, update_content, update_pubtime, update_article_type_id, update_prev_id, update_next_id } = ArticleActions

const uploadConfig = {
  action: config.imageUploadApi,
  listType: 'picture'
};

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
    this.props.save_article(data)
  }

  render () {
    const {
      tagsList, articleList
    } = this.props

    return (
      <div className="admin-article-post-wrap admin-inner">
        <form className="article-post-form">
          <p className="field">
            <span className="title">标题：</span>
            <input
              type="text"
              className="inp-title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              />
          </p>
          <p className="field">
            <span className="title">日期：</span>
            <input
              type="date"
              className="inp-date"
              name="pubtime"
              value={this.state.pubtime}
              onChange={this.handleChange}
            />
          </p>
          <p className="field">
            <span className="title">摘要：</span>
            <input
              type="text"
              className="inp-summary"
              name="summary"
              value={this.state.summary}
              onChange={this.handleChange}
            />
          </p>
          <p className="field">
            <span className="title">类别：</span>
            <select
              name="article_type_id"
              value={this.state.articleTypeId}
              onChange={this.handleChange}
              className="select-type">
              {
                tagsList.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))
              }
            </select>
          </p>
          <p className="field">
            <span className="title">上一篇：</span>
            <select
              name="prev_id"
              value={this.state.prevId}
              onChange={this.handleChange}
              className="select-prev">
              {
                articleList.map(item => (
                  <option key={item.id} value={item.id}>{item.title}</option>
                ))
              }
            </select>
          </p>
          <p className="field">
            <span className="title">下一篇：</span>
            <select
              name="next_id"
              value={this.state.nextId}
              onChange={this.handleChange}
              className="select-next">
              {
                articleList.map(item => (
                  <option key={item.id} value={item.id}>{item.title}</option>
                ))
              }
            </select>
          </p>
          <p className="field">
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              className="textarea"/>
          </p>
          <div>
            <Upload {...uploadConfig}>
              <Button>
                <Icon type="upload" /> upload
              </Button>
            </Upload>
          </div>
          <p className="field">
            <input
              type="button"
              className="btn-submit"
              onClick={this.saveArticle.bind(this)}
              value='发表'/>
          </p>
        </form>
      </div>
    )
  }
  componentDidMount () {
    this.props.get_category_list()
    this.props.get_latest_list()
  }
}

if (process.env.NODE_ENV === 'development') {
  AdminArticlePost.propsType = {
    tagsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

function mapStateToProps (state) {
  return {
    tagsList: state.ArticleCategoryReducer.data,
    articleList: state.ArticleListReducer.data,
    title: state.ArticleReducer.title,
    summary: state.ArticleReducer.summary,
    content: state.ArticleReducer.content,
    pubtime: state.ArticleReducer.pubtime,
    articleTypeId: state.ArticleReducer.articleTypeId,
    prevId: state.ArticleReducer.prevId,
    nextId: state.ArticleReducer.nextId
  }
}

function mapDispatchToProps (dispatch) {
  return {
    get_category_list: bindActionCreators(get_category_list, dispatch),
    get_latest_list: bindActionCreators(get_latest_list, dispatch),
    update_title: bindActionCreators(update_title, dispatch),
    update_summary: bindActionCreators(update_summary, dispatch),
    update_content: bindActionCreators(update_content, dispatch),
    update_pubtime: bindActionCreators(update_pubtime, dispatch),
    update_article_type_id: bindActionCreators(update_article_type_id, dispatch),
    update_prev_id: bindActionCreators(update_prev_id, dispatch),
    update_next_id: bindActionCreators(update_next_id, dispatch),
    save_article: bindActionCreators(save_article, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminArticlePost)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Sidebar from '../../components/Slidebar/index'
import Table from '../../components/Table/index'
import TipsBar from '../../components/TipsBar'
import { actions as ArticleCategoryActions } from '../../redux/ArticleCategory'
import config from '../../../../config'

import style from './index.css'

@connect(state => ({
  tagList: state.ArticleCategoryReducer.data,
  text: state.ArticleCategoryReducer.text
}), {...ArticleCategoryActions})
export default class AdminArticleTag extends Component {
  constructor (props) {
    super(props)

    this.changeHandle = ::this.changeHandle
    this.addHandle = ::this.addHandle

  }

  /**
   * 更新处理
   */
  changeHandle (e) {

    const text = e.target.value
    this.props.update_text(text)

  }

  /**
   * 添加处理
   */
  addHandle () {
    this.props.add_category({
      name: this.props.text
    })
  }

  render () {
    return (
      <div className="admin-page">
        <TipsBar/>
        <div className="sildebar-wrap">
          <Sidebar />
        </div>
        <div className="admin-wrap">
          <div className="admin-article-tag-wrap admin-inner">
            <div className={style["add-wrap"]}>
              <div className={style["add-inner"]}>
                <div className={style["btn-control"]}>+</div>
                <div className={style[["add-text-wrap"]]}>
                  <input type="text"
                         className={style["text"]}
                         onChange={this.changeHandle}
                         placeholder='添加个标签呗~~'
                  />
                  <input type="button"
                         className={style["btn-add"]}
                         onClick={this.addHandle}
                         value='新增'
                  />
                </div>
              </div>
            </div>
            <Table tagList={this.props.tagList} delete_category={this.props.delete_category} />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.props.get_category_list()
  }
}

AdminArticleTag.defualtProps = {
  tagList: []
}

if (config.ISDEV) {
  AdminArticleTag.propTypes = {
    tagList: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Table from '../../components/Table/index'
import { actions } from '../../../../redux/reducers/ArticleCategory'

import './index.css'

const { get_category_list } = actions

class AdminArticleTag extends Component {
  constructor (props) {
    super(props)

  }

  static defaultProps = {
    tagList: []
  }

  static propsType = {
    tagsList: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render () {
    return (
      <div className="admin-article-tag-wrap admin-inner">
        <Table tagList={this.props.tagList} />
      </div>
    )
  }

  componentDidMount () {
    this.props.get_category_list()
  }
}

function mapStateToProps (state) {
  return {
    tagList: state.ArticleCategoryReducer.data
  }
}

function mapDispatchtoProps (dispatch) {
  return {
    get_category_list: bindActionCreators(get_category_list, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(AdminArticleTag)

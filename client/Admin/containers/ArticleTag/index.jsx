import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Sidebar from '../../components/Slidebar/index'
import Table from '../../components/Table/index'
import { actions } from '../../../User/redux/reducers/ArticleCategory'

import './index.css'

const { get_category_list } = actions

class AdminArticleTag extends Component {
  constructor (props) {
    super(props)

  }

  static defaultProps = {
    tagList: []
  }

  render () {
    return (
      <div className="admin-page">
        <div className="sildebar-wrap">
          <Sidebar />
        </div>
        <div className="admin-wrap">
          <div className="admin-article-tag-wrap admin-inner">
            <Table tagList={this.props.tagList} />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.props.get_category_list()
  }
}

if (process.env.NODE_ENV === 'development') {
  AdminArticleTag.propTypes = {
    tagsList: PropTypes.arrayOf(PropTypes.object).isRequired
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

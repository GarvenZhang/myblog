import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LatestItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import { actions as ArticleListActions } from '../../redux/ArticleList'
import config from '../../../../config'

import './index.css'

const { get_search_list } = ArticleListActions

@connect(state => state.searchReducer, {get_search_list})
export default class SearchList extends Component {
  constructor (props) {
    super(props)

    this.paginateHandle = this.paginateHandle.bind(this)
  }

  static defaultProps = {
    data: [],
    page_num: 0,
    per_page: 10,
    total_count: 10,
    is_end_page: false
  }

  paginateHandle () {

  }

  render () {
    return (
      <div className="home-page">
        <Header/>
        <main className="main">
          <div className="article-search-block nav-details-item">
            <div className="nav-details-inner" ref={div => this.$scrollWrap = div}>
              <ul className="article-list latest--list">
                {
                  this.props.data.map(item => (
                    <LatestItem {...item} key={item.id} />
                  ))
                }
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }

  componentDidMount () {
    if (this.props.data.length === 0) {
      // 通过url获取参数
      const querys = this.props.location.search.slice(1)
      let paramsObj = {}
      querys.split('&').forEach(item => {
        const key = item.split('=')[0]
        const val = item.split('=')[1]
        paramsObj[key] = val
      })
      this.props.get_search_list(paramsObj.title, paramsObj.page_num, paramsObj.per_page)
    }
  }
}

if (config.ISDEV) {
  SearchList.propTypess = {
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired,
    page_num: PropTypes.number.isRequired,
    per_page: PropTypes.number.isRequired,
    total_count: PropTypes.number.isRequired,
    is_end_page: PropTypes.bool.isRequired
  }
}

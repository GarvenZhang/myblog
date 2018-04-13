import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { LatestItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import { actions } from '../../../../redux/reducers/ArticleList'

import './index.css'

const { get_search_list } = actions

class SearchList extends Component {
  constructor (props) {
    super(props)

    this.paginateHandle = this.paginateHandle.bind(this)
  }

  static defaultProps = {
    data: [],
    pageNum: 0,
    perPage: 10,
    totalCount: 10,
    isEndPage: false
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
      this.props.get_search_list(paramsObj.title, paramsObj.pageNum, paramsObj.perPage)
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  SearchList.propsTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageNum: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    isEndPage: PropTypes.bool.isRequired
  }
}

function mapStateToProps (state) {
  return state.searchReducer
}

function mapDispatchToProps (dispatch) {
  return {
    get_search_list: bindActionCreators(get_search_list, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList)

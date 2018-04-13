import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { LatestItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import LoadMore from '../../components/LoadMore'
import { actions } from '../../../../redux/reducers/ArticleList'
import { debounce } from '../../../../lib/index'

import './index.css'

const { get_latest_list } = actions

class Home extends Component {
  constructor (props) {
    super(props)

    this.loadMoreHandle = this.loadMoreHandle.bind(this)
    this.debounce = null
  }

  static defaultProps = {
    data: [],
    pageNum: 0,
    perPage: 10,
    totalCount: 10,
    isEndPage: false
  }

  componentWillMount () {
    this.debounce = debounce(this.loadMoreHandle, 250).bind(this)
  }

  render () {
    return (
      <div className="home-page">
        <Header/>
        <main className="main">
          <Nav/>
          <div className="latest-article-block nav-details-item">
            <div className="nav-details-inner" ref={div => this.$scrollWrap = div}>
              <ul className="article-list latest--list">
                {
                  this.props.data.map(item => (
                    <LatestItem {...item} key={item.id} />
                  ))
                }
                <LoadMore
                  isEndPage={this.props.isEndPage}
                  loadMoreRef={area => this.$area = area}
                />
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }

  loadMoreHandle (e) {
    const sHeight = window.screen.height
    const top = this.$area.getBoundingClientRect().top
    if (top && top < sHeight && !this.props.isEndPage) {
      this.props.get_latest_list(this.props.pageNum + 1, this.props.perPage)
    }
  }

  componentDidMount () {
    // 第一页的数据
    if (this.props.data.length === 0) {
      this.props.get_latest_list(0, 10)
    }
    this.$scrollWrap.addEventListener('scroll', this.debounce, false)
  }
  componentWillUnmount () {
    this.$scrollWrap.removeEventListener('scroll', this.debounce, false)
    this.debounce = null
  }
}

if (process.env.NODE_ENV === 'development') {
  Home.propsTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageNum: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    isEndPage: PropTypes.bool.isRequired
  }
}

function mapStateToProps (state) {
  return state.latestReducer
}

function mapDispatchToProps (dispatch) {
  return {
    get_latest_list: bindActionCreators(get_latest_list, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

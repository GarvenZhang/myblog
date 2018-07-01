import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { BestItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import LoadMore from '../../components/LoadMore'
import { actions } from '../../redux/ArticleList'
import debounce from '../../../lib/debounce'

import './index.css'

const { get_best_list } = actions

class BestArticle extends Component {
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
    this.debounce = debounce(this.loadMoreHandle, 250)
  }

  render () {
    return (
      <div className="home-page">
        <Header/>
        <main className="main">
          <Nav/>
          <div className="best-article-block nav-details-item">
            <div className="nav-details-inner" ref={div => this.$scrollWrap = div}>
              <ul className="article-list best--list">
                {
                  this.props.data.map(item => (
                    <BestItem {...item} key={item.id} />
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
  loadMoreHandle () {
    const sHeight = window.screen.height
    const top = this.$area.getBoundingClientRect().top

    if (top < sHeight && !this.props.isEndPage) {
      this.props.get_best_list(this.props.pageNum + 1, this.props.perPage)
    }
  }
  componentDidMount () {
    document.title = '最佳博文 - 张益铭'
    // 第一页的数据
    if (this.props.data.length === 0) {
      this.props.get_best_list(0, 10)
    }
    this.$scrollWrap.addEventListener('scroll', this.debounce, false)
  }
  componentWillUnmount () {
    this.$scrollWrap.removeEventListener('scroll', this.debounce, false)
    this.debounce = null
  }


}

if (process.env.NODE_ENV === 'development') {
  BestArticle.propTypess = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageNum: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    isEndPage: PropTypes.bool.isRequired
  }
}

function mapStateToProps (state) {
  return state.bestReducer
}

function mapDispatchToProps (dispatch) {
  return {
    get_best_list: bindActionCreators(get_best_list, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestArticle)

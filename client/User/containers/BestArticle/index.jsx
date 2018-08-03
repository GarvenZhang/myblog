import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { BestItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import LoadMore from '../../components/LoadMore'
import { actions as ArticleListActions } from '../../redux/ArticleList'
import debounce from '../../../lib/debounce'
import config from '../../../../config'

import './index.css'

@connect(state => state.bestReducer, {...ArticleListActions})
export default class BestArticle extends Component {
  constructor (props) {
    super(props)

    this.loadMoreHandle = this.loadMoreHandle.bind(this)
    this.debounce = null
  }

  static defaultProps = {
    data: [],
    page_num: 0,
    per_page: 10,
    total_count: 10,
    is_end_page: false
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
                  is_end_page={this.props.is_end_page}
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

    if (top < sHeight && !this.props.is_end_page) {
      this.props.get_best_list(this.props.page_num + 1, this.props.per_page)
    }
  }
  componentDidMount () {
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

if (config.ISDEV) {
  BestArticle.propTypess = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    page_num: PropTypes.number.isRequired,
    per_page: PropTypes.number.isRequired,
    total_count: PropTypes.number.isRequired,
    is_end_page: PropTypes.bool.isRequired
  }
}

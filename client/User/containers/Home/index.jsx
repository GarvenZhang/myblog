import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Popup from '../../components/Popup'
import { LatestItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Bg from '../../components/Bg'
import Nav from '../../components/Nav'
import LoadMore from '../../components/LoadMore'
import { actions } from '../../redux/reducers/ArticleList'
import debounce from '../../../lib/debounce'
import detectWebp from '../../../lib/detectWebp'
import { Cookies } from '../../../lib/cookie'

import './index.css'

const { get_latest_list } = actions

class Home extends Component {
  
  constructor (props) {
    super(props)

    this.loadMoreHandle = this.loadMoreHandle.bind(this)
    this.debounce = null

  }
  
  // === 提供默认值，当父组件没有提供相应的props时就使用此 === //
  static defaultProps = {
    data: [{}],
    pageNum: 0,
    perPage: 10,
    totalCount: 10,
    isEndPage: false
  }

  componentWillMount () {

    this.debounce = debounce(this.loadMoreHandle, 100).bind(this)

    if (typeof window !== 'undefined') {

      detectWebp('alpha', function (feature, isSupport) {

        if (isSupport) {
          Cookies.set('supportWebp', true, {
            maxAge: 60 * 60 * 24 * 7,
            domain: '.hellojm.cn'
          })
        } else {
          Cookies.set('supportWebp', false, {
            domain: '.hellojm.cn'
          })
        }

      })

    }

  }

  render () {
    return (
      <div className='home-page'>
        <Bg/>
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
                  loadMoreRef={area => this.$loadmore = area}
                />
              </ul>
            </div>
          </div>
        </main>
        <Popup />
      </div>
    )
  }
  
  /**
   * 加载更多
   * // === 判断条件：以底部的下拉提示框为目标，判断它 距离可视区顶部的距离(getBoundingClientRect().top()) 以及 可视区高度，若小于则证明出现在了可视区，此时应该去请求数据 === //
   */
  loadMoreHandle () {

    const sHeight = window.screen.height
    const top = this.$loadmore.getBoundingClientRect().top

    if (top < sHeight && !this.props.isEndPage) {
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

// === propTypes 会在 defaultProps 之后执行，因此对 defaultProps 也会检查 === //
if (process.env.NODE_ENV === 'development') {
  Home.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
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

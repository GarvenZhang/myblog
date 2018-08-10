import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { LatestItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Bg from '../../components/Bg'
import Nav from '../../components/Nav'
import LoadMore from '../../components/LoadMore'
import { actions as ArticleActions } from '../../redux/ArticleList'
import { actions as StorageActions } from '../../redux/Storage'
import debounce from '../../../lib/debounce'
import config from '../../../../config'

import './index.css'

const { get_latest_list } = ArticleActions
const { get_storage } = StorageActions

// === 生命周期: === //
// === 1 挂载或卸载: === //
// === 1.1 constructor(props): 初始化组件, 绑定函数到this === //
// === 1.2 componentWillMount(): 挂载前, 无法进行dom操作, 不能更新state, 一般用于配置根组件, 除此外能做的都可以在 constructor 中完成 === //
// === 1.3 render(): 将虚拟dom插到到真实dom === //
// === 1.4 componentDidMount(): 挂载后, 进行异步请求等 === //
// === 1.5 componentWillUnMount(): 卸载前, 通常做的是 释放内存, 重置选项等
//  === //
// === 2 更新: === //
// === 2.1 componentWillReceiveProps(nextProps) === //
// === 2.2 shouldComponentUpdate(nextProps, nextState): 判断是否应该更新 === //
// === 2.3 componentWillUpdate(nextProps, nextState): 更新前 === //
// === 2.4 render(): 将虚拟dom中改变了的反映到真实dom === //
// === 2.5 componentDidUpdate(): 更新后 === //

// === 装饰器: === //
// === 1 类的装饰: 必须在类的上一行写，用来修改类的行为, 将对象(函数/类)传入, 通过内部加强返回新的对象(函数/类) === //
// === 1.1 例子: @connect === //
/*
@connect (mapStateToProps, mapDispatchToProps)
class Home {}

// 等同于

class Home {}
Home = connect (mapStateToProps, mapDispatchToProps)(Home)
*/
// === 配置: babel-plugin-transform-decorators-legacy + bebal plugins中 "transform-decorators-legacy" === //

@connect(
  state => state.latestReducer,
  {get_latest_list, get_storage}
)
export default class Home extends Component {
  
  constructor (props) {
    super(props)

    this.loadMoreHandle = ::this.loadMoreHandle
    this.debounce = null

  }
  
  // === defaultProps: 提供默认值，当父组件没有提供相应的props时就使用此 === //
  static defaultProps = {
    data: [{}],
    page_num: 0,
    per_page: 10,
    total_count: 10,
    is_end_page: false
  }

  componentWillMount () {

    this.debounce = debounce(this.loadMoreHandle, 100).bind(this)

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
                  is_end_page={this.props.is_end_page}
                  loadMoreRef={area => this.$loadmore = area}
                />
              </ul>
            </div>
          </div>
        </main>
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

    if (top < sHeight && !this.props.is_end_page) {
      this.props.get_latest_list(this.props.page_num + 1, this.props.per_page)
    }

  }

  componentDidMount () {

    // 第一页的数据
    if (this.props.data.length === 0) {
      this.props.get_latest_list(0, 10)
    }
    this.$scrollWrap.addEventListener('scroll', this.debounce, false)

    // 存localStorage
    !localStorage.getItem('loadingGif') && this.props.get_storage()

  }

  componentWillUnmount () {

    this.$scrollWrap.removeEventListener('scroll', this.debounce, false)
    this.debounce = null

  }
}

// === propTypes: 会在 defaultProps 之后执行，因此对 defaultProps 也会检查 === //
if (config.ISDEV) {
  Home.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    page_num: PropTypes.number.isRequired,
    per_page: PropTypes.number.isRequired,
    total_count: PropTypes.number.isRequired,
    is_end_page: PropTypes.bool.isRequired
  }
}

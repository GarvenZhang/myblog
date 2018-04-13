import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { escapeStr } from '../../../../lib/index'

import './index.css'

import { actions as ArticleLinkListActions } from '../../../../redux/reducers/ArticleLinkList'

const { get_article_link_list } = ArticleLinkListActions

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      key: '',
      selectedData: []
    }
    this.changeHandle = this.changeHandle.bind(this)
    this.focusHandle = this.focusHandle.bind(this)
    this.blurHandle = this.blurHandle.bind(this)
    this.searchHandle = this.searchHandle.bind(this)
  }
  
  static defaultProps = {
    data: []
  }

  changeHandle (e) {
    // 修改key
    const key = e.target.value
    // 修改selectedData
    let selectedData = []
    this.props.data.forEach(item => {
      let pos = item.name.indexOf(key)
      if ( pos > -1) {
        selectedData.push({
          ...item,
          pos
        })
      }
    })
    // 排序
    selectedData = selectedData.sort(function (prev, next) {
      return prev - next
    })
    // 改变状态
    this.setState({
      key,
      selectedData
    })
  }

  blurHandle (e) {
    if (!e.target.classList.contains('search-inp')) {
      this.$list.classList.add('hide')
    }
  }

  focusHandle () {
    this.$list.classList.remove('hide')
  }

  searchHandle (e) {
    if (e.type === 'keypress' && e.key !== 'Enter') {
      return
    }
    // 拦截器

    // 跳转
    window.open(`/article-search?title=${encodeURIComponent(this.state.key)}&pageNum=0&perPage=10`)
  }

  titleHandle () {
    const querys = decodeURIComponent(window.location.search.slice(1))
    let paramsObj = {}
    querys.split('&').forEach(item => {
      const key = item.split('=')[0]
      const val = item.split('=')[1]
      paramsObj[key] = val
    })
    return paramsObj.title
  }

  render () {
    const title = typeof window !== 'undefined' ? this.titleHandle() : ''
    return (
      <header className="header">
        <a href="https://garvenzhang.github.io/" style={{position: 'absolute', top: 0, left: 0}}>新博客改版进行中，点击进入旧博客地址！</a>
        <h1 className="page-title hide">张益铭的前端小博客</h1>
        <div className="search-wrap">
          <input type="text"
                 className="search-inp"
                 value={this.state.key}
                 onChange={this.changeHandle}
                 onFocus={this.focusHandle}
                 onKeyPress={this.searchHandle}
                 placeholder={title ? escapeStr(title): '想搜索些啥文章呢？'}
          />
          <input type="button"
                 className="search-btn"
                 onClick={this.searchHandle}
                 value={'搜索'}/>
          <ul className="search-list hide" ref={list => this.$list = list}>
            {
              this.state.selectedData.map(item => (
                <li className="search-item">
                  <a target="_blank" href={`/article/${item.id}`} className="item-link">{item.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </header>
    )
  }

  componentDidMount () {
    if (this.props.data.length === 0) {
      this.props.get_article_link_list()
    }

    document.body.addEventListener('click', this.blurHandle, false)
  }
  componentWillUnmount () {
    document.body.removeEventListener('click', this.blurHandle, false)
  }
}

if (process.env.NODE_ENV === 'development') {
  Search.propsTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

function mapStateToProps (state) {
  return state.ArticleLinkListReducer
}

function mapDispatchToProps (dispatch) {
  return {
    get_article_link_list: bindActionCreators(get_article_link_list, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

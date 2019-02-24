import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import style from './index.css'

import { escapeHtml } from '../../../lib/xss'
import { actions as ArticleLinkListActions } from '../../redux/ArticleLinkList'
import { actions as PopupActions } from '../../redux/Popup'
import eventloop from './eventloop'
import searchResult from './searchResult'
import num2money from './num2money'
import calcHandle from './calcHandle'
import palindrome from './palindrome'
import titleHandle from './titleHandle'
import config from '../../../../config'

const { get_article_link_list } = ArticleLinkListActions
const { update_popup } = PopupActions

// === 原生键盘类事件 === //
// === 1.触发顺序: focus - keydown - keypress - input - keyup - change - blur  === //
// === 2.触发时机：focus - 聚焦时 ; keydown / keypress / input - 按下键盘时，其中keypress不可通过特殊键触发，input是真正改变文本框内容的时机； change - 改变 ; blur - 失焦时 === //
// === react中：input 和 change 同时改变state的话，input的失效，change会代替input === //

@connect(
  state => state.ArticleLinkListReducer,
  {get_article_link_list, update_popup}
)
export default class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: '',
      selectedData: [],
      title: titleHandle(),
      isFocus: false,
      isDetectKeyEvent: false
    }

    this.focusHandle = ::this.focusHandle
    this.keydownHandle = ::this.keydownHandle
    this.keypressHandle = ::this.keypressHandle
    this.inputHandle = ::this.inputHandle
    this.keyupHandle = ::this.keyupHandle
    this.changeHandle = ::this.changeHandle
    this.blurHandle = ::this.blurHandle

  }
  
  static defaultProps = {
    data: []
  }

  /**
   * focus事件处理程序
   */
  focusHandle () {

    // this.$list.classList.remove('hide')

  }

  /**
   * keydown事件处理程序
   */
  keydownHandle (e) {

    if (e.keyCode === 186) {
      this.setState({
        isDetectKeyEvent: true,
        title: `focus-keydown`
      })
    }

  }

  /**
   * keypress事件处理程序
   */
  keypressHandle (e) {

    if (this.state.isDetectKeyEvent) {
      this.setState({
        title: `${this.state.title}-keypress`
      })
      return
    }

    if (e.type === 'keypress' && e.key !== 'Enter') {
      return
    }

    const key = this.state.key

    // 回文
    if (this::palindrome(key)) {
      return
    }

    // 拦截器

    // 跳转
    window.open(`/search?title=${encodeURIComponent(key)}&page_num=0&per_page=10`)
  }

  /**
   * input事件处理程序
   */
  inputHandle () {

    if (this.state.isDetectKeyEvent) {
      this.setState({
        title: `${this.state.title}-input`
      })
    }
    
  }

  /**
   * keyup事件处理程序
   */
  keyupHandle () {
  
    if (this.state.isDetectKeyEvent) {
      this.setState({
        title: `${this.state.title}-keyup`
      })
    }
    
  }

  /**
   * change事件处理程序
   */
  changeHandle (e) {

    if (this.state.isDetectKeyEvent) {
      this.setState({
        title: `${this.state.title}-change`
      })
      return
    }

    // 计算
    if (this::calcHandle()) {
      return
    }

    // 数字格式化为千分位money格式
    if (this::num2money()) {
      return
    }

    // 正常搜索结果处理
    this::searchResult(e)

  }

  /**
   * blur事件处理程序
   */
  blurHandle (e) {

    if (this.state.isDetectKeyEvent && e.type !== 'click') {
      this::eventloop()
    }

  }

  render () {

    return (
      <header className={style['header']}>
        <h1 className="page-title hide">张益铭的前端小博客</h1>
        <div className={style['search-wrap']}>
          <input type="text"
                 className={style['search-inp']}
                 value={this.state.key}
                 onFocus={this.focusHandle}
                 onKeyDown={this.keydownHandle}
                 onInput={this.inputHandle}
                 onKeyUp={this.keyupHandle}
                 onKeyPress={this.keypressHandle}
                 onChange={this.changeHandle}
                 onBlur={this.blurHandle}
                 placeholder={escapeHtml(this.state.title)}
          />
          <input type="button"
                 className={style['search-btn']}
                 onClick={this.keypressHandle}
                 value={'搜索'}
          />
          <ul className={`${style['search-list']} ${this.state.selectedData.length === 0 ? 'hide' : ''}`} ref={list => this.$list = list}>
            {
              this.state.selectedData.map(item => (
                <li className={style['search-item']} key={item.id}>
                  <Link target="_blank" to={`/article/${item.id}`} className={style["item-link"]}>{item.name}</Link>
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

if (config.ISDEV) {
  Search.propTypess = {
    data: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired
  }
}

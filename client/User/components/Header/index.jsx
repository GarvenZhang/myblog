import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import style from './index.css'

import { escapeStr } from '../../../lib/index'
import { actions as ArticleLinkListActions } from '../../redux/reducers/ArticleLinkList'
import { actions as PopupActions } from '../../redux/reducers/Popup'

const { get_article_link_list } = ArticleLinkListActions
const { update_popup } = PopupActions

// === 原生键盘类事件 === //
// === 1.触发顺序: focus - keydown - keypress - input - keyup - change - blur  === //
// === 2.触发时机：focus - 聚焦时 ; keydown / keypress / input - 按下键盘时，其中keypress不可通过特殊键触发，input是真正改变文本框内容的时机； change - 改变 ; blur - 失焦时 === //
// === react中：input 和 change 同时改变state的话，input的失效，change会代替input === //

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: '',
      selectedData: [],
      title: this.titleHandle(),
      isFocus: false,
      isDetectKeyEvent: false
    }

    this.focusHandle = this.focusHandle.bind(this)
    this.keydownHandle = this.keydownHandle.bind(this)
    this.keypressHandle = this.keypressHandle.bind(this)
    this.inputHandle = this.inputHandle.bind(this)
    this.keyupHandle = this.keyupHandle.bind(this)
    this.changeHandle = this.changeHandle.bind(this)
    this.blurHandle = this.blurHandle.bind(this)

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

    // === 回文：正着倒着都一样 === //
    // === 改变字符最容易的思路：转成数组操作后再转回 === //
    if (key === key.split('').reverse().join('')) {
      this.props.update_popup({
        isOpen: 1,
        header: 'Warning:',
        content: '回文是吧？不行不行~~'
      })
      return
    }

    // 拦截器

    // 跳转
    window.open(`/article-search?title=${encodeURIComponent(key)}&pageNum=0&perPage=10`)
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
    if (this.calcHandle()) {
      return
    }

    // 修改key
    const key = e.target.value

    // 空则
    if (key === '') {
      this.setState({
        key,
        selectedData: []
      })
      return
    }

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

  /**
   * blur事件处理程序
   */
  blurHandle (e) {

    if (this.state.isDetectKeyEvent && e.type !== 'click') {

      // === 事件循环机制： === //
      
      // === 1.分为4部分：代码、调用栈、webcore模块、任务队列 === //
      // === 1.1 代码：可执行代码 === //
      // === 1.2 调用栈：js有一个 主进程 和 调用堆栈，对一个调用堆栈中的任务进行处理时，其它的都要等着 === //
      // === 1.3 webcore模块：webkit内核在js执行引擎外，提供了webcore模块，用来对类似DOM，ajax，setTimeout这些api提供底层的如DOM Binding，network，timer模块进行处理 === //
      // === 1.4 任务队列：等webcore模块处理完后将回调放入任务队列，之后等调用栈中的任务执行完后再去执行队列中的任务 === //
      
      // === 2.以下面为例： === //
      // === 2.1 当i为5时，调用栈 发现 循环体 内是setTimeout，将其出栈后把延时执行的函数交给 timer 模块处理  === //
      // === 2.2 当为 4，3，2，1 时，和 i 为 5 时相同，因此 timer 模块会有5个相同的延时执行函数 === //
      // === 2.3 当为 0 时，不满足循环条件，循环结束，this.setState({title: `${this.state.title}-blur`}) 入调用栈，执行后出栈 === //
      // === 2.4 1s后，timer 模块将 5 个回调按照注册顺序依次返回给任务队列 === //
      // === 2.5 执行引擎去执行 任务队列时，5个函数依次 入调用栈，执行，出栈，此时5个函数访问到的 i 都为 0 === //
      // === 2.6 第一个回调执行后，key变为true，之后的4个回调都无法执行 === //

      var i = 0

      for (let key = false; i--; ) {

        setTimeout(() => {
          
          if (i === 0 && !key) {

            this.setState({
              title: `想搜索些啥文章呢？`,
              isDetectKeyEvent: false
            })

            key = true
          }
          
        }, 1000)

      }

      // === 闭包：由执行上下文及执行上下文中的函数组成，是有权访问另一个函数作用域中的函数，也可简便地理解为有数据的函数 === //
      // === 分析如下代码： === //
      // === 1.若没有IIFE，setTimeout中的回调获取到的i是 5 === //
      // === 2.有了IIFE，setTimeout中的回调获取到的是传进去IIFE中的实参 === //
      // === 3.闭包就是：setTimeout代码块与index等IIFE中的数据组成 === //

      for (var j = 0; j < 5; ++j) {
        
        (function (index) {

          setTimeout(function () {
            i = index
          }, 0)

        })(j)
        
      }

      // === es6 块级作用域 中的 let 等价于以上用IIFE的方法 === //
      for (let k = 0; k < 5; ++k) {

        setTimeout(function () {
          i = k
        }, 10)

      }



      // === 3.任务源： === //
      // === 3.1 macro-task：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。 === //
      // === 3.2 micro-task: process.nextTick, Promises, Object.observe, MutationObserver === //

      // === 4.执行顺序：=== //
      // === 4.1 事件循环的顺序是从script开始第一次循环，随后全局上下文进入函数调用栈，碰到macro-task就将其交给处理它的模块处理完之后将回调函数放进macro-task的队列之中，碰到micro-task也是将其回调函数放进micro-task的队列之中。 === //
      // === 4.2 直到函数调用栈清空只剩全局执行上下文，然后开始执行所有的micro-task。当所有可执行的micro-task执行完毕之后。=== //
      // === 4.3 循环再次执行macro-task中的一个任务队列，执行完之后再执行所有的micro-task，就这样一直循环。=== //

      // === 5.分析如下代码： === //
      // === 5.1 script任务源先执行，全局上下文入栈 === //
      // === 5.2 script任务源的代码执行之前的。。。。，到这一步为止(这里才是重点) === //
      // === 5.3 script任务源的代码的代码执行到 let key = 0, 入调用栈，执行，出栈 === //
      // === 5.4 script任务源执行到setTimeout时，作为一个macro-task，将其回调放入自己的队列 === //
      // === 5.5 script任务源执行到Promise实例时，Promise中的第一个参数直接执行，入栈执行后，即 key 此时为 1 ，resolve执行，状态变为 Fullfilled 出栈 === //
      // === 5.6 script任务源执行到then，将其作为回调放入 micro-task 队列 === //
      // === 5.7 script任务源执行到 return，此时 macro-task 中的script执行完毕 === //
      // === 5.8 接着先执行 micro-task 队列中的任务，then的回调入栈执行后出栈，key变为 2 === //
      // === 5.9 接着执行 macro-task 队列中的任务，setTimeout的回调入栈执行后出栈，key变为 1，满足条件，执行了setState === //

      let key = 0

      setTimeout(() => {
        
        --key

        if (key === 1) {
          this.setState({
            title: `${this.state.title}-blur`,
          })
        }

      }, 0)


      new Promise(function (resolve, reject) {

        ++key
        resolve()

      })
        .then(function (resolve, reject) {

          ++key

        })


      return
    }

  }

  /**
   * 处理title
   */
  titleHandle () {

    // server端
    if (typeof window === 'undefined') {
      return ''
    }

    // 没有则不处理
    const search = window.location.search
    if (search === '') {
      return ''
    }

    // 从url中获取title
    const querys = decodeURIComponent(search.slice(1))

    let paramsObj = {}

    querys.split('&').forEach(item => {
      const key = item.split('=')[0]
      const val = item.split('=')[1]
      paramsObj[key] = val
    })

    return paramsObj.title
  }

  /**
   * 计算乘积
   * @param {Arguments} nums - 参数
   * @return {Number}
   * @private
   */
  _mult (...nums) {

    let ret = 1

    for (let num of nums) {
      ret *= num
    }

    return ret

  }

  /**
   * 计算加和
   * @param {Arguments} nums - 参数
   * @return {Number}
   * @private
   */
  _plus (...nums) {

    let ret = 0

    for (let num of nums) {
      ret += num
    }

    return ret

  }

  /**
   * 算术处理
   * // === 缓存代理: 缓存代理，为一些开销很大的运算结果提供暂时的存储，在下次运算时，如果参数跟之前的一致，则可以直接返回前面存储的结果 === //
   * // === 1 实现: === //
   * // === 1.1 使用高阶函数动态创建代理 === //
   * // === 1.2 把计算方法当作参数传入一个专门用于创建缓存代理的工厂中 === //
   * @param {Function} fn - 回调
   * @private
   */
  _createProxyFactory (fn) {

    let cache = {}

    return function (...args) {

      const _args = args
        .replace(/[+*]/, '')
        .split(' ')

      if (args in cache) {
        return cache[args]
      }

      return cache[args] = fn.apply(this, _args)

    }

  }

  /**
   * 判断计算类型
   * @return {Boolean}
   */
  calcHandle () {

    const key = this.state.key

    if (key.test(/^[+\d]+$/)) {

      const proxyPlus = this._createProxyFactory(this._plus)

      this.props.update_popup({
        isOpen: 1,
        header: '计算结果:',
        content: proxyPlus(key)
      })

      return true

    }

    if (key.test(/^[*\d]+$/)) {

      const proxyMult = this._createProxyFactory(this._mult)

      this.props.update_popup({
        isOpen: 1,
        header: '计算结果:',
        content: proxyMult(key)
      })

      return true

    }

    return false

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
                 placeholder={escapeStr(this.state.title)}
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
                  <a target="_blank" href={`/article/${item.id}`} className={style["item-link"]}>{item.name}</a>
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
  Search.propTypess = {
    data: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired
  }
}

function mapStateToProps (state) {
  return state.ArticleLinkListReducer
}

function mapDispatchToProps (dispatch) {
  return {
    get_article_link_list: bindActionCreators(get_article_link_list, dispatch),
    update_popup: bindActionCreators(update_popup, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

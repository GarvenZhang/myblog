import React, { Component } from 'react'

import history from '../../router/history'
import axios from '../../fetch/axios'
import store from '../../redux/store'
import { actionTypes as USER_ACTIONTYPES } from '../../redux/User'

import style from './index.css'

// === 高阶组件: 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件 === //
// === 1 注意: === //
// === 1.1 不要再render函数中使用高阶组件 === //
// === 1.2 必须将静态方法做拷贝 === //
// === 1.3 Refs属性不能传递 === //

export default WrappedComponent => {

  return class extends Component {

    constructor (props) {
      super(props)

      this.state = {
        tipsType: 0
      }

      this.changeHandle = ::this.changeHandle
      this.reLoginHandle = ::this.reLoginHandle
      this.infoHandle = ::this.infoHandle

    }

    componentWillMount () {

      axios.interceptors.response.use(res => {

        // blacklist
        const notToCheckList = [
          '/api/login',
        ]

        // token过期
        if (res.status === 401 && !notToCheckList.some(item => item === res.config.url)) {

          window.localStorage.setItem('access_token', '')

          // 跟新用户状态
          this.setState({
            tipsType: 2
          })
        }

        // 若响应的状态码为4xx，则给予用户提示
        if (res.status >= 400 && res.status < 500) {
          return Promise.reject(res.data)
        }

        return res.data
      })

    }

    /**
     * tipsType更新处理
     */
    changeHandle (tipsType) {
      this.setState({
        tipsType
      })
    }

    /**
     * 重新登录处理
     */
    reLoginHandle () {

      // 路由
      history.push('/')

      // 重置
      window.localStorage.setItem('access_token', '')

      // 改变验证码
      store.dispatch({
        type: USER_ACTIONTYPES.UPDATE_CAPTCHA,
        captchaId: new Date().getTime()
      })

    }

    /**
     * 提示信息渲染处理
     */
    infoHandle () {

      let $p

      switch (this.state.tipsType) {

        case 0:
          $p = <p className={`${style['tips']} ${style['tips--0']}`}>欢迎回到 <span className={style['theme']}>博客cms</span> !</p>
          break

        case 1:
          $p = <p className={`${style['tips']} ${style['tips--1']}`}>您目前属于普通用户，只有 <span className={'theme'}>参阅权限</span> ！</p>
          break

        case 2:
          $p = <p className={`${style['tips']} ${style['tips--2']}`}>由于您登录太长时间，为确保您的安全，需 <span className={'theme'}>重新登录</span> ！<span onClick={this.reLoginHandle} className={style['link']}>点此重新登录</span> </p>
          break
      }

      return <div className={style['tipsbar-wrap']}>{$p}</div>

    }

    // === 组件内性能优化: === //
    // === 1 render会每次更新数据时都会执行, 而在diff比较的时候, 由于 {a: 1} != {a: 1}, 即引用类型都会新建内存地址从而不同, 所以jsx中不要直接以对象字面量的形式的形式传值, 如 style={{color: 'red'}} === //
    // === 2 绑定this 要放到constructor 中去, 在jsx中 onClick={this.clickHandle.bind(this)} 会在每次执行render时都会执行bind函数, onClick={() => this.clickHandle()} 会在每次 render 时都声明新的函数 === //
    // === 3 在传给子组件值时 做到 需要什么传什么, {...this.state} 这样的写法 会传很多 额外的值 === //
    render () {
      return (
        <WrappedComponent tipsCompnent={this.infoHandle()} {...this.props}/>
      )
    }

  }
}

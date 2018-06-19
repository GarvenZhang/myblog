import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { IndexRouteMap } from './router/index'
import configureStore from './redux/store/configureStore'

import '../static/styles/reset.css'
import '../static/font/iconfont.css'
import '../static/styles/index.css'

// 前后端同构时的数据埋点
const store = configureStore(window.__REDUX_DATA__ || {})

// 入口
render()

// hrm
module.hot && module.hot.accept('./router', () => render())

// === redux与react绑定： === //
// === 1 分开的原因: 前端框架或者类库的构架趋势，尽可能做到与平台无关，从核心逻辑、具体与平台相关的实现两个层面拆分，以保证核心功能做到最大程度的跨平台复用 === //
// === 2 Provider组件: 接受一个store作为props, 是整个Redux应用的顶层组件 === //
// === 2 connect(): 提供了在整个React应用的任何组件中获取store中数据的功能 === //

/**
 * render函数
 */
function render () {
  ReactDOM.render(
    process.env.NODE_ENV === 'development'
      ? <AppContainer>
        <Provider store={store}>
          <IndexRouteMap />
        </Provider>
      </AppContainer>
      : <Provider store={store}>
        <IndexRouteMap />
      </Provider>,
    document.getElementById('root')
  )
}

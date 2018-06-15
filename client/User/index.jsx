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

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { IndexRouteMap } from './router/index'
import store from './redux/store'
import config from '../../config'

import './assets/font/iconfont.css'
import './assets/style/reset.css'
import './router/index.css'
import '../../favicon.ico'

// === 点击劫持防御 - 禁止内嵌: window有两个属性, top和parent, top指向最上层的window, parent指向父window, 可通过 top.location 与 window.location 对比来确定是否被内嵌 === //
if (typeof window !== 'undifined' && top.location != window.location) {
  top.location = window.location
}

// 入口
render()

// hrm
module.hot && module.hot.accept('./router', () => render())

/**
 * render函数
 */
function render () {
  ReactDOM.render(
    config.ISDEV
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

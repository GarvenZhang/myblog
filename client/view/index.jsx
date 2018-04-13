import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { IndexRouteMap, CMSRouteMap } from '../router/index'
import configureStore from '../redux/store/configureStore'
import config from '../../config'

import './reset.css'
import '../static/fonts/iconfont.css'
import './index.css'

// 前后端同构时的数据埋点
const store = configureStore(window.__REDUX_DATA__ || {})

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

// 官网
if (window.location.port === config.dev.indexPort) {
  render(IndexRouteMap)
// cms
} else if (window.location.port === config.dev.cmsPort) {
  render(CMSRouteMap)
}

if (module.hot) {
  module.hot.accept('../router', () => {
    render(IndexRouteMap)
    render(require('../router'))
  })
}

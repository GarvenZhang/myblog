import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { IndexRouteMap, CMSRouteMap } from '../router/index'
import configureStore from '../redux/store/configureStore'
import config from '../../config'

import './static/styles/reset.css'
import './static/font/iconfont.css'
import './static/styles/index.css'

// 前后端同构时的数据埋点
const store = configureStore(window.__REDUX_DATA__ || {})

const render = Component => {
  ReactDOM.render(
    process.env.NODE_ENV === 'development'
      ? <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>
      : <Provider store={store}>
        <Component />
      </Provider>,
    document.getElementById('root')
  )
}

// 官网
if (window.location.port === config.indexPort) {
  render(IndexRouteMap)
// cms
} else if (window.location.port === config.cmsPort) {
  render(CMSRouteMap)
}

if (module.hot) {
  module.hot.accept('../router', () => {
    render(IndexRouteMap)
    render(require('../router'))
  })
}

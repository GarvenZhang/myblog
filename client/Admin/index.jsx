import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { CMSRouteMap } from './router/index'
import configureStore from './redux/configureStore'

import '../static/styles/reset.css'
import '../static/font/iconfont.css'
import '../static/styles/index.css'

// 前后端同构时的数据埋点
const store = configureStore({})

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

render(CMSRouteMap)

if (module.hot) {
  module.hot.accept('./router', () => {
    render(CMSRouteMap)
  })
}

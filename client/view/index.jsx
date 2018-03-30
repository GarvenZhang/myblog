import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'

import RouteMap from '../router/index'
import store from '../redux/store/index'

import './reset.css'
import '../static/fonts/iconfont.css'
import './index.css'

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

render(RouteMap)

if (module.hot) {
  module.hot.accept('./router', () => {
    render(RouteMap)
    render(require('./router'))
  })
}

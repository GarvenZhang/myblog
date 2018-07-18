import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { CMSRouteMap } from './router/index'
import store from './redux/store'

import '../static/styles/reset.css'
import '../static/font-cms/iconfont.css'
import '../static/styles/index.css'

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

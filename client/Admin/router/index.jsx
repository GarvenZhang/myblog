// === webpack优化之按需加载：按需加载每个页面的逻辑 === //
// === 1 与React-Router结合：写一个异步加载组件，通过webpack官网中import的用法来引入不同组件 === //
// === 2 output中的chunkFilename: 为动态加载的 Chunk 配置输出文件的名称 === //

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'

import getAsyncComponent from './asyncLoad'

// import loadable from 'react-loadable'

// cms
import Login from '../../Admin/containers/Login/index'
import NoMatch from '../containers/NoMatch/index'

// cms
const CMSRouteMap = () => (
  <HashRouter>
    <Switch>
      <Route path='/post' component={getAsyncComponent(
        () => import( /* webpackChunkName: 'post' */ '../containers/ArticlePost/index' )
      )}/>
      <Route path='/info' component={getAsyncComponent(
        () => import( /* webpackChunkName: 'account' */ '../containers/Info/index' )
      )}/>
      <Route path='/article-tag' component={getAsyncComponent(
        () => import( /* webpackChunkName: 'article-tag' */ '../containers/ArticleTag/index' )
      )}/>
      <Route path='/chatroom' component={getAsyncComponent(
        () => import( /* webpackChunkName: 'chatroom' */ '../containers/Chatroom/index' )
      )}/>
      <Route path='/comment' component={getAsyncComponent(
        () => import( /* webpackChunkName: 'comment' */ '../containers/Comment/index' )
      )}/>
      <Route path='/works' component={getAsyncComponent(
        () => import( /* webpackChunkName: 'works' */ '../containers/Works/index' )
      )}/>
      <Route path='/general-catalogue' component={getAsyncComponent(
        () => import( /* webpackChunkName: 'general-catalogue' */ '../containers/GeneralCatalogue/index' )
      )}/>
      <Route exact path='/' component={Login}/>
      <Route component={NoMatch}/>
    </Switch>
  </HashRouter>
)

export {
  CMSRouteMap
}
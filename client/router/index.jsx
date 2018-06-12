import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'

import getAsyncComponent from './asyncLoad'

import NoMatch from '../view/User/containers/NoMatch/index'

// import loadable from 'react-loadable'

// index
import Home from '../view/User/containers/Home/index'
import SearchList from '../view/User/containers/SearchList'
import BestArticle from '../view/User/containers/BestArticle'
import ArticleCategory from '../view/User/containers/ArticleCategory/index'
import CollectionOfWorks from '../view/User/containers/CollectionOfWorks'
import Article from '../view/User/containers/Article'

// cms
import Login from '../view/Admin/containers/Login'

// 官网
const IndexRouteMap = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/article-search' component={SearchList}/>
      <Route path='/best-article' component={BestArticle}/>
      <Route path='/article-category' component={ArticleCategory}/>
      <Route path='/collection-of-works' component={CollectionOfWorks}/>
      <Route path='/article/:id' component={Article}/>
      <Route component={NoMatch}/>
    </Switch>
  </BrowserRouter>
)

// cms
const CMSRouteMap = () => (
  <HashRouter>
    <Switch>
      <Route path='/post' component={getAsyncComponent(
        () => import( /* webpackChunkName: './js/post' */ '../view/Admin/containers/ArticlePost/index' )
      )}/>
      <Route path='/info' component={getAsyncComponent(
        () => import( /* webpackChunkName: './js/account' */ '../view/Admin/containers/Info/index' )
      )}/>
      <Route path='/article-tag' component={getAsyncComponent(
        () => import( /* webpackChunkName: './js/article-tag' */ '../view/Admin/containers/ArticleTag/index' )
      )}/>
      <Route path='/chatroom' component={getAsyncComponent(
        () => import( /* webpackChunkName: './js/chatroom' */ '../view/Admin/containers/Chatroom/index' )
      )}/>
      <Route path='/comment' component={getAsyncComponent(
        () => import( /* webpackChunkName: './js/comment' */ '../view/Admin/containers/Comment/index' )
      )}/>
      <Route path='/works' component={getAsyncComponent(
        () => import( /* webpackChunkName: './js/works' */ '../view/Admin/containers/Works/index' )
      )}/>
      <Route path='/general-catalogue' component={getAsyncComponent(
        () => import( /* webpackChunkName: './js/general-catalogue' */ '../view/Admin/containers/GeneralCatalogue/index' )
      )}/>
      <Route exact path='/' component={Login}/>
      <Route component={NoMatch}/>
    </Switch>
  </HashRouter>
)

export {
  IndexRouteMap,
  CMSRouteMap
}
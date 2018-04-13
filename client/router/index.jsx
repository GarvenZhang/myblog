import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'

import Article from '../view/User/containers/Article/index'
import NoMatch from '../view/User/containers/NoMatch/index'
import Admin from '../view/Admin/index'
import ArticleCategory from '../view/User/containers/ArticleCategory/index'
import BestArticle from '../view/User/containers/BestArticle/index'
import Home from '../view/User/containers/Home/index'
import CollectionOfWorks from '../view/User/containers/CollectionOfWorks/index'
import SearchList from '../view/User/containers/SearchList'
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
      <Route exact path='/' component={Login}/>
      <Route path='/:pageName?' component={Admin}/>
    </Switch>
  </HashRouter>
)

export {
  IndexRouteMap,
  CMSRouteMap
}

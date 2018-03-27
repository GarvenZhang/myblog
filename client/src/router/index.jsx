import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'

import Article from '../view/User/containers/Article/index'
import NoMatch from '../view/User/containers/NoMatch/index'
import Admin from '../view/Admin/index'
import ArticleCategory from '../view/User/containers/ArticleCategory/index'
import BestArticle from '../view/User/containers/BestArticle/index'
import Home from '../view/User/containers/Home/index'
import CollectionOfWorks from '../view/User/containers/CollectionOfWorks/index'
import ArticleCatalog from '../view/User/containers/ArticleCatalog'

const RouteMap = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/article-catalog/:id' component={ArticleCatalog}/>
      <Route path='/best-article' component={BestArticle}/>
      <Route path='/article-category' component={ArticleCategory}/>
      <Route path='/collection-of-works' component={CollectionOfWorks}/>
      <Route path='/article/:id' component={Article}/>
      <Route path='/admin/:pageName?' component={Admin}/>
      <Route component={NoMatch}/>
    </Switch>
  </Router>
)

export default RouteMap

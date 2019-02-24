import { Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'

import Home from '../containers/Home/index'
import SearchList from '../containers/SearchList/index'
import BestArticle from '../containers/BestArticle/index'
import ArticleCategory from '../containers/ArticleCategory/index'
import CollectionOfWorks from '../containers/CollectionOfWorks/index'
import Article from '../containers/Article/index'
import NoMatch from '../containers/NoMatch/index'
import Auth from '../containers/Auth'
import history from './history'

// 官网
const IndexRouteMap = () => (
  <Router history={history}>
    <div className={'root-router'}>
      <Auth/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={SearchList} />
        <Route path='/bestlist' component={BestArticle} />
        <Route path='/category' component={ArticleCategory} />
        <Route path='/works' component={CollectionOfWorks} />
        <Route path='/article/:id' component={Article} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export { IndexRouteMap }

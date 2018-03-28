import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Layout } from '../views/Layout.js'
import configureStore from '../../client/redux/store/configureStore'
import Home from '../../client/view/User/containers/Home'
import BestArticle from '../../client/view/User/containers/BestArticle'
import ArticleCategory from '../../client/view/User/containers/ArticleCategory'
import Article from '../../client/view/User/containers/Article'
import Admin from '../../client/view/Admin'

import ArticleModel from '../models/article'
import CategoryModel from '../models/category'

/**
 * 首页
 */
export async function index (ctx) {
  let data = await ArticleModel.getLatest()
  let store = configureStore({
    ArticleListReducer: {
      data,
      pageNum: 1,
      total: 0
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} content={{}}>
        <Home/>
      </StaticRouter>
    </Provider>
  ), store.getState())
}

/**
 * 最佳博文
 */
export async function best (ctx) {
  let data = await ArticleModel.getBest()
  let store = configureStore({
    ArticleReducer: {
      data,
      pageNum: 1,
      total: 0
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} content={{}}>
        <BestArticle/>
      </StaticRouter>
    </Provider>
  ), store.getState())
}

/**
 * 文章页
 */
export async function article (ctx) {
  let id = ctx.params.id
  let data = await ArticleModel.getArticle(id)
  let store = configureStore({
    ArticleReducer: {
      title: data.title,
      summary: data.summary,
      content: data.content,
      pubtime: data.pubtime,
      articleType_id: data.articleType_id,
      prev: data.prev,
      next: data.next
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} content={{}}>
        <Article/>
      </StaticRouter>
    </Provider>
  ), store.getState())
}

/**
 * 类别
 */
export async function category (ctx) {
  let data = await CategoryModel.get()
  let store = configureStore({
    ArticleCategoryReducer: {
      data
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} content={{}}>
        <ArticleCategory/>
      </StaticRouter>
    </Provider>
  ), store.getState())
}

/**
 * CMS
 */
export async function admin (ctx) {
  let store = configureStore({})
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} content={{}}>
        <Admin/>
      </StaticRouter>
    </Provider>
  ), store.getState())
}

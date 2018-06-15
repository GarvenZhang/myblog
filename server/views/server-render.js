import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Layout } from '../views/Layout.js'
import configureStore from '../../client/User/redux/store/configureStore'
import Home from '../../client/User/containers/Home'
import BestArticle from '../../client/User/containers/BestArticle'
import ArticleCategory from '../../client/User/containers/ArticleCategory'
import Article from '../../client/User/containers/Article'
import Login from '../../client/Admin/containers/Login'

import ArticleModel from '../models/article'
import CategoryModel from '../models/tag'

/**
 * 首页
 */
export async function index (ctx) {
  let ret = await ArticleModel.getLatest(0, 10)
  let store = configureStore({
    latestReducer: {
      data: ret.data,
      pageNum: ret.pageNum,
      perPage: ret.perPage,
      totalCount: ret.totalCount,
      isEndPage: ret.isEndPage
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <Home />
      </StaticRouter>
    </Provider>
  ), store.getState(), 'home')
}

/**
 * 最佳博文
 */
export async function best (ctx) {
  let ret = await ArticleModel.getBest(0, 10)
  let store = configureStore({
    bestReducer: {
      data: ret.data,
      pageNum: ret.pageNum,
      perPage: ret.perPage,
      totalCount: ret.totalCount,
      isEndPage: ret.isEndPage
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <BestArticle />
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
      next: data.next,
      likedNum: data.likedNum,
      readNum: data.readNum,
      commentNum: 0
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <Article />
      </StaticRouter>
    </Provider>
  ), store.getState())
}

/**
 * 类别
 */
export async function category (ctx) {
  let ret = await CategoryModel.get()
  let store = configureStore({
    ArticleCategoryReducer: {
      data: ret.data
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <ArticleCategory />
      </StaticRouter>
    </Provider>
  ), store.getState())
}

/**
 * 搜索页
 */
export async function search (ctx) {
  let ret = await ArticleModel.getSearchList(ctx.query.title, ctx.query.pageNum, ctx.query.perPage)
  let store = configureStore({
    searchReducer: {
      data: ret.data,
      pageNum: ret.pageNum,
      perPage: ret.perPage,
      totalCount: ret.totalCount,
      isEndPage: ret.isEndPage
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <Home />
      </StaticRouter>
    </Provider>
  ), store.getState())
}

/**
 * 登录页
 */
export async function login (ctx) {
  // csrf_token
  const csrf_token = new Date().getTime()
  ctx.cookies.set('csrf_token', csrf_token, {
    httpOnly: true
  })

  let store = configureStore({
    UserReducer: {
      csrf_token
    }
  })
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <Login />
      </StaticRouter>
    </Provider>
  ), store.getState())
}

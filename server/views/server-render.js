import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { URL } from 'url'

import { Layout, getSsoHtml, getIframe } from '../views/Layout.js'
import { configureStore } from '../../client/User/redux/store'
import Home from '../../client/User/containers/Home'
import BestArticle from '../../client/User/containers/BestArticle'
import ArticleCategory from '../../client/User/containers/ArticleCategory'
import Article from '../../client/User/containers/Article'
import Auth from '../../client/User/containers/Auth'
import type from '../../client/lib/type'

import ArticleModel from '../models/article'
import CategoryModel from '../models/tag'
import LikedModel from '../models/liked'
import csp from '../middleware/csp'
import config from '../../config'
import Search from '../../client/User/components/Header/index'

/**
 * 将jsx转成string
 * @param {Object} ctx - koa上下文
 * @param {Object} store - redux store
 * @param {Object} component - 组件
 * @return {String}
 */
const ReactComponent = (ctx, store, Component) => renderToString(
  <Provider store={store}>
    <StaticRouter location={ctx.url} context={{}}>
      <div className="root-router">
        <Auth href={ctx.href}/>
        <Component />
      </div>
    </StaticRouter>
  </Provider>
)

/**
 * 首页
 */
export async function index (ctx) {

  // 获取state
  let ret = await ArticleModel.getLatest(0, 10)
  let store = configureStore({
    latestReducer: {...ret}
  })
  const state = store.getState()

  // 设置csp
  csp(ctx, JSON.stringify(state))
  // html
  ctx.body = Layout({
    content: ReactComponent(ctx, store, Home),
    title: '博文分类 - 张益铭',
    data: state,
  })

}

/**
 * 最佳博文
 */
export async function best (ctx) {

  let ret = await ArticleModel.getBest(0, 10)
  let store = configureStore({
    bestReducer: {...ret}
  })
  const state = store.getState()

  csp(ctx, JSON.stringify(state))

  ctx.body = Layout({
    content: ReactComponent(ctx, store, BestArticle),
    title: '最佳博文 - 张益铭',
    data: state,
  })
}

/**
 * 文章页
 */
export async function article (ctx) {
  
  let id = ctx.params.id
  let data = await ArticleModel.getArticle(id)

  let liked = await LikedModel.get({
    name: 'article_id',
    value: id
  })

  data = {
    ...data,
    ...liked
  }

  let store = configureStore({
    ArticleReducer: {...data}
  })
  const state = store.getState()

  csp(ctx, JSON.stringify(state))

  ctx.body = Layout({
    content: ReactComponent(ctx, store, Article),
    title: data.title,
    data: state,
  })
}

/**
 * 类别
 */
export async function category (ctx) {

  let ret = await CategoryModel.get()
  let store = configureStore({
    ArticleCategoryReducer: {...ret}
  })
  const state = store.getState()

  csp(ctx, JSON.stringify(state))

  ctx.body = Layout({
    content: ReactComponent(ctx, store, ArticleCategory),
    title: '博文分类 - 张益铭',
    data: state,
  })
}

/**
 * 搜索页
 */
export async function search (ctx) {

  // 整合
  const {
    title, tag, page_num, per_page
  } = ctx.query

  let key = ''
  if (title) {
    key = {
      type: 'title',
      value: title
    }
  } else {
    key = {
      type: 'tag',
      value: tag
    }
  }

  // 查库
  let ret = await ArticleModel.getSearchList(key, page_num, per_page)

  // 放进redux
  let store = configureStore({
    searchReducer: {...ret}
  })
  const state = store.getState()

  // 设置csp
  csp(ctx, JSON.stringify(state))

  // 吐页面
  ctx.body = Layout({
    content: ReactComponent(ctx, store, Search),
    title: `类别-${key.value}`,
    data: state,
  })
}

/**
 * sso
 */
export async function sso (ctx) {

  const from = ctx.query.from
  const noOwnIframe = ctx.query.noOwnIframe

  // 来源过滤

  const whitelist = [
    config.INDEX_DOMAIN,
    config.CMS_DOMAIN
  ]

  let origin = ''
  whitelist.forEach(item => {
    if (from.indexOf(item) === 0) {
      origin = item
    }
  })

  if (origin === '') {
    ctx.redirect(config.INDEX_DOMAIN)
    return
  }

  // 是否需要自带iframe
  const iframeSrc = noOwnIframe === 'true' ? '' : `${origin}/iframe?from=${config.SSO_DOMAIN}`
  ctx.body = getSsoHtml(iframeSrc)

}

/**
 * iframe
 */
export async function iframe (ctx) {

  const redirect = ctx.query.from
  ctx.body = getIframe(redirect)

}

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Layout } from '../views/Layout.js'
import configureStore from '../../client/User/redux/store'
import Home from '../../client/User/containers/Home'
import BestArticle from '../../client/User/containers/BestArticle'
import ArticleCategory from '../../client/User/containers/ArticleCategory'
import Article from '../../client/User/containers/Article'

import ArticleModel from '../models/article'
import CategoryModel from '../models/tag'
import csp from '../middleware/csp'

// === ssr: 在服务器将数据(也可以有css,js)整合到html中发到浏览器而避免了拿到html后再请求数据的情况 === //
// === 1 优点: === //
// === 1.1 降低首屏时间 === //
// === 1.2 利于SEO === //
// === 2 缺点: === //
// === 2.1 加大了服务器端工作量和开发效率 === //
// === 3 实现: === //
// === 3.1 服务器: 在model中拿到数据后放进redux的store中，并存储到一个window对象上的数据埋点, 再通过renderToString将jsx转换成html字符串(注意生命周期只能到componentWillMount, 因为没有document)， === //
// === 3.2 浏览器: 从数据埋点中获取数据放进store中以保持与服务器的redux数据同步 === //

/**
 * 首页
 */
export async function index (ctx) {

  // 获取state
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
  const state = store.getState()

  // 设置csp
  csp(ctx, JSON.stringify(state))

  // html
  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <Home />
      </StaticRouter>
    </Provider>
  ), state, 'home')

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
  const state = store.getState()

  csp(ctx, JSON.stringify(state))

  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <BestArticle />
      </StaticRouter>
    </Provider>
  ), store)
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
  const state = store.getState()

  csp(ctx, JSON.stringify(state))

  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <Article />
      </StaticRouter>
    </Provider>
  ), state)
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
  const state = store.getState()

  csp(ctx, JSON.stringify(state))

  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <ArticleCategory />
      </StaticRouter>
    </Provider>
  ), state)
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
  const state = store.getState()

  csp(ctx, JSON.stringify(state))

  ctx.body = Layout(renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <Home />
      </StaticRouter>
    </Provider>
  ), state)
}

/**
 * 登录页
 */
// export async function login (ctx) {
//
//   // csrf_token
//   const csrf_token = new Date().getTime()
//   ctx.cookies.set('csrf_token', csrf_token, {
//     httpOnly: true
//   })
//
//   let store = configureStore({
//     UserReducer: {
//       csrf_token
//     }
//   })
//   const state = store.getState()
//
//   csp(ctx, JSON.stringify(state))
//
//   ctx.body = Layout(renderToString(
//     <Provider store={store}>
//       <StaticRouter location={ctx.url} context={{}}>
//         <Login />
//       </StaticRouter>
//     </Provider>
//   ), state)
// }

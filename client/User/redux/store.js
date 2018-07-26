import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './index'
import config from '../../../config'

const IS_CLIENT_ENV = typeof window !== 'undefined'

// === redux middleware: 提供了一个分类处理action的机会，可检阅每个流过的action，挑选出特定类型的action进行相应操作 === //
// === 1 没有middleware: === //
/*
        callback            action            state
button ---------> dispatch --------> reducer --------> view
*/
// === 2 有middleware: === //
/*
                 ---------------------------------------- 
                 |           new dispatch                |
        callback |             action                    | action
button ---------> mid1 -> mid2 ---------> ... -> dispatch --------> reducer
*/
// === 3 middleware运行原理: === //
// === 3.1 函数式编程思想设计: === //


// === 函数组合: 利用compose将多个函数组合成一个函数，让代码从右向左执行而非由内而外执行，提高可读性 === //

const middlewares = [thunk]

let storeEnhancers =
  config.ISDEV && IS_CLIENT_ENV
  ? compose(  // 开发环境 + 客户端
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
  : compose(  // 开发环境 + 后端 || 生产环境
    applyMiddleware(...middlewares)
  )

export function configureStore (initialStore = {}) {
  const store = createStore(
    rootReducer,
    initialStore,
    storeEnhancers
  )

  return store
}

// 前后端同构时的数据埋点
let store = configureStore(IS_CLIENT_ENV && window.__REDUX_DATA__ || {})

export default store
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './index'

const IS_CLIENT_ENV = typeof window !== 'undefined'

const middlewares = []

let storeEnhancers =
  process.env.NODE_ENV === 'development' && IS_CLIENT_ENV
  ? compose(  // 开发环境 + 客户端
    applyMiddleware(...middlewares, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  : compose(  // 开发环境 + 后端 || 生产环境
    applyMiddleware(...middlewares, thunk)
  )

export function configureStore (initialStore = {}) {
  return createStore(
    rootReducer,
    initialStore,
    storeEnhancers
  )
}

// let store = IS_CLIENT_ENV ? configureStore({}) : {}
let store = configureStore({})

/**
 * 配置store
 * @param {Object = {}} initialStore 初始store
 * @return {Object}
 */
export default store

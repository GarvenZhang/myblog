import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './index'
import config from '../../../config'

const IS_CLIENT_ENV = typeof window !== 'undefined'

const middlewares = [thunk]

// === redux调试(开发环境): 可方便实时地观察到redux中的数据变化 === //
// === 1 安装 chrome 插件: redux Devtools === //
// === 2 在 compose 中传入: window.devToolsExtension() === //
// === 3 chrome控制台中有redux栏, 即可调试 === //

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

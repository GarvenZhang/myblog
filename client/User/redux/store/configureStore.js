import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/index'
import rootSaga from '../sagas/index'

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

const middlewares = []
const sagaMiddleware = typeof createSagaMiddleware === 'function' ? createSagaMiddleware() : createSagaMiddleware.default()

let storeEnhancers =
  process.env.NODE_ENV === 'development' && typeof window !== 'undefined'
  ? compose(  // 开发环境 + 客户端
    applyMiddleware(...middlewares, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  : compose(  // 开发环境 + 后端 || 生产环境
    applyMiddleware(...middlewares, sagaMiddleware)
  )

export default function configureStore (initialStore = {}) {
  const store = createStore(
    rootReducer,
    initialStore,
    storeEnhancers
  )
  sagaMiddleware.run(rootSaga)
  return store
}

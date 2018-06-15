import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/index'
import rootSaga from '../sagas/index'

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

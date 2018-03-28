import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const middlewares = []
const sagaMiddleware = createSagaMiddleware()
let storeEnhancers = compose(
  applyMiddleware(...middlewares, sagaMiddleware)
)

export default function configureStore (initialStore = {}) {
  const store = createStore(rootReducer, initialStore, storeEnhancers)
  sagaMiddleware.run(rootSaga)
  return store
}

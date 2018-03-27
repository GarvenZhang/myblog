import { combineReducers } from 'redux'
import { reducer as ArticleListReducer } from './ArticleList'
import { reducer as ArticleCategoryReducer } from './ArticleCategory'
import { reducer as ArticleReducer } from './Article'

const initialState = {
  isFetching: true,
  msg: {
    type: 1,
    content: ''
  },
  userInfo: {}
}

export const actionTypes = {
  FETCH_START: 'FETCH_START',
  FETCH_END: 'FETCH_END',
  SET_MESSAGE: 'SET_MESSAGE'
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.FETCH_END:
      return {
        ...state,
        isFetching: false
      }
    case actionTypes.SET_MESSAGE:
      return {
        ...state,
        isFetching: false,
        msg: {
          type: action.msgType,
          msgContent: action.msgContent
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  ArticleListReducer,
  ArticleCategoryReducer,
  ArticleReducer
})

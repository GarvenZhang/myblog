import { combineReducers } from 'redux'
import { latestReducer, bestReducer, searchReducer, allReducer } from './ArticleList'
import { reducer as ArticleCategoryReducer } from './ArticleCategory'
import { reducer as ArticleReducer } from './Article'
import { reducer as ArticleLinkListReducer } from './ArticleLinkList'
import { reducer as UserReducer } from './User'

export default combineReducers({
  searchReducer,
  latestReducer,
  bestReducer,
  allReducer,
  ArticleCategoryReducer,
  ArticleReducer,
  ArticleLinkListReducer,
  UserReducer
})

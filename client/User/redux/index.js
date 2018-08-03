import { combineReducers } from 'redux'
import { latestReducer, bestReducer, searchReducer, allReducer } from './ArticleList'
import { reducer as ArticleCategoryReducer } from './ArticleCategory'
import { reducer as ArticleReducer } from './Article'
import { reducer as ArticleLinkListReducer } from './ArticleLinkList'
import { reducer as PopupReducer } from './Popup'
import { reducer as StorageReducer } from './Storage'
import { reducer as UserReducer} from './User'
import { reducer as IframeReducer } from './Iframe'
import { reducer as CommentReducer } from './Comment'

export default combineReducers({
  searchReducer,
  latestReducer,
  bestReducer,
  allReducer,
  ArticleCategoryReducer,
  ArticleReducer,
  ArticleLinkListReducer,
  PopupReducer,
  StorageReducer,
  UserReducer,
  IframeReducer,
  CommentReducer
})

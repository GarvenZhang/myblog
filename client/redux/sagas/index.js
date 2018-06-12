import { fork } from 'redux-saga/effects'
import { getLatestListFlow, getBestListFlow, getSearchListFlow, getAllListFlow } from './ArticleListSaga'
import { getCategoryListFlow } from './ArticleCategorySaga'
import { saveArticleFlow, getArticleFlow } from './ArticleSaga'
import { getArticleLinkListFlow } from './ArticleLinkListSaga'
import { loginFlow } from './UserSaga'

export default function * rootSaga () {
  yield fork(getLatestListFlow)
  yield fork(getCategoryListFlow)
  yield fork(getBestListFlow)
  yield fork(saveArticleFlow)
  yield fork(getArticleLinkListFlow)
  yield fork(getArticleFlow)
  yield fork(getSearchListFlow)
  yield fork(loginFlow)
  yield fork(getAllListFlow)
}

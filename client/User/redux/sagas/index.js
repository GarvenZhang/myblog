import { fork } from 'redux-saga/effects'
import { getLatestListFlow, getBestListFlow, getSearchListFlow } from './ArticleListSaga'
import { getCategoryListFlow } from './ArticleCategorySaga'
import { getArticleFlow } from './ArticleSaga'
import { getArticleLinkListFlow } from './ArticleLinkListSaga'

export default function * rootSaga () {
  yield fork(getLatestListFlow)
  yield fork(getCategoryListFlow)
  yield fork(getBestListFlow)
  yield fork(getArticleLinkListFlow)
  yield fork(getArticleFlow)
  yield fork(getSearchListFlow)
}

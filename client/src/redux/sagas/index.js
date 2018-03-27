import { fork } from 'redux-saga/effects'
import { getLatestListFlow, getBestListFlow } from './ArticleListSaga'
import { getCategoryListFlow } from './ArticleCategorySaga'
import { saveArticleFlow } from './ArticleSaga'

export default function* rootSaga () {
  yield fork(getLatestListFlow)
  yield fork(getCategoryListFlow)
  yield fork(getBestListFlow)
  yield fork(saveArticleFlow)
}

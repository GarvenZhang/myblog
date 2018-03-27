import { call, put, take } from 'redux-saga/effects'
import { get, post } from '../../fetch/fetch'
import { actionTypes as IndexActionTypes } from '../reducers'
import { actionTypes as ArticleActionTypes } from '../reducers/Article'

export function* saveArticle (data) {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(post, '/api/add_article', data)
  } catch (e) {
    yield put({
      type: IndexActionTypes.SET_MESSAGE,
      msgContent: '网络请求错误',
      msgType: 0
    })
  } finally {
    yield put({
      type: IndexActionTypes.FETCH_END
    })
  }
}

export function* saveArticleFlow () {
  while (true) {
    let req = yield take(ArticleActionTypes.SAVE_ARTICLE)
    let res = yield call(saveArticle, req.data)
    if (res) {
    }
  }
}

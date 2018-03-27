import { call, put, take } from 'redux-saga/effects'
import { get } from '../../fetch/fetch'
import { actionTypes as IndexActionTypes } from '../reducers'
import { actionTypes as ArticleCategoryActionTypes } from '../reducers/ArticleCategory'

export function* getCategoryList () {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(get, '/api/get_article_category')
  } catch (err) {
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

export function* getCategoryListFlow () {
  while (true) {
    let req = yield take(ArticleCategoryActionTypes.GET_CATEGORY_LIST)
    let res = yield call(getCategoryList)
    if (res) {
      yield put({
        type: ArticleCategoryActionTypes.RESPONSE_CATEGORY_LIST,
        data: res
      })
    }
  }
}

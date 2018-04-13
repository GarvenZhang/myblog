import { call, put, take } from 'redux-saga/effects'
import { get, api } from '../../fetch/fetch'
import { actionTypes as IndexActionTypes } from '../reducers'
import { actionTypes as ArticleCategoryActionTypes } from '../reducers/ArticleCategory'
import { actionTypes as ArticleActionTypes } from '../reducers/Article'

export function* getCategoryList () {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(get, api.getCategoryListApi())
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
    if (res.retCode === 1) {
      yield put({
        type: ArticleCategoryActionTypes.RESPONSE_CATEGORY_LIST,
        data: res.data
      })
      yield put({
        type: ArticleActionTypes.UPDATE_ARTICLETYPEID,
        articleTypeId: res.data[0].id
      })
    } else {

    }
  }
}

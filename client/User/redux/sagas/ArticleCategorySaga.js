import { call, put, take } from 'redux-saga/effects'
import { get, api } from '../../../fetch/axios'
import { actionTypes as ArticleCategoryActionTypes } from '../reducers/ArticleCategory'

export function * getCategoryListFlow () {
  while (true) {
    let req = yield take(ArticleCategoryActionTypes.GET_CATEGORY_LIST)
    let res = yield call(get, api.getCategoryListApi())
    if (res.retCode === 1) {
      yield put({
        type: ArticleCategoryActionTypes.RESPONSE_CATEGORY_LIST,
        data: res.data
      })
    } else {

    }
  }
}

import { call, take, put } from 'redux-saga/effects'
import { get, api } from '../../../fetch/axios'
import { actionTypes as ArticleLinkListActionTypes } from '../reducers/ArticleLinkList'

export function * getArticleLinkListFlow () {
  while (true) {
    let req = yield take(ArticleLinkListActionTypes.GET_ARTICLE_LINK_LIST)
    let res = yield call(get, api.getArticleLinkListApi())
    if (res.retCode === 1) {
      yield put({
        type: ArticleLinkListActionTypes.RESPONSE_ARTICLE_LINK_LIST,
        data: res.data
      })
    } else {

    }
  }
}

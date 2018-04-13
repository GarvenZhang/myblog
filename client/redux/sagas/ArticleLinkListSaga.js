import { call, take, put } from 'redux-saga/effects'
import { get, api } from '../../fetch/fetch'
import { actionTypes as IndexActionTypes } from '../reducers'
import { actionTypes as ArticleLinkListActionTypes } from '../reducers/ArticleLinkList'
import { actionTypes as ArticleActionTypes } from '../reducers/Article'

export function* getArticleLinkList () {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(get, api.getArticleLinkListApi())
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

export function* getArticleLinkListFlow () {
  while (true) {
    let req = yield take(ArticleLinkListActionTypes.GET_ARTICLE_LINK_LIST)
    let res = yield call(getArticleLinkList)
    console.log(res)
    if (res.retCode === 1) {
      yield put({
        type: ArticleLinkListActionTypes.RESPONSE_ARTICLE_LINK_LIST,
        data: res.data
      })
      yield put({
        type: ArticleActionTypes.UPDATE_PREVID,
        prevId: res.data[0].id
      })
      yield put({
        type: ArticleActionTypes.UPDATE_NEXTID,
        nextId: res.data[1].id
      })
    } else {

    }
  }
}

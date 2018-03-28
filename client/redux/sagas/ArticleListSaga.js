import { call, put, take } from 'redux-saga/effects'
import { get } from '../../fetch/fetch'
import { actionTypes as IndexActionTypes } from '../reducers'
import { actionTypes as ArticleActionTypes } from '../reducers/ArticleList'

export function* getLatestList (pageNum) {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(get, `/api/get_latest_article?pageNum=${pageNum}`)
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

export function* getLatestListFlow () {
  while (true) {
    let req = yield take(ArticleActionTypes.GET_LATEST_LIST)
    let res = yield call(getLatestList, req.pageNum)
    if (res) {
      yield put({
        type: ArticleActionTypes.RESPONSE_LATEST_LIST,
        data: res
      })
    }
  }
}

export function* getBestList (pageNum) {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(get, `/api/get_best_article?pageNum=${pageNum}`)
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

export function* getBestListFlow () {
  while (true) {
    let req = yield take(ArticleActionTypes.GET_BEST_LIST)
    let res = yield call(getBestList, req.pageNum)
    if (res) {
      yield put({
        type: ArticleActionTypes.RESPONSE_BEST_LIST,
        data: res
      })
    }
  }
}

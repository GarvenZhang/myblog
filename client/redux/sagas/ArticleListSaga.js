import { call, put, take } from 'redux-saga/effects'
import { get, api } from '../../fetch/fetch'
import { actionTypes as IndexActionTypes } from '../reducers'
import { actionTypes as ArticleActionTypes } from '../reducers/ArticleList'

export function* getLatestList (pageNum, perPage) {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(get, api.getLatestListApi(pageNum, perPage))
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
    let res = yield call(getLatestList, req.pageNum, req.perPage)
    if (res.retCode === 1) {
      yield put({
        type: ArticleActionTypes.RESPONSE_LATEST_LIST,
        data: res.data,
        pageNum: res.pageNum,
        perPage: res.perPage,
        totalCount: res.totalCount,
        isEndPage: res.isEndPage
      })
    } else {

    }
  }
}

export function* getBestList (pageNum, perPage) {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(get, api.getBestListApi(pageNum, perPage))
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
    let res = yield call(getBestList, req.pageNum, req.perPage)
    if (res.retCode === 1) {
      yield put({
        type: ArticleActionTypes.RESPONSE_BEST_LIST,
        data: res.data,
        pageNum: res.pageNum,
        perPage: res.perPage,
        totalCount: res.totalCount,
        isEndPage: res.isEndPage
      })
    }
  }
}

export function* getSearchList (title, pageNum, perPage) {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(get, api.getSearchListApi(title, pageNum, perPage))
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

export function* getSearchListFlow () {
  while (true) {
    let req = yield take(ArticleActionTypes.GET_SEARCH_LIST)
    let res = yield call(getSearchList, req.title, req.pageNum, req.perPage)
    if (res.retCode === 1) {
      yield put({
        type: ArticleActionTypes.RESPONSE_SEARCH_LIST,
        data: res.data,
        pageNum: res.pageNum,
        perPage: res.perPage,
        totalCount: res.totalCount,
        isEndPage: res.isEndPage
      })
    }
  }
}

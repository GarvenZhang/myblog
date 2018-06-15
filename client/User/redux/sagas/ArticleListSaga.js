import { call, put, take } from 'redux-saga/effects'
import { get, api } from '../../../fetch/axios'
import { actionTypes as ArticleActionTypes } from '../reducers/ArticleList'

export function * getLatestListFlow () {
  while (true) {
    let req = yield take(ArticleActionTypes.GET_LATEST_LIST)
    let res = yield call(get, api.getLatestListApi(req.pageNum, req.perPage))

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

export function * getBestListFlow () {
  while (true) {
    let req = yield take(ArticleActionTypes.GET_BEST_LIST)
    let res = yield call(get, api.getBestListApi(req.pageNum, req.perPage))

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

export function * getSearchListFlow () {
  while (true) {
    let req = yield take(ArticleActionTypes.GET_SEARCH_LIST)
    let res = yield call(get, api.getSearchListApi(req.title, req.pageNum, req.perPage))

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

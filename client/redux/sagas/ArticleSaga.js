import { call, put, take } from 'redux-saga/effects'
import { get, post, api } from '../../fetch/fetch'
import { actionTypes as IndexActionTypes } from '../reducers'
import { actionTypes as ArticleActionTypes } from '../reducers/Article'

export function* saveArticle (data) {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(post, api.saveArticleApi(), data)
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
    if (res.retCode === 1) {
      alert('成功！')
    }
  }
}

export function* getArticle (id) {
  yield put({
    type: IndexActionTypes.FETCH_START
  })

  try {
    return yield call(get, api.getArticleApi(id))
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

export function* getArticleFlow () {
  while (true) {
    let req  = yield take(ArticleActionTypes.GET_ARTICLE)
    let res = yield call(getArticle, req.id)
    if (res.retCode === 1) {
      yield put({
        type: ArticleActionTypes.RESPONSE_ARTICLE,
        title: res.title,
        pubtime: res.pubtime,
        content: res.content,
        summary: res.summary,
        readNum: res.readNum,
        prevId: res.prevId,
        nextId: res.nextId
      })
    }
  }
}

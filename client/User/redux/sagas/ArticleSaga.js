import { call, put, take } from 'redux-saga/effects'
import { get, post, api } from '../../../fetch/axios'
import { actionTypes as ArticleActionTypes } from '../reducers/Article'

export function * getArticleFlow () {
  while (true) {
    let req = yield take(ArticleActionTypes.GET_ARTICLE)
    let res = yield call(get, api.getArticleApi(), req.id)

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

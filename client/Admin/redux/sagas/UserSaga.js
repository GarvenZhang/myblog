import { call, put, take } from 'redux-saga/effects'
import { get, post, api } from '../../../fetch/axios'
import { actionTypes as UserActionTypes } from '../reducers/User'
import jwt from 'jsonwebtoken'

export function * loginFlow () {
  while (true) {
    let req = yield take(UserActionTypes.LOGIN)
    let res = yield call(post, api.loginApi(), req.data)

    if (res.retCode === 1) {
      window.localStorage.setItem('access_token', res.access_token)
      yield put({
        type: UserActionTypes.RESPONSE_LOGIN,
        user: jwt.decode(res.access_token)
      })

      window.location.href = '/#/post'
    } else if (res.retCode === 0) {
      yield put({
        type: UserActionTypes.UPDATE_LOGINFAILTIMES
      })
      yield put({
        type: UserActionTypes.UPDATE_TIPS,
        msg: res.msg
      })
    }
  }
}

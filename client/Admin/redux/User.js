import { get, post, api } from '../../fetch/axios'
import jwt from 'jsonwebtoken'

const initialState = {
  csrf_token: '',
  isAuthenticated: false,
  user: {},
  tips: '',
  loginFailTimes: 0
}

export const actionTypes = {
  LOGIN: Symbol(),
  RESPONSE_LOGIN: Symbol(),
  UPDATE_PASSWORD: Symbol(),
  UPDATE_TIPS: Symbol(),
  UPDATE_LOGINFAILTIMES: Symbol()
}

export const actions = {

  login: function (data) {

    return dispatch => {

      post(api.loginApi(), data)
        .then(res => {

          if (res.retCode === 1) {

            window.localStorage.setItem('access_token', res.access_token)

            dispatch({
              type: actionTypes.RESPONSE_LOGIN,
              user: jwt.decode(res.access_token)
            })

            window.location.href = '/#/post'

          } else if (res.retCode === 0) {

            dispatch({
              type: actionTypes.UPDATE_LOGINFAILTIMES
            })

            dispatch({
              type: actionTypes.UPDATE_TIPS,
              msg: res.msg
            })
          }

        })
        .catch(err => {
          console.log(err)
        })

    }

  }
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_LOGIN:
      return {
        ...state,
        isAuthenticated: !action.user,
        user: action.user
      }
    case actionTypes.UPDATE_LOGINFAILTIMES:
      return {
        ...state,
        loginFailTimes: ++state.loginFailTimes
      }
    case actionTypes.UPDATE_TIPS:
      return {
        ...state,
        tips: action.msg
      }
    default:
      return state
  }
}

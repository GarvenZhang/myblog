import { api } from '../fetch/axios'
import history from '../router/history'

const initialState = {
  user: {},
  tips: '',
  captchaId: '',
}

export const actionTypes = {
  LOGIN: Symbol(),
  UPDATE_PASSWORD: Symbol(),
  UPDATE_TIPS: Symbol(),
  UPDATE_CAPTCHA: Symbol()
}

export const actions = {

  login: data => dispatch => api.post_login(data)
      .then(res => {

        // 更新提示
        dispatch({
          type: actionTypes.UPDATE_TIPS,
          msg: ''
        })

        // 更新验证码
        dispatch({
          type: actionTypes.UPDATE_CAPTCHA,
          captchaId: new Date().getTime()
        })

        // 将 access_token 放到 localStorage
        window.localStorage.setItem('access_token', res.access_token)
        // 改变路由
        history.push('/post')

      })
      .catch(err => {

        // 更新提示
        dispatch({
          type: actionTypes.UPDATE_TIPS,
          msg: err.message
        })

        // 更新验证码
        dispatch({
          type: actionTypes.UPDATE_CAPTCHA,
          captchaId: new Date().getTime()
        })

      }),

  update_captcha: () => dispatch => dispatch({
    type: actionTypes.UPDATE_CAPTCHA,
    captchaId: new Date().getTime()
  })
}

export function reducer (state = initialState, action) {

  switch (action.type) {

    case actionTypes.UPDATE_TIPS:
      return {
        ...state,
        tips: action.msg
      }

    case actionTypes.UPDATE_CAPTCHA:
      return {
        ...state,
        captchaId: action.captchaId
      }

    default:
      return state
  }
}

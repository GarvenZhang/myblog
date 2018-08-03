import { api } from '../fetch/axios'
import { actionTypes as IframeActionTypes } from './Iframe'

const initialState = {
  id: -1,
  name: '',
  github_url: '',
  avatar_url: '',
  email: '',
  role: -1
}

export const actionTypes = {
  GET_USER_INFO: 'GET_USER_INFO',
  RESET_USER_INFO: 'RESET_USER_INFO',
  LOGOUT: 'LOGOUT'
}

export const actions = {

  get_user: () => dispatch => api.get_user()
    .then(res => dispatch({
      ...res.data,
      type: actionTypes.GET_USER_INFO,
    }))
    .catch(err => {
      console.error(err)
    }),

  reset_user: () => ({
    type: actionTypes.RESET_USER_INFO
  }),

  logout: () => dispatch => api.logout()
    .then(res => {

      // 重置 user state
      dispatch({
        type: actionTypes.RESET_USER_INFO
      })

      // 在sso认证中心删除 域下的localStorage 的 access_token
      dispatch({
        type: IframeActionTypes.SEND_MESSAGE,
        messageType: 'logout',
        postFn: ($iframe) => {

          $iframe.contentWindow.postMessage({
            type: 'logout'
          }, $iframe.src)

        }
      })

    })
    .catch(err => {
      console.error(err.message)
    })

}

export function reducer (state = initialState, action) {

  switch (action.type) {

    case actionTypes.GET_USER_INFO:
      return {
        ...state,
        ...action
      }

    case actionTypes.RESET_USER_INFO:
      return {
        ...state,
        name: '',
        github_url: '',
        avatar_url: '',
        email: '',
        role: -1
      }

    default:
      return state
  }

}

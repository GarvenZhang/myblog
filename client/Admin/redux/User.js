import { api } from '../fetch/axios'
import history from '../router/history'
import { actionTypes as IframeActionTypes } from './Iframe'

const initialState = {
  id: 0,
  account: '',
  resume_url: '',
  name: '',
  email: '',
  github_url: '',
  avatar_url: '',
  role: 2,
  address: '',
  wechat: '',
  phone: '',
  new_password: '',
  secondary_password: ''

}

// === actionTypes中不可用Symbol()的坑: 本来是适合用 Symbol() , 但是若用了 Symbol()之后 reduxTools 中会显示 <UNDEFINED> 而无法方便可看出是派发了哪一个 action === //
export const actionTypes = {
  GET_USER: 'GET_USER',
  UPDATE_USER: 'UPDATE_USER',
  CHANGE_INFO: 'CHANGE_INFO',
  // GET_USER: Symbol()
  RESET_USER_INFO: 'RESET_USER_INFO'
}

export const actions = {

  get_user: isDetail => dispatch => api.get_user(isDetail)
    .then(res => {

      // 更新用户信息
      dispatch({
        ...res.data,
        type: actionTypes.GET_USER,
      })

      // 在首页请求时, 成功后需要跳转到 /post
      if (history.location.pathname === '/') {
        history.push('/post')
      }

    })
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
    }),

  change_info: (data) => ({
    ...data,
    type: actionTypes.CHANGE_INFO
  }),

  update_user: (data) => dispatch => api.update_user(data)
    .then(res => dispatch({
      ...data,
      type: actionTypes.UPDATE_USER
    }))
    .catch(err => {
      console.error(err.message)
    })

}

export function reducer (state = initialState, action) {

  switch (action.type) {

    case actionTypes.GET_USER:
    case actionTypes.UPDATE_USER:
    case actionTypes.CHANGE_INFO:
      return {
        ...state,
        ...action,
      }

    case actionTypes.RESET_USER_INFO:
      return {
        ...state,
        name: '',
        email: '',
        github_url: '',
        avatar_url: '',
        role: 2
      }

    default:
      return state
  }
}

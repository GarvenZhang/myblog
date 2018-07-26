import { api } from '../fetch/axios'
import history from '../router/history'

const initialState = {
  name: '',
  email: '',
  github_url: '',
  avatar_url: '',
  role: 2
}

// === actionTypes中不可用Symbol()的坑: 本来是适合用 Symbol() , 但是若用了 Symbol()之后 reduxTools 中会显示 <UNDEFINED> 而无法方便可看出是派发了哪一个 action === //
export const actionTypes = {
  GET_USER: 'GET_USER',
  // GET_USER: Symbol()
  RESET_USER_INFO: 'RESET_USER_INFO'
}

export const actions = {

  get_user: data => dispatch => api.get_user(data)
    .then(res => {

      data = res.data

      // 更新用户信息
      dispatch({
        type: actionTypes.GET_USER,
        name: data.name,
        email: data.email,
        github_url: data.github_url,
        avatar_url: data.avatar_url,
        role: data.role
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
  })
}

export function reducer (state = initialState, action) {

  switch (action.type) {

    case actionTypes.GET_USER:
      return {
        ...state,
        name: action.name,
        email: action.email,
        github_url: action.github_url,
        avatar_url: action.avatar_url,
        role: action.role
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

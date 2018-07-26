import { api } from '../fetch/axios'

const initialState = {
  name: '',
  github_url: '',
  avatar_url: '',
  email: '',
  role: -1
}

export const actionTypes = {
  GET_USER_INFO: 'GET_USER_INFO',
  RESET_USER_INFO: 'RESET_USER_INFO'
}

export const actions = {

  get_user: access_token => dispatch => api.get_user(access_token)
    .then(res => dispatch({
      type: actionTypes.GET_USER_INFO,
      name: res.data.name,
      github_url: res.data.github_url,
      avatar_url: res.data.avatar_url,
      email: res.email,
      role: res.data.role
    }))
    .catch(err => {
      console.error(err)
    }),

  reset_user: () => ({
    type: actionTypes.RESET_USER_INFO
  })

}

export function reducer (state = initialState, action) {

  switch (action.type) {

    case actionTypes.GET_USER_INFO:
      return {
        ...state,
        name: action.name,
        github_url: action.github_url,
        avatar_url: action.avatar_url,
        email: action.email,
        role: action.role
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

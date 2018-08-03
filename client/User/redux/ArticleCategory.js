import { api } from '../fetch/axios'

const initialState = {
  data: []
}

export const actionTypes = {
  GET_CATEGORY_LIST: 'GET_CATEGORY_LIST',
}

export const actions = {
  get_category_list: () => dispatch => api.get_category()
    .then(res => dispatch({
      type: actionTypes.GET_CATEGORY_LIST,
      data: res.data
    }))
    .catch(err => {
      console.error(err.message)
    })
}

export function reducer (state = initialState, action) {
  
  switch (action.type) {
    case actionTypes.GET_CATEGORY_LIST:
      return {
        ...state,
        data: [...action.data]
      }
    default:
      return state
  }
}

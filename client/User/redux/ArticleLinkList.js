import { api } from '../fetch/axios'

const initialState = {
  data: []
}

export const actionTypes = {
  GET_ARTICLE_LINK_LIST: 'RESPONSE_CATEGORY_LIST',
}

export const actions = {
  get_article_link_list: () => dispatch => api.get_article_linkList()
    .then(res => dispatch({
      type: actionTypes.GET_ARTICLE_LINK_LIST,
      data: res.data
    }))
    .catch(err => {
      console.error(err.message)
    })
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_LINK_LIST:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

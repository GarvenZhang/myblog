import { api } from '../fetch/axios'
import { actionTypes as ArticleActionTypes } from './Article'

const initialState = {
  data: []
}

export const actionTypes = {
  GET_ARTICLE_LINK_LIST: 'GET_ARTICLE_LINK_LIST',
  RESPONSE_ARTICLE_LINK_LIST: 'RESPONSE_ARTICLE_LINK_LIST'
}

export const actions = {

  get_article_link_list: function () {

    return dispatch => {

      api.get_article_linkList()
        .then(res => {

          const data = res.data

          dispatch({
            type: actionTypes.RESPONSE_ARTICLE_LINK_LIST,
            data
          })

        })
        .catch(err => {
          console.error(err.message)
        })
    }

  }
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_ARTICLE_LINK_LIST:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

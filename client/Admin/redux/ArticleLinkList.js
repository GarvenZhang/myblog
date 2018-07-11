import { api } from '../fetch/axios'
import { actionTypes as ArticleActionTypes } from './Article'

const initialState = {
  data: []
}

export const actionTypes = {
  GET_ARTICLE_LINK_LIST: Symbol(),
  RESPONSE_ARTICLE_LINK_LIST: Symbol()
}

export const actions = {

  get_article_link_list: function () {

    return dispatch => {

      api.get_article_linkList()
        .then(res => {

          dispatch({
            type: actionTypes.RESPONSE_ARTICLE_LINK_LIST,
            data: res.data
          })

          dispatch({
            type: ArticleActionTypes.UPDATE_PREVID,
            prevId: res.data[0].id
          })

          dispatch({
            type: ArticleActionTypes.UPDATE_NEXTID,
            nextId: res.data[1].id
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

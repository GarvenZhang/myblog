import { api } from '../fetch/axios'
import { actionTypes as ArticleActionTypes } from './Article'

const initialState = {
  data: []
}

export const actionTypes = {
  RESPONSE_CATEGORY_LIST: Symbol()
}

export const actions = {

  get_category_list: function () {

    return dispatch => {

      api.get_category()
        .then(res => {

          dispatch({
            type: actionTypes.RESPONSE_CATEGORY_LIST,
            data: res.data
          })

          dispatch({
            type: ArticleActionTypes.UPDATE_ARTICLETYPEID,
            articleTypeId: res.data[0].id
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
    case actionTypes.RESPONSE_CATEGORY_LIST:
      return {
        ...state,
        data: [...action.data]
      }
    default:
      return state
  }
}

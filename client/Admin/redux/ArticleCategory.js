import { get, api } from '../../fetch/axios'
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

      get(api.getCategoryListApi())
        .then(res => {

          if (res.retCode !== 1) {
            return
          }

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
          console.log(err)
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

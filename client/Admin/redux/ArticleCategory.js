import { api } from '../fetch/axios'
import { actionTypes as ArticleActionTypes } from './Article'
import store from './store'

const initialState = {
  data: [],
  text: ''
}

export const actionTypes = {
  RESPONSE_CATEGORY_LIST: 'RESPONSE_CATEGORY_LIST',
  UPDATE_TEXT: 'UPDATE_TEXT'
}

export const actions = {

  add_category: data => dispatch => api.add_category(data)
    .then(res => {

      const newData = {
        id: res.id,
        name: data.name,
        count: 0
      }

      const oldDataList = store.getState().ArticleCategoryReducer.data.concat()
      oldDataList.push(newData)

      dispatch({
        type: actionTypes.RESPONSE_CATEGORY_LIST,
        data: oldDataList
      })

    })
    .catch(err => {
      console.error(err)
    }),

  get_category_list: () => dispatch => api.get_category()
    .then(res => {

      const data = res.data

      dispatch({
        type: actionTypes.RESPONSE_CATEGORY_LIST,
        data
      })

    })
    .catch(err => {
      console.error(err.message)
    }),

  delete_category: id => dispatch => api.delete_category(id)
    .then(res => {

      const oldDataList = store.getState().ArticleCategoryReducer.data.concat()

      for (let l = oldDataList.length; l--; ) {
        if (oldDataList[l].id === id) {
          oldDataList.splice(l, 1)
        }
      }

      dispatch({
        type: actionTypes.RESPONSE_CATEGORY_LIST,
        data: oldDataList
      })

    })
    .catch(err => {
      console.error(err)
    }),


  update_category: () => dispatch => {

  },

  update_text: text => ({
    type: actionTypes.UPDATE_TEXT,
    text
  })

}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_CATEGORY_LIST:
      return {
        ...state,
        data: [...action.data]
      }
    case actionTypes.UPDATE_TEXT:
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}

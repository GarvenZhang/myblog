import { api } from '../fetch/axios'

const initialState = {
  id: 0,
  title: '',
  summary: '',
  content: '',
  pubtime: '',
  article_type_id: 0,
  prev_id: 0,
  prev_title: 0,
  next_id: 0,
  prev_title: 0,
  cover: '',
  read_num: 0,
  liked: [],
  comment_num: 0,
}

export const actionTypes = {
  RESPONSE_ARTICLE: 'RESPONSE_ARTICLE',
  ADD_LIKED: 'ADD_LIKED',
  UPDATE_LIKED: 'UPDATE_LIKED',
}

export const actions = {

  get_article: (id) => dispatch => api.get_article(id)
    .then(res => dispatch({
      ...res.data,
      type: actionTypes.RESPONSE_ARTICLE,
    }))
    .catch(err => {
      console.error(err.message)
    }),

  add_liked: (data) => dispatch => api.add_liked(data)
    .then(res => dispatch({
      type: actionTypes.ADD_LIKED,
      article_id: data.article_id,
      liked_id: res.id,
      user_id: res.user_id
    }))
    .catch(err => {
      console.error(err.message)
    }),

  update_liked: (data) => dispatch => api.update_liked(data)
    .then(res => dispatch({
      type: actionTypes.UPDATE_LIKED,
      liked_id: data.id,
      article_id: data.article_id,
      status: data.status
    }))
    .catch(err => {
      console.error(err.message)
    })


}

export function reducer (state = initialState, action) {
  switch (action.type) {

    case actionTypes.RESPONSE_ARTICLE:
      return {
        ...state,
        ...action
      }

    case actionTypes.ADD_LIKED:

      const newItem = {
        id: action.liked_id,
        status: 1,
        user_id: action.user_id
      }

      return {
        ...state,
        liked: state.liked.concat(newItem)
      }

    case actionTypes.UPDATE_LIKED:
      return {
        ...state,
        liked: state.liked.map(item => {
          if (item.id === action.liked_id) {
            return {
              ...item,
              status: action.status
            }
          }
          return item
        })
      }

    default:
      return state
  }
}

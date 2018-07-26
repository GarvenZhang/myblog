import { api } from '../fetch/axios'

const initialState = {
  title: '',
  summary: '',
  content: '',
  pubtime: '',
  category_id: 0,
  prev_id: 0,
  next_id: 0,
  cover_url: '',
  read_num: 0
}

export const actionTypes = {
  GET_ARTICLE: 'GET_ARTICLE',
  RESPONSE_ARTICLE: 'RESPONSE_ARTICLE',
  SAVE_ARTICLE: 'SAVE_ARTICLE',
  UPDATE_TITLE: 'UPDATE_TITLE',
  UPDATE_SUMMARY: 'UPDATE_SUMMARY',
  UPDATE_CONTENT: 'UPDATE_CONTENT',
  UPDATE_PUBTIME: 'UPDATE_PUBTIME',
  UPDATE_ARTICLETYPEID: 'UPDATE_ARTICLETYPEID',
  UPDATE_PREVID: 'UPDATE_PREVID',
  UPDATE_NEXTID: 'UPDATE_NEXTID',
  UPDATE_COVER: 'UPDATE_COVER'
}

export const actions = {
  get_article: id => dispatch => api.get_article(id)
    .then(res => {

      const data = res.data

      dispatch({
        type: actionTypes.RESPONSE_ARTICLE,
        title: data.title,
        pubtime: data.pubtime,
        content: data.content,
        summary: data.summary,
        read_num: data.read_num,
        prev_id: data.prev_id,
        next_id: data.next_id
      })

    })
    .catch(err => {
      console.error(err.message)
    }),

  save_article: data => dispatch => api.post_article(data)
    .then(res => {

      alert('成功！')

    })
    .catch(err => {
      console.error(err.message)
    }),

  update_title: title => ({
    type: actionTypes.UPDATE_TITLE,
    title
  }),

  update_summary: summary => ({
    type: actionTypes.UPDATE_SUMMARY,
    summary
  }),

  update_content: content => ({
    type: actionTypes.UPDATE_CONTENT,
    content
  }),

  update_pubtime: pubtime => ({
    type: actionTypes.UPDATE_PUBTIME,
    pubtime
  }),

  update_article_type_id: category_id => ({
    type: actionTypes.UPDATE_ARTICLETYPEID,
    category_id
  }),

  update_prev_id: prev_id => ({
    type: actionTypes.UPDATE_PREVID,
    prev_id
  }),

  update_next_id: next_id => ({
    type: actionTypes.UPDATE_NEXTID,
    next_id
  }),

  update_cover_url: cover_url => ({
    type: actionTypes.UPDATE_COVER,
    cover_url
  })
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_ARTICLE:
      return {
        ...state,
        title: action.title,
        summary: action.summary,
        content: action.content,
        pubtime: action.pubtime,
        category_id: action.category_id,
        prev_id: action.prev_id,
        next_id: action.next_id,
        cover_url: action.cover_url
      }
    case actionTypes.UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }
    case actionTypes.UPDATE_SUMMARY:
      return {
        ...state,
        summary: action.summary
      }
    case actionTypes.UPDATE_CONTENT:
      return {
        ...state,
        content: action.content
      }
    case actionTypes.UPDATE_PUBTIME:
      return {
        ...state,
        pubtime: action.pubtime
      }
    case actionTypes.UPDATE_ARTICLETYPEID:
      return {
        ...state,
        category_id: action.category_id
      }
    case actionTypes.UPDATE_PREVID:
      return {
        ...state,
        prev_id: action.prev_id
      }
    case actionTypes.UPDATE_NEXTID:
      return {
        ...state,
        next_id: action.next_id
      }
    case actionTypes.SAVE_ARTICLE:
      return {
        ...state,
        data: action.data
      }
    case actionTypes.UPDATE_COVER:
      return {
        ...state,
        cover_url: action.cover_url
      }
    default:
      return state
  }
}

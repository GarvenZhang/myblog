import { api } from '../fetch/axios'

const initialStateForLatest = {
  data: [],
  page_num: 1,
  per_page: 10,
  total_count: 10,
  is_end_page: false
}

const initialStateForBest = {
  data: [],
  page_num: 1,
  per_page: 10,
  total_count: 10,
  is_end_page: false
}

const initialStateForSearch = {
  data: [],
  page_num: 1,
  per_page: 10,
  total_count: 10,
  is_end_page: false
}

const initialStateForAll = {
  data: []
}

export const actionTypes = {
  GET_LATEST_LIST: 'GET_LATEST_LIST',
  RESPONSE_LATEST_LIST: 'RESPONSE_LATEST_LIST',
  GET_BEST_LIST: 'GET_BEST_LIST',
  RESPONSE_BEST_LIST: 'RESPONSE_BEST_LIST',
  GET_SEARCH_LIST: 'GET_SEARCH_LIST',
  RESPONSE_SEARCH_LIST: 'RESPONSE_SEARCH_LIST',
  GET_All_LIST: 'GET_All_LIST',
  RESPONSE_All_LIST: 'RESPONSE_All_LIST',
  SORT_ALL_LIST: 'SORT_ALL_LIST'
}

export const actions = {

  get_latest_list: (page_num, per_page) => dispatch => api.get_article_latestlist(page_num, per_page)
    .then(res => dispatch({
      type: actionTypes.RESPONSE_LATEST_LIST,
      data: res.data,
      page_num: res.page_num,
      per_page: res.per_page,
      total_count: res.total_count,
      is_end_page: res.is_end_page
    }))
    .catch(err => {
      console.error(err.message)
    }),

  get_best_list: (page_num, per_page) => dispatch => api.get_article_bestlist(page_num, per_page)
    .then(res => dispatch({
      type: actionTypes.RESPONSE_BEST_LIST,
      data: res.data,
      page_num: res.page_num,
      per_page: res.per_page,
      total_count: res.total_count,
      is_end_page: res.is_end_page
    }))
    .catch(err => {
      console.error(err)
    }),

  get_search_list: (title, page_num, per_page) => dispatch => api.get_article_linkList(title, page_num, per_page)
    .then(res => dispatch({
      type: actionTypes.RESPONSE_SEARCH_LIST,
      data: res.data,
      page_num: res.page_num,
      per_page: res.per_page,
      total_count: res.total_count,
      is_end_page: res.is_end_page
    }))
    .catch(err => {
      console.error(err)
    }),

  get_all_list: () => diapatch => api.get_article_alllist()
    .then(res => diapatch({
      type: actionTypes.RESPONSE_All_LIST,
      data: res.data
    }))
    .catch(err => {
      console.error(err)
    }),

  sort_all_list: data => ({
    type: actionTypes.SORT_ALL_LIST,
    data
  }),
}

export function latestReducer (state = initialStateForLatest, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_LATEST_LIST:
      return {
        ...state,
        data: state.data.concat(action.data),
        page_num: action.page_num,
        per_page: action.per_page,
        total_count: action.total_count,
        is_end_page: action.is_end_page
      }
    default:
      return state
  }
}

export function bestReducer (state = initialStateForBest, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_BEST_LIST:
      return {
        ...state,
        data: state.data.concat(action.data),
        page_num: action.page_num,
        per_page: action.per_page,
        total_count: action.total_count,
        is_end_page: action.is_end_page
      }
    default:
      return state
  }
}

export function searchReducer (state = initialStateForSearch, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_SEARCH_LIST:
      return {
        ...state,
        data: action.data,
        page_num: action.page_num,
        per_page: action.per_page,
        total_count: action.total_count,
        is_end_page: action.is_end_page
      }
    default:
      return state
  }
}

export function allReducer (state = initialStateForAll, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_All_LIST:
      return {
        ...state,
        data: action.data
      }
    case actionTypes.SORT_ALL_LIST:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

import { api } from '../fetch/axios'

const initialStateForLatest = {
  data: [],
  pageNum: 1,
  perPage: 10,
  totalCount: 10,
  isEndPage: false
}

const initialStateForBest = {
  data: [],
  pageNum: 1,
  perPage: 10,
  totalCount: 10,
  isEndPage: false
}

const initialStateForSearch = {
  data: [],
  pageNum: 1,
  perPage: 10,
  totalCount: 10,
  isEndPage: false
}

const initialStateForAll = {
  data: []
}

export const actionTypes = {
  GET_LATEST_LIST: Symbol(),
  RESPONSE_LATEST_LIST: Symbol(),
  GET_BEST_LIST: Symbol(),
  RESPONSE_BEST_LIST: Symbol(),
  GET_SEARCH_LIST: Symbol(),
  RESPONSE_SEARCH_LIST: Symbol(),
  GET_All_LIST: Symbol(),
  RESPONSE_All_LIST: Symbol(),
  SORT_ALL_LIST: Symbol()
}

export const actions = {

  get_latest_list: function (pageNum, perPage) {

    return dispatch => {

      api.get_article_latestlist(pageNum, perPage)
        .then(res => {

          dispatch({
            type: actionTypes.RESPONSE_LATEST_LIST,
            data: res.data,
            pageNum: res.pageNum,
            perPage: res.perPage,
            totalCount: res.totalCount,
            isEndPage: res.isEndPage
          })

        })
        .catch(err => {
          console.error(err.message)
        })
    }

  },

  get_best_list: function (pageNum, perPage) {

    return dispatch => {

      api.get_article_bestlist(pageNum, perPage)
        .then(res => {

          dispatch({
            type: actionTypes.RESPONSE_BEST_LIST,
            data: res.data,
            pageNum: res.pageNum,
            perPage: res.perPage,
            totalCount: res.totalCount,
            isEndPage: res.isEndPage
          })

        })
        .catch(err => {
          console.error(err)
        })

    }

  },

  get_search_list: function (title, pageNum, perPage) {

    return dispatch => {

      api.get_article_linkList(title, pageNum, perPage)
        .then(res => {

          dispatch({
            type: actionTypes.RESPONSE_SEARCH_LIST,
            data: res.data,
            pageNum: res.pageNum,
            perPage: res.perPage,
            totalCount: res.totalCount,
            isEndPage: res.isEndPage
          })

        })
        .catch(err => {
          console.error(err)
        })
    }

  },

  get_all_list: function () {

    return diapatch => {

      api.get_article_alllist()
        .then(res => {

          diapatch({
            type: actionTypes.RESPONSE_All_LIST,
            data: res.data
          })

        })
        .catch(err => {
          console.error(err)
        })

    }

  },

  sort_all_list: function (data) {
    return {
      type: actionTypes.SORT_ALL_LIST,
      data
    }
  }
}

export function latestReducer (state = initialStateForLatest, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_LATEST_LIST:
      return {
        ...state,
        data: state.data.concat(action.data),
        pageNum: action.pageNum,
        perPage: action.perPage,
        totalCount: action.totalCount,
        isEndPage: action.isEndPage
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
        pageNum: action.pageNum,
        perPage: action.perPage,
        totalCount: action.totalCount,
        isEndPage: action.isEndPage
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
        pageNum: action.pageNum,
        perPage: action.perPage,
        totalCount: action.totalCount,
        isEndPage: action.isEndPage
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

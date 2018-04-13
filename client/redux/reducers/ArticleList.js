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

export const actionTypes = {
  GET_LATEST_LIST: 'GET_LATEST_LIST',
  RESPONSE_LATEST_LIST: 'RESPONSE_LATEST_LIST',
  GET_BEST_LIST: 'GET_BEST_LIST',
  RESPONSE_BEST_LIST: 'RESPONSE_BEST_LIST',
  GET_SEARCH_LIST: 'GET_SEARCH_LIST',
  RESPONSE_SEARCH_LIST: 'RESPONSE_SEARCH_LIST'
}

export const actions = {
  get_latest_list: function (pageNum, perPage) {
    return {
      type: actionTypes.GET_LATEST_LIST,
      pageNum,
      perPage
    }
  },
  get_best_list: function (pageNum, perPage) {
    return {
      type: actionTypes.GET_BEST_LIST,
      pageNum,
      perPage
    }
  },
  get_search_list: function (title, pageNum, perPage) {
    return {
      type: actionTypes.GET_SEARCH_LIST,
      title,
      pageNum,
      perPage
    }
  }
}

export function latestReducer (state = initialStateForLatest, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_LATEST_LIST:
      state = state || initialStateForLatest
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
      state = state || initialStateForBest
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
      state = state || initialStateForSearch
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

const initialState = {
  data: [],
  pageNum: 1,
  total: 0
}

export const actionTypes = {
  GET_LATEST_LIST: 'GET_LATEST_LIST',
  RESPONSE_LATEST_LIST: 'RESPONSE_LATEST_LIST',
  GET_BEST_LIST: 'GET_BEST_LIST',
  RESPONSE_BEST_LIST: 'RESPONSE_BEST_LIST'
}

export const actions = {
  get_latest_list: function (pageNum) {
    return {
      type: actionTypes.GET_LATEST_LIST,
      pageNum
    }
  },
  get_best_list: function (pageNum) {
    return {
      type: actionTypes.GET_BEST_LIST,
      pageNum
    }
  }
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_LATEST_LIST:
    case actionTypes.RESPONSE_BEST_LIST:
      return {
        ...state,
        data: [...action.data],
        pageNum: action.pageNum,
        total: action.total
      }
    default:
      return state
  }
}

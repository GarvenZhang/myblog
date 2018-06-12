const initialState = {
  data: []
}

export const actionTypes = {
  GET_CATEGORY_LIST: Symbol(),
  RESPONSE_CATEGORY_LIST: Symbol()
}

export const actions = {
  get_category_list: function () {
    return {
      type: actionTypes.GET_CATEGORY_LIST
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

const initialState = {
  data: []
}

export const actionTypes = {
  GET_WORKS_LIST: Symbol()
}

export const actions = {
  get_works_list: function () {
    return {
      type: actionTypes.GET_WORKS_LIST,
    }
  }
}

export function reducer (state = initialState, action) {

  switch (action.type) {
    case actionTypes.GET_WORKS_LIST:
      return {
        ...state,
        data: action.data
      }
  }
}

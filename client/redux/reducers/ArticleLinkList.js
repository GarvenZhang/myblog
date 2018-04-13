const initialState = {
  data: []
}

export const actionTypes = {
  GET_ARTICLE_LINK_LIST: 'GET_ARTICLE_LINK_LIST',
  RESPONSE_ARTICLE_LINK_LIST: 'RESPONSE_ARTICLE_LINK_LIST'
}

export const actions = {
  get_article_link_list: function () {
    return {
      type: actionTypes.GET_ARTICLE_LINK_LIST
    }
  }
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_ARTICLE_LINK_LIST:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

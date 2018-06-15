const initialState = {
  title: '',
  summary: '',
  content: '',
  pubtime: '',
  articleTypeId: 0,
  prevId: 0,
  nextId: 0,
  cover: ''
}

export const actionTypes = {
  GET_ARTICLE: Symbol(),
  RESPONSE_ARTICLE: Symbol(),
}

export const actions = {
  get_article: function (id) {
    return {
      type: actionTypes.GET_ARTICLE,
      id
    }
  },
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
        articleTypeId: action.articleTypeId,
        prevId: action.prevId,
        nextId: action.nextId,
        cover: action.cover
      }
    default:
      return state
  }
}

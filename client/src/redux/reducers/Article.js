const initialState = {
  title: '',
  summary: '',
  content: '',
  pubtime: '',
  articleTypeId: 0,
  prevId: 0,
  nextId: 0
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
  UPDATE_NEXTID: 'UPDATE_NEXTID'
}

export const actions = {
  get_article: function (id) {
    return {
      type: actionTypes.GET_ARTICLE,
      id
    }
  },
  save_article: function (data) {
    return {
      type: actionTypes.SAVE_ARTICLE,
      data
    }
  },
  update_title: function (title) {
    return {
      type: actionTypes.UPDATE_TITLE,
      title
    }
  },
  update_summary: function (summary) {
    return {
      type: actionTypes.UPDATE_SUMMARY,
      summary
    }
  },
  update_content: function (content) {
    return {
      type: actionTypes.UPDATE_CONTENT,
      content
    }
  },
  update_pubtime: function (pubtime) {
    return {
      type: actionTypes.UPDATE_PUBTIME,
      pubtime
    }
  },
  update_article_type_id: function (articleTypeId) {
    return {
      type: actionTypes.UPDATE_ARTICLETYPEID,
      articleTypeId
    }
  },
  update_prev_id: function (prevId) {
    return {
      type: actionTypes.UPDATE_PREVID,
      prevId
    }
  },
  update_next_id: function (nextId) {
    return {
      type: actionTypes.UPDATE_NEXTID,
      nextId
    }
  }
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
        nextId: action.nextId
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
        articleTypeId: action.articleTypeId
      }
    case actionTypes.UPDATE_PREVID:
      return {
        ...state,
        prevId: action.prevId
      }
    case actionTypes.UPDATE_NEXTID:
      return {
        ...state,
        nextId: action.nextId
      }
    case actionTypes.SAVE_ARTICLE:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

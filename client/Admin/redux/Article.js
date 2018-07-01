import { get, post, api } from '../../fetch/axios'

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
  SAVE_ARTICLE: Symbol(),
  UPDATE_TITLE: Symbol(),
  UPDATE_SUMMARY: Symbol(),
  UPDATE_CONTENT: Symbol(),
  UPDATE_PUBTIME: Symbol(),
  UPDATE_ARTICLETYPEID: Symbol(),
  UPDATE_PREVID: Symbol(),
  UPDATE_NEXTID: Symbol(),
  UPDATE_COVER: Symbol()
}

export const actions = {
  get_article: function (id) {

    return dispatch => {

      get(api.getArticleApi(id))
        .then(res => {

          if (res.retCode !== 1) {
            return
          }

          dispatch({
            type: actionTypes.RESPONSE_ARTICLE,
            title: res.title,
            pubtime: res.pubtime,
            content: res.content,
            summary: res.summary,
            readNum: res.readNum,
            prevId: res.prevId,
            nextId: res.nextId
          })

        })
        .catch(err => {
          console.log(err)
        })

    }

  },
  save_article: function (data) {

    return dispatch => {

      post(api.saveArticleApi(), data)
        .then(res => {

          if (res.retCode === 1) {
            alert('成功！')
          }

        })
        .catch(err => {
          console.log(err)
        })

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
  },
  update_cover: function (cover) {
    return {
      type: actionTypes.UPDATE_COVER,
      cover
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
        nextId: action.nextId,
        cover: action.cover
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
    case actionTypes.UPDATE_COVER:
      return {
        ...state,
        cover: action.cover
      }
    default:
      return state
  }
}

import { api } from '../fetch/axios'

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
  RESPONSE_ARTICLE: 'RESPONSE_ARTICLE'
}

export const actions = {

  get_article (id) {

    return dispatch => {

      api.get_article(id)
        .then(res => {

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
    default:
      return state
  }
}

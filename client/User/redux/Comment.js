import { api } from '../fetch/axios'
import { stop } from '../../lib/iterator'
import type from '../../lib/type'

const initialState = {
  data: [],
  page_num: 0,
  per_page: 10,
  total_count: 0,
  is_end_page: false,
  content: '',
  to_uid: '',
  to_name: ''
}

export const actionTypes = {
  GET_COMMENTS: 'GET_COMMENTS',
  GET_LIKED: 'GET_LIKED',
  ADD_LIKED: 'ADD_LIKED',
  UPDATE_LIKED: 'UPDATE_LIKED',
  UPDATE_TO_USER: 'UPDATE_TO_USER',
  UPDATE_CONTENT: 'UPDATE_CONTENT',
  POST_COMMENT: 'POST_COMMENT',
}

export const actions = {
  get_comment: (article_id, page_num, per_page) => dispatch => api.get_comment(article_id, page_num, per_page)
    .then(res => {

      dispatch({
        ...res,
        type: actionTypes.GET_COMMENTS
      })

      // 转换成 1,2,3,4 的格式
      let comments_id = ''
      res.data.forEach(item => {
        comments_id += `${item.id},`
      })
      comments_id = comments_id.slice(0, comments_id.length - 1)

      actions.get_liked('comments_id', comments_id, page_num, per_page)(dispatch)

    })

    .catch(err => {
      console.error(err.message)
    }),

  get_liked: (name, value, per_page, page_num) => dispatch => api.get_liked(name, value, per_page, page_num)
    .then(res => dispatch({
      ...res,
      type: actionTypes.GET_LIKED
    }))
    .catch(err => {
      console.error(err.message)
    }),
  
  add_liked: (data) => dispatch => api.add_liked(data)
    .then(res => dispatch({
      type: actionTypes.ADD_LIKED,
      comment_id: data.comment_id,
      liked_id: res.id,
      user_id: res.user_id
    }))
    .catch(err => {
      console.error(err.message)
    }),

  update_liked: (data) => dispatch => api.update_liked(data)
    .then(res => dispatch({
      type: actionTypes.UPDATE_LIKED,
      liked_id: data.id,
      comment_id: data.comment_id,
      status: data.status
    }))
    .catch(err => {
      console.error(err.message)
    }),
  
  update_to_user: (from_uid) => ({
    type: actionTypes.UPDATE_TO_USER,
    from_uid,
  }),
  
  update_content: content => ({
    type: actionTypes.UPDATE_CONTENT,
    content
  }),
  
  post_comment: (data) => dispatch => api.add_comment(data)
    .then(res => {

      // 更新数据
      dispatch({
        type: actionTypes.POST_COMMENT,
        commentItem: res.data
      })

      // 清空textarea
      dispatch({
        type: actionTypes.UPDATE_CONTENT,
        content: ''
      })

    })
    .catch(err => {
      console.error(err.message)
    })
  
  
}

export function reducer (state = initialState, action) {

  switch (action.type) {

    case actionTypes.GET_COMMENTS:

      return {
        ...state,
        ...action
      }

    case actionTypes.GET_LIKED:

      if (type.isPlainObject(action.data)) {
        return state
      }

      return {
        ...state,
        data: state.data.map(outerItem => {
          for (let comment_id in action.data) {
            if (parseInt(comment_id) === parseInt(outerItem.id)) {
              return {
                ...outerItem,
                liked: outerItem.liked.concat(action.data[comment_id]),
              }
            }
          }

          return outerItem
        })
      }
    
    // === 不能直接修改 state, reducer是纯函数,是通过比较旧的 state 以及 旧的 state 通过现在的 action 计算后的 新state 来决定是否数据由变化  === //
    case actionTypes.ADD_LIKED:
      
      // let data = state.data
      //
      // stop(data, item => {
      //
      //   if (item.id === action.comment_id) {
      //     item.liked_num = 1
      //     return false
      //   }
      //
      // })

      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.comment_id) {

            const newItem = {
              id: action.liked_id,
              status: 1,
              user_id: action.user_id
            }

            return {
              ...item,
              liked: item.liked.concat(newItem)
            }
          }
          return item
        })
      }

    case actionTypes.UPDATE_LIKED:

      return {
        ...state,
        data: state.data.map(outer => {
          if (action.comment_id === outer.id) {
            return {
              ...outer,
              liked: outer.liked.map(inner => {
                if (inner.id === action.liked_id) {
                  return {
                    ...inner,
                    status: action.status
                  }
                }
                return inner
              })
            }
          }
          return outer
        })
      }

    case actionTypes.UPDATE_CONTENT:

      return {
        ...state,
        content: action.content
      }
      
    case actionTypes.UPDATE_TO_USER:

      let content = state.content

      let to_name = ''
      stop(state.data, (item) => {
        if (item.from_uid === action.from_uid) {
          to_name = item.from_name
          return false
        }
      })

      to_name = `@${to_name}:`

      if (content === '') {
        content = to_name
      } else if (/^(@\w+?:)/.test(content)) {
        content.replace(RegExp.$1, to_name)
      } else {
        content = to_name + content
      }

      return {
        ...state,
        content,
        to_uid: action.to_uid,
      }

    case actionTypes.POST_COMMENT:

      return {
        ...state,
        data: [action.commentItem].concat(state.data)
      }

    default:
      return state
  }

}

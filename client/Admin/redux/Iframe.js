import { actionTypes as UserActionTypes } from './User'

const initialState = {
  $iframe: null,
  hasLoaded: false,
  messageType: '',
  postFn: []
}

export const actionTypes = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  UPDATE_IFRAME_STATUS: 'UPDATE_IFRAME_STATUS',
}

export const actions = {

  /**
   * 发送信息
   */
  send_message: ({messageType, postFn}) => dispatch => {

    if (messageType === 'logout') {
      dispatch({
        type: UserActionTypes.RESET_USER_INFO
      })
    }

    dispatch({
      type: actionTypes.SEND_MESSAGE,
      messageType,
      postFn
    })

  },

  /**
   * 更新iframe加载状态
   */
  update_loaded_status: ({$iframe, hasLoaded}) => ({
    type: actionTypes.UPDATE_IFRAME_STATUS,
    $iframe,
    hasLoaded
  })

}

export function reducer (state = initialState, action) {

  const postFn = state.postFn

  switch (action.type) {

    // 当 hasLoaded 还为 false 时, 证明还未加载完成, 此时将 函数 放进postFn数组, 等到 hasLoaded 为true时 自动执行; 当为 true 时, 执行执行
    case actionTypes.SEND_MESSAGE:

      if (!state.hasLoaded) {
        
        return {
          ...state,
          messageType: action.messageType,
          postFn: state.postFn.concat(action.postFn)
        }
      }

      // 执行操作
      action.postFn(state.$iframe)

      return {
        ...state,
        messageType: action.messageType,
      }

    // 当 postFn 中有函数时, 加载完后就立马执行
    case actionTypes.UPDATE_IFRAME_STATUS:
      console.log(postFn)
      if (postFn.length > 0) {
        postFn.forEach(item => {
          item(action.$iframe)
        })
      
        return {
          ...state,
          $iframe: action.$iframe,
          hasLoaded: action.hasLoaded,
          postFn: []
        }

      }

      return {
        ...state,
        $iframe: action.$iframe,
        hasLoaded: action.hasLoaded,
      }

    default:
      return state
  }

}

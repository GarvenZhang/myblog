const initialState = {
  csrf_token: '',
  isAuthenticated: false,
  user: {},
  tips: '',
  loginFailTimes: 0
}

export const actionTypes = {
  LOGIN: Symbol(),
  RESPONSE_LOGIN: Symbol(),
  UPDATE_PASSWORD: Symbol(),
  UPDATE_TIPS: Symbol(),
  UPDATE_LOGINFAILTIMES: Symbol()
}

export const actions = {
  login: function (data) {
    return {
      type: actionTypes.LOGIN,
      data
    }
  }
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_LOGIN:
      return {
        ...state,
        isAuthenticated: !action.user,
        user: action.user
      }
    case actionTypes.UPDATE_LOGINFAILTIMES:
      return {
        ...state,
        loginFailTimes: ++state.loginFailTimes
      }
    case actionTypes.UPDATE_TIPS:
      return {
        ...state,
        tips: action.msg
      }
    default:
      return state
  }
}

const initialState = {
  // 0 - 正常； 1 - 无权限 ； 2 - 过期
  tipsType: 0
}

export const actionTypes = {
  UPDATE_TIPSTYPE: Symbol()
}

export const actions = {

  update_tipstype: function (tipsType) {
    return {
      type: actionTypes.UPDATE_TIPSTYPE,
      tipsType
    }
  }

}

export function reducer (state = initialState, action) {

  switch (action.type) {

    case actionTypes.UPDATE_TIPSTYPE:
      return {
        ...state,
        tipsType: action
      }
    default:
      return state

  }

}

// === redux：数据状态管理状态 === //
// === 1 基础： === //
// === 1.1 定义计算规则，即reducer === //
// === 1.2 根据计算规则生成stroe：createStore(reducer) === //
// === 1.3 定义数据(state)变化后的派发规则: store.subscribe(() => { store.getState() }) === //
// === 1.4 触发数据变化：store.dispatch({type: ...}) === //

const initialState = {
  // -1 - 关
  // 'default' - 默认
  // 1 - 开
  isOpen: 'default',
  header: '',
  content: '',
  question: '',
  yesText: '',
  noText: ''
}

export const actionTypes = {
  UPDATE: Symbol(),
}

export const actions = {
  update_popup: function (ops) {
    return {
      type: actionTypes.UPDATE,
      isOpen: ops.isOpen,
      notMoveYet: ops.notMoveYet,
      header: ops.header,
      content: ops.content,
      question: ops.question,
      yesText: ops.yesText,
      noText: ops.noText
    }
  }
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE:
      return {
        ...state,
        isOpen: action.isOpen || state.isOpen,
        notMoveYet: action.notMoveYet || state.notMoveYet,
        header: action.header || state.header,
        content: action.content || state.content,
        question: action.question || state.question,
        yesText: action.yesText || state.yesText,
        noText: action.noText || state.noText
      }
    default:
      return state
  }
}

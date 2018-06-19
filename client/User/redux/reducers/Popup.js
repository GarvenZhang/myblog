// === redux：可预测的状态容器 === //
// === 1 基础： === //
// === 1.1 定义计算规则，即reducer === //
// === 1.1.a reducer(previousState, action) => newState: 根据前一个state和action计算出新的state === //
// === 1.1.b initialState: 提供给reducer在第一次执行时的默认state === //
// === 1.2 根据计算规则生成stroe：createStore(reducer) === //
// === 1.3 定义数据(state)变化后的派发规则: store.subscribe(() => { store.getState() }) === //
// === 1.4 触发数据变化：store.dispatch({type: ...}) === //
// === 2 三大原则： === //
// === 2.1 单一数据源 === //
// === 2.2 状态只读 === //
// === 2.3 状态修改均有纯函数完成 === //
// === 3 核心api: === //
// === 3.1 createStore(reducers[, initialState]): 创建store === //
// === 3.2 store.getState(): 获取store中的当前状态 === //
// === 3.3 store.dispatch(action): 分发一个action并返回这个action, 这是唯一能改变store中数据的方式 === //
// === 3.4 store.subscribe(listener): 注册一个监听者, 它在store发生变化时被调用 === //

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
  UPDATE: Symbol()
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

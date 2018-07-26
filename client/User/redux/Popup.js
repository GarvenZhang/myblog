// === redux：可预测的状态容器 === //
// === 1 React 与 Redux 关系：若只用React的props和state来实现数据管理，当项目很大的时候数据传递会很麻烦，而redux将数据从react中脱离出来，redux就是一个数据管理容器，而react只负责view层 === //
// === 2 运作流程: === //
/*

  1 在react app的最外层套一个 由 react-redux 提供的 Provider组件，接收 store 作为整个应用的数据容器
  2 store 由 redux 提供的 createStore() 生成
  3 createStore() 接受 三个参数: rootReducer, preloadedState, enhancer
  3.1 rootReducer 由 redux 的 combineReducers() 生成, combineReducers() 传入的是一个对象，由各个 reducer 组成
  3.2 preloadedState 是 一个初始化的state，为 空对象 或者 一个预定好的state(当使用ssr方案时由服务器端提供, 以达到数据状态同步)
  3.3 enhancer 由 redux 的 compose() 生成，主要是 传入中间件 来加强reducer
  4 每个组件的数据状态 由 一个state 来管理, preloadState 与 state 的关系为包含, 可以把整个store想象成一棵树, 树的节点就是state, 而每个需要有数据管理的组件都对应着一个state
  4.1 一般会初始化state, 如命名为 initialState, 提供默认值
  4.2 初始化一个react组件的时候, 需要用 react-redux 提供的 connect() 将 state 和 dispatch 绑定到 组件的 props 上, 接收的两个参数是函数，为 mapStateToProps 和 mapDispatchToProps，意味着这样才能在react组件中 调用或者访问 store 中对应的state中的数据
  4.3 bindActionsCreators() 只是一个封装，实质上还是会 dispatch(action)
  4.4 dispatch(action) 是从 react组件中 改变state的唯一方法，派发 action后，store收到并给出一个新的 state，state的计算过程就叫 reducer, 所以reducer的第一个参数是 旧的state，第二个参数是 action，即在旧的state上做一个action产生新的state
  4.5 state改变后, store就会调用监听函数 subscribe(listener), listener中会 重新渲染react

*/

// === 1 运作流程: === //
/*
      trigger           send to           Update           contain         defines
  UI ---------> action --------> Reducer ---------> Store --------> State --------
  ^                                                                              |
  |                                                                              v
   ------------------------------------------------------------------------------

*/
// === 3 三大原则： === //
// === 3.1 单一数据源, 整个应用的状态都保存在一个对象(store)中 === //
// === 3.2 状态只读 === //
// === 3.3 状态修改均有纯函数完成 === //

const initialState = {
  // -1 - 关
  // 'default' - 默认
  // 1 - 开
  isOpen: 'default',
  header: '',
  content: '',
  question: '',
  yesText: '',
  noText: '',
  notMoveYet: ''
}

export const actionTypes = {
  UPDATE_POPUP: 'UPDATE_POPUP'
}

export const actions = {
  update_popup: (ops) => ({
    ...ops,
    type: actionTypes.UPDATE_POPUP,
  })
}

// === 纯函数: 指函数内外间无关联, 函数内只依赖参数, 相同的输入永远产生相同的输出 === //
// === 1 reducer设为纯函数的好处: 同样的state必定得到同样的view, reducer内部不能改变state，只能返回全新的state === //

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_POPUP:
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

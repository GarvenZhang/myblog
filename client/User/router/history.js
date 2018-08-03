// === react-router v4 组件外路由跳转方法: === //
// === 1 withRouter: react-router-dom 提供的 withRouter(组件), 在组件内就可通过 this.props.history.oush() 来跳转  === //
// === 2 hack: === //
// === 2.1 自己创建 history: import createHistory from 'history/createBrowserHistory'; export default createHistory(); === //
// === 2.2 在配置路由时不用 HashRouter, 而是 <Router history={history}> === //
// === 2.3 想要跳转的地方, 引入 history, 然后 history.push() === //

import createHistory from 'history/createBrowserHistory'

export default typeof window !== 'undefined' ? createHistory() : {}

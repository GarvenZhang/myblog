import React, { PureComponent } from 'react'

import style from './index.css'

// === shouldComponentUpdate(nextProps, nextState): 每当state或者props有变化时都会触发更新的生命周期流程, 首先 shouldCompoenntUpdate() 会触发, 默认是返回true, 即允许重新渲染 === //
// === 1 作用: 一般用于性能优化, 有两种场景: === //
// === 1.1 当明确得知这次 更新了state或者props的值 但又 无需重新渲染时使用, 此时可定制化 shouldComponentUpdate() === //
// === 1.2 当组件没有自己的 state , 完全依赖于外部传的 props 来渲染时使用, 此时采用内置的 PureComponent 会更好, 其原理也是通过 浅层比较 下一次的 props 和 states 和 现在的 是否一致, 若都一致则无需重新渲染, 因此不适合 具有复杂数据结构 的 props 或者 state   === //
// === 2 性能优化工具查看: 在 chrome 中的 url 上加上参数 ?react_perf , 在 Perfomance 面板会出现相应的 react 渲染时间 === //
export class SortIcon extends PureComponent {
  constructor (props) {
    super(props)
    
    this.clickHandle = ::this.clickHandle
  }

  clickHandle () {
    this.props.sort()(true)
  }

  render () {
    return (
      <div className={style['icon-wrap']}>
        <i className={style['icon-up']} onClick={this.clickHandle} />
        <i className={style['icon-down']} onClick={this.clickHandle} />
      </div>
    )
  }
}

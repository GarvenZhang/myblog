import React, { Component } from 'react'

import style from './index.css'

// === 无状态组件: 使用无状态函数构建的组件 === //
// === 1 与React.Component的异同: === //
// === > 同: 都接受props和context, 都可设置静态属性propsType和defaultProps === //
// === > 异: 无state和声明周期, 创建时始终保持一个实例, 避免了不必要的检查和内存分配 === //

const LoadMore = (props) => {
  return (
    <div className={style['load-more-area']} ref={props.loadMoreRef}>
      {
        props.is_end_page
          ? <p>数据已全部加载</p>
          : <p>下拉加载更多 <i className={style['icon-loading']} /></p>
      }
    </div>
  )
}

export default LoadMore

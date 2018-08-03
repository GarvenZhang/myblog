import React, { Component } from 'react'

import style from './index.css'

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

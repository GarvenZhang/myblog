import React, { Component } from 'react'

import './index.css'

const LoadMore = (props) => {
  return (
    <div className="load-more-area" ref={props.loadMoreRef}>
      {
        props.isEndPage ?
          <p>数据已全部加载</p> :
          <p>下拉加载更多</p>
      }
    </div>
  )
}

export default LoadMore

import React, { Component } from 'react'

import './index.css'

class Search extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <header className="header">
        <a href="https://garvenzhang.github.io/" style={{position: 'absolute', top: 0, left: 0}}>新博客改版进行中，点击进入旧博客地址！</a>
        <h1 className="page-title hide">张益铭的前端小博客</h1>
        <div className="search-wrap">
          <input type="text" className="search-inp" autoFocus />
          <input type="button" className="search-btn" value={'搜索'}/>
        </div>
      </header>
    )
  }
}

export default Search

import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import './index.css'

class Nav extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <nav className="nav">
        <ul className="nav-list nav-tabs">
          <li className="nav-item">
            <Link className="link" to='/'>
              <h2 className="nav-title">最新文章</h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='/best-article'>
              <h2 className="nav-title">最佳博文</h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='article-category'>
              <h2 className="nav-title">博文分类</h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='/collection-of-works'>
              <h2 className="nav-title">作品集</h2>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav

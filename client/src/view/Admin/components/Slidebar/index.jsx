import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

class Slidebar extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="slidebar-inner">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="link" to='/admin'>文章发表</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='/admin/article-tag'>文章标签管理</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='/admin/comment'>评论管理</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='/admin/chatroom'>聊天室管理</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='/admin/works'>作品集管理</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='/admin/account'>账号密码</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='/'>回到博客</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Slidebar

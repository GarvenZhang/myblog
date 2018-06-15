import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import config from '../../../../config'

import style from './index.css'

class Sidebar extends Component {
  constructor (props) {
    super(props)

    this.loginout = this.loginout.bind(this)
  }

  static tree = {
    '1': {
      id: 1,
      name: '文章发表',
      link: '/post',
    }
  }

  loginout () {
    window.localStorage.setItem('access_token', '')
    window.location = '/'
  }

  render () {

    return (
      <div className={style['slidebar-inner']}>
        <ul className={style['nav-list']}>
          <li className={style['nav-item']}>
            <Link className={style['link']} to='/post'>文章发表</Link>
          </li>
          <li className={style['nav-item']}>
            {/*<Link className={style['link']} to='/article-tag'>文章管理</Link>*/}
            <Link className={style['link']} to='/general-catalogue'>文章管理</Link>
          </li>
          <li className={style['nav-item']}>
            <Link className={style['link']} to='/comment'>评论管理</Link>
          </li>
          <li className={style['nav-item']}>
            <Link className={style['link']} to='/chatroom'>聊天室管理</Link>
          </li>
          <li className={style['nav-item']}>
            <Link className={style['link']} to='/works'>作品集管理</Link>
          </li>
          <li className={style['nav-item']}>
            <Link className={style['link']} to='/info'>个人信息</Link>
          </li>
          <li className={style['nav-item']}>
            <a className={style['link']} href={process.env.NODE_ENV === 'production' ? config.prod.indexServerIP : `http://localhost:${config.indexPort}`}>回到博客</a>
          </li>
          <li className={style['nav-item']}>
            <a href="javascript: void (0);" onClick={this.loginout} className={style['link']}>登出</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar

import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import './index.css'

class Nav extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <nav className='nav'>
        <ul className='nav-list nav-tabs'>
          <li className='nav-item'>
            <Link className='link' to='/'>
              <h2 className='nav-title'>最新文章
                <i className='icon iconfont icon-magic' />
              </h2>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='link' to='/bestlist'>
              <h2 className='nav-title'>最佳博文
                <i className='icon iconfont icon-medal_light' />
              </h2>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='link' to='category'>
              <h2 className='nav-title'>博文分类
                <i className='icon iconfont icon-circle' />
              </h2>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='link' to='/works'>
              <h2 className='nav-title'>作品集
                <i className='icon iconfont icon-selection' />
              </h2>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav

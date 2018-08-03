import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './index.css'

// === localStorage: 专门来于浏览器存储 === //
// === 1 特点：大小5M左右，仅存在客户端，人为清空才消失(js或手动清空) === //
// === 2 使用场景: 不怎么变的数据(js,css,小icon,动态数据等) === //

class Sidebar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menu1Status: true
    }

    this.menuHandle = ::this.menuHandle
  }

  /**
   * 菜单伸缩
   */
  menuHandle (e) {

    const name = e.target.getAttribute('data-name')

    this.setState({
      [name]: !this.state[name]
    })

  }

  render () {

    return (
      <div className={style['slidebar-inner']}>
        <ul className={style['menu-list-first']}>
          <li className={style['menu-item-first']}>
            <span data-name='menu1Status'
                  className={`${style['menu-title-first']} ${this.state.menu1Status ? style['icon-line'] : style['icon-plus']}`}
                  onClick={this.menuHandle}>
              文章管理
            </span>
            <ul className={style['menu-list-second']}>
              <li className={style['menu-item-second']}>
                <Link className={style['link']} to='/post'>文章发表</Link>
              </li>
              <li className={style['menu-item-second']}>
                <Link className={style['link']} to='/article-tag'>标签管理</Link>
              </li>
              <li className={style['menu-item-second']}>
                <Link className={style['link']} to='/general-catalogue'>文章统计</Link>
              </li>
            </ul>
          </li>
          <li className={style['menu-item-first']}>
            <Link className={style['link']} to='/comment'>评论管理</Link>
          </li>
          <li className={style['menu-item-first']}>
            <Link className={style['link']} to='/chatroom'>聊天室管理</Link>
          </li>
          <li className={style['menu-item-first']}>
            <Link className={style['link']} to='/works'>作品集管理</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import config from '../../../../config'

import style from './index.css'

export default class Home extends PureComponent {
  render () {
    return (
      <div className={style["home-page"]}>
        <div className={style["home-inner"]}>
          <h1 className={style['title--h1']}>张益铭的前端小博客</h1>
          <h2 className={style['title--h2']}>内容管理系统</h2>
          <p className={style['link-wrap']}>
            <a href={`${config.SSO_DOMAIN}?from=${config.CMS_DOMAIN}`} className={style['link']}>&gt;&gt; 登录</a>
          </p>
        </div>
      </div>
    )
  }

}

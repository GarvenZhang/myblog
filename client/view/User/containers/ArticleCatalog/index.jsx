import React, { Component } from 'react'

import { LatestList } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

import './index.css'

class ArticleCatalog extends Component {
  constructor (props) {
    super(props)

  }

  componentWillMount () {
    document.title = '。。。 - 张益铭'
  }

  render () {

    return (
      <div className="home-page">
        <Header/>
        <main className="main">
          <Nav/>
          <div className="latest-article-block nav-details-item">
            <div className="nav-details-inner">
              <LatestList/>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default ArticleCatalog

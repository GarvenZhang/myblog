import React, { Component } from 'react'

import { WorksList } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

import './index.css'

class CollectionOfWorks extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="home-page">
        <Header/>
        <main className="main">
          <Nav/>
          <div className="collection-block nav-details-item">
            <div className="nav-details-inner">
              <WorksList/>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default CollectionOfWorks

import React, { Component } from 'react'

import { WorksItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

import './index.css'

class CollectionOfWorks extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className='home-page'>
        <Header />
        <main className='main'>
          <Nav />
          <div className='collection-block nav-details-item'>
            <div className='nav-details-inner'>
              <WorksItem />
            </div>
          </div>
        </main>
      </div>
    )
  }

  componentDidMount () {
    document.title = '作品集 - 张益铭'
  }
}

export default CollectionOfWorks

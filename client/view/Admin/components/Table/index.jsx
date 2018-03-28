import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import './index.css'

class Row extends Component {
  static defaultProps = {
    id: 0,
    name: ''
  }

  static propsType = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    return (
      <ul className="table-row">
        <li className="table-data">{this.props.id}</li>
        <li className="table-data">{this.props.name}</li>
        <li className="table-data">
          <span className="iconfont icon-delete"></span>
          <span className="iconfont icon-addition"></span>
        </li>
      </ul>
    )
  }
}

class Table extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    const {
      tagList
    } = this.props

    return (
      <div className="tags-table">
        <ul className="table-head">
          <li className="table-data">id</li>
          <li className="table-data">标签名</li>
          <li className="table-data">操作</li>
        </ul>
        <div className="table-body">
          {
            tagList.map(item => (
              <Row key={item.id} {...item}/>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Table

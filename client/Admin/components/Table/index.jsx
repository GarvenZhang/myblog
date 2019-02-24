import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Popup from '../Popup'
import { actions as PopupActions } from '../../redux/Popup'
import config from '../../../../config'

import style from './index.css'

const { update_popup } = PopupActions

@connect(mapStateToProps, mapDispatchToProps)
class Row extends Component {

  constructor (props) {
    super(props)

    this.editHandle = ::this.editHandle
    this.deleteHandle = ::this.deleteHandle
  }


  static defaultProps = {
    id: 0,
    name: ''
  }

  editHandle () {
    this.props.update_popup({
      isOpen: 1,
      header: '请修改:',
      category: 'prompt'
    })
  }

  deleteHandle () {
    this.props.delete_category(this.props.id)
  }

  render () {
    return (
      <ul className={style['table-row']}>
        <li className={style['table-data']}>{this.props.id}</li>
        <li className={style['table-data']}>{this.props.name}</li>
        <li className={style['table-data']}>
          <span className='iconfont icon-edit' onClick={this.editHandle}></span>
          <span className='iconfont icon-delete' onClick={this.deleteHandle}></span>
        </li>
      </ul>
    )
  }
}

if (config.ISDEV) {
  Row.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }
}

export default class Table extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    const {
      tagList, delete_category
    } = this.props

    return (
      <div className={style['tags-table']}>
        <ul className={style['table-head']}>
          <li className={style['table-data']}>id</li>
          <li className={style['table-data']}>标签名</li>
          <li className={style['table-data']}>操作</li>
        </ul>
        <div className={style['table-body']}>
          {
            tagList.map(item => (
              <Row key={item.id} {...item} delete_category={delete_category}/>
            ))
          }
        </div>
        <Popup/>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return state.PopupReducer
}

function mapDispatchToProps (dispatch) {
  return {
    update_popup: bindActionCreators(update_popup, dispatch)
  }
}

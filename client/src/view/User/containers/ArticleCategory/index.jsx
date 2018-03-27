import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import { actions } from '../../../../redux/reducers/ArticleCategory'

import './index.css'

const { get_category_list } = actions

class Tag extends Component {
  static defaultProps = {
    link: '/',
    name: '',
    total: 0
  }
  static propsType = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }
  render () {
    return (
      <li className="category-item">
        <Link className="link" to={this.props.link}>{this.props.name}</Link>
        [<span className="num">{this.props.total}</span>]
      </li>
    )
  }
}

class ArticleCategory extends Component {
  constructor (props) {
    super(props)

  }

  static defaultProps = {
    tagsList: []
  }

  static propsType = {
    tagsList: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render () {
    const {
      tagsList
    } = this.props
    return (
      <div className="home-page">
        <Header/>
        <main className="main">
          <Nav/>
          <div className="category-block nav-details-item">
            <div className="nav-details-inner">
              <ul className="category-list">
                {
                  tagsList.map(item => (
                    <Tag key={item.id} {...item}/>
                  ))
                }
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }

  componentDidMount () {
    this.props.get_category_list()
  }
}

function mapStateToProps (state) {
  return {
    tagsList: state.ArticleCategoryReducer.data
  }
}

function mapDispatchToProps (dispatch) {
  return {
    get_category_list: bindActionCreators(get_category_list, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleCategory)

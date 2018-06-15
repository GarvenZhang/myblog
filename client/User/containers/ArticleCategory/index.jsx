import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import { actions } from '../../redux/reducers/ArticleCategory'

import style from './index.css'

const { get_category_list } = actions

class Tag extends Component {
  static defaultProps = {
    name: '',
    count: 0,
    link: '',
    total: ''
  }

  render () {
    return (
      <li className={style['category-item']}>
        <Link className={style['link']} to={'/'}>{this.props.name}</Link>
        [<span className={style['num']}>{this.props.count}</span>]
      </li>
    )
  }
}

if (process.env.NODE_ENV === 'development') {
  Tag.propTypes = {
    link: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }
}

class ArticleCategory extends Component {
  constructor (props) {
    super(props)

  }

  static defaultProps = {
    tagsList: []
  }

  componentWillMount () {

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
              <ul className={style['category-list']}>
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
    document.title = '博文分类 - 张益铭'

    this.props.get_category_list()
  }
}

if (process.env.NODE_ENV === 'development') {
  ArticleCategory.propTypes = {
    tagsList: PropTypes.arrayOf(PropTypes.object).isRequired
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

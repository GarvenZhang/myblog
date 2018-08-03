import React, { PureComponent, Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import { actions as ArticleCategoryActions } from '../../redux/ArticleCategory'
import config from '../../../../config'

import style from './index.css'

class Tag extends PureComponent {
  static defaultProps = {
    name: '',
    count: 0,
    link: '',
    total: ''
  }

  render () {
    return (
      <li className={style['category-item']}>
        <Link className={style['link']} target='_blank' to={`/search?tag=${this.props.name}&page_num=0&per_page=10`}>{this.props.name}</Link>
        [<span className={style['num']}>{this.props.count}</span>]
      </li>
    )
  }
}

if (config.ISDEV) {
  Tag.propTypes = {
    link: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }
}

@connect(
  state => ({
    tagsList: state.ArticleCategoryReducer.data
  }),
  {...ArticleCategoryActions}
)
export default class ArticleCategory extends Component {
  constructor (props) {
    super(props)

  }

  static defaultProps = {
    tagsList: []
  }

  componentWillMount () {

  }

  render () {

    return (
      <div className="home-page">
        <Header/>
        <main className="main">
          <Nav/>
          <div className="category-block nav-details-item">
            <div className="nav-details-inner">
              <ul className={style['category-list']}>
                {
                  this.props.tagsList.map(item => (
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

    if (this.props.tagsList.length === 0) {
      this.props.get_category_list()
    }

  }
}

if (config.ISDEV) {
  ArticleCategory.propTypes = {
    tagsList: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

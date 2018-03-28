import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { BestItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import LoadMore from '../../components/LoadMore'
import { actions } from '../../../../redux/reducers/ArticleList'

import './index.css'

const { get_best_list } = actions

class BestArticle extends Component {
  constructor (props) {
    super(props)

  }

  static defaultProps = {
    articleList: []
  }

  static propsTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  componentWillMount () {
    document.title = '最佳博文 - 张益铭'
  }

  render () {
    const {
      articleList
    } = this.props

    return (
      <div className="home-page">
        <Header/>
        <main className="main">
          <Nav/>
          <div className="best-article-block nav-details-item">
            <div className="nav-details-inner">
              <ul className="article-list best--list">
                {
                  articleList.map(item => (
                    <BestItem {...item} key={item.id} />
                  ))
                }
                <LoadMore/>
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }

  componentDidMount () {
    this.props.get_best_list(1)
  }
}

function mapStateToProps (state) {
  return {
    articleList: state.ArticleListReducer.data
  }
}

function mapDispatchToProps (dispatch) {
  return {
    get_best_list: bindActionCreators(get_best_list, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestArticle)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { LatestItem } from '../../components/HomeList/index'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import LoadMore from '../../components/LoadMore'
import { actions } from '../../../../redux/reducers/ArticleList'

import './index.css'

const { get_latest_list } = actions

class Home extends Component {
  constructor (props) {
    super(props)

  }

  static defaultProps = {
    articleList: []
  }

  static propsTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired
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
          <div className="latest-article-block nav-details-item">
            <div className="nav-details-inner">
              <ul className="article-list latest--list">
                {
                  articleList.map(item => (
                    <LatestItem {...item} key={item.id} />
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
    this.props.get_latest_list()
  }
}

function mapStateToProps (state) {
  return {
    articleList: state.ArticleListReducer.data
  }
}

function mapDispatchToProps (dispatch) {
  return {
    get_latest_list: bindActionCreators(get_latest_list, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

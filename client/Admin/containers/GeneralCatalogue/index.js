import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Sidebar from '../../components/Slidebar'
import { SortIcon } from '../../components/Icon'
import TipsBar from '../../components/TipsBar'
import { actions as ArticleListActions } from '../../../Admin/redux/ArticleList'
import curring from '../../../lib/curring'
import { insertionSort, mergeSort, quickSort, selectSort, shellSort } from './sort'
import config from '../../../../config'

import style from './index.css'

@connect(state => state.allReducer, {...ArticleListActions})
export default class GeneralCatalogue extends Component {
  constructor (props) {
    super(props)

    this.sortHandle = this.sortHandle.bind(this)
  }

  static defaultProps = {
    data: [{
      title: '',
      pubtime: '',
      liked_num: 0,
      read_num: 0,
      commentNum: 0,
    }]
  }

  sortHandle (sortFn, property) {

    const iS = curring((arr, property, _sequence) => {

      const data = sortFn(arr, property, _sequence)
      
      this.props.sort_all_list(data)

    })

    return iS(this.props.data, property)

  }

  searchHandle () {



  }

  render () {

    return (
      <div className={style['general-catalogue-page']}>
        <TipsBar/>
        <div className="sildebar-wrap">
          <Sidebar />
        </div>
        <div className="admin-wrap">
          <div className={style['general-catalogue-wrap']}>
            {/* 查找的先不做 */}
            {/*<div className={style['search-wrap']}>*/}
              {/*<input type="text" className={style['input']} placeholder='🔍'/>*/}
            {/*</div>*/}
            <div className={style['table-wrap']}>
              <div className={style['table-hd']}>
                <ul className={style['table-tr']}>
                  <li className={style['table-td']}>
                    标题
                    <SortIcon sort={this.sortHandle(selectSort, ['title'])}/>
                  </li>
                  <li className={style['table-td']}>
                    发表日期
                    <SortIcon sort={this.sortHandle(quickSort, ['pubtime'])}/>
                  </li>
                  <li className={style['table-td']}>
                    点赞数
                    <SortIcon sort={this.sortHandle(shellSort, ['liked_num'])}/>
                  </li>
                  <li className={style['table-td']}>
                    评论数
                    <SortIcon sort={this.sortHandle(mergeSort, ['comment_num'])}/>
                  </li>
                  <li className={style['table-td']}>
                    浏览数
                    <SortIcon sort={this.sortHandle(insertionSort, ['read_num'])}/>
                  </li>
                  <li className={style['table-td']}>
                    综合
                    {/*[ (点赞 * 0.7 + 评论 * 0.3) / 浏览 ]*/}
                  </li>
                </ul>
              </div>
              <div className={style['table-bd']}>
                {
                  this.props.data.map(item => (
                    <ul className={style['table-tr']} key={item.id}>
                      <li className={style['table-td']}>
                        {item.title}
                      </li>
                      <li className={style['table-td']}>
                        {item.pubtime}
                      </li>
                      <li className={style['table-td']}>
                        {item.liked_num}
                      </li>
                      <li className={style['table-td']}>
                        {item.comment_num}
                      </li>
                      <li className={style['table-td']}>
                        {item.read_num}
                      </li>
                      <li className={style['table-td']}>
                        {parseFloat((item.liked_num * 0.7 + item.comment_num * 0.3) / item.read_num).toFixed(3)}
                      </li>
                    </ul>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {

    this.props.get_all_list()

  }
}

if (config.ISDEV) {
  GeneralCatalogue.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        pubtime: PropTypes.string.isRequired,
        liked_num: PropTypes.number.isRequired,
        commentNum: PropTypes.number.isRequired,
        read_num: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired
  }
}

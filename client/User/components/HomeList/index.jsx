import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import config from '../../../../config'
import { escapeStr } from '../../../lib/index'

import style from './index.css'

const getSrc = src => process.env.NODE_ENV === 'development'
  ? config.dev.fileServerIP + escapeStr(src)
  : config.prod.fileServerDomain + escapeStr(src)

class LatestItem extends Component {
  constructor (props) {
    super(props)

  }
  static defaultProps = {
    title: '',
    link: '',
    summary: '',
    pubtime: '',
    tag: '',
    cover: ''
  }

  render () {

    return (
      <li className={style['article-item']}>
        <img src={getSrc(this.props.cover)} alt="" className={`${style['item-cover--LatestList']} fr`}/>
        <a className={style['link']} target="_blank" href={`/article/${escapeStr(this.props.id)}`}>
          <h3 className={style['item-tt']}>{this.props.title}</h3>
        </a>
        <p className={style['item-summary']}>{this.props.summary}</p>
        <p className={style['item-info']}>
          <span className={style['info-pubtime']}>{this.props.pubtime}</span>
          <span className={`${style['info-tag']} fr`}>{this.props.tag}</span>
        </p>
      </li>
    )
  }
}

if (process.env.NODE_ENV === 'development') {
  LatestItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pubtime: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  }
}

class BestItem extends Component {
  constructor (props) {
    super(props)

  }
  static defaultProps = {
    readNum: 0,
    commentsNum: 0,
    likedNum: 0,
    title: '',
    link: '',
    pubtime: '',
    tag: ''
  }

  render () {
    return (
      <li className={style['article-item']}>
        <p className={`${style['item-data']} fr`}>
          浏览数：<span className={style['data-read']}>{this.props.readNum}</span>
          评论数：<span className={style['data-comments']}>{this.props.commentsNum}</span>
          点赞数：<span className={style['data-like']}>{this.props.likedNum}</span>
        </p>
        <Link className={style['link']} to={this.props.link}>
          <h3 className={style['item-tt']}>{this.props.title}</h3>
        </Link>
        <p className={style['item-info']}>
          <span className={style['info-pubtime']}>{this.props.pubtime}</span>
          <span className={`${style['info-tag']} fr`}>{this.props.tag}</span>
        </p>
      </li>
    )
  }
}

if (process.env.NODE_ENV === 'development') {
  BestItem.propTypes = {
    readNum: PropTypes.number.isRequired,
    commentsNum: PropTypes.number.isRequired,
    likedNum: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    pubtime: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
  }
}

class WorksItem extends Component {
  constructor (props) {
    super(props)

  }
  static defaultProps = {
    imgSrc: '',
    imgAlt: '',
    link: '',
    title: '',
    sourceLink: '',
    demoLink: '',
    githubLink: '',
  }

  render () {
    return (
      <li className={style['article-item']}>
        <img src={getSrc(this.props.imgSrc)} alt={this.props.imgAlt} className={style['item-cover--WorksItem']}/>
        <Link className={'link'} to={this.props.link}>
          <h3 className={'item-tt'}>{this.props.title}</h3>
        </Link>
        <p className={'item-info'}>
          <Link to={this.props.sourceLink} className={'link'}>源码解析</Link>
          <Link to={this.props.demoLink} className={'link'}>查看演示</Link>
          <Link to={this.props.githubLink} className={'link'}>github地址</Link>
        </p>
      </li>
    )
  }
}

if (process.env.NODE_ENV === 'development') {
  WorksItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sourceLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
  }
}

export { LatestItem, BestItem, WorksItem }

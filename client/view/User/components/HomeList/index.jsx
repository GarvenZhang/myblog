import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import config from '../../../../../config'
import { escapeStr } from '../../../../lib/index'

import './index.css'

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
    let imgSrc = process.env.NODE_ENV === 'development'
      ? config.dev.imageUploadApi + escapeStr(this.props.cover)
      : config.prod.imageUploadApi + escapeStr(this.props.cover)

    return (
      <li className="article-item">
        <img src={imgSrc} alt="" className="item-cover fr"/>
        <a className="link" target="_blank" href={`/article/${escapeStr(this.props.id)}`}>
          <h3 className="item-tt">{this.props.title}</h3>
        </a>
        <p className="item-summary">{this.props.summary}</p>
        <p className="item-info">
          <span className="info-pubtime">{this.props.pubtime}</span>
          <span className="info-tag fr">{this.props.tag}</span>
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
      <li className="article-item">
        <p className="item-data fr">
          浏览数：<span className="data-read">{this.props.readNum}</span>
          评论数：<span className="data-comments">{this.props.commentsNum}</span>
          点赞数：<span className="data-like">{this.props.likedNum}</span>
        </p>
        <Link className="link" to={this.props.link}>
          <h3 className="item-tt">{this.props.title}</h3>
        </Link>
        <p className="item-info">
          <span className="info-pubtime">{this.props.pubtime}</span>
          <span className="info-tag fr">{this.props.tag}</span>
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
      <li className="article-item">
        <img src={this.props.imgSrc} alt={this.props.imgAlt} className="item-cover"/>
        <Link className="link" to={this.props.link}>
          <h3 className="item-tt">{this.props.title}</h3>
        </Link>
        <p className="item-info">
          <Link to={this.props.sourceLink} className="link">源码解析</Link>
          <Link to={this.props.demoLink} className="link">查看演示</Link>
          <Link to={this.props.githubLink} className="link">github地址</Link>
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

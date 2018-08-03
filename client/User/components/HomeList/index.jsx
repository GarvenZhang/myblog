import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import config from '../../../../config'
import Img from '../Img'

import style from './index.css'

const getSrc = src => config.FILE_SERVER_DOMAIN + src
// === 代理模式: 当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对本体对象的访问，客户实际上访问的是替身对象。替身对象对请求做出一些处理之后，再把请求转交给本体对象。 === //
// === 1 类型: === //
// === 1.1 保护代理 === //
// === 1.2 虚拟代理 === //
// === 1.3 缓存代理 === //
// === 2 注意点: 代理对象和本体对象都对外提供一致的接口，用户并不请求代理和本体的区别，代理接手请求的过程对于用户来说是透明的。 === //

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
    cover_url: ''
  }

  render () {

    return (
      <li className={style['article-item']}>
        <Img src={getSrc(this.props.cover_url)} alt="" className={`${style['item-cover--LatestList']} fr`}/>
        <Link className={style['link']} target="_blank" to={`/article/${this.props.id}`}>
          <h3 className={style['item-tt']}>{this.props.title}</h3>
        </Link>
        <p className={style['item-summary']}>{this.props.summary}</p>
        <p className={`${style['item-info']} clearfix`}>
          <span className={style['info-pubtime']}>{this.props.pubtime}</span>
          <span className={`${style['info-tag']}`}>{this.props.tag}</span>
        </p>
      </li>
    )
  }
}

if (config.ISDEV) {
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
    read_num: 0,
    comment_num: 0,
    liked_num: 0,
    title: '',
    link: '',
    pubtime: '',
    tag: ''
  }

  render () {
    return (
      <li className={style['article-item']}>
        <p className={`${style['item-data']} fr`}>
          浏览数：<span className={style['data-read']}>{this.props.read_num}</span>
          评论数：<span className={style['data-comments']}>{this.props.comment_num}</span>
          点赞数：<span className={style['data-like']}>{this.props.liked_num}</span>
        </p>
        <Link className={style['link']} target="_blank" to={`/article/${this.props.id}`}>
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

if (config.ISDEV) {
  BestItem.propTypes = {
    read_num: PropTypes.number.isRequired,
    comment_num: PropTypes.number.isRequired,
    liked_num: PropTypes.number.isRequired,
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
        <Img src={getSrc(this.props.imgSrc)} alt={this.props.imgAlt} className={style['item-cover--WorksItem']}/>
        <Link className={style['link']} to={this.props.link}>
          <h3 className={style['item-tt']}>{this.props.title}</h3>
        </Link>
        <p className={style['item-info']}>
          <Link to={this.props.sourceLink} className={style['link']}>源码解析</Link>
          <Link to={this.props.demoLink} className={style['link']}>查看演示</Link>
          <Link to={this.props.githubLink} className={style['link']}>github地址</Link>
        </p>
      </li>
    )
  }
}

if (config.ISDEV) {
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

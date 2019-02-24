import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { api } from '../../fetch/axios'
import config from '../../../../config'

import './index.css'

export default class Image extends Component {
  constructor (props) {
    super(props)

    this.state = {
      src: this.props.defaultSrc || ''
    }

  }

  static defaultProps = {
    src: ''
  }

  /**
   * 加载loadingGif
   */
  getLoadingGif () {

    api.getIndexStorage()
      .then(res => {

        for (const key in res.data) {
          localStorage.setItem(key, res.data[key])
        }

        this.setState({
          src: localStorage.getItem('loadingGif')
        })

      })
      .catch(err => {
        console.error(err.message)
      })

  }
  
  // === react中用 new Image() 加载不了图片的bug: === //
  /*
  
    context: undefined,
    onerror: ƒ (e),
    onload: ƒ (),
    props: undefined,
    refs: {},
    src: "https://avatars2.githubusercontent.com/u/20942047?v=4",
    state: {src: ""},
    updater: {isMounted: ƒ, enqueueForceUpdate: ƒ, enqueueReplaceState: ƒ, enqueueSetState: ƒ},
    isMounted: (...),
    replaceState: (...)
  
  */
  // === 1 原因: 可能是因为 react 对于 原生的Image进行了覆盖 === //
  // === 2 解决: 需要手动引用挂载到window上的 Image 或者 document.createElement('img') === //

  /**
   * 预加载
   */
  preload () {

    let img = new window.Image
    img.src = this.props.src

    img.onload = () => {
      this.setState({
        src: img.src
      })
    }
    img.onerror = (e) => {
      console.error(e)
    }
  }

  render () {
    return (
      <img src={this.state.src} className={this.props.className} alt={this.props.alt}/>
    )
  }

  componentDidMount () {

    this.props.src && this.preload()

    // 有特指定默认图片则不用 laoding.gif
    if (this.props.defaultSrc) {
      return
    }
    
    const loadingGif = localStorage.getItem('loadingGif')

    if (loadingGif) {

      this.setState({
        src: loadingGif
      })

    } else {

      this.getLoadingGif()

    }

  }
}

if (config.ISDEV) {
  Image.propTypes = {
    src: PropTypes.string,
    defaultSrc: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
  }
}

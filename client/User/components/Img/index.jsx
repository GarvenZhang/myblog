import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { api } from '../../fetch/axios'
import config from '../../../../config'

import './index.css'

export default class Image extends Component {
  constructor (props) {
    super(props)

    this.state = {
      src: ''
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
        console.log(err)
      })

  }

  /**
   * 预加载
   */
  preload () {

    let img = new Image()
    img.src = this.props.src
    img.onload = () => {
      this.setState({
        src: this.props.src
      })
    }

  }

  render () {
    return (
      <img src={this.state.src} className={this.props.className}/>
    )
  }

  componentDidMount () {

    this.preload()

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
    src: PropTypes.string.isRequired,
  }
}

import React, { Component } from 'react'

import './index.css'

const loadingGif = 'data:image/gif;base64,R0lGODlhGAAYAKIAAP///8z/zAAAAOjo6AAzAACZMwAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAGAAYAAADQgi63P4wykmrvTjrzbufQyiKjmCe56iWKPpFQcAQxBXLRQHQNXUrOQVv8gPqhDRYjBFcDB9L5tHZqzQ5101Ws3UkAAAh+QQJCgAAACwAAAAAGAAYAAADRQi63P4wykmrjUJcl/Ve3QdmohKWAImuDeG+7wXPrDQMTFFcNx4EAN2O0lP8FMJJ0QhE6iJLZu75uDWO0wsWtS11RV9HAgAh+QQJCgAAACwAAAAAGAAYAAADRwi6DCItSvambfXqrC1XBNEtXyiODgSGqJKZrQvBMcPWuFbsPN/2wFwuEMgNBgBisXZUKJlIJzHWXDxRVetylDVGhV1cOJIAACH5BAkKAAAALAAAAAAYABgAAANICLoMRC1K9qZt9eqslRAYxBTF9IELB5Cl+aXiSmqnkrEdUFd4rqOKmW9IBASOSOQwySw6F4PBExqdKqJSK9YK2Gqz3LB4zEgAACH5BAkKAAAALAAAAAAYABgAAANDCLoMVS1K9qZt9eqsFSEYxATB9IELB5Cl+aXiSmqnkrEdUFd4rqOKmW+oEBiPx8hgyWQin8pmk0itWq/YrHbL7XojCQAh+QQJCgAAACwAAAAAGAAYAAADRwi6DBEtSvambfXqrFUpGMQMw/SBCweQpfml4kpqp5KxHVBXeK6jiplvqCAYj8chckls+gQC5wIalVKlgKsVis1Wu+CwGJwAACH5BAkKAAAALAAAAAAYABgAAANICLoMMy1K9qZt9eqsVQgY1HkfJY7AByocqrInmpatXMp4VOw8L/fAnLBDIAwVRaNAkEsqljjnk4mSTmXFBvQI2B69Q7BQHEkAACH5BAUKAAAALAAAAAAYABgAAANECLrc/jDKSWscw0KctePeh4UNSC7jSQZs22purM5OUTCCoNk3QQA5HYWn8CmCE2Lxd8xFlEuc82FrGKWaq0p74pK8jgQAOw=='



class Image extends Component {
  constructor (props) {
    super(props)

    this.state = {
      src: loadingGif
    }

  }

  static defaultProps = {
    src: ''
  }

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
      <img src={this.state.src} />
    )
  }

  componentDidMount () {
    this.preload()
  }
}

if (process.env.NODE_ENV === 'development') {
  Image.propTypes = {
    src: PropTypes.string.isRequired,
  }
}

export default Image

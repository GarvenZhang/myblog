import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './index.css'

class Popup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      dragging: false,
      diffX: 0,
      diffY: 0,
      left: '50%',
      top: '50%'
    }

    this.mousedownHandle = this.mousedownHandle.bind(this)
    this.mousemoveHandle = this.mousemoveHandle.bind(this)
    this.mouseupHandle = this.mouseupHandle.bind(this)
    this.closeHandle = this.closeHandle.bind(this)
    this.openHandle = this.openHandle.bind(this)

  }

  static defaultProps = {
    config: {
      isOpen: false,
      header: '',
      content: '',
      question: '',
      yesText: '',
      noText: ''
    }
  }


  componentWillMount () {

    this.defaultWrapStyle = {
      left: this.state.left,
      top: this.state.top
    }

  }

  drawBg () {

    let $canvas = this.$canvas
    const canvasWidth = $canvas.width
    const canvasHeight = $canvas.height

    if ($canvas.getContext) {

      let ctx = $canvas.getContext('2d')

      ctx.fillStyle = 'rgba(0,0,0,.6)'

      // border
      ctx.beginPath()

      ctx.strokeStyle = 'rgb(44,170,42)'
      ctx.lineWidth = 2
      ctx.lineCap = 'square'

      ctx.moveTo(10, 1)
      ctx.lineTo(canvasWidth - 10, 1)
      ctx.lineTo(canvasWidth - 1, 10)
      ctx.lineTo(canvasWidth - 1, canvasHeight)
      ctx.lineTo(1, canvasHeight)
      ctx.lineTo(1, 10)
      ctx.closePath()
      ctx.stroke()

      // canvasModal's navBox
      ctx.beginPath()

      ctx.lineCap = 'square'

      ctx.moveTo(10, 5)
      ctx.lineTo(canvasWidth - 10, 5)
      ctx.lineTo(canvasWidth - 5, 10)
      ctx.lineTo(canvasWidth - 5, 30)
      ctx.lineTo(5, 30)
      ctx.lineTo(5, 10)
      ctx.lineTo(10, 5)

      ctx.moveTo(canvasWidth - 33, 5)
      ctx.lineTo(canvasWidth - 33, 30)

      ctx.closePath()
      ctx.fillStyle = '#004100'
      ctx.fill()
      ctx.stroke()

    }

  }

  /**
   * 主体内容接口
   */
  createBody () {}

  /**
   * 打开弹窗
   * @public
   */
  openHandle () {

    this.setState({
      isOpen: true
    })

  }

  mousedownHandle (e) {

    if (e.target.classList.contains('drag-area')) {

      this.setState({
        dragging: true,
        diffX: e.clientX - this.$wrap.offsetLeft,
        diffY: e.clientY - this.$wrap.offsetTop
      })

    }

  }

  mousemoveHandle (e) {

    if (this.state.dragging) {
      this.setState({
        left: `${e.clientX - this.state.diffX}px`,
        top: `${e.clientY - this.state.diffY}px`
      })
    }

  }

  mouseupHandle () {

    this.setState({
      dragging: false
    })

  }

  /**
   * 关闭弹窗
   */
  closeHandle () {

    this.setState({
      isOpen: false
    })

  }


  render () {

    return (
      <div
        ref={$wrap => this.$wrap = $wrap}
        className={`${style['popup-wrap']} ${style[this.state.isOpen ? 'popup-open' : 'popup-close']}`}
        style={this.defaultWrapStyle}
      >
        <div className={style['popup-bg']}>
          <a href="javascript:;" className={style['btn-close']} onClick={this.closeHandle}>X</a>
          <div className={style['drag-area']}>{this.props.config.header}</div>
          <canvas ref={$canvas => this.$canvas = $canvas} className={style['canvas']} width='500' height='160'></canvas>
        </div>
        <div className={style['popup-body']}>
          {this.props.config.content}
        </div>
      </div>
    )
  }

  componentDidMount () {

    this.drawBg()

    document.addEventListener('mousedown', this.mousedownHandle, false)
    document.addEventListener('mousemove', this.mousemoveHandle, false)
    document.addEventListener('mouseup', this.mouseupHandle, false)

    setTimeout(() => {
      this.openHandle()
    }, 1000)
  }

  shouldComponentUpdate (nextProps, nextState) {

    return true

  }

  componentWillUnmount () {

    document.removeEventListener('mousedown', this.mousedownHandle, false)
    document.removeEventListener('mousemove', this.mousemoveHandle, false)
    document.removeEventListener('mouseup', this.mouseupHandle, false)

  }

}

if (process.env.NODE_ENV === 'development') {
  Popup.propTypes = {
    config: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      header: PropTypes.string.isRequired,
      content: PropTypes.string,
      question: PropTypes.string,
      yesText: PropTypes.string,
      noText: PropTypes.string
    }).isRequired
  }
}



export default Popup

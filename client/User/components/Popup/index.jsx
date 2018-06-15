import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { actions } from '../../redux/reducers/Popup'

import style from './index.css'

const { update_popup } = actions

class Popup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dragging: false,
      diffX: 0,
      diffY: 0,
      left: '50%',
      top: '50%',
    }

    this.mousedownHandle = this.mousedownHandle.bind(this)
    this.mousemoveHandle = this.mousemoveHandle.bind(this)
    this.mouseupHandle = this.mouseupHandle.bind(this)
    this.closeHandle = this.closeHandle.bind(this)

  }

  static defaultProps = {
    isOpen: 0,
    header: '',
    content: '',
    question: '',
    yesText: '',
    noText: ''
  }


  componentWillMount () {

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
   * 按下鼠标时记录鼠标位置与左上角的差值
   */
  mousedownHandle (e) {

    if (e.target.className.indexOf('drag-area') > -1) {

      this.setState({
        dragging: true,
        diffX: e.clientX - this.$wrap.offsetLeft,
        diffY: e.clientY - this.$wrap.offsetTop
      })

    }

  }

  /**
   * 移动时需要减去按下时的差值
   */
  mousemoveHandle (e) {

    if (this.state.dragging) {

      this.setState({
        // 当移动时，不再需要margin的居中，则需要补回这段距离
        left: `${e.clientX - this.state.diffX + 250}px`,
        top: `${e.clientY - this.state.diffY + 80}px`
      })
    }

  }

  /**
   * 释放鼠标时需要改变状态
   */
  mouseupHandle () {

    this.setState({
      dragging: false
    })

  }

  /**
   * 关闭弹窗
   */
  closeHandle () {

    this.props.update_popup({
      isOpen: -1,
    })

  }

  render () {

    const wrapStyle = {
      left: this.state.left,
      top: this.state.top,
      margin: '-80px 0 0 -250px',
    }

    return (
      <div
        ref={$wrap => this.$wrap = $wrap}
        className={`${style['popup-wrap']} ${this.props.isOpen === 'default' ? '' : style[this.props.isOpen === 1 ? 'popup-open' : 'popup-close']}`}
        style={wrapStyle}
      >
        <div className={style['popup-bg']}>
          <a href="javascript:;" className={style['btn-close']} onClick={this.closeHandle}>X</a>
          <div className={style['drag-area']}>{this.props.header}</div>
          <canvas ref={$canvas => this.$canvas = $canvas} className={style['canvas']} width='500' height='160'></canvas>
        </div>
        <div className={style['popup-body']}>
          {this.props.content}
        </div>
      </div>
    )
  }

  componentDidMount () {

    this.drawBg()

    document.addEventListener('mousedown', this.mousedownHandle, false)
    document.addEventListener('mousemove', this.mousemoveHandle, false)
    document.addEventListener('mouseup', this.mouseupHandle, false)

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
    isOpen: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    content: PropTypes.string,
    question: PropTypes.string,
    yesText: PropTypes.string,
    noText: PropTypes.string
  }
}

function mapStateToProps (state) {
  return state.popupReducer
}

function mapDispatchToProps (dispatch) {
  return {
    update_popup: bindActionCreators(update_popup, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { actions as PopupActions } from '../../redux/Popup'
import config from '../../../../config'

import style from './index.css'

// === immutablejs:  === //
// === 1 优点: === //
// === 1.1 减少内存使用 === //
// === 1.2 并发安全 === //
// === 1.3 降低项目复杂度 === //
// === 1.4 便于比较复杂的数据结构, 定制 shouldComponentUpdate 方便 === //
// === 1.5 时间旅行功能 === //
// === 1.6 函数式编程 === //
// === 2 缺点: === //
// === 2.1 库的大小 === //
// === 2.2 对先有项目入侵太严重, 新项目可用 === //

@connect(
  state => state.PopupReducer,
  {...PopupActions}
)
export default class Popup extends PureComponent {
  constructor (props) {
    super(props)

    this.mousedownHandle = ::this.mousedownHandle
    this.mousemoveHandle = ::this.mousemoveHandle
    this.mouseupHandle = ::this.mouseupHandle
    this.closeHandle = ::this.closeHandle

  }

  static defaultProps = {
    isOpen: 'default',
    header: '',
    content: '',
    question: '',
    yesText: '',
    noText: '',
    dragging: false,
    diffX: 0,
    diffY: 0,
    left: '50%',
    top: '50%',
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

    if (typeof e.target.className === 'string' && e.target.className.indexOf('drag-area') > -1) {
      this.props.update_popup({
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

    if (this.props.dragging) {
      this.props.update_popup({
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

    this.props.update_popup({
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
      left: this.props.left,
      top: this.props.top,
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

  componentWillUnmount () {

    this.props.update_popup({
      isOpen: 'default'
    })

    document.removeEventListener('mousedown', this.mousedownHandle, false)
    document.removeEventListener('mousemove', this.mousemoveHandle, false)
    document.removeEventListener('mouseup', this.mouseupHandle, false)

  }

}

if (config.ISDEV) {
  Popup.propTypes = {
    isOpen: PropTypes.number,
    header: PropTypes.string.isRequired,
    content: PropTypes.string,
    question: PropTypes.string,
    yesText: PropTypes.string,
    noText: PropTypes.string
  }
}

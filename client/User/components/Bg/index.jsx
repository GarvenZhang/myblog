import React, { Component } from 'react'

import drawFibonacci from './fibonacci'
import drawBst from './bst'

import style from './index.css'

class Bg extends Component {
  constructor (props) {
    super(props)

    this.ctx = null
  }

  sizeHandle () {
    this.$canvas.width = document.body.clientWidth
    this.$canvas.height = document.body.clientHeight

    this.ctx.save()

    this.ctx.translate(0, 0)
    drawBst(this.ctx)

    this.ctx.restore()

    this.ctx.translate(500, 200)
    drawFibonacci.call(this, 15)
  }

  render () {
    return (
      <div className={style['bg-wrap']}>
        <canvas ref={$canvas => this.$canvas = $canvas} />
      </div>
    )
  }

  componentDidMount () {
    this.ctx = this.$canvas.getContext('2d')

    if (this.ctx) {
      this.sizeHandle()

      window.addEventListener('size', this.sizeHandle.bind(this), false)
    }
  }
}

export default Bg

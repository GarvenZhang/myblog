import fibonacci from '../../../../lib/fibonacci'

export default function (n) {
  let ctx = this.ctx

  // ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height)

  for (let i = 1; i < n; ++i) {
    let len = fibonacci.recurse(i)

    // ctx.strokeRect(0, 0, len, len)

    ctx.strokeStyle = 'rgba(0, 249, 0, .2)'
    ctx.beginPath()
    ctx.arc(len, 0, len, Math.PI / 2, Math.PI)
    ctx.stroke()

    ctx.translate(len, len)
    ctx.rotate(3 * Math.PI / 2)
  }
}

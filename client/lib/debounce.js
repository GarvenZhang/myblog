/**
 * 防抖
 * // === 特点：频繁地调用中只允许一次成功地调用 === //
 * // === 1.立即执行：以点击按钮为例，连续点击10次，结果是立即执行第一次点击的效果，之后的都无效 === //
 * // === 2.非立即执行：以点击按钮为例，连续点击10次，结果是前九次都无效，直到第十次点击后wait秒，才生效 === //
 * @param {Function} fn - 函数
 * @param {Number} wait - 毫秒数
 * @return {Function}
 */
export default function debounce (fn, wait, immediate) {
  let timer

  return function () {
    let args = arguments
    let self = this

    timer && clearTimeout(timer)

    if (immediate) {
      timer = setTimeout(function () {
        timer = null
      }, wait)

      !timer && fn.apply(self, args)
    } else {
      timer = setTimeout(function () {
        fn.apply(self, args)
      }, wait)
    }
  }
}

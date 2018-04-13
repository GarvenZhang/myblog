/**
 * 防抖
 * @param {Function} fn - 函数
 * @param {Number} wait - 毫秒数
 * @return {Function}
 */
export function debounce (fn, wait) {
  let timeout
  return function () {
    let ctx = this
    let args = arguments

    clearTimeout(timeout)

    timeout = setTimeout(function () {
      timeout = null
      fn.apply(ctx, args)
    }, wait)

    if (!timeout) {
      fn.apply(ctx, args)
    }
  }
}

/**
 * 获取url中的参数
 * @param {String} url - 路径
 * @return {Object}
 */
export function getUrlParams (url) {
  let ret = {}
  // 获得分组
  const reg = /\?(.+?)(?:#|$)/
  const queryStr = reg.exec(url)[1]
  let arr = queryStr.split('&')
  arr.forEach(item => {
    let key = item.split('=')[0]
    let val = item.split('=')[1]
    // 放进对象
    ret[key] = val
  })
  return ret
}

/**
 * 转义危险html字符
 * @param {String} str - html字符
 * @return {String}
 */
export function escapeStr (str) {
  str = str + ''
  if (!str) {
    return ''
  }
  return str
    // html
    .replace(/&/g, '&amp;') // 只能放最前面
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // html property
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

/**
 * xssFilter
 */
export function xssFilter (str) {

}

/**
 * 获取url中的参数
 * @param {String} url - 路径
 * @return {Object}
 */
export function getUrlParams (url) {
  let ret = {}
  // 无参数
  if (url.indexOf('?') === -1 || url.indexOf('?') === url.length - 1) {
    return ret
  }
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

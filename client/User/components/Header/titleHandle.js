/**
 * 处理title
 * @return {String}
 */
export default function () {

  // server端
  if (typeof window === 'undefined') {
    return ''
  }

  // 没有则不处理
  const search = window.location.search
  if (search === '') {
    return ''
  }

  // 从url中获取title
  const querys = decodeURIComponent(search.slice(1))

  let paramsObj = {}

  querys.split('&').forEach(item => {
    const key = item.split('=')[0]
    const val = item.split('=')[1]
    paramsObj[key] = val
  })

  return paramsObj.title || paramsObj.tag
}
/**
 * 获取cookie
 * // === 思路: 从字符串中获取特定字符   === //
 * // === 1 用例: "supportWebp=true; csrf_token=1530792624239" === //
 * // === 2 获取如 csrf_token= 后面的位置, 截取到 ; 或者 结尾 === //
 * @param {String} name - cookie名称
 * @return {String}
 */
export function get (name) {

  const cookie = document.cookie
  const cName = encodeURIComponent(name) + '='
  const cStart = cookie.indexOf(cName)
  let cVal = ''

  if (cStart > -1) {

    let cEnd = cookie.indexOf(';', cStart)
    if (cEnd === -1) {
      cEnd = cookie.length
    }

    cVal = decodeURIComponent(cookie.substring(cStart + cName.length, cEnd))
  }

  return cVal
}

/**
 * 设置cookie
 * @param {String} name - cookie名称
 * @param {String} value - 值
 * @param {[Object]} options - 选项
 */
export function set (name, value, options) {

  if (typeof options !== 'object') {
    throw new Error('options must be a object')
  }

  let cookie = `${name}=${value};`

  if (options.expires) {
    cookie += `; expires=${options.expires.toUTCString()}`
  }
  if (options.maxAge) {
    cookie += `; max-age=${options.maxAge}`
  }
  if (options.domain) {
    cookie += `; domain=${options.domain}`
  }
  if (options.path) {
    cookie += `; path=${options.path}`
  }
  if (options.httpOnly) {
    cookie += `; httponly`
  }
  if (options.sameSite) {
    cookie += `; samesite`
  }
  if (options.secure) {
    cookie += `; secure`
  }

  document.cookie = cookie
}

/**
 * 删除cookie
 * @param {String} name - cookie名称
 * @param {String} value - 值
 * @param {[Object]} options - 选项
 */
export function unset (name, options = {expires: new Date(0)}) {
  set(name, '', options)
}

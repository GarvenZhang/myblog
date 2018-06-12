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

/**
 * 参数传递：形参是实参在栈内存的副本，改变形参则为按值传递，改变形参的属性则为引用传递(若是对象)
 */

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

/* https://github.com/madmurphy/cookies.js (GPL3) */
export const Cookies = {get: function (e) { return e ? decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(e).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null : null }, set: function (e, o, n, t, r, c) { if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1; var s = ''; if (n) switch (n.constructor) { case Number:s = n === 1 / 0 ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + n; break; case String:s = '; expires=' + n; break; case Date:s = '; expires=' + n.toUTCString() } return document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(o) + s + (r ? '; domain=' + r : '') + (t ? '; path=' + t : '') + (c ? '; secure' : ''), !0 }, removeItem: function (e, o, n) { return this.hasItem(e) ? (document.cookie = encodeURIComponent(e) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (n ? '; domain=' + n : '') + (o ? '; path=' + o : ''), !0) : !1 }, hasItem: function (e) { return !e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e) ? !1 : new RegExp('(?:^|;\\s*)' + encodeURIComponent(e).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(document.cookie) }, keys: function () { for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/), o = e.length, n = 0; o > n; n++)e[n] = decodeURIComponent(e[n]); return e }}

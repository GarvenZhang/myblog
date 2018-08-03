/**
 * 获取cookie
 * // === 思路: 从字符串中获取特定字符   === //
 * // === 1 用例: "supportWebp=true; csrf_token=1530792624239" === //
 * // === 2 获取如 csrf_token= 后面的位置, 截取到 ; 或者 结尾 === //
 * @param {String} name - cookie名称
 * @return {String}
 */
function get (name) {

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
function set (name, value, options) {

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

// === es6 - 函数 - 与解构赋值默认值结合使用: 左边是解构赋值, 右边是默认值, 不传值会选取右边的默认值, 若此时有解构赋值会再去解构赋值; 若传值会直接取解构赋值 === //
/*

// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1() // [0, 0]  // 先选取右边的默认值 {} , 默认值是个对象, 则再选取左边的解构赋值
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

*/

/**
 * 删除cookie
 * // === 删除cookie: 不同的域、不同的路径下可以存在同样名字的cookie, 因此一定要相同才能删除 === //
 * @param {String} name - cookie名称
 * @param {String} value - 值
 * @param {[Object]} options - 选项
 */
function unset (name, options) {
  set(name, '', Object.assign({}, options, {expires: new Date(0), path: '/'}))
}

export default {
  get,
  set,
  unset
}

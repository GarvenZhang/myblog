// === 解析url为json: === //

// === 1 借助a标签自身的特性: 创建a标签后, 赋予href值, 则其js属性中会有相关的url组成成分, 再放到一个对象中 === //

export function getQueryObj (search) {

  // 去掉问号
  search = search.substr(1)

  // 格式化
  search = search.split('&')
  const obj = {}

  search.forEach(item => {

    let keyValue = item.split('=')
    let key = keyValue[0]
    let value = keyValue[1]

    obj[key] = value
  })

  return obj

}

export function getHashArr (hash) {

  // 去掉问号
  hash = hash.substr(1)
  return hash.split('#')

}

export function byATag (url) {

  const $a = document.createElement('a')
  $a.href = url

  return {
    href: url,
    protocol: $a.protocol.replace(':', ''),
    username: $a.username,
    password: $a.password,
    hostname: $a.hostname,
    port: $a.port,
    host: $a.hostname + ':' + $a.port,
    pathname: $a.pathname,
    query: getQueryObj($a.search),
    path: $a.pathname + $a.search,
    hash: getHashArr($a.hash)
  }

}

// === 2 纯字符串解析: 记住URL格式, 分为5大部分: protocol, authority, pathname, query, hash；然后一部分一部分地检测, 没检测到一部分, 提取里面的字符, 然后重写url为剩余的部分, 主要是运用正则, indexOf, split, substr === //
// === URL: scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment] === //
// === 2.1 例子: https://garven:12345@www.hellojm.cn:80/api?name=garven&age=10#p1#999 === //
export function parseQueryString (url) {

  let ret = {}

  // protocol
  if (/^(\w+?):/.test(url)) {
    const protocol = RegExp.$1
    ret.protocol = protocol
    url = url.substr(protocol.length +1)
  }

  // authority
  if (/^\/\/(.+?)(?:\/|\?|#|$)/.test(url)) {

    let authority = RegExp.$1
    let usernamePassword = ''
    let host = ''

    if (authority.indexOf('@') > -1) {

      usernamePassword = authority.split('@')[0]
      host = authority.split('@')[1]

      // username:password
      ret.username = usernamePassword.split(':')[0]
      ret.password = usernamePassword.split(':')[1]

      // hostname:port
      ret.hostname = host.split(':')[0]
      ret.port = host.split(':')[1]

    } else {

      // hostname:port
      ret.hostname = authority.split(':')[0]
      ret.port = authority.split(':')[1]

    }

    url = url.substr(authority.length + 2)
  }

  // pathname
  if (/^(\/.+?)(?:\?|#|$)/.test(url)) {

    let pathname = RegExp.$1
    ret.pathname = pathname
    url = url.substr(pathname.length)

  }

  // query
  if (/^(\?.+?)(?:#|$)/.test(url)) {

    let search = RegExp.$1
    ret.query = getQueryObj(search)
    url = url.substr(search.length)

  }

  // hash
  if (/^(#.+?)$/.test(url)) {


    let hash = RegExp.$1
    ret.hash = getHashArr(hash)
    url = ''
  }

  return ret

}

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
 * 获取url中的host
 * @param {String} url - 路径
 * @return {String|Boolean}
 */
export function getUrlOrigin (url) {

  if (/(https?:\/\/[^/]+?\.\w+?)(?:\/|\?|#|$)/.test(url)) {
    return RegExp.$1
  }
  return false

}

// === cookie: 因为http请求无状态，所以需要cookie去维护客户端状态 === //
// === 1 生成方式:  === //
// === 1.1 服务器: http response header 中的 set-cookie === //
// === 1.2 客户端: document.cookie === //
// === 2 使用场景: 用户浏览器与服务器的交互(用户个性化设置，用户识别标致等) === //
// === 3 存储限制: === //
// === 3.1 大小4KB左右 === //
// === 3.2 需设置过期时间expires、max-age === //
// === 3.3 只能读写更高的域: === //
// === 3.3.a 若二级域名间想共享cookie, 则需要把cookie的domain设置为顶级的 === //
// === 3.3.b cdn的域名和主域应分开，以减少流量损耗，因为静态资源一般不需要cookie === //
// === 3.4 安全： === //
// === 3.4.1 httpOnly不允许浏览器脚本读写； === //
// === 3.4.2 secure只允许在https协议下传输cookie === //
// === 3.4.3 samesite=strict不允许跨域传输cookie === //

/**
 * cookie
 */
export default {
  get: function (name) {

  },
  set: function (name, value, options) {
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
  },
  unset: function (name, value, options) {
    this.set(name, value)
  }
}

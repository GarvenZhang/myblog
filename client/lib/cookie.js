
/**
 * cookie
 */
export const Cookies = {
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

import type from '../../lib/type'

// === ajax === //

export function ajax ({method = 'get', async = true, data = null, url, headers = {} }) {
  return new Promise(function (resolve, reject) {
    // === readyState: 0 === //
    // === Client has been created. open() not called yet. === //
    let xhr = new XMLHttpRequest()

    // === readyState: 3 === //
    // === Downloading; responseText holds partial data. === //
    xhr.onreadystatechange = function () {
      // === readyState: 4 === //
      // === The operation is complete. === //
      if (this.readyState === 4) {
        if ((this.status >= 200 && this.status < 300) || this.status === 304) {
          try {
            resolve(JSON.parse(this.responseText))
          } catch (e) {
            resolve(this.responseText)
          }
        } else if (this.status >= 400) {
          reject(JSON.parse(this.responseText))
        }
      }
    }

    // === readyState: 1 === //
    // === open() has been called. === //
    xhr.open(method, url, async)

    for (var key in headers) {
      xhr.setRequestHeader(key, headers[key])
    }

    // === readyState: 2 === //
    // === send() has been called, and headers and status are available. === //
    if (type.isObject(data)) {
      xhr.send(JSON.stringify(data))
      return
    }

    xhr.send(data)
  })
}

export function Fetch ({method = 'get', data = null, url, headers = {}}) {
  let _headers = new Headers()
  for (var key in headers) {
    _headers.append(key, _headers[key])
  }

  const request = new Request(url, {
    method,
    headers: _headers,
    body: type.isObject(data) ? JSON.stringify(data) : data
  })

  return fetch(request)
}

export default function httpRequest (param) {
  return typeof fetch === 'function' ? Fetch(param) : ajax(param)
}

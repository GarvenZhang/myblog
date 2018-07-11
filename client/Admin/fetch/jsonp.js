let jsonp = {}

let cache = {}

jsonp.get = function (url, key) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.onload = function () {
      resolve()
    }
    script.src = url
    document.body.appendChild(script)
    cache[key] = script
  })
}

jsonp.delete = function (key) {
  document.body.removeChild(cache[key])
  delete cache[key]
}

export default jsonp

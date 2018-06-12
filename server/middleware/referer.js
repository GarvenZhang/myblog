module.exports = function (url) {
  url = url.replace(/\//g, '\\\/')

  const origin = process.env.NODE_ENV === 'production' ? '(?:www|)\\\.hellojm\\\.cn:8080' : 'localhost:8080'

  let reg = new RegExp(`^https?:\\\/\\\/${origin}${url}`)

  return reg
}

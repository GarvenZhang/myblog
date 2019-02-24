let cache = {}

function get (key) {
  return cache[key]
}

function add (key, val) {
  cache[key] = val
}

function update (key, val) {
  cache[key] = val
}

function del (key) {
  delete cache[key]
}

exports.get = get
exports.add = add
exports.update = update
exports.delete = del

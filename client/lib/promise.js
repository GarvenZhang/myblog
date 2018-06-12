/**
 * Promise实现
 */

function _Promise (func) {
  let self = this
  let resolve = function (val) {
    self.resolve(val)
  }
  let reject = function (val) {
    self.reject(val)
  }

  self.state = 'pending'
  self.rsq = []
  self.rjq = []
  self.isMultiple = false
  self.times = 1;

  (typeof func === 'function') && func(resolve, reject)
}

let fn = _Promise.prototype

fn.then = function (resolve, reject) {
  if (!this.isMultiple) {
    // 避免push undfined
    resolve && this.rsq.push(resolve)
    reject && this.rjq.push(reject)
    return this
  }

  while (this.times--) {
    // 避免push undfined
    resolve && this.rsq.push(resolve)
    reject && this.rjq.push(reject)
  }

  return this
}

fn.catch = function (reject) {
  return this.then(null, reject)
}

fn.resolve = function (val) {
  if (this.state === 'resolved' || this.state === 'pending') {
    this.state = 'resolved'
    this.doQ(val)
  }
}

fn.reject = function (val) {
  if (this.state === 'rejected' || this.state === 'pending') {
    this.state = 'rejected'
    this.doQ(val)
  }
}

fn.doQ = function (val) {
  if (!this.rsq.length && !this.rjq.length) {
    return
  }

  let resolve = this.rsq.shift()
  let reject = this.rjq.shift()
  let ret

  if (this.state === 'resolved' && typeof resolve === 'function') {
    ret = resolve(val)
  }

  if (this.state === 'rejected' && typeof reject === 'function') {
    ret = reject(val)
  }

  if (!(ret instanceof _Promise)) {
    let _ret = ret
    ret = new _Promise(resolve => {
      setTimeout(() => {
        resolve(_ret)
      })
    })
  }

  if (!this.isMultiple) {
    ret.rsq = this.rsq.splice(0)
    ret.rjq = this.rjq.splice(0)
  }
}

_Promise.all = function (arr) {
  let pms = new _Promise()
  let len = arr.length
  let i = 0
  let res = 0

  while (i < len) {
    if (!(arr[i] instanceof _Promise)) {
      ++i
      continue
    }

    arr[i].then(function (data) {
      pms.resolve(data)
    }, function (err) {
      pms.reject(err)
    })

    ++i
    ++res
  }

  pms.times = res
  pms.isMultiple = true

  return pms
}

_Promise.resolve = function (obj) {
  let pms = new _Promise()

  if (obj && typeof obj.then === 'function') {
    for (var i in pms) {
      obj[i] = pms[i]
    }

    return obj
  } else {
    setTimeout(function () {
      pms.resolve(obj)
    })

    return pms
  }
}

_Promise.reject = function (obj) {
  let pms = new _Promise()

  if (obj && typeof obj.then === 'function') {
    for (var i in pms) {
      obj[i] = pms[i]
    }

    return obj
  } else {
    setTimeout(function () {
      pms.reject(obj)
    })

    return pms
  }
}

export default _Promise

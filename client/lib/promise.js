// === 状态模式: 一个对象有状态变化, 每次状态变化都会触发一个逻辑, 不能总用 if..else 管理 === //
// === 1 有限状态机: === //
// === 2 Promise模拟: Promise 就是一个有限状态机 === //
// === 2.1 3中状态: pending / fullfilled / rejected, 只能 pending -> fullfilled 或 pending -> rejected === //

/**
 * 伪Promise
 * @constructor
 * @param {Function} func - 函数
 */
function _Promise (func) {

  let self = this

  // 异步操作 成功 时调用的改变Promise实例状态的方法
  const resolve = function (val) {
    self.resolve(val)
  }

  // 异步操作 失败 时调用的改变Promise实例状态的方法
  const reject = function (val) {
    self.reject(val)
  }

  // 存放当前实例的状态
  self.state = 'pending'

  // 存放异步操作成功的回调
  self.rsq = []
  // 存放异步操作失败的队列
  self.rjq = []

  self.isMultiple = false
  self.times = 1;

  // 调用传给Promise的函数
  // 在func内部一旦 resolve 被调用, 就会调用 self.resolve(val), reject同理
  (typeof func === 'function') && func(resolve, reject)
}

let fn = _Promise.prototype

/**
 * 当调用then时, 传给then的 resolve函数 会放进 rsq队列 中, reject函数 会被放进 rjq队列 中
 */
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

/**
 * 在传给Promise中的函数内部的 resolve() 被调用时, 此函数则会被执行
 * 将状态变成 resolved
 * 并执行 rsq队列 中的函数
 */
fn.resolve = function (val) {
  if (this.state === 'resolved' || this.state === 'pending') {
    this.state = 'resolved'
    this.doQ(val)
  }
}

/**
 * 在传给Promise中的函数内部的 reject() 被调用时, 此函数则会被执行
 * 将状态变成 rejected
 * 并执行 rjq队列 中的函数
 */
fn.reject = function (val) {
  if (this.state === 'rejected' || this.state === 'pending') {
    this.state = 'rejected'
    this.doQ(val)
  }
}

/**
 * 出队并将val传给 传给then 的函数 并执行
 */
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

/**
 * resolve函数
 * @static
 */
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

/**
 * reject函数
 * @static
 */
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

// === 迭代器模式: 提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示 === //
// === 0 可迭代对象: 只要被迭代的聚合对象拥有length属性而且可以用下标访问，那它就可以被迭代 === //
// === 1 内部迭代器: 内部迭代器在调用的时候非常方便，外界不用关心迭代器的内部实现，跟迭代器的交互也仅仅是一次初始调用 === //
// === 1.1 缺点: 迭代规则已经被提前规定，不灵活 === //
// === 2 外部迭代器: 增加了一些调用的复杂度，但相对也增强了迭代器的灵活性，我们可以手工控制迭代的过程或者顺序 === //
// === 3 倒序迭代器: === //
// === 4 中止迭代器: 如果回调函数的执行结果返回false则提前终止循环 === //

/**
 * 内部迭代器
 */
export const inner = Array.prototype.forEach

/**
 * 外部迭代器
 */
export const outer = function (obj) {

  let cur = 0

  const next = () => cur += 1
  const isDone = () => cur >= obj.length
  const getCurItem = () => obj[cur]

  return {
    next,
    isDone,
    getCurItem
  }

}

/**
 * 倒序迭代
 * @param {Array} arr - 数组
 * @param {Function} cb - 回调
 */
export const reverse = function (arr, cb) {

  for (let l = arr.length; l--; ) {
    cb(arr[l], l, arr)
  }

}

/**
 * 中止迭代
 * @param {Array} arr - 数组
 * @param {Function} cb - 回调
 */
export const stop = function (arr, cb) {

  for (let l = arr.length; l--; ) {
    if (cb(arr[l], l, arr) === false) {
      break
    }
  }

}
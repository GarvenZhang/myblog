// === 调用栈：函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。 === //
// === 调用栈：如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack） === //
// === 尾调用：函数的最后一步是调用另一个函数作为返回值 === //
// === 尾调用优化(TCO): 只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。 === //
// === TCO条件：不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧 === //
// === 递归：函数调用自身 === //
// === 尾递归：尾调用自身, 本质：将方法需要的上下文通过方法的参数传递进下一次调用之中，以达到去除上层依赖 === //
// === 递归导致的内存溢出：递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误 === //
// === 开启尾递归优化: === //
// === 1.es6开启严格模式(因为引用了追踪函数调用栈的fn.arguments和fn.caller) === //
// === 2.正常模式: 减少调用栈, 用循环代替递归 === //
// === 兼容性：除SF, 其它都还没有实现，根本原因是优化是 1.隐式的开发者难辨别; 2.会导致执行流中堆栈信息丢失，不利于错误收集与调试 === //

'use strict'

let fibonacci = {}

/**
 * 尾递归优化
 * // === 思路： === //
 * // === 用单例模式将递归进行处理，每次递归实质上是：将参数用存储起来，根据参数个数来循环，而在每次循环中，调用的递归会将新的参数传给数组，但是由于active为true，就会退出到循环体中，此时循环体的arr个数又更新了 === //
 * // === 实质：用递归来改变循环条件，但不进行真正的递归 === //
 * @param {Function} fn - 函数
 * @return {Function}
 */
function tco (fn) {
  let value
  let active = false
  let arr = []

  // 1
  return function () {
    // 2 // 9   // 15
    arr.push(arguments)

    // 3
    if (!active) {
      // 4
      active = true

      // 5  // 11
      while (arr.length) {
        // 6  // 12
        value = fn.apply(this, arr.shift())
      }

      active = false

      return value
    }
  }

  // 10 // 16 ...
}

/**
 * 递归
 * // === 第一次传的是次数，比如5；第二次：4, 0, 1; 第三次：3, 1, 1; 第四次： 2, 1, 2; 第五次： 1, 2, 3 === //
 */
const recurse = tco(function (n, cur = 0, next = 1) {
  // 7  // 13
  if (n === 1) {
    return next
  }

  if (n === 0) {
    return 0
  }

  // 8  // 14
  return recurse(n - 1, next, cur + next)
})

fibonacci.recurse = recurse

/**
 * 尾递归转化为遍历
 * // === 事先预备好[0, 1]; 从i为2开始，后一项都为前两项之和 === //
 * @param {Number} n - 次数
 * @return {Array}
 */
fibonacci.iterator = function (n) {
  let arr = [0, 1]
  let len = arr.length
  let i = len

  while (i <= n) {
    arr.push(arr[i - 1] + arr[i - 2])
    ++i
  }

  return arr
}

// === 斐波那契数列： === //
// ===        0, n = 0               === //
// === F(n) = 1, n = 1               === //
// ===        F(n - 1) + F(n - 2)    === //
// === A(n) = 1 / √5 * [ ((1 + √5) / 2) ^ n - ((1 - √5) / 2) ^ n ] === //

fibonacci.math = function (n) {
  const SQRT_FIVE = Math.sqrt(5)
  return Math.round(1 / SQRT_FIVE * (Math.pow(0.5 + SQRT_FIVE / 2, n) - Math.pow(0.5 - SQRT_FIVE / 2, n)))
}

export default fibonacci

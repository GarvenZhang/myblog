// === 偏函数: 固定一个函数的一些参数，然后产生另一个更小元的函数 === //
// === 1 元: 参数参数中的个数，如带有两个参数的函数为 二元函数 === //
// === 2 与柯里化区别: === //
// === 2.1 柯里化: 讲一个多参数函数转换成多个单参数函数，即将一个n元函数转换成n个一元函数 === //
// === 2.2 局部应用: 固定一个函数的一个或多个参数, 即将一个n元函数转换成一个 n-x 元函数 === //

export default (fn, ...args) =>
  (..._args) => fn(args.concat(_args))

export function partial (fn, ...args) {

  return function (..._args) {

    return fn.apply(this, args.concat(_args))

  }

}
// === 柯里化: 将使用多个参数的一个函数转换成使用一系列使用一个参数的函数的技巧，以达到参数复用的目的 === //
// === 1 思路: 将需要柯里化的函数fn的参数个数保存起来，每次调用只传一个参数，只要传入的参数总个数未达到总个数，就会重复执行curry函数以保存参数，否则执行fn === //
export default function _curring (fn, args = []) {
  const len = fn.length

  return function (...param) {

    const _args = args
      .slice(0)
      .concat(param)

    return _args.length < len ? _curring.call(this, fn, _args) : fn.apply(this, _args)

  }
}

// === 多重箭头函数写法: === //
// === 1 暴露一个名为curry的函数，接受一个参数fn，返回一个名为judge的函数，judge函数接受多个参数，通过rest参数将每次传进来的参数都组合成数组 === //
// === 2 judge函数返回一个三元运算符: 若本次传来的参数个数为fn的个数, 则执行fn；否则，继续返回一个函数，该函数接受一个参数arg，返回judge函数的调用，并将到目前为止目前传进来的参数数组 以及 本次传来的参数传给judge === //
// === 3 参数的积累主要是依靠 rest 参数完成的 === //
export const curry = fn =>
  judge = (...args) =>
    args.length === fn.length() ?
      fn(...args) :
      arg => judge(...args, arg)

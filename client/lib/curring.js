/**
 * 柯里化
 * // === 特点：传进去的参数会累积，没有达到本应该有的个数不会正式执行 === //
 */
export default function curring (fn, args = []) {
  const len = fn.length

  return function (...innerArgs) {
    let _args = args.slice(0)

    _args = _args.concat(innerArgs)

    if (_args.length < len) {
      return curring.call(this, fn, _args)
    } else {
      return fn.apply(this, _args)
    }
  }
}

/**
 * 计算乘积
 * @param {Arguments} nums - 参数
 * @return {Number}
 * @private
 */
function _mult (...nums) {

  let ret = 1

  for (let num of nums) {
    ret *= num
  }

  return ret

}

/**
 * 计算加和
 * @param {Arguments} nums - 参数
 * @return {Number}
 * @private
 */
function _plus (...nums) {

  let ret = 0

  for (let num of nums) {
    ret += num
  }

  return ret

}

/**
 * 算术处理
 * // === 缓存代理: 缓存代理，为一些开销很大的运算结果提供暂时的存储，在下次运算时，如果参数跟之前的一致，则可以直接返回前面存储的结果 === //
 * // === 1 实现: === //
 * // === 1.1 使用高阶函数动态创建代理 === //
 * // === 1.2 把计算方法当作参数传入一个专门用于创建缓存代理的工厂中 === //
 * @param {Function} fn - 回调
 * @private
 */
function _createProxyFactory (fn) {

  let cache = {}

  return function (...args) {

    const _args = args
      .replace(/[+*]/, '')
      .split(' ')

    if (args in cache) {
      return cache[args]
    }

    return cache[args] = fn.apply(this, _args)

  }

}

/**
 * 判断计算类型
 * @return {Boolean}
 */
export default function () {

  const key = this.state.key

  if (/^[+\d]+$/.test(key)) {

    const proxyPlus = _createProxyFactory(_plus)

    this.props.update_popup({
      isOpen: 1,
      header: '计算结果:',
      content: proxyPlus(key)
    })

    return true

  }

  if (/^[+\d]+$/.test(key)) {

    const proxyMult = _createProxyFactory(_mult)

    this.props.update_popup({
      isOpen: 1,
      header: '计算结果:',
      content: proxyMult(key)
    })

    return true

  }

  return false

}

/**
 * 深拷贝
 * // === 思路：根据target类型生成新实例，如空对象或空数组；然后通过 for..in 遍历可枚举属性，并通过hasOwnProperty来过滤目标对象上才有的属性；在赋值的时候，根据类型来决定是否需要递归 === //
 * @param {Object|Array} target - 拷贝目标
 * @return {Object|Array}
 */

export default function deepCopy (target) {
  if (typeof target !== 'object') {
    return
  }

  let newObj = target instanceof Array ? [] : {}

  for (const prop in target) {
    if (target.hasOwnProperty(prop)) {
      newObj[prop] = typeof target[prop] === 'object' ? deepCopy(target[prop]) : target[prop]
    }
  }

  return newObj
}

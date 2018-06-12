/**
 * typeof: 可判断基本类型(null 为 'object') / 引用类型中的'function'
 * instanceof: 可判断数组，自定义对象, 但引用类型 instanceof Object 都为true
 * Object.prototype.toString.call(): [object Constructor]: 最保险
 */

let type = {}

const isType = (target, constructor) => {
  return Object.prototype.toString.call(target) === `[object ${constructor}]`
}

/**
 * 判断是否为对象
 * @param {Object} obj - 判断参数
 * @return {Boolean}
 */
type.isObject = function (obj) {
  return isType(obj, 'Object')
}

type.isBelongsToObject = function (obj) {
  return typeof obj
}

type.isPlainObject = function (obj) {
  return isType(obj, 'Object') && JSON.stringify(obj) === '{}'
}

type.isArray = function (arr) {
  return Array.isArray(arr) || isType(arr, 'Array')
}

type.isDate = function (date) {
  return isType(date, 'Date')
}

export default type

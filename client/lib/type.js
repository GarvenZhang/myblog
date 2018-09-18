

/**
 * typeof: 可判断基本类型(null 为 'object' / 引用类型中的'function')
 * instanceof: 可判断数组，自定义对象, 但引用类型 instanceof Object 都为true
 * Object.prototype.toString.call(): [object Constructor]: 最保险
 */

let type = {}

const isType = (target, constructor) => {
  return Object.prototype.toString.call(target) === `[object ${constructor}]`
}

/**
 * 判断是否为纯对象
 * @param {Object} obj - 判断参数
 * @return {Boolean}
 */
type.isPlainObject = function (obj) {
  return isType(obj, 'Object')
}

{
  // === 判断是否为纯对象: === //

  // === 1 通过{}.toString: Object.prototype.toString.call(obj) 返回的是 [object Object] 格式 === //
  function byToString (obj) {
    return Object.prototype.toString.call(obj) === `[object Object]`
  }

  // === 2 通过原型链: 根据原型链, 如果是'object'类型, 原型链终点肯定是null, 第二个肯定是Object, 而其他的Function/Array都是继承与Object的, 所以只需判断 对象的原型 与 它的原型链上null的子类 的地址是否相等即可 === //
  function byProtoType (obj) {
    if (typeof obj !== 'object' || obj === null) return false

    let proto = obj
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto)
    }

    return Object.getPrototypeOf(obj) === proto
  }
}

type.isBelongsToObject = function (obj) {
  return typeof obj
}

type.isEmptyObject = function (obj) {
  return isType(obj, 'Object') && JSON.stringify(obj) === '{}'
}

{
  // === 判断空对象: === //

  // === 1 通过for..in循环: 当有属性时会进入for..in循环 === //
  function byForIn (obj) {
    for (let key in obj) return false
    return true
  }
  
  // === 2 通过JSON.stringify: 空对象序列化后为 '{}' === //
  function byJsonStringiry (obj) {
    return isType(obj, 'Object') && JSON.stringify(obj) === '{}'
  }

  // === 3 通过Object.keys(): 回一个由一个给定对象的自身可枚举属性组成的数组 === //
  function byObjectKeys (obj) {
    return Object.keys(obj).length === 0
  }
  
}

type.isArray = function (arr) {
  return Array.isArray(arr) || isType(arr, 'Array')
}

type.isDate = function (date) {
  return isType(date, 'Date')
}

export default type

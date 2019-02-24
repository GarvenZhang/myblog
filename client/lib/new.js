/**
 * new实质
 * // === new出来的实例，必须满足： === //
 * // === 1.拥有类的方法(有相同原型) === //
 * // === 2.拥有类的属性(通过call) === //
 * // === 3.返回新对象 === //
 * @param {Object} constructor - 构造函数
 * @return {Object}
 */
export default function (constructor) {
  let o = {
    __proto__: constructor.prototype
  }

  // === 在node环境环境中不起作用 === //
  // o.__proto__ = constructor.prototype

  constructor.call(o)

  return o
}

/**
 * 继承父类原型
 * // === 步骤： === //
 * // === 1.将父类原型通过Object.create()复制一份 === //
 * // === 2.将其构造函数指向子类构造函数 === //
 * // === 3.将子类原型指向副本 === //
 * @param {Obejct} subType - 子类构造函数
 * @param {Obejct} superType - 父类构造函数
 */

export default function (subType, superType) {
  const prototype = Object.create(superType.prototype)

  prototype.constructor = subType

  subType.prototype = prototype
}

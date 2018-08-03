import reg from './reg'

// === 策略模式: 定义一系列的算法，把它们一个个封装起来, 将算法的使用和算法的实现分离开来 === //
// === 1 组成: === //
// === 1.1 策略类: 封装了具体的算法, 负责具体的计算过程 === //
// === 1.2 环境类Context:  === //
// === 1.2.a 接受客户的请求 === //
// === 1.2.b 把请求委托给某一个策略类 === //
// === 1.2.c Context要维持对某个策略对象的引用 === //

// === 多态: 每个策略对象负责的算法已被各自封装在对象内部。当我们对这些策略对象发出请求时，它们会返回不同的计算结果，这正是对象多态性的体现 === //

// 把检验逻辑封装成策略对象
export const strategies = {
  isEmpty: function (value, errMsg) {
    return value === '' ? errMsg : false
  },
  isPhone: function (value, errMsg) {
    return reg.phone.test(value) ? true : errMsg
  },
  isMail: function (value, errMsg) {
    return reg.mail.test(value) ? true : errMsg
  },
  isDate: function (value, errMsg) {
    return reg.date.test(value) ? true : errMsg
  },
  isLegal: function (value, errMsg) {
    return reg.legal.test(value) ? true : errMsg
  },
  isNum: function (value, errMsg) {
    return reg.num.test(value) ? true : errMsg
  },
  minLength: function (value, length, errMsg) {
    return value.length < length ? errMsg : true
  },
  maxLength: function (value, length, errMsg) {
    return value.length > length ? errMsg : true
  },
}

/**
 * Validator 类在这里作为context，负责接收用户的请求并委托给strategy对象
 */
export class Validator {

  constructor () {
    this.cache = []
  }

  /**
   * 添加检验规则
   * @param {*} value - 待检验的值
   * @param {Object[]} rules - 检验规则数组
   * @param {String} rules[].strategy - 策略
   * @param {String} rules[].errMsg - 错误提示信息
   * @return {Object} - validator实例
   */
  add (value, rules) {

    let self = this

    for (let i = 0, rule; rule = rules[i++]; ) {

      (function (rule) {

        let strategyArr = rule.strategy.split(':')
        let errMsg = rule.errMsg

        self.cache.push(function () {

          const stratety = strategyArr.shift()
          strategyArr.unshift(value)
          strategyArr.push(errMsg)

          return strategies[stratety](...strategyArr)

        })

      })(rule)

    }

    return this

  }

  /**
   * 开始检验
   * @return {String|Boolean} 检验结果
   */
  start () {

    for (let i = 0, validatorFn; validatorFn = this.cache[i++]; ) {

      const errMsg = validatorFn()

      if (typeof errMsg === 'string') {
        return errMsg
      }

    }

  }

}

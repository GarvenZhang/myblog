import type from '../../../client/lib/type'

// === TDD: 需求分析 -> 任务/模块拆解 -> 编写测试用例 -> 快速构建代码 -> 重构 -> 功能测试/发布 === //
// === 1 传统开发流程: 分析需求 -> 调试开发 -> 测试发布 === //
// === 2 断言: 诊断 + 输出信息，表达程序设计人员对于系统应达到状态的一种预期, 通过断言可知道一个逻辑是否正确 === //
// === 3 工具: console, 断言库(jest) === //
// === 4 覆盖率:  === //

describe('prod/client/lib/type.test.js', function () {
  describe('detect Object', function () {
    test('is Object just like {}', function () {
      expect(type.isObject({})).toBeTruthy()
      expect(type.isObject(function () {})).toBeFalsy()
      expect(type.isObject([])).toBeFalsy()
      expect(type.isObject(new Date())).toBeFalsy()
      expect(type.isObject(null)).toBeFalsy()
      expect(type.isObject('333')).toBeFalsy()
    })

    test('belongs to Object', function () {
      expect(type.isBelongsToObject({})).toBeTruthy()
      expect(type.isBelongsToObject(function () {})).toBeTruthy()
      expect(type.isBelongsToObject([])).toBeTruthy()
      expect(type.isBelongsToObject(new Date())).toBeTruthy()
    })

    test('is plain object', function () {
      expect(type.isPlainObject({})).toBeTruthy()
      expect(type.isPlainObject({a: '1'})).toBeFalsy()
      expect(type.isPlainObject([])).toBeFalsy()
    })
  })

  describe('detect Array', function () {
    test('is type of Array', function () {
      expect(type.isArray([])).toBeTruthy()
      expect(type.isArray({})).toBeFalsy()
    })
  })

  describe('detect Date', function () {
    test('is type of Date', function () {
      expect(type.isDate(new Date())).toBeTruthy()
      expect(type.isDate('2018-02-04T23:22:11')).toBeFalsy()
    })
  })
})

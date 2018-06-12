import type from '../../../client/lib/type'

describe('test/client/lib/type.test.js', function () {
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

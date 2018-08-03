import fibonacci from '../../../client/lib/fibonacci'

describe('prod/client/lib/finonacci.test.js', function () {
  test('fibonacci.iterator() should be ok', function () {
    expect(fibonacci.iterator(15)[14]).toBe(377)
  })

  test('fibonacci.recurse() should be ok', function () {
    expect(fibonacci.recurse(14)).toBe(377)
  })

  test('fibonacci.math() should be ok', function () {
    expect(fibonacci.math(14)).toBe(377)
  })
})

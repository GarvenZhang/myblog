import curring from '../../../client/lib/curring'

describe('test/client/lib/curring.test.js', function () {
  test('curring() should be ok', function () {
    let fn = curring(function (a, b, c) {
      expect(a).toBe(1)
      expect(b).toBe(2)
      expect(c).toBe(3)
    })

    fn(1, 2, 3)
    fn(1, 2)(3)
    fn(1)(2, 3)
    fn(1)(2)(3)
  })
})

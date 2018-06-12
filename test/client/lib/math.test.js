import math from '../../../client/lib/math'

describe('test/client/lib/math.test.js', function () {
  test('math.random() should be ok', function () {
    for (var i = 10000; i--;) {
      expect(math.random({
        1: 0
      }, 10)).not.toBe('1')
    }

    expect(math.random({
      0: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
    }, 10)).toBe('1')

    for (var i = 10000; i--;) {
      expect(math.random({
        1: 50000
      }, 2)).toBe('1')
    }

    // expect(math.random({
    //   e: 1
    // }, 'jfowjaeiwa')).toBe('e')
  })
})

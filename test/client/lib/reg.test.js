import reg from '../../../client/lib/reg'

describe('test/client/lib/reg.test.js', function () {
  describe('match date', function () {
    test('should match "2018-09-22 20:29:00"', function () {
      expect('2018-09-22 20:29:00').toMatch(reg.date)
    })

    test('number should not be out of bounds', function () {
      expect('2018-19-22 20:29:00').not.toMatch(reg.date)
      expect('2018-09-32 20:29:00').not.toMatch(reg.date)
      expect('2018-09-22 28:29:00').not.toMatch(reg.date)
      expect('2018-09-22 20:79:00').not.toMatch(reg.date)
      expect('2018-09-22 20:20:60').not.toMatch(reg.date)
    })
  })
})

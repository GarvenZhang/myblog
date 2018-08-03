import datetime from '../../../client/lib/datetime'
import reg from '../../../client/lib/reg'

describe('prod/client/lib/datetime.test.js', function () {
  test('format is simial to "2017-09-10 23:11:08"', function () {
    expect(datetime.toRegular(new Date())).toMatch(reg.date)
  })
})

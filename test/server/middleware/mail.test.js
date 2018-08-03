const transporter = require('../../../server/middleware/mail')

describe('prod/server/middleware/mail.test.js', function () {
  test('should be not error', async function () {
    expect.assertions(1)
    const ret = await transporter.inputInvalidPwdManyTimes('931923959@qq.com')
    expect(ret.length).toBe(1)
  })
})

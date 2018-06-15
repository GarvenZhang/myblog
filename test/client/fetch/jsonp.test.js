const jsonp = require('../../../client/view/fetch/jsonp').default
const config = require('../../../config')

describe('test/client/fetch/jsonp.test.js', function () {
  test('jsonp.get()', async function () {
    await jsonp.get(`${config.dev.fileServerIP}/address?cb=jp.getAddress`)

    expect(document.body.contains(document.querySelector('script'))).toBeTruthy()
  })
})

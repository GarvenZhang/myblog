const index = require('../../../client/lib/index')

describe('/prod/client/lib/index.test.js', function () {
  describe('getUrlParams', function () {
    test('return empty string when there is nothing in param location', function () {
      expect(index.getUrlParams('')).toMatchObject({})
      expect(index.getUrlParams('http://www.hellojm.cn')).toMatchObject({})
      expect(index.getUrlParams('http://www.hellojm.cn?')).toMatchObject({})
    })
    test('return param value', function () {
      expect(index.getUrlParams('http://www.hellojm.cn?uid=123')).toMatchObject({
        uid: '123'
      })
    })
  })

  // describe('Cookies Object', function () {
  //
  //   let document = {}
  //   Object.defineProperty(document, 'cookie', {
  //     get () {
  //       return this.val
  //     },
  //     set (value) {
  //       return this.val += `${value}`
  //     },
  //     writable: true
  //   })
  //
  //   prod('set cookie', function () {
  //
  //     index.Cookies.set('uid', '12345')
  //     index.Cookies.set('sign', '12321', {
  //       expires: new Date(),
  //       path: '/prod',
  //       domain: 'http://localhost:8080',
  //       httpOnly: true,
  //       sameSite: true,
  //       secure: true
  //     })
  //
  //     expect(document.cookie).toBe('uid=12345')
  //   })
  //   prod('get cookie', function () {
  //
  //     expect(index.Cookies.get('uid')).toBe('12345')
  //
  //   })
  //   prod('unset cookie', function () {
  //
  //     index.Cookies.unset('uid')
  //
  //     expect(index.Cookies.get('uid')).toBeUndefined()
  //   })
  // })
})

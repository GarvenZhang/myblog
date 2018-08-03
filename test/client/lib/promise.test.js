import _Promise from '../../../client/lib/promise'

describe('prod/client/lib/promise.test.js', function () {
  describe('Promise.resolve() should be ok', function () {
    test('use promise to verify', () => {
      expect.assertions(1)

      return _Promise.resolve('resolve').then(data => {
        expect(data).toBe('resolve')
      })
    })
  })

  describe('Promise.reject() should be ok', async function () {
    test('use promise to verify reject', function () {
      expect.assertions(1)

      return _Promise.reject('reject').then(function () {
        // ...
      }, function (err) {
        expect(err).toBe('reject')
      })
    })
  })

  describe('new Promise().then().catch() should be ok', function () {
    test('fulfill', function (done) {
      new _Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('fulfill')
        }, 500)
      }).then(function (data) {
        expect(data).toBe('fulfill')
        done()
      }).catch(function (err) {

      })
    })

    test('reject', function (done) {
      new _Promise(function (resolve, reject) {
        setTimeout(function () {
          reject('reject')
        }, 500)
      }).then(function (data) {

      }).catch(function (err) {
        expect(err).toBe('reject')
        done()
      })
    })
  })

  describe('Promise.all() should be ok', function () {
    test('handle async function one by one', async function (done) {
      expect.assertions(2)

      let p1 = _Promise.resolve(3)
      let p2 = 1337
      let p3 = new _Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo')
      })

      _Promise.all([p1, p2, p3]).then(values => {
        expect([3, 1337, 'foo']).toEqual(expect.arrayContaining([values]))
        if (values === 'foo') {
          done()
        }
      })
    })
  })

  describe('new Promise().then(function () {}).then(function () {}).catch(...)', function () {
    test('all resolved', function (done) {
      new _Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(1)
        }, 100)
      }).then(data => {
        return new _Promise((resolve, reject) => {
          setTimeout(function () {
            resolve(data + 1)
          }, 100)
        })
      }).then(data => {
        return new _Promise((resolve, reject) => {
          setTimeout(function () {
            resolve(data + 1)
          }, 100)
        })
      }).then(data => {
        expect(data).toBe(3)
        done()
      })
    })

    test('one reject', function () {
      new _Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(1)
        }, 100)
      }).then(data => {
        return new _Promise((resolve, reject) => {
          setTimeout(function () {
            reject(data + 1)
          }, 100)
        })
      }).then(data => {
        return new _Promise((resolve, reject) => {
          setTimeout(function () {
            resolve(data + 1)
          }, 100)
        })
      }).catch(err => {
        expect(err).toBe(2)
        done()
      })
    })
  })
})

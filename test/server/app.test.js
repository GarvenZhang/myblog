const request = require('supertest')
const app = require('../../server/app-myblog.dev')
const config = require('../../config')

describe('test/server/app.test.js', function () {
  it('should / status 200', function (done) {
    request(app(config.indexPort).callback())
      .get('/')
      .end(function (err, res) {
        expect(res.status).toBe(200)
        expect(res.text).toContain('个人博客')
        done()
      })
  })
})

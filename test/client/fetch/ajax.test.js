import httpRequest, {ajax, Fetch} from '../../../client/fetch/ajax'
import Mock from 'mockjs'

describe('test/client/fetch/ajax.test.js', function () {
  describe('httpRequest()', function () {
    test('get should be ok', function (done) {
      Mock.mock('/test', {
        'data|1': {
          retCode: 1
        }
      })

      httpRequest({
        url: '/test?id=1',
        method: 'get',
        headers: {
          'x-header': 1
        },
        async: true
      }).then(data => {
        expect(data.retCode).toBe(1)
        done()
      })
    })

    test('post should be ok', function (done) {
      Mock.mock('/test', {
        'data|1': {
          retCode: 1
        }
      })

      httpRequest({
        url: '/test',
        method: 'post',
        headers: {
          'x-header': 1
        },
        async: true
      }).then(data => {
        expect(data.retCode).toBe(1)
        done()
      })
    })
  })

  describe('ajax() should be ok', function () {
    test('get should be ok', function (done) {
      Mock.mock('/test', {
        'data|1': {
          retCode: 1
        }
      })

      ajax({
        url: '/test?id=1',
        method: 'get',
        headers: {
          'x-header': 1
        },
        async: true
      }).then(data => {
        expect(data.retCode).toBe(1)
        done()
      })
    })

    test('post should be ok', function (done) {
      Mock.mock('/test', {
        'data|1': {
          retCode: 1
        }
      })

      ajax({
        url: '/test',
        method: 'post',
        headers: {
          'x-header': 1
        },
        async: true
      }).then(data => {
        expect(data.retCode).toBe(1)
        done()
      })
    })
  })

  describe('fetch() should be ok', function () {
    test('get should be ok', function (done) {
      Mock.mock('/test', {
        'data|1': {
          retCode: 1
        }
      })

      Fetch({
        url: '/test?id=1',
        method: 'get',
        headers: {
          'x-header': 1
        },
        async: true
      }).then(data => {
        expect(data.retCode).toBe(1)
        done()
      })
    })

    test('post should be ok', function (done) {
      Mock.mock('/test', {
        'data|1': {
          retCode: 1
        }
      })

      Fetch({
        url: '/test',
        method: 'post',
        headers: {
          'x-header': 1
        },
        async: true
      }).then(data => {
        expect(data.retCode).toBe(1)
        done()
      })
    })
  })
})

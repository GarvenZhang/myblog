import httpRequest, {ajax, Fetch} from '../../../client/view/fetch/ajax'
import Mock from 'mockjs'

describe('prod/client/fetch/ajax.test.js', function () {
  describe('httpRequest()', function () {
    test('get should be ok', function (done) {
      Mock.mock('/prod', {
        'data|1': {
          retCode: 1
        }
      })

      httpRequest({
        url: '/prod?id=1',
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
      Mock.mock('/prod', {
        'data|1': {
          retCode: 1
        }
      })

      httpRequest({
        url: '/prod',
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
      Mock.mock('/prod', {
        'data|1': {
          retCode: 1
        }
      })

      ajax({
        url: '/prod?id=1',
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
      Mock.mock('/prod', {
        'data|1': {
          retCode: 1
        }
      })

      ajax({
        url: '/prod',
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
      Mock.mock('/prod', {
        'data|1': {
          retCode: 1
        }
      })

      Fetch({
        url: '/prod?id=1',
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
      Mock.mock('/prod', {
        'data|1': {
          retCode: 1
        }
      })

      Fetch({
        url: '/prod',
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

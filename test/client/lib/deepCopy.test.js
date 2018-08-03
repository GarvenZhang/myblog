import deepCopy from '../../../client/lib/deepCopy'

describe('prod/client/lib/deepCopy.test.js', function () {
  test('deepCopy() should be ok', function () {
    const arr = [{
      a: {
        b: 10
      }
    }]

    const ret = deepCopy(arr)

    arr[0].a.b = 200

    expect(ret[0].a.b).toBe(10)
    expect(arr[0].a.b).toBe(200)
  })
})

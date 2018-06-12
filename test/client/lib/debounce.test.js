import debounce from '../../../client/lib/debounce'

describe('test/client/lib/debounce.test.js', function () {
  test('debounce(fn, wait, true)', function (done) {
    let tmp = 0

    const fn = () => {
      ++tmp
    }

    const fnDebounce = debounce(fn, 300, true)

    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()

    setTimeout(function () {
      expect(tmp).toBe(0)
      done()
    }, 0)
  })

  test('debounce(fn, wait, false)', function (done) {
    let tmp = 0

    const fn = () => {
      ++tmp
    }

    const fnDebounce = debounce(fn, 300, false)

    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()
    fnDebounce()

    setTimeout(function () {
      expect(tmp).toBe(1)
      done()
    }, 300)
  })
})

const sort = require('../../../../../../client/view/Admin/containers/GeneralCatalogue/sort')
const mock = require('../../../../../../mock/articleList.mock').default.data

describe('test/client/view/Admin/containers/GeneralCatalogue/sort.test.js', function () {
  describe('sort.selectSort()', function () {
    test('positive sequence should be right', function () {
      const ret = sort.selectSort(mock, ['title'], true)

      ret.reduce((prev, next) => {
        expect(prev.title.localeCompare(next.title)).toBeLessThanOrEqual(0)
        return prev
      })
    })

    test('negative sequence should be right', function () {
      const ret = sort.selectSort(mock, ['title'], false)

      ret.reduce((prev, next) => {
        expect(prev.title.localeCompare(next.title)).toBeGreaterThanOrEqual(0)
        return prev
      })
    })
  })

  describe('sort.insertionSort()', function () {
    test('positive sequence should be right', function () {
      const ret = sort.insertionSort(mock, ['readNum'], true)

      ret.reduce((prev, next) => {
        expect(prev.readNum).toBeLessThanOrEqual(next.readNum)
        return prev
      })
    })

    test('negative sequence should be right', function () {
      const ret = sort.insertionSort(mock, ['readNum'], false)

      ret.reduce((prev, next) => {
        expect(prev.readNum).toBeGreaterThanOrEqual(next.readNum)
        return prev
      })
    })

    test('sort 0 right', function () {
      const arr = [0, 0, 2, 5, 0, 1, 9, 6]

      const ret = sort.insertionSort(arr, [''], true)

      ret.reduce((prev, next) => {
        expect(prev).toBeLessThanOrEqual(next)
        return prev
      })
    })
  })

  describe('sort.shellSort()', function () {
    test('positive sequence should be right', function () {
      const ret = sort.shellSort(mock, ['likedNum'], true)

      ret.reduce((prev, next) => {
        expect(prev.likedNum).toBeLessThanOrEqual(next.likedNum)
        return prev
      })
    })

    test('negative sequence should be right', function () {
      const ret = sort.shellSort(mock, ['likedNum'], false)

      ret.reduce((prev, next) => {
        expect(prev.likedNum).toBeGreaterThanOrEqual(next.likedNum)
        return prev
      })
    })

    test('sort 0 right', function () {
      const arr = [0, 0, 2, 5, 0, 1, 9, 6]

      const ret = sort.shellSort(arr, [''], true)

      ret.reduce((prev, next) => {
        expect(prev).toBeLessThanOrEqual(next)
        return prev
      })
    })
  })

  describe('sort.quickSort()', function () {
    test('positive sequence should be right', function () {
      const ret = sort.quickSort(mock, ['pubtime'], true)

      ret.reduce((prev, next) => {
        expect(new Date(prev.pubtime).getTime()).toBeLessThanOrEqual(new Date(next.pubtime).getTime())
        return prev
      })
    })

    test('negative sequence should be right', function () {
      const ret = sort.quickSort(mock, ['pubtime'], false)

      ret.reduce((prev, next) => {
        expect(new Date(prev.pubtime).getTime()).toBeGreaterThanOrEqual(new Date(next.pubtime).getTime())
        return prev
      })
    })

    test('sort 0 right', function () {
      const arr = [0, 0, 2, 5, 0, 1, 9, 6]

      const ret = sort.quickSort(arr, [''], true)

      ret.reduce((prev, next) => {
        expect(prev).toBeLessThanOrEqual(next)
        return prev
      })
    })
  })

  describe('sort.mergeSort()', function () {
    test('positive sequence should be right', function () {
      const ret = sort.mergeSort(mock, ['commentNum'], true)

      ret.reduce((prev, next) => {
        expect(prev.commentNum).toBeLessThanOrEqual(next.commentNum)
        return prev
      })
    })

    test('negative sequence should be right', function () {
      const ret = sort.mergeSort(mock, ['commentNum'], false)

      ret.reduce((prev, next) => {
        expect(prev.commentNum).toBeGreaterThanOrEqual(next.commentNum)
        return prev
      })
    })

    test('sort 0 right', function () {
      const arr = [{commentNum: 0}, {commentNum: 199}, {commentNum: 0}, {commentNum: 5}, {commentNum: 0}, {commentNum: 1}, {commentNum: 9}, {commentNum: 6}, {commentNum: 0}, {commentNum: 99}, {commentNum: 222}, {commentNum: 33}, {commentNum: 33}, {commentNum: 22}]

      const ret = sort.mergeSort(arr, ['commentNum'], true)

      ret.reduce((prev, next) => {
        expect(prev.commentNum).toBeLessThanOrEqual(next.commentNum)
        return prev
      })
    })

    test('sort 0 right', function () {
      const arr = [0, 0, 2, 5, 0, 1, 9, 6, 999, 999, 22, 2, 5, 0, 88]

      const ret = sort.quickSort(arr, [''], true)

      ret.reduce((prev, next) => {
        expect(prev).toBeLessThanOrEqual(next)
        return prev
      })
    })
  })
})

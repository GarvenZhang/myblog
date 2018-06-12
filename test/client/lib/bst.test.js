import BST from '../../../client/lib/bst'
import ArticleMock from '../../../mock/article.mock'

describe('test/client/lib/bst.test.js', function () {
  let bst = new BST()

  bst.insert(23)
  bst.insert(45)
  bst.insert(16)
  bst.insert(37)
  bst.insert(3)
  bst.insert(99)
  bst.insert(22)

  test('bst.inOrder() should be ok', function () {
    let ret = ''

    bst.inOrder(bst.root, function (data) {
      ret += `${data} `
    })

    expect(ret.trim()).toBe('3 16 22 23 37 45 99')
  })

  test('bst.preOrder() should be ok', function () {
    let ret = ''

    bst.preOrder(bst.root, function (data) {
      ret += `${data} `
    })

    expect(ret.trim()).toBe('23 16 3 22 45 37 99')
  })

  test('bst.postOrder() should be ok', function () {
    let ret = ''

    bst.postOrder(bst.root, function (data) {
      ret += `${data} `
    })

    expect(ret.trim()).toBe('3 22 16 37 99 45 23')
  })

  test('bst.getMin() should be ok', function () {
    expect(bst.getMin()).toBe(3)
  })

  test('bst.getMax() should be ok', function () {
    expect(bst.getMax()).toBe(99)
  })

  test('bst.find() should be ok', function () {
    expect(bst.find(23)).not.toBeNull()
    expect(bst.find(100)).toBeNull()
  })

  test('bst.remove() should be ok', function () {
    bst.remove(23)
    expect(bst.find(23)).toBeNull()
  })
})

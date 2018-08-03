import address from '../../../fileServer/db/address'
import trieTree from '../../../client/view/Admin/containers/Info/trieTree'

describe('prod/client/lib/trieTree.test.js', function () {
  beforeAll(() => {
    trieTree.init(address)
  })

  var fixedPropsLength = 2

  describe('trieTree.getChild(id) should be ok', function () {
    test('child length should be right', function () {
      expect(Object.keys(trieTree.getChild('110000')).length).toBe(2 + fixedPropsLength)
      expect(Object.keys(trieTree.getChild('120100')).length).toBe(13 + fixedPropsLength)
    })

    test('child text should be right', function () {
      expect(trieTree.getChild('532901').text).toBe('大理市')
      expect(trieTree.getChild('542431').text).toBe('双湖县')
      expect(trieTree.getChild('542439').text).not.toBe('双湖县')
    })
  })
})

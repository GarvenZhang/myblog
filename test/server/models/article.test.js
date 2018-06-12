const mysql = require('mysql2/promise')

const config = require('../../../config')
const articleModel = require('../../../server/models/article')

describe('test/server/controller/article.test.js', function () {
  beforeAll(async () => {
    global.connectionPool = mysql.createPool(config.dbConfig)
    global.db = await global.connectionPool.getConnection()
  })

  afterAll(() => {
    global.db.release()
  })

  describe('getAllList', function () {
    test('should only contains properties: readNum, likedNum, commentNum, id, pubtime, title', async function () {
      expect.assertions(8)

      const ret = await articleModel.getAllList()
      const data0 = ret.data[0]

      expect(ret).toHaveProperty('retCode')
      expect(ret).toHaveProperty('totalCount')
      expect(data0).toHaveProperty('id')
      expect(data0).toHaveProperty('readNum')
      expect(data0).toHaveProperty('likedNum')
      expect(data0).not.toHaveProperty('commentNum')
      expect(data0).toHaveProperty('pubtime')
      expect(data0).toHaveProperty('title')
    })
  })
})

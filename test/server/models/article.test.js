const mysql = require('mysql2/promise')

const config = require('../../../config')
const articleModel = require('../../../server/models/article')

describe('prod/server/controller/article.test.js', function () {
  beforeAll(async () => {
    global.connectionPool = mysql.createPool(config.dbConfig)
    global.db = await global.connectionPool.getConnection()
  })

  afterAll(() => {
    global.db.release()
  })

  describe('getAllList', function () {
    test('should only contains properties: read_num, liked_num, commentNum, id, pubtime, title', async function () {
      expect.assertions(8)

      const ret = await articleModel.getAllList()
      const data0 = ret.data[0]

      expect(ret).toHaveProperty('retCode')
      expect(ret).toHaveProperty('total_count')
      expect(data0).toHaveProperty('id')
      expect(data0).toHaveProperty('read_num')
      expect(data0).toHaveProperty('liked_num')
      expect(data0).not.toHaveProperty('commentNum')
      expect(data0).toHaveProperty('pubtime')
      expect(data0).toHaveProperty('title')
    })
  })
})

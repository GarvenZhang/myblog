const Mock = require('mockjs')

exports.articleList = Mock.mock({
  retCode: 1,
  'data|200': [{
    'title|1': '@cname',
    'readNum|100-1000': 1,
    'likedNum|1-100': 1,
    'commentNum|1-100': 1,
    'pubtime|1': '@date(yyyy-MM-dd HH:mm:ss)'
  }],
  totalCount: 200
})

exports.article = Mock.mock({
  retCode: 1,
  'data|10': '我jfak3290cm是我'
})

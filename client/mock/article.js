const Mock = require('mockjs')

exports.articleList = Mock.mock({
  retCode: 1,
  'data|200': [{
    'title|1': '@cname',
    'read_num|100-1000': 1,
    'liked_num|1-100': 1,
    'commentNum|1-100': 1,
    'pubtime|1': '@date(yyyy-MM-dd HH:mm:ss)'
  }],
  total_count: 200
})

exports.article = Mock.mock({
  retCode: 1,
  'data|10': '我jfak3290cm是我'
})

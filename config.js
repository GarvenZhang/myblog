module.exports = {
  publicPath: '/',

  dev: {
    indexServerPort: '3000',
    cmsServerPort: '8081',
    imageUploadApi: 'http://localhost:3001/',
    fileServerIP: 'http://localhost:3001'
  },

  prod: {
    indexServerIP: 'https://123.207.121.188:3003',
    indexDomain: 'https://www.hellojm.cn',
    cmsDomain: 'https://www.hellojm.cn:8080',
    fileServerDomain: 'https://file.hellojm.cn',
    fileServerIP: 'https://120.79.205.192:3001/',
    imageUploadApi: 'https://localhost:3001/'
  },

  indexPort: '3003',
  cmsPort: '8080',

  demoRootPath: 'http://garvenzhang.github.io/',

  auth: {
    key: './server/auth/2_www.hellojm.cn.key',
    cert: './server/auth/1_www.hellojm.cn_bundle.crt',
    subToken01: '#$%^%Gdsc#%&e@',
    subToken02: 'd24g&&3ad##w'
  },

  dbConfig: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '970226',
    database: 'myblog'
  },

  corsHeader: {
    ACCESS_CONTROL_ALLOW_ORIGIN: '*',
    ACCESS_CONTROL_ALLOW_METHOD: 'GET, POST, OPTIONS',
    ACCESS_CONTROL_ALLOW_HEADERS: '*'
  },

  mail: {
    user: 'jf00258jf@hotmail.com',
    pass: 'Sz1997/02/26',
    sender: '"Garven" jf00258jf@hotmail.com',
    times: 5
  },

  cryptoSign: (md5, id) => md5(md5(id + 'fadk!l3u87mmmc##j2389dd')),
  cryptoPwd: (md5, account, password) => md5(md5(account) + md5('fje32###fa*&!!mmm' + password)),
  jwtSecret: 'fadk!l3u87mmmc##jfeo%&&'
}
module.exports = {
  publicPath: '/',
  dev: {  // 在开发环境中，客户端与后端是分开的，所有避免端口重复，需要客户端与后端端口不一致，因此也需要跨域
    indexServerPort: '3000',
    cmsServerPort: '8081',
    imageUploadApi: 'http://localhost:3001/',
    fileServerIP: 'http://localhost:3001'
  },
  prod: { // 生成环境中，因为是同构，所以只需分官网和cms
    indexServerIP: 'https://123.207.121.188:3003',
    indexDomain: 'https://www.hellojm.cn',
    cmsDomain: 'https://www.hellojm.cn:8080',
    fileServerDomain: 'http://file.hellojm.cn',
    fileServerIP: 'http://120.79.205.192',
    imageUploadApi: 'http://localhost:3001/upload'
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

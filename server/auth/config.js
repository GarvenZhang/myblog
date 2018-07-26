const config = require('../../config')

module.exports = {

  // https配置
  AUTH: {
    KEY: './server/auth/2_www.hellojm.cn.key',
    CERT: './server/auth/1_www.hellojm.cn_bundle.crt',
    SUBTOKEN1: '#$%^%Gdsc#%&e@',
    SUBTOKEN2: 'd24g&&3ad##w',
    JWT_SECRET: 'fadk!l3u87mmmc##jfeo%&&',
    ALGORITHM: 'HS384',
    EXPIRESIN: 60
  },

  // github第三方登录配置
  GITHUB: {
    AUTHORIZE_URL: 'https://github.com/login/oauth/authorize',
    TOKEN_URL: 'https://github.com/login/oauth/access_token',
    USER_URL: 'https://api.github.com/user',
    CLIENT_ID: 'f3af6057b71e9fbd6951',
    CLIENT_SECRET: '6017be378c8a8943577f02ba9bf5bdb6d5e7fc88'
  },

  // 数据库配置
  DB_CONFIG: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '970226',
    database: 'myblog'
  },

  // CORS响应头配置
  CORS_HEADERS: {
    ACCESS_CONTROL_ALLOW_ORIGIN: `${config.INDEX_DOMAIN}, ${config.CMS_DOMAIN}`,
    ACCESS_CONTROL_ALLOW_METHOD: 'GET, OPTIONS',
    ACCESS_CONTROL_ALLOW_HEADERS: '*'
  },

  // 邮件配置
  MAIL: {
    USER: 'jf00258jf@hotmail.com',
    PASSWORD: 'Sz1997/02/26',
    SENDER: '"Garven" jf00258jf@hotmail.com',
    TIMES: 5
  },

  // 加密算法
  cryptoSign: (md5, id) => md5(md5(id + 'fadk!l3u87mmmc##j2389dd')),
  cryptoPwd: (md5, account, password) => md5(md5(account) + md5('fje32###fa*&!!mmm' + password)),
  getCsrfToken: (md5, sign) => md5(sign + md5('DF!^&kkfaliiA45')),
}
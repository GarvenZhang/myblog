/* 开发环境域名与IP的配置:

/private/etc/hosts:

127.0.0.1       www.localhost.cn
127.0.0.1       admin.localhost.cn
127.0.0.1	      game.localhost.cn
127.0.0.1	      sso.localhost.cn
127.0.0.1 	    file.localhost.cn
127.0.0.1       game.localhost.cn

whistle 配置:

www.localhost.cn	  host://127.0.0.1:3003
admin.localhost.cn  host://127.0.0.1:8080
game.localhost.cn   host://127.0.0.1:3001
sso.localhost.cn    host://127.0.0.1:3333
file.localhost.cn   host://127.0.0.1:3009
game.localhost.cn   host://127.0.0.1:3007

*/

const ISDEV = process.env.NODE_ENV === 'development'
const ISPROD = process.env.NODE_ENV === 'production'
const ISTEST = process.env.test === 'test'

// 开发环境配置
const DEV = {

  // === 域名： === //
  // === 1 根域名： . === //
  // === 2 顶级域名：com gov edu cn com net等 === //
  // === 3 二级域名: hellojm === //
  // === 4 三级域名：www blog file === //
  // === 完整域名：www.hellojm.cn. [通常省略根域名] === //

  SSO_PORT: '3333',
  SSO_DOMAIN: 'http://sso.localhost.cn',

  INDEX_PORT: '3003',
  INDEX_SEVER_PORT: '3000',
  INDEX_DOMAIN: 'http://www.localhost.cn',

  CMS_PORT: '8080',
  CMS_SERVER_PORT: '8081',
  CMS_DOMAIN: 'http://admin.localhost.cn',

  FILE_SERVER_PORT: '3009',
  FILE_SERVER_DOMAIN: 'http://file.localhost.cn'
}

// 生产环境配置
const PROD = {

  SSO_PORT: '3333',
  SSO_DOMAIN: 'https://sso.hellojm.cn',

  INDEX_SERVER_PORT: '3003',
  INDEX_DOMAIN: 'https://www.hellojm.cn',

  CMS_SERVER_PORT: '8080',
  CMS_DOMAIN: 'https://admin.hellojm.cn',

  FILE_SERVER_PORT: '3001',
  FILE_SERVER_DOMAIN: 'https://file.hellojm.cn',

  SSO_DOMAIN: 'http://sso.localhost.cn',
  INDEX_DOMAIN: 'http://www.localhost.cn',
  CMS_DOMAIN: 'http://admin.localhost.cn',
  FILE_SERVER_DOMAIN: 'http://file.localhost.cn'
}

const SSO_PORT = ISDEV ? DEV.SSO_PORT : PROD.SSO_PORT
const SSO_DOMAIN = ISDEV || ISTEST ? DEV.SSO_DOMAIN : PROD.SSO_DOMAIN
const INDEX_PORT = ISDEV ? DEV.INDEX_PORT : PROD.INDEX_PORT
const INDEX_SEVER_PORT = ISDEV ? DEV.INDEX_SEVER_PORT : PROD.INDEX_SERVER_PORT
const INDEX_DOMAIN = ISDEV || ISTEST ? DEV.INDEX_DOMAIN : PROD.INDEX_DOMAIN
const CMS_PORT = ISDEV ? DEV.CMS_PORT : PROD.CMS_PORT
const CMS_SERVER_PORT = ISDEV ? DEV.CMS_SERVER_PORT : PROD.CMS_SERVER_PORT
const CMS_DOMAIN = ISDEV || ISTEST ? DEV.CMS_DOMAIN : PROD.CMS_DOMAIN
const FILE_SERVER_PORT = ISDEV ? DEV.FILE_SERVER_PORT : PROD.FILE_SERVER_PORT
const FILE_SERVER_DOMAIN = ISDEV || ISTEST ? DEV.FILE_SERVER_DOMAIN : PROD.FILE_SERVER_DOMAIN
const COOKIE_DOMAIN = ISDEV || ISTEST ? '.localhost.cn' : '.hellojm.cn'

module.exports = {

  ISDEV,
  ISPROD,
  ISTEST,

  PUBLICPATH: '/',

  SSO_PORT,
  SSO_DOMAIN,
  INDEX_PORT,
  INDEX_SEVER_PORT,
  INDEX_DOMAIN,
  CMS_PORT,
  CMS_SERVER_PORT,
  CMS_DOMAIN,
  FILE_SERVER_PORT,
  FILE_SERVER_DOMAIN,
  COOKIE_DOMAIN,

  // github第三方登录配置
  GITHUB: {
    AUTHORIZE_URL: 'https://github.com/login/oauth/authorize',
    TOKEN_URL: 'https://github.com/login/oauth/access_token',
    USER_URL: 'https://api.github.com/user',
    CLIENT_ID: 'f3af6057b71e9fbd6951',
  },

  DEMO_ROOT_PATH: 'http://garvenzhang.github.io/',

  cryptoPwd: (md5, account, password) => md5(md5(account) + md5('fje32###fa*&!!mmm' + password)),

}
module.exports = {

  PUBLICPATH: '/',

  // 开发环境配置
  DEV: {

    INDEX_PORT: '3003',
    INDEX_SEVER_PORT: '3000',
    INDEX_DOMAIN: 'http://www.localhost.cn',

    CMS_PORT: '8080',
    CMS_SERVER_PORT: '8081',
    CMS_DOMAIN: 'http://admin.localhost.cn',

    FILE_SERVER_PORT: '3009',
    FILE_SERVER_DOMAIN: 'http://file.localhost.cn'
  },

  // === 域名： === //
  // === 1 根域名： . === //
  // === 2 顶级域名：com gov edu cn com net等 === //
  // === 3 二级域名: hellojm === //
  // === 4 三级域名：www blog file === //
  // === 完整域名：www.hellojm.cn. [通常省略根域名] === //

  // 生产环境配置
  PROD: {

    INDEX_SERVER_PORT: '3003',
    INDEX_DOMAIN: 'https://www.hellojm.cn',

    CMS_SERVER_PORT: '8080',
    CMS_DOMAIN: 'https://admin.hellojm.cn',

    FILE_SERVER_PORT: '3001',
    FILE_SERVER_DOMAIN: 'https://file.hellojm.cn/',
  },

  DEMO_ROOT_PATH: 'http://garvenzhang.github.io/',

  cryptoPwd: (md5, account, password) => md5(md5(account) + md5('fje32###fa*&!!mmm' + password)),

}
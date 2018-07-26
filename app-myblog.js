const config = require('./config')

if (!config.ISDEV) {
  const prodServer = require('./server/app-myblog.prod')
  prodServer(config.SSO_PORT)
  prodServer(config.INDEX_SEVER_PORT)
  prodServer(config.CMS_SERVER_PORT)
} else if (config.ISDEV) {
  const devServer = require('./server/app-myblog.dev')
  devServer(config.SSO_PORT)
  devServer(config.INDEX_SEVER_PORT)
  devServer(config.CMS_SERVER_PORT)
}

const config = require('./config')
const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === 'production') {
  const prodServer = require('./server/app-myblog.prod')
  prodServer(config.PROD.INDEX_SERVER_PORT)
  prodServer(config.PROD.CMS_SERVER_PORT)
} else if (NODE_ENV === 'development') {
  const devServer = require('./server/app-myblog.dev')
  devServer(config.DEV.INDEX_SEVER_PORT)
  devServer(config.DEV.CMS_SERVER_PORT)
}

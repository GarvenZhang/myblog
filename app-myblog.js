const config = require('./config')
const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === 'production') {
  const prodServer = require('./server/app-myblog.prod')
  prodServer(config.indexPort)
  prodServer(config.cmsPort)
}
else if (NODE_ENV === 'development') {
  const devServer = require('./server/app-myblog.dev')
  devServer(config.dev.indexServerPort)
  devServer(config.dev.cmsServerPort)
}

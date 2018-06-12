const webpack = require('webpack')
const WebpacDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.dev')
const config = require('../config')

const createIndexServer = (port) => {
  const proxyPort = port === config.indexPort ? config.dev.indexServerPort : config.dev.cmsServerPort
  let app = new WebpacDevServer(webpack(webpackConfig), {
    contentBase: false,
    public: `http://localhost:${proxyPort}`,
    compress: true,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    // noInfo: true,
    headers: {
      'Set-Cookie': `csrf_token=${Date.now()};expires=${new Date(Date.now() + 60 * 60 * 2 * 1000).toUTCString()}`,
      'X-XSS-Protection': '1',
      'X-Frame-Options': 'DENY'
    },
    proxy: {
      '*': `http://localhost:${proxyPort}`
    }
  })

  app.listen(port, 'localhost', function (err) {
    if (err) {
      console.log(err)
    }
    console.log(`Listening at localhost:${port}`)
  })
}

createIndexServer(config.indexPort)
createIndexServer(config.cmsPort)

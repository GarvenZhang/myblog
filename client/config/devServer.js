const webpack = require('webpack')
const WebpacDevServer = require('webpack-dev-server')
const config = require('./webpack.config.dev')
const common = require('../../config')

const createIndexServer = (port) => {
  let app = new WebpacDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  })
  app.listen(port, function (err) {
    if (err) {
      console.log(err)
    }
    console.log(`Listening at localhost:${port}`)
  })
}

createIndexServer(common.dev.indexPort)
createIndexServer(common.dev.cmsPort)

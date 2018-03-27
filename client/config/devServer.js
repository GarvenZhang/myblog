const webpack = require('webpack')
const WebpacDevServer = require('webpack-dev-server')
const config = require('./webpack.config.dev')
const common = require('../../config')

var createServer = () => {
  let app = new WebpacDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  })
  app.listen(common.clientPort, function (err) {
    if (err) {
      console.log(err)
    }
    console.log(`Listening at localhost:${common.clientPort}`)
  })
}

createServer()

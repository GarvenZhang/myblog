const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./webpack.config.base')

/**
 * 常用配置项
 */
config.mode = 'development'
config.devtool = 'source-map'
config.entry = {
  index: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:5000',
    'webpack/hot/only-dev-server',
    './index.jsx'
  ],
  vendor: [
    'react',
    'react-dom',
    // 'redux',
    // 'react-redux',
    'react-router'
    // 'axios'
  ]
}
config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)
config.plugins.push(
  new webpack.NamedModulesPlugin()
)
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
)
config.plugins.push(
  new HtmlWebpackPlugin({
    template: './view/index.tmpl.dev.html',
    inject: true,
    hash: true,
    minify: {
      sortAttributes: true
    },
    chunk: [
      'index',
      'vender',
      'manifest'
    ],
    filename: 'index.html'
  })
)
config.plugins.push(
  new webpack.NoEmitOnErrorsPlugin()
)


module.exports = config

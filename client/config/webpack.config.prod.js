const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const config = require('./webpack.config.base')

config.mode = 'production'
config.entry = {
  index: './index.jsx',
  vendor: [
    'react',
    'react-dom',
    'react-router',
    'redux',
    'react-redux',
    'axios'
  ]
}
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
)
config.plugins.push(
  new HtmlWebpackPlugin({
    template: './index.tmpl.html',
    inject: true,
    minify: {
      removeComment: true,
      collapseWhitespage: false
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
  new UglifyJsPlugin()
)
config.plugins.push(
  new webpack.NoEmitOnErrorsPlugin()
)

module.exports = config

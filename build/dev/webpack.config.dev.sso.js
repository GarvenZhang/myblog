const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.config.dev.base')

const rootDir = process.cwd()
const clientDir = path.resolve(rootDir, './client')
const distDir = path.resolve(rootDir, './dist')

const resetCss = new ExtractTextPlugin({
  filename: 'reset-[hash].css',
  disable: false,
  allChunks: true
})

const commonCss = new ExtractTextPlugin({
  filename: '[name]-[hash].css',
  disable: false,
  allChunks: true
})

module.exports = merge(base, {
  entry: {
    sso: path.resolve(clientDir, './SSO/index.js'),
  },
  output: {
    path: distDir + '/sso',  // 输出目录
    filename: `[name]-[hash].js`,
    chunkFilename: '[name]-[hash].js',
    publicPath: '/'   // 外部文件前缀
  },
  module: {
    rules: [

      {
        test: /reset\.css$/,
        include: path.resolve(clientDir, './SSO'),
        use: resetCss.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /index\.css$/,
        include: path.resolve(clientDir, './SSO'),
        use: commonCss.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
    ]


  },

  plugins: [

    resetCss,
    commonCss,

    new HtmlWebpackPlugin({
      template: path.resolve(clientDir, './SSO/index.tmpl.html'),
      inject: true,
      minify: {
        removeComment: true,
        collapseWhitespage: true
      },
      chunks: [
        'sso',
      ],
      filename: 'index.html'
    }),

  ],

})
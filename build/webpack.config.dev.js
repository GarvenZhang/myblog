const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')
const CompressionPlugin = require('compression-webpack-plugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const merge = require('webpack-merge')
const ModifyPrefixOfJsOrCss = require('./modifyPrefixOfJsOrCss')

const base = require('./webpack.config.base')
const rootDir = process.cwd()
const clientDir = path.resolve(rootDir, './client')
const distDir = path.resolve(rootDir, './dist')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'index': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:5000',
      'webpack/hot/only-dev-server',
      './client/User/index.jsx'
    ],
    'cms': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:5000',
      'webpack/hot/only-dev-server',
      './client/Admin/index.jsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: path.resolve(clientDir, './static'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]',
                importLoaders: 1,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('postcss-icss-values'),
                  require('autoprefixer')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        include: path.resolve(clientDir, './static'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  plugins: [

    new ExtractTextPlugin({
      filename: '[name]/index.css',
      disable: false,
      allChunks: true
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(clientDir, './index.tmpl.dev.html'),
      inject: true,
      minify: {
        removeComment: false,
        collapseWhitespage: true
      },
      chunks: [
        'index'
      ],
      filename: 'index/index.html'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(clientDir, './index.tmpl.dev.html'),
      inject: true,
      minify: {
        removeComment: true,
        collapseWhitespage: true
      },
      chunks: [
        'cms'
      ],
      filename: 'cms/index.html'
    }),

    // 修改js和css路径
    new ModifyPrefixOfJsOrCss(),

    new webpack.HotModuleReplacementPlugin(),
    new ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new WriteFilePlugin()

  ]
})

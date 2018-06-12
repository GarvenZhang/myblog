const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')
const CompressionPlugin = require('compression-webpack-plugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const merge = require('webpack-merge')

const base = require('./webpack.config.base')
const rootDir = process.cwd()
const clientDir = path.resolve(rootDir, './client')
const distDir = path.resolve(rootDir, './dist')

module.exports = merge(base, {
  mode: 'production',
  entry: {
    index: path.resolve(clientDir, './view/index.jsx')
  },
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  output: {
    chunkFilename: '[name].js'
  },
  plugins: [

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(clientDir, './view/index.tmpl.prod.html'),
      inject: true,
      minify: {
        removeComment: true,
        collapseWhitespage: true
      },
      chunks: [
        'index'
      ],
      filename: 'index.html'
    }),

    new ParallelUglifyPlugin({
      // 传递给 UglifyJS 的参数
      uglifyES: {
        output: {
          // 最紧凑的输出
          beautify: true,
          // 删除所有的注释
          comments: true
        },
        compress: {
          // 在UglifyJs删除没有用到的代码时不输出警告
          warnings: false,
          // 删除所有的 `console` 语句，可以兼容ie浏览器
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true
        }
      },
      include: process.cwd(),
      exclude: 'node_moduels'
    }),

    new webpack.HashedModuleIdsPlugin(),
    new ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),

    new DllReferencePlugin({
      manifest: require(path.resolve(distDir, './js/react.manifest.json'))
    }),
    new DllReferencePlugin({
      manifest: require(path.resolve(distDir, './js/redux.manifest.json'))
    }),
    new DllReferencePlugin({
      manifest: require(path.resolve(distDir, './js/axios.manifest.json'))
    }),
    new DllReferencePlugin({
      manifest: require(path.resolve(distDir, './js/remark.manifest.json'))
    }),
    new DllReferencePlugin({
      manifest: require(path.resolve(distDir, './js/jwt.manifest.json'))
    }),
    new DllReferencePlugin({
      manifest: require(path.resolve(distDir, './js/md5.manifest.json'))
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })

  ]
})

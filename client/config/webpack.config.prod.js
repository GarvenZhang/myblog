const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')
const CompressionPlugin = require('compression-webpack-plugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const config = require('./webpack.config.base')

config.mode = 'production'
config.entry = {
  index: './view/index.jsx'
}
config.resolve.mainFields = ['jsnext:main', 'browser', 'main']
config.output.chunkFilename = '[name].js'
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
)
config.plugins.push(
  new HtmlWebpackPlugin({
    template: './view/index.tmpl.prod.html',
    inject: true,
    minify: {
      removeComment: true,
      collapseWhitespage: true
    },
    chunk: [
      'index'
    ],
    filename: 'dist/index.html'
  })
)
config.plugins.push(
  new ParallelUglifyPlugin({
    // 传递给 UglifyJS 的参数
    uglifyES: {
      output: {
        // 最紧凑的输出
        beautify: true,
        // 删除所有的注释
        comments: false,
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
    exclude: 'node_moduels',
  })
)
config.plugins.push(
  new webpack.HashedModuleIdsPlugin()
)
config.plugins.push(
  new ModuleConcatenationPlugin()
)
config.plugins.push(
  new webpack.optimize.AggressiveMergingPlugin()
)
config.plugins.push(
  new DllReferencePlugin({
    manifest: require(path.resolve(process.cwd(), '../dist/js/remark.manifest.json'))
  })
)
config.plugins.push(
  new DllReferencePlugin({
    manifest: require(path.resolve(process.cwd(), '../dist/js/reactRenderer.manifest.json'))
  })
)
config.plugins.push(
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
)
config.externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'react-router': 'ReactRouter',
  'react-router-dom': 'ReactRouterDOM',
  'redux': 'Redux',
  'react-redux': 'ReactRedux',
  'redux-saga': 'ReactSaga',
  'axios': 'Axios',
  'remark': 'remark',
  'remark-react': 'reactRenderer'
}

module.exports = config

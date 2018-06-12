const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')
const CompressionPlugin = require('compression-webpack-plugin')

const distDir = path.resolve(process.cwd(), './dist')
const config = require('../config')

module.exports = {
  mode: 'production',
  entry: {
    react: [
      'react', 'react-dom', 'react-router', 'react-router-dom'
    ],
    redux: [
      'redux', 'react-redux', 'redux-saga'
    ],
    axios: [
      'axios'
    ],
    remark: [
      'remark', 'remark-react'
    ],
    jwt: [
      'jsonwebtoken'
    ],
    md5: [
      'js-md5'
    ],
    // antd: [
    //   'antd/lib/upload', 'antd/lib/button', 'antd/lib/icon'
    // ]
  },
  output: {
    path: distDir,  // 输出目录
    // filename: `${jsDir}/[name]-[chunkhash].js`,
    filename: `js/[name].dll.js`,
    publicPath: config.publicPath,  // 外部文件前缀,
    library: '[name]'
  },
  plugins: [
    new DllPlugin({
      name: '[name]',
      path: path.resolve(distDir, './js/[name].manifest.json')
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}

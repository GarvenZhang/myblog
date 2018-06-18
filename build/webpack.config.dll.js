// === webpack优化之文件依赖优化： === //
// === 1 思想：dll为动态链接库，将常用的基本模块抽离出来，构建时会从动态链接库中查找而无需再次编译，提高了构建速度 === //
// === 2 配置： === //
// === 2.1 在webpack dll 文件中构建出动态链接库文件 === //
// === 2.2 在webpack 中使用动态链接库文件 === //

const path = require('path')
const DllPlugin = require('webpack/lib/Dllplugin')
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
    ]
  },
  output: {
    path: distDir,  // 输出目录
    // filename: `${jsDir}/[name]-[chunkhash].js`,
    filename: `lib/[name].dll.js`,
    publicPath: config.publicPath,  // 外部文件前缀,
    library: '[name]'
  },
  plugins: [
    new DllPlugin({
      name: '[name]',
      path: path.resolve(distDir, 'lib/[name].manifest.json')
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

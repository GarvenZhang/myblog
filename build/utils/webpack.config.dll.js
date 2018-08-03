// === webpack优化之文件依赖优化： === //
// === 1 思想：dll为动态链接库，将常用的基本模块抽离出来，构建时会从动态链接库中查找而无需再次编译，提高了构建速度 === //
// === 2 配置： === //
// === 2.1 在webpack dll 文件中构建出动态链接库文件 === //
// === 2.2 在webpack 中使用动态链接库文件 === //

const path = require('path')
const DllPlugin = require('webpack/lib/Dllplugin')
const CompressionPlugin = require('compression-webpack-plugin')

const distDir = path.resolve(process.cwd(), './dist')
const config = require('../../config')

module.exports = {
  mode: 'none',
  entry: {
    // 把 React 相关的放到一个单独的动态链接库
    react: [
      'react', 'react-dom', 'react-router', 'react-router-dom'
    ],
    // 把项目需要所有的 redux 放到一个单独的动态链接库
    redux: [
      'redux', 'react-redux', 'redux-thunk'
    ],
    axios: [
      'axios'
    ],
    remark: [
      'remark', 'remark-react'
    ],
    md5: [
      'js-md5'
    ]
  },
  output: {
    // 输出的文件都放到 dist 目录下
    path: distDir,
    // filename: `${jsDir}/[name]-[chunkhash].js`,
    // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，也就是 entry 中配置的 react ...
    filename: `lib/[name].[hash].dll.js`,
    publicPath: config.PUBLICPATH,  // 外部文件前缀,
    // 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react
    // 之所以在前面加上 _dll_ 是为了防止全局变量冲突
    library: '_dll_[name]'
  },
  plugins: [
    new DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      // 例如 react.manifest.json 中就有 "name": "_dll_react"
      name: '_dll_[name]',
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.resolve(distDir, 'lib/[name].manifest.json')
    }),
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   prod: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
}

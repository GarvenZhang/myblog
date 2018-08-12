const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

const rootDir = process.cwd()
const clientDir = path.resolve(rootDir, './client')
const distDir = path.resolve(rootDir, './dist')

module.exports = {
  mode: 'production',
  entry: {
    // TODO: 入口
  },
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main'],

    // 默认后缀名, 此处添加后则文件中引入时可不添加
    extensions: [
      '.js',
      '.jsx'
    ]

  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
            limit: 2048,
            name: 'assets/[name]-[hash].[ext]'
          }
        }]
      },
      {
        test: /\.(svg|eot|woff|ttf|woff2|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name]-[hash].[ext]'
            }
          }
        ]
      },
      // === html-loader: 用于解析 img标签 中的src === //
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [

    // 修改js和css路径
    // new ModifyPrefixOfJsOrCss(),

    // === tree shaking: 摇树, 摇掉没用的叶子, 即去掉不需要的代码 === //
    // === 1 思路: webpack本身提供的优化方案能否去掉第三方库中没用的代码 -> 不能则找找有没有 xxx-es -> 也没用则找找第三方的支持 tree shaking 的库 === //
    // === 2 选库注意事项: 不一定所有第三方库都按照规范来写, 所有有的第三方库并不能实现 tree shaking === //

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })

  ],

}

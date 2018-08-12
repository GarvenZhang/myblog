
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')

const rootDir = process.cwd()
const clientDir = path.resolve(rootDir, './client')
const distDir = path.resolve(rootDir, './dist')

module.exports = {
  mode: 'production',

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

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.test': JSON.stringify('test'),
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })

  ],

}

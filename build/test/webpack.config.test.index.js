const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.config.test.base')

const rootDir = process.cwd()
const clientDir = path.resolve(rootDir, './client')
const distDir = path.resolve(rootDir, './dist')

const staticCss = new ExtractTextPlugin({
  filename: 'reset-[hash].css',
  disable: false,
  allChunks: true
})

const commonCss = new ExtractTextPlugin({
  filename: 'index-[hash].css',
  disable: false,
  allChunks: true
})


module.exports = merge(base, {
  entry: {
    index: path.resolve(clientDir, './User/index.jsx'),
  },
  output: {
    path: distDir + '/index',  // 输出目录
    filename: `[name]-[hash].js`,
    chunkFilename: '[name]-[hash].js',
    publicPath: '/'   // 外部文件前缀
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [path.resolve(clientDir, './User/assets'), path.resolve(clientDir, './User/router')],
        use: commonCss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]',
                importLoaders: 1,
                minimize: {
                  discardComments: {
                    removeAll: true
                  }
                }
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
        include: path.resolve(clientDir, './User/router'),
        use: commonCss.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.css$/,
        include: path.resolve(clientDir, './User/assets'),
        use: staticCss.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
    ]


  },

  plugins: [

    staticCss,
    commonCss,

    new HtmlWebpackPlugin({
      template: path.resolve(clientDir, './User/index.tmpl.html'),
      inject: true,
      minify: {
        removeComment: true,
        collapseWhitespage: true
      },
      chunks: [
        'index', 'vendor', 'utils'
      ],
      filename: 'index.html'
    }),

  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {   // 抽离第三方插件
          test: /node_modules/,   // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor',  // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10
        },
        utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
          chunks: 'initial',
          name: 'utils',  // 任意命名
          minSize: 0    // 只要超出0字节就生成一个新包
        }
      }
    }
  },
})
/*
* webpack优化
* // === 1 css模块化：=== //
* // === 1.1 解决的问题：所有的css是打包到一个css文件的，会出现全局污染，命名混乱，无法共享变量 === //
* // === 1.2 使用：=== //
* // === 1.2.1 css-loader中开启module参数，每个jsx中引入的样式都是local的，也可以通过:global来声明全局； === //
* // === 1.2.2 不层叠多个class而是通过compose来实现样式复用 === //
* // === 1.2.3 命名规则还是可以遵循BEM, 且不再需要通过增加层级嵌套来限制，每个类只需要一个层级，提高查找性能 === //
* // === 1.2.4 可引入变量，比如颜色值的同一管理 === //
* // === 1.2.5 我会把全局变量提取出来放在一个专门的css文件中，在jsx中使用的时候如果不加style.*就是使用全局样式 === //
* // === 1.3 缺点：必须每次都加style.*, 在ssr中无法用babel-plugin-react-css-modules === //
*
* */
const path = require('path')
const webpack = require('webpack')
// const autoprefixer = require('autoprefixer')
// const precss = require('precss')
// const postcsseasysprites = require('postcss-easysprites')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const RemoveJsOfCss = require('./removeJsOfCss')
const common = require('../config')

// const HappyPack = require('happypack')
//
// const happyThreadPool = HappyPack.ThreadPool({
//   size: 5
// })

/**
 * 设置默认常用路径
 */
const rootDir = process.cwd()
const clientDir = path.resolve(rootDir, './client')
const distDir = path.resolve(rootDir, './dist')
/**
 * 配置项
 */
const config = {
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
    // modules: [path.resolve(srcDir, 'node_modules')],
    // alias: {
    //   'react': path.resolve(__dirname, './node_modules/react/cjs/react.production.min.js')
    // },
  },
  output: {
    path: distDir,  // 输出目录
    // filename: `${jsDir}/[name]-[chunkhash].js`,
    filename: `js/[name].js`,
    chunkFilename: '[name].js',
    publicPath: common.publicPath   // 外部文件前缀
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: path.resolve(clientDir, './view/static'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]',
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('postcss-icss-values')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        include: path.resolve(clientDir, './view/static'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      /*
      // === 图片优化之Image Inline：将图片转化成base64编码内嵌到html/css中以减少HTTP请求数 === //
      // === 使用场景：图片1~2K左右，因为base64会比原来大，而且最好是存在css中进行缓存 === //
      */
      {
        test: /\.(jpg|png|gif|jpeg|bmp)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048
          }
        }
      },
      {
        test: /\.(svg|eot|woff|ttf|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/style.css',
      disable: false,
      allChunks: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new RemoveJsOfCss()
    // new HappyPack({
    //   id: 'babel',
    //   loaders: ['babel-loader'],
    //   threadPool: happyThreadPool,
    // })
  ]
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         chunks: "initial",
  //         minChunks: 2,
  //         maxInitialRequests: 5, // The default limit is too small to showcase the effect
  //         minSize: 0 // This is example is too small to create commons chunks
  //       },
  //       vendor: {
  //         test: /node_modules/,
  //         chunks: "initial",
  //         name: "vendor",
  //         priority: 10,
  //         enforce: true
  //       }
  //     }
  //   }
  // },
}

module.exports = config

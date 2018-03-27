const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const postcsseasysprites = require('postcss-easysprites')

/**
 * 设置默认常用路径
 */
const srcDir = path.resolve(process.cwd(), 'src')
const assetsDir = path.resolve(process.cwd(), 'assets')
const jsDir = 'dist/js'
const cssDir = 'dist/css'

/**
 * 常用配置项
 */
const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:5000',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ],
    vendor: [
      'react',
      'react-dom',
      // 'redux',
      // 'react-redux',
      'react-router',
      // 'axios'
    ]
  },
  output: {
    path: assetsDir,
    filename: `${jsDir}/[name].js`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(srcDir, cssDir)],
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              module: true,
              camelCase: true,
              localIdentName: '[name]_[local]_[hash:base64:3]',
              importLoaders: 1,
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                precss(),
                autoprefixer({
                  browsers: [
                    'last 3 version', 'ie >= 10'
                  ]
                }),
                postcsseasysprites({
                  imagePath: '../img',
                  spritePath: './assets/dist/img'
                })
              ]
            }
          }
        ]
      }, {
        test: /\.css$/,
        exclude: [path.resolve(srcDir, cssDir)],
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                precss(),
                autoprefixer({
                  browsers: ['last 3 version', 'ie >= 10']
                }),
                postcsseasysprites({imagePath: '../img', spritePath: './assets/dist/img'})
              ]
            }
          }
        ]
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.(jpg|png|svg|eot|woff|gif|jpeg|ttf$)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'dist/img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tmpl.html',
      inject: true,
      hash: true,
      minify: {
        removeComment: true,
        collapseWhitespage: false
      },
      chunks: [
        'index',
        'vendor',
        'manifest'
      ],
      filename: 'index.html'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: [
    //     'vendor',
    //     'manifest'
    //   ],
    //   filename: `${jsDir}/[name].js`
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}

module.exports = config

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const postcsseasysprites = require('postcss-easysprites')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

/**
 * 设置默认常用路径
 */
const srcDir = path.resolve(process.cwd(), 'src')
const assetsDir = path.resolve(process.cwd(), '../dist')
const jsDir = 'js'
const cssDir = 'css'
const common = require('../../config')

/**
 * 配置项
 */
const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    index: './src/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
    path: assetsDir,
    filename: `${jsDir}/[name].js`,
    publicPath: common.publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(srcDir, cssDir)],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
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
                    browsers: ['last 3 version', 'ie >= 10']
                  }),
                  postcsseasysprites({
                    imagePath: './img',
                    spritePath: './assets/dist/img'
                  })
                ]
              }
            }
          ]
        })
      }, {
        test: /\.css$/,
        exclude: [path.resolve(srcDir, cssDir)],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
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
                  postcsseasysprites({imagePath: './img', spritePath: './assets/dist/img'})
                ]
              }
            }
          ]
        })
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }, {
        test: /\.(jpg|png|svg|eot|woff|gif|jpeg|ttf$)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../dist/img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.tmpl.html',
      inject: true,
      hash: true,
      minify: {
        removeComment: true,
        collapseWhitespage: false
      },
      chunk: [
        'index',
        'vender',
        'manifest'
      ],
      filename: 'index.html'
    }),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     warmings: false
    //   }
    // }),
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

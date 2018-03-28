const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const postcsseasysprites = require('postcss-easysprites')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * 设置默认常用路径
 */
const srcDir = ''
const assetsDir = path.resolve(process.cwd(), '../../dist')
const jsDir = '../js'
const cssDir = 'css'
const common = require('../../config')

/**
 * 配置项
 */
const config = {
  resolve: {
    extensions: [
      '.js',
      '.jsx'
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
        use: [
          {
            loader: 'style-loader'
          }, {
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
                // postcsseasysprites({imagePath: '../img', spritePath: './assets/dist/img'})
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
                // postcsseasysprites({imagePath: '../img', spritePath: './assets/dist/img'})
              ]
            }
          }
        ]
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
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
    new ExtractTextPlugin('/dist/css/[name]-[contenthash].css'),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor'
        },
        manifest: {
          name: 'manifest'
        }
      }
    }
  }
}

module.exports = config

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const postcsseasysprites = require('postcss-easysprites')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack')

const happyThreadPool = HappyPack.ThreadPool({
  size: 5
})

/**
 * 设置默认常用路径
 */
const srcDir = ''
const assetsDir = path.resolve(process.cwd(), '../')
const jsDir = 'js'
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
    ],
    modules: [path.resolve(srcDir, 'node_modules')],
    // alias: {
    //   'react': path.resolve(__dirname, './node_modules/react/cjs/react.production.min.js')
    // },
  },
  output: {
    path: assetsDir,
    // filename: `${jsDir}/[name]-[chunkhash].js`,
    filename: `dist/js/[name].js`,
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
                    imagePath: '',
                    // stylesheetPath: '../dist/css',
                    spritePath: '../dist/sprites'
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
                  postcsseasysprites({
                    imagePath: '../img',
                    // stylesheetPath: '../dist/css',
                    spritePath: '../dist/sprites'
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.jsx$/,
        use: [
          'babel-loader'
        ],
        exclude: path.resolve(srcDir, 'node_modules')
      },
      {
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
    new ExtractTextPlugin({
      filename: 'dist/css/[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),

    // new HappyPack({
    //   id: 'babel',
    //   loaders: ['babel-loader'],
    //   threadPool: happyThreadPool,
    // })
  ],
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

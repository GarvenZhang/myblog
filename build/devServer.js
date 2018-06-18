const webpack = require('webpack')
const WebpacDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.dev')
const config = require('../config')

// === 开发环境中 客户端 与 服务器热更新 优化探索： === //

// === 方案一：将客户端与服务器端分开 === //
/*
  客户端用webpack-dev-server，且有HRM;
  服务器用nodemon，且能HRM；

  优点是：前后端都能热更新，且很快
  缺点是：开发时需要分端口，客户端有两个端口，服务器有有个端口，再加上另一台图片服务器要开一个端口，比较混乱;

  且无法同构
*/

// === 方案二：客户端与服务器共用，类似线上 === //
/*
  优点是：客户端与服务器都能热更新，且客户端的热更新速度不变，为2~3s左右，端口也变少，不用跨域配置
  缺点是：服务器端热更新时，客户端也要被迫热更新，重启速度很慢，为9s左右。因为webpack-dev-middleware是koa服务器的一部分，会跟随者koa重启而非基于之前的缓存
*/

// === 方案三：能不跨域，且客户端热更新与服务器端热更新互不干扰，则能保留以上两种方案的优点，且去掉两种方案的缺点 === //
/*
  思路：node热更新必然导致webpack重启，这避免不了，所以只能减少编译的时间，而占用大部分时间的是很多重复的编译，比如react，react-router这些依赖
  缺点：但工作量很大，需要自己去深度分析webpack插件
 */

// === 方案四：客户端依然使用 dev server 能热更新，但不处理请求，只负责转发，请求由后端koa处理 === //
/*
  koa的重启必然导致webpack-dev-middleware的重启，重新编译避免不了，

  因此只能分为devServer和koa，而devServer在处理请求方面只做代理，所有请求都转发去Koa服务器上，这样能保持域名相同，

  且能实现同构；除此之外还保留了webpack-dev-server的热更新；

  但有一个很坑的地方要注意: devServer里代理只是一个中间件，且处理请求的顺序在 / 之后，因此正常情况下无法处理 / ，因此要改变中间件的执行顺序

  方法：将webpack-dev-server中Server.js中的 defaultFeatures.push('proxy', 'middleware'); 的push改为unshift
 */
const createIndexServer = (port) => {
  const proxyPort = port === config.indexPort ? config.dev.indexServerPort : config.dev.cmsServerPort

  let app = new WebpacDevServer(webpack(webpackConfig), {
    contentBase: false,
    public: `http://localhost:${proxyPort}`,
    compress: true,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    // noInfo: true,
    headers: {
      'Set-Cookie': `csrf_token=${Date.now()};expires=${new Date(Date.now() + 60 * 60 * 2 * 1000).toUTCString()}`,
      'X-XSS-Protection': '1',
      'X-Frame-Options': 'DENY'
    },
    proxy: {
      '*': `http://localhost:${proxyPort}`
    }
  })

  app.listen(port, 'localhost', function (err) {
    if (err) {
      console.log(err)
    }
    console.log(`Listening at localhost:${port}`)
  })
}

createIndexServer(config.indexPort)
createIndexServer(config.cmsPort)

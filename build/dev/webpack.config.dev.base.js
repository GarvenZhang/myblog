// === webpack工作原理 === //

// === 1 基础: === //
// === 1.1 Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入 === //
// === 1.2 Module: 模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块 === //
// === 1.3 Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割 === //
// === 1.4 Loader：模块转换器，用于把模块原内容按照需求转换成新内容 === //
// === 1.5 Plugin：扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情 === //

// === 2 流程: === //
// === 2.1 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数 === //
// === 2.2 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译 === //
// === 2.3 确定入口：根据配置中的 entry 找出所有的入口文件 === //
// === 2.4 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理 === //
// === 2.5 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系 === //
// === 2.6 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会 === //
// === 2.7 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统 === //
// === 2.8 在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果 === //

// === 3 流程阶段： === //
// === 3.1 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler === //
// === 3.2 编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。 === //
// === 3.3 输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统 === //

// === 4 监听模式下的流程阶段： === //
/*
          文件发生变化
           --------
           v      |
初始化 -> 编译 -> 输出
*/

// === webpack优化 === //

// === 1 css模块化：=== //
// === 1.1 解决的问题：所有的css是打包到一个css文件的，会出现全局污染，命名混乱，无法共享变量 === //
// === 1.2 使用：=== //
// === 1.2.1 css-loader中开启module参数，每个jsx中引入的样式都是local的，也可以通过:global来声明全局； === //
// === 1.2.2 不层叠多个class而是通过compose来实现样式复用 === //
// === 1.2.3 命名规则还是可以遵循BEM, 且不再需要通过增加层级嵌套来限制，每个类只需要一个层级，提高查找性能 === //
// === 1.2.4 可引入变量，比如颜色值的同一管理 === //
// === 1.2.5 我会把全局变量提取出来放在一个专门的css文件中，在jsx中使用的时候如果不加style.*就是使用全局样式 === //
// === 1.3 缺点：必须每次都加style.*, 在ssr中无法用babel-plugin-react-css-modules === //

// === 2 cdn缓存:  === //
// === 2.1 原理：内容发布网络, 将源站的静态资源发布到不同的CDN节点中，供节点附近的用户访问[正常来说只是对静态资源进行cdn配置, 例如在七牛云上申请一个存储空间，并创建cdn实例，只上传静态文件] === //
// === 2.2 缓存策略：一般通过Cache-Control: max-age来设置cdn边缘节点数据缓存时间，过期则向源站发出回源请求 === //
// === 2.3 优点：=== //
// === 2.3.a 跨运营商，跨地域，大大减低了延时 === //
// === 2.3.b 大部分请求在CDN边缘节点完成，CDN起到了分流作用，减轻了源站的负载 === //
// === 2.4 缺点： === //
// === 2.4.a 若网站更新时CDN节点上的数据无及时更新，浏览器 Ctrl+F5 也没用 === //
// === 2.4.b 若缓存时间不合理，过长会导致数据更新时间慢，过短会增大回源率，反而增大了延时 === //
// === 2.5 申请：腾讯云申请cdn后，解析出CNAME地址，填写了IP源地址后，将加速的域名进行CNAME绑定即可 === //
// === 2.6 检测：ping.chinaz.com 若同一个url在不同地区解析出不同IP，则配置成功 / 或者chrome中响应头的X-Cache有HIT为命中 CDN缓存， 为MISS为 未命中 === //
// === 2.7 缓存刷新：在CDN服务提供商处强制缓存刷新 === //

// === webpack处理兼容性 === //
// === 1 css前缀：通过postcss的 autoprefixer 插件来设置，本质是上通过caniuse的数据来设置 === //

const path = require('path')
const webpack = require('webpack')
// const precss = require('precss')
// const postcsseasysprites = require('postcss-easysprites')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')
const FixDynamicScriptSrc = require('../utils/fixDynamicScriptSrc')
const RemoveCssComment = require('../utils/removeCssComment')

/**
 * 设置默认常用路径
 */
const rootDir = process.cwd()
const clientDir = path.resolve(rootDir, './client')
const distDir = path.resolve(rootDir, './dist')
/**
 * 配置项
 */
module.exports = {
  mode: 'development',
  devtool: 'source-map',
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
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      // === 图片: === //
      // === 1 png: 支持透明，兼容性较好 === //
      // === 1.1 png8: 256色, 支持透明 === //
      // === 1.1 png24: 2 ^ 24 色, 不支持透明 === //
      // === 1.1 png32: 2 ^ 24 色, 支持透明 === //
      // === 2 jpg: 有损压缩，压缩率高，不支持透明 === //
      // === 3 webp: 压缩率更高，安卓全部, 在ios webview中有兼容问题 === //
      // === 4 svg: 矢量图，代码内嵌，相对较小 === //
      // === 4.1 场景: 因绘制能力有限，应用于图片样式相对简单的场景 === //
      // === 4.2 库: 如iconfont === //
      // === 5 gif: 支持动画，透明 === //
      // === 6 图片压缩：针对真实图片情况，舍弃一些相对无关紧要的，肉眼察觉不出来的色彩信息 === //
      // === 6.1 工具: tinypng, 智图 === //

      /*
      // === 图片优化之Image Inline： === //
      // === 思路：将图片转化成base64编码内嵌到html/css中以减少HTTP请求数 === //
      // === 使用场景：图片1~2K左右，因为base64会比原来大，而且最好是存在css中进行缓存 === //
      */
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

    new webpack.NoEmitOnErrorsPlugin(),
    new ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    // // 修复动态脚本src
    // new FixDynamicScriptSrc(),
    //
    // // 去除css注释
    // new RemoveCssComment()

  ]

}

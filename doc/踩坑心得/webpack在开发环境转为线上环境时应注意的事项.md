# webpack在开发环境转为线上环境时应注意的事项

## 一.全面了解了新技术后再去使用

终于 myblog 第一个版本基本出来了, 然后准备上线, 则需要用webpack打包出线上的代码, 压缩啊, 优化呀等必不可少

之前做webpack优化的时候([点击查看之前版本的webpack构建文件](https://github.com/GarvenZhang/myblog/tree/sso-xdm-localStorage/build)), 是看别人的博客 以及 参考 《深入浅出webpack》, 因此用到了如: dll动态链接库来提取第三方库, webpack-parallel-uglify-plugin 来做压缩等

然后由于引用了很多第三方插件, 必然会引来代码冲突的问题, 很有可能是第三方库的代码问题, 然后就需要自己去根据 webpack 提供的生命周期钩子, 在特定事情把某些不符合预期的代码改回来([fixDynamicScriptSrc.js](https://github.com/GarvenZhang/myblog/blob/sso-xdm-localStorage/build/fixDynamicScriptSrc.js)),
 [modifyPrefixOfJsOrCss.js](https://github.com/GarvenZhang/myblog/blob/sso-xdm-localStorage/build/modifyPrefixOfJsOrCss.js), [removeJsOfCss.js](https://github.com/GarvenZhang/myblog/blob/sso-xdm-localStorage/build/removeJsOfCss.js), 这些都是自己对第三方文档看了很久也无果然后不得不
自己写额外的 webpack 插件来修补构建代码的文件

所以可以看到, 选用第三方库必然会带来不必要的麻烦, 因此选库也很重要

而我用的是 webpack 4 , webpack 在提取第三方库的时候都说用内置的 splitChunks , 然而由于以下的原因, 自己放弃了尝试这个其实很强大的新技术:

自己的观念一直认为, 应该像以前开发网页那样, 假如项目中引用了: react, redux, md5等第三方库, 应该像 dll 那样, 每个第三方库都单独提取出来作为单独的一个js文件, 然后通过script标签引入

但是事实上并非得这样, splitChunks 会分析依赖, 比如把 来自 node_modules 的所有第三方库 提取为一个js文件, 然后自己的业务逻辑代码提取为一个js文件, 前者是必用而又常变的

这样的提取方式, 还会使得代码体积变得更小, 打包速度变得更快(相比于dll)

通过这件事情, 充分认识到: **既然用了新版本的技术, 则应该全面的去了解其优点是什么, 特点是什么, 而不是了解一半, 然后仍然用旧版本的技术来实现某些功能(比如dll), 这样的话很容易导致版本间兼容性问题而给自己带来不必要的bug去处理**

一定要相信, **一个新版本的迭代, 必然是对旧版本的常见问题的处理, 很多自己想要的需求, 其实在新版本中已经解决了, 而且会变得很简单(就比如 webpack4 以前提取第三方库搞一大推, 而且还未必能百分百如自己所愿, 而webpack4 中 splitChunks 非常方便)**

## 二.开发环境代码应与线上环境代码非常相似

在之前写的 webpack构建 文件中, 很严重一个问题是: 开发环境的webpack构建代码 与 线上环境的webapck构建代码差别很大, 这导致了在构建线上代码时需要改很多东西

其实 开发环境 的代码构建应该与 线上的 很类似, 只是线上环境的应该更注重 代码大小, 版本等问题

在写开发环境的代码时, 尽可能的与线上的一致, 比如在本地也构建出一整套的域名系统(`www.localhost.cn`, `admin.localhost.cn`等), 这样就不用根据 环境的不同而写很多配置文件


 
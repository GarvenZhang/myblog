# 张益铭的前端小博客

## 一 项目:

### 博客主页

+ 链接：[https://www.hellojm.cn](https://www.hellojm.cn)
+ github: [https://github.com/GarvenZhang/myblog](https://github.com/GarvenZhang/myblog)

### cms

+ 链接: [https://admin.hellojm.cn](https://admin.hellojm.cn)
+ github: [https://github.com/GarvenZhang/myblog](https://github.com/GarvenZhang/myblog)

### 文件服务器

+ 链接: [https://file.hellojm.cn](https://file.hellojm.cn)
+ github: [https://github.com/GarvenZhang/blog-file](https://github.com/GarvenZhang/blog-file)

### 在线坦克对战 + 聊天室

+ 链接: [https://game.hellojm.cn](https://game.hellojm.cn/game.html)
+ github: [https://github.com/GarvenZhang/shooting-game](https://github.com/GarvenZhang/shooting-game)

### 博客[早期 - 学习笔记较详细]:

+ 链接: [https://garvenzhang.github.io](https://garvenzhang.github.io)
+ github: [https://github.com/GarvenZhang/GarvenZhang.github.io](https://github.com/GarvenZhang/GarvenZhang.github.io)

### 飞机打怪兽:

+ 链接: [https://garvenzhang.github.io/effects/demo/demo-shooting-game/](https://garvenzhang.github.io/effects/demo/demo-shooting-game/)

## 二 知识点笔记:

### 数据结构

+ [栈](https://github.com/GarvenZhang/shooting-game/blob/development/client/lib/stack.js)
+ [队列](https://github.com/GarvenZhang/shooting-game/blob/development/client/lib/queue.js)
+ [字典](https://github.com/GarvenZhang/shooting-game/blob/development/client/lib/dictionary.js)
+ [BST](./client/lib/bst.js)
+ [TrieTree](./client/Admin/containers/Info/trieTree.js)
+ [图](https://github.com/GarvenZhang/shooting-game/blob/development/client/lib/graph.js)
+ [Set与Map]

### 算法

+ **排序**:
  [插入排序](./client/Admin/containers/GeneralCatalogue/sort.js) /
  [选择排序](./client/Admin/containers/GeneralCatalogue/sort.js) /
  [快速排序](./client/Admin/containers/GeneralCatalogue/sort.js) /
  [归并排序](./client/Admin/containers/GeneralCatalogue/sort.js) /
  [希尔排序](./client/Admin/containers/GeneralCatalogue/sort.js)
+ **查找**:
  [线性查找] /
  [二分查找] /
  [公共项查找]
+ [A*寻路](https://github.com/GarvenZhang/shooting-game/blob/development/client/game/js/engine/Astar.js)
+ [八皇后]
+ [螺旋矩阵]
+ [行列互换矩阵]
+ [排列组合]
+ [概率]
+ [约瑟夫环]
+ [背包问题]

### 计算机基础

+ [补码/反码](https://github.com/GarvenZhang/shooting-game/blob/development/client/lib/fps.js)
+ [字符编码](https://github.com/GarvenZhang/blog-file/blob/development/app-fileServer.js)
+ [图片](./build/webpack.config.base.js)
+ **正则**:
  [边界](./client/lib/reg.js) /
  [环视](./client/lib/reg.js)

### 计算机操作系统

+ [进程/线程](https://github.com/GarvenZhang/shooting-game/blob/development/client/game/js/engine/worker.js) /
+ [调度] /
+ [信号量] /
+ [死锁] / 
+ [文件系统] /

### 计算机网络

+ [ISO]:
+ **IP**:
+ **TCP**:
  [可靠传输] /
  [三握四挥] /
  [滑动窗口] /
  [socket] /
+ **UDP**:
+ **HTTP**:
  [报文结构] /  
  [缓存](https://github.com/GarvenZhang/blog-file/blob/development/middleware/httpCache.js) /
  [常用状态码] /
  [get, post] /
  [http2.0](./server/app-myblog.prod.js) /
+ [HTTPS]
+ [SMTP]
+ [DNS](./server/views/Layout.js)

### HTML5

+ [语义化](./client/User/containers/Article/index.jsx)
+ [浏览器渲染](https://github.com/GarvenZhang/blog-file/blob/development/dist/resume/css/resume-0-1799.css)
+ [Websocket]
+ [svg]

### CSS

+ **class命名**:
  [BEM] /
+ [选择器]
+ [雪碧图](https://github.com/GarvenZhang/shooting-game/blob/development/source/spriteHandle.js)
+ **盒模型**:
  [BFC] /
  [IFC] /
  [清浮动]
+ **布局**:
  [双飞翼布局](./client/User/containers/Article/index.css) /
  [圣杯布局](./client/User/containers/Article/index.css) /
  [float实现两栏布局](./client/User/containers/Article/index.css) /
  [position + transform居中](https://github.com/GarvenZhang/shooting-game/blob/development/client/game/index.css)
+ **响应式**:
+ [动画优化](https://github.com/GarvenZhang/blog-file/blob/development/dist/resume/css/resume-0-1799.css)
+ [重排/重绘](https://github.com/GarvenZhang/blog-file/blob/development/dist/resume/css/resume-0-1799.css)
+ [性能优化调试工具](https://github.com/GarvenZhang/blog-file/blob/development/dist/resume/css/resume-0-1799.css)

### javascript

+ **基础**:
  [位运算](https://github.com/GarvenZhang/shooting-game/blob/development/client/lib/fps.js) /
  [判断类型](./client/lib/type.js) /
  [词法作用域,动态作用域] /
  [变量对象] /
  [闭包](./client/User/components/Header/index.jsx) /
  [执行上下文] /
  [new本质](./client/lib/new.js)
+ **this**:
  [call/apply/bind](./client/Admin/containers/Info/index.jsx) /
  [箭头函数](./client/Admin/containers/Info/index.jsx) /
  [双冒号运算符](./client/Admin/containers/Info/index.jsx)
+ **类型**:
  [String - 解析多层级变量访问](https://github.com/GarvenZhang/blog-file/blob/development/client/game-login/mvvm/compileUtil.js)
  [求数组最值] /
    
+ **函数**:
  [创建方式](./client/User/components/Header/eventloop.js)
+ **面向对象**:
  [defineProperty](https://github.com/GarvenZhang/blog-file/blob/development/client/game-login/mvvm/observer.js) /
  [多态](./client/lib/validator.js) /
  [构造函数继承](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/confirm.js) /
  [原型链继承](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/alert.js) /
  [组合继承](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/confirm.js) /
  [寄生组合继承](./client/lib/inheritPrototype.js)
+ **DOM**:
  [常用nodeType](https://github.com/GarvenZhang/blog-file/blob/development/client/game-login/mvvm/compile.js)
  [获取DOM](https://github.com/GarvenZhang/blog-file/blob/development/client/lib/$.js) /
  [样式处理](https://github.com/GarvenZhang/blog-file/blob/development/client/lib/style.js) /
  [类名处理](https://github.com/GarvenZhang/blog-file/blob/development/client/lib/className.js) /
  [添加节点](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/main.js) /
  [生成text](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/main.js) /
  [attribute和property](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/Dragdrop.js)
+ **事件**:
  [事件循环机制](./client/User/components/Header/index.jsx) /
  [事件处理](https://github.com/GarvenZhang/blog-file/blob/development/client/lib/event.js) /
  [事件委托](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/Dragdrop.js) /
  [原生键盘类事件触发顺序](./client/User/components/Header/index.jsx)
+ **高阶函数**:
  [惰性函数] /
  [偏函数] /
  [柯里化](./client/lib/curring.js) /
  [防抖](./client/lib/debounce.js) /
  [节流] /
  [深拷贝](./client/lib/deepCopy.js) /
  [预加载](https://github.com/GarvenZhang/shooting-game/blob/development/client/game/js/engine/preload.js) /
  [懒加载] /
  [函数组合] /
  [函数记忆] /
  [去重] /
  [斐波那契/尾递归](./client/lib/fibonacci.js) /
  [链式调用](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/main.js)
+ [ajax实现](./client/fetch/ajax.js)
+ **es6**:
  [rest参数] /
  [类的静态属性](https://github.com/GarvenZhang/blog-file/blob/development/client/game-login/mvvm/event.js) / 
  [promise模拟](./client/lib/promise.js) /
  [Decorator](./client/User/containers/Home/index.jsx)
+ **动画**:
  [setTimeout，setInterval与requestAnimationFrame] /
  [fps计算](https://github.com/GarvenZhang/shooting-game/blob/development/client/lib/fps.js) /
  [动画循环](https://github.com/GarvenZhang/shooting-game/blob/development/client/game/js/engine/scene.js) /
  [碰撞检测]
+ **跨域**:
  [jsonp](./client/Admin/containers/Info/index.jsx) /
  [CORS](https://github.com/GarvenZhang/blog-file/blob/development/server/middleware/crossSite.js) /
  [XDM](https://github.com/GarvenZhang/blog-file/blob/development/client/secret-login/secret-login.html) /
  [iframe+window.name](./client/Admin/components/Form/index.jsx)
+ **存储**:
  [cookie](./client/lib/cookie.js) /
  [localStorage](./client/Admin/components/Slidebar/index.jsx) /
  [sessionStorage](./client/User/components/Comment/index.jsx) /
  [存储 - IndexedDB]
+ [Service WOrker, PWA]
+ [BOM]
+ **异步**:
  [Promise] /
  [Generator] /
  [Async] /
+ **模块化**:
  [IIFE](./client/User/components/Header/eventloop.js) /
  [AMD] /
  [CMD] /
+ **代码级别优化**:
  [达夫设备] /
    


### nodejs

+ [时间循环]
+ [单点登录]
+ [session]
+ [微型http服务器]
+ [webp支持](./client/lib/detectWebp.js)

### koa

+ [原理]

### mysql

+ [ER图设计](https://garvenzhang.github.io/2018/01/20/myblog-01/#er%E5%9B%BE%E8%AE%BE%E8%AE%A1)
+ [表相关](./doc/sql.md)
+ **列相关**:
  [增](./server/models/article.js) /
  [删](./server/models/article.js) /
  [查](./server/models/article.js) /
  [改](./server/models/article.js)

### Angular

### Vue

+ **基础**:
+ [核心原理](https://github.com/GarvenZhang/blog-file/blob/development/client/game-login/mvvm/index.js)

### React

+ [生命周期](./client/User/containers/Home/index.jsx)
+ [React直出开发环境热更新优化方案](./build/devServer.js)
+ [propTypes/defaultProps](./client/User/containers/Home/index.jsx)
+ [虚拟DOM](https://github.com/GarvenZhang/blog-file/blob/development/client/secret-login/vdom/velement.js)
+ [Diff]
+ [ssr](./server/views/server-render.js)

### Redux

+ [基础](./client/User/redux/reducers/Popup.js)
+ [middleware](./client/User/redux/store/configureStore.js)

### webpack

+ [工作原理](./build/webpack.config.base.js)
+ [css模块化](./build/webpack.config.base.js)
+ [cdn](./build/webpack.config.base.js)
+ [css前缀兼容处理](./build/webpack.config.base.js)
+ [ImageInline](./build/webpack.config.base.js)
+ [提取第三方库](./build/webpack.config.dll.js)
+ [gzip](./build/webpack.config.prod.js)
+ [压缩js](./build/webpack.config.prod.js)
+ [按需加载](./client/Admin/router/index.jsx)

### 设计模式

+ [单例模式](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/Dragdrop.js)
+ [装饰器模式](https://github.com/GarvenZhang/blog-file/blob/development/client/secret-login/index.js)
+ [模板方法模式]
+ [发布-订阅模式](https://github.com/GarvenZhang/shooting-game/blob/development/client/lib/event.js)
+ [MVC]
+ **MVVM**:
  [发布-订阅] /
  [脏检查] /
  [数据劫持](https://github.com/GarvenZhang/blog-file/blob/development/client/game-login/mvvm/index.js)
+ [数据双向绑定实现原理](https://github.com/GarvenZhang/GarvenZhang.github.io/blob/master/_posts/note/design-pattern/2017-09-05-the-principle-of-two-way-binding.md)
+ [迭代器模式](./client/lib/iterator.js)
+ **代理模式**:
  [保护代理] /
  [虚拟代理](https://github.com/GarvenZhang/blog-file/blob/development/client/files-management/files-management.js) /
  [缓存代理](./client/User/components/Header/index.jsx)
+ [策略模式](./client/lib/validator.js)
+ [组合模式]
+ [中介者模式]
+ [适配器模式]
+ [享元模式]
+ [责任链模式]

### 安全

+ [xss](./client/lib/security.js)
+ [scrf](./client/Admin/containers/Login/index.jsx)
+ [密码安全](./client/Admin/containers/Login/index.jsx)
+ [点击劫持](./server/app-myblog.base.js)
+ [DDOS](./server/app-myblog.base.js)
+ [SQL注入]
+ [上传漏洞]
+ [传输安全](https://github.com/GarvenZhang/blog-file/blob/development/app-fileServer.js)
+ [重放攻击]

### 测试

+ [BDD]
+ [TDD](./test/client/lib/type.test.js)

### 常见功能[原生实现]

+ [上传图片插件](./client/Admin/components/Upload/index.jsx)
+ [分页插件]
+ [拖放插件](https://github.com/GarvenZhang/blog-file/blob/development/client/Popup/Dragdrop.js)
+ [隐藏滚动条](./client/static/styles/index.css)
+ [加载更多](./client/User/containers/Home/index.jsx)
+ [纯CSS实现三角形]
+ [波浪形进度条]
+ [瀑布流]
+ [回文](./client/User/components/Header/index.jsx)

### git

+ [常用命令](./doc/git/常用命令.md)
+ **团队合作**:
  [集中式工作流] /
  [功能分支工作流] /
  [gitflow工作流] /
  [forking工作流]

### 常用命令

+ [linux](./doc/linux.md)
+ [nginx](./doc/nginx.md)
+ [npm](./doc/npm.md)

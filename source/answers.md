1.webpack-dev-server如果是3.x的话，webpack必须是4.x才不会报此TypeError: Cannot read property 'compile' of undefined错误, 同理如果webpack是3.x，则webpack-dev-server必须是2.x

2.webpack报错时，看看是否是版本的问题，如果操作正常还报错，到多数是版本号的问题

3.extension的坑，没有.js

4.下载npm包时看看是否有提示

5.Link外层只需要一个Router，即使只要在页面中不同组件就行，因此Router会放在最外层，为什么？只需要一个？

6.浏览器刷新后页面错误显示的问题，react前后端同构

https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually

https://developer.ibm.com/node/2015/06/10/node-js-react-isomorphic-javascript-why-it-matters/

https://imcn.me/html/y2017/31298.html

https://segmentfault.com/a/1190000009235324

http://imweb.io/topic/5547892e73d4069201d83e6c

https://weibo.com/5191033181/DAl38ztDm?type=comment#_rnd1521171407131

https://github.com/zeit/next.js/

https://github.com/lcxfs1991/blog/issues/10

直出同构，现在还没这个水平，下放一放，日后再做优化，刷新的问题先用HashRouter

理解：webpack中的server和 直出中的server

如何做到路由一致？？

7.现在先不用redux，还没有用的必要

8. https://www.valentinog.com/blog/webpack-4-tutorial/#webpack_4_production_and_development_mode

WARNING in configuration
The 'mode' option has not been set. Set 'mode' option to 'development' or 'production' to enable defaults for this environment. 

9.手淘 ？ + 百度 ？ + 同构 ？

10.  background: linear-gradient(to right, transparent 10%, #00F900 50%, transparent 90%) no-repeat;
     background-size: 100% 2px;
     background-position: 0 98%;
     
     一定要有no-repeat
     
11.多行文本省略号，用后端数据处理

http://www.daqianduan.com/6179.html

12.position绝对定位后，子元素的height和width的100%会断掉，需手动添加

13.隐藏滚动条w

https://blogs.msdn.microsoft.com/kurlak/2013/11/03/hiding-vertical-scrollbars-with-pure-css-in-chrome-ie-6-firefox-opera-and-safari/

14.img在没有src的条件下，为什么需要float才能显示出位置？或者需要设置block？

15.把首页中导航框内所有显示的modal都当做一个独立的路由去处理，会更加容易

若嵌套太多了，比如分在Home之下，路由会变得冗杂

16.

```jsx harmony
<Router>
    <Switch>
      <div className="home-page">
        <header className="header">
          <h1 className="page-title hide">张益铭的前端小博客</h1>
          <Search/>
        </header>
        <nav className="nav">
          <div className="nav-details-list">
            <ul className="nav-list nav-tabs">
              <li className="nav-item">
                <Link className="link" to='/'>
                  <h2 className="nav-title">博文分类</h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to='/LatestArticle'>
                  <h2 className="nav-title">最新文章</h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to='/BestArticle'>
                  <h2 className="nav-title">最佳博文</h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to='/CollectionOfWorks'>
                  <h2 className="nav-title">作品集</h2>
                </Link>
              </li>
            </ul>
            <Route exact path='/' component={ArticleCategory}/>
            <Route path='/ArticleCatalog/:id' component={ArticleCatalog}/>
            <Route path='/BestArticle' component={BestArticle}/>
            <Route path='/LatestArticle' component={LatestArticle}/>
            <Route path='/CollectionOfWorks' component={CollectionOfWorks}/>
          </div>
        </nav>
      </div>
      <Route to='/Article/:id' component={}/>
      <Route to='/Admin/:pageName' component={}/>
      <Route component={NoMatch}/>
    </Switch>
</Router>
```

类似这样的处理结果是不行的，必须要保持路由平行结构，因为内部的路由和外部的路由在逻辑上有冲突

因此要把.home-page抽出来

17.不需要定义Home，直接把某个页面当做首页即可，只是定义路由的事情

18.自己一个人写全栈，一开始的UI可以很烂，只要能分得清每一部分负责什么，数据有哪些即可，把重心放在自己想要研究的部分，比如React，Redux等，最后再来搞UI美化

19.弄懂热加载 。 直出的时候很有必要: http://shepherdwind.com/2017/02/07/webpack-hmr-principle/

20.路由，一定要把其中一个组件当做打开时默认显示的，而不一定要结构齐全：

```jsx harmony
<div className="admin-page">
<div className="sildebar-wrap">
  <Sildebar />
</div>
<div className="admin-wrap">
  <Route path='/Admin' component={AdminArticlePost}/>
  <Route path='/Admin/Account' component={AdminAccount}/>
  <Route path='/Admin/ArticleTag' component={AdminArticleTag}/>
  <Route path='/Admin/Chatroom' component={AdminChatroom}/>
  <Route path='/Admin/Comment' component={AdminComment}/>
  <Route path='/Admin/Works' component={AdminWorks}/>
</div>
</div>
```

21.

```js
const query = global.db.query

class CategoryModel {
  static async get (id) {
    const sql = typeof id === 'undefined' ?
      `SELECT * FROM ArticleType;` :
      `SELECT * FROM ArticleType WHERE id = ${id}`
    const ret = await query(sql)
    return ret
  }
}

module.exports = CategoryModel
```

会出错，db undifined

而

```js
class CategoryModel {
  static async get (id) {
    const sql = typeof id === 'undefined' ?
      `SELECT * FROM ArticleType;` :
      `SELECT * FROM ArticleType WHERE id = ${id}`
    const ret = await global.db.query(sql)
    return ret
  }
}

module.exports = CategoryModel
```

没问题

22.现在对于redux整套流程不是很懂，先从其中一个组件出发，搞定了其中一个，其它就很容易了

23.对于什么开发环境，生产环境的先不要理，日后再搞

24.前后端同构时，热更新的问题

25.尝试用fetch

26.ajax https://daveceddia.com/ajax-requests-in-react/

https://www.youtube.com/watch?v=SX5HkOP-LWs

27.defaultProps和propTypes必须，这样能减少bug

28.koa参考

https://github.com/chrisveness/koa-sample-web-app-api-mysql/tree/master/models

29.分页的优化

30.同构时路由的问题：

+ 若是展示页面用BrowserRouter, Admin用HashRouter，因为hash是基于/#/所以展示页面受影响

+ 若是用Catch-All方法，即后端用get(*)处理，则刷新时，会乱

+ 只能后端一一对应

31.同构后，componentDidMount中又发ajax请求重复渲染的问题

32.同构后，从首页点击文章标题跳转到文章页时，会先渲染出首页的框架

33.把cms分离出来，不用react

34.命名规范：除特殊规定以为，长单词中每个单词间用 _ 分割

35.一开始做项目的时候，若什么都不懂，不用着急，先把效果实现了，再深入去研究。对于某个部分不懂的，先不用理，把重点先做好

36.对于再复杂的应用，实际上还是对原生的变形。比如redux-saga,实际上是把ajax的几个步骤分离了。

37.json格式 与 www-form-url

38.file-loader 中图片路径问题

options: {
              name: '../dist/img/[name].[ext]'
            }
            
39.图片会超出父元素的边框的原因是，margin不包含在border-sizing里面, 而宽度又无法自适应

40.学习的新姿势：代码可以看不懂，先跟着官网或者github的例子实现了，再去研究其内部细节，这样会高效很多

41.cors:

http://stylechen.com/options-cors.html

http://www.hellojm.cn/2017/12/05/cors-detail/

https://stackoverflow.com/questions/32500073/request-header-field-access-control-allow-headers-is-not-allowed-by-itself-in-pr/32501365

https://www.html5rocks.com/en/tutorials/cors/

42.不能像官网那样设置：

{
  "plugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
  ]
}

42.跨域的响应，每次都要带上Allow响应头：

app.use(function (ctx, next) {
  if (ctx.method.toLowerCase() === 'options' && ctx.url === '/upload') {
    ctx.set('Access-Control-Allow-Origin', config.ACCESS_CONTROL_ALLOW_ORIGIN)
    ctx.set('Access-Control-Allow-Method', config.ACCESS_CONTROL_ALLOW_METHOD)
    ctx.set('Access-Control-Allow-Headers', config.ACCESS_CONTROL_ALLOW_HEADERS)
    ctx.status = 204
  }
  if (ctx.method.toLowerCase() === 'post' && ctx.url === '/upload') {
    const file = ctx.request.body.files.file
    const reader = fs.createReadStream(file.path)
    const stream = fs.createWriteStream(path.join(path.join(__dirname, './upload'), file.name))
    reader.pipe(stream)
    ctx.set('Access-Control-Allow-Origin', config.ACCESS_CONTROL_ALLOW_ORIGIN)
    ctx.set('Access-Control-Allow-Method', config.ACCESS_CONTROL_ALLOW_METHOD)
    ctx.set('Access-Control-Allow-Headers', config.ACCESS_CONTROL_ALLOW_HEADERS)
    ctx.status = 204
  }
})

koa-router allowedMethods的真正用法：

https://www.jianshu.com/p/5b3acded5182

https://github.com/zadzbw/koa2-cors


43.暂时先不理demo，用原来的先

44.git 提交

https://gist.github.com/mindplace/b4b094157d7a3be6afd2c96370d39fad

45. git brance 之间是如何整合的

46.nginx中的设置

https://www.cnblogs.com/94cool/p/3927084.html

https://www.codecasts.com/series/deploy-a-website-from-scratch/episodes/6

https://segmentfault.com/a/1190000009725518

https://cloud.tencent.com/document/product/400/4143

https://ketao1989.github.io/2015/08/30/nginx-proxy-configure-and-sduty/

47.source 结构+数据 前确保存在表 

48.生产环境中，应该把client编译的过程放在生产环境去做，而在服务器上是直接启动nodejs即可

49.etag的具体选择：图片不用etag

50. createReadStream 和 readFile 区别：

http://www.codingdefined.com/2014/07/readfile-vs-createreadstream-in-nodejs.html

51.协商缓存中客户端字段的细节：在强缓存未失效的时候是不会发去客户端，而只有在第一次强缓存失效的时候才会触发

52.使用CDN, 已有优惠券

https://blog.csdn.net/u010472499/article/details/54290505

ping.chinaz.com

https://segmentfault.com/a/1190000010631404

https://cloud.tencent.com/document/product/228/3236

53.图片优化

54.安全组坑

https://blog.52itstyle.com/archives/957/

55.密钥登录坑：

之前已有公私钥，

https://help.aliyun.com/document_detail/51794.html?spm=5176.11065259.1996646101.searchclickresult.4249417fULZyS8

导入后，

https://stackoverflow.com/questions/20840012/ssh-remote-host-identification-has-changed

若电脑有公私钥，最后都同一用公私钥登录，别再搞账密登录了，巨坑。。又不懂bug

56.weipack主要用于前端，开启webpack-server可以在开始的时候很方便，而数据则只要开启的后端服务器端口不同即可，同构的问题，其实可以设置为：在开发阶段数据还是同构ajax拉取，毕竟同构代码量不大

57.componentWillMount 要干嘛

https://llp0574.github.io/2017/12/20/creating-accessible-react-apps/

58.gzip

https://zhuanlan.zhihu.com/p/25867772

https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a

https://juejin.im/entry/58709b9a128fe1006b29cd5d

59.不用commonsChunk

https://news.aotu.io/a/5a7b53d3d50eee0042c20c0c?utm_medium=lite02_web&utm_source=aotu_io

60.三份webpack

https://juejin.im/entry/59c346776fb9a00a664a2aa1

61.

  'remark': 'Remark',
  'remark-react': 'ReactReact'
  
  
  占用太大， 压缩后都300多K，则自己放cdn
  
62.雪碧图  只适合 background-image


https://github.com/youzan/sprite-loader

https://github.com/glebmachine/postcss-easysprites

63.图片的选择

https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?hl=zh-cn

64.只merge分支的一部分

http://jasonrudolph.com/blog/2009/02/25/git-tip-how-to-merge-specific-files-from-another-branch/

65.不要把文件的名称前缀加上 . ，很容易被系统找不到， 如 .answers.md

66.版本控制：

基本的两个branch：development 和 production

一切在development中开发，没问题后，切换到test分支, 然后把development中重要的文件夹merge，之后测试没问题，再切换到productio，然后merger后，push到github，再在服务器上更新

所有的文件在production分支和服务器中不做修改，修改都在development中搞定

而client中负责的是把dev环境的开发，以及prod环境的build，产出dist文件夹

在test环境或者说线上环境，无需去build，唯一的职责是pull，然后restart服务器

67.下拉滚动：

https://juejin.im/post/58b545f0b123db005734634e

68.使用js库

http://underscorejs.org/#

69.saga中

export function* getArticleLinkListFlow () {
  while (true) {
    let req = yield take(ArticleLinkListActionTypes.GET_ARTICLE_LINK_LIST)
    let res = yield call(getArticleLinkList)
    if (res.retCode === 1) {
      yield put({
        type: ArticleLinkListActionTypes.RESPONSE_ARTICLE_LINK_LIST,
        data: res.data
      })
    } else {

    }
  }
}

即使req没用到，但有了它，才能该停止while无限循环

70.文章详情页中图片的链接来自另一个服务器，只能在remark-react调用之前，用正则替换掉![]()中的东西，而数据库中的不变，仍是相对地址，这样可以保证可扩展性

71.假如select中有初始值，需要通过saga处指定

```js
export function* getArticleLinkListFlow () {
  while (true) {
    let req = yield take(ArticleLinkListActionTypes.GET_ARTICLE_LINK_LIST)
    let res = yield call(getArticleLinkList)
    if (res.retCode === 1) {
      yield put({
        type: ArticleLinkListActionTypes.RESPONSE_ARTICLE_LINK_LIST,
        data: res.data
      })
      yield put({
        type: ArticleActionTypes.UPDATE_PREVID,
        prevId: res.data[0].id
      })
      yield put({
        type: ArticleActionTypes.UPDATE_NEXTID,
        nextId: res.data[1].id
      })
    } else {

    }
  }
}
```

72.再次认识react前后端同构：在开发环境中，依然需要去写ajax接口，比如文章详情页，这样是利于开发环境中的方便，此接口只存在于开发环境；而上线时，采用后端直出

73.将不常边的数据列表缓存在客户端，比如分类列表，文章列表

74.下拉的判断条件：

下拉文字框出现的可视区，即距离可视区top边的距离小于可视区的高度。getBoundingClientRect().top < window.screen.height

75.最佳博文和最新文章不能用同一个initialState, 不然会数据叠加

76.网站网络分析：

http://www.360doc.com/content/14/1201/16/7669533_429603672.shtml

https://blog.csdn.net/chaosju/article/details/39694609

https://blog.csdn.net/hnjb5873/article/details/48657001

https://blog.csdn.net/xukai871105/article/details/31008635

https://www.cnblogs.com/studyofadeerlet/p/7485298.html

https://www.cnblogs.com/cy568searchx/p/3711670.html

https://blog.csdn.net/xukai871105/article/details/31008635

77.如果使用安装包，则会因为开发与线上环境的问题多了很多配置文件，使得项目结构臃肿，因此更偏向于用插件

https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md

https://blog.csdn.net/applebomb/article/details/54918659

78.debounce 

https://davidwalsh.name/javascript-debounce-function

https://github.com/jashkenas/underscore/blob/master/underscore.js

https://yoyoyohamapi.gitbooks.io/undersercore-analysis/content/function/throttle%E4%B8%8Edebounce.html

79.判断Global对象是否为window，为window则当前脚本运行在浏览器中。

80.koa middleware

https://github.com/koajs/koa/blob/master/docs/guide.md

81.同构的时候一定要将直出页面的url和ajax请求分开，比如重定向，比如刷新页面

82.一定要把cms与官网分开端口去处理，这样会简单很多，并且在安全上也简单很多

83.token的疑惑：验证身份的token 以及 csrftoken

84.三次握手不是两次的原因

https://github.com/jawil/blog/issues/14

85.同构时，开发环境中，每次都要编译，效率慢，应该去从为什么效率慢的原因入手，根本编译，但是编译避免不了，则应该去从加快编译速度的角度入手

86.http2.0

http://www.alloyteam.com/2015/03/http2-0-di-qi-miao-ri-chang/

http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/

https://developers.google.com/web/fundamentals/performance/http2/

https://zhuanlan.zhihu.com/p/29609078

http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html

87.开发环境，依赖分离，缓存

https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693

https://blog.csdn.net/qq_26733915/article/details/79458533

https://webpack.js.org/plugins/split-chunks-plugin/

https://medium.com/ottofellercom/0-100-in-two-seconds-speed-up-webpack-465de691ed4a

88.若后端重定向，302，登录后结构显示不正常，而手动改变url则可以，hashRouter原理是？？

若是前端控制路由的话，是不能用重定向的，因为重定向会重新请求页面，有可能把之前的记录刷新掉，不过还是要看前端路由的原理是什么

89.

接口文档与测试： https://www.eolinker.com

后端权限管理：https://leancloud.cn/dashboard/applist.html#/apps

认证：http://www.cnblogs.com/xiekeli/p/5607107.html

https://github.com/Remchi/reddice

90.nodeclub

http://limuzhi.com/2016/08/28/nodejs&&express%E5%AE%9E%E8%B7%B5-nodeclub%E9%A1%B9%E7%9B%AE%E5%88%86%E6%9E%90/

91.表单登录的几种方式

form

ajax

form + ajax (阻止submit)

92.一开始建博客的时候什么都不懂，则需要借助别人现成的，来搭建一个基本的体系

到了后面，熟了各种库，则可以自己去任何搭配，比如换掉saga

93. jwt 

reddice

https://www.jianshu.com/p/576dbf44b2ae

https://jwt.io/introduction/

https://github.com/auth0/node-jsonwebtoken

94.publicPath ， contentBase，的区别  

95. 静态文件目录一定要设置在dist中，而取文件则是在基于dist去取，即静态文件目录为： /js/index.js  而非/dist/js/index.js, 这样才不会暴露根目录

96. Link 无法进行跨域的跳转

97. passport.js 

https://blog.risingstack.com/node-hero-node-js-authentication-passport-js/

http://mherman.org/blog/2018/01/02/user-authentication-with-passport-and-koa/#.Wupn39OFOL_

98. 全栈学习资料

https://codeburst.io/100-free-resources-to-learn-full-stack-web-development-5b40e0bdf5f2

99. csrf

https://blog.techbridge.cc/2017/02/25/csrf-introduction/

https://segmentfault.com/a/1190000003716037?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io

100. 还没能力研究webpack-dev-middleware，不知道热更新和其内置express的原理是如何的，因此无法将express去除

理想情况应该是自己的koa服务器有能力实现webpack编译以及热更新，而无需要express

101. js-md5: input is invalid type

102. react-router 跳转方式

https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router

https://www.oudahe.com/p/46366/

103. 请求头中有Cache-Control: no-cache

https://segmentfault.com/q/1010000002578217

104. 二级域名和二级目录

http://lusongsong.com/reed/85.html

105. 邮件服务

https://outlook.live.com/owa/?path=/options/popandimap

https://www.jianshu.com/p/ee200a67853c

https://nodemailer.com/about/

https://www.jianshu.com/p/b9b2fef0116b

106. trieTree

https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/06.09.md

https://github.com/LeuisKen/leuisken.github.io/issues/2

https://blog.csdn.net/ts173383201/article/details/7858598

107. promise 实现

http://www.html-js.com/article/JavaScript-tips-on-how-to-implement-a-ECMAScript-6-promise-patch

108. 为什么export default 出来的东西， 若用require需要加上default??

109. mock

https://blog.csdn.net/qq_22844483/article/details/78697226

https://github.com/nuysoft/Mock/wiki/Syntax-Specification

110. 前端算法

https://www.zhihu.com/question/63439215

https://github.com/LeuisKen/leuisken.github.io/issues/2

http://efe.baidu.com/blog/talk-about-sort-in-front-end/

https://juejin.im/post/5958bac35188250d892f5c91

https://cloud.tencent.com/developer/article/1005459

https://juejin.im/post/5aa8a07cf265da238a3022a4

111. koa出来的app， 在module.exports的时候是导出app 还是  app.listen?  现在是后者可行，前者不可行

112. webpack打包后css文件中嵌入了js的问题

module.exports = (__webpack_require__(/*! dll-reference remark */ "dll-reference remark"))(784);module.exports = (__webpack_require__(/*! dll-reference remark */ "dll-reference remark"))(679);/* sprite-loader-enable */
.article-page {
  min-width: 320px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
}

113. postMessage

https://juejin.im/post/590c3983ac502e006531df11

https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

114. symbol

https://www.jianshu.com/p/5ac75a16e442

http://es6.ruanyifeng.com/#docs/symbol#%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%A8%A1%E5%9D%97%E7%9A%84-Singleton-%E6%A8%A1%E5%BC%8F

115. 按值传递

https://github.com/mqyqingfeng/Blog/issues/10

116. 打点统计

https://lucien-x.github.io/2017/08/20/%E9%80%9A%E8%BF%87%E5%AE%9E%E4%BE%8B%E5%8C%96img%E5%AF%B9%E8%B1%A1%E8%BF%9B%E8%A1%8C%E6%89%93%E7%82%B9%E7%BB%9F%E8%AE%A1/

117. property 与 arrtibute 

https://www.cnblogs.com/elcarim5efil/p/4698980.html

118. 算法复杂度

https://blog.csdn.net/booirror/article/details/7707551/

119. 需要问的问题：

120. 数据结构(二叉树/图/散列/链表)只能当做demo写

https://blog.csdn.net/feicongcong/article/details/78282657

https://zhuanlan.zhihu.com/p/25523323

121. 斐波那契数列

http://www.thisjs.com/2017/09/21/my-view-of-fibonacci/

http://www.cnblogs.com/varlxj/p/draw_FibonacciSequence.html

122. 尾递归

http://imweb.io/topic/5a244260a192c3b460fce275

http://imweb.io/topic/584d33049be501ba17b10aaf

http://es6.ruanyifeng.com/#docs/function#%E5%B0%BE%E8%B0%83%E7%94%A8%E4%BC%98%E5%8C%96

123. 摇摆树

https://blog.csdn.net/xiongzhengxiang/article/details/7057119

http://www.wukai.me/2015/10/04/canvas-trees/

124. gbk，字符编码

http://js8.in/2009/12/11/%E5%AF%B9%E5%BC%95%E7%94%A8%E5%A4%96%E9%83%A8javascript%E9%A1%B5%E9%9D%A2%E7%BC%96%E7%A0%81%E5%A4%84%E7%90%86/
http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html

125. 深入浅出事件循环机制

https://zhuanlan.zhihu.com/p/26229293

https://juejin.im/post/58cf180b0ce4630057d6727c

126. 语义化

https://segmentfault.com/a/1190000002695791

127.Article页面  是否要直出css，因为直出html和数据后再去请求css会出现渲染差

128.圣杯、双飞翼

https://segmentfault.com/a/1190000013301463

https://juejin.im/post/5a09570c6fb9a045167caf21

129. git

https://www.jianshu.com/p/6f3324e4f335

130. 解決 Universal 架構的 CSS Modules 問題

http://blog.amowu.com/2015/12/how-to-render-css-modules-in-universal-server.html

131.css modules

https://github.com/camsong/blog/issues/5

http://www.alloyteam.com/2017/03/getting-started-with-css-modules-and-react-in-practice/

http://www.ruanyifeng.com/blog/2016/06/css_modules.html

https://github.com/css-modules/postcss-icss-values

132. prefetch , preload, dns-prefetch

http://www.alloyteam.com/2016/05/preload-what-is-it-good-for-part1/

https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ

http://www.alloyteam.com/2015/10/prefetching-preloading-prebrowsing/

133. 图片预加载

http://web.jobbole.com/86785/

134. 图片优化

https://www.zhihu.com/question/31155574

https://array_huang.coding.me/webpack-book/chapter1/webpack-image-and-font.html

135. 转webp

https://css-tricks.com/using-webp-images/

http://web.jobbole.com/87103/

https://www.jianshu.com/p/ff43ef34348e

136. webpack多个文件入口

https://juejin.im/post/5a534cb9f265da3e4674ebeb

137.递归文件夹中的文件

https://segmentfault.com/q/1010000008827322/a-1020000008827644

138.游戏精灵图

https://davidwalsh.name/street-fighter

texturepacker 其中算法选择 polygon

https://www.ibm.com/developerworks/cn/web/wa-html5-game8/index.html

139.fps计算

https://www.cnblogs.com/coco1s/p/8029582.html

140.DNS

https://www.zhihu.com/question/23042131

https://blog.csdn.net/crazw/article/details/8986504

http://blog.51cto.com/369369/812889

https://www.zhihu.com/question/34873227

https://my.oschina.net/sudujuncom/blog/874699

141.按需加载

深入浅出webpack > 4-12

webpack官网 > dynamic import [https://webpack.js.org/api/module-methods/#import-]

142. socket.io与webpack

https://github.com/webpack/webpack-dev-server/issues/283

143. vue mvvm

https://github.com/DMQ/mvvm/tree/es6#_2

144. function bind syntax

https://babeljs.io/blog/2015/05/14/function-bind

http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html

http://es6.ruanyifeng.com/#docs/function#%E5%8F%8C%E5%86%92%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6

145 react生命周期

https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

146 react原理

https://github.com/hujiulong/blog/issues/7

147 正则 

https://github.com/jawil/blog/issues/20

148 github相关:

如何正确接收 GitHub 的消息邮件: https://github.com/cssmagic/blog/issues/49

http://ruanyifeng.com/blog/2016/01/commit_message_change_log.html

149 redux-thunk

https://www.rails365.net/movies/redux-ru-men-jiao-cheng-15-redux-thunk-shi-jian-fa-song-ajax-qing-qiu-part

150 restful:

http://www.ruanyifeng.com/blog/2011/09/restful.html

http://www.ruanyifeng.com/blog/2014/05/restful_api.html

151. auth 2.0

http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html

152 er图与sql互换

http://www.voidcn.com/article/p-qonzqqon-pt.html

153 数据库设计——评论回复功能

http://www.voidcn.com/article/p-ylvjsfdc-bha.html

https://blog.csdn.net/lm1622/article/details/77950133

154 webstorm 内存问题

https://www.cnblogs.com/demyouyang/p/5838169.html

155 同源策略: 

http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html

156. csp

http://www.ruanyifeng.com/blog/2016/09/csp.html

https://imququ.com/post/content-security-policy-reference.html

157. redux

http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

158 纯函数

http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

https://github.com/joeyguo/blog/issues/10

159 函数组合

https://github.com/joeyguo/blog/issues/10

160 nodejs modules

https://segmentfault.com/a/1190000015139548

http://www.ruanyifeng.com/blog/2015/05/require.html

161 axios 

https://zhuanlan.zhihu.com/p/34192569

https://blog.csdn.net/sjn0503/article/details/74729300

162 cmake

https://www.jianshu.com/p/1ec2b5602b03

https://blog.csdn.net/qq_36355662/article/details/80059432

https://blog.csdn.net/gaowu959/article/details/78484725

http://www.voidcn.com/article/p-gbiznhrb-ru.html

163 mysql 异常启动

https://blog.csdn.net/u013700358/article/details/80306560

https://blog.csdn.net/tianlesoftware/article/details/7028733

164 vertical-align

https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/

165 单点登录:

https://www.cnblogs.com/ywlaker/p/6113927.html

https://blog.csdn.net/javaloveiphone/article/details/52439613

https://bestqliang.com/2018/06/02/%E4%BD%BF%E7%94%A8jwt%E5%AE%8C%E6%88%90sso%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95/

https://juejin.im/post/5b3b870a5188251ac85826b8

166 用户权限: 

https://cnodejs.org/topic/551802d3687c387d2f5b2906


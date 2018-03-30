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

43.暂时先不理demo，用原来的先

44.git 提交

https://gist.github.com/mindplace/b4b094157d7a3be6afd2c96370d39fad

45. git brance 之间是如何整合的

46.nginx中的设置

https://www.cnblogs.com/94cool/p/3927084.html

https://www.codecasts.com/series/deploy-a-website-from-scratch/episodes/6

https://segmentfault.com/a/1190000009725518

https://cloud.tencent.com/document/product/400/4143

47.source 结构+数据 前确保存在表 

48.生产环境中，应该把client编译的过程放在生产环境去做，而在服务器上是直接启动nodejs即可

49.etag的具体选择：图片不用etag

50. createReadStream 和 readFile 区别：

http://www.codingdefined.com/2014/07/readfile-vs-createreadstream-in-nodejs.html

51.协商缓存中客户端字段的细节：在强缓存未失效的时候是不会发去客户端，而只有在第一次强缓存失效的时候才会触发

52.使用CDN, 已有优惠券

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
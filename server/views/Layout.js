// === DNS：域名系统, 输入url后会通过DNS解析出IP地址 === //

// === 1 域名解析原理： === //

// === 1.1 递归查询: 客户端到本地DNS服务器 === //
// === 1.1.a 输入 https://www.hellojm.cn, 检查本地hosts文件 === //
// === 1.1.b 没有则查找本地dns解析器缓存 === //
// === 1.1.c 没有则查找本地dns服务器[tcp/ip参数中设置的首选dns服务器，], 若在本地配置资源区域中则返回，具有权威性 === //
// === 1.1.d 不由本地DNS服务器区域解析，但该服务器已缓存了此网址映射关系，则返回IP地址映射，不具有权威性 === //

// === 1.2 迭代查询：DNS服务器之间就是的交互查询 === //
// === 1.2.a 若递归查询后不行，则根据本地DNS服务器是否设置了转发器来处理。设置了转发则向上一级DNS服务器查找，以此类推，若未设置转发器则向根域名服务器查找： === //
// === 1.2.b 本地DNS服务器查找根域名服务器[13台]，根域名服务器给出相应的顶级域名服务器IP === //
// === 1.2.c 本地DNS服务器查找顶级域名服务器，顶级域名服务器给出相应的权限域名服务器 === //
// === 1.2.d 以此类推，找到后返回 === //

// === 2 域名解析测试： === //
// === 2.1 nslookup命令： === //
// === 2.1.a nslookup domain [dns-server]: 如果没指定dns-server，用系统默认的dns服务器 === //
// === 2.1.b nslookup -qt=type domain [dns-server]: 直接查询返回的是A记录，我们可以指定参数，查询其他记录 === //
// === 2.1.c nslookup –d [其他参数] domain [dns-server]: 只要在查询的时候，加上-d参数，即可查询域名的缓存 === //
// === 2.2 ping 命令 === //

// === 3 dns预取： === //
// === 3.1 告诉浏览器此页面做预取：<meta http-equiv="x-dns-prefetch-control" content="on" />  === //
// === 3.2 告诉浏览器强制dns预取：<link rel="dns-prefetch" href="https://file.hellojm.cn"> === //

if (process.env.NODE_ENV === 'production') {
  exports.Layout = function (content, data, whichPage) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        ${
          whichPage === 'home'
          ? '<meta http-equiv="x-dns-prefetch-control" content="on" />' +
          '<link rel="dns-prefetch" href="https://file.hellojm.cn">'
        : ''}
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="id=edge">
        <meta name="keywords" content="张益铭, 个人博客, 首页, web前端, javaScript,css,html,技术栈">
        <meta name="description" content="张益铭的个人博客，张益铭的技术作品，张益铭的博文">
        <meta name="author" content="张益铭, GarvenZhang">
        <title>张益铭的个人博客</title>
        <link href="/index.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${content}</div>
        <script >
          window.__REDUX_DATA__ = ${JSON.stringify(data)}
        </script>
        <script src="/react.dll.js"></script>
        <script src="/redux.dll.js"></script>
        <script src="/axios.dll.js"></script>
        <script src="/remark.dll.js"></script>
        <script src="/jwt.dll.js"></script>
        <script src="/md5.dll.js"></script>
        <script src="/index.js"></script>
      </body>
      </html>
    `
  }
} else if (process.env.NODE_ENV === 'development') {
  exports.Layout = function (content, data) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta content="width=device-width,initial-scale=1" name="viewport">
        <meta content="id=edge" http-equiv="X-UA-Compatible">
        <meta content="张益铭, 个人博客, 首页, web前端, javaScript,css,html,技术栈" name="keywords">
        <meta content="张益铭的个人博客，张益铭的技术作品，张益铭的博文" name="description">
        <meta content="张益铭, GarvenZhang" name="author">
        <title></title>
        <link href="/index.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${content}</div>
        <script >
          window.__REDUX_DATA__ = ${JSON.stringify(data)}
        </script>
        <script type="text/javascript" src="/index.js"></script>
        </body>
      </html>
    `
  }
}

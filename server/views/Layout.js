if (process.env.NODE_ENV === 'production') {
  exports.Layout = function (content, data) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="id=edge">
        <meta name="keywords" content="张益铭, 个人博客, 首页, web前端, javaScript,css,html,技术栈">
        <meta name="description" content="张益铭的个人博客，张益铭的技术作品，张益铭的博文">
        <meta name="author" content="张益铭, GarvenZhang">
        <title>张益铭的个人博客</title>
        <link href="/css/style.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${content}</div>
        <script >
          window.__REDUX_DATA__ = ${JSON.stringify(data)}
        </script>
        <script src="/js/react.dll.js"></script>
        <script src="/js/redux.dll.js"></script>
        <script src="/js/axios.dll.js"></script>
        <script src="/js/remark.dll.js"></script>
        <script src="/js/jwt.dll.js"></script>
        <script src="/js/md5.dll.js"></script>
        <script type="text/javascript" src="/js/index.js"></script></body>
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
        <link href="/css/style.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${content}</div>
        <script >
          window.__REDUX_DATA__ = ${JSON.stringify(data)}
        </script>
        <script type="text/javascript" src="/js/index.js"></script></body>
        </body>
      </html>
    `
  }
}

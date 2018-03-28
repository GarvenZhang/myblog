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
      <title></title>
      <link href="/dist/css/style.css" rel="stylesheet">
    </head>
    <body>
    <div id="root">${content}</div>
    <script >
      window.__REDUX_DATA__ = ${JSON.stringify(data)}
    </script>
    <script type="text/javascript" src="/dist/js/index.js"></script>
    <script type="text/javascript" src="/dist/js/vendor.js"></script>
    </body>
    </html>
  `
}

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
      <link href="/dist/css/index.css" rel="stylesheet">
    </head>
    <body>
    <div id="root">${content}</div>
    <script >
      window.__REDUX_DATA__ = ${JSON.stringify(data)}
    </script>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-router/4.2.0/react-router.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/4.2.2/react-router-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux-saga/0.16.0/redux-saga.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
    <script src="/dist/js/remark.dll.js"></script>
    <script src="/dist/js/reactRenderer.dll.js"></script>
    <script type="text/javascript" src="/dist/js/index.js"></script>
    </body>
    </html>
  `
}

exports.Layout = function (content, data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="id=edge">
      <title></title>
    <link href="/dist/css/style.css" rel="stylesheet"></head>
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

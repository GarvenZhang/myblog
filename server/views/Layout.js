const config = require('../../config')
const path = require('path')

exports.Layout = htmlConfig => {

  let getHtml = require(path.resolve(__dirname, '../../dist/index/index.html'), 'utf8')
  return getHtml(htmlConfig)

}

// sso
exports.getSsoHtml = (redirectUrl) => {

  let getHtml = require(path.resolve(__dirname, '../../dist/sso/index.html'), 'utf8')
  return getHtml(redirectUrl)

}

// iframe
exports.getIframe = (urlFrom) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="id=edge">
    <title>张益铭的前端小博客 - index - iframe</title>
  </head>
  <body>
  <script >
    window.addEventListener('message', e => {

      if (e.origin !== '${urlFrom}') {
        return
      }

      switch (e.data.type) {
        
        case 'sendAccessToken':
          
          window.localStorage.setItem('access_token', e.data.access_token)
          
          e.source.postMessage({
            type: 'responseSendAccessToken',
            retCode: 1
          }, e.origin)
          
          break

      }
      
    }, false)
  </script>
  </body>
  </html>
`

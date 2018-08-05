// === xss防御之CSP: 用于指定哪些内容可执行, 实质上就是白名单制度。=== //
// === 1 启用方法: === //
// === 1.1 加上头字段 Content-Security-Policy === //
// === 1.2 <meta http-equiv='Content-Security-Polucy' content=''> === //
// === 2 限制选项: === //
// === 2.0 主要: script-src、style-src、img-src、media-src、font-src、object-src、child-src、frame-ancestors、connect-src、worker-src、manifest-src === //
// === 2.1 default-src: 各个选项的默认值, 当同时设置某个单选项和default-sec, 前者会覆盖后者 === //
// === 2.2 frame-ancestors：限制嵌入框架的网页 === //
// === 2.3 base-uri：限制<base#href> === //
// === 2.4 form-action：限制<form#action>=== //
// === 2.5 report-uri: 浏览器会使用POST方法，发送一个JSON对象, 将注入行为报告给指定的uri === //
// === 2.6 connect-src: <a> ping, Fetch, XMLHttpRequest, WebSocket, EventSource. === //
// === 3 选项值: 多个值也可以并列，用空格分隔; 如果不设置某个限制选项，就是默认允许任何值 === //
/*
主机名：example.org，https://example.com:443
路径名：example.org/resources/js/
通配符：*.example.org，*://*.example.com:*（表示任意协议、任意子域名、任意端口）
协议名：https:、data:
关键字'self'：当前域名，需要加引号
关键字'none'：禁止加载任何外部资源，需要加引号
*/
// === 4 script-src/style-src的特殊值: 必须放在单引号里面 === //
/*
'unsafe-inline'：允许执行页面内嵌的<script>标签和事件监听函数
'unsafe-eval'：允许将字符串当作代码执行，比如使用eval、setTimeout、setInterval和Function等函数。
'nonce值'：每次HTTP回应给出一个授权token，页面内嵌脚本必须有这个token，才会执行
'hash值'：列出允许执行的脚本代码的Hash值，页面内嵌脚本的哈希值只有吻合的情况下，才能执行。

<script nonce='xxxx'>
  // code...
</script>

Content-Security-Policy: script-src 'nonce-xxxx'

*/
// === 2.2 用hash: 计算出script标签中内容的值的hash，然后转化为base64放到 sha256- 后面 === //

const crypto = require('crypto')
const config = require('../../config')

const getConnectSrc = () => {

  if (config.ISDEV  || config.ISTEST) {
    return 'connect-src * ;'
  } else if (config.ISPROD) {
    return 'connect-src https://*.hellojm.cn:* ;'
  }

}

const getFrameSrc = () => {

  if (config.ISDEV || config.ISTEST) {
    return "frame-src 'self' * ;"
  } else if (config.ISPROD) {
    return "frame-src 'self' https://*.hellojm.cn:* ;"
  }

}

const getImgSrc = () => {

  let ret = `img-src 'self' https://*.githubusercontent.com`

  if (config.ISDEV || config.ISTEST) {
    ret += ' http://file.localhost.cn'
  } else if (config.ISPROD) {
    ret += ' https://file.hellojm.cn'
  }

  ret += ' data: ;'

  return ret
}

module.exports = function (ctx, str) {

  // 加密
  const hash = crypto.createHash('sha256')
  hash.update(`window.__REDUX_DATA__ = ${str}`)
  const ret = hash.digest('base64')

  const connectSrc = getConnectSrc()
  const frameSrc = getFrameSrc()
  const imgSrc = getImgSrc()
  const defaultSrc = `default-src 'self' https://*.hellojm.cn; script-src 'self' 'sha256-${ret}'; http://api.k780.com `
  const styleSrc = `style-src 'self' 'unsafe-inline';`
  const fontSrc = `font-src 'self' data: ;`

  ctx.set('Content-Security-Policy', defaultSrc + imgSrc + styleSrc + fontSrc + frameSrc + connectSrc)

}


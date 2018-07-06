// === xss防御之CSP: 用于指定哪些内容可执行, 加上头字段 Content-Security-Policy === //
// === 1 默认所有外链来源: default-src  === //
// === 1.1 常用值: 'self' - 本域及子域 === //
// === 2 脚本来源: script-src === //
// === 2.1 用 nonce-: === //
/*

<script nonce='xxxx'>
  // code...
</script>

Content-Security-Policy: script-src 'nonce-xxxx'

*/
// === 2.2 用hash: 计算出script标签中内容的值的hash，然后转化为base64放到 sha256- 后面 === //

const crypto = require('crypto')

module.exports = function (ctx, str) {

  const hash = crypto.createHash('sha256')

  hash.update(str)

  const ret = hash.digest('base64')

  ctx.set('Content-Security-Policy', `default-src 'self' *.hellojm.cn; script-src 'self' 'sha256-${ret}`)

}


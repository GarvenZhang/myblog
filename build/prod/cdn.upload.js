// === 2 CDN:  === //
// === 2.1 原理：内容发布网络, 将源站的静态资源发布到不同的CDN节点中，供节点附近的用户访问[正常来说只是对静态资源进行cdn配置 === //
// === > 正常的web请求过程: (客户端)输入httsp://www.hellojm.cn -> (DNS服务器)解析到对应的IP -> (客户端)访问IP -> (web原始服务器)返回请求结果 === //
// === > cdn加速后的web请求过程: (客户端)输入httsp://www.hellojm.cn -> (DNS服务器)解析到对应的智能dns服务器 -> (智能dns服务器: 由cdn服务器商提供)判断客户端访问哪个节点最近, 返回其IP -> (dns服务器)返回收到的IP -> (客户端)请求最近节点的IP -> (最近节点服务器)返回请求结果 === //
// === 2.2 分类: === //
// === 2.2.1 按内容: === //
// === > 网页加速: (WEB服务器源站)拷贝HTML/CSS/JS/IMG这些静态资源 -> (CDN边缘缓存服务器)存储副本 === //
// === > 流媒体加速: (客户端)上传mp4等视频文件 -> (流媒体服务器)切片 -> (文件存储服务器)存储 plist.xml/1.ts/2.ts/... 切片后的文件 : 加密切片后的文件可维护产权, 切分为多个可减少请求压力, 因为不用全部加载而是按需加载 === //
// === > 大文件加速: 将 安装包/补丁/压缩包 等固定不变又很大的文件放到cdn服务器 === //
// === > 应用协议加速: === //
// === 2.2.2 按推送类型: === //
// === > 主动推送: (web服务器源站)分发内容至节点 -> (客户端)通过智能dns服务器访问就近节点 === //
// === > 被动获取: (客户端)访问https://www.hellojm.cn, 智能dns服务器引导其到就近节点 -> (就近节点)发现无对应的数据, 向源站获取数据 -> (web源站服务器)返回给镜像服务器, 即就近节点 -> (就近节点)返回数据给客户端 : 第一个用户访问是无加速效果的, 之后才有 === //
// === 2.3 应用场景: === //
// === 2.3.1 网站服务的客户群体从独立区域扩展到全国, 而自身服务器不足以覆盖全网用户, 导致部分地区用户访问速度慢 === //
// === 2.3.2 网站已经实现静态动态资源分离, 且静态资源服务器能力达到上限, 需要通过增加服务器硬件设备才能解决问题 === //
// === 2.3.3 网站频繁遭到DDos攻击, CC攻击, DNS劫持 === //
// === 2.3.4 网站用户扩多个ISP(电信/联通/移动/铁通/长城), 而自身服务器在其中一个机房 === //
// === 2.4 cdn命中率: 若成功使用到了就近节点上的缓存而免于请求源站的文件, 即为命中 === //
// === 2.4.1 计算: === //
/*
          10个请求              3个请求
  客户端 -------------> CDN ----------------> 源站

  命中率: (10 - 3) / 10 = 70%

*/
// === 2.5 缓存策略：一般通过Cache-Control: max-age来设置cdn边缘节点数据缓存时间，过期则向源站发出回源请求 === //
// === 2.6 优点：=== //
// === > 跨运营商，跨地域，大大减低了延时 === //
// === > 大部分请求在CDN边缘节点完成，CDN起到了分流作用，减轻了源站的负载 === //
// === 2.7 缺点： === //
// === > 若网站更新时CDN节点上的数据无及时更新，浏览器 Ctrl+F5 也没用 === //
// === > 若缓存时间不合理，过长会导致数据更新时间慢，过短会增大回源率，反而增大了延时 === //
// === 2.8 实现: === //
// === 2.8.1 七牛 -> 新建存储空间 -> 内容管理 === //
// === 2.8.2 根据官网sdk配置: cdn.upload.js === //
// === 2.8.3 修改webpack.config.output.publicPath为cdn提供的前缀 === //
// === 2.9 检测：ping.chinaz.com 若同一个url在不同地区解析出不同IP，则配置成功 / 或者chrome中响应头的X-Cache有HIT为命中 CDN缓存， 为MISS为 未命中 === //
// === 2.10 缓存刷新：在CDN服务提供商处强制缓存刷新 === //

const qiniu = require('qiniu')
const fs = require('fs')
const path = require('path')

const cdnConfig = require('../../server/auth/config').CDN

const {
  ak, sk, bucket
} = cdnConfig

const mac = new qiniu.auth.digest.Mac(ak, sk)

const config = new qiniu.conf.Config()
config.zone = qiniu.zone.Zone_z0

const doUpload = (key, file) => {
  const options = {
    scope: bucket + ':' + key
  }
  const formUploader = new qiniu.form_up.FormUploader(config)
  const putExtra = new qiniu.form_up.PutExtra()
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  return new Promise((resolve, reject) => {
    formUploader.putFile(uploadToken, key, file, putExtra, (err, body, info) => {
      if (err) {
        return reject(err)
      }
      if (info.statusCode === 200) {
        resolve(body)
      } else {
        reject(body)
      }
    })
  })
}

const publicPath = path.join(__dirname, '../../dist')

// publicPath/resource/client/...
const uploadAll = (dir, prefix) => {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const key = prefix ? `${prefix}/${file}` : file
    if (fs.lstatSync(filePath).isDirectory()) {
      return uploadAll(filePath, key)
    }
    doUpload(key, filePath)
      .then(resp => console.log(resp))
      .catch(err => console.error(err))
  })
}

uploadAll(publicPath)

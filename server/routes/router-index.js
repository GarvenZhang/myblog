const Router = require('koa-router')
const auth = require('../auth/auth')


// === RESTFUL架构: representational state transfer, (资源)表现层状态转化 === //
// === 1 核心概念: === //
// === 1.1 资源: 网络上的一个实体, 如一段文本, 一张图片, 一首歌等。每种资源对应一个特定的URI === //
// === 1.2 表现层: 资源 具体呈现出来的形式，如文本可以用txt格式表示，也可用html格式，xml格式等。在请求头信息中用 Accept 和 Content-Type 字段来指定对表现层的描述 === //
// === 1.3 状态转化: 客户端通过 GET(获取资源)、POST(新建/更新资源)、PUT(更新资源)、DELETE(删除资源)来让服务器发生状态转化 === //
// === 2 误区: === //
// === 2.1 URI中包含动词: 资源是一个实体，只能为名词，动词应放在HTTP协议中 === //
/*
// 从账户1向账户2汇款500元

错误: POST /account/1/transfer/500/to/2

正确: 把动词 transfer 改为 transaction

POST /transaction HTTP/1.1
Host: 127.0.0.1

from=1&to=2&amount=500.00

*/
// === 2.2 URI中加入版本号: 不同的版本，可以理解成同一种资源的不同表现形式，所以应该采用同一个URI。版本号可以在HTTP请求头信息的Accept字段中进行区分 === //
/*

错误: https://www.hellojm.cn/api/1.0/foo

正确: Accept: application/hellojm.cn.v1+json

*/
// === 3 restful api设计细节: === //
// === 3.1 api与用户的通信总使用https协议 === //
// === 3.2 尽量将api部署在专用域名下: https://api.example.com, 若确定api不会有进一步扩展，可放在主域名下: https://example.com/api/ === //
// === 3.3 api版本号放入url: https://api.example.com/v1/, 另一做法是将版本号放入http头信息中，但不如url中方便直观 === //
// === 3.4 url中不能有动词只能有名次，且与数据库中表名对应，为复数形式 === //
// === 3.5 动词: === //
// === 3.5.a GET -> SELECT -> 从服务器去取资源 === //
// === 3.5.b POST -> CREATE -> 在服务器新建资源 === //
// === 3.5.c PUT -> UPDATE -> 在服务器更新资源 === //
// === 3.5.d PATCH -> UPDATE -> 在服务器更新资源 === //
// === 3.5.e DELETE -> DELETE -> 从服务器删除资源 === //
// === 3.5.f HEAD -> 获取资源的元数据 === //
// === 3.5.g OPTIONS -> 获取信息, 关于资源的哪些属性是客户端可改变的 === //
// === 3.6 过滤信息: API应该提供参数，过滤返回结果。如?page=2&per_page=100：指定第几页，以及每页的记录数 === //
// === 3.6.1 参数的设计允许存在冗余，即允许API路径和URL参数偶尔有重复。比如，GET /zoo/ID/animals 与 GET /animals?zoo_id=ID 的含义是相同的 === //
// === 3.7 状态码: 服务器向用户返回的状态码和提示信息 === //
/*

200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
204 NO CONTENT - [DELETE]：用户删除数据成功。
400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。
502 Bad Gateway - [*]作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应
503 Service Unavailable - [*]服务器目前无法使用(由于超载或停机维护)
504 Gateway Time-out - [*]服务器作为网关或代理，但是没有及时从上游服务器收到请求
505 HTTP Version not supported - [*]服务器不支持请求中所用的 HTTP 协议版本

*/
// === 3.8 错误处理: 如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可 === //
/*

{
    error: "Invalid API key"
}

*/
// === 3.9 API的身份认证应该使用OAuth 2.0框架 === //

const router = new Router()

// 直出页面
router.get('/', require('../views/server-render').index)
router.get('/article/:id', require('../views/server-render').article)
router.get('/bestlist', require('../views/server-render').best)
router.get('/category', require('../views/server-render').category)
router.get('/search', require('../views/server-render').search)
router.get('/iframe', require('../views/server-render').iframe)

// storage缓存
router.get('/api/index/storage', require('../controller/localStorage').get)

// 标签
router.get('/api/category', require('../controller/tag').get)
router.delete('/api/category', require('../controller/tag').del)
router.post('/api/category', require('../controller/tag').add)

// 文章
router.get('/api/article/latestlist', require('../controller/article').getLatest)
router.get('/api/article/bestlist', require('../controller/article').getBest)
router.get('/api/article/linklist', require('../controller/article').getLink)
router.get('/api/article', require('../controller/article').getArticle)
router.post('/api/article', require('../controller/article').add)
router.delete('/api/article', require('../controller/article').del)
router.put('/api/article', require('../controller/article').update)

router.get('/api/searchlist', require('../controller/article').getSearchList)

// user
router.get('/api/user', auth(0, 1), require('../controller/user').get)

module.exports = router.routes()

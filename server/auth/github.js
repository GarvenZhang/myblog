// === OAuth 2.0: === //
// === 1 思路流程: === //
/*

  _____________
  |            |   Authorization Request: 用户打开客户端以后，客户端要求用户给予授权    _____________
  |            |  ------------------------------------------------------------->  | Resource   |
  |            |  <-------------------------------------------------------------  |   Owner    |
  |            |   Authorization Grant: 用户同意给予客户端授权                       |____________|
  |            |
  |            |
  |            |   Authorization Grant: 客户端使用获得的授权向认证服务器申请令牌        ________________
  |            |  ------------------------------------------------------------->  | Authorization |
  |            |  <-------------------------------------------------------------  |   Server      |
  |            |   Access Token: 认证服务器对客户单进行认证后，发放令牌                |_______________|
  |            |
  |   Client   |
  |            |
  |            |
  |            |
  |            |   Access Token: 客户端使用令牌，向资源服务器申请获取资源              _____________
  |            |  -------------------------------------------------------------> | Resource   |
  |            |  <------------------------------------------------------------- |  Server    |
  |            |   Protected Resource: 资源服务器确认令牌，同意向客户端开发资源        |____________|
  |            |
  |____________|

*/

// === 2 关键: 客户端的授权方式 === //
// === 2.1 授权码模式: 通过客户端的后台服务器，与"服务提供商"的认证服务器进行互动 === //
/*

  ____________
  |  Resource |
  |   Owner   |
  |___________|
        ^
        | 2 User authenticates
        |
  ____________
  |           |
  |           |  1 Client Identifier & Redirection URI: 用户访问客户端，后者将前者导向认证服务器
  |           | -------------------------------------------------------------------->   ____________________
  |___User____|  2 User authenticates: 用户选择是否给予客户端授权                          |                   |
  |           | -------------------------------------------------------------------->  |   Authorization   |
  |   Agent   |  3 Authorization code: 假设用户给予授权，认证服务器将用户导向客户端事先指定    |                   |
  |           |     的"重定向URI"（redirection URI），同时附上一个授权码                    |                   |
  |___________| <--------------------------------------------------------------------  |        Server     |
      ^      |                                                                         |___________________|
      |      |                                                                              ^       |
1 Client     |                                                                              |       |
Identifier & | 3 Authorization code                                                         |       |
Redirection  |                                                                              |       |
URI          |                                                                              |       |
      |      v                                                                              |       |
  ____________                                                                              |       |
  |           |                                                                             |       |
  |   Client  | 4 Authorization Code & Redirection URI: 客户端收到授权码，附上早先的"重         |       |
  |           | 定向URI"，向认证服务器申请令牌。这一步是在客户端的后台的服务器上完成的，对            |       |
  |           | 用户不可见                                                                   |       |
  |           | ----------------------------------------------------------------------------        |
  |___________| <-----------------------------------------------------------------------------------
                5 Access Token(w/ optional refresh Token): 认证服务器核对了授权码和重
                  定向URI，确认无误后，向客户端发送访问令牌（access token）和更新令牌（refresh token

*/
// === 2.1.a 步骤1中的参数: === //
// === > response_type：表示授权类型，必选项，此处的值固定为"code" === //
// === > client_id：表示客户端的ID，必选项 === //
// === > redirect_uri：表示重定向URI，可选项 === //
// === > scope：表示申请的权限范围，可选项 === //
// === > state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值 === //
/*

GET /authorize?response_type=code&client_id=s6BhdRkqt3&state=xyz&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1
Host: server.example.com

*/
// === 2.1.b 步骤3中的参数: === //
// === > code：表示授权码，必选项。该码的有效期应该很短，通常设为10分钟，客户端只能使用该码一次，否则会被授权服务器拒绝。该码与客户端ID和重定向URI，是一一对应关系 === //
// === > state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数 === //
/*

HTTP/1.1 302 Found
Location: https://client.example.com/cb?code=SplxlOBeZQQYbYS6WxSbIA&state=xyz

*/
// === 2.1.c 步骤4中的参数: === //
// === > grant_type：表示使用的授权模式，必选项，此处的值固定为"authorization_code" === //
// === > code：表示上一步获得的授权码，必选项 === //
// === > redirect_uri：表示重定向URI，必选项，且必须与A步骤中的该参数值保持一致 === //
// === > client_id：表示客户端ID，必选项 === //
/*

POST /token HTTP/1.1
Host: server.example.com
Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb

*/
// === 2.1.d 步骤5中参数: === //
// === > access_token：表示访问令牌，必选项 === //
// === > token_type：表示令牌类型，该值大小写不敏感，必选项，可以是bearer类型或mac类型 === //
// === > expires_in：表示过期时间，单位为秒。如果省略该参数，必须其他方式设置过期时间 === //
// === > refresh_token：表示更新令牌，用来获取下一次的访问令牌，可选项 === //
// === > scope：表示权限范围，如果与客户端申请的范围一致，此项可省略 === //
/*

     HTTP/1.1 200 OK
     Content-Type: application/json;charset=UTF-8
     Cache-Control: no-store
     Pragma: no-cache

     {
       "access_token":"2YotnFZFEjr1zCsicMWpAA",
       "token_type":"example",
       "expires_in":3600,
       "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
       "example_parameter":"example_value"
     }

*/
// === 2.2 简化模式: 不通过第三方应用程序的服务器，直接在浏览器中向认证服务器申请令牌，跳过了"授权码"这个步骤，因此得名。所有步骤在浏览器中完成，令牌对访问者是可见的，且客户端不需要认证 === //
/*

  ____________
  |  Resource |
  |   Owner   |
  |___________|
        ^
        | 2 User authenticates
        |
  ____________
  |           |
  |           |  1 Client Identifier & Redirection URI: 客户端将用户导向认证服务器
  |           | -------------------------------------------------------------------->   ____________________
  |___User____|  2 User authenticates: 用户选择是否给予客户端授权                          |                   |
  |           | -------------------------------------------------------------------->  |   Authorization   |
  |   Agent   |  3 Redirection URI width Access TOken in Fragment: 假设用户给予授权，     |                   |
  |           |  认证服务器将用户导向客户端事先指定"重定向URI"，并在URI的Hash部分包含了访问令牌  |                   |
  |           | <--------------------------------------------------------------------  |        Server     |
  |           |                                                                        |___________________|
  |           |
  |           |
  |           | 4 Redirection URI sithout Fragment: 浏览器向资源服务器发出请求，其中不包括   _____________________
  |           | 上一步收到的Hash值                                                       |                    |
  |           | -------------------------------------------------------------------->  |  Web-Hosted Client |
  |           |                                                                        |       Resource     |
  |           |                                                                        |                    |
  |         --| <--------------------------------------------------------------------  |                    |
  |        |  |  5 Script: 资源服务器返回一个网页，其中包含的代码可以获取Hash值中的令牌        |                    |
  |      6 |  |                                                                        |____________________|
  |        |  |
  |________v__|
           |      6 浏览器执行上一步获得的脚本，提取出令牌
            -
      ^      |
      |      |
1 Client     |
Identifier & | 7 Access Token: 浏览器将令牌发给客户端
Redirection  |
URI          |
      |      v
  ____________
  |           |
  |   Client  |
  |           |
  |           |
  |           |
  |___________|

*/
// === 2.2.a 步骤1中的参数: === //
// === > response_type：表示授权类型，此处的值固定为"token"，必选项 === //
// === > client_id：表示客户端的ID，必选项 === //
// === > redirect_uri：表示重定向的URI，可选项 === //
// === > scope：表示权限范围，可选项 === //
// === state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值 === //
/*

GET /authorize?response_type=token&client_id=s6BhdRkqt3&state=xyz&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1
Host: server.example.com

*/
// === 2.2.b 步骤3中的参数: === //
// === > access_token：表示访问令牌，必选项 === //
// === > token_type：表示令牌类型，该值大小写不敏感，必选项 === //
// === > expires_in：表示过期时间，单位为秒。如果省略该参数，必须其他方式设置过期时间 === //
// === > scope：表示权限范围，如果与客户端申请的范围一致，此项可省略 === //
// === > state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数 === //
/*

HTTP/1.1 302 Found
Location: http://example.com/cb#access_token=2YotnFZFEjr1zCsicMWpAA&state=xyz&token_type=example&expires_in=3600

*/
// === 2.3 密码模式: 用户必须把自己的密码给客户端，但是客户端不得储存密码。这通常用在用户对客户端高度信任的情况下，比如客户端是操作系统的一部分，或者由一个著名公司出品。而认证服务器只有在其他授权模式无法执行的情况下，才能考虑使用这种模式 === //
/*

  ____________
  |  Resource |
  |   Owner   |
  |___________|
        |
        | 1 Resource Owner Password Credentials: 用户向客户端提供用户名和密码
        |
        v
  ____________
  |           |                                                                                      ____________________
  |   Client  | 2 Rewource Owner Password Credentials: 客户端将用户名和密码发给认证服务器                 |                   |
  |           |   ，向后者请求令牌                                                                     |   Authorization   |
  |           | -----------------------------------------------------------------------------------> |                   |
  |___________| <----------------------------------------------------------------------------------- |        Server     |
                3 Access Token(w/ optional refresh Token): 认证服务器核对了授权码和重                    |___________________|
                  定向URI，确认无误后，向客户端发送访问令牌（access token）和更新令牌（refresh token)

*/
// === 2.3.a 步骤2中参数: === //
// === > grant_type：表示授权类型，此处的值固定为"password"，必选项 === //
// === > username：表示用户名，必选项 === //
// === > password：表示用户的密码，必选项 === //
// === > scope：表示权限范围，可选项 === //
/*

     POST /token HTTP/1.1
     Host: server.example.com
     Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
     Content-Type: application/x-www-form-urlencoded

     grant_type=password&username=johndoe&password=A3ddj3w

*/
// === 2.3.b 步骤3认证服务器向客户端发送的访问令牌: === //
/*

     HTTP/1.1 200 OK
     Content-Type: application/json;charset=UTF-8
     Cache-Control: no-store
     Pragma: no-cache

     {
       "access_token":"2YotnFZFEjr1zCsicMWpAA",
       "token_type":"example",
       "expires_in":3600,
       "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
       "example_parameter":"example_value"
     }

*/
// === 2.4 客户端模式: 客户端以自己的名义，而不是以用户的名义，向"服务提供商"进行认证。严格地说，客户端模式并不属于OAuth框架所要解决的问题。在这种模式中，用户直接向客户端注册，客户端以自己的名义要求"服务提供商"提供服务，其实不存在授权问题 === //
/*

    ____________________                                                                          ________________________
    |                   | 1 Client Authentication: 客户端向认证服务器进行身份认证，并要求一个访问令牌    |                       |
    |                   | -------------------------------------------------------------------->   |      Authorization    |
    |     Client        |                                                                         |         Server        |
    |                   | <-----------------------------------------------------------------------|                       |
    |___________________| 2 Access Token: 认证服务器确认无误后，向客户端提供访问令牌                    |_______________________|

*/
// === 2.4.a 步骤1中的参数: === //
// === > granttype：表示授权类型，此处的值固定为"clientcredentials"，必选项 === //
// === > scope：表示权限范围，可选项 === //
/*
     POST /token HTTP/1.1
     Host: server.example.com
     Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
     Content-Type: application/x-www-form-urlencoded

     grant_type=client_credentials
*/
// === 2.4.b 步骤2中的令牌: === //
/*

     HTTP/1.1 200 OK
     Content-Type: application/json;charset=UTF-8
     Cache-Control: no-store
     Pragma: no-cache

     {
       "access_token":"2YotnFZFEjr1zCsicMWpAA",
       "token_type":"example",
       "expires_in":3600,
       "example_parameter":"example_value"
     }

*/
// === 3 更新令牌: 客户端发出更新令牌的HTTP请求 === //
// === > granttype：表示使用的授权模式，此处的值固定为"refreshtoken"，必选项 === //
// === > refresh_token：表示早前收到的更新令牌，必选项 === //
// === > scope：表示申请的授权范围，不可以超出上一次申请的范围，如果省略该参数，则表示与上一次一致 === //
/*

     POST /token HTTP/1.1
     Host: server.example.com
     Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
     Content-Type: application/x-www-form-urlencoded

     grant_type=refresh_token&refresh_token=tGzv3JOkF0XG5Qx2TlKWIA

*/

const axios = require('axios')
const querystring = require('querystring')
const jwt = require('jsonwebtoken')
const md5 = require('js-md5')

const config = require('./config')
const commonConfig = require('../../config')
const userModel = require('../models/user')
const sso = require('../views/server-render').sso

const GITHUB = config.GITHUB
const ISDEV = commonConfig.ISDEV

module.exports = async function (ctx, next) {

  const postData = querystring.stringify({
    code: ctx.query.code,
    client_id: GITHUB.CLIENT_ID,
    client_secret: GITHUB.CLIENT_SECRET
  })

  // 若出现 Error: getaddrinfo ENOTFOUND api.github.com api.github.com:443 , 是网速问题
  await axios.post(GITHUB.TOKEN_URL, postData)
    .then(res => axios.get(`${GITHUB.USER_URL}?access_token=${querystring.parse(res.data).access_token}`))
    .then(async res => {

      const data = res.data
      let ret = await userModel.add(data.id, data.avatar_url, data.html_url, data.email, data.name, 0)

      const AUTH = config.AUTH

      const playload = {
        uid: ret.id,
        role: 0
      }

      const access_token = jwt.sign(playload, AUTH.JWT_SECRET, {
        algorithm: AUTH.ALGORITHM,
        expiresIn: AUTH.EXPIRESIN
      })

      // === 单点登录: 在多系统应用群中登录一个系统, 便可在其它所有系统中得到授权而无需再次登录 === //
      // === 1 将凭证放在顶级域名中: 如在 admin.hellojm.cn 登录后, 将 access_token 放在 .hellojm.cn 域下, 则 www.hellojm.cn 及 game.hellojm.cn 都可以拿到 === //
      // === 1.1 特点: 方便, 但需要统一域名, 且cookie本身不安全 === //
      // === 2 使用独立登录系统: 需要一个独立的认证中心, 只处理用户的登录, 状态的查询以及存储等 === //
      // === 2.1 流程: 现在有 官网(www.hellojm.cn), cms(admin.hellojm.cn), sso(sso.hellojm.cn), 令牌 access_token 只存储在 localStorage 中(持久化), 用户信息只存储在 redux 的 User State 中(内存), 每个系统都有个 iframe 来支持 XDM 跨域通讯方式 === //
      // === > 步骤一: 打开其中一个子系统的页面(如 www.hellojm.cn )时(在 componentdDidMount 中)会先去查看 localStorage 中是否有 access_token, 有则先去 User State 中查找是否是用户的id(证明已经获取到用户的信息), 若有则直接用; 没有则拿着 access_token 向服务器获取用户授权信息; 若没有 access_token , 则向 iframe(sso.hellojm.cn) 获取其 localStorage 中的 access_token , 并登记origin, 若有, 拿回来后再向服务器获取 用户授权信息 , 并将 access_token 存储于 localStorage 中, 若 iframe 中也没有 access_token, 证明没有任何一个子系统登录过 用户认证中心 , 则什么也不做 === //
      // === > 步骤二: 打开页面后, 若还未拿到用户授权信息, 而用户点击了需要获取授权信息的请求(比如评论), 则带着 本页面的 url 将页面跳转到 sso.hellojm.cn (如 sso.hellojm.cn?from=www.hellojm.cn/ifrmae, 而该页面中的 iframe 则为 from 的域下的某个页面, 这样才能在 sso.hellojm.cn 中对 子系统页面 进行通讯, 从而将 获取到的 localStorage 放到其域下), 引导用户登录, 登录之后服务器返回 access_token , 然后客户端将其存储在 localStorage 中, 并通过 XDM 的方式将 access_token 传给 iframe 中, iframe 中的页面收到后, 将其存到 localStorage 中, 并返回接收成功的信息, sso.hellojm.cn 收到后 跳转至 from 的地址, 此时 子系统页面的 localStorage 中就有了 access_token, 再执行 步骤一 === //
      // === > 步骤三: 打开另一个子系统的页面时(如 admin.hellojm.cn ), 只需要进行步骤一即可获取到 用户授权信息 === //
      // === 2.2 细节实现: === //
      // === 2.2.1 iframe 一定要在 onload 事件处理程序中进行 XDM 的工作, 因为iframe加载的是一个文档, 是异步的, 跟html页面加载一样 === //
      // === 2.2.2 csrf的疑虑: csrf_token 是随机字符, access_token 也是字符, 只要请求的时候是通过js手动地带上 token , 而非将 token 直接放到 cookie中传到后端, 即可防止csrf攻击, 因为黑客无法跨域获取到本页面的 token === //
      // === 2.2.3 为什么要将用户信息放到 User State 中: 放到 User State 实质上是放在 内存 中, 刷新页面后会重新 拿着 localStorage 中的 access_token 向 服务器获取用户信息, 若放在 localStorage 中无法得知 用户授权信息 是否已过期, 只有每次从 服务器 中请求回来的才是最新的数据 === //
      // === 2.2.4 access_token 在服务器中的返回方式: 若是通过 ajax 登录, 则直接在 响应主体 中返回去; 若是通过github第三方登录, 则需要重定向页面, 在服务器中生成 access_token 后, 只能通过将 access_token 放到 cookie 中返回 或者 将 access_token 内嵌到 sso.hellojm.cn 页面中(如 input[type='hidden']) 中, 在客户端打开页面后, 再将 access_token 从DOM中取出来放到 localStorage 中 === //
      // === 2.2.5 用户中心(sso.hellojm.cn)是否需要独自的服务器: 不需要, 它只是一个页面, 可放到任何子系统的服务器上, 单独出来更好, 可缓解业务服务器的负担 === //
      // === 2.2.6 跳转到用户认证中心, 登录后如何跳转回去: 这就需要在跳转的时候充分利用 url的 search === //
      // === 2.2.7 如何存储会话: jwt也可以, session + uid + sign 也可以 === //
      // === 2.3 综述: === //
      // === 2.3.1 子系统想要获取 用户授权信息 , 只能通过 认证中心(sso.hellojm.cn) 获取 access_token 后, 再带着 access_token 向 服务器 拿 用户授权信 === //
      // === 2.3.2 access_token 只能在 sso.hellojm.cn 页面中登录后由 服务器给出, 若登录后将其存在 localStorage 中 可供所有子系统使用, 相当于 子系统只能在 用户认证中心 中拿钥匙, 这一步就是 单点登录 的核心所在 === //
      // === 3 注销: 任意一个子系统, 对 sso.hellojm.cn 跨域发请求, 删除其域下的 access_token , 并将之前存储的登记过的子系统一一通过 XDM 的方式访问其专门的接收的ifram(如 www.hellojm.cn/iframe). 再删除其域下localStorage的access_token, 删除成功后返回成功消息, 等登记过的子系统都删除完毕后, 返回一开始进来的子系统 === //
      ctx.cookies.set('access_token', access_token, {
        expires: new Date(Date.now() + 60 * 60 * 2 * 1000),
        httpOnly: false,
        domain: commonConfig.COOKIE_DOMAIN,
        sameSite: 'strict',
        secure: !ISDEV
      })

      let redirect_url = ctx.query.from
      // if (/^article-(\d+)$/.test(redirect_url)) {
      //   redirect_url = commonConfig.INDEX_DOMAIN + '/' + redirect_url.replace(/-/, '/')
      // } else if (redirect_url === 'admin') {
      //   redirect_url = commonConfig.CMS_DOMAIN
      // }

      ctx.redirect(redirect_url)


    })

}

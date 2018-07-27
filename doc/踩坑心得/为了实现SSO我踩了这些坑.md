# 为了实现SSO(nodejs + jwt + 完全跨域)我踩了这些坑

关于sso, 我搞了好久, 从一开始的一无所知, 到不断采坑, 思路换了一种又一种, 甚是刻苦铭心!

***这是一篇 科普相关基础知识 + 自己的实战历程 的采坑记录, 前面的几大内容块都是在科普实现 SSO 相关的`协议`, 最后时自己如何在项目上的实践, 若是想找(` nodejs + sso + jwt + 完全跨域 `)的解决方案, 估计我的解决方案值得参考, 因为作为一名前端, 在网上找到的相关教程真的很受限, google上所有可能的文章我都看了, 然后并没有一篇能切身实际地符合我想要做的需求***

**token**: 表示凭据, 具体目的因业务场景不同, 有的是 访问资源的凭据(如 access_token), 有的是确定用户本人操作的凭据(如 csrf_token)

**Authentication**: 认证, 用户鉴别访问者是否为合法用户

**Authorization Server/Identity Provider(IdP)**: 负责认证的服务器

**Authorisation**: 授权, 用户决定访问者有哪些资源的权限

**Service Provider(SP)/Resource Server**: 负责提供资源（API调用）的服务

## 一.常用的会话管理方式

### 1.1 基于server-session

1 服务器有个sessions对象, `sessions = {}}`

2 用户第一次访问, 根据真实IP加密生成一个随机key(`fjfelkjafklwjxxxx`), 不可逆的, `sessions = { fjfelkjafklwjxxxx: {} }`,
然后把 sessionid 注入到 cookie 中

3 用户登录, 账号密码发给服务器后, 验证成功, 从数据库中取出必要的会话信息(如id, name等), 放到 `sessions['fjfelkjafklwjxxxx']` 中, 并设定过期时间, 如2h。

4 用户请求授权信息时, 服务器从cookie中拿着 sessionid , 从 `sessions` 中查找会话信息。

若在过期时间内, 继续执行接下来的操作, 并延长 2h 的session过期时间

若过期了, 删除 `sessions['fjfelkjafklwjxxxx']` 对象, 创建新的 session 对象, 如`sessions['fjeowiajfkel22']`， 将用户重定向到登录界面

5 用户主动退出: 直接删除 `sessions['fjfelkjafklwjxxxx']` 对象

**缺点**:

1 会话信息存在服务器中, 用户同时在线量较多时占用大量内存

2 当应用采用 集群部署时, 有可能创建session的服务器 并非 处理用户请求的服务器

3 多个应用共享 session 时, 会遇到跨域问题

4 对于在过期时间内, 没有主动退出的情况, session 一直在内存中

5 csrf安全问题

**解决方案**:

1 使用redis中间服务器管理 session 的增删查改, 及共享session问题

2 对于跨域问题, 需前后端实现 cookie 跨域访问(`ACCESS-CONTROL-ALLOW-ORIGIN` + `withCredentials`)

3 开个定时器, 扫描 sessions , 对于过期的直接删除以释放内存

### 1.2 基于cookie-based

`server-session`方式会增加服务器负担, 而`cookie-baesd`则是把 登录凭证 直接放到 客户端cookie , 达到服务器无状态化

1 用户登录, 后端验证账号密码后, 从数据库中取出必要信息(如id, name)等, 加上创建时间和过期时间, 写成对象形式`{id: 1, name: 'garven', createdTime: '2343298923', max-age: '8288'}`,
通过 JSON.stringify() 转成字符串做为一个 登录凭证, 然后做 数字签名 ,再用对称加密算法做加密处理, 再写入 cookie , 如`ticket: xxxx`

做签名目的: 防止登录凭证被篡改, 篡改后无法 签名验证 成功

做加密目的: 防止被窃取后读到其中的用户信息

2 用户请求授权信息: 拿到cookie中的 ticket 对应的值, 解密和签名认证后, 得到登录凭证, 再验证是否过期; 没过期则继续操作, 过期则删除cookie, 重定向到登录页

**缺点**:

1 cookie大小限制: 影响其他需要用到cookie的业务

2 每次传送带着cookie, 增大了报文的数据量

3 跨域问题

4 csrf问题

5 native app 不好管理 cookie, 毕竟不是浏览器

**解决办法**:

1 如可以考虑从一开始的 4096位 RSA算法做数字签名时 换成 1024、2048等

### 1.3 基于token-based

将 `cookie-based` 中的 ticket 换成 token 名, token 返回给客户端后, 后续的每个请求都必须通过 url 或者 http header 方式 主动带上 token, 服务器接收到后直接从 http header 或者 url 里拿到 token

1 存储: localStorage 或者 sessionStorage 里

2 方便跨域请求

3 刷新问题: 在验证 token 有效之后, 会把 token 的失效时间延长, 再返回给客户端; 客户端如果检测到服务器有新的 token , 则替换

---

## 二.CAS(Central Authentication Service)协议

### 2.1 CAS协议过程

![sso-1.webp](sso-1.webp)

访问服务： SSO 客户端发送请求访问应用系统提供的服务资源。

定向认证： SSO 客户端会重定向用户请求到 SSO 服务器。

用户认证：用户身份认证。

发放票据： SSO 服务器会产生一个随机的 Service Ticket 。

验证票据： SSO 服务器验证票据 Service Ticket 的合法性，验证通过后，允许客户端访问服务。

传输用户信息： SSO 服务器验证票据通过后，传输用户认证结果信息给客户端。

### 2.2 信息登录传递

**用户首次登录**:

![sso-4.webp](sso-4.webp)

1 用户浏览器访问系统A需登录受限资源，此时进行登录检查，发现未登录，然后进行获取票据操作，发现没有票据

2 系统A发现该请求需要登录，将请求重定向到认证中心，获取全局票据操作，没有，进行登录

3 认证中心呈现登录页面，用户登录，登录成功后，认证中心重定向请求到系统A，并附上认证通过令牌，此时认证中心同时生成了全局票据

4 此时再次进行登录检查，发现未登录，然后再次获取票据操作，此时可以获得票据(令牌)，系统A与认证中心通信，验证令牌有效,证明用户已登录

5 系统A将受限资源返给用户

**已登录的用户首次访问应用群中的系统B**:

![sso-3.webp](sso-3.webp)

1 浏览器访问另一应用B需登录受限资源，此时进行登录检查，发现未登录，然后进行获取票据操作，发现没有票据

2 系统B发现该请求需要登录，将请求重定向到认证中心，获取全局票据操作，获取全局票据，可以获得，认证中心发现已经登录

3 认证中心发放临时票据(令牌)，并携带该令牌重定向到系统B

4 此时再次进行登录检查，发现未登录，然后再次获取票据操作，此时可以获得票据(令牌)，系统B与认证中心通信，验证令牌有效,证明用户已登录

5 系统B将受限资源返回给客户端

### 2.3 登录状态判断

1 全局会话: 户到认证中心登录后，用户和认证中心之间建立起的会话

2 局部会话: 系统应用和用户浏览器之间建立的会话，局部会话依附于全局会话存在，全局会话消失，局部会话必须消失

用户访问应用时，首先判断局部会话是否存在，如存在，即认为是登录状态，无需再到认证中心去判断。如不存在，就重定向到认证中心判断全局会话是否存在，如存在，按1提到的方式通知该应用，该应用与客户端就建立起它们之间局部会话，下次请求该应用，就不去认证中心验证了

### 2.4 登出

认证中心接到登出通知，即可结束全局会话，同时需要通知所有已建立局部会话的子系统，将它们的局部会话销毁。这样，用户访问其它应用时，都显示已登出状态

**登出流程**:

1 客户端向应用A发送登出Logout请求

2 应用A取消本地会话，同时通知认证中心，用户已登出

3 应用A返回客户端登出请求

4 认证中心通知所有用户登录访问的应用，用户已登出

### 2.5 疑问:

1 系统A是如何发现该请求需要登录重定向到认证中心的?

用户通过浏览器地址栏访问系统A，系统A(也可以称为CAS客户端)去Cookie中拿 `JSESSION`，即在Cookie中维护的当前回话session的id，如果拿到了，说明用户已经登录，如果未拿到，说明用户未登录

2 系统A重定向到认证中心，发送了什么信息或者地址变成了什么?

假如系统A的地址为http://a:8080/，CAS认证中心的服务地址为http://cas.server:8080/，那么重点向前后地址变化为：http://a:8080/————>ttp://cas.server:8080/?service=http://a:8080/，由此可知，重定向到认证中心，认证中心拿到了当前访问客户端的地址

3 登录成功后，认证中心重定向请求到系统A，认证通过令牌是如何附加发送给系统A的?

重定向之后的地址栏变成：http://a:8080/?ticket=ST-XXXX-XXX，将票据以ticket为参数名的方式通过地址栏发送给系统A

4 系统A验证令牌，怎样操作证明用户登录的?

系统A通过地址栏获取ticket的参数值ST票据，然后从后台将ST发送给CAS server认证中心验证，验证ST有效后，CAS server返回当前用户登录的相关信息，系统A接收到返回的用户信息，并为该用户创建session会话，会话id由cookie维护，来证明其已登录

5 登录B系统，认证中心是如何判断用户已经登录的?

在系统A登录成功后，用户和认证中心之间建立起了全局会话，这个全局会话就是TGT(Ticket Granting Ticket)，TGT位于CAS服务器端，TGT并没有放在Session中，也就是说，CAS全局会话的实现并没有直接使用Session机制，而是利用了Cookie自己实现的，这个Cookie叫做TGC(Ticket Granting Cookie)，它存放了TGT的id,保存在用户浏览器上。

用户发送登录系统B的请求，首先会去Cookie中拿JSESSION，因为系统B并未登录过，session会话还未创建，JSESSION的值是拿不到的，然后将请求重定向到CAS认证中心，CAS认证中心先去用户浏览器中拿TGC的值，也就是全局会话id，如果存在则代表用户在认证中心已经登录，附带上认证令牌重定向到系统B

6 登出的过程，各个系统对当前用户都做了什么?

认证中心清除当前用户的全局会话TGT，同时清掉cookie中TGT的id：TGC；然后是各个客户端系统，比如系统A、系统B，清除局部会话session，同时清掉cookie中session会话id：jsession

---

## 三.SMAL 2.0协议

![sso-5.webp](sso-5.webp)

A 还未登陆的用户打开浏览器访问你的网站（SP，以下都简称 SP），网站提供服务但是并不负责用户认证

B SP 向 IdP 发送了一个 SAML 认证请求，同时 SP 将用户浏览器重定向到 IdP

C IdP 在验证完来自 SAML 的请求无误之后，在浏览器中呈现登陆表单让用户进行填写用户名和密码进行登陆

D 一旦用户登陆成功，IdP 会生成一个包含用户信息（用户名或者密码）的 SAML token （SAML token 又称为 SAML Assertion，本质上是 XML 节点），IdP 向 SP 返回 token, 并且将用户重定向到 SP (token 的返回是在重定向步骤中实现的，下面会详细说明)

E SP 对拿到的 token 进行验证，并从中解析出用户信息，例如他们是谁以及他们的权限有哪些。此时就能够根据这些信息允许用户访问我们网站的内容了

**当用户在 IdP 登陆成功之后，IdP 需要将用户再次重定向至 SP 站点，这一步通常有两个办法**:

1 HTTP 重定向（HTTP Redirect）：这并不推荐，应为重定向的 URL 长度有限，无法携带更长的信息，比如 SMAL Token

2 HTTP POST 请求：这个是更常规的做法，当用户登陆完毕之后渲染出一个表单，用户点击后向 SP 提交 POST 请求。又或者可以使用 Javascript 向 SP 发出一个 POST 请求

## 四.OAuth 2.0协议

一个应用允许另一个应用在用户授权的情况下访问自己的数据,OAuth 的设计本意更倾向于授权而非认证

### 4.1 思路流程

```

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

```

### 4.2 客户端的授权方式

**授权码模式**: 通过客户端的后台服务器，与"服务提供商"的认证服务器进行互动

```

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

```

1 步骤1中的参数: 

response_type：表示授权类型，必选项，此处的值固定为"code"

client_id：表示客户端的ID，必选项

redirect_uri：表示重定向URI，可选项

scope：表示申请的权限范围，可选项

state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值

```
GET /authorize?response_type=code&client_id=s6BhdRkqt3&state=xyz&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1
Host: server.example.com
```

2 步骤3中的参数:

code：表示授权码，必选项。该码的有效期应该很短，通常设为10分钟，客户端只能使用该码一次，否则会被授权服务器拒绝。该码与客户端ID和重定向URI，是一一对应关系

state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数

```
HTTP/1.1 302 Found
Location: https://client.example.com/cb?code=SplxlOBeZQQYbYS6WxSbIA&state=xyz
```

3 步骤4中的参数:

grant_type：表示使用的授权模式，必选项，此处的值固定为"authorization_code"

code：表示上一步获得的授权码，必选项

redirect_uri：表示重定向URI，必选项，且必须与A步骤中的该参数值保持一致

client_id：表示客户端ID，必选项

```
POST /token HTTP/1.1
Host: server.example.com
Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb
```

4 步骤5中参数:

access_token：表示访问令牌，必选项

token_type：表示令牌类型，该值大小写不敏感，必选项，可以是bearer类型或mac类型

expires_in：表示过期时间，单位为秒。如果省略该参数，必须其他方式设置过期时间

refresh_token：表示更新令牌，用来获取下一次的访问令牌，可选项

scope：表示权限范围，如果与客户端申请的范围一致，此项可省略

```
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
```

**简化模式**: 不通过第三方应用程序的服务器，直接在浏览器中向认证服务器申请令牌，跳过了"授权码"这个步骤，因此得名。所有步骤在浏览器中完成，令牌对访问者是可见的，且客户端不需要认证

```

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
  
```

1 步骤1中的参数:

response_type：表示授权类型，此处的值固定为"token"，必选项

client_id：表示客户端的ID，必选项

redirect_uri：表示重定向的URI，可选项

scope：表示权限范围，可选项

state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值

```
GET /authorize?response_type=token&client_id=s6BhdRkqt3&state=xyz&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1
Host: server.example.com
```

2 步骤3中的参数:

access_token：表示访问令牌，必选项

token_type：表示令牌类型，该值大小写不敏感，必选项

expires_in：表示过期时间，单位为秒。如果省略该参数，必须其他方式设置过期时间

scope：表示权限范围，如果与客户端申请的范围一致，此项可省略

state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数

```
HTTP/1.1 302 Found
Location: http://example.com/cb#access_token=2YotnFZFEjr1zCsicMWpAA&state=xyz&token_type=example&expires_in=3600
```

**密码模式**: 用户必须把自己的密码给客户端，但是客户端不得储存密码。这通常用在用户对客户端高度信任的情况下，比如客户端是操作系统的一部分，或者由一个著名公司出品。而认证服务器只有在其他授权模式无法执行的情况下，才能考虑使用这种模式

```

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

```

1 步骤2中参数:

grant_type：表示授权类型，此处的值固定为"password"，必选项

username：表示用户名，必选项

password：表示用户的密码，必选项

scope：表示权限范围，可选项

```
 POST /token HTTP/1.1
 Host: server.example.com
 Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
 Content-Type: application/x-www-form-urlencoded

 grant_type=password&username=johndoe&password=A3ddj3w
```

2 步骤3认证服务器向客户端发送的访问令牌:

```
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
```

**客户端模式**: 客户端以自己的名义，而不是以用户的名义，向"服务提供商"进行认证。严格地说，客户端模式并不属于OAuth框架所要解决的问题。在这种模式中，用户直接向客户端注册，客户端以自己的名义要求"服务提供商"提供服务，其实不存在授权问题

```

    ____________________                                                                          ________________________
    |                   | 1 Client Authentication: 客户端向认证服务器进行身份认证，并要求一个访问令牌    |                       |
    |                   | -------------------------------------------------------------------->   |      Authorization    |
    |     Client        |                                                                         |         Server        |
    |                   | <-----------------------------------------------------------------------|                       |
    |___________________| 2 Access Token: 认证服务器确认无误后，向客户端提供访问令牌                    |_______________________|

```

1 步骤1中的参数:

granttype：表示授权类型，此处的值固定为"clientcredentials"，必选项

scope：表示权限范围，可选项

```
POST /token HTTP/1.1
Host: server.example.com
Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
```

2 步骤2中的令牌:

```
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
```

3 更新令牌: 客户端发出更新令牌的HTTP请求

granttype：表示使用的授权模式，此处的值固定为"refreshtoken"，必选项

refresh_token：表示早前收到的更新令牌，必选项

scope：表示申请的授权范围，不可以超出上一次申请的范围，如果省略该参数，则表示与上一次一致

```
POST /token HTTP/1.1
Host: server.example.com
Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&refresh_token=tGzv3JOkF0XG5Qx2TlKWIA
```

---

## 五.OpenId协议

只用于身份认证（Authentication），允许你以同一个账户在多个网站登陆。它仅仅是为你的合法身份背书，当你以 Facebook 账号登陆某个站点之后，该站点无权访问你的在 Facebook 上的数据

---

## 六.JWT协议

jwt也是token, 是访问资源的凭证

### 6.1 组成

**header**: 用于描述元信息，例如产生 signature 的算法

```
{
    "typ": "JWT",
    "alg": "HS256"
}
```


**payload**: 用于携带你希望向服务端传递的信息, 既可以往里添加官方字段（这里的“字段” (field) 也可以被称作“声明” claims），例如iss(Issuer), sub(Subject), exp(Expiration time)，也可以塞入自定义的字段

```
{
    "userId": "b08f86af-35da-48f2-8fab-cef3904660bd"
}
```

**signature**: 签名

1 从接口服务端拿到密钥，假设为secret

2 将header进行 base64 编码，假设结果为headerStr

3 将payload进行 base64 编码，假设结果为payloadStr

4 将headerStr和payloadStr用.字符串拼装起来成为字符data

5 以data和secret作为参数，使用哈希算法计算出签名

```
data = base64urlEncode( header ) + “.” + base64urlEncode( payload )
signature = Hash( data, secret );
```

### 6.2 目的

1 不是为了隐藏或者保密数据，而是为了确保数据确实来自被授权的人创建的（不被篡改）

2 用于接口调用: 接下来在 API 调用中就可以附上 JWT （通常是在 HTTP Header 中）

---

## 七.SSO(single-sign on)

**SSO**: 在多系统应用群中登录一个系统, 便可在其它所有系统中得到授权而无需再次登录

### 7.1 顶级域名相同的情况

将凭证放在顶级域名中: 如在 admin.hellojm.cn 登录后, 将 access_token 放在 .hellojm.cn 域下, 则 www.hellojm.cn 及 game.hellojm.cn 都可以拿到

特点: 方便, 但需要统一域名, 且cookie本身不安全

### 7.2 使用独立登录系统

需要一个独立的认证中心, 只处理用户的登录, 状态的查询以及存储等

---

## 八.自己的实战经验

### 8.1 纯前端: jwt + XDM 版本的 SSO

这是我经过了几天琢磨后的第一种思路:

现在有 官网(www.hellojm.cn), cms(admin.hellojm.cn), sso(sso.hellojm.cn), 令牌 access_token 只存储在 localStorage 中(持久化), 用户信息只存储在 redux 的 User State 中(内存), 每个系统都有个 iframe 来支持 XDM 跨域通讯方式

步骤一: 打开其中一个子系统的页面(如 www.hellojm.cn )时(在 componentdDidMount 中)会先去查看 localStorage 中是否有 access_token, 有则先去 User State 中查找是否是用户的id(证明已经获取到用户的信息, 因为前端跳转页面后没有刷新页面, redux 中的数据还可用), 若有则直接用; 没有则拿着 access_token 向服务器获取用户授权信息; 若没有 access_token , 则向 iframe(sso.hellojm.cn) 获取其 localStorage 中的 access_token , 并登记origin, 若有, 拿回来后再向服务器获取 用户授权信息 , 并将 access_token 存储于 localStorage 中, 若 iframe 中也没有 access_token, 证明没有任何一个子系统登录过 用户认证中心 , 则什么也不做

步骤二: 打开页面后, 若还未拿到用户授权信息, 而用户点击了需要获取授权信息的请求(比如评论), 则带着 本页面的 url 将页面跳转到 sso.hellojm.cn (如 sso.hellojm.cn?from=www.hellojm.cn/ifrmae, 而该页面中的 iframe 则为 from 的域下的某个页面, 这样才能在 sso.hellojm.cn 中对 子系统页面 进行通讯, 从而将 获取到的 localStorage 放到其域下), 引导用户登录, 登录之后服务器返回 access_token , 然后客户端将其存储在 localStorage 中, 并通过 XDM 的方式将 access_token 传给 iframe 中, iframe 中的页面收到后, 将其存到 localStorage 中, 并返回接收成功的信息, sso.hellojm.cn 收到后 跳转至 from 的地址, 此时 子系统页面的 localStorage 中就有了 access_token, 再执行 步骤一

步骤三: 打开另一个子系统的页面时(如 admin.hellojm.cn ), 只需要进行步骤一即可获取到 用户授权信息

步骤四: 注销 -> 任意一个子系统, 对 sso.hellojm.cn 跨域发请求, 删除其域下的 access_token , 并将之前存储的登记过的子系统一一通过 XDM 的方式访问其专门的接收的ifram(如 www.hellojm.cn/iframe). 再删除其域下localStorage的access_token, 删除成功后返回成功消息, 等登记过的子系统都删除完毕后, 返回一开始进来的子系统

**细节实现**:

1 iframe 一定要在 onload 事件处理程序中进行 XDM 的工作, 因为iframe加载的是一个文档, 是异步的, 跟html页面加载一样

2 csrf的疑虑: csrf_token 是随机字符, access_token 也是字符, 只要请求的时候是通过js手动地带上 token , 而非将 token 直接放到 cookie中传到后端, 即可防止csrf攻击, 因为黑客无法跨域获取到本页面的 token

3 为什么要将用户信息放到 User State 中: 放到 User State 实质上是放在 内存 中, 刷新页面后会重新 拿着 localStorage 中的 access_token 向 服务器获取用户信息, 若放在 localStorage 中无法得知 用户授权信息 是否已过期, 只有每次从 服务器 中请求回来的才是最新的数据

4 access_token 在服务器中的返回方式: 若是通过 ajax 登录, 则直接在 响应主体 中返回去; 若是通过github第三方登录, 则需要重定向页面, 在服务器中生成 access_token 后, 只能通过将 access_token 放到 cookie 中返回 或者 将 access_token 内嵌到 sso.hellojm.cn 页面中(如 input[type='hidden']) 中, 在客户端打开页面后, 再将 access_token 从DOM中取出来放到 localStorage 中

5 用户中心(sso.hellojm.cn)是否需要独自的服务器: 不需要, 它只是一个页面, 可放到任何子系统的服务器上, 单独出来更好, 可缓解业务服务器的负担

6 跳转到用户认证中心, 登录后如何跳转回去: 这就需要在跳转的时候充分利用 url的 search

7 如何存储会话: jwt也可以, session + uid + sign 也可以

**综述**:

1 子系统想要获取 用户授权信息 , 只能通过 认证中心(sso.hellojm.cn) 获取 access_token 后, 再带着 access_token 向 服务器 拿 用户授权信

2 access_token 只能在 sso.hellojm.cn 页面中登录后由 服务器给出, 若登录后将其存在 localStorage 中 可供所有子系统使用, 相当于 子系统只能在 用户认证中心 中拿钥匙, 这一步就是 单点登录 的核心所在

### 8.2 jwt + xdm + sid + redis 版本的 SSO

第一种纯前端的实现方案, jwt实现了后端的无状态, 通过 XDM 跨域方式 实现了单点登录, 但是在单点登出的时候, 需要前端页面通过 XDM 方式告诉 sso.hellojm.cn , 然后 sso.hellojm.cm 通过 iframe 一个个地把 其它系统域下的 localStorage 删掉, 这样的话需要 iframe 中嵌套 iframe, 对于性能及不友好

而且,

**因此对第一种方案进行改进, 大致流程如下**:

1 客户端: 打开 admin.hellojm.cn 页面, 检查是否 localStorage 中有 access_token , 有则带上它 发送 `GET /api/usr` 请求, 若没有则通过 XDM 方式 去 sso.hellojm.cn 中查看是否 localStorage 中有 access_token, 拿过来, 若没没有则什么都不做

2 admin服务器: 获取 access_token , 解密jwt, 得到 id, sid, expires, max-age。检查过期时间, 若过期则返回过期提示; 没过期, 检查 sid 是否在 redis 中有, 有的话, 证明之前登录过(存在全局会话), 则拿着 id 去mysql中拿用户必须信息 以及 更新后的 jwt 返回给前端

3 客户端: 更新 localStorage 中的 access_token , 以及 redux 中的用户信息

以上是客户端中通过js检查是否有登录的逻辑, 在其它子系统页面也是这样做, 是`单点登录`中的`核心`; 以下是用户手动登录的逻辑:

1 客户端: 打开 admin.hellojm.cn 页面, 用户输入 账密 , 点击登录, 跳转到 `sso.hellojm.cn?from=admin.hellojm.cn`

2 sso服务器: 验证 账密 , 合法, 则 创建 `sid` 以及 `access_token` , 将 sid 存到 redis , 将 access_token 返回给客户端

sid 为随机字符

access_token 由 jwt 生成, 有 用户id, 用户role, 过期时间expires, 生命周期max-age, 会话凭证sid

3 客户端: 将 access_token 存到 localStorage , 跳转页面到 `admin.hellojm.cn?access_token=xxx.yy.z`

4 客户端: 检测到有 access_token 参数, 则保存到 localStorage , 并去掉 access_token , 之后的授权请求需带上 access_token 在 authorization 头

单点登出的逻辑:

1 客户端: 在 admin.hellojm.cn 系统内的某个页面(如 admin.hellojm.cn/#/article) 点击 登出 按钮, 带上 access_token 发送请求给后端

2 admin后端: 检查 access_token 是否合法, ... , 合法后, 从redis删除sid, 返回成功提示

3 客户端: 获取到成功提示, 删除 localStorage 中的 access_token 以及 通过 XDM 删除 sso.hellojm.cn 中的 access_token , 并跳转路由到未登录页面

**细节实现**:

1 如 admin子系统: 每次拿着 access_token 请求完数据后 , 会返回一个 更新后的 access_token , 并更新 admin.hellojm.cn 中的 localStorage 以及 通过 XDM 更新 sso.hellojm.cn 中的 localStorage

2 redis 中的 sid 是全局会话的关键, 有了它证明 用户在该系统已经登录过了, 而且 admin后端 和 www后端 都可以访问它

---

## 九.小节

为了弄懂 SSO 并自己实现一个, 搞了整整一周, 从一开始对这一板块将什么都不懂, 到初见认识各种协议。google 的查边了, 网课也查遍了, 身边的大神也问了, 但是就是不能符合自己的预期。

最后, 根据自己一开始的方案的不足, 再结合前人的经验(如各种协议), 自己写出了符合自己需求的功能

突然想起每次面试的最后老师给自己的鼓励: 代码是粥, 花的时间都是值得的

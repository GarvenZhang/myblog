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

const fetch = require('node-fetch')
const github = require('../../config').github

module.exports = async function (ctx, next) {

  const postData = JSON.stringify({
    code: ctx.query.code,
    client_id: github.client_id,
    client_secret: github.client_secret
  })

  await fetch(github.tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: postData
  })
    .then(res => res.json())
    .then(data => fetch(`${github.userUrl}?access_token=${data.access_token}`))
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
      //


    // .then(res => {
    //
    // })

}

# 常用curl命令

1 curl [url]: 查看网页源代码

2 curl -i [url]: 显示http响应报文

$ curl -i https://game.hellojm.cn/login.html

CRLF: 回车换行

3 curl -v [url]: 显示一次http通信的过程，包括端口链接和http请求头信息

若想要查看更信息的信息，可 curl --trace [文件名] [url]

```

*   Trying 120.79.205.192...                                      |                                                      
* TCP_NODELAY set                                                 |                                         
* Connected to game.hellojm.cn (120.79.205.192) port 443 (#0)     |                                                                                     
* TLS 1.2 connection using TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256  |                                                                                         
* Server certificate: game.hellojm.cn                             |                                                             
* Server certificate: TrustAsia TLS RSA CA                        |                                                                 
* Server certificate: DigiCert Global Root CA                     | // 请求报文 响应报文                                                                 
> GET /login.html HTTP/1.1                                        | 方法 URL 版本[CRLF](请求行)                                                
> Host: game.hellojm.cn                                           | 首部字段名: 值[CRLF]                                              
> User-Agent: curl/7.54.0                                         | .                                                
> Accept: */*                                                     | 首部字段名: 值[CRLF]                                    
>                                                                 | [CRLF] (下一行本该是 实体主体, 但通常不用)                        
< HTTP/1.1 200 OK                                                 | 版本 状态码 短语[CRLF](状态行)                                        
< Server: nginx/1.10.3 (Ubuntu)                                   | 首部字段名: 值[CRLF]                                                    
< Date: Mon, 02 Jul 2018 02:26:50 GMT                             | .                                                            
< Content-Type: text/html; charset=utf-8                          | .                                                                
< Content-Length: 974                                             | .                                            
< Connection: keep-alive                                          | .                                                
< Vary: Accept-Encoding                                           | .                                            
< Last-Modified: Mon, 18 Jun 2018 13:01:50 GMT                    | .                                                                    
< Cache-Control: max-age=0                                        | .                                                               
<                                                                 | CRLF                            
<!DOCTYPE html>                                                   | 实体主体(有些响应报文不用)                                        
<html lang="en">                                                  |                                             
<head>                                                                                              
  <meta charset="UTF-8">
  <title>Chatroom-Login</title>
  <script></script>
  <link rel="stylesheet" href="/css/reset.css">
<link href="/css/login.css" rel="stylesheet"></head>
<body>
  <div class="wrap">
    <div class="dialogue-wrap"></div>
    <div class="popup-wrap hide">
      <p>##</p>
      <p>Enter: post message</p>
      <p>##</p>
      <p>Shift: exit chatroom</p>
      <p>##</p>
      <p>Esc: exit current window</p>
    </div>
    <div class="tips-wrap">
      <p class="tips-line">################################################################################################################################################################################################################################</p>
      <p><span class="tips-title">-h or --help: </span>&nbsp;<span> Print Help (this message) and exit</span></p>
    </div>
  </div>
<script type="text/javascript" src="/js/login.js"></script></body>
* Connection #0 to host game.hellojm.cn left intact

```        

4 curl -X [HTTP方法] [url]: 以特定的方法请求

5 curl --referer [url]: 设置referer请求头

6 curl --user-agent "[User Agent]" [url]: 设置User Agent请求头

7 curl --cookie "[cookie]" [url]: 设置cookie

8 curl --header "请求头字段": 添加响应头

如 curl --header "Content-Type:application/json" https://www.hellojm.cn

9 curl --user [name]:[password] [url]: http认证

## CRLF

回车: CR，Carriage Return, 用符号'\r'表示, 十进制ASCII代码是 13, 十六进制代码为 0x0D

换行: LF，Line Feed, 使用'\n'符号表示，ASCII代码是 10, 十六制为 0x0A

在文本处理中, CR, LF, CR/LF 是不同操作系统上使用的换行符

1 Dos 和 windows 采用“回车+换行，CR/LF”表示下一行

2 UNIX/Linux 采用“换行符，LF”表示下一行

3 苹果机(MAC OS 系统)则采用“回车符，CR”表示下一行

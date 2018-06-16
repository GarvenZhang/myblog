## nginx实在远程上的服务器，一定要开启浏览器的无痕模式，不然很容易受到缓存的干扰

## 1.启动

```

// 启动
nginx -c [nginx.conf地址]

// 重启
nginx -s reload

```

## 2.测试

```
nginx -t
```

## 3.停止

```

// 查询nginx主进程号[在进程列表里 面找master进程，它的编号就是主进程号了。]
ps -ef | grep nginx

// 从容停止Nginx：
kill -QUIT 主进程号

// 快速停止Nginx：
kill -TERM 主进程号

// 强制停止Nginx：
pkill -9 nginx

```

## 4.代理https实例

```
## 表明后台的一台服务器地址和端口。当客户端有请求到nginx服务器的时候，upstream模块根据这里配置的server，
## 该对应的请求转发到这些server服务上，由这些server来处理请求，然后把响应结果告知upstream模块
upstream myblog {
  server 127.0.0.1:3003 weight=1;
  keepalive 64;
}

server {
  listen 127.0.0.1:80;
  server_name www.hellojm.cn;

  rewrite ^(.*) https://$host$1 permanent;
}

server {

  ## 监听ip和端口。当nginx服务器的该ip端口有请求访问，则调用该server的配置来处理该请求
  ## 使用h2: 加上 ssl http2 
  listen 127.0.0.1:443 ssl http2;
  
  ## 域名。nginx对进入该虚拟主机的请求，检查其请求Host头是否匹配设置的server_name，如果是，则继续处理该请求  
  server_name www.hellojm.cn; #填写绑定证书的域名

  ssl on;
  ssl_certificate /etc/nginx/1_www.hellojm.cn_bundle.crt;
  ssl_certificate_key /etc/nginx/2_www.hellojm.cn.key;
  ssl_session_timeout 5m;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配置
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配置
  ssl_prefer_server_ciphers on;

  if ($ssl_protocol = "") {
    rewrite ^(.*) https://$host$1 permanent;
  }

  access_log /var/log/nginx/www.hellojm.cn.access.log;
  error_log /var/log/nginx/www.hellojm.cn.error.log;
  
  ## 对于HTTP请求，其被用来详细匹配URI和设置的location path。一般这个uri path会是字符串或者正则表达式形式
  location / {
    
    ## 设置代理请求头。由于经过了反向代理服务器，所以后台服务器不能获取真正的客户端请求地址等信息，这样，就需要把这些ip地址，设置回请求头部中。
    ## 然后，我们在后台服务上，可以使用request.get("X-Real-IP")或者request.get("X-Forwarded-For")获取真实的请求ip地址。
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Nginx-Proxy true;
   
    ## 代理转发。配置了该项，当匹配location path的请求进来后，会根据upstream设置，请求后台服务器上的proxy_pass的请求
    proxy_pass http://myblog;
    proxy_redirect off;
  
  }
}
```
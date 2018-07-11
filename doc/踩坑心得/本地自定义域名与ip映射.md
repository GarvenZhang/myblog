# 在本地自定义多个域名模拟线上环境

在线上可以通过 [https://www.hellojm.cn](https://www.hellojm.cn), [https://game.hellojm.cn](https://game.hellojm.cn), [https://game.hellojm.cn](https://game.hellojm.cn) 来访问我的项目，有域名的区分就能享受到域名相关的服务或者技术，
比如sso，比如跨域，比如优化

在开发环境，即本地环境中，我也想模拟线上环境来减少 开发环境 与 线上环境 的差异，我不想再通过 localhost:3003, localhost:8080, 这样的方式来区分项目了，项目多了端口就会多，记起来就繁琐。因此我要在本地也实现通过域名访问

dns在本地查询的时候实际上是 host -> ip 的映射，不关于端口的事情，因此要做的第一步是：把电脑上的 hosts 文件修改下，添加相关记录(mac 中是` sudo vi /private/etc/hosts `)

```

#Local sites
127.0.0.1       www.localhost.cn
127.0.0.1       admin.localhost.cn
127.0.0.1	    game.localhost.cn

```

这下在本地电脑上搞定了 自定义域名 到 ip 的映射，比如 `ping` 一下 www.localhost.com 就会显示 127.0.0.1

接下来是端口的转发，这是web服务器的事情，nginx，apache都可以干这事儿，这里要说下我踩的两个坑:

1 mac 自带apache, 在`/etc/apache2`, [点此看相关笔记](../apache.md)。或许是之前不懂事，开了apache，然后我调试了整个上午的nginx甚至重装了nginx也不急于事，一直处于 `403 forbidden xxxx permision` 的界面，后来打开控制台查看抓包情况的时候
才看到响应头中赤裸裸地显示着 `Server: Apache`, 我顿时心态爆炸。

2 把apache关了，开了熟悉的ngnix，然后又是一个坑，一个劲儿处于`invalid Host headers`, google了下发现是 webpack-dev-server 的一些安全策略问题, 把 `disableHostCheck` 设为 `true`即可，[我是看这篇文章搞定的](https://tonghuashuo.github.io/blog/webpack-dev-server-invalid-host-header.html)

当然我跳入第二个坑的时候没有那么快爬上来，而是认识到了另一个好东西[whistle](https://github.com/avwo/whistle/blob/master/README-zh_CN.md)，nodejs写的，可用于http请求代理，这个就更加轻量级更简单了

```

www.localhost.cn	host://127.0.0.1:3003
admin.localhost.cn  host://127.0.0.1:8080
game.localhost.cn   host://127.0.0.1:3001

```

---

## 总结

1 添加本地域名与ip映射(修改hosts文件)

2 web服务器进行端口转发(nginx/apache/whistle)

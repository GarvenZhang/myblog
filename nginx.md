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
## 1.sudo之后install还是permission

```
sudo npm i [package name] --unsafe-perm
```

## 2. 发布npm包

```

// 登录信息
npm adduser

// 有package.json
{
  "name": "say-hello-world", // package的名称
  "author": "yourname <me@hello.com> (http://hello.com)", // 作者的相关信息
  "version": "0.0.1", // 版本号(semantic version)
  "main": "index" // 入口文件，当在其他文件中require('say-hello-world')时，将会加载index.js
}

// 发布 
npm publish

```
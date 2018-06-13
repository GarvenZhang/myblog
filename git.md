# git 学习笔记

## 一.将已有的项目添加到github

1. 先从github创建一个空的仓库，并复制链接地址

2. 初始化本地仓库，并提交内容到本地

```
git init

git add .

git commit -m '提交说明'
```

3. 连接到远程仓库，并将代码同步到远程仓库

> 创建一个 upStream （上传流），并将本地代码通过这个 upStream 推送到 别名为 origin 的仓库中的 master 分支上
> -u ，就是创建 upStream 上传流，如果没有这个上传流就无法将代码推送到 github；同时，这个 upStream 只需要在初次推送代码的时候创建，以后就不用创建了

```
git remote add origin 远程仓库地址

git push -u origin master
```

> 取消本地与远程库的关联

```
git remote remove origin
```

4. 继续修改本地代码，然后提交并推送到github

> 如果是多人协作开发的话，一定要先 pull ，将 github 的代码拉取到本地，这样在 merge 解决冲突的时候稍微简便些。
  默认拉取到 master分支（如果只是自己做这个项目，可以忽略pull）

```
git add .

git commit -m '提交说明'

git pull 仓库别名 仓库分支名

git push 仓库别名 仓库分支名
```

## 二. 在本地删除github上某个分支上的文件夹

以删除.idea文件夹为例

```
git rm -r --cached .idea  #--cached不会把本地的.idea删除

git commit -m 'delete .idea dir'

git push -u origin master
```

## 三. 若add之后发现某个文件add错了

> 省略filename则将刚才add的全撤销

```

git reset HEAD [filename]

```

## 四. remote地址改变后如何修改基本配置：

```

git remote remove [name]

git remote add origin 远程仓库地址

git push -u origin master

```

## 五 git clone 时重命名文件夹

```
git clone xxxxx [name]
```

## 六.git clone 特定分支

```
git clone -b 分支名 git地址
```
 
## 七.分支

```

// 查看

git checkout [分支名] -a

// 切换

git checkout [分支名]

// 或者：创建并切换

git checkout -b [分支名]

// 删除本地
git branch -d [分支名]

// 删除远程分支
// 需注意的是：不能删除远程默认分支，要删除需在setting中修改默认分支
git push origin :[分支名]

```

## 八.回滚

```

// 查看commit历史
git log

// 从历史记录中复制hash号
git reset --hard [hash号]

```

## 九.更新

```

// 更新单个文件夹
git fetch
git checkout origin/master -- path/to/file

```

# git 常用命令

# 创建版本库

## 1. git init 初始化本地仓库

~~~
git init
~~~



## 2. git clone 克隆远程仓库版本

~~~
git clone <url> 
~~~


# 修改和提交

## 1. git status 查看文件状态

~~~git
git status
~~~


## 2. git diff 查看变更内容
~~~
git diff
~~~



# 4. git add 文件添加进缓存

把所有文件添加进缓存

~~~
git add .
~~~



# 5. git checkout 放弃暂缓存文件

~~~
git checkout <文件名>
~~~



# 6. git commit 提交文件

将缓存区的内容添加到仓库中

~~~
git commit -m '文字描述'
~~~





# git config 配置用户名和邮箱地址

~~~
git config --global user.name '用户名'
git config --global user.email '邮箱地址'
~~~


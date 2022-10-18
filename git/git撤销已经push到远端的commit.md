# git撤销已经push到远端的commit

在 使用 git 时，push 到远端后发现 commit 了多余的文件或者缺少的文件，<font color="red">此时希望能回退到以前的版本</font>

1.先在本地回退到相应的版本

~~~js
git reset --hard <版本号>
// 注意使用：--hard 参数会抛弃当前工作区的修改
// 使用 --soft 参数的话会回退到之前的版本，但是保留当前工作区的修改，可以重新提交
~~~



2.如果此时使用命令

~~~js
git push origin <分支名>
~~~

会提示本地的版本落后于远端的版本；



3.为了覆盖掉远端的版本信息，使远端的仓库也回退到相应的版本，需要加上参数`--force`

~~~js
git push origin <分支名> --force
~~~


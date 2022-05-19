# 项目bug

# 1. vue 中 使用 a标签锚点效果失效

解决方法：

~~~vue
<a @click="scoll(id)"></a>

 methods: {
            scoll(id) {
                document.getElementById(id).scrollIntoView()
            }
}
~~~


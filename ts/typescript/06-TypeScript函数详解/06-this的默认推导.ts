// this 是可以被推导出来的  
// info 对象 （TypeScript 推导出来的）
const info = {
    name: '张三',
    eating() {
        // 这里的 this指向 info.name
        console.log(this.name + ' eating');        
    }
}

// TypeScript 在编译过程中 帮我们默认推导出来的
info.eating()
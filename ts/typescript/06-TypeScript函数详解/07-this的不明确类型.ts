type ThisType = { name: string }

function eating(this: ThisType) {
    console.log(this.name + ' eating');
}

const info = {
    name: '张三',
    eating: eating
}

// 隐式绑定
info.eating()


// eating()    // 报错 类型为“void”的 "this" 上下文不能分配给类型为“ThisType”的方法的 "this"

// 显示绑定
eating.call({name: '李四'})
eating.apply({name: '王五'})

export {}
// unknown 是 TypeScript 中比较特殊的一种类型，它用于描述类型不确定的变量

function foo():string {
    return 'foo'
}

function bar():string {
    return 'bar'
}

let flag = true

// 这里由于判断的结果不同，数据类型也会发生变化
let result: unknown

if(flag){
    result = foo()
}else{
    result = bar()
}

// unknown 和 any 的区别
// unknown 类型只能赋值给 any 和 unknown 类型
// any 类型可以赋值给任意类型

// unknown 可以防止 别人拿到这个值去滥用
// let message:string = result
// let num:number = result


console.log(result);    // foo



export {}
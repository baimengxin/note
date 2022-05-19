// ?? 运算符
// 它是 ES11 增加的新特性
// 空值合并操作符（??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数

// let message: string | null = "Hello World"
let message: string | null = null


const content = message ?? '您好啊！'
// const content = message ? message : '您好啊！'
console.log(content);   // 您好啊！



export {}
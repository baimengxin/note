
// 假如我这里是可选类型 那么必然会报错，因为用 ts-node 执行的时候，ts-node 本身自带 tsconfig.json ，它自己会检查
function printMessageLength(message?: string){
    //  error TS2532: Object is possibly 'undefined'
    console.log(message.length);
}


// 假如我想要它不报错，可以 类型缩小
// function printMessageLength(message?: string) {
//     // 在 message 有值的时候
//     if (message) {
//         console.log(message.length);
//     }
// }

// 假如不想加 if 判断 可以用 非空类型断言 !
// 注意：非空断言是需要 确定传入的参数是有值的情况
// function printMessageLength(message?: string){
//     console.log(message!.length);
// }

printMessageLength('abc')   // 3
// printMessageLength()     // 报错
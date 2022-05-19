// 在TypeScript中，如果编写了一个add函数，希望可以对字符串和数字类型进行相加，应该如何编写呢

// 这种方法是错误的
// function add(num1: number | string, num2: number | string) {
//     return num1 + num2  // 报错 运算符“+”不能应用于类型“string | number”和“string | number”

//     return num1 - num2  // 报错 算术运算右侧必须是 "any"、"number"、"bigint" 或枚举类型
// }

/**
 * 通过联合类型有两个缺点：
 * 1. 进行很多的逻辑判断(类型缩小)
 * 2. 返回值的类型依然是不能确定
 */

// 这个时候可以使用 重载签名（overload signatures）
// 一般是编写两个或者两个以上的
function add(num1: number, num2: number): number
function add(num1: string, num2: string): string
function add(num1: boolean, num2: boolean): boolean


function add(num1: any, num2: any){
    // 这里也可以判断类型来做对应的操作
    // if(typeof num1 === 'string' && typeof num2 === 'string'){
    //     return num1.length + num2.length
    // }
    return num1 + num2
}

const result1 = add(10, 20)
const result2 = add('abc', 'def')
console.log(result1);   // 30
console.log(result2);   // abcdef

// 注意：在函数的重载中，实现函数是不能直接被调用的
// add({name: 'why'}, {age: 18})   // 报错，没有与此调用匹配的重载
const result3 = add(true, false)    // 如果有与之匹配的重载就不会报错
console.log(result3);   // 1

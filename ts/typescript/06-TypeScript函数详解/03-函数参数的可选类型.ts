// 注意：必选参数不能位于可选参数后

// 错误写法
// function bar(x?:number, y:number){
// }

// 正确写法
// 可选类型默认是 类型 | undefined 的联合类型
// 可选参数默认有个 undefined 类型 

// y -> number | undefined
function foo(x: number, y?: number) { 
    console.log(x);
    console.log(y);
}


foo(10, 20) // 10 20
foo(110)    // 110 undefined


export {}
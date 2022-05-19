// 让一个参数本身是可选的
// 一个参数一个可选类型的时候，它其实类似于是这个参数是 类型 | undefined 的联合类型

// 可选类型
// function foo(message?: string){
//     console.log(message);   
// }

// foo()   // undefined

// 联合类型
function foo(message: string | undefined){
    console.log(message);   
}

// 这种情况必须指定传入 undefined 类型
foo(undefined)   // undefined

// 两种写法有点类似
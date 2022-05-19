// 类型约束

// 这里限定传入的参数是：数字类型 
function foo(number: Number){
    console.log("Number类型：" + number);
}

function fn(string: String){
    console.log('String类型的长度：'+ string.length);
    
}

// fn1('123')  // 类型“string”的参数不能赋给类型“Number”的参数。

// foo()   // 未提供 "number" 的自变量

foo(1)

fn('hello')

/**
 * ts 的类型约束规定了什么参数就得传入什么参数
 * 
 * 
 * 
 * */ 
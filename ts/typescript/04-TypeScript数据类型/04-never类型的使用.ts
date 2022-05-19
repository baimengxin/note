// never 表示永远不会发生值的类型，比如一个函数
// 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数不会返回东西
// 在这种情况下，写 void 类型 或者 其他类型作为返回值类型都不合适，我们可以使用 never 类型


function fn1(): never {
    // 死循环
    while (true) {
        // console.log(1);
    }
}

function fn2(): never {
    // 抛出错误
    throw new Error()
}

// 那么 never 有什么应用场景呢
// 这里的例子用到了 联合类型
function handleMessage(message: number | string) {
    switch (typeof message) {
        case 'string':
            console.log('string处理方式处理message');
            break
        case 'number':
            console.log('number处理方式处理message');
            break
        default: 
            const check: never = message
    }
}

handleMessage('abc')    // string处理方式处理message
handleMessage(123)      // number处理方式处理message








// 泛型：类型的参数化

// 在定义这个函数时，我不决定这些参数的类型
// 而是让调用者以参数的形式告知，我这里的函数参数应该是什么类型

function sum<Type>(num: Type): Type {
    console.log(num);
    return num
}

// 1. 明确的传入类型
sum<number>(20)
sum<{name: string}>({name: '张三'})
sum<any[]>(['abc'])

// 2. 类型推导
sum(10) // 会被推导出 字面量类型
sum('123')
sum({age: 18})

// 想要明确类型
sum<number>(11)


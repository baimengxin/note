interface IPerson {
    name: string
    age: number
    height: number
}

// 这样会报错
// const p: IPerson = {
//     name: '张三',
//     age: 18,
//     height: 1.88
//     address: '广州市'
// }

const info = {
    name: '张三',
    age: 18,
    height: 1.88,
    address: '广州市'
}

// 这样反而不会报错，是因为在 typescript 里它在这里做了擦除的操作，把多余的属性擦除掉了
const p: IPerson = info

// 例子 2
function printInfo(person: IPerson) {
    console.log(person);
    console.log(person.name);
    // console.log(person.address);    // 报错

    // 虽然将全部参数都传进去了，但是真正能使用的只有是通过上面接口定义的类型
}

// 这样会报错
// printInfo({
//     name: '张三',
//     age: 18,
//     height: 1.88,
//     address: '广州市'
// })

printInfo(info)

// 开发中，我们可能会先处理多余的参数，然后再传进去
// 在 Ts 里允许，我们使用字面量赋值的方式，来直接把全部参数传进去，但是只用到我们自己的属性
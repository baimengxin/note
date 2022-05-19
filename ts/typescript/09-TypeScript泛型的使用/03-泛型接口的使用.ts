// 泛型也可以给默认类型
interface IPerson<T1 = string, T2 = number> {
    name: T1,
    age: T2
}

// 这里指定了类型
// const p: IPerson<string, number> = {
//     name: '张三',
//     age: 18
// }

// 如果没指定类型，则会报错，这时可以给泛型指定默认类型
// 这里关键在于 不会做类型推导
const p: IPerson = {
    name: '张三',
    age: 18
}
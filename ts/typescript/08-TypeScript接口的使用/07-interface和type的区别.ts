// 允许定义重复的接口，如果定义了重复的接口，则重复的接口会把接口的属性合并到一起
interface IFoo {
    name: string
}

interface IFoo {
    age: number
}

// 上面的写法相当于
// interface  IFoo {
//     name: string,
//     age: number
// }

// 重复的接口名称，会把里面的属性合并起来
const foo: IFoo = {
    name: '张三',
    age: 18
}

// 例子二
// document.getElementById('app') as HTMLDivElement
// window.addEventListener

// 这两个默认就携带了一些 typescript 的类型，这是因为下载 ts 的时候默认会帮我们下载一些库，比如 math、dom相关的api

// interface Window {
//     age: number
// }
// window.age = 20
// console.log(window.age);

// 类型别名
// 不允许定义重复的名称
type IBar = {
    name: string
}

// type IBar = {
//     age: number
// }

// type Window = {}

// 建议：
// 1. 如果是定义非对象类型的，通常推荐使用 type 类型别名
// 2. 如果是定义对象类型的，推荐使用 interface 接口

// interface 和 type 两者区别
// interface 可以重复的对某个接口来定义属性和方法
// type 定义的是别名，别名是不能重复的
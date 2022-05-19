// 通过 类型(type)别名来声明对象类型
// type InfoType = {
//     name: string,
//     age: number
// }

// 另一种方式声明对象类型： 接口 interface
// 在其中可以定义可选类型
// 也可以定义只读属性
interface InfoType {
    readonly name: string,
    age: number,
    friend?: {
        name: string
    }
}

const info: InfoType = {
    name: '张三',
    age: 18,
    friend: {
        name: '李四'
    }
}

console.log(info.friend?.name);
console.log(info.name);
// info.name = '王五'
info.age = 20

// 类 本身也可以是一种 数据类型
class Person{
    name: string = '张三'

    eating () {}
}

const p = new Person()

const p1: Person = {
    name: '李四',
    eating () {}
}

function printPerson(p: Person) {
    console.log(p.name);
}


printPerson(new Person())
// 类 的可能用法
printPerson({name: 'kobe', eating: function () {} })

export {}
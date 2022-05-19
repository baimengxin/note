// class Person {
//     name: string;
//     age: number;

//     eating() {
//         console.log(this.name + 'eating');      
//     }
// }

// 这里在严格模式下会报错，需要给 name 和 age 一个初始值

// class Person {
//     name: string = '张三';
//     age: number = 18;

//     eating() {
//         console.log(this.name + 'eating');      
//     }
// }
// 给了默认值就会写死，如果想让用户决定呢？

class Person {
    name: string;
    age: number;

    // 使用 constructor 构造器 来不写默认值
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    eating() {
        console.log(this.name + 'eating');      
    }
}

// 通过 constructor 构造器 来让用户决定
const p = new Person('张三', 18)
console.log(p.name);
console.log(p.age);
p.eating()

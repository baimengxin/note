class Person {
    // 1. 只读属性是可以再构造器中赋值，赋值之后就不可以修改
    // 2. 属性本身不能进行修改，但是如果它是对象类型，对象中的属性是可以修改
    readonly name: string
    readonly friend?: Person

    age?: number

    constructor(name: string, friend?: Person) {
        this.name = name
        this.friend = friend
    }
}

const p = new Person('张三', new Person('李四'))
console.log(p.name);
console.log(p.friend);

// 不可以直接修改
// p.name = '王五' // 无法分配到 "name" ，因为它是只读属性。
// p.friend = new Person('王五')   // 无法分配到 "friend" ，因为它是只读属性


// p.age = 20
// console.log(p.age);

if(p.friend){
    p.friend.age = 30
}
console.log(p.friend);

// 总结：如果有一个属性我们不希望外界可以任意修改，只希望确定值后直接使用，那么可以使用 readonly

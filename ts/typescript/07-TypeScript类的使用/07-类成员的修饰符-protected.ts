// protected： 在类内部和子类中可以访问

class Person {
    protected name: string = '父类';
}

class Student extends Person {
    getName() {
        return this.name
    }
}


const stu = new Student()
console.log(stu.getName());
// console.log(stu.name);  // 属性“name”受保护，只能在类“Person”及其子类中访问


export {}
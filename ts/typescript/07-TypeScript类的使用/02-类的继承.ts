class Person {
    name: string = '张三';
    age: number = 18

    eating() {
        console.log(this.name + 'eating');
    }
}

// 使用关键字 extends 来继承父类
class Student extends Person{
    sno: number = 10

    studying() {
        console.log('studying');
    }
}

class Teacher extends Person {
    id: number = 20;

    teaching() {
        console.log('teaching');
    }
}

const stu = new Student()

// 这里修改了 类的默认值
stu.name = '学生'
stu.age = 10,
console.log(stu.name);  // 学生
console.log(stu.age);   // 10
stu.eating()
stu.studying()

const teach = new Teacher()
teach.name = '老师'
teach.age = 20
console.log(teach.name);  // 老师
console.log(teach.age);   // 20
teach.eating()
teach.teaching()

export {}

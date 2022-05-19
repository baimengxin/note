// 这里使用 constructor 构造器来让用户传入需要的值
class Person {
    name: string;
    age: number;

    // 父类的构造方法
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    eating() {
        console.log('父类的 eating');
    }
}

// 使用关键字 extends 来继承父类
class Student extends Person{
    sno: number;
    
    constructor(name: string, age: number, sno: number){
        // 使用关键字 super 调用父类的构造方法，对父类中的属性进行初始化
        super(name, age)
        this.sno = sno
    }

    // 子类也可以重写 父类的方法
    eating() {
        // 如果想要也调用父类的方法
        super.eating()
        console.log('子类的 eating');
    }

    studying() {
        console.log(this.sno + ' studying');
    }
}


const stu = new Student('学生', 10, 101)
console.log(stu.name);  // 学生
console.log(stu.age);   // 10
stu.eating()
stu.studying()

export {}

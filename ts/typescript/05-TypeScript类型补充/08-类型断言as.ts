// <img id="why" />

// 1. 类型断言 as
const el = document.getElementById('why') as HTMLImageElement
// 这里的 el 会被推导成 HTMLElement

// el.addEventListener

// 因为我们确定我们拿到的属性类型，所以可以设置断言 HTMLImageElement
// 因为图片标签才有 src 属性，所以才不会报错
el.src = "url地址"  


// 2. 另外案例：Person 是 Student 的父类
// Person 是 人的意思
class Person {

}

// 子类继承父类
class Student extends Person {
    // Student 类的方法
    studying(){

    }
}

// 这里要求传入一个人，学生就是人，然后要调用学生本来的方法，因为人里面没这个方法，所以需要把范围缩小到学生，直接从学生找
function sayHello(p: Person){
    // 类型“Person”上不存在属性“studying”   报错
    // 解决方法 把类型设置为 Student
    // 因为只有 Student 才有这个方法,直接调用是不行的
    (p as Student).studying()
}

// 学生对象是一个人
const stu = new Student()
sayHello(stu)


// 3. 了解：as any/unknown (不推荐)
const message = "Hello World"
// const num: number = message as number
// const num: number = (message as unknown) as number
// 在开发中不推荐这样使用，容易造成类型混乱
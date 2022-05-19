// 静态成员：可以通过类来 直接访问的属性或者方法
// 在 TypeScript 中通过关键字 static 来定义：

class Person {
    static Pname: string = '张三';

    static action (){
        console.log(this.Pname + ' 静态成员方法');
    }
}

// 可以直接访问类的属性或者方法
console.log(Person.Pname);
Person.action()

export {}
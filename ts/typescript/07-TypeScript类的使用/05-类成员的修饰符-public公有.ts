// public 修饰符是在任何地方可见、公有属性或者方法，默认编写的属性就是 public 的
class Person {
    public name: string = '';

    public action() {
        console.log('Person action');
    }
}

// 可以在外面引用 赋值 修改
const son = new Person()
son.name = '张三'
console.log(son.name);
son.action()

export {}
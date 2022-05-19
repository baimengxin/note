interface ISwim {
    swimming: () => void
}

interface IFly {
    flying: () => void
}

// const a: ISwim = {
//     swimming() {}
// }

// function foo(swim: ISwim) {
//     swim.swimming()
// }

// 可以用类来实现继承接口
class Animal { }

// 继承：只能实现单继承
// 实现：实现接口，类可以实现多个接口
class Fish extends Animal implements ISwim, IFly {
    swimming() {
        console.log('Fish Swimming')
    }

    flying() {
        console.log('Fish Flying');
    }
}

class Person implements ISwim {
    swimming() {
        console.log('Person Swimming');
    };
}

// 编写一些公共的 API：面向接口编程
// 所有实现了接口的类对应的对象，都是可以传入的

// function swimAction(swimable: Fish) {
//     swimable.swimming()
// }

// 2. 为了更具备通用性，修改了 类型
function swimAction(swimable: ISwim) {
    swimable.swimming()
}
    
// 1. 调用方法的时候需要传入一个 Fish 对象
swimAction(new Fish())

// 3. 当具备通用性的代码时，可以直接传入相对于的对象
swimAction(new Person())

// 但是这 swimAction 方法并不具备通用性，比如我想这样传的时候，就还缺少一个 flying方法
swimAction({swimming: function() {}})
// 4. 这样写也不会报错了

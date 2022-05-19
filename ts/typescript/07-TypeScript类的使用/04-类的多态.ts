class Animal{
    action() {
        console.log('animal runing');
    }
}

class Dog extends Animal{
    action() {
        console.log('dog runing');
    }
}

class Fish extends Animal{
    action() {
        console.log('fish runing');
    }
}

// animal: dog/fish
// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
    // 传入的数组遍历每一个对象
    animals.forEach(animal => {
        // 每一个对象都重写了 action 方法
        animal.action()
    })
}

makeActions([new Dog(), new Fish()])
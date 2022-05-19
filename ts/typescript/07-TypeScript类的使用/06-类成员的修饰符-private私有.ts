// private 修饰的是仅在同一类中可见、私有的属性或方法

class Person {
    private name: string = '默认值';

    // 封装两个方法，通过方法来访问 name
    getName() {
       return this.name
    }
    
    // 修改 name
    setName(newName: string) {
        return this.name = newName
    }
}

// 当属性变成私有时，只能通过 类里面向外暴露的方法来修改值或访问值，无法在外部直接访问值或修改值
const p = new Person()
console.log(p.getName());

p.setName('张三')
console.log(p.getName());

export {}
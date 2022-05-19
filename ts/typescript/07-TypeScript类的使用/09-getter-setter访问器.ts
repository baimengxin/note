class Person {
    // 规范 私有属性 默认 下划线开头
    private _name: string

    constructor(name: string) {
        this._name = name
    }

    // 访问器 setter/getter

    // setter
    set name(newName) {
        this._name = newName
    }

    // getter
    get name() {
        return this._name
    }
}

const p = new Person('why')
console.log('一开始 ' + p.name);

p.name = 'coderwhy'
console.log('修改后 ' + p.name);

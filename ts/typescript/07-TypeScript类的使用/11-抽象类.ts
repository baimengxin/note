// 要求传入的形状
function makeArea(shape: Shape){
    // 不管是什么形状都要调用的方法
    return shape.getArea()
}

// 父类 
abstract class Shape{
   abstract getArea(): number
}

// 矩形类
class Rectangle extends Shape {
    private width: number
    private height: number

    constructor(width: number, height: number){
        super()
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    private r: number

    constructor(r: number) {
        super()
        this.r = r
    }

    getArea() {
        return this.r * this.r * 3.14
    }
}

// 实例化
const rectangle = new Rectangle(10, 20)
const circle = new Circle(10)

console.log(makeArea(rectangle))
console.log(makeArea(circle))

// 为了防止 传入的数据是正确的，需要把 any 类型换成 Shape 类型
// makeArea(123)
// makeArea(undefined)
// makeArea('123')

// 为了防止传入 Shape类 实例化
// makeArea(new Shape())   // 当为抽象类时，报错

// 把 Shape类 转换成 抽象类 即可

/**
 * 抽象类的特点
 * 
 * 1. 抽象类是不能被实例化的 (也就是不能通过 new 创建)
 * 2. 抽象方法必须被子类实现，否则该类必须是一个抽象类
 * */ 

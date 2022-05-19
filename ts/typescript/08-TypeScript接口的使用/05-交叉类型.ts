// 一种组合类型的方式：联合类型
type WhyType = number | string
type Direction = 'left' | 'right' | 'center'

// 另一种组合类型的方式：交叉类型
type WType = number & string

interface ISwim {
    swimming: () => void
}

interface IFly {
    flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

// 两者的区别在于：联合类型只需满足其中一个
const obj1: MyType1 = {
    flying() {}
}

// 交叉类型必须满足全部条件
const obj2: MyType2 = {
    swimming() {},
    flying() {}
}
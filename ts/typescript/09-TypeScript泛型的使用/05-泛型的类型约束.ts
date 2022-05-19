interface ILength {
    length: number
}

function getLength<T extends ILength>(arg: T) {
    return arg.length
}

// getLength(13) // 报错，类型“number”的参数不能赋给类型“ILength”的参数
getLength('abc')
getLength(['abc'])
getLength({length: 10})
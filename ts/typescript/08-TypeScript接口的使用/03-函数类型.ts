// 开发中函数类型更推荐 用类型别名的方式来定义函数类型，可读性会更好
// type CalcFn = (n1: number, n2: number) => number

// 可调用的接口
interface CalcFn {
    (n1: number, n2: number): number
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
    return calcFn(num1, num2)
}

const add = (num1: number, num2: number) => {
    return num1 + num2
}

const muliti = (num1: number, num2: number) => {
    return num1 * num2
}

console.log(calc(10, 20, add));
console.log(calc(10, 20, muliti));



export {}
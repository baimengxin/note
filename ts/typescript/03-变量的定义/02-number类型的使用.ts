// 数字类型，在 TypeScript 中和 JavaScript 一样，不区分整数类型 (int) 和 浮点型 (double)，统一为 number 类型
let num: number = 123

// S6新增了二进制和八进制的表示方法，而TypeScript也是支持二进制、八进制、十六进制的表示

let num1: number = 100;     // 十进制
let num2: number = 0b110;   // 二进制
let num3: number = 0o555;   // 八进制
let num4: number = 0xf23;   // 十六进制
console.log(num1, num2, num3, num4);    // 100 6 365 3875

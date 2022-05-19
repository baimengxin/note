// 实现方式一：联合类型
function getLength(args: string | any[]){
    return args.length
}

console.log(getLength('abc'));
console.log(getLength([123, 32, 11]));

// 实现方式二：函数的重载
// function getLength(args: string): number
// function getLength(args: any[]): number

// function getLength(args: any): number{
//     return args.length
// }

// console.log(getLength('abc'));
// console.log(getLength([123, 32, 11]));


// 在开发中，那种简便就用那种
// 像练习的情况下，用联合类型更加方便

/**
 * 通过联合类型有两个缺点：
 * 1. 进行很多的逻辑判断(类型缩小)
 * 2. 返回值的类型依然是不能确定
 */
// 如果是遇到这种缺点，才去使用 函数重载
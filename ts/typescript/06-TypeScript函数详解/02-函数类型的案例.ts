// 需要两个参数，一个函数方法
function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number){
    // 通过方法传入两个参数
    return fn(n1, n2)
}

const result1 = calc(28, 30, function(s1, s2) {
    return s1 + s2
})
console.log(result1);

const result2 = calc(10, 20, (a1, a2)=> {
    return a1 * a2
})
console.log(result2);

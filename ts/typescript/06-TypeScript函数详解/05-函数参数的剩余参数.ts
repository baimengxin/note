// 这是只有两个参数的例子，如果有多个参数想要相加呢
// function sum(num1: number, num2: number) {
//     return num1 + num2
// }

// 多个参数相加的例子
function sum(...nums: number[]) {
    let total = 0;
    for(const num of nums) {
        total += num
    }
    return total
}

console.log(sum(10, 20));   // 30 
console.log(sum(10, 20, 30));   // 60
console.log(sum(10, 20, 30, 40, 50));   // 150

// 也可以在前面添加一个参数，后续传入的为多余参数
function sums(initalNum: number, ...nums: number[]){
    let total = initalNum;
    for(const num of nums){
        total += num
    }
    return total
}

console.log(sums(10, 20));   // 30 
console.log(sums(10, 20, 30));   // 60
console.log(sums(10, 20, 30, 40, 50));   // 150


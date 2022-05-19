// 开发规范
// 必传参数 -> 有默认值的参数 -> 可选参数
function foo(x: number, y: number = 20){
    console.log(x, y);
}

foo(10) // 10 20
foo(100, 30)    // 100 30
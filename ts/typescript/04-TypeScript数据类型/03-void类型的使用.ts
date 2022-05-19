// void 通常是用来指定一个函数是摸鱼返回值的，那么它的返回值就是 void 类型


// 这个函数我们没有写任何类型，那么它默认返回值的类型就是void的，我们也可以显示的来指定返回值是void
// void 默认可以不写
function foo(num1:number, num2:number): void{
    console.log(num1 + num2);
    
    // 我们可以 将 null 和 undefined 赋值给 void 类型，也就是函数可以返回 null 或者 undefined
    return null
}

foo(10, 20) // 30
// foo('a', 'b')    // 报错

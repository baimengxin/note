const message = "Hello World"

// let flag = Boolean(message)
// console.log(flag);  // true
// 这里相当于把 message 放到了 Boolean 这个包装类里面

// 以前我们使用 取反运算符的时候 总会返回 false
// let flag = !message
// console.log(flag);  // false


// 如果想要返回的是 true，可以使用 !! 运算符
let flag = !!message
console.log(flag);  // true



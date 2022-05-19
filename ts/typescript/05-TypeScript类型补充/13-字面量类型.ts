// "Hello World" 也是可以作为类型的，这个类型叫做 字面量类型
const message: "Hello World" = "Hello World"

// let num: 123 = 123
// num = 321   // 报错

// 因为字面量类型必须左右保持一致

// 字面量类型的意义，就是必须结合联合类型
// let align: 'left' | 'right' | 'center' = 'left'

// 这时候字面量类型可以赋值 联合类型的其中之一
// align = 'right'
// align = 'center'

// 但是依旧不能随便赋值
// align = 'haha'  // 不能将类型“"haha"”分配给类型“"left" | "right" | "center"”

// 开发中的常用写法
type Alignment =  'left' | 'right' | 'center'
let align : Alignment = 'left'
align = 'right'
align = 'center'

console.log(align);



export {}
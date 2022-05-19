/**
 * 声明了类型后的 TypeScript 就会进行 类型检测，声明的类型可以称之为 类型注解
 * 
 * var/let/const 标识符: 数据类型 = 赋值
 * */ 
var name: string = 'why'
let age: number = 18
const height: number = 1.88

/**
 * ts 里的数据类型 大小区分
 * 
 * string: TypeScript 中的字符串类型
 * String: JavaScript 的字符串包装类的类型  
 * */ 

const message: string = "Hello World"

/**
 * ts 的类型推导/推断
 * 
 * 默认情况下进行赋值时，会将 赋值 的 值的类型，作为前面标识符的类型
 * 这个过程称之为 类型推导/推断
 * 
 * foo 没有添加类型注解
 * */ 
let foo = "foo"
// foo = 123



// 因为作用域的关系需要向外暴露
export {}
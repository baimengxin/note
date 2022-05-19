// 数组类型的定义

// 首先需要确定一个事实：names 是一个数组类型，但是数组中存放的是什么类型的元素呢？
// 在数组中存放不同的类型是不好的习惯：一个数组中在 TypeScript 开发中，最好存到数据类型是固定的 （比如string）
// 类型注解

// 方法一：不推荐(react jsx中是有冲突)
const names1: Array<string> = []

// 方法二：推荐
const names: string[] = [] 


// 在数组存放不同的类型是不好的习惯
// names.push('abc')
// names.push(123)

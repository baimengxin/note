// 在es5中，我们是不可能在对象中添加相同的属性名称的
// const person = {
//     title: '程序员',
//     title: '老师'
// }

// 通常我们的做法的是定义两个不同的属性名字：比如 title1 和 title2

// 如果是在 es6 中，我们可以通过 symbol 来定义相同的名称，因为 symbol 函数返回的是不同的值

// 注意：这里不需要 new 一个 Symbol 对象，直接使用即可
const t1 = Symbol("title")
const t2 = Symbol("title")

const person = {
    [t1]: '程序员',
    [t2]: '老师'
}

console.log(person);    // { [Symbol(title)]: '程序员', [Symbol(title)]: '老师' }

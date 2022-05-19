// tuple是元组类型

// 假设我想在数组中传入不同的数据类型
// const  info: any[] = ['why', 18, 1.88]

// const name = info[0]
// console.log(name.length);
// 这里有弊端就是无法确定数组中到底是那个数据类型

// 这种情况我们可以使用元组
const  info: [string, number, number] = ['why', 18, 1.88]
const name = info[0]
console.log(name.length);

// const age = info[1]
// console.log(age.length); // 这里由于数据类型已经确定，所以会报错，因为数字类型没有 length


export {}

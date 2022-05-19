// 联合类型的使用
function printId(id: number | string ){
    // console.log(id);
    
    // 使用联合类型的值，需要特别小心
    // narrow：缩小
    // 这里用判断类型缩小了选择
    if(typeof id === 'string'){
        // TypeScript 会帮助我们确定 id 一定是 string 类型
        console.log(id.toUpperCase());     
    }else{
        // 其他类型不做处理，直接打印
        console.log(id);
    }
}

printId(123)    // 123
printId('abc')  // ABC


export {}
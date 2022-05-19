


type Method = 'GET' | 'POST'

function request(url: string, method: Method){}

// const options = {
//     url: 'https://www.baidu.com',
//     method: 'POST'
// } 

// 第三种写法 as const
const options = {
    url: 'https://www.baidu.com',
    method: 'POST'
} as const

// 这里报错的原因是 method 是个 字符串类型，字符串类型就意味着不一定是 GET 或者 POST,也有可能是别的值
request(options.url, options.method)

// type Request = {
//     url: string,
//     method: Method
// }

// 第一种写法：限定死类型 (比较推荐)
// 不容易出错，缺点：增加代码量
// const options: Request = {
//     url: 'https://www.baidu.com',
//     method: 'POST'
// }



// 第二种写法
// 这种写法是把 string 类型 缩小范围到 一定情况
// request(options.url, options.method as Method)



export {}
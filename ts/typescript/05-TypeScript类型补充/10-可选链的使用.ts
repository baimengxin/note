/**
 * 可选链事实上并不是TypeScript独有的特性，它是ES11（ES2020）中增加的特性
 * 
 * 可选链使用可选链操作符 ?.；
 * 它的作用是当对象的属性不存在时，会短路，直接返回undefined，如果存在，那么才会继续执行；
 * 虽然可选链操作是ECMAScript提出的特性，但是和TypeScript一起使用更版本；
 **/ 

// type 定义一个类型别名
type Person = {
    name: string
    friend?: {
        name: string
        age?: number,

        girlFriend?: {
            name: string
        }
    }
}


const info: Person = {
    name: '张三',
    friend: {
        name: '李四',

        // girlFriend: {
        //     name: '雯雯'
        // }
    }
}

console.log(info.name); // 张三

// console.log(info.friend.name);  // error TS2532: Object is possibly 'undefined'
console.log(info.friend?.name); // 李四

// console.log(info.friend?.girlFriend.name);  // error TS2532: Object is possibly 'undefined'
// console.log(info.friend?.girlFriend?.name); // 雯雯
console.log(info.friend?.girlFriend?.name); // undefined，如果注释掉了则会返回 undefined，而不会报错





// 使用可选链可以省掉很多的判断，并且让代码更加严谨

// 假如不使用可选链，那么为了代码的严谨，我们需要设置很多判断条件
// if(info.friend){
//     console.log(info.friend.name);

//     if(info.friend.girlFriend){
//         console.log(info.friend.girlFriend.name); 
//     }  
// }


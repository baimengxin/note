// 1. typeof 的类型缩小
type IDType = number | string
function printID(id: IDType) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// 2. 平等缩小 (比如 ===、!==、==、 switch)
type Direction = 'left' | 'right' | 'top' | 'bottom'
function printDirection(direction: Direction) {
    // 1. if 判断
    // if(direction === 'left'){
    //     console.log(direction);
    // }else if(){}

    // 2. switch 判断
    // switch(direction) {
    //     case 'left':
    //         console.log(direction);
    //         break;
    //     case 'right':
    //         console.log(direction);
    //         break;
    //     case ...          
    // }
}

// 3. instanceof 缩小
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

// instanceof 运算符来检查一个值是否是另一个值的 实例
function printTime(time: string | Date){
    if(time instanceof Date){
        // toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区
        console.log(time.toUTCString());
    }else{
        console.log(time);
    }
}


class Student {
    studying() {

    }
}

class Teacher {
    teaching() {

    }
}

function work(p: Student | Teacher){
    if(p instanceof Student){
        p.studying()
    }else{
        p.teaching()
    }
}

// 4. in
// in 运算符，用于确定对象是否具有带名称的属性
// 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true；
type Fish = {
    // 函数类型
    swim: () => void
}

type Dog = {
    // 函数类型
    run: () => void
}

function move(animal: Fish | Dog){
    if('swim' in animal){
        console.log(animal.swim());
    } else{
        console.log(animal.run());
    }
}
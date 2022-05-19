// type Direction = 'left' | 'right' | 'top' | 'bottom'

// 定义枚举，关键字是 enum
enum Direction {
    // 默认会有个数值，从 0 开始
    // LEFT = 10,  // 如果设置了值，则会从设置的值开始，比如 10
    // LEFT,
    // RIGHT,
    // TOP,
    // BOTTOM = 100,   // 就算末尾改变，初始值依旧是从 0 开始

    // 也可以默认是字符串
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TOP = 'TOP',
    BOTTOM = 'BOTTOM'
    
}

function turnDirection(direction: Direction) {
    // 枚举类型默认的值是从 0 开始
    console.log(direction);
    
    switch (direction) {
        case Direction.LEFT:
            console.log('改变角色的方向，向左');
            break;

        case Direction.RIGHT:
            console.log('改变角色的方向，向右');
            break;

        case Direction.TOP:
            console.log('改变角色的方向，向上');
            break;

        case Direction.BOTTOM:
            console.log('改变角色的方向，向下');
            break;

        default: 
            const foo: never = direction 
            break;
    }
}

// 枚举类型的基本使用
turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)






export {}
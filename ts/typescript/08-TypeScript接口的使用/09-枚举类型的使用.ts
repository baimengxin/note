// type Direction = 'left' | 'right' | 'top' | 'bottom'

// 定义枚举，关键字是 enum
enum Direction {
    // 规范：默认会写大写
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}

function turnDirection(direction: Direction) {
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
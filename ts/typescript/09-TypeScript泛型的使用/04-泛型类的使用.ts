class Point<T> {
    x: T
    y: T
    z: T

    constructor(x: T, y: T, z: T) {
        this.x = x
        this.y = y
        this.z = z
    }
}

const p1 = new Point('1.33.2', '2.22.3', '3.44.4')
const p2 = new Point<string>('1.33.2', '2.22.3', '3.44.4')
const p3: Point<string> = new Point('1.33.2', '2.22.3', '3.44.4')

// 数组类型的使用
const arr1: string[] = ['abc', 'cba', 'nba']
const arr2: Array<string> = ['abc', 'cba', 'nba']   // 不推荐 (react jsx: <>)

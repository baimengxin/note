// react  hook:useState
// const [counter, setCounter] = {counter: , setCounter}

// function useState(state){
//     let currentState = state

//     const changeState = (newState) => {
//         currentState = newState
//     }

//     const tuple = [currentState, changeState]

//     return tuple
// }

// 封装
function useState(state: any){
    // 创建局部变量保存传入的值
    let currentState = state
    
    // 一个函数可以传入一个新的值，新的值会覆盖掉原来的值
    const changeState = (newState: any) => {
        currentState = newState
    }

    // currentState 是 any 类型
    // changeState 是 数组 类型
    // 这里 用一个元组 来保存 一个旧值， 一个新值
    const tuple: [any, (newState: any) => void] = [currentState, changeState]

    // 返回元组
    return tuple
}

// 结构
const [counter, setCounter] = useState(10)
setCounter(1000)

const [title, setTitle] = useState('abc')

export {}
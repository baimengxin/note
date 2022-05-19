// react  hook:useState
// const [counter, setCounter] = {counter: , setCounter}

// 这里用到了 泛型
function useState<T>(state: T){
    let currentState = state

    const changeState = (newState: T) => {
        currentState = newState
    }
    
    // const info: [string, number] = ['abc', 18]
    const tuple: [T, (newState: T) => void] = [currentState, changeState]

    return tuple
}

// 这里泛型默认会把传入的数据类型  传给 T
const [counter, setCounter] = useState(10);
setCounter(1000)
const [title, setTitle] = useState("abc")
const [flag, setFlag] = useState(true)

function foo<T, E, O>(arg1: T, arg2: E, arg3?: O, ...args: T[]){
    
}

foo<number, string, boolean>(10, 'abc')
foo<number, number, boolean>(10, 20, true)
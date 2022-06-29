# this 指向

# 1. this 指向的绑定规则

- 默认绑定
- 隐式绑定
- 显式绑定
- new绑定



## 规则一：默认绑定

> 一般默认绑定就是指 函数被独立调用

~~~js
// this 指向 window的情况
// 普通函数被独立调用
function foo() {
    console.log('foo:', this);
}
foo()   // window

// 2. 函数定义在对象中，但是独立调用
var obj = {
    name: '张三',
    bar: function() {
        console.log('bar:', this);
    }
}
var baz = obj.bar
baz()   // 此时满足函数独立调用，所以指向 window

// 3. 高阶函数
function test(fn) {
    fn()    // 这里也是独立函数调用，所以指向 window
}
test(obj.bar)   // window
~~~



## 规则二：隐式绑定

> 通过某个对象来进行调用

~~~js
// 隐式绑定
function foo() {
    console.log('foo:', this);
}

var obj = {
    name: 'bai',
    fn: foo
}

obj.fn()    // 此时 this指向 obj
~~~



## 规则三：显式绑定

> 通过 call、apply、bind 方法来绑定对象

~~~js
// 显式绑定
// 明确绑定到那个对象
var obj = {
    name: 'bai'
}

function foo() {
    console.log('foo:', this);
}


// 执行函数，并且强制 this 就是 obj 对象
foo.call(obj)
~~~



## 规则四：new绑定

> 1. 创建新的空对象
> 2. 将 this 指向这个空对象
> 3. 指向函数体中的代码
> 4. 没有显示返回非空对象时，默认返回这个对象

~~~js
/*
    new 对象
    1. 创建新的空对象
    2. 将 this 指向这个空对象
    3. 指向函数体中的代码
    4. 没有显示返回非空对象时，默认返回这个对象
*/
function foo(name) {
    this.name = name
    console.log('foo函数:', this.name);
}

const obj = new foo('bai')
console.log(obj);
~~~



# 2. call、apply、bind 的区别

相同点：

> call 、apply、bind 的第一个参数都是 绑定 this



不同点：

1.call 的后续参数是一个参数列表 

~~~js
function call(thisArg, arg1, arg2, ...)
~~~

2.apply 的第二个参数是一个数组

~~~js
function apply(thisArg, argsArray)
~~~

3.bind 的其余参数将作为新函数的参数，供调用时使用

~~~js
function bind(thisArg[, arg1[, arg2[, ...]]])
~~~



# 3. this 指向的优先级

1. 默认绑定的优秀级最低
2. 隐式绑定
3. 显示绑定
4. new绑定优先级高于 bind



# 4. this 规则之外 - 忽略显示绑定

**情况一：传 null 或者 undefined**

如果在显示绑定中，我们传入一个 null 或者 undefined，那么这个显示绑定会被忽略，使用默认规则

~~~js
// 情况一：使用 null 或者 undefined 显式绑定，显式绑定会被忽略，使用默认规则，即指向 window
function foo() {
    console.log('foo:', this);
}

foo.apply('abc')
foo.apply(null) // window
foo.apply(undefined)    // window
~~~



**情况二：间接函数引用**

~~~js
// 情况二：间接函数引用
var obj1 = {
    name: '张三',
    foo: function() {
        console.log('foo:', this);
    }
}
        
var obj2 = { name: '李四' }
obj2.foo = obj1.foo
obj2.foo()  // 指向 obj2

;(obj2.foo = obj1.foo)()    // 指向 window
~~~





# 5. 箭头函数

箭头函数是ES6之后增加的一种编写函数的方法，并且它比函数表达式要更加简洁

- 箭头函数不会绑定this、arguments属性
- 箭头函数不能作为构造函数来使用（不能和new一起来使用，会抛出错误）



# 6. this 规则之外的 - 箭头函数

箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据<font color='red'>外层作用域来决定this</font>

~~~js
// 他会通过作用域链去往上层查找，直到找到全局 window
var message = 'Globar message'
var obj2 = {
    name: 'obj',
    foo: () => {
        var bar = () => {
            console.log('bar', this);
            console.log(message);
        }
        return bar
    }
}

var fn2 = obj2.foo()
fn2.apply('aaa') // 这里指向 window
~~~



# 7. this 指向的面试题

## 面试题一

~~~js
var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;
  
  sss();    // 默认绑定：window

  person.sayName(); // 隐式绑定：person
  
  (person.sayName)();   // 隐式绑定：person
    
  (b = person.sayName)();   // 间接函数引用：window
}

sayName();
~~~



## 面试题二

~~~js
var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }


person1.foo1(); // 隐式绑定：person1
person1.foo1.call(person2); // 显示绑定：person2

person1.foo2(); // 上层作用域：window
person1.foo2.call(person2); // 上层作用域：window

person1.foo3()();   // 默认绑定：window
person1.foo3.call(person2)();   // 默认绑定：window 
person1.foo3().call(person2);   // 显示绑定：person2

person1.foo4()();   // 上层作用域：person1
person1.foo4.call(person2)();   // 上层作用域：person2
person1.foo4().call(person2);   // 上层作用域：person1
~~~



## 面试题三

~~~js
var name = 'window'

function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1()  // 隐式绑定：person1
person1.foo1.call(person2)  // 显示绑定：person2

person1.foo2()  // 上层作用域查找：person1
person1.foo2.call(person2)  // 上层作用域查找：person1

person1.foo3()()  // 默认绑定：window
person1.foo3.call(person2)()  // 默认绑定：window
person1.foo3().call(person2)  // 显示绑定：person2

person1.foo4()()  // 上层作用域查找：person1 (隐式绑定)
person1.foo4.call(person2)()  // 上层作用域查找：person2 (显示绑定)
person1.foo4().call(person2)  // 上层作用域查找：person1 (隐式绑定)
~~~



## 面试题四

~~~js
var name = 'window'

function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()    // 默认绑定：window
person1.obj.foo1.call(person2)()    // 默认绑定：window
person1.obj.foo1().call(person2)    // 显示绑定：person2

person1.obj.foo2()()    // 上层作用域查找：obj (隐式绑定)
person1.obj.foo2.call(person2)()    // 上层作用域查找：person2 (显示绑定)
person1.obj.foo2().call(person2)    // 上层作用域查找：obj (隐式绑定)
~~~


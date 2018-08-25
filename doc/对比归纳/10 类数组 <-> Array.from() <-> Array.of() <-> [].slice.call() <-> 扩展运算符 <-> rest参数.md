# 数组转化对比归纳

## 一.类数组对象

1 特点: 拥有length属性 但 不具有数组的方法

2 常见类数组: arguments / NodeList


3 判断: 

```
function isArrayLike (arrayLike) {
    return arrayLike &&
        typeof arrayLike === 'object' &&
        isFinite(arrayLike.length) &&
        arrayLike.length >= 0 &&
        arrayLike.length === (arrayLike.length | 0) &&
        arrayLike.length < Math.pow(2, 32) 
}
```

## 二.Array.from()

1 功能: 将类数组对象 和 可遍历对象(部署了 Iterator 接口的数据结构) 转化成真正的数组

2 等价: 接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组

```
let spans = document.querySelectorAll('span.name');

// map()
let names1 = Array.prototype.map.call(spans, s => s.textContent);

// Array.from()
let names2 = Array.from(spans, s => s.textContent)

// 第一个参数指定了第二个参数运行的次数
Array.from({ length: 2 }, () => 'jack')
// ['jack', 'jack']
```

## 三.数组扩展运算符

1 语法: `...`

2 功能: 将一个数组转为用逗号分隔的参数序列

3 原理: 调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换

### 3.1 应用场景

1 替代函数的 apply 方法

```
// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);
```

2 复制数组: 不对原数组产生影响

```
const a1 = [1, 2];

// es5
const a2 = a1.concat();

// es6
const a2 = [...a1];

// es6
const [...a2] = a1;
```

3 合并数组: 成员都是对原数组成员的引用，是浅拷贝

```
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

4 与解构赋值结合: 用于数组赋值时, 只能放在参数的最后一位

```
// ES5
a = list[0], rest = list.slice(1)
// ES6
[a, ...rest] = list
```

5 将字符串转为真正的数组, 还能够正确识别四个字节的 Unicode 字符:

```
[...'hello']
// [ "h", "e", "l", "l", "o" ]

let str = 'x\uD83D\uDE80y';

// avaScript 会将四个字节的 Unicode 字符，识别为 2 个字符
str.split('').reverse().join('')
// 'y\uDE80\uD83Dx' 错误

[...str].reverse().join('')
// 'y\uD83D\uDE80x' 正确
```

## 四.Array.from() 与 扩展运算符

|       |   Array.from()    |   扩展运算符   |
|:------|:------------------|:--------------|
|  实现了 Iterator 接口的对象   |   可转化为数组  | 可转换为数组    |
|  有length的对象   |   可转化为数组  |   不可  |
|  处理大于\uFFFF的 Unicode |    可正确处理   | 可正确处理 |

```
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// 可以
Array.from(arrayLike)

// TypeError: Cannot spread non-iterable object.
let arr = [...arrayLike];
```

## 五.Array.of()

1 功能: 将一组值，转换为数组

## 六.Array.of() 与 Array()

|       |   Array()    |   Array.of()   |
|:------|:------------------|:--------------|
|  没有参数   |   返空数组  | 返空数组    |
|  只有一个参数且为整数   |   返回长度为指定的数字类似`[, , ,]`的数组  |   返回`[整数]`  |
|  只有一个参数但不为整数 |    返回`[参数]`   | 返回`[参数]` |
|  参数为两个及以上 |  返回`[参数1, 参数2, ..]` | 返回`[参数1, 参数2, ..]`  |

## 七.[].slice.call()

1 功能: 借用了数组原型中的slice方法，返回一个数组

2 内部实现:

```
Array.prototype.slice = function(start,end){  
  var result = new Array();  
  start = start || 0;  
  end = end || this.length; //使用call之后this指向了类数组对象
  for(var i = start; i < end; i++){  
       result.push(this[i]);  
  }  
  return result;  
} 
```

## 八.Array.from() 与 Array.of() 与 slice

|       |   Array.from()    |   Array.of()   |
|:------|:------------------|:--------------|
|  可否用[].slice.call()代替   |   可以  | 可以    |

## 九.rest参数

1 语法: `...变量名`

2 功能: 用于获取函数的多余参数, 代替了 arguments 对象, 搭配的变量是一个数组，该变量将多余的参数放入数组中

3 代替 arguments :

```
// arguments变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
```

## 十.对象扩展运算符

1 语法: `{...obj}`

2 功能: 用于取出参数对象的所有可遍历属性，拷贝到当前对象之中, 相当于Object.assign()

```
let z = { a: 3, b: 4 };
let n = { ...z };
n // { a: 3, b: 4 }

let aClone = { ...a };
// 等同于
let aClone = Object.assign({}, a);
```

### 10.1 应用场景:

1 克隆整个对象(包括原型)

```
// 写法二
const clone2 = Object.assign(
  Object.create(Object.getPrototypeOf(obj)),
  obj
);

// 写法三
const clone3 = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)
```

2 合并两个对象

```
let ab = { ...a, ...b };
// 等同于
let ab = Object.assign({}, a, b);
```

3 修改现有对象部分的属性

```
let newVersion = {
  ...previousVersion,
  name: 'New Name' // Override the name property
};
```

### 10.2 get

扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的

```
// 并不会抛出错误，因为 x 属性只是被定义，但没执行
let aWithXGetter = {
  ...a,
  get x() {
    throw new Error('not throw yet');
  }
};

// 会抛出错误，因为 x 属性被执行了
let runtimeError = {
  ...a,
  ...{
    get x() {
      throw new Error('throw now');
    }
  }
};
```

## 十一.解构赋值

1 功能: 用于从一个对象取值，相当于将目标对象自身的所有可遍历的（enumerable）、但尚未被读取的属性，分配到指定的对象上面

```
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```

2 应用: 扩展某个函数的参数，引入其他操作

```
function baseFunction({ a, b }) {
  // ...
}
function wrapperFunction({ x, y, ...restConfig }) {
  // 使用 x 和 y 参数进行操作
  // 其余参数传给原始函数
  return baseFunction(restConfig);
}
```

### 11.1 特点

1 解构赋值的拷贝是浅拷贝

2 不能复制继承自原型对象的属性

## 十.rest参数 与 数组扩展运算符 与 对象扩展运算符

|       |   rest参数    |  数组扩展运算符   |  对象扩展运算符   |
|:------|:------------------|:--------------|:---|
|  范畴   | 函数参数      |       数组      |   对象  |
|  关系   |   互逆    |     |       |
|  之后能否再有其他参数 | 不行 | 当 用于数组赋值时 不行   |   可以  |
|  原理   |       |   调用遍历器接口 |   相当于Object.assign()  |

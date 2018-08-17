# 循环遍历对比归纳

## 一.while/for

```
while (条件) {
    逻辑
}

for (初始化; 判断; 改变) {
    逻辑
}
```

## 二.枚举属性

### 2.1 可枚举属性

1 定义: 指那些内部 “可枚举” 标志设置为 true 的属性

2 默认: 通过 直接的赋值 和 属性初始化 的属性，该标识值默认为即为 true

3 设置: `Object.defineProperty()`

4 判断: `obj.propertyIsEnumerable(prop)`

### 2.2 不可枚举属性

1 默认: 通常js内置的属性

## 三.in操作符

1 语法: `prop in object`

2 功能: 指定的属性在 指定的对象 或 其原型链 中，则返回true

## 四.hasOwnProperty()

1 语法: `obj.hasOwnProperty(prop)`

2 功能: 指定的对象中是否含有该属性

## 五.getOwnPropertyNames()

1 语法: `Object.getOwnPropertyNames(obj)`

2 功能: 返回一个由指定对象的所有 自身 属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组

## 六.for..in

1 功能: 只遍历可枚举属性, 包括对象 自身 及 继承 来的

## 七.keys()

1 语法: `Object.keys()`

2 功能: 返回一个由一个给定对象的 自身 可枚举属性名 组成的数组

## 八.in 与 hasOwnProperty

记忆: own -> 表示本身

|       |   in操作符       |   hasOwnProperty  |   getOwnPropertyNames |   keys    |   for..in |   
|:------|:----------------|:------------------|:----------------------|:---------|:-----------|
|  能否检测在对象中 |   可以  |   可以  |   可以    |  可以         |   可以  |
|  能否检测在对象的原型中  |  可以   |   不行  |   不可以  |  不可以 |  可以  |
|  能否检测到可枚举对象   |   可以   |  可以      |   可以  |   可以    |  可以  |
|  能否检测到不可枚举对象  |   可以  |   可以      |   可以  |  可以       | 不可以 |
|  能否检测到Symbol对象   |   可以   |   可以  |   不可以 | 不可以  |    不可以     |

## 八.forEach

1 语法: `arr.forEach((item, i, arr) => {})`

2 功能: 遍历数组

## 九.Iterator接口

1 定义: 提供统一的接口处理Array, Object, Set, Map四种表示集合的数据结构

2 遍历过程: 遍历器对象本质为指针对象, 调用其next方法可依次指向数据结构中的成员, 返回一个对象`{value: 值, done: 是否遍历完毕}`

3 默认Iterator接口: 部署在数据结构的Symbol.iterator属性, 是当前数据结构默认的遍历器生成函数, 执行后返回一个遍历器对象

4 原生具备 Iterator 接口的数据结构: Array, Map, Set, String, TypedArray, arguments, NodeList

5 部署Iterator接口:

```
let obj = {}
obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield3;
}

for(let value of obj) {
    console.log(value)
}
```

## 十.for..of

1 定义: 作为遍历所有数据结构的统一的方法

2 本质: 内部调用的是数据结构的Symbol.iterator方法

## 十一.arr.entries()/keys()/values()

1 功能: 返回一个新的Array Iterator对象

|       |   数组      |   Set     |   Map     |
|:------|:-----------|:----------|:----------|
| arr.entries() |  `[索引值, 子项]`   |  `[子项, 子项]`  |   其Iterator接口默认调用的就是 entries()      |
| arr.keys()    |   遍历所有的键名 |   遍历所有的键名 |   遍历所有的键名 |
| arr.values()  |   遍历所有的键值 |   遍历所有的键值 |   遍历所有的键值 |
   
## 十二.for 与 for..in 与 forEach 与 for..of

|       |   for     |   forEach     |   for..in     |   for..of |
|:------|:----------|:--------------|:--------------|:----------|
| 主要应用场景  |   数组  |   数组         | 对象         |  具有iterator的数据结构  |
| 语法   |  `for(初始化;判断;更新) {}`  | `arr.forEach((item, i, arr) => {})` |  `for(const prop in obj) {}` | `for(const item of arr)` |
| 参数   |        | item -> 子项, <br>i -> 索引, <br>arr -> 数组 |  prop -> 键名, <br>`obj[prop]` -> 键值 |     item -> 子项  |
| 跳出循环  | break/return  |   throw new Error()   |   break/return |  break/return    |

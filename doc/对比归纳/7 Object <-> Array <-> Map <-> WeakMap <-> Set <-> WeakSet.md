# 数据结构对比归纳

## 一.Object

键值对的集合(Hash 结构), 键只限于字符串

### 1.1 声明

```
const obj = {}
// or
const obj = {
    name: 'garven'
}
```

## 二.Map

键值对的集合，各种类型的值(包括对象)都可以当作键

### 2.1 声明

```
const map = new Map()
// or
const map = new Map([
    ['name', 'garven']
])
```

## 三.WeakMap

键值对的集合, 只接受对象作为键名(null除外); 键名所指向的对象，不计入垃圾回收机制

### 3.1 声明

```
const wml = new WeakMap()
// or
const key = {a: 1}
const wml = new WeakMap([
    [key, 'kk']
])
```

## 四.Array

用来存储一系列数据的数据结构

### 4.1 声明

```
const arr = []
const arr = new Array(3)    // [undefined, undefined, undefined] 
```

## 五.Set

用来存储一系列数据的数据结构, 成员的值必须唯一

### 5.1 声明

```
const set = new Set()
// or
const set = new Set([1, 2, 3, 3])
```

## 六.WeakSet

用来存储一系列数据的数据结构, 成员只能是对象; 对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用

如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中

## 6.1 声明

```
const ws = new WeakSet()
// or
const a = [
    [1, 2],
    [3, 4]
]
const ws = new WeakSet(a)
```




















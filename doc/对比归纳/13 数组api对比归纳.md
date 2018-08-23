# 数组api对比归纳

## 一.操作类型

|       |   concat      |       slice   |       splice      |
|:------|:--------------|:--------------|:------------------|
| 语法    | `concat(arr1[, arr2..])`  |   `slice([begin], [end])` |   `splice(start[, deleteCount[, item1[, item2[, ...]]]])` |
|   功能  |   合并两个或多个数组   |   选取数组 `[begin, end)` 部分  |   通过删除现有元素和/或添加新元素来更改一个数组的内容  |
|   是否改变数组  |   否   |   否   |   是   |
|   返回  |   新数组 |   新数组 |   被删除的元素组成的一个数组   |
|   是否为浅拷贝  |   是   | 是 |   |

## 二.迭代类型

|   |   语法  |   功能  |   返回  |
|:---|:---|:---|:---|
|   forEach |   `arr.forEach((item, i, arr) => {}, this)` |   对数组的每个元素执行一次提供的函数    |   undefined   |
|   map     |   `arr.map((item, i, arr) => {}, this)`     |   对数组的每个元素执行一次提供的函数   |   每个项调用函数后返回的结果组成的新数组   |
|   every   |   `arr.every((item, i, arr) => {}, this)`   |   测试数组的所有元素是否都通过了指定函数的测试  |   所有项返回true才为true  |
|   some    |   `arr.some((item, i, arr) => {}, this)`    |   测试数组中的某些元素是否通过由提供的函数实现的测试   |   有一项返回true则为true |
|   filter  |   `arr.filter((item, i, arr) => {}, this)`  |   测试数组中的某些元素是否通过由提供的函数实现的测试   |   返回true的项组成的新数组    |
|   entries |   `arr.entries()`                     |                                                 |   一个新的Array Iterator对象，该对象包含数组中 每个索引的键 / 值 对    |
|   keys    |   `arr.keys()`                        |       |   包含数组中每个 索引键 的Array Iterator对象 |
|   values  |   `arr.values()`                      |       |   包含数组中每个 索引值 的Array Iterator对象 |

## 三.查找类型

|   |   语法  |   功能  |   返回  |   原理  |
|:---|:---|:---|:---|:---|
|   find    |   `arr.find((item, i, arr) => {}, this)` |  |   回数组中满足提供的测试函数的第一个元素的值, 否则返回 undefined   | |
|   findIndex  |   `arr.findIndex((item, i, arr) => {}, this)`    |   |   返回数组中满足提供的测试函数的第一个元素的索引, 否则返回-1   |   |
|   includes    |   `arr.includes(searchElement[, fromIndex])`  |   判断一个数组是否包含一个指定的值   |   包含则返回 true，否则返回false |   |
|   indexOf     |   `arr.indexOf(searchElement[, fromIndex])`   |   |   返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1  |   通过 全等 === 比较    |
|   lastIndexOf |   `arr.indexOf(searchElement[, fromIndex])`   |   |   返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1, 从数组的后面向前查找    | 通过 全等 === 比较    |

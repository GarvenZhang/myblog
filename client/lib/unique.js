// === 去重: === //
// === 注意点: 比较的时候会有 类型转换问题 以及用特定的api会有特定的bug === //
// === > indexOf: 底层是全等比较 === //
// === > 全等的bug: === //
/*
NaN === NaN // false
'' === new String('')
*/

// === 1 双重循环: 外层循环arr, 内层循环结果数组ret; 外层循环一次, 则内层会与结果数组中的每一个item比较, 若找到相同的就退出内循环; 外循环的最后一步是比较内循环的index与结果数组的长度, 若相同则证明与结果数组中的每一个都比较过了, 都没发现相同的, 这时就把arr[outer]放进结果数组中 === //
// === 1.1 缺点: 对象 和 NaN不去重 === //
export function byFor (arr) {

  let ret = []

  for (let outer = 0, outerLen = arr.length; outer < outerLen; ++outer) {

    for (var inner = 0, innerLen = arr.length; inner < innerLen; ++inner) {

      if (arr[outer] === ret[inner]) {
        break
      }

    }

    if (inner === innerLen) {
      ret.push(arr[outer])
    }

  }

  return ret

}

// === 2 indexOf: forEach给定的数组, 然后声明一个结果数组, 若结果数组使用indexOf后为-1则放进去 === //
// === 2.1 缺点: 对象和NaN不去重 === //
export function byIndexOf (arr) {

  let ret = []

  arr.forEach(item => (ret.indexOf(item) === -1) && ret.push(item))

  return ret

}

// === 3 排序后去重: 先将要去重的数组使用 sort 方法排序后，相同的值就会被排在一起，然后我们就可以只判断当前元素与上一个元素是否相同，相同就说明重复，不相同就添加进 ret === //
// === 3.1 缺点: 对象和 NaN 不去重 数字 1 也不去重(1, '1', new String('1')排序会有问题) === //
/*
[1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN]
=>
[/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined]
*/
export function bySort (arr) {

  let ret = []
  
  const sortedArr = arr.concat().sort()
  sortedArr.forEach((item, i) => {
    if (!i || item !== sortedArr[i - 1]) {
      ret.push(item)
    }
  })
  
  return ret

}

// === 4 filter: 返回结果为true组成的数组, 判断结果时用给定的数组的indexOf来判断是否下标等于当前filter循环的下标 === //
// === 4.1 缺点: 对象不去重 NaN 会被忽略掉 === //
export function byFilter (arr) {

  return arr.filter((item, i) => arr.indexOf(item) === i)

}

// === 5 Set: === //
export const bySet = arr => [...new Set(arr)]

// === 6 Object: 利用obj的属性是唯一的, 且key为字符串, 防止 1 和 '1'相同 则要把类型加上, 为了能比较对象则序列号为字符串来比较 === //
export default arr => {

  let obj = {}

  return arr.filter(item => obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : obj[typeof item + JSON.stringify(item)] = true)

}

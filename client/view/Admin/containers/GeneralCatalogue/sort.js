// === 平均时间复杂度： === //
// === 前三 O(n^2); 中四 O(n * log n); 后二 O(n+ k); 基排 O(O * k) === //

// === 稳定性： === //
// === 选择 / 希尔 / 快排 / 堆排 不稳定 === //

import deepCopy from '../../../../lib/deepCopy'

/**
 * 交换位置
 * // === 技巧：利用代码执行顺序，后一个赋值为前一个，而前一个赋值为前一个的行为在数组的第二项进行 === //
 * @param {Array} arr - 数组
 * @param {Number} prev - 前一个索引
 * @param {Number} next - 后一个索引
 * @private
 */
const swap = (arr, prev, next) => {
  arr[next] = [arr[prev], arr[prev] = arr[next]][0]
}

/**
 * 查找对象属性
 * @param {Object} obj 对象
 * @param {Array} property - 属性为顺序的数组，如：{one: {two: '1'}} 为 ['one', 'two']
 * @private
 * @return {String|Number}
 */
const findProperty = (obj, property) => {
  let i = 0
  const len = property.length

  if (typeof obj !== 'object') {
    return obj
  }

  while (i < len) {
    let item = property[i]
    if (obj[item] !== 'undefined') {  // === 此处，判断一个属性是否存在，不能用隐式转换，因为有可能属性值为0, false, undefined, '', null从而判断错误 === //
      obj = obj[item]
    } else {
      return obj
    }

    ++i
  }

  return obj
}

/**
 * 插入排序
 * // === 插入排序 === //
 * // === 思想：[a, b, c, d, e], 外循环从b开始，内循环比较b之前的元素，若a比b大，a插入到b的位置，b之前的元素都比较完(内循环完)，b插入到前面所比较的元素中最小的位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */
export function insertionSort (arr, property, sequence) {
  arr = deepCopy(arr)

  const judge = (sequence, property, arr, inner, tmp) => {
    if (sequence === true) {
      return inner > 0 && findProperty(arr[inner - 1], property) > findProperty(tmp, property)
    } else {
      return inner > 0 && findProperty(arr[inner - 1], property) < findProperty(tmp, property)
    }
  }

  let outer
  let inner
  let len = arr.length
  let tmp

  for (outer = 1; outer < len; ++outer) {
    inner = outer
    tmp = arr[outer]

    while (judge(sequence, property, arr, inner, tmp)) {
      arr[inner] = arr[inner - 1]
      --inner
    }

    arr[inner] = tmp
  }

  return arr
}

/**
 * 选择排序
 * // === 思想：[a, b, c, d, e], 外循环先选择a为最小，内循环从b开始与a比较，若有比a更小的，记录索引；内循环结束后将外循环选择的元素(认定的最小值)与最后的索引比较，若不一致则交换位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

export function selectSort (arr, property, sequence) {
  arr = deepCopy(arr)

  const judge = (sequence, property, arr, inner, target) => {
    if (sequence === true) {
      return findProperty(arr[inner], property).localeCompare(findProperty(arr[target], property)) < 0
    } else {
      return findProperty(arr[inner], property).localeCompare(findProperty(arr[target], property)) > 0
    }
  }

  const len = arr.length
  let outer
  let inner
  let target

  for (outer = 0; outer < len - 1; ++outer) {
    target = outer

    for (inner = outer + 1; inner < len; ++inner) {
      if (judge(sequence, property, arr, inner, target)) {
        target = inner
      }
    }

    if (target !== outer) {
      swap(arr, target, outer)
    }
  }

  return arr
}

/**
 * 快排
 * // === 思想：[a, b, c, d, e], 利用分治发，定c为中间值，然后分别从a和e向c遍历，分别找到左边比c大, 右边比c小的值，比如a,e; 然后交换位置, 依次类推；最后一定是c左边的值比c小，右边的值都比c大；再分别对c左边的值和右边的值用同样的取中间值比较的方式逐层的递归直到划分出来需要比较的系列之的长度只有1为止 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

export function quickSort (arr, property, sequence) {
  arr = deepCopy(arr)

  const judge = (sequence, property, arr, index, middle) => {
    if (sequence === true) {
      return new Date(findProperty(arr[index], property)).getTime() < new Date(findProperty(arr[middle], property)).getTime()
    } else {
      return new Date(findProperty(arr[index], property)).getTime() > new Date(findProperty(arr[middle], property)).getTime()
    }
  }

  const partition = (arr, left, right) => {
    const middle = (left + right) >> 1
    let i = left
    let j = right

    while (i <= j) {
      while (judge(sequence, property, arr, i, middle)) {
        ++i
      }

      while (judge(!sequence, property, arr, j, middle)) {
        --j
      }

      if (i <= j) {
        swap(arr, i, j)
        ++i
        --j
      }
    }

    return i
  }

  const quick = (arr, left, right) => {
    let middle

    if (arr.length > 1) {
      middle = partition(arr, left, right)

      if (left < middle - 1) {
        quick(arr, left, middle - 1)
      }

      if (middle < right) {
        quick(arr, middle, right)
      }
    }

    return arr
  }

  return quick(arr, 0, arr.length - 1)
}

/**
 * 归并
 * // === 思想：[a, b, c, d ,e], 用分治划出左右数组，递归直到长度为1；比如a与b比较，c与d比较，排序后放入新数组返回，之后，cd与e比较，ab与cde比较 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

function merge (left, right, property, sequence) {
  const judge = () => {
    if (sequence === true) {
      return findProperty(left[0], property) < findProperty(right[0], property)
    } else {
      return findProperty(left[0], property) > findProperty(right[0], property)
    }
  }

  let ret = []

  while (left.length > 0 && right.length > 0) {
    if (judge()) {
      ret.push(left.shift())
    } else {
      ret.push(right.shift())
    }
  }

  while (left.length > 0) {
    ret.push(left.shift())
  }

  while (right.length > 0) {
    ret.push(right.shift())
  }

  return ret
}

function _mergeSort (arr, property, sequence) {
  const l = arr.length
  if (l === 1) {
    return arr
  }

  const middle = l >> 1
  let left = arr.slice(0, middle)
  let right = arr.slice(middle, arr.length)

  return merge(_mergeSort(left, property, sequence), _mergeSort(right, property, sequence), property, sequence)
}

export function mergeSort (arr, property, sequence) {
  arr = deepCopy(arr)

  return _mergeSort(arr, property, sequence)
}

/**
 * 希尔
 * // === 思想：[a, b, c, d, e], 先计算出动态间隔, 比如h = h * 3 + 1，然后外循环从h开始逐一遍历，内循环将外循环选定的元素及其前h位置的元素比较，当外循环遍历到最后时，再次动态计算h为(h - 1) / 3, 即以更小的间隔重复刚才的操作，知道h为1 === //
 * // === 优势：较快地将较远的元素归到正确的位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

export function shellSort (arr, property, sequence) {
  arr = deepCopy(arr)

  const judge = function (arr, inner, h, sequence, property) {
    if (sequence === true) {
      return findProperty(arr[inner], property) < findProperty(arr[inner - h], property)
    } else {
      return findProperty(arr[inner], property) > findProperty(arr[inner - h], property)
    }
  }

  const len = arr.length
  let h = 1

  while (h < len / 3) {
    h = h * 3 + 1
  }

  while (h >= 1) {
    let outer
    let inner

    for (outer = h; outer < len; ++outer) {
      for (inner = outer; inner >= h && judge(arr, inner, h, sequence, property); inner -= h) {
        swap(arr, inner, inner - h)
      }
    }

    h = (h - 1) / 3
  }

  return arr
}

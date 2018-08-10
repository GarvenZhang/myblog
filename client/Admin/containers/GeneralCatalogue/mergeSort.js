import deepCopy from '../../../lib/deepCopy'
import { findProperty, swap } from './sort'

/**
 * 归并
 * // === 思想：[a, b, c, d ,e], 用分治划出左右数组，递归直到长度为1；比如a与b比较，c与d比较，排序后放入新数组返回，之后，cd与e比较，ab与cde比较 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

function merge (left, right, property, sequence) {

  /**
   * 判断函数
   */
  const judge = () => {
    if (sequence === true) {
      return findProperty(left[0], property) < findProperty(right[0], property)
    } else {
      return findProperty(left[0], property) > findProperty(right[0], property)
    }
  }

  // 结果数组
  let ret = []

  // 一开始每两两长度为1的数组中的元素进行顺序比较
  // 通过判断, 小的先放进 ret, 大的后放进ret
  while (left.length > 0 && right.length > 0) {
    if (judge()) {
      ret.push(left.shift())
    } else {
      ret.push(right.shift())
    }
  }

  // 若做完以上操作后, left数组 或者 right数组要有剩余的, 证明是比较比ret中的都大, 则直接一个个放进去就好了
  while (left.length > 0) {
    ret.push(left.shift())
  }
  while (right.length > 0) {
    ret.push(right.shift())
  }

  return ret
}

/**
 * 不断地二分数组, 直到划分为每个数组长度为1为止
 */
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

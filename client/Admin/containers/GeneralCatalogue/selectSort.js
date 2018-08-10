import deepCopy from '../../../lib/deepCopy'
import { findProperty, swap } from './sort'

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
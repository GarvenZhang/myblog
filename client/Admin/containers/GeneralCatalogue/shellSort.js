import deepCopy from '../../../lib/deepCopy'
import { findProperty, swap } from './sort'

/**
 * 希尔
 * // === 思想：[a, b, c, d, e], 先计算出动态间隔, 比如h = h * 3 + 1，然后外循环从h开始逐一遍历，内循环将外循环选定的元素及其前h位置的元素比较，当外循环遍历到最后时，再次动态计算h为(h - 1) / 3, 即以更小的间隔重复刚才的操作，直到h为1 === //
 * // === 优势：较快地将较远的元素归到正确的位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

export function shellSort (arr, property, sequence) {

  arr = deepCopy(arr)

  /**
   * 判断函数
   */
  const judge = function (inner, h, sequence, property) {
    if (sequence === true) {
      return findProperty(arr[inner], property) < findProperty(arr[inner - h], property)
    } else {
      return findProperty(arr[inner], property) > findProperty(arr[inner - h], property)
    }
  }

  const len = arr.length
  let h = 1

  // 升级版的插入排序, 只是将插入排序中每次与前一个比较 改变成 与前h个比较
  // h是希尔排序的关键
  // 能更快地将不正确的元素从较远的地方拉回来
  while (h < len / 3) {
    h = h * 3 + 1
  }

  while (h >= 1) {

    let outer
    let inner

    for (outer = h; outer < len; ++outer) {
      for (inner = outer; inner >= h && judge(inner, h, sequence, property); inner -= h) {
        swap(arr, inner, inner - h)
      }
    }

    h = (h - 1) / 3
  }

  return arr
}
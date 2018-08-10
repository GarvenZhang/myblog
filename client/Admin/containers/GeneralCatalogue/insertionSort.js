import deepCopy from '../../../lib/deepCopy'
import { findProperty, swap } from './sort'

/**
 * // === 插入排序 === //
 * // === 思想：[a, b, c, d, e], 外循环从b开始，内循环比较b之前的元素，若a比b大，a插入到b的位置，b之前的元素都比较完(内循环完)，b插入到前面所比较的元素中最小的位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */
export function insertionSort (arr, property, sequence) {

  arr = deepCopy(arr)

  // 判断函数
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

  // 从第二个开始遍历
  // 先把遍历的第一个元素用变量存起来
  for (outer = 1; outer < len; ++outer) {
    inner = outer
    tmp = arr[outer]

    // 与前一个比较, 若比它小, 则它移到现在的位置上
    // 下边再向前移动, 继续比较
    // 直到条件不成立则不用继续比较, 因为前面都是已经排好相对顺序的
    while (judge(sequence, property, arr, inner, tmp)) {
      arr[inner] = arr[inner - 1]
      --inner
    }

    // 最后把 tmp 插入到最后 下标inner 停止的位置
    arr[inner] = tmp
  }

  return arr
}
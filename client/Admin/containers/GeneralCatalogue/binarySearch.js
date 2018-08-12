// === 二分查找: 在一个有序数列中, 找中间值将其划分为两半, 然后将目标值与中间值对比, 比它小则在左半边区域再次二分查找, 比它大则在右半边区域 === //
// === 1 时间复杂度: O(logn) === //
// === 2 思路: 一定要清楚, 每次是在哪个区间内寻找, 即维护好循环不变量 === //

/**
 * 找到给出目标在有序数组中的位置
 * @param {Array} arr - 数组
 * @param {*} target - 目标
 * @return {Number} 索引
 */
export const binarySearch = (arr, target) => {

  // 在[start, end]中去找
  let start = 0
  let end = target.length - 1
  let middle

  while (start <= end) {

    middle = start + end >> 1
    if (arr[middle] === target) {
      return middle
    } else if (arr[middle] < target) { // 在[middle + 1, end]中找
      start = middle + 1
    } else {  // 在[start, middle - 1]中找
      end = middle - 1
    }

  }

  return -1

}

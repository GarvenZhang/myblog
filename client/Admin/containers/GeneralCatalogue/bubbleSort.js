import { swap, findProperty } from './sort'

// === 冒泡排序: [a, b, c, d, e], 外循环选择a, 内循环选择下一项b, 两两比较, 不合预期就换位, 然后是b,c比较, 然后是c,d比较, .., 外循环一次, 把最大的数放到最后一个位置; 接着从第二项开始外循环, ...第二个的数放到倒数第二个位置,... === //
// === 1 结果: 每外循环一次, 都会在本次循环过的一系列数据中筛选出最大的一个放到后面已排序的区域 === //
// === 2 优化: 设置一个flag, 若第一次外循环中所有内循环都符合条件, 则证明没每两两相对位置是正确的, 则不用再比较, 因此只进行了内循环的O(n), 这是已正序的情况 === //
function bubbleSort (arr, property, sequence) {

  const l = arr.length
  let needSwap

  for (let outer = 0; outer < l; ++outer) {
    needSwap = false
    // l - 1 - outer: 已排序的就不用比较了
    for (let inner = 0; inner < l - 1 - outer; ++inner) {
      if (arr[inner] > arr[inner + 1]) {
        swap(arr, inner, inner + 1)
        needSwap = true
      }
    }

    if (!needSwap) {
      return arr
    }
  }

}
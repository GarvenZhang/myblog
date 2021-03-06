import deepCopy from '../../../lib/deepCopy'
import { findProperty, swap } from './sort'

/**
 * 快排
 * // === 1 思想：[a, b, c, d, e], 利用分治发，定c为中间值，然后分别从a和e向c遍历，分别找到左边比c大, 右边比c小的值，比如a,e; 然后交换位置, 依次类推；最后一定是c左边的值比c小，右边的值都比c大；再分别对c左边的值和右边的值用同样的取中间值比较的方式逐层的递归直到划分出来需要比较的系列的长度只有1为止 === //
 * // === 2 最好情况复杂度分析: === //
 *
 * 递归算法的时间复杂度公式：T[n] = aT[n/b] + f(n)
 *
 * 最优的情况就是每一次取到的元素都刚好平分整个数组: T[n] = 2T[n/2] + f(n)
 * T[n/2]为平分后的子数组的时间复杂度
 * f[n] 为平分这个数组时所花的时间
 *
 * T[n] =  2T[n/2] + n         // 第一次递归
 * 令：n = n/2       T[n] =  2 { 2 T[n/4] + (n/2) }  + n    // 第二次递归
 *                        =  2^2 T[ n/ (2^2) ] + 2n
 * 令：n = n/(2^2)  T[n]  =  2^2  {  2 T[n/ (2^3) ]  + n/(2^2)}  +  2n
 *                        =  2^3 T[  n/ (2^3) ]  + 3n   // 第三次递归
 * 令：n = n/(  2^(m-1) )    =  2^m T[1]  + mn    // 第m次递归
 *
 * 当最后平分的不能再平分时，也就是说把公式一直往下跌倒，到最后得到T[1]时，说明这个公式已经迭代完了（T[1]是常量了）
 * 计算出此时的m值: T[n / (2 ^ m)] = T[1] => n / (2 ^ m) = 1 => m = log2n
 *
 * 则 2^m T[1]  + mn = nT[1] + nlog2n = n + nlogn = nlogn
 *
 * // === 3 最差情况复杂度分析: 每一次取到的元素就是数组中最小/最大的，这种情况其实就是冒泡排序了(每一次都排好一个元素的顺序), 为 O(n ^ 2) === //
 * // === 3.1 如何避免最坏情况：为改进快速排序算法，随机选取界点或最左、最右、中间三个元素中的值处于中间的作为界点，通常可以避免原始序列有序的最坏情况 === //
 * // === 4 空间复杂度分析: 真正消耗空间的是递归调用 === //
 * // === 4.1 最好情况空间复杂度: O(logn), 每一次都平分数组的情况 === //
 * // === 4.2 最差情况空间复杂度：O( n ), 退化为冒泡排序的情况 === //
 * // === 5 不稳定: 如序列为 5 3 3 4 3 8 9 10 11会将3的顺序打乱 === //
 *
 *
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

export function quickSort (arr, property, sequence) {

  // 深拷贝一份数组, 之后的所有操作都对这份数组操作
  arr = deepCopy(arr)

  /**
   * 判断函数
   */
  const judge = (sequence, property, index, middle) => {
    if (sequence === true) {
      return new Date(findProperty(arr[index], property)).getTime() < new Date(findProperty(arr[middle], property)).getTime()
    } else {
      return new Date(findProperty(arr[index], property)).getTime() > new Date(findProperty(arr[middle], property)).getTime()
    }
  }

  /**
   * 根据left和right将arr中此范围的数据分为二, 计算出中间的分割值, 左边的比它都小, 右边的比它都打
   * @param {Number} left - 左边界索引
   * @param {Number} right - 右边界索引
   * @return {Number} 中间值索引
   * @private
   */
  const partition = (left, right) => {

    // 计算出给定范围内的中间索引值作为参考标准
    const middle = (left + right) >> 1
    // 复制左右边界索引
    let i = left
    let j = right

    // 当左边界索引比右边界索引小
    // 证明还可以比较
    while (i <= j) {

      // 如果索引i位置的值比middle位置的值小
      // 下标i继续向middle方向移动
      while (judge(sequence, property, i, middle)) {
        ++i
      }

      // 如果索引j位置的值比middle位置的值大
      // 下标j继续向middle方向移动
      while (judge(!sequence, property, j, middle)) {
        --j
      }

      // 当上面两个循环有发现不符的
      // 在此时 下标i所指的位置 和 下标j所指的位置 还没 相越
      // 证明 下标i所指的值 比middle大, 下标j所指的位置比middle小
      // 互换位置
      // 下标 i j 继续向middle移动
      // 直到 下标i/j 相越则使得 middle左边范围的值 比 middle所指的值小, middle右边范围的值 都比 middle所指的值 大: [left, i) [j, right)
      if (i <= j) {
        swap(arr, i, j)
        ++i
        --j
      }
    }

    // 最后下标i的值为 下标j
    return i
  }

  /**
   * 根据给出的left和right边界, 计算出 middle, 再让 左范围 和 右范围 的数据做同样的二分
   */
  const quick = (left, right) => {
    let middle

    // 当数组长度大于1的时候
    if (arr.length > 1) {

      // 计算出该数组中间值的索引
      // 该计算使得该索引值左边的所有元素比它小, 右边的所有元素比它大
      middle = partition(left, right)

      // 以相同的方式处理 [left, middle) 区间的元素
      if (left < middle - 1) {
        quick(left, middle - 1)
      }

      // 以相同方式处理 [middle, right] 区间的元素
      if (middle < right) {
        quick(middle, right)
      }

    }

    return arr
  }

  return quick(0, arr.length - 1)
}
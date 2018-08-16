// === 技巧: 当把每一个算法学懂了而之后, 再去对比归纳它们之间的异同, 归纳完后想忘记也很难了 === //

// === 复杂度: === //
// === 1 大O: n表示数据规模, O(f(n))表示运行算法所需执行的指令数, 与f(n)成正比 === //
// === 1.1 计算: 取指数最大的, 如 n^3 + n^2 + log2n = O(n^3)  === //
// === 2 时间复杂度: 看平均值, 前三 O(n^2); 中四 O(n * log n); 后二 O(n+ k); 基排 O(O * k) === //
/*
  // O(1): 没有数据规模的变化
  void swapTwoInts (int &a, int &b)
  {
    int temp = a;
    a = b;
    b = temp;
  }

  // O(n): 有循环, 且遍历次数与 n 相关
  int sum (int n)
  {
    int ret = 0;
    for (int i = 0; i <= n; ++i)
    {
      ret += i;
    }
    return ret;
  }

  // O(n^2): 双重循环, 每层循环都与 n 相关
  void selectionSort (int arr[], int n)
  {
    for (int i = 0; i < n; ++i)
    {
      int minIndex = i;
      for (int j = i + 1; j < n; ++j)
      {
        if (arr[j] < arr[minIndex])
        {
          minIndex = j;
        }
      }
      swap(arr[j], arr[minIndex]);
    }
  }

  // O(logn):
  int binarySearch (int arr[], int n, int target)   |
  {
    int l = 0, r = n - 1;
    while (l < r)
    {
      int mid = l + (r - l) / 2;
      if (arr[mid] === target)
      {
        return mid;
      }
      if (arr[mid] > target)
      {
        r = mid - 1;
      }
      else
      {
        l = mid + 1;
      }
    }
    return -1;
  }

  思路: 在n个元素中查找 -> 在n/2个元素中查找 -> 在n/4个元素中查找 -> ... -> 在1个元素中查找
  实质: n 经过几次 "除以2" 操作后等于 1 ? -> log2n = O(logn)

*/
// === 3 空间复杂度: 递归调用有空间代价, 在递归调用前会将函数的状态压入系统调用栈中 === //

// === 稳定性: 关键字相同的记录排序前后的相对位置不发生改变 === //
// === 1 记忆技巧：一般来说，若存在不相邻元素间交换，则很可能是不稳定的排序 === //


/**
 * 交换位置
 * // === 技巧：利用代码执行顺序，后一个赋值为前一个，而前一个赋值为前一个的行为在数组的第二项进行 === //
 * @param {Array} arr - 数组
 * @param {Number} prev - 前一个索引
 * @param {Number} next - 后一个索引
 * @private
 */
export const swap = (arr, prev, next) => {
  arr[next] = [arr[prev], arr[prev] = arr[next]][0]
}

/**
 * 查找对象属性
 * @param {Object} obj 对象
 * @param {Array} property - 属性为顺序的数组，如：{one: {two: '1'}} 为 ['one', 'two']
 * @private
 * @return {String|Number}
 */
export const findProperty = (obj, property) => {
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

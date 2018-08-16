webpackHotUpdate("general-catalogue",{

/***/ "./client/Admin/containers/GeneralCatalogue/quickSort.js":
/*!***************************************************************!*\
  !*** ./client/Admin/containers/GeneralCatalogue/quickSort.js ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quickSort = quickSort;

var _deepCopy = __webpack_require__(/*! ../../../lib/deepCopy */ "./client/lib/deepCopy.js");

var _deepCopy2 = _interopRequireDefault(_deepCopy);

var _sort = __webpack_require__(/*! ./sort */ "./client/Admin/containers/GeneralCatalogue/sort.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 快排
 * // === 1 思想：[a, b, c, d, e], 利用分治发，定c为中间值，然后分别从a和e向c遍历，分别找到左边比c大, 右边比c小的值，比如a,e; 然后交换位置, 依次类推；最后一定是c左边的值比c小，右边的值都比c大；再分别对c左边的值和右边的值用同样的取中间值比较的方式逐层的递归直到划分出来需要比较的系列的长度只有1为止 === //
 * // === 2 最好情况复杂度分析: === //
 *
 * 递归算法的时间复杂度公式：T[n] = aT[n/b] + f(n)
 *
 * 最优的情况就是每一次取到的元素都刚好平分整个数组: T[n] = 2T[n/2] + f(n)
 * T[n/2]为平分后的子数组的时间复杂度
 * 
 *
 *
 *
 *
 *
 *
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

function quickSort(arr, property, sequence) {

  // 深拷贝一份数组, 之后的所有操作都对这份数组操作
  arr = (0, _deepCopy2.default)(arr);

  /**
   * 判断函数
   */
  var judge = function judge(sequence, property, index, middle) {
    if (sequence === true) {
      return new Date((0, _sort.findProperty)(arr[index], property)).getTime() < new Date((0, _sort.findProperty)(arr[middle], property)).getTime();
    } else {
      return new Date((0, _sort.findProperty)(arr[index], property)).getTime() > new Date((0, _sort.findProperty)(arr[middle], property)).getTime();
    }
  };

  /**
   * 根据left和right将arr中此范围的数据分为二, 计算出中间的分割值, 左边的比它都小, 右边的比它都打
   * @param {Number} left - 左边界索引
   * @param {Number} right - 右边界索引
   * @return {Number} 中间值索引
   * @private
   */
  var partition = function partition(left, right) {

    // 计算出给定范围内的中间索引值作为参考标准
    var middle = left + right >> 1;
    // 复制左右边界索引
    var i = left;
    var j = right;

    // 当左边界索引比右边界索引小
    // 证明还可以比较
    while (i <= j) {

      // 如果索引i位置的值比middle位置的值小
      // 下标i继续向middle方向移动
      while (judge(sequence, property, i, middle)) {
        ++i;
      }

      // 如果索引j位置的值比middle位置的值大
      // 下标j继续向middle方向移动
      while (judge(!sequence, property, j, middle)) {
        --j;
      }

      // 当上面两个循环有发现不符的
      // 在此时 下标i所指的位置 和 下标j所指的位置 还没 相越
      // 证明 下标i所指的值 比middle大, 下标j所指的位置比middle小
      // 互换位置
      // 下标 i j 继续向middle移动
      // 直到 下标i/j 相越则使得 middle左边范围的值 比 middle所指的值小, middle右边范围的值 都比 middle所指的值 大: [left, i) [j, right)
      if (i <= j) {
        (0, _sort.swap)(arr, i, j);
        ++i;
        --j;
      }
    }

    // 最后下标i的值为 下标j
    return i;
  };

  /**
   * 根据给出的left和right边界, 计算出 middle, 再让 左范围 和 右范围 的数据做同样的二分
   */
  var quick = function quick(left, right) {
    var middle = void 0;

    // 当数组长度大于1的时候
    if (arr.length > 1) {

      // 计算出该数组中间值的索引
      // 该计算使得该索引值左边的所有元素比它小, 右边的所有元素比它大
      middle = partition(left, right);

      // 以相同的方式处理 [left, middle) 区间的元素
      if (left < middle - 1) {
        quick(left, middle - 1);
      }

      // 以相同方式处理 [middle, right] 区间的元素
      if (middle < right) {
        quick(middle, right);
      }
    }

    return arr;
  };

  return quick(0, arr.length - 1);
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(quickSort, 'quickSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/quickSort.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=general-catalogue.a3b5dde50b18f4bba2c0.hot-update.js.map
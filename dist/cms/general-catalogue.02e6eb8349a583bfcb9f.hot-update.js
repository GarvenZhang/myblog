webpackHotUpdate("general-catalogue",{

/***/ "./client/Admin/containers/GeneralCatalogue/mergeSort.js":
/*!***************************************************************!*\
  !*** ./client/Admin/containers/GeneralCatalogue/mergeSort.js ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSort = mergeSort;

var _deepCopy = __webpack_require__(/*! ../../../lib/deepCopy */ "./client/lib/deepCopy.js");

var _deepCopy2 = _interopRequireDefault(_deepCopy);

var _sort = __webpack_require__(/*! ./sort */ "./client/Admin/containers/GeneralCatalogue/sort.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 归并
 * // === 1 思想：[a, b, c, d ,e], 用分治划出左右数组，递归直到长度为1；比如a与b比较，c与d比较，排序后放入新数组返回，之后，cd与e比较，ab与cde比较 === //
 * // === 2 时间复杂度: T[n]  =  2T[n/2] + O(n) === //
 * // === 2.1 数组划分函数: 划分两部分，那每一小部分排序好所花时间则为  T[n/2] === //
 * // === 2.2 有序数组归并函数: 代码中有3个长度为n的循环（非嵌套）, 所以时间复杂度则为O(n) === //
 * // === 2.3  === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

function merge(left, right, property, sequence) {

  /**
   * 判断函数
   */
  var judge = function judge() {
    if (sequence === true) {
      return (0, _sort.findProperty)(left[0], property) < (0, _sort.findProperty)(right[0], property);
    } else {
      return (0, _sort.findProperty)(left[0], property) > (0, _sort.findProperty)(right[0], property);
    }
  };

  // 结果数组
  var ret = [];

  // 一开始每两两长度为1的数组中的元素进行顺序比较
  // 通过判断, 小的先放进 ret, 大的后放进ret
  while (left.length > 0 && right.length > 0) {
    if (judge()) {
      ret.push(left.shift());
    } else {
      ret.push(right.shift());
    }
  }

  // 若做完以上操作后, left数组 或者 right数组要有剩余的, 证明是比较比ret中的都大, 则直接一个个放进去就好了
  while (left.length > 0) {
    ret.push(left.shift());
  }
  while (right.length > 0) {
    ret.push(right.shift());
  }

  return ret;
}

/**
 * 不断地二分数组, 直到划分为每个数组长度为1为止
 */
function _mergeSort(arr, property, sequence) {

  var l = arr.length;
  if (l === 1) {
    return arr;
  }

  var middle = l >> 1;
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  return merge(_mergeSort(left, property, sequence), _mergeSort(right, property, sequence), property, sequence);
}

function mergeSort(arr, property, sequence) {
  arr = (0, _deepCopy2.default)(arr);
  return _mergeSort(arr, property, sequence);
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(merge, 'merge', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/mergeSort.js');
  reactHotLoader.register(_mergeSort, '_mergeSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/mergeSort.js');
  reactHotLoader.register(mergeSort, 'mergeSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/mergeSort.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=general-catalogue.02e6eb8349a583bfcb9f.hot-update.js.map
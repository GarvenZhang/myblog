(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-catalogue"],{

/***/ "./client/Admin/components/Icon/index.css":
/*!************************************************!*\
  !*** ./client/Admin/components/Icon/index.css ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hackGreen":"#00F900","hackBlue":"blue","icon-wrap":"icon-wrap_2HR-g","icon-up":"icon-up_3QWRp","icon-down":"icon-down_WaHuj"};

/***/ }),

/***/ "./client/Admin/components/Icon/index.jsx":
/*!************************************************!*\
  !*** ./client/Admin/components/Icon/index.jsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortIcon = SortIcon;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./index.css */ "./client/Admin/components/Icon/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function SortIcon(props) {
  return _react2.default.createElement(
    'div',
    { className: 'icon-wrap' },
    _react2.default.createElement('i', { className: 'icon-up', onClick: function onClick() {
        return props.sort()(true);
      } }),
    _react2.default.createElement('i', { className: 'icon-down', onClick: function onClick() {
        return props.sort()(false);
      } })
  );
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SortIcon, 'SortIcon', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Icon/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/components/Slidebar/index.css":
/*!****************************************************!*\
  !*** ./client/Admin/components/Slidebar/index.css ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"slidebar-inner":"slidebar-inner_su046","nav-list":"nav-list_3FLx1","nav-item":"nav-item_2lrTl","link":"link_OqmfB"};

/***/ }),

/***/ "./client/Admin/components/Slidebar/index.jsx":
/*!****************************************************!*\
  !*** ./client/Admin/components/Slidebar/index.jsx ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/components/Slidebar/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === localStorage: 专门来于浏览器存储 === //
// === 1 特点：大小5M左右，仅存在客户端，人为清空才消失(js或手动清空) === //
// === 2 使用场景: 不怎么变的数据(js,css,小icon,动态数据等) === //

var Sidebar = function (_Component) {
  (0, _inherits3.default)(Sidebar, _Component);

  function Sidebar(props) {
    (0, _classCallCheck3.default)(this, Sidebar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));

    _this.loginout = _this.loginout.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Sidebar, [{
    key: 'loginout',
    value: function loginout() {
      window.localStorage.setItem('access_token', '');
      window.location = '/';
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: _index2.default['slidebar-inner'] },
        _react2.default.createElement(
          'ul',
          { className: _index2.default['nav-list'] },
          _react2.default.createElement(
            'li',
            { className: _index2.default['nav-item'] },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/post' },
              '\u6587\u7AE0\u53D1\u8868'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['nav-item'] },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/general-catalogue' },
              '\u6587\u7AE0\u7BA1\u7406'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['nav-item'] },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/comment' },
              '\u8BC4\u8BBA\u7BA1\u7406'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['nav-item'] },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/chatroom' },
              '\u804A\u5929\u5BA4\u7BA1\u7406'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['nav-item'] },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/works' },
              '\u4F5C\u54C1\u96C6\u7BA1\u7406'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['nav-item'] },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/info' },
              '\u4E2A\u4EBA\u4FE1\u606F'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['nav-item'] },
            _react2.default.createElement(
              'a',
              { className: _index2.default['link'], href:  false ? undefined : 'http://localhost:' + _config2.default.indexPort },
              '\u56DE\u5230\u535A\u5BA2'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['nav-item'] },
            _react2.default.createElement(
              'a',
              { href: 'javascript: void (0);', onClick: this.loginout, className: _index2.default['link'] },
              '\u767B\u51FA'
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Sidebar;
}(_react.Component);

Sidebar.tree = {
  '1': {
    id: 1,
    name: '文章发表',
    link: '/post'
  }
};
var _default = Sidebar;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sidebar, 'Sidebar', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Slidebar/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Slidebar/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/GeneralCatalogue/index.css":
/*!************************************************************!*\
  !*** ./client/Admin/containers/GeneralCatalogue/index.css ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"general-catalogue-wrap":"general-catalogue-wrap_25vrX","table-hd":"table-hd_jx8nH","table-tr":"table-tr_2oKxC","table-td":"table-td_2Nn21"};

/***/ }),

/***/ "./client/Admin/containers/GeneralCatalogue/index.js":
/*!***********************************************************!*\
  !*** ./client/Admin/containers/GeneralCatalogue/index.js ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");

var _Slidebar = __webpack_require__(/*! ../../components/Slidebar */ "./client/Admin/components/Slidebar/index.jsx");

var _Slidebar2 = _interopRequireDefault(_Slidebar);

var _Icon = __webpack_require__(/*! ../../components/Icon */ "./client/Admin/components/Icon/index.jsx");

var _ArticleList = __webpack_require__(/*! ../../../User/redux/reducers/ArticleList */ "./client/User/redux/reducers/ArticleList.js");

var _curring = __webpack_require__(/*! ../../../lib/curring */ "./client/lib/curring.js");

var _curring2 = _interopRequireDefault(_curring);

var _sort = __webpack_require__(/*! ./sort */ "./client/Admin/containers/GeneralCatalogue/sort.js");

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/containers/GeneralCatalogue/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var get_all_list = _ArticleList.actions.get_all_list,
    sort_all_list = _ArticleList.actions.sort_all_list;

var GeneralCatalogue = function (_Component) {
  (0, _inherits3.default)(GeneralCatalogue, _Component);

  function GeneralCatalogue(props) {
    (0, _classCallCheck3.default)(this, GeneralCatalogue);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GeneralCatalogue.__proto__ || (0, _getPrototypeOf2.default)(GeneralCatalogue)).call(this, props));

    _this.sortHandle = _this.sortHandle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(GeneralCatalogue, [{
    key: 'sortHandle',
    value: function sortHandle(sortFn, property) {
      var _this2 = this;

      var iS = (0, _curring2.default)(function (arr, property, _sequence) {

        var data = sortFn(arr, property, _sequence);
        _this2.props.sort_all_list(data);
      });

      return iS(this.props.data, property);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: _index2.default['general-catalogue-page'] },
        _react2.default.createElement(
          'div',
          { className: 'sildebar-wrap' },
          _react2.default.createElement(_Slidebar2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'admin-wrap' },
          _react2.default.createElement(
            'div',
            { className: _index2.default['general-catalogue-wrap'] },
            _react2.default.createElement(
              'div',
              { className: _index2.default['search-wrap'] },
              _react2.default.createElement('input', { type: 'text', className: _index2.default['input'], placeholder: '\uD83D\uDD0D' })
            ),
            _react2.default.createElement(
              'div',
              { className: _index2.default['table-wrap'] },
              _react2.default.createElement(
                'div',
                { className: _index2.default['table-hd'] },
                _react2.default.createElement(
                  'ul',
                  { className: _index2.default['table-tr'] },
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u6807\u9898',
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_sort.selectSort, ['title']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u53D1\u8868\u65E5\u671F',
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_sort.quickSort, ['pubtime']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u70B9\u8D5E\u6570',
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_sort.shellSort, ['likedNum']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u8BC4\u8BBA\u6570',
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_sort.mergeSort, ['commentNum']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u6D4F\u89C8\u6570',
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_sort.insertionSort, ['readNum']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u7EFC\u5408',
                    _react2.default.createElement(_Icon.SortIcon, null)
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _index2.default['table-bd'] },
                this.props.data.map(function (item) {
                  return _react2.default.createElement(
                    'ul',
                    { className: _index2.default['table-tr'], key: item.id },
                    _react2.default.createElement(
                      'li',
                      { className: _index2.default['table-td'] },
                      item.title
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: _index2.default['table-td'] },
                      item.pubtime
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: _index2.default['table-td'] },
                      item.likedNum
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: _index2.default['table-td'] },
                      item.commentNum
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: _index2.default['table-td'] },
                      item.readNum
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: _index2.default['table-td'] },
                      item.average
                    )
                  );
                })
              )
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.props.get_all_list();
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return GeneralCatalogue;
}(_react.Component);

GeneralCatalogue.defaultProps = {
  data: [{
    title: '',
    pubtime: '',
    likedNum: 0,
    readNum: 0,
    commentNum: 0,
    average: 0
  }]
};


if (true) {
  GeneralCatalogue.propTypes = {
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      title: _propTypes2.default.string.isRequired,
      pubtime: _propTypes2.default.string.isRequired,
      likedNum: _propTypes2.default.number.isRequired,
      commentNum: _propTypes2.default.number.isRequired,
      readNum: _propTypes2.default.number.isRequired,
      average: _propTypes2.default.number.isRequired
    }).isRequired).isRequired
  };
}

function mapStateToProps(state) {
  return state.allReducer;
}

function mapDispatchToProps(dispatch) {
  return {
    get_all_list: (0, _redux.bindActionCreators)(get_all_list, dispatch),
    sort_all_list: (0, _redux.bindActionCreators)(sort_all_list, dispatch)
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GeneralCatalogue);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get_all_list, 'get_all_list', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/index.js');
  reactHotLoader.register(sort_all_list, 'sort_all_list', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/index.js');
  reactHotLoader.register(GeneralCatalogue, 'GeneralCatalogue', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/index.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/GeneralCatalogue/sort.js":
/*!**********************************************************!*\
  !*** ./client/Admin/containers/GeneralCatalogue/sort.js ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.insertionSort = insertionSort;
exports.selectSort = selectSort;
exports.quickSort = quickSort;
exports.mergeSort = mergeSort;
exports.shellSort = shellSort;

var _deepCopy = __webpack_require__(/*! ../../../lib/deepCopy */ "./client/lib/deepCopy.js");

var _deepCopy2 = _interopRequireDefault(_deepCopy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})(); // === 平均时间复杂度： === //
// === 前三 O(n^2); 中四 O(n * log n); 后二 O(n+ k); 基排 O(O * k) === //

// === 稳定性： === //
// === 选择 / 希尔 / 快排 / 堆排 不稳定 === //

/**
 * 交换位置
 * // === 技巧：利用代码执行顺序，后一个赋值为前一个，而前一个赋值为前一个的行为在数组的第二项进行 === //
 * @param {Array} arr - 数组
 * @param {Number} prev - 前一个索引
 * @param {Number} next - 后一个索引
 * @private
 */
var swap = function swap(arr, prev, next) {
  arr[next] = [arr[prev], arr[prev] = arr[next]][0];
};

/**
 * 查找对象属性
 * @param {Object} obj 对象
 * @param {Array} property - 属性为顺序的数组，如：{one: {two: '1'}} 为 ['one', 'two']
 * @private
 * @return {String|Number}
 */
var findProperty = function findProperty(obj, property) {
  var i = 0;
  var len = property.length;

  if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object') {
    return obj;
  }

  while (i < len) {
    var item = property[i];
    if (obj[item] !== 'undefined') {
      // === 此处，判断一个属性是否存在，不能用隐式转换，因为有可能属性值为0, false, undefined, '', null从而判断错误 === //
      obj = obj[item];
    } else {
      return obj;
    }

    ++i;
  }

  return obj;
};

/**
 * 插入排序
 * // === 插入排序 === //
 * // === 思想：[a, b, c, d, e], 外循环从b开始，内循环比较b之前的元素，若a比b大，a插入到b的位置，b之前的元素都比较完(内循环完)，b插入到前面所比较的元素中最小的位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */
function insertionSort(arr, property, sequence) {
  arr = (0, _deepCopy2.default)(arr);

  var judge = function judge(sequence, property, arr, inner, tmp) {
    if (sequence === true) {
      return inner > 0 && findProperty(arr[inner - 1], property) > findProperty(tmp, property);
    } else {
      return inner > 0 && findProperty(arr[inner - 1], property) < findProperty(tmp, property);
    }
  };

  var outer = void 0;
  var inner = void 0;
  var len = arr.length;
  var tmp = void 0;

  for (outer = 1; outer < len; ++outer) {
    inner = outer;
    tmp = arr[outer];

    while (judge(sequence, property, arr, inner, tmp)) {
      arr[inner] = arr[inner - 1];
      --inner;
    }

    arr[inner] = tmp;
  }

  return arr;
}

/**
 * 选择排序
 * // === 思想：[a, b, c, d, e], 外循环先选择a为最小，内循环从b开始与a比较，若有比a更小的，记录索引；内循环结束后将外循环选择的元素(认定的最小值)与最后的索引比较，若不一致则交换位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

function selectSort(arr, property, sequence) {
  arr = (0, _deepCopy2.default)(arr);

  var judge = function judge(sequence, property, arr, inner, target) {
    if (sequence === true) {
      return findProperty(arr[inner], property).localeCompare(findProperty(arr[target], property)) < 0;
    } else {
      return findProperty(arr[inner], property).localeCompare(findProperty(arr[target], property)) > 0;
    }
  };

  var len = arr.length;
  var outer = void 0;
  var inner = void 0;
  var target = void 0;

  for (outer = 0; outer < len - 1; ++outer) {
    target = outer;

    for (inner = outer + 1; inner < len; ++inner) {
      if (judge(sequence, property, arr, inner, target)) {
        target = inner;
      }
    }

    if (target !== outer) {
      swap(arr, target, outer);
    }
  }

  return arr;
}

/**
 * 快排
 * // === 思想：[a, b, c, d, e], 利用分治发，定c为中间值，然后分别从a和e向c遍历，分别找到左边比c大, 右边比c小的值，比如a,e; 然后交换位置, 依次类推；最后一定是c左边的值比c小，右边的值都比c大；再分别对c左边的值和右边的值用同样的取中间值比较的方式逐层的递归直到划分出来需要比较的系列之的长度只有1为止 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

function quickSort(arr, property, sequence) {
  arr = (0, _deepCopy2.default)(arr);

  var judge = function judge(sequence, property, arr, index, middle) {
    if (sequence === true) {
      return new Date(findProperty(arr[index], property)).getTime() < new Date(findProperty(arr[middle], property)).getTime();
    } else {
      return new Date(findProperty(arr[index], property)).getTime() > new Date(findProperty(arr[middle], property)).getTime();
    }
  };

  var partition = function partition(arr, left, right) {
    var middle = left + right >> 1;
    var i = left;
    var j = right;

    while (i <= j) {
      while (judge(sequence, property, arr, i, middle)) {
        ++i;
      }

      while (judge(!sequence, property, arr, j, middle)) {
        --j;
      }

      if (i <= j) {
        swap(arr, i, j);
        ++i;
        --j;
      }
    }

    return i;
  };

  var quick = function quick(arr, left, right) {
    var middle = void 0;

    if (arr.length > 1) {
      middle = partition(arr, left, right);

      if (left < middle - 1) {
        quick(arr, left, middle - 1);
      }

      if (middle < right) {
        quick(arr, middle, right);
      }
    }

    return arr;
  };

  return quick(arr, 0, arr.length - 1);
}

/**
 * 归并
 * // === 思想：[a, b, c, d ,e], 用分治划出左右数组，递归直到长度为1；比如a与b比较，c与d比较，排序后放入新数组返回，之后，cd与e比较，ab与cde比较 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

function merge(left, right, property, sequence) {
  var judge = function judge() {
    if (sequence === true) {
      return findProperty(left[0], property) < findProperty(right[0], property);
    } else {
      return findProperty(left[0], property) > findProperty(right[0], property);
    }
  };

  var ret = [];

  while (left.length > 0 && right.length > 0) {
    if (judge()) {
      ret.push(left.shift());
    } else {
      ret.push(right.shift());
    }
  }

  while (left.length > 0) {
    ret.push(left.shift());
  }

  while (right.length > 0) {
    ret.push(right.shift());
  }

  return ret;
}

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

/**
 * 希尔
 * // === 思想：[a, b, c, d, e], 先计算出动态间隔, 比如h = h * 3 + 1，然后外循环从h开始逐一遍历，内循环将外循环选定的元素及其前h位置的元素比较，当外循环遍历到最后时，再次动态计算h为(h - 1) / 3, 即以更小的间隔重复刚才的操作，知道h为1 === //
 * // === 优势：较快地将较远的元素归到正确的位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

function shellSort(arr, property, sequence) {
  arr = (0, _deepCopy2.default)(arr);

  var judge = function judge(arr, inner, h, sequence, property) {
    if (sequence === true) {
      return findProperty(arr[inner], property) < findProperty(arr[inner - h], property);
    } else {
      return findProperty(arr[inner], property) > findProperty(arr[inner - h], property);
    }
  };

  var len = arr.length;
  var h = 1;

  while (h < len / 3) {
    h = h * 3 + 1;
  }

  while (h >= 1) {
    var outer = void 0;
    var inner = void 0;

    for (outer = h; outer < len; ++outer) {
      for (inner = outer; inner >= h && judge(arr, inner, h, sequence, property); inner -= h) {
        swap(arr, inner, inner - h);
      }
    }

    h = (h - 1) / 3;
  }

  return arr;
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(swap, 'swap', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  reactHotLoader.register(findProperty, 'findProperty', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  reactHotLoader.register(insertionSort, 'insertionSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  reactHotLoader.register(selectSort, 'selectSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  reactHotLoader.register(quickSort, 'quickSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  reactHotLoader.register(merge, 'merge', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  reactHotLoader.register(_mergeSort, '_mergeSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  reactHotLoader.register(mergeSort, 'mergeSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  reactHotLoader.register(shellSort, 'shellSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/reducers/ArticleList.js":
/*!***************************************************!*\
  !*** ./client/User/redux/reducers/ArticleList.js ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.actionTypes = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

exports.latestReducer = latestReducer;
exports.bestReducer = bestReducer;
exports.searchReducer = searchReducer;
exports.allReducer = allReducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialStateForLatest = {
  data: [],
  pageNum: 1,
  perPage: 10,
  totalCount: 10,
  isEndPage: false
};

var initialStateForBest = {
  data: [],
  pageNum: 1,
  perPage: 10,
  totalCount: 10,
  isEndPage: false
};

var initialStateForSearch = {
  data: [],
  pageNum: 1,
  perPage: 10,
  totalCount: 10,
  isEndPage: false
};

var initialStateForAll = {
  data: []
};

var actionTypes = exports.actionTypes = {
  GET_LATEST_LIST: (0, _symbol2.default)(),
  RESPONSE_LATEST_LIST: (0, _symbol2.default)(),
  GET_BEST_LIST: (0, _symbol2.default)(),
  RESPONSE_BEST_LIST: (0, _symbol2.default)(),
  GET_SEARCH_LIST: (0, _symbol2.default)(),
  RESPONSE_SEARCH_LIST: (0, _symbol2.default)(),
  GET_All_LIST: (0, _symbol2.default)(),
  RESPONSE_All_LIST: (0, _symbol2.default)(),
  SORT_ALL_LIST: (0, _symbol2.default)()
};

var actions = exports.actions = {

  get_latest_list: function get_latest_list(pageNum, perPage) {
    return {
      type: actionTypes.GET_LATEST_LIST,
      pageNum: pageNum,
      perPage: perPage
    };
  },

  get_best_list: function get_best_list(pageNum, perPage) {
    return {
      type: actionTypes.GET_BEST_LIST,
      pageNum: pageNum,
      perPage: perPage
    };
  },

  get_search_list: function get_search_list(title, pageNum, perPage) {
    return {
      type: actionTypes.GET_SEARCH_LIST,
      title: title,
      pageNum: pageNum,
      perPage: perPage
    };
  },

  get_all_list: function get_all_list(data) {
    return {
      type: actionTypes.GET_All_LIST,
      data: data
    };
  },

  sort_all_list: function sort_all_list(data) {
    return {
      type: actionTypes.SORT_ALL_LIST,
      data: data
    };
  }
};

function latestReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateForLatest;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.RESPONSE_LATEST_LIST:
      return (0, _extends3.default)({}, state, {
        data: state.data.concat(action.data),
        pageNum: action.pageNum,
        perPage: action.perPage,
        totalCount: action.totalCount,
        isEndPage: action.isEndPage
      });
    default:
      return state;
  }
}

function bestReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateForBest;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.RESPONSE_BEST_LIST:
      return (0, _extends3.default)({}, state, {
        data: state.data.concat(action.data),
        pageNum: action.pageNum,
        perPage: action.perPage,
        totalCount: action.totalCount,
        isEndPage: action.isEndPage
      });
    default:
      return state;
  }
}

function searchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateForSearch;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.RESPONSE_SEARCH_LIST:
      return (0, _extends3.default)({}, state, {
        data: action.data,
        pageNum: action.pageNum,
        perPage: action.perPage,
        totalCount: action.totalCount,
        isEndPage: action.isEndPage
      });
    default:
      return state;
  }
}

function allReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateForAll;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.RESPONSE_All_LIST:
      return (0, _extends3.default)({}, state, {
        data: action.data
      });
    case actionTypes.SORT_ALL_LIST:
      return (0, _extends3.default)({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialStateForLatest, "initialStateForLatest", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  reactHotLoader.register(initialStateForBest, "initialStateForBest", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  reactHotLoader.register(initialStateForSearch, "initialStateForSearch", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  reactHotLoader.register(initialStateForAll, "initialStateForAll", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  reactHotLoader.register(actionTypes, "actionTypes", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  reactHotLoader.register(actions, "actions", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  reactHotLoader.register(latestReducer, "latestReducer", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  reactHotLoader.register(bestReducer, "bestReducer", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  reactHotLoader.register(searchReducer, "searchReducer", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  reactHotLoader.register(allReducer, "allReducer", "/Users/garven/codetest/realProject/myblog/client/User/redux/reducers/ArticleList.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/curring.js":
/*!*******************************!*\
  !*** ./client/lib/curring.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = curring;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 柯里化
 * // === 特点：传进去的参数会累积，没有达到本应该有的个数不会正式执行 === //
 */
function curring(fn) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var len = fn.length;

  return function () {
    var _args = args.slice(0);

    for (var _len = arguments.length, innerArgs = Array(_len), _key = 0; _key < _len; _key++) {
      innerArgs[_key] = arguments[_key];
    }

    _args = _args.concat(innerArgs);

    if (_args.length < len) {
      return curring.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(curring, "curring", "/Users/garven/codetest/realProject/myblog/client/lib/curring.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/deepCopy.js":
/*!********************************!*\
  !*** ./client/lib/deepCopy.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = deepCopy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 深拷贝
 * // === 思路：根据target类型生成新实例，如空对象或空数组；然后通过 for..in 遍历可枚举属性，并通过hasOwnProperty来过滤目标对象上才有的属性；在赋值的时候，根据类型来决定是否需要递归 === //
 * @param {Object|Array} target - 拷贝目标
 * @return {Object|Array}
 */

function deepCopy(target) {
  if ((typeof target === 'undefined' ? 'undefined' : (0, _typeof3.default)(target)) !== 'object') {
    return;
  }

  var newObj = target instanceof Array ? [] : {};

  for (var prop in target) {
    if (target.hasOwnProperty(prop)) {
      newObj[prop] = (0, _typeof3.default)(target[prop]) === 'object' ? deepCopy(target[prop]) : target[prop];
    }
  }

  return newObj;
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(deepCopy, 'deepCopy', '/Users/garven/codetest/realProject/myblog/client/lib/deepCopy.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=general-catalogue.js.map
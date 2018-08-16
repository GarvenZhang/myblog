webpackHotUpdate("general-catalogue",{

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
exports.SortIcon = undefined;

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

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/components/Icon/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var SortIcon = exports.SortIcon = function (_PureComponent) {
  (0, _inherits3.default)(SortIcon, _PureComponent);

  function SortIcon(props) {
    (0, _classCallCheck3.default)(this, SortIcon);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SortIcon.__proto__ || (0, _getPrototypeOf2.default)(SortIcon)).call(this, props));

    _this.clickHandle = _this.clickHandle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SortIcon, [{
    key: 'clickHandle',
    value: function clickHandle(e) {

      var direction = e.currentTarget.getAttribute('data-sort-direction');

      switch (direction) {

        case 'up':
          this.props.sort(true);
          break;

        case 'down':
          this.props.sort(false);
          break;

      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _index2.default['icon-wrap'] },
        _react2.default.createElement('i', { className: _index2.default['icon-up'], 'data-sort-direction': 'up', onClick: this.clickHandle }),
        _react2.default.createElement('i', { className: _index2.default['icon-down'], 'data-sort-direction': 'down', onClick: this.clickHandle })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return SortIcon;
}(_react.PureComponent);

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

/***/ })

})
//# sourceMappingURL=general-catalogue.f3123896f0485f1c276a.hot-update.js.map
webpackHotUpdate("index",{

/***/ "./client/User/components/Img/index.jsx":
/*!**********************************************!*\
  !*** ./client/User/components/Img/index.jsx ***!
  \**********************************************/
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

__webpack_require__(/*! ./index.css */ "./client/User/components/Img/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var loadingGif = 'data:image/gif;base64,R0lGODlhGAAYAKIAAP///8z/zAAAAOjo6AAzAACZMwAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAGAAYAAADQgi63P4wykmrvTjrzbufQyiKjmCe56iWKPpFQcAQxBXLRQHQNXUrOQVv8gPqhDRYjBFcDB9L5tHZqzQ5101Ws3UkAAAh+QQJCgAAACwAAAAAGAAYAAADRQi63P4wykmrjUJcl/Ve3QdmohKWAImuDeG+7wXPrDQMTFFcNx4EAN2O0lP8FMJJ0QhE6iJLZu75uDWO0wsWtS11RV9HAgAh+QQJCgAAACwAAAAAGAAYAAADRwi6DCItSvambfXqrC1XBNEtXyiODgSGqJKZrQvBMcPWuFbsPN/2wFwuEMgNBgBisXZUKJlIJzHWXDxRVetylDVGhV1cOJIAACH5BAkKAAAALAAAAAAYABgAAANICLoMRC1K9qZt9eqslRAYxBTF9IELB5Cl+aXiSmqnkrEdUFd4rqOKmW9IBASOSOQwySw6F4PBExqdKqJSK9YK2Gqz3LB4zEgAACH5BAkKAAAALAAAAAAYABgAAANDCLoMVS1K9qZt9eqsFSEYxATB9IELB5Cl+aXiSmqnkrEdUFd4rqOKmW+oEBiPx8hgyWQin8pmk0itWq/YrHbL7XojCQAh+QQJCgAAACwAAAAAGAAYAAADRwi6DBEtSvambfXqrFUpGMQMw/SBCweQpfml4kpqp5KxHVBXeK6jiplvqCAYj8chckls+gQC5wIalVKlgKsVis1Wu+CwGJwAACH5BAkKAAAALAAAAAAYABgAAANICLoMMy1K9qZt9eqsVQgY1HkfJY7AByocqrInmpatXMp4VOw8L/fAnLBDIAwVRaNAkEsqljjnk4mSTmXFBvQI2B69Q7BQHEkAACH5BAUKAAAALAAAAAAYABgAAANECLrc/jDKSWscw0KctePeh4UNSC7jSQZs22purM5OUTCCoNk3QQA5HYWn8CmCE2Lxd8xFlEuc82FrGKWaq0p74pK8jgQAOw==';

var Image = function (_Component) {
  (0, _inherits3.default)(Image, _Component);

  function Image(props) {
    (0, _classCallCheck3.default)(this, Image);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call(this, props));

    _this.state = {
      src: loadingGif
    };

    return _this;
  }

  (0, _createClass3.default)(Image, [{
    key: 'preload',
    value: function preload() {
      var _this2 = this;

      var img = new Image();
      img.src = this.props.src;
      img.onload = function () {
        _this2.setState({
          src: _this2.props.src
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('img', { src: this.state.src });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.preload();
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Image;
}(_react.Component);

Image.defaultProps = {
  src: ''
};


if (true) {
  Image.propTypes = {
    src: _propTypes2.default.string.isRequired
  };
}

var _default = Image;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loadingGif, 'loadingGif', '/Users/garven/codetest/realProject/myblog/client/User/components/Img/index.jsx');
  reactHotLoader.register(Image, 'Image', '/Users/garven/codetest/realProject/myblog/client/User/components/Img/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Img/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.bb9fdf25dcf2add25c7e.hot-update.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chatroom"],{

/***/ "./client/Admin/components/Form/index.css":
/*!************************************************!*\
  !*** ./client/Admin/components/Form/index.css ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"secondary-password-login-wrap":"secondary-password-login-wrap_3LArj"};

/***/ }),

/***/ "./client/Admin/components/Form/index.jsx":
/*!************************************************!*\
  !*** ./client/Admin/components/Form/index.jsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatroomLogin = exports.SecondaryPasswordLogin = undefined;

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

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

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/components/Form/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var isDev = "development" === 'development';

var SecondaryPasswordLogin = exports.SecondaryPasswordLogin = function (_Component) {
  (0, _inherits3.default)(SecondaryPasswordLogin, _Component);

  function SecondaryPasswordLogin(props) {
    (0, _classCallCheck3.default)(this, SecondaryPasswordLogin);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SecondaryPasswordLogin.__proto__ || (0, _getPrototypeOf2.default)(SecondaryPasswordLogin)).call(this, props));

    _this.src = isDev ? _config2.default.dev.fileServerIP + '/secret-login.html' : _config2.default.prod.fileServerDomain + '/secret-login.html';
    _this.parentSrc = isDev ? 'http://localhost:' + _config2.default.cmsPort : _config2.default.prod.cmsDomain;

    _this.msgHandle = _this.msgHandle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SecondaryPasswordLogin, [{
    key: 'msgHandle',
    value: function msgHandle(e) {
      if (e.origin === _config2.default.dev.fileServerIP) {}
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('iframe', {
        ref: function ref(iframe) {
          return _this2.$iframe = iframe;
        },
        className: _index2.default['secondary-password-login-wrap'],
        src: this.src });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      var msg = {
        account: this.props.account,
        access_token: this.props.access_token,
        parentSrc: this.parentSrc
      };

      var src = this.src;

      this.$iframe.onload = function () {
        this.contentWindow.postMessage(msg, src);
      };

      window.addEventListener('message', this.msgHandle, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      window.removeEventListener('message', this.msgHandle, false);
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return SecondaryPasswordLogin;
}(_react.Component);

SecondaryPasswordLogin.defaultProps = {
  account: '',
  access_token: ''
};


if (true) {
  SecondaryPasswordLogin.propTypes = {
    account: _propTypes2.default.string.isRequired,
    access_token: _propTypes2.default.string.isRequired
  };
}

var ChatroomLogin = exports.ChatroomLogin = function (_Component2) {
  (0, _inherits3.default)(ChatroomLogin, _Component2);

  function ChatroomLogin(props) {
    (0, _classCallCheck3.default)(this, ChatroomLogin);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (ChatroomLogin.__proto__ || (0, _getPrototypeOf2.default)(ChatroomLogin)).call(this, props));

    _this3.toSrc = isDev ? 'http://localhost:3001/chatroom-login.html' : _config2.default.prod.fileServerDomain + '/chatroom-login.html';
    _this3.toDomain = isDev ? 'http://localhost:3001' : _config2.default.prod.fileServerDomain;
    return _this3;
  }

  (0, _createClass3.default)(ChatroomLogin, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement('iframe', {
        className: 'chatroom-wrap',
        ref: function ref(iframe) {
          return _this4.$iframe = iframe;
        },
        src: '/'
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      // === iframe + window.name: 在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name === //
      // === 1 实现: 当前页面下放个同域的iframe, iframe中将页面的数据以string类型存储在window.name, 然后改变src到不同域的页面, 读取window.name === //

      this.$iframe.contentWindow.name = (0, _stringify2.default)({
        csrf_token: this.props.csrf_token
      });

      this.$iframe.src = this.toSrc;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return ChatroomLogin;
}(_react.Component);

ChatroomLogin.defaultProps = {
  csrf_token: ''
};


ChatroomLogin.propTypes = {
  csrf_token: _propTypes2.default.string.required
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isDev, 'isDev', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Form/index.jsx');
  reactHotLoader.register(SecondaryPasswordLogin, 'SecondaryPasswordLogin', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Form/index.jsx');
  reactHotLoader.register(ChatroomLogin, 'ChatroomLogin', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Form/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/Chatroom/index.css":
/*!****************************************************!*\
  !*** ./client/Admin/containers/Chatroom/index.css ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/Admin/containers/Chatroom/index.jsx":
/*!****************************************************!*\
  !*** ./client/Admin/containers/Chatroom/index.jsx ***!
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

var _Form = __webpack_require__(/*! ../../components/Form */ "./client/Admin/components/Form/index.jsx");

__webpack_require__(/*! ./index.css */ "./client/Admin/containers/Chatroom/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var AdminChatroom = function (_Component) {
  (0, _inherits3.default)(AdminChatroom, _Component);

  function AdminChatroom(props) {
    (0, _classCallCheck3.default)(this, AdminChatroom);
    return (0, _possibleConstructorReturn3.default)(this, (AdminChatroom.__proto__ || (0, _getPrototypeOf2.default)(AdminChatroom)).call(this, props));
  }

  (0, _createClass3.default)(AdminChatroom, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'admin-chatroom-wrap admin-inner' },
        _react2.default.createElement(_Form.ChatroomLogin, null)
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return AdminChatroom;
}(_react.Component);

var _default = AdminChatroom;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AdminChatroom, 'AdminChatroom', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Chatroom/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Chatroom/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/json/stringify.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/json/stringify.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ })

}]);
//# sourceMappingURL=chatroom.js.map
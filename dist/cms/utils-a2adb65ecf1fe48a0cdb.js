(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils"],{

/***/ "./client/Admin/assets/font/iconfont.css":
/*!***********************************************!*\
  !*** ./client/Admin/assets/font/iconfont.css ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/Admin/assets/style/reset.css":
/*!*********************************************!*\
  !*** ./client/Admin/assets/style/reset.css ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/Admin/components/Popup/index.css":
/*!*************************************************!*\
  !*** ./client/Admin/components/Popup/index.css ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popup-wrap":"popup-wrap_1yA4f","popup-bg":"popup-bg_3w2e3","drag-area":"drag-area_1apOx","btn-close":"btn-close_2XVOD","popup-body":"popup-body_SWAx0","popup-open":"popup-open_2-ivW","popupOpen":"popupOpen_33txG","popup-close":"popup-close_3it2p","popupClose":"popupClose_e1jd9"};

/***/ }),

/***/ "./client/Admin/components/Popup/index.jsx":
/*!*************************************************!*\
  !*** ./client/Admin/components/Popup/index.jsx ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _dec, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Popup = __webpack_require__(/*! ../../redux/Popup */ "./client/Admin/redux/Popup.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/components/Popup/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === immutablejs:  === //
// === 1 优点: === //
// === 1.1 减少内存使用 === //
// === 1.2 并发安全 === //
// === 1.3 降低项目复杂度 === //
// === 1.4 便于比较复杂的数据结构, 定制 shouldComponentUpdate 方便 === //
// === 1.5 时间旅行功能 === //
// === 1.6 函数式编程 === //
// === 2 缺点: === //
// === 2.1 库的大小 === //
// === 2.2 对先有项目入侵太严重, 新项目可用 === //

var Popup = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.PopupReducer;
}, (0, _extends3.default)({}, _Popup.actions)), _dec(_class = function (_PureComponent) {
  (0, _inherits3.default)(Popup, _PureComponent);

  function Popup(props) {
    (0, _classCallCheck3.default)(this, Popup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).call(this, props));

    _this.mousedownHandle = _this.mousedownHandle.bind(_this);
    _this.mousemoveHandle = _this.mousemoveHandle.bind(_this);
    _this.mouseupHandle = _this.mouseupHandle.bind(_this);
    _this.closeHandle = _this.closeHandle.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Popup, [{
    key: 'drawBg',
    value: function drawBg() {

      var $canvas = this.$canvas;
      var canvasWidth = $canvas.width;
      var canvasHeight = $canvas.height;

      if ($canvas.getContext) {

        var ctx = $canvas.getContext('2d');

        ctx.fillStyle = 'rgba(0,0,0,.6)';

        // border
        ctx.beginPath();

        ctx.strokeStyle = 'rgb(44,170,42)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'square';

        ctx.moveTo(10, 1);
        ctx.lineTo(canvasWidth - 10, 1);
        ctx.lineTo(canvasWidth - 1, 10);
        ctx.lineTo(canvasWidth - 1, canvasHeight);
        ctx.lineTo(1, canvasHeight);
        ctx.lineTo(1, 10);
        ctx.closePath();
        ctx.stroke();

        // canvasModal's navBox
        ctx.beginPath();

        ctx.lineCap = 'square';

        ctx.moveTo(10, 5);
        ctx.lineTo(canvasWidth - 10, 5);
        ctx.lineTo(canvasWidth - 5, 10);
        ctx.lineTo(canvasWidth - 5, 30);
        ctx.lineTo(5, 30);
        ctx.lineTo(5, 10);
        ctx.lineTo(10, 5);

        ctx.moveTo(canvasWidth - 33, 5);
        ctx.lineTo(canvasWidth - 33, 30);

        ctx.closePath();
        ctx.fillStyle = '#004100';
        ctx.fill();
        ctx.stroke();
      }
    }

    /**
     * 主体内容接口
     */

  }, {
    key: 'createBody',
    value: function createBody() {}

    /**
     * 按下鼠标时记录鼠标位置与左上角的差值
     */

  }, {
    key: 'mousedownHandle',
    value: function mousedownHandle(e) {

      // 考虑到 svg 的 class 为对象
      if (e.target.className && e.target.className.indexOf('drag-area') > -1) {
        this.props.update_popup({
          dragging: true,
          diffX: e.clientX - this.$wrap.offsetLeft,
          diffY: e.clientY - this.$wrap.offsetTop
        });
      }
    }

    /**
     * 移动时需要减去按下时的差值
     */

  }, {
    key: 'mousemoveHandle',
    value: function mousemoveHandle(e) {

      if (this.props.dragging) {
        this.props.update_popup({
          // 当移动时，不再需要margin的居中，则需要补回这段距离
          left: e.clientX - this.state.diffX + 250 + 'px',
          top: e.clientY - this.state.diffY + 80 + 'px'
        });
      }
    }

    /**
     * 释放鼠标时需要改变状态
     */

  }, {
    key: 'mouseupHandle',
    value: function mouseupHandle() {

      this.props.update_popup({
        dragging: false
      });
    }

    /**
     * 关闭弹窗
     */

  }, {
    key: 'closeHandle',
    value: function closeHandle() {

      this.props.update_popup({
        isOpen: -1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var wrapStyle = {
        left: this.props.left,
        top: this.props.top,
        margin: '-80px 0 0 -250px'
      };

      return _react2.default.createElement(
        'div',
        {
          ref: function ref($wrap) {
            return _this2.$wrap = $wrap;
          },
          className: _index2.default['popup-wrap'] + ' ' + (this.props.isOpen === 'default' ? '' : _index2.default[this.props.isOpen === 1 ? 'popup-open' : 'popup-close']),
          style: wrapStyle
        },
        _react2.default.createElement(
          'div',
          { className: _index2.default['popup-bg'] },
          _react2.default.createElement(
            'a',
            { href: 'javascript:;', className: _index2.default['btn-close'], onClick: this.closeHandle },
            'X'
          ),
          _react2.default.createElement(
            'div',
            { className: _index2.default['drag-area'] },
            this.props.header
          ),
          _react2.default.createElement('canvas', { ref: function ref($canvas) {
              return _this2.$canvas = $canvas;
            }, className: _index2.default['canvas'], width: '500', height: '160' })
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default['popup-body'] },
          this.props.content
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.drawBg();

      document.addEventListener('mousedown', this.mousedownHandle, false);
      document.addEventListener('mousemove', this.mousemoveHandle, false);
      document.addEventListener('mouseup', this.mouseupHandle, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.props.update_popup({
        isOpen: 'default'
      });

      document.removeEventListener('mousedown', this.mousedownHandle, false);
      document.removeEventListener('mousemove', this.mousemoveHandle, false);
      document.removeEventListener('mouseup', this.mouseupHandle, false);
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Popup;
}(_react.PureComponent)) || _class);
Popup.defaultProps = {
  isOpen: 'default',
  header: '',
  content: '',
  question: '',
  yesText: '',
  noText: '',
  dragging: false,
  diffX: 0,
  diffY: 0,
  left: '50%',
  top: '50%'
};
exports.default = Popup;


if (_config2.default.ISDEV) {
  Popup.propTypes = {
    isOpen: _propTypes2.default.number,
    header: _propTypes2.default.string.isRequired,
    content: _propTypes2.default.string,
    question: _propTypes2.default.string,
    yesText: _propTypes2.default.string,
    noText: _propTypes2.default.string
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Popup, 'Popup', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Popup/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/Auth/index.css":
/*!************************************************!*\
  !*** ./client/Admin/containers/Auth/index.css ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sso-iframe":"sso-iframe_34Jcb","global-component-wrap":"global-component-wrap_1CbVO"};

/***/ }),

/***/ "./client/Admin/containers/Auth/index.jsx":
/*!************************************************!*\
  !*** ./client/Admin/containers/Auth/index.jsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

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

var _dec, _dec2, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Popup = __webpack_require__(/*! ../../components/Popup */ "./client/Admin/components/Popup/index.jsx");

var _Popup2 = _interopRequireDefault(_Popup);

var _history = __webpack_require__(/*! ../../router/history */ "./client/Admin/router/history.js");

var _history2 = _interopRequireDefault(_history);

var _axios = __webpack_require__(/*! ../../fetch/axios */ "./client/Admin/fetch/axios.js");

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _User = __webpack_require__(/*! ../../redux/User */ "./client/Admin/redux/User.js");

var _Iframe = __webpack_require__(/*! ../../redux/Iframe */ "./client/Admin/redux/Iframe.js");

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/containers/Auth/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var get_user = _User.actions.get_user;
var send_message = _Iframe.actions.send_message,
    update_loaded_status = _Iframe.actions.update_loaded_status;
var Auth = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.UserReducer;
}, { get_user: get_user }), _dec2 = (0, _reactRedux.connect)(function (state) {
  return state.IframeReducer;
}, { send_message: send_message, update_loaded_status: update_loaded_status }), _dec(_class = _dec2(_class = function (_PureComponent) {
  (0, _inherits3.default)(Auth, _PureComponent);

  function Auth(props) {
    (0, _classCallCheck3.default)(this, Auth);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Auth.__proto__ || (0, _getPrototypeOf2.default)(Auth)).call(this, props));

    _this.responseInterceptorsHandle = _this.responseInterceptorsHandle.bind(_this);
    _this.messageHandle = _this.messageHandle.bind(_this);
    _this.userInfoHandle = _this.userInfoHandle.bind(_this);
    _this.loadHandle = _this.loadHandle.bind(_this);

    return _this;
  }

  /**
   * 响应拦截处理
   */


  (0, _createClass3.default)(Auth, [{
    key: 'responseInterceptorsHandle',
    value: function responseInterceptorsHandle() {
      var _this2 = this;

      // 响应拦截器
      // 只进行一次
      if ((0, _axios.getRespnseInterceptorsInfo)()) {
        return;
      }

      _axios2.default.interceptors.response.use(function (res) {

        // blacklist
        var notToCheckList = ['/api/login'];

        // token过期
        if (res.status === 401 && !notToCheckList.some(function (item) {
          return item === res.config.url;
        })) {

          // 在sso认证中心删除 域下的localStorage 的 access_token
          _this2.props.send_message({
            messageType: 'logout',
            postFn: function postFn($iframe) {

              $iframe.contentWindow.postMessage({
                type: 'logout'
              }, $iframe.src);
            }
          });
        }

        // 更新token
        if (res.data && res.data.access_token) {
          window.localStorage.setItem('access_token', res.data.access_token);
        }

        // 若响应的状态码为4xx，则给予用户提示
        if (res.status >= 400 && res.status < 500) {
          return _promise2.default.reject(res.data);
        }

        (0, _axios.setResponseInterceptorsInfo)();
        return res.data;
      });
    }

    /**
     * message事件处理
     */

  }, {
    key: 'messageHandle',
    value: function messageHandle(e) {

      // origin白名单
      var whitelist = [_config2.default.SSO_DOMAIN];

      if (!whitelist.includes(e.origin)) {
        return;
      }

      switch (e.data.type) {

        case 'responseAccessToken':

          // 对应单点登出的情况: sso中没有access_token
          if (!e.data.access_token) {
            return;
          }

          window.localStorage.setItem('access_token', e.data.access_token);
          this.props.get_user();

          break;

        case 'logout':

          if (e.data.retCode !== 1) {
            return;
          }

          window.localStorage.removeItem('access_token');

          _history2.default.push('/');

          break;

      }
    }

    /**
     * 获取用户授权信息处理
     */

  }, {
    key: 'userInfoHandle',
    value: function userInfoHandle() {

      // 在首页
      if (_history2.default.location.pathname === '/') {
        // 已有用户授权信息
        this.props.id && _history2.default.push('/post');
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.responseInterceptorsHandle();
      this.userInfoHandle();
    }

    /**
     * iframe加载处理
     */

  }, {
    key: 'loadHandle',
    value: function loadHandle() {

      this.props.update_loaded_status({
        $iframe: this.$iframe,
        hasLoaded: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'global-component-wrap' },
        _react2.default.createElement('iframe', { ref: function ref($iframe) {
            return _this3.$iframe = $iframe;
          },
          src: _config2.default.SSO_DOMAIN + '?from=' + _config2.default.CMS_DOMAIN + '&noOwnIframe=true',
          frameBorder: '0',
          className: _index2.default['sso-iframe'],
          onLoad: this.loadHandle
        }),
        _react2.default.createElement(_Popup2.default, null)
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      // 接收消息
      window.addEventListener('message', this.messageHandle, false);

      // 若redux中没有用户信息(如刷新页面后)
      var access_token = window.localStorage.getItem('access_token');
      if (!this.props.id && access_token) {
        this.props.get_user();
        return;
      }

      this.props.send_message({
        messageType: 'getAccessToken',
        postFn: function postFn($iframe) {

          $iframe.contentWindow.postMessage({
            type: 'getAccessToken'
          }, $iframe.src);
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Auth;
}(_react.PureComponent)) || _class) || _class);
exports.default = Auth;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get_user, 'get_user', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Auth/index.jsx');
  reactHotLoader.register(send_message, 'send_message', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Auth/index.jsx');
  reactHotLoader.register(update_loaded_status, 'update_loaded_status', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Auth/index.jsx');
  reactHotLoader.register(Auth, 'Auth', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Auth/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/Home/index.css":
/*!************************************************!*\
  !*** ./client/Admin/containers/Home/index.css ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hackGreen":"#00F900","home-page":"home-page_2Z1dH","home-inner":"home-inner_Lp-Rj","title--h1":"title--h1_2ZWQQ","title--h2":"title--h2_1Nuub","link-wrap":"link-wrap_DHTuq","link":"link_kiEeY","link--info":"link--info_1W5lQ"};

/***/ }),

/***/ "./client/Admin/containers/Home/index.jsx":
/*!************************************************!*\
  !*** ./client/Admin/containers/Home/index.jsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/containers/Home/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Home = function (_PureComponent) {
  (0, _inherits3.default)(Home, _PureComponent);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _index2.default["home-page"] },
        _react2.default.createElement(
          'div',
          { className: _index2.default["home-inner"] },
          _react2.default.createElement(
            'h1',
            { className: _index2.default['title--h1'] },
            '\u5F20\u76CA\u94ED\u7684\u524D\u7AEF\u5C0F\u535A\u5BA2'
          ),
          _react2.default.createElement(
            'h2',
            { className: _index2.default['title--h2'] },
            '\u5185\u5BB9\u7BA1\u7406\u7CFB\u7EDF'
          ),
          _react2.default.createElement(
            'p',
            { className: _index2.default['link-wrap'] },
            _react2.default.createElement(
              'a',
              { href: _config2.default.SSO_DOMAIN + '?from=' + _config2.default.CMS_DOMAIN, className: _index2.default['link'] },
              '>> \u767B\u5F55'
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
  return Home;
}(_react.PureComponent);

exports.default = Home;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, 'Home', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Home/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/NoMatch/index.css":
/*!***************************************************!*\
  !*** ./client/Admin/containers/NoMatch/index.css ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/Admin/containers/NoMatch/index.jsx":
/*!***************************************************!*\
  !*** ./client/Admin/containers/NoMatch/index.jsx ***!
  \***************************************************/
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

__webpack_require__(/*! ./index.css */ "./client/Admin/containers/NoMatch/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var NoMatch = function (_Component) {
  (0, _inherits3.default)(NoMatch, _Component);

  function NoMatch(props) {
    (0, _classCallCheck3.default)(this, NoMatch);
    return (0, _possibleConstructorReturn3.default)(this, (NoMatch.__proto__ || (0, _getPrototypeOf2.default)(NoMatch)).call(this, props));
  }

  (0, _createClass3.default)(NoMatch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'NoMatch-page' },
        '404'
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return NoMatch;
}(_react.Component);

var _default = NoMatch;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NoMatch, 'NoMatch', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/NoMatch/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/NoMatch/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/fetch/axios.js":
/*!*************************************!*\
  !*** ./client/Admin/fetch/axios.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.patch = exports.del = exports.post = exports.get = undefined;
exports.setResponseInterceptorsInfo = setResponseInterceptorsInfo;
exports.getRespnseInterceptorsInfo = getRespnseInterceptorsInfo;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _config = __webpack_require__(/*! ../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _Other = __webpack_require__(/*! ../redux/Other */ "./client/Admin/redux/Other.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();
// import store from '../redux/store'


// === 状态码分类: === //
/*

1xx: 信息，服务器收到请求，需要请求者继续执行操作
2xx: 成功，操作被成功接收并处理
3xx: 重定向，需要进一步的操作以完成请求
4xx: 客户端错误，请求包含语法错误或无法完成请求
5xx: 服务器错误，服务器在处理请求的过程中发生了错误

*/

// 必须要用实例，因为存在 index 和 cms 项目，开发环境下 拦截器处 挂载在 axios 静态属性上 会冲突
var axios = _axios2.default.create();
var _default = axios;
exports.default = _default;

// 请求配置

var config = {

  transformRequest: [function (data) {
    var ret = '';
    for (var item in data) {
      ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&';
    }
    return ret;
  }],

  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/hellojm.cn.v1+json'
  },

  // 5xx不显示给用户看
  validateStatus: function validateStatus(status) {
    return status < 500;
  },

  timeout: 10000,
  responseType: 'json'

  // 拦截器
};axios.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('access_token');
  return config;
});

// 是否已设置响应拦截器, 只能设置一次, 不然会叠加
var isSetInterceptors = false;
function setResponseInterceptorsInfo() {
  isSetInterceptors = true;
}
function getRespnseInterceptorsInfo() {
  return isSetInterceptors;
}

// http 方法
var get = exports.get = function get(url) {
  return axios.get(url, config);
};
var post = exports.post = function post(url, data) {
  return axios.post(url, data, config);
};
var del = exports.del = function del(url) {
  return axios.delete(url, config);
};
var patch = exports.patch = function patch(url, data) {
  return axios.patch(url, data, config);
};

// api 配置

var domainIndex = '';

var api = exports.api = {

  // article
  get_article_latestlist: function get_article_latestlist(page_num, per_page) {
    return get(domainIndex + '/api/article/latestlist?page_num=' + page_num + '&per_page=' + per_page);
  },
  get_article_bestlist: function get_article_bestlist(page_num, per_page) {
    return get(domainIndex + '/api/article/bestlist?page_num=' + page_num + '&per_page=' + per_page);
  },
  post_article: function post_article(data) {
    return post(domainIndex + '/api/article', data);
  },
  get_article: function get_article(id) {
    return get(domainIndex + '/api/article?id=' + id);
  },
  get_article_linkList: function get_article_linkList() {
    return get(domainIndex + '/api/article/linklist');
  },
  get_article_alllist: function get_article_alllist() {
    return get(domainIndex + '/api/article/alllist');
  },
  get_searchlist: function get_searchlist(title, page_num, per_page) {
    return get(domainIndex + '/api/get_search_list?title=' + title + '&page_num=' + page_num + '&per_page=' + per_page);
  },

  // category
  get_category: function get_category() {
    return get(domainIndex + '/api/category');
  },
  delete_category: function delete_category(id) {
    return del(domainIndex + '/api/category?id=' + id);
  },
  update_category: function update_category(data) {
    return patch(domainIndex + '/api/category', data);
  },
  add_category: function add_category(data) {
    return post(domainIndex + '/api/category', data);
  },

  // works
  get_works: function get_works() {
    return get(_config2.default.FILE_SERVER_DOMAIN + '/api/works');
  },

  // user
  get_user: function get_user(isDetail) {
    return get(domainIndex + '/api/user' + (isDetail ? '?isDetail=' + isDetail : ''));
  },
  update_user: function update_user(data) {
    return patch(domainIndex + '/api/user', data);
  },
  logout: function logout() {
    return patch(domainIndex + '/api/logout');
  },

  // file server
  getAddressApi: function getAddressApi() {
    return _config2.default.FILE_SERVER_DOMAIN + '/address?cb=jp_address.getAddress';
  },
  getDictionary: function getDictionary() {
    return _config2.default.FILE_SERVER_DOMAIN + '/dictionary?cb=jp_dictionary.getDictionary';
  },
  getStreetApi: function getStreetApi(id) {
    return _config2.default.FILE_SERVER_DOMAIN + '/street?id=' + id + '&&cb=jp_address.getStreet';
  },
  uploadImgApi: function uploadImgApi() {
    return _config2.default.FILE_SERVER_DOMAIN + '/img';
  },

  // other
  getIp: function getIp() {
    return get(domainIndex + '/api/ip');
  },
  getIndexStorage: function getIndexStorage() {
    return get(domainIndex + '/api/ndex/storage');
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(axios, 'axios', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(config, 'config', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(isSetInterceptors, 'isSetInterceptors', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(setResponseInterceptorsInfo, 'setResponseInterceptorsInfo', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(getRespnseInterceptorsInfo, 'getRespnseInterceptorsInfo', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(get, 'get', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(post, 'post', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(del, 'del', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(patch, 'patch', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(domainIndex, 'domainIndex', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(api, 'api', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/axios.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/index.jsx":
/*!********************************!*\
  !*** ./client/Admin/index.jsx ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");

var _index = __webpack_require__(/*! ./router/index */ "./client/Admin/router/index.jsx");

var _store = __webpack_require__(/*! ./redux/store */ "./client/Admin/redux/store.js");

var _store2 = _interopRequireDefault(_store);

var _config = __webpack_require__(/*! ../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./assets/style/reset.css */ "./client/Admin/assets/style/reset.css");

__webpack_require__(/*! ./assets/font/iconfont.css */ "./client/Admin/assets/font/iconfont.css");

__webpack_require__(/*! ./router/index.css */ "./client/Admin/router/index.css");

__webpack_require__(/*! ../../favicon.ico */ "./favicon.ico");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var render = function render(Component) {
  _reactDom2.default.render(_config2.default.ISDEV ? _react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: _store2.default },
      _react2.default.createElement(Component, null)
    )
  ) : _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(Component, null)
  ), document.getElementById('root'));
};

render(_index.CMSRouteMap);

if (true) {
  module.hot.accept(/*! ./router */ "./client/Admin/router/index.jsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {
    render(_index.CMSRouteMap);
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, 'render', '/Users/garven/codetest/realProject/myblog/client/Admin/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/Adress.js":
/*!**************************************!*\
  !*** ./client/Admin/redux/Adress.js ***!
  \**************************************/
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

exports.reducer = reducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  provinceList: [],
  province: '',
  cityList: [],
  city: '',
  districtList: [],
  district: '',
  streetList: [],
  street: ''
};

var actionTypes = exports.actionTypes = {
  UPDATE_ADDRESS: 'UPDATE_ADDRESS'
};

var actions = exports.actions = {

  update_address: function update_address(params) {
    return {
      type: actionTypes.UPDATE_ADDRESS,
      params: params
    };
  }

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.UPDATE_ADDRESS:

      return (0, _extends3.default)({}, state, action.params);

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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Adress.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Adress.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Adress.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Adress.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/Article.js":
/*!***************************************!*\
  !*** ./client/Admin/redux/Article.js ***!
  \***************************************/
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

exports.reducer = reducer;

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/Admin/fetch/axios.js");

var _Popup = __webpack_require__(/*! ./Popup */ "./client/Admin/redux/Popup.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === const: 对于简单类型值就是比那辆指向的那个内存地址, 因此等同于常量; 对于复合类型, 变量指向的内存地址保存的是一个指向实际数据的指针, const只保证这个指针时固定的, 即 const obj = {}; obj = {}l 会报错, 至于指向的数据结构是否可变不能控制 === //
// === Object.freeze(): 冻结一个对象, 如 var obj = Object.freeze({bar: {}}) 后, obj对象无法添加新属性等操作但 obj.bar 可以 === //
var initialState = {
  title: '',
  summary: '',
  content: '',
  pubtime: '',
  category_id: 0,
  prev_id: 0,
  next_id: 0,
  cover_url: '',
  read_num: 0
};

var actionTypes = exports.actionTypes = {
  GET_ARTICLE: 'GET_ARTICLE',
  RESPONSE_ARTICLE: 'RESPONSE_ARTICLE',
  SAVE_ARTICLE: 'SAVE_ARTICLE',
  UPDATE_TITLE: 'UPDATE_TITLE',
  UPDATE_SUMMARY: 'UPDATE_SUMMARY',
  UPDATE_CONTENT: 'UPDATE_CONTENT',
  UPDATE_PUBTIME: 'UPDATE_PUBTIME',
  UPDATE_ARTICLETYPEID: 'UPDATE_ARTICLETYPEID',
  UPDATE_PREVID: 'UPDATE_PREVID',
  UPDATE_NEXTID: 'UPDATE_NEXTID',
  UPDATE_COVER: 'UPDATE_COVER'
};

var actions = exports.actions = {
  get_article: function get_article(id) {
    return function (dispatch) {
      return _axios.api.get_article(id).then(function (res) {

        var data = res.data;

        dispatch({
          type: actionTypes.RESPONSE_ARTICLE,
          title: data.title,
          pubtime: data.pubtime,
          content: data.content,
          summary: data.summary,
          read_num: data.read_num,
          prev_id: data.prev_id,
          next_id: data.next_id
        });
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  save_article: function save_article(data) {
    return function (dispatch) {
      return _axios.api.post_article(data).then(function (res) {

        alert('成功！');
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  update_title: function update_title(title) {
    return {
      type: actionTypes.UPDATE_TITLE,
      title: title
    };
  },

  update_summary: function update_summary(summary) {
    return {
      type: actionTypes.UPDATE_SUMMARY,
      summary: summary
    };
  },

  update_content: function update_content(content) {
    return {
      type: actionTypes.UPDATE_CONTENT,
      content: content
    };
  },

  update_pubtime: function update_pubtime(pubtime) {
    return {
      type: actionTypes.UPDATE_PUBTIME,
      pubtime: pubtime
    };
  },

  update_article_type_id: function update_article_type_id(category_id) {
    return {
      type: actionTypes.UPDATE_ARTICLETYPEID,
      category_id: category_id
    };
  },

  update_prev_id: function update_prev_id(prev_id) {
    return {
      type: actionTypes.UPDATE_PREVID,
      prev_id: prev_id
    };
  },

  update_next_id: function update_next_id(next_id) {
    return {
      type: actionTypes.UPDATE_NEXTID,
      next_id: next_id
    };
  },

  update_cover_url: function update_cover_url(cover_url) {
    return {
      type: actionTypes.UPDATE_COVER,
      cover_url: cover_url
    };
  }
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.RESPONSE_ARTICLE:
      return (0, _extends3.default)({}, state, {
        title: action.title,
        summary: action.summary,
        content: action.content,
        pubtime: action.pubtime,
        category_id: action.category_id,
        prev_id: action.prev_id,
        next_id: action.next_id,
        cover_url: action.cover_url
      });
    case actionTypes.UPDATE_TITLE:
      return (0, _extends3.default)({}, state, {
        title: action.title
      });
    case actionTypes.UPDATE_SUMMARY:
      return (0, _extends3.default)({}, state, {
        summary: action.summary
      });
    case actionTypes.UPDATE_CONTENT:
      return (0, _extends3.default)({}, state, {
        content: action.content
      });
    case actionTypes.UPDATE_PUBTIME:
      return (0, _extends3.default)({}, state, {
        pubtime: action.pubtime
      });
    case actionTypes.UPDATE_ARTICLETYPEID:
      return (0, _extends3.default)({}, state, {
        category_id: action.category_id
      });
    case actionTypes.UPDATE_PREVID:
      return (0, _extends3.default)({}, state, {
        prev_id: action.prev_id
      });
    case actionTypes.UPDATE_NEXTID:
      return (0, _extends3.default)({}, state, {
        next_id: action.next_id
      });
    case actionTypes.SAVE_ARTICLE:
      return (0, _extends3.default)({}, state, {
        data: action.data
      });
    case actionTypes.UPDATE_COVER:
      return (0, _extends3.default)({}, state, {
        cover_url: action.cover_url
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Article.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Article.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Article.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Article.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/ArticleCategory.js":
/*!***********************************************!*\
  !*** ./client/Admin/redux/ArticleCategory.js ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.actionTypes = undefined;

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.reducer = reducer;

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/Admin/fetch/axios.js");

var _Article = __webpack_require__(/*! ./Article */ "./client/Admin/redux/Article.js");

var _store = __webpack_require__(/*! ./store */ "./client/Admin/redux/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  data: [],
  text: ''
};

var actionTypes = exports.actionTypes = {
  RESPONSE_CATEGORY_LIST: 'RESPONSE_CATEGORY_LIST',
  UPDATE_TEXT: 'UPDATE_TEXT'
};

var actions = exports.actions = {

  add_category: function add_category(data) {
    return function (dispatch) {
      return _axios.api.add_category(data).then(function (res) {

        var newData = {
          id: res.id,
          name: data.name,
          count: 0
        };

        var oldDataList = _store2.default.getState().ArticleCategoryReducer.data.concat();
        oldDataList.push(newData);

        dispatch({
          type: actionTypes.RESPONSE_CATEGORY_LIST,
          data: oldDataList
        });
      }).catch(function (err) {
        console.error(err);
      });
    };
  },

  get_category_list: function get_category_list() {
    return function (dispatch) {
      return _axios.api.get_category().then(function (res) {

        var data = res.data;

        dispatch({
          type: actionTypes.RESPONSE_CATEGORY_LIST,
          data: data
        });
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  delete_category: function delete_category(id) {
    return function (dispatch) {
      return _axios.api.delete_category(id).then(function (res) {

        var oldDataList = _store2.default.getState().ArticleCategoryReducer.data.concat();

        for (var l = oldDataList.length; l--;) {
          if (oldDataList[l].id === id) {
            oldDataList.splice(l, 1);
          }
        }

        dispatch({
          type: actionTypes.RESPONSE_CATEGORY_LIST,
          data: oldDataList
        });
      }).catch(function (err) {
        console.error(err);
      });
    };
  },

  update_category: function update_category() {
    return function (dispatch) {};
  },

  update_text: function update_text(text) {
    return {
      type: actionTypes.UPDATE_TEXT,
      text: text
    };
  }

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.RESPONSE_CATEGORY_LIST:
      return (0, _extends3.default)({}, state, {
        data: [].concat((0, _toConsumableArray3.default)(action.data))
      });
    case actionTypes.UPDATE_TEXT:
      return (0, _extends3.default)({}, state, {
        text: action.text
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleCategory.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleCategory.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleCategory.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleCategory.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/ArticleLinkList.js":
/*!***********************************************!*\
  !*** ./client/Admin/redux/ArticleLinkList.js ***!
  \***********************************************/
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

exports.reducer = reducer;

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/Admin/fetch/axios.js");

var _Article = __webpack_require__(/*! ./Article */ "./client/Admin/redux/Article.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  data: []
};

var actionTypes = exports.actionTypes = {
  GET_ARTICLE_LINK_LIST: 'GET_ARTICLE_LINK_LIST',
  RESPONSE_ARTICLE_LINK_LIST: 'RESPONSE_ARTICLE_LINK_LIST'
};

var actions = exports.actions = {

  get_article_link_list: function get_article_link_list() {

    return function (dispatch) {

      _axios.api.get_article_linkList().then(function (res) {

        var data = res.data;

        dispatch({
          type: actionTypes.RESPONSE_ARTICLE_LINK_LIST,
          data: data
        });
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  }
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.RESPONSE_ARTICLE_LINK_LIST:
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleLinkList.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleLinkList.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleLinkList.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleLinkList.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/ArticleList.js":
/*!*******************************************!*\
  !*** ./client/Admin/redux/ArticleList.js ***!
  \*******************************************/
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

exports.latestReducer = latestReducer;
exports.bestReducer = bestReducer;
exports.searchReducer = searchReducer;
exports.allReducer = allReducer;

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/Admin/fetch/axios.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialStateForLatest = {
  data: [],
  page_num: 1,
  per_page: 10,
  total_count: 10,
  is_end_page: false
};

var initialStateForBest = {
  data: [],
  page_num: 1,
  per_page: 10,
  total_count: 10,
  is_end_page: false
};

var initialStateForSearch = {
  data: [],
  page_num: 1,
  per_page: 10,
  total_count: 10,
  is_end_page: false
};

var initialStateForAll = {
  data: []
};

var actionTypes = exports.actionTypes = {
  GET_LATEST_LIST: 'GET_LATEST_LIST',
  RESPONSE_LATEST_LIST: 'RESPONSE_LATEST_LIST',
  GET_BEST_LIST: 'GET_BEST_LIST',
  RESPONSE_BEST_LIST: 'RESPONSE_BEST_LIST',
  GET_SEARCH_LIST: 'GET_SEARCH_LIST',
  RESPONSE_SEARCH_LIST: 'RESPONSE_SEARCH_LIST',
  GET_All_LIST: 'GET_All_LIST',
  RESPONSE_All_LIST: 'RESPONSE_All_LIST',
  SORT_ALL_LIST: 'SORT_ALL_LIST'
};

var actions = exports.actions = {

  get_latest_list: function get_latest_list(page_num, per_page) {
    return function (dispatch) {
      return _axios.api.get_article_latestlist(page_num, per_page).then(function (res) {
        return dispatch({
          type: actionTypes.RESPONSE_LATEST_LIST,
          data: res.data,
          page_num: res.page_num,
          per_page: res.per_page,
          total_count: res.total_count,
          is_end_page: res.is_end_page
        });
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  get_best_list: function get_best_list(page_num, per_page) {
    return function (dispatch) {
      return _axios.api.get_article_bestlist(page_num, per_page).then(function (res) {
        return dispatch({
          type: actionTypes.RESPONSE_BEST_LIST,
          data: res.data,
          page_num: res.page_num,
          per_page: res.per_page,
          total_count: res.total_count,
          is_end_page: res.is_end_page
        });
      }).catch(function (err) {
        console.error(err);
      });
    };
  },

  get_search_list: function get_search_list(title, page_num, per_page) {
    return function (dispatch) {
      return _axios.api.get_article_linkList(title, page_num, per_page).then(function (res) {
        return dispatch({
          type: actionTypes.RESPONSE_SEARCH_LIST,
          data: res.data,
          page_num: res.page_num,
          per_page: res.per_page,
          total_count: res.total_count,
          is_end_page: res.is_end_page
        });
      }).catch(function (err) {
        console.error(err);
      });
    };
  },

  get_all_list: function get_all_list() {
    return function (diapatch) {
      return _axios.api.get_article_alllist().then(function (res) {
        return diapatch({
          type: actionTypes.RESPONSE_All_LIST,
          data: res.data
        });
      }).catch(function (err) {
        console.error(err);
      });
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
        page_num: action.page_num,
        per_page: action.per_page,
        total_count: action.total_count,
        is_end_page: action.is_end_page
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
        page_num: action.page_num,
        per_page: action.per_page,
        total_count: action.total_count,
        is_end_page: action.is_end_page
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
        page_num: action.page_num,
        per_page: action.per_page,
        total_count: action.total_count,
        is_end_page: action.is_end_page
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

  reactHotLoader.register(initialStateForLatest, 'initialStateForLatest', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  reactHotLoader.register(initialStateForBest, 'initialStateForBest', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  reactHotLoader.register(initialStateForSearch, 'initialStateForSearch', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  reactHotLoader.register(initialStateForAll, 'initialStateForAll', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  reactHotLoader.register(latestReducer, 'latestReducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  reactHotLoader.register(bestReducer, 'bestReducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  reactHotLoader.register(searchReducer, 'searchReducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  reactHotLoader.register(allReducer, 'allReducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/ArticleList.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/Iframe.js":
/*!**************************************!*\
  !*** ./client/Admin/redux/Iframe.js ***!
  \**************************************/
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

exports.reducer = reducer;

var _User = __webpack_require__(/*! ./User */ "./client/Admin/redux/User.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  $iframe: null,
  hasLoaded: false,
  messageType: '',
  postFn: []
};

var actionTypes = exports.actionTypes = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  UPDATE_IFRAME_STATUS: 'UPDATE_IFRAME_STATUS'
};

var actions = exports.actions = {

  /**
   * 发送信息
   */
  send_message: function send_message(_ref) {
    var messageType = _ref.messageType,
        postFn = _ref.postFn;
    return function (dispatch) {

      if (messageType === 'logout') {
        dispatch({
          type: _User.actionTypes.RESET_USER_INFO
        });
      }

      dispatch({
        type: actionTypes.SEND_MESSAGE,
        messageType: messageType,
        postFn: postFn
      });
    };
  },

  /**
   * 更新iframe加载状态
   */
  update_loaded_status: function update_loaded_status(_ref2) {
    var $iframe = _ref2.$iframe,
        hasLoaded = _ref2.hasLoaded;
    return {
      type: actionTypes.UPDATE_IFRAME_STATUS,
      $iframe: $iframe,
      hasLoaded: hasLoaded
    };
  }

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  var postFn = state.postFn;

  switch (action.type) {

    // 当 hasLoaded 还为 false 时, 证明还未加载完成, 此时将 函数 放进postFn数组, 等到 hasLoaded 为true时 自动执行; 当为 true 时, 执行执行
    case actionTypes.SEND_MESSAGE:

      if (!state.hasLoaded) {

        return (0, _extends3.default)({}, state, {
          messageType: action.messageType,
          postFn: state.postFn.concat(action.postFn)
        });
      }

      // 执行操作
      action.postFn(state.$iframe);

      return (0, _extends3.default)({}, state, {
        messageType: action.messageType

        // 当 postFn 中有函数时, 加载完后就立马执行
      });case actionTypes.UPDATE_IFRAME_STATUS:

      if (postFn.length > 0) {
        postFn.forEach(function (item) {
          item(action.$iframe);
        });

        return (0, _extends3.default)({}, state, {
          $iframe: action.$iframe,
          hasLoaded: action.hasLoaded,
          postFn: []
        });
      }

      return (0, _extends3.default)({}, state, {
        $iframe: action.$iframe,
        hasLoaded: action.hasLoaded
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Iframe.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Iframe.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Iframe.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Iframe.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/Other.js":
/*!*************************************!*\
  !*** ./client/Admin/redux/Other.js ***!
  \*************************************/
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

exports.reducer = reducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  // 0 - 正常； 1 - 无权限 ； 2 - 过期
  tipsType: 0
};

var actionTypes = exports.actionTypes = {
  UPDATE_TIPSTYPE: 'UPDATE_TIPSTYPE'
};

var actions = exports.actions = {

  update_tipstype: function update_tipstype(tipsType) {
    return {
      type: actionTypes.UPDATE_TIPSTYPE,
      tipsType: tipsType
    };
  }

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.UPDATE_TIPSTYPE:
      return (0, _extends3.default)({}, state, {
        tipsType: action
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Other.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Other.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Other.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Other.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/Popup.js":
/*!*************************************!*\
  !*** ./client/Admin/redux/Popup.js ***!
  \*************************************/
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

exports.reducer = reducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === redux：可预测的状态容器 === //
// === 1 React 与 Redux 关系：若只用React的props和state来实现数据管理，当项目很大的时候数据传递会很麻烦，而redux将数据从react中脱离出来，redux就是一个数据管理容器，而react只负责view层 === //
// === 2 运作流程: === //
/*

  1 在react app的最外层套一个 由 react-redux 提供的 Provider组件，接收 store 作为整个应用的数据容器
  2 store 由 redux 提供的 createStore() 生成
  3 createStore() 接受 三个参数: rootReducer, preloadedState, enhancer
  3.1 rootReducer 由 redux 的 combineReducers() 生成, combineReducers() 传入的是一个对象，由各个 reducer 组成
  3.2 preloadedState 是 一个初始化的state，为 空对象 或者 一个预定好的state(当使用ssr方案时由服务器端提供, 以达到数据状态同步)
  3.3 enhancer 由 redux 的 compose() 生成，主要是 传入中间件 来加强reducer
  4 每个组件的数据状态 由 一个state 来管理, preloadState 与 state 的关系为包含, 可以把整个store想象成一棵树, 树的节点就是state, 而每个需要有数据管理的组件都对应着一个state
  4.1 一般会初始化state, 如命名为 initialState, 提供默认值
  4.2 初始化一个react组件的时候, 需要用 react-redux 提供的 connect() 将 state 和 dispatch 绑定到 组件的 props 上, 接收的两个参数是函数，为 mapStateToProps 和 mapDispatchToProps，意味着这样才能在react组件中 调用或者访问 store 中对应的state中的数据
  4.3 bindActionsCreators() 只是一个封装，实质上还是会 dispatch(action)
  4.4 dispatch(action) 是从 react组件中 改变state的唯一方法，派发 action后，store收到并给出一个新的 state，state的计算过程就叫 reducer, 所以reducer的第一个参数是 旧的state，第二个参数是 action，即在旧的state上做一个action产生新的state
  4.5 state改变后, store就会调用监听函数 subscribe(listener), listener中会 重新渲染react

*/

// === 1 运作流程: === //
/*
      trigger           send to           Update           contain         defines
  UI ---------> action --------> Reducer ---------> Store --------> State --------
  ^                                                                              |
  |                                                                              v
   ------------------------------------------------------------------------------

*/
// === 3 三大原则： === //
// === 3.1 单一数据源, 整个应用的状态都保存在一个对象(store)中 === //
// === 3.2 状态只读 === //
// === 3.3 状态修改均有纯函数完成 === //

var initialState = {
  // -1 - 关
  // 'default' - 默认
  // 1 - 开
  isOpen: 'default',
  header: '',
  content: '',
  question: '',
  yesText: '',
  noText: '',
  notMoveYet: '',
  dragging: false,
  diffX: 0,
  diffY: 0,
  left: '50%',
  top: '50%'
};

var actionTypes = exports.actionTypes = {
  UPDATE_POPUP: 'UPDATE_POPUP'
};

var actions = exports.actions = {
  update_popup: function update_popup(ops) {
    return (0, _extends3.default)({}, ops, {
      type: actionTypes.UPDATE_POPUP
    });
  }

  // === 纯函数: 指函数内外间无关联, 函数内只依赖参数, 相同的输入永远产生相同的输出 === //
  // === 1 reducer设为纯函数的好处: 同样的state必定得到同样的view, reducer内部不能改变state，只能返回全新的state === //

};function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.UPDATE_POPUP:
      return (0, _extends3.default)({}, state, {
        isOpen: action.isOpen || state.isOpen,
        notMoveYet: action.notMoveYet || state.notMoveYet,
        header: action.header || state.header,
        content: action.content || state.content,
        question: action.question || state.question,
        yesText: action.yesText || state.yesText,
        noText: action.noText || state.noText
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Popup.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Popup.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Popup.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/Popup.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/User.js":
/*!************************************!*\
  !*** ./client/Admin/redux/User.js ***!
  \************************************/
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

exports.reducer = reducer;

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/Admin/fetch/axios.js");

var _history = __webpack_require__(/*! ../router/history */ "./client/Admin/router/history.js");

var _history2 = _interopRequireDefault(_history);

var _Iframe = __webpack_require__(/*! ./Iframe */ "./client/Admin/redux/Iframe.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  id: 0,
  account: '',
  resume_url: '',
  name: '',
  email: '',
  github_url: '',
  avatar_url: '',
  role: 2,
  address: '',
  wechat: '',
  phone: '',
  new_password: '',
  secondary_password: ''

  // === actionTypes中不可用Symbol()的坑: 本来是适合用 Symbol() , 但是若用了 Symbol()之后 reduxTools 中会显示 <UNDEFINED> 而无法方便可看出是派发了哪一个 action === //
};var actionTypes = exports.actionTypes = {
  GET_USER: 'GET_USER',
  UPDATE_USER: 'UPDATE_USER',
  CHANGE_INFO: 'CHANGE_INFO',
  // GET_USER: Symbol()
  RESET_USER_INFO: 'RESET_USER_INFO'
};

var actions = exports.actions = {

  get_user: function get_user(isDetail) {
    return function (dispatch) {
      return _axios.api.get_user(isDetail).then(function (res) {

        // 更新用户信息
        dispatch((0, _extends3.default)({}, res.data, {
          type: actionTypes.GET_USER
        }));

        // 在首页请求时, 成功后需要跳转到 /post
        if (_history2.default.location.pathname === '/') {
          _history2.default.push('/post');
        }
      }).catch(function (err) {
        console.error(err);
      });
    };
  },

  reset_user: function reset_user() {
    return {
      type: actionTypes.RESET_USER_INFO
    };
  },

  logout: function logout() {
    return function (dispatch) {
      return _axios.api.logout().then(function (res) {

        // 重置 user state
        dispatch({
          type: actionTypes.RESET_USER_INFO
        });

        // 在sso认证中心删除 域下的localStorage 的 access_token
        dispatch({
          type: _Iframe.actionTypes.SEND_MESSAGE,
          messageType: 'logout',
          postFn: function postFn($iframe) {

            $iframe.contentWindow.postMessage({
              type: 'logout'
            }, $iframe.src);
          }
        });
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  change_info: function change_info(data) {
    return (0, _extends3.default)({}, data, {
      type: actionTypes.CHANGE_INFO
    });
  },

  update_user: function update_user(data) {
    return function (dispatch) {
      return _axios.api.update_user(data).then(function (res) {
        return dispatch((0, _extends3.default)({}, data, {
          type: actionTypes.UPDATE_USER
        }));
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  }

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.GET_USER:
    case actionTypes.UPDATE_USER:
    case actionTypes.CHANGE_INFO:
      return (0, _extends3.default)({}, state, action);

    case actionTypes.RESET_USER_INFO:
      return (0, _extends3.default)({}, state, {
        name: '',
        email: '',
        github_url: '',
        avatar_url: '',
        role: 2
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/User.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/User.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/User.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/User.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/index.js":
/*!*************************************!*\
  !*** ./client/Admin/redux/index.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _ArticleList = __webpack_require__(/*! ./ArticleList */ "./client/Admin/redux/ArticleList.js");

var _ArticleCategory = __webpack_require__(/*! ./ArticleCategory */ "./client/Admin/redux/ArticleCategory.js");

var _Article = __webpack_require__(/*! ./Article */ "./client/Admin/redux/Article.js");

var _ArticleLinkList = __webpack_require__(/*! ./ArticleLinkList */ "./client/Admin/redux/ArticleLinkList.js");

var _User = __webpack_require__(/*! ./User */ "./client/Admin/redux/User.js");

var _Popup = __webpack_require__(/*! ./Popup */ "./client/Admin/redux/Popup.js");

var _Iframe = __webpack_require__(/*! ./Iframe */ "./client/Admin/redux/Iframe.js");

var _Adress = __webpack_require__(/*! ./Adress */ "./client/Admin/redux/Adress.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = (0, _redux.combineReducers)({
  searchReducer: _ArticleList.searchReducer,
  latestReducer: _ArticleList.latestReducer,
  bestReducer: _ArticleList.bestReducer,
  allReducer: _ArticleList.allReducer,
  ArticleCategoryReducer: _ArticleCategory.reducer,
  ArticleReducer: _Article.reducer,
  ArticleLinkListReducer: _ArticleLinkList.reducer,
  UserReducer: _User.reducer,
  PopupReducer: _Popup.reducer,
  IframeReducer: _Iframe.reducer,
  AddressReducer: _Adress.reducer
});

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/redux/store.js":
/*!*************************************!*\
  !*** ./client/Admin/redux/store.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(/*! ./index */ "./client/Admin/redux/index.js");

var _index2 = _interopRequireDefault(_index);

var _config = __webpack_require__(/*! ../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var IS_CLIENT_ENV = typeof window !== 'undefined';

var middlewares = [_reduxThunk2.default];

// === redux调试(开发环境): 可方便实时地观察到redux中的数据变化 === //
// === 1 安装 chrome 插件: redux Devtools === //
// === 2 在 compose 中传入: window.devToolsExtension() === //
// === 3 chrome控制台中有redux栏, 即可调试 === //

var storeEnhancers = _config2.default.ISDEV && IS_CLIENT_ENV ? (0, _redux.compose)( // 开发环境 + 客户端
_redux.applyMiddleware.apply(undefined, middlewares), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}) : (0, _redux.compose)( // 开发环境 + 后端 || 生产环境
_redux.applyMiddleware.apply(undefined, middlewares));

function configureStore() {
  var initialStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _redux.createStore)(_index2.default, initialStore, storeEnhancers);
}

// let store = IS_CLIENT_ENV ? configureStore({}) : {}
var store = configureStore({});

/**
 * 配置store
 * @param {Object = {}} initialStore 初始store
 * @return {Object}
 */
var _default = store;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IS_CLIENT_ENV, 'IS_CLIENT_ENV', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/store.js');
  reactHotLoader.register(middlewares, 'middlewares', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/store.js');
  reactHotLoader.register(storeEnhancers, 'storeEnhancers', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/store.js');
  reactHotLoader.register(configureStore, 'configureStore', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/store.js');
  reactHotLoader.register(store, 'store', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/store.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/redux/store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/router/asyncLoad.js":
/*!******************************************!*\
  !*** ./client/Admin/router/asyncLoad.js ***!
  \******************************************/
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

exports.default = getAsyncComponent;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// import hoc from '../components/TipsBar'

// === 高阶组件: 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件 === //
// === 1 注意: === //
// === 1.1 不要再render函数中使用高阶组件 === //
// === 1.2 必须将静态方法做拷贝 === //
// === 1.3 Refs属性不能传递 === //

// === 缺点：css中会混有js代码，还未搞懂原因 === //
function getAsyncComponent(load) {
  return function (_PureComponent) {
    (0, _inherits3.default)(AsyncComponent, _PureComponent);

    function AsyncComponent() {
      (0, _classCallCheck3.default)(this, AsyncComponent);
      return (0, _possibleConstructorReturn3.default)(this, (AsyncComponent.__proto__ || (0, _getPrototypeOf2.default)(AsyncComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(AsyncComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        load().then(function (_ref) {
          var component = _ref.default;

          _this2.setState({
            component: component
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _ref2 = this.state || {},
            component = _ref2.component;

        return component ? (0, _react.createElement)(component) : null;
      }
    }, {
      key: '__reactstandin__regenerateByEval',
      value: function __reactstandin__regenerateByEval(key, code) {
        this[key] = eval(code);
      }
    }]);
    return AsyncComponent;
  }(_react.PureComponent);
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getAsyncComponent, 'getAsyncComponent', '/Users/garven/codetest/realProject/myblog/client/Admin/router/asyncLoad.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/router/history.js":
/*!****************************************!*\
  !*** ./client/Admin/router/history.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createHashHistory = __webpack_require__(/*! history/createHashHistory */ "./node_modules/history/createHashHistory.js");

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})(); // === react-router v4 组件外路由跳转方法: === //
// === 1 withRouter: react-router-dom 提供的 withRouter(组件), 在组件内就可通过 this.props.history.oush() 来跳转  === //
// === 2 hack: === //
// === 2.1 自己创建 history: import createHistory from 'history/createBrowserHistory'; export default createHistory(); === //
// === 2.2 在配置路由时不用 HashRouter, 而是 <Router history={history}> === //
// === 2.3 想要跳转的地方, 引入 history, 然后 history.push() === //

var _default = typeof window !== 'undefined' ? (0, _createHashHistory2.default)() : {};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/router/history.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/router/index.css":
/*!***************************************!*\
  !*** ./client/Admin/router/index.css ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/Admin/router/index.jsx":
/*!***************************************!*\
  !*** ./client/Admin/router/index.jsx ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CMSRouteMap = undefined;

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _history = __webpack_require__(/*! ./history */ "./client/Admin/router/history.js");

var _history2 = _interopRequireDefault(_history);

var _asyncLoad = __webpack_require__(/*! ./asyncLoad */ "./client/Admin/router/asyncLoad.js");

var _asyncLoad2 = _interopRequireDefault(_asyncLoad);

var _index = __webpack_require__(/*! ../containers/Home/index */ "./client/Admin/containers/Home/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../containers/NoMatch/index */ "./client/Admin/containers/NoMatch/index.jsx");

var _index4 = _interopRequireDefault(_index3);

var _Auth = __webpack_require__(/*! ../containers/Auth */ "./client/Admin/containers/Auth/index.jsx");

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})(); // === webpack优化之按需加载：按需加载每个页面的逻辑 === //
// === 1 与React-Router结合：写一个异步加载组件，通过webpack官网中import的用法来引入不同组件 === //
// === 2 output中的chunkFilename: 为动态加载的 Chunk 配置输出文件的名称 === //

// import loadable from 'react-loadable'

// cms


// cms
var CMSRouteMap = function CMSRouteMap() {
  return _react2.default.createElement(
    _reactRouterDom.Router,
    { history: _history2.default },
    _react2.default.createElement(
      'div',
      { className: 'root-router' },
      _react2.default.createElement(_Auth2.default, null),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/post', component: (0, _asyncLoad2.default)(function () {
            return __webpack_require__.e(/*! import() | post */ "post").then(function() { var module = __webpack_require__(/*! ../containers/ArticlePost/index */ "./client/Admin/containers/ArticlePost/index.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
          }) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/info', component: (0, _asyncLoad2.default)(function () {
            return __webpack_require__.e(/*! import() | account */ "account").then(function() { var module = __webpack_require__(/*! ../containers/Info/index */ "./client/Admin/containers/Info/index.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
          }) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/article-tag', component: (0, _asyncLoad2.default)(function () {
            return __webpack_require__.e(/*! import() | article-tag */ "article-tag").then(function() { var module = __webpack_require__(/*! ../containers/ArticleTag/index */ "./client/Admin/containers/ArticleTag/index.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
          }) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/chatroom', component: (0, _asyncLoad2.default)(function () {
            return __webpack_require__.e(/*! import() | chatroom */ "chatroom").then(function() { var module = __webpack_require__(/*! ../containers/Chatroom/index */ "./client/Admin/containers/Chatroom/index.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
          }) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/comment', component: (0, _asyncLoad2.default)(function () {
            return __webpack_require__.e(/*! import() | comment */ "comment").then(function() { var module = __webpack_require__(/*! ../containers/Comment/index */ "./client/Admin/containers/Comment/index.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
          }) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/works', component: (0, _asyncLoad2.default)(function () {
            return __webpack_require__.e(/*! import() | works */ "works").then(function() { var module = __webpack_require__(/*! ../containers/Works/index */ "./client/Admin/containers/Works/index.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
          }) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/general-catalogue', component: (0, _asyncLoad2.default)(function () {
            return __webpack_require__.e(/*! import() | general-catalogue */ "general-catalogue").then(function() { var module = __webpack_require__(/*! ../containers/GeneralCatalogue/index */ "./client/Admin/containers/GeneralCatalogue/index.js"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
          }) }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _index2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _index4.default })
      )
    )
  );
};

exports.CMSRouteMap = CMSRouteMap;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CMSRouteMap, 'CMSRouteMap', '/Users/garven/codetest/realProject/myblog/client/Admin/router/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/* 开发环境域名与IP的配置:

/private/etc/hosts:

127.0.0.1       www.localhost.cn
127.0.0.1       admin.localhost.cn
127.0.0.1	      game.localhost.cn
127.0.0.1	      sso.localhost.cn
127.0.0.1 	    file.localhost.cn
127.0.0.1       game.localhost.cn

whistle 配置:

www.localhost.cn	  host://127.0.0.1:3003
admin.localhost.cn  host://127.0.0.1:8080
game.localhost.cn   host://127.0.0.1:3001
sso.localhost.cn    host://127.0.0.1:3333
file.localhost.cn   host://127.0.0.1:3009
game.localhost.cn   host://127.0.0.1:3007

*/

var ISDEV = "development" === 'development';
var ISPROD = "development" === 'production';
var ISTEST = process.env.test === 'test';

// 开发环境配置
var DEV = {

  // === 域名： === //
  // === 1 根域名： . === //
  // === 2 顶级域名：com gov edu cn com net等 === //
  // === 3 二级域名: hellojm === //
  // === 4 三级域名：www blog file === //
  // === 完整域名：www.hellojm.cn. [通常省略根域名] === //

  SSO_PORT: '3333',
  SSO_DOMAIN: 'http://sso.localhost.cn',

  INDEX_PORT: '3003',
  INDEX_SEVER_PORT: '3000',
  INDEX_DOMAIN: 'http://www.localhost.cn',

  CMS_PORT: '8080',
  CMS_SERVER_PORT: '8081',
  CMS_DOMAIN: 'http://admin.localhost.cn',

  FILE_SERVER_PORT: '3009',
  FILE_SERVER_DOMAIN: 'http://file.localhost.cn'

  // 生产环境配置
};var PROD = {

  SSO_PORT: '3333',
  SSO_DOMAIN: 'https://sso.hellojm.cn',

  INDEX_SERVER_PORT: '3003',
  INDEX_DOMAIN: 'https://www.hellojm.cn',

  CMS_SERVER_PORT: '8080',
  CMS_DOMAIN: 'https://admin.hellojm.cn',

  FILE_SERVER_PORT: '3001',
  FILE_SERVER_DOMAIN: 'https://file.hellojm.cn'
};

if (ISTEST) {
  PROD = (0, _assign2.default)({}, PROD, {
    SSO_DOMAIN: 'http://sso.localhost.cn',
    INDEX_DOMAIN: 'http://www.localhost.cn',
    CMS_DOMAIN: 'http://admin.localhost.cn',
    FILE_SERVER_DOMAIN: 'http://file.localhost.cn'
  });
}

var SSO_PORT = ISDEV ? DEV.SSO_PORT : PROD.SSO_PORT;
var SSO_DOMAIN = ISDEV || ISTEST ? DEV.SSO_DOMAIN : PROD.SSO_DOMAIN;
var INDEX_PORT = ISDEV ? DEV.INDEX_PORT : PROD.INDEX_PORT;
var INDEX_SEVER_PORT = ISDEV ? DEV.INDEX_SEVER_PORT : PROD.INDEX_SERVER_PORT;
var INDEX_DOMAIN = ISDEV || ISTEST ? DEV.INDEX_DOMAIN : PROD.INDEX_DOMAIN;
var CMS_PORT = ISDEV ? DEV.CMS_PORT : PROD.CMS_PORT;
var CMS_SERVER_PORT = ISDEV ? DEV.CMS_SERVER_PORT : PROD.CMS_SERVER_PORT;
var CMS_DOMAIN = ISDEV || ISTEST ? DEV.CMS_DOMAIN : PROD.CMS_DOMAIN;
var FILE_SERVER_PORT = ISDEV ? DEV.FILE_SERVER_PORT : PROD.FILE_SERVER_PORT;
var FILE_SERVER_DOMAIN = ISDEV || ISTEST ? DEV.FILE_SERVER_DOMAIN : PROD.FILE_SERVER_DOMAIN;
var COOKIE_DOMAIN = ISDEV || ISTEST ? '.localhost.cn' : '.hellojm.cn';

module.exports = {

  ISDEV: ISDEV,
  ISPROD: ISPROD,
  ISTEST: ISTEST,

  PUBLICPATH: '/',

  SSO_PORT: SSO_PORT,
  SSO_DOMAIN: SSO_DOMAIN,
  INDEX_PORT: INDEX_PORT,
  INDEX_SEVER_PORT: INDEX_SEVER_PORT,
  INDEX_DOMAIN: INDEX_DOMAIN,
  CMS_PORT: CMS_PORT,
  CMS_SERVER_PORT: CMS_SERVER_PORT,
  CMS_DOMAIN: CMS_DOMAIN,
  FILE_SERVER_PORT: FILE_SERVER_PORT,
  FILE_SERVER_DOMAIN: FILE_SERVER_DOMAIN,
  COOKIE_DOMAIN: COOKIE_DOMAIN,

  // github第三方登录配置
  GITHUB: {
    AUTHORIZE_URL: 'https://github.com/login/oauth/authorize',
    TOKEN_URL: 'https://github.com/login/oauth/access_token',
    USER_URL: 'https://api.github.com/user',
    CLIENT_ID: 'f3af6057b71e9fbd6951'
  },

  DEMO_ROOT_PATH: 'http://garvenzhang.github.io/',

  cryptoPwd: function cryptoPwd(md5, account, password) {
    return md5(md5(account) + md5('fje32###fa*&!!mmm' + password));
  }

};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ISDEV, 'ISDEV', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(ISPROD, 'ISPROD', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(ISTEST, 'ISTEST', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(DEV, 'DEV', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(PROD, 'PROD', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(SSO_PORT, 'SSO_PORT', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(SSO_DOMAIN, 'SSO_DOMAIN', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(INDEX_PORT, 'INDEX_PORT', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(INDEX_SEVER_PORT, 'INDEX_SEVER_PORT', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(INDEX_DOMAIN, 'INDEX_DOMAIN', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(CMS_PORT, 'CMS_PORT', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(CMS_SERVER_PORT, 'CMS_SERVER_PORT', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(CMS_DOMAIN, 'CMS_DOMAIN', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(FILE_SERVER_PORT, 'FILE_SERVER_PORT', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(FILE_SERVER_DOMAIN, 'FILE_SERVER_DOMAIN', '/Users/garven/codetest/realProject/myblog/config.js');
  reactHotLoader.register(COOKIE_DOMAIN, 'COOKIE_DOMAIN', '/Users/garven/codetest/realProject/myblog/config.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./favicon.ico":
/*!*********************!*\
  !*** ./favicon.ico ***!
  \*********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicon-bd6b14f304c2d7638cd5411443c47931.ico";

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************!*\
  !*** multi react-hot-loader/patch webpack-dev-server/client?http://127.0.0.1:8080 webpack/hot/only-dev-server ./client/Admin/index.jsx ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! react-hot-loader/patch */"./node_modules/react-hot-loader/patch.js");
__webpack_require__(/*! webpack-dev-server/client?http://127.0.0.1:8080 */"./node_modules/webpack-dev-server/client/index.js?http://127.0.0.1:8080");
__webpack_require__(/*! webpack/hot/only-dev-server */"./node_modules/webpack/hot/only-dev-server.js");
module.exports = __webpack_require__(/*! ./client/Admin/index.jsx */"./client/Admin/index.jsx");


/***/ })

}]);
//# sourceMappingURL=utils-a2adb65ecf1fe48a0cdb.js.map
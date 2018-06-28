(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account"],{

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

/***/ "./client/Admin/containers/Info/index.css":
/*!************************************************!*\
  !*** ./client/Admin/containers/Info/index.css ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"admin-info-page":"admin-info-page_IYzkn","section":"section_3hwRn","field":"field_34CK0","title":"title_3bogN","img":"img_1q4Ve","input":"input_2QzH2","select":"select_3IZxC","section--avator":"section--avator_3P6k4 section_3hwRn","section--info":"section--info_2XPLk section_3hwRn","btn-submit":"btn-submit_3XY7h","section--account":"section--account_11W1k section_3hwRn","section--spwd":"section--spwd_2eCOu section_3hwRn"};

/***/ }),

/***/ "./client/Admin/containers/Info/index.jsx":
/*!************************************************!*\
  !*** ./client/Admin/containers/Info/index.jsx ***!
  \************************************************/
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

var _index = __webpack_require__(/*! ../../components/Slidebar/index */ "./client/Admin/components/Slidebar/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../components/Form/index */ "./client/Admin/components/Form/index.jsx");

var _jsonp = __webpack_require__(/*! ../../../fetch/jsonp */ "./client/fetch/jsonp.js");

var _jsonp2 = _interopRequireDefault(_jsonp);

var _trieTree = __webpack_require__(/*! ./trieTree */ "./client/Admin/containers/Info/trieTree.js");

var _trieTree2 = _interopRequireDefault(_trieTree);

var _axios = __webpack_require__(/*! ../../../fetch/axios */ "./client/fetch/axios.js");

var _index4 = __webpack_require__(/*! ./index.css */ "./client/Admin/containers/Info/index.css");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var AdminAccount = function (_Component) {
  (0, _inherits3.default)(AdminAccount, _Component);

  function AdminAccount(props) {
    (0, _classCallCheck3.default)(this, AdminAccount);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AdminAccount.__proto__ || (0, _getPrototypeOf2.default)(AdminAccount)).call(this, props));

    _this.state = {
      provinceList: [],
      province: '',
      cityList: [],
      city: '',
      districtList: [],
      district: '',
      streetList: [],
      street: ''
    };

    _this.selectHandle = _this.selectHandle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AdminAccount, [{
    key: 'selectHandle',
    value: function selectHandle(e) {

      var value = e.target.value;
      var name = e.target.name;

      // 将对象转化为数组
      var ret = void 0;
      var nextData = void 0;

      if (name === 'province' || name === 'city') {
        ret = [];
        nextData = _trieTree2.default.getChild(value);

        for (var id in nextData) {
          if ((0, _typeof3.default)(nextData[id]) === 'object') {
            ret.push(nextData[id]);
          }
        }
      }

      // 联动
      switch (name) {

        case 'province':
          this.setState({
            province: value,
            cityList: ret,
            districtList: [],
            streetList: []
          });
          break;

        case 'city':
          this.setState({
            city: value,
            districtList: ret,
            streetList: []
          });
          break;

        case 'district':
          this.setState({
            district: value
          });
          _jsonp2.default.get(_axios.api.getStreetApi(value), 'street');
          _jsonp2.default.delete('street');
          break;

        case 'street':
          this.setState({
            street: value
          });
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          provinceList = _state.provinceList,
          cityList = _state.cityList,
          districtList = _state.districtList,
          streetList = _state.streetList,
          province = _state.province,
          city = _state.city,
          district = _state.district,
          street = _state.street;


      return _react2.default.createElement(
        'div',
        { className: 'admin-info-page admin-inner' },
        _react2.default.createElement(
          'div',
          { className: 'sildebar-wrap' },
          _react2.default.createElement(_index2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'admin-wrap' },
          _react2.default.createElement(
            'section',
            { className: _index5.default['section--avator'] },
            _react2.default.createElement(
              'span',
              { className: _index5.default['title'] },
              '\u5934\u50CF:'
            ),
            _react2.default.createElement('img', { className: _index5.default['img'], src: '#', alt: '\u5934\u50CF' })
          ),
          _react2.default.createElement(
            'section',
            { className: _index5.default['section--info'] },
            _react2.default.createElement(
              'form',
              { className: _index5.default['form'] },
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index5.default['title'] },
                  '\u6635\u79F0:'
                ),
                _react2.default.createElement('input', { name: 'name', className: _index5.default['input'], type: 'text' })
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index5.default['title'] },
                  '\u5730\u5740:'
                ),
                _react2.default.createElement(
                  'select',
                  {
                    className: _index5.default['select'],
                    onChange: this.selectHandle,
                    name: 'province',
                    value: province
                  },
                  provinceList.map(function (item, index) {
                    return _react2.default.createElement(
                      'option',
                      { key: index, value: item.id },
                      item.text
                    );
                  })
                ),
                _react2.default.createElement(
                  'select',
                  {
                    className: _index5.default['select'],
                    name: 'city',
                    onChange: this.selectHandle,
                    value: city
                  },
                  cityList.map(function (item, index) {
                    return _react2.default.createElement(
                      'option',
                      { key: index, value: item.id },
                      item.text
                    );
                  })
                ),
                _react2.default.createElement(
                  'select',
                  {
                    className: _index5.default['select'],
                    name: 'district',
                    value: district,
                    onChange: this.selectHandle
                  },
                  districtList.map(function (item, index) {
                    return _react2.default.createElement(
                      'option',
                      { key: index, value: item.id },
                      item.text
                    );
                  })
                ),
                _react2.default.createElement(
                  'select',
                  {
                    className: _index5.default['select'],
                    name: 'street',
                    onChange: this.selectHandle,
                    value: street
                  },
                  streetList.map(function (item, index) {
                    return _react2.default.createElement(
                      'option',
                      { key: index, value: item.id },
                      item.text
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: 'title' },
                  '\u8054\u7CFB\u65B9\u5F0F:'
                ),
                _react2.default.createElement('input', { name: 'contact', className: _index5.default['input'], type: 'number' })
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: 'title' },
                  '\u5FAE\u4FE1:'
                ),
                _react2.default.createElement('input', { name: 'wechat', className: _index5.default['input'], type: 'text' })
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: 'title' },
                  '\u535A\u5BA2:'
                ),
                _react2.default.createElement('input', { name: 'blog', className: _index5.default['input'], type: 'text' })
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: 'title' },
                  'github:'
                ),
                _react2.default.createElement('input', { name: 'github', className: _index5.default['input'], type: 'text' })
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement('input', { type: 'submit', className: 'btn-submit', value: '\u786E\u5B9A' }),
                _react2.default.createElement('input', { type: 'reset', className: 'btn-reset', value: '\u91CD\u7F6E' })
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { className: _index5.default['section--account'] },
            _react2.default.createElement(
              'form',
              { className: _index5.default['form'] },
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index5.default['title'] },
                  '\u8D26\u53F7:'
                ),
                _react2.default.createElement('input', { type: 'text', className: _index5.default['input'], readOnly: true })
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index5.default['title'] },
                  '\u5BC6\u7801:'
                ),
                _react2.default.createElement('input', { type: 'password', className: _index5.default['input'] })
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index5.default['title'] },
                  '\u65B0\u5BC6\u7801:'
                ),
                _react2.default.createElement('input', { type: 'password', className: _index5.default['input'] })
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index5.default['title'] },
                  '\u4E8C\u7EA7\u5BC6\u7801:'
                ),
                _react2.default.createElement('input', { type: 'password', className: _index5.default['input'] })
              ),
              _react2.default.createElement(
                'div',
                { className: _index5.default['field'] },
                _react2.default.createElement('input', { type: 'submit', className: _index5.default['btn-submit'], value: '\u63D0\u4EA4' })
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { className: _index5.default['section--spwd'] },
            _react2.default.createElement(_index3.SecondaryPasswordLogin, { account: this.props.account, access_token: this.props.access_token })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // === this === //
      // === 1.箭头函数没有this，预定义 === //
      // === 2.传统，用self保存 === //

      // === jsonp: 通过script标签引入的js是不受同源策略的限制的, 可以通过script标签引入一个js或者是一个其他后缀形式（如php，jsp等）的文件，此文件返回一个js函数的调用 === //
      // === 1 限制: get请求，非敏感信息 === //
      // === 2 具体实现: 在全局挂一个对象存callback，然后创建script节点，等内容获取到后会自动执行callback，然后将script节点和全局对象清除 === //

      var self = this;

      window.jp = {

        getAddress: function getAddress(data) {

          _trieTree2.default.init(data);

          // 获取到北京市
          var beijingCity = _trieTree2.default.getChild('110000');
          var ret = [];
          for (var i in beijingCity) {
            if ((0, _typeof3.default)(beijingCity[i]) === 'object') {
              ret.push(beijingCity[i]);
            }
          }

          _this2.setState({
            provinceList: data.province,
            cityList: ret
          });
        },

        getStreet: function getStreet(data) {
          self.setState({
            streetList: data
          });
        }
      };

      _jsonp2.default.get(_axios.api.getAddressApi(), 'address');
      _jsonp2.default.delete('address');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      window.jp = null;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return AdminAccount;
}(_react.Component);

AdminAccount.defaultProps = {
  avator: '',
  name: '',
  province: '',
  city: '',
  district: '',
  contact: '',
  wechat: '',
  blog: '',
  github: '',
  account: '',
  access_token: ''
};


if (true) {
  AdminAccount.propTypes = {
    avator: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    province: _propTypes2.default.string.isRequired,
    city: _propTypes2.default.string.isRequired,
    district: _propTypes2.default.string.isRequired,
    contact: _propTypes2.default.string.isRequired,
    wechat: _propTypes2.default.string.isRequired,
    blog: _propTypes2.default.string.isRequired,
    github: _propTypes2.default.string.isRequired,
    account: _propTypes2.default.string.isRequired,
    access_token: _propTypes2.default.string.isRequired
  };
}

var _default = AdminAccount;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AdminAccount, 'AdminAccount', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Info/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Info/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/Info/trieTree.js":
/*!**************************************************!*\
  !*** ./client/Admin/containers/Info/trieTree.js ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _data = {};
var root = {
  id: 0,
  text: ''
};

function Node(id, text) {
  this.id = id;
  this.text = text;
}

var trieTree = {

  createTree: function createTree() {
    var initProvince = _data.province;
    var initCity = _data.city;
    var initDistrict = _data.district;

    // 遍历省
    // 将对应的市放进去
    // 将对应的区放进去
    var recursiveInsert = function recursiveInsert(children, parent) {
      children.forEach(function (item) {
        var id = item.id;
        var prefixId = void 0;
        var ret = void 0;

        // 城
        if (id.slice(2) === '0000') {
          prefixId = id.substr(0, 2);
          ret = initCity.filter(function (_item) {
            return _item.id.substr(0, 2) === prefixId;
          });

          // 市
        } else if (id.slice(4) === '00') {
          prefixId = id.slice(2, 4);
          ret = initDistrict.filter(function (_item) {
            return _item.id.substr(0, 4) === '' + id.substr(0, 2) + prefixId;
          });

          // 区
        } else {
          prefixId = id.slice(4, 6);
        }

        parent[prefixId] = new Node(item.id, item.text);

        ret && recursiveInsert(ret, parent[prefixId]);
      });
    };

    // 入口
    recursiveInsert(initProvince, root);
  },

  getChild: function getChild(id) {
    id += '';

    var i = 0;
    var curId = void 0;
    var curItem = void 0;

    do {
      curId = id.substr(i, 2);
      curItem = i === 0 ? root[curId] : curItem[curId];
      i += 2;
    } while (id.substr(i, 2) !== '00' && i < id.length);

    // 容错
    return curItem || {};
  },

  init: function init(data) {
    _data = data;
    this.createTree();
  }

};

var _default = trieTree;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_data, '_data', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Info/trieTree.js');
  reactHotLoader.register(root, 'root', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Info/trieTree.js');
  reactHotLoader.register(Node, 'Node', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Info/trieTree.js');
  reactHotLoader.register(trieTree, 'trieTree', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Info/trieTree.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/Info/trieTree.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/fetch/jsonp.js":
/*!*******************************!*\
  !*** ./client/fetch/jsonp.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var jsonp = {};

var cache = {};

jsonp.get = function (url, key) {
  return new _promise2.default(function (resolve, reject) {
    var script = document.createElement('script');
    script.onload = function () {
      resolve();
    };
    script.src = url;
    document.body.appendChild(script);
    cache[key] = script;
  });
};

jsonp.delete = function (key) {
  document.body.removeChild(cache[key]);
  delete cache[key];
};

var _default = jsonp;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(jsonp, 'jsonp', '/Users/garven/codetest/realProject/myblog/client/fetch/jsonp.js');
  reactHotLoader.register(cache, 'cache', '/Users/garven/codetest/realProject/myblog/client/fetch/jsonp.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/fetch/jsonp.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js"), __esModule: true };

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


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ })

}]);
//# sourceMappingURL=account.js.map
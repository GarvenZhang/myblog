(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post"],{

/***/ "./client/Admin/components/Slidebar/index.css":
/*!****************************************************!*\
  !*** ./client/Admin/components/Slidebar/index.css ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"slidebar-inner":"slidebar-inner_su046","menu-list-first":"menu-list-first_2xRUZ","menu-item-first":"menu-item-first_1zrc2","link":"link_OqmfB","menu-title-first":"menu-title-first_1Eby1","menu-list-second":"menu-list-second_3dA9l","menu-item-second":"menu-item-second_XS4b1","icon-line":"icon-line_2yzp1","icon-plus":"icon-plus_1rxWv"};

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

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

    _this.state = {
      menu1Status: true
    };

    _this.menuHandle = _this.menuHandle.bind(_this);
    return _this;
  }

  /**
   * 菜单伸缩
   */


  (0, _createClass3.default)(Sidebar, [{
    key: 'menuHandle',
    value: function menuHandle(e) {

      var name = e.target.getAttribute('data-name');

      this.setState((0, _defineProperty3.default)({}, name, !this.state[name]));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: _index2.default['slidebar-inner'] },
        _react2.default.createElement(
          'ul',
          { className: _index2.default['menu-list-first'] },
          _react2.default.createElement(
            'li',
            { className: _index2.default['menu-item-first'] },
            _react2.default.createElement(
              'span',
              { 'data-name': 'menu1Status',
                className: _index2.default['menu-title-first'] + ' ' + (this.state.menu1Status ? _index2.default['icon-line'] : _index2.default['icon-plus']),
                onClick: this.menuHandle },
              '\u6587\u7AE0\u7BA1\u7406'
            ),
            _react2.default.createElement(
              'ul',
              { className: _index2.default['menu-list-second'] },
              _react2.default.createElement(
                'li',
                { className: _index2.default['menu-item-second'] },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _index2.default['link'], to: '/post' },
                  '\u6587\u7AE0\u53D1\u8868'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: _index2.default['menu-item-second'] },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _index2.default['link'], to: '/article-tag' },
                  '\u6807\u7B7E\u7BA1\u7406'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: _index2.default['menu-item-second'] },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _index2.default['link'], to: '/general-catalogue' },
                  '\u6587\u7AE0\u7EDF\u8BA1'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['menu-item-first'] },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/comment' },
              '\u8BC4\u8BBA\u7BA1\u7406'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['menu-item-first'] },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/chatroom' },
              '\u804A\u5929\u5BA4\u7BA1\u7406'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['menu-item-first'] },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/works' },
              '\u4F5C\u54C1\u96C6\u7BA1\u7406'
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

/***/ "./client/Admin/components/TipsBar/index.css":
/*!***************************************************!*\
  !*** ./client/Admin/components/TipsBar/index.css ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tipsbar-wrap":"tipsbar-wrap_1Vfq7","life-info-wrap":"life-info-wrap_2bXIn","tips-wrap":"tips-wrap_2mt4E","link-list":"link-list_2zbmw","date":"date_YrYW4","location":"location_1Nplp","weather":"weather_18_KC","link-item":"link-item_31XkS","tips":"tips_2PrGj","leftMove":"leftMove_2W7Jc","tips--0":"tips--0_1pWPh","tips--1":"tips--1_fEFz1","tips--2":"tips--2_3rX7Z","theme":"theme_28jHZ","link":"link_1aBO_"};

/***/ }),

/***/ "./client/Admin/components/TipsBar/index.jsx":
/*!***************************************************!*\
  !*** ./client/Admin/components/TipsBar/index.jsx ***!
  \***************************************************/
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

var _dec, _dec2, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _history = __webpack_require__(/*! ../../router/history */ "./client/Admin/router/history.js");

var _history2 = _interopRequireDefault(_history);

var _store = __webpack_require__(/*! ../../redux/store */ "./client/Admin/redux/store.js");

var _store2 = _interopRequireDefault(_store);

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _datetime = __webpack_require__(/*! ../../../lib/datetime */ "./client/lib/datetime.js");

var _datetime2 = _interopRequireDefault(_datetime);

var _jsonp = __webpack_require__(/*! ../../fetch/jsonp */ "./client/Admin/fetch/jsonp.js");

var _jsonp2 = _interopRequireDefault(_jsonp);

var _User = __webpack_require__(/*! ../../redux/User */ "./client/Admin/redux/User.js");

var _Iframe = __webpack_require__(/*! ../../redux/Iframe */ "./client/Admin/redux/Iframe.js");

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/components/TipsBar/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var get_user = _User.actions.get_user,
    logout = _User.actions.logout;
var send_message = _Iframe.actions.send_message;
var TipsBar = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.UserReducer;
}, { get_user: get_user, logout: logout }), _dec2 = (0, _reactRedux.connect)(function (state) {
  return state.IframeReducer;
}, { send_message: send_message }), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(TipsBar, _Component);

  function TipsBar(props) {
    (0, _classCallCheck3.default)(this, TipsBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TipsBar.__proto__ || (0, _getPrototypeOf2.default)(TipsBar)).call(this, props));

    _this.state = {
      time: _datetime2.default.toRegular(new Date()).slice(0, -3),
      city: '',
      weather: ''
    };

    _this.timer = null;

    _this.changeHandle = _this.changeHandle.bind(_this);
    _this.timeHandle = _this.timeHandle.bind(_this);
    _this.tipsHandle = _this.tipsHandle.bind(_this);

    return _this;
  }

  /**
   * tipsType更新处理
   */


  (0, _createClass3.default)(TipsBar, [{
    key: 'changeHandle',
    value: function changeHandle(tipsType) {
      this.setState({
        tipsType: tipsType
      });
    }

    /**
     * 时间显示处理
     */

  }, {
    key: 'timeHandle',
    value: function timeHandle() {
      var _this2 = this;

      this.timer = setInterval(function () {
        _this2.setState({
          time: _datetime2.default.toRegular(new Date()).slice(0, -3)
        });
      }, 1000 * 60);
    }

    /**
     * 地理位置及天气处理
     */

  }, {
    key: 'locationHandle',
    value: function locationHandle() {
      var _this3 = this;

      var appkey = 35247;
      var sign = '6e29d801d1d7ca266ad9192108fb0b74';
      var city = '';

      window.jp_location = {

        /**
         * 获取ip及城市
         */
        getIp: function getIp(res) {

          var result = res.result;
          var cityArr = result.att.split(',');
          city = cityArr[cityArr.length - 1];

          _jsonp2.default.get('//api.k780.com/?app=weather.today&weaid=' + result.ip + '&appkey=' + appkey + '&sign=' + sign + '&format=json&jsoncallback=jp_location.getWeather', 'weather').then(function (res) {
            _jsonp2.default.delete('weather');
          }).catch(function (err) {
            console.error(err);
          });
        },

        /**
         * 获取天气
         */
        getWeather: function getWeather(res) {

          var result = res.result;

          if (!result) {
            _this3.setState({
              city: city,
              weather: '无法获取天气'
            });
            return;
          }

          var weather = result.weather;

          _this3.setState({
            city: city,
            weather: weather
          });
        }

        // === https站点中引入了http资源: 浏览器默认https站点中不能引入http资源, https会失效，出现 连接不安全 logo === //
        // === 1 解决办法: === //
        // === 1.1 script 不论是改为https协议还是通过相对协议, 虽然能请求回来, 但是若资源是用http协议的, 会使得整站的https破坏掉 === //
        // === 1.2 ajax的话是不能在https中请求http的, 需给为iframe, 两边进行控制 === //
        // === 2 相对协议: 将协议去掉, 留下 // 以及 后面的内容, 在使用https的网站中会使用https协议, 在使用http的网站中会是先用http协议 === //

        // jsonp.get('https://api.ipify.org?format=jsonp&callback=jp.getIp', 'ip')
      };_jsonp2.default.get('//api.k780.com/?app=ip.local&appkey=' + appkey + '&sign=' + sign + '&format=json&jsoncallback=jp_location.getIp', 'ip');
      _jsonp2.default.delete('ip');
    }
  }, {
    key: 'tipsHandle',
    value: function tipsHandle() {

      switch (this.props.role) {

        case 0:
          return _react2.default.createElement(
            'div',
            { className: _index2.default['tips-wrap'] + ' ' + _index2.default['tips--1'] },
            '\xA0',
            _react2.default.createElement(
              'p',
              { className: _index2.default['tips'] },
              '\u60A8\u76EE\u524D\u5C5E\u4E8E\u666E\u901A\u7528\u6237\uFF0C\u53EA\u6709 ',
              _react2.default.createElement(
                'span',
                { className: 'theme' },
                '\u53C2\u9605\u6743\u9650'
              ),
              ' \uFF01'
            )
          );

        case 1:
          return _react2.default.createElement(
            'div',
            { className: _index2.default['tips-wrap'] + ' ' + _index2.default['tips--0'] },
            '\xA0',
            _react2.default.createElement(
              'p',
              { className: _index2.default['tips'] },
              '\u6B22\u8FCE\u56DE\u5230 ',
              _react2.default.createElement(
                'span',
                { className: _index2.default['theme'] },
                '\u535A\u5BA2cms'
              ),
              ' !'
            )
          );

        case 2:
          return _react2.default.createElement(
            'div',
            { className: _index2.default['tips-wrap'] + ' ' + _index2.default['tips--2'] },
            '\xA0',
            _react2.default.createElement(
              'p',
              { className: _index2.default['tips'] },
              '\u7531\u4E8E\u60A8\u767B\u5F55\u592A\u957F\u65F6\u95F4\uFF0C\u4E3A\u786E\u4FDD\u60A8\u7684\u5B89\u5168\uFF0C\u9700 ',
              _react2.default.createElement(
                'span',
                { className: 'theme' },
                '\u91CD\u65B0\u767B\u5F55'
              ),
              ' ! '
            )
          );
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      // 定时器
      this.timeHandle();
    }

    // === 组件内性能优化: === //
    // === 1 render会每次更新数据时都会执行, 而在diff比较的时候, 由于 {a: 1} != {a: 1}, 即引用类型都会新建内存地址从而不同, 所以jsx中不要直接以对象字面量的形式的形式传值, 如 style={{color: 'red'}} === //
    // === 2 绑定this 要放到constructor 中去, 在jsx中 onClick={this.clickHandle.bind(this)} 会在每次执行render时都会执行bind函数, onClick={() => this.clickHandle()} 会在每次 render 时都声明新的函数 === //
    // === 3 在传给子组件值时 做到 需要什么传什么, {...this.state} 这样的写法 会传很多 额外的值 === //

  }, {
    key: 'render',
    value: function render() {
      // const linkInfoStyle = {
      //   background: `url(${this.props.avatar_url}) 0 0 no-repeat`
      // }

      return _react2.default.createElement(
        'div',
        { className: _index2.default['tipsbar-wrap'] },
        _react2.default.createElement(
          'div',
          { className: _index2.default['life-info-wrap'] },
          _react2.default.createElement(
            'span',
            { className: _index2.default['date'] },
            this.state.time
          ),
          '|',
          _react2.default.createElement(
            'span',
            { className: _index2.default['location'] },
            this.state.city
          ),
          '|',
          _react2.default.createElement(
            'span',
            { className: _index2.default['weather'] },
            this.state.weather
          )
        ),
        this.tipsHandle(),
        _react2.default.createElement(
          'ul',
          { className: _index2.default['link-list'] },
          _react2.default.createElement(
            'li',
            { className: _index2.default['link-item'] },
            this.props.role === 2 ? _react2.default.createElement(
              'span',
              { onClick: this.props.logout, className: _index2.default['link'] },
              '\u70B9\u6B64\u91CD\u65B0\u767B\u5F55'
            ) : _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _index2.default['link'], to: '/info' },
              '\u4E2A\u4EBA\u4FE1\u606F'
            )
            // <Link className={style['link']} style={linkInfoStyle} to='/info'>个人信息</Link>

          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['link-item'] },
            _react2.default.createElement(
              'a',
              { className: _index2.default['link'], to: _config2.default.INDEX_DOMAIN },
              '\u56DE\u5230\u535A\u5BA2'
            )
          ),
          this.props.role === 2 ? '' : _react2.default.createElement(
            'li',
            { className: _index2.default['link-item'] },
            _react2.default.createElement(
              'a',
              { href: 'javascript: void (0);', onClick: this.props.logout, className: _index2.default['link'] },
              '\u767B\u51FA'
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      // 获取位置信息
      // this.locationHandle()


    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.timer = null;
      window.jp_location = null;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return TipsBar;
}(_react.Component)) || _class) || _class);
exports.default = TipsBar;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get_user, 'get_user', '/Users/garven/codetest/realProject/myblog/client/Admin/components/TipsBar/index.jsx');
  reactHotLoader.register(logout, 'logout', '/Users/garven/codetest/realProject/myblog/client/Admin/components/TipsBar/index.jsx');
  reactHotLoader.register(send_message, 'send_message', '/Users/garven/codetest/realProject/myblog/client/Admin/components/TipsBar/index.jsx');
  reactHotLoader.register(TipsBar, 'TipsBar', '/Users/garven/codetest/realProject/myblog/client/Admin/components/TipsBar/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/components/Upload/index.css":
/*!**************************************************!*\
  !*** ./client/Admin/components/Upload/index.css ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hide-font":"hide-font_ud7o2","hide":"hide_VQRTe","center":"center_1SyKy","upload-wrap":"upload-wrap_3rNnv","upload-tips":"upload-tips_3bdes","upload-img-list":"upload-img-list_1QEeP","upload-img-item":"upload-img-item_3njuU","upload-progress":"upload-progress_WWIDr","btn-delete":"btn-delete_3gvPK","upload-img":"upload-img_1v-lA","upload-inp-wrap":"upload-inp-wrap_1JD9y","upload-btn-wrap":"upload-btn-wrap_3kjXD","btn-reset":"btn-reset_3Vp_9","btn-retry":"btn-retry_1w3V3"};

/***/ }),

/***/ "./client/Admin/components/Upload/index.jsx":
/*!**************************************************!*\
  !*** ./client/Admin/components/Upload/index.jsx ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

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

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _dec, _dec2, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/components/Upload/index.css");

var _index2 = _interopRequireDefault(_index);

var _type = __webpack_require__(/*! ../../../lib/type */ "./client/lib/type.js");

var _type2 = _interopRequireDefault(_type);

var _axios = __webpack_require__(/*! ../../fetch/axios */ "./client/Admin/fetch/axios.js");

var _Popup = __webpack_require__(/*! ../../redux/Popup */ "./client/Admin/redux/Popup.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var ImgItem = function ImgItem(props) {
  return _react2.default.createElement(
    'li',
    { className: _index2.default['upload-img-item'] },
    _react2.default.createElement(
      'i',
      { className: _index2.default['btn-delete'], 'data-id': props.id },
      'X'
    ),
    _react2.default.createElement(
      'span',
      { className: _index2.default['upload-progress'] + ' ' + (props.uploaded !== 0 ? '' : _index2.default['hide']) },
      props.uploaded * 100 + '%'
    ),
    _react2.default.createElement('img', { className: _index2.default['upload-img'], src: props.src, alt: props.name, width: '40', height: '40' })
  );
};

// === 上传漏洞: 用户上传文件后可通过url访问, 上传的文件在后端被当做程序解析, 攻击者的逻辑在服务器端被执行 === //
// === 1 场景: php/asp中尤其严重, 文件可直接通过url访问, 若上传的是php文件会执行, 而nodejs中可设置路由防止真实路径暴露, 不会去主动执行js文件 === //
// === 2 防御: === //
// === 2.1 限制上传后缀: 因后端语言而异后缀处理不一致, 且可欺骗, 不能彻底防御 === //
// === 2.2 文件类型检查: type 是浏览器给的, 但可通过非浏览器发送请求, 达到欺骗效果 === //
// === 2.3 文件内容检查: 不同类型的文件的开头有一定的特征 === //
// === 2.4 程序输出 === //
// === 2.5 权限控制 - 可写可执行互斥 === //

// === 上传拖放： === //
// === 1.目标元素：被拖放元素，dragstart[按下鼠标并开始移动鼠标时触发] - drag[被拖动期间持续触发] - dragend[释放鼠标停止拖动时触发] === //
// === 2.释放区域：dragenter[拖动到其身上时触发] - dragover[在其范围持续拖动时持续触发】 - drop[在其范围释放时触发] - dragleave[离开其范围时触发] === //
// === 3.dragenter 和 dragover 一定要包含event.preventdefault()以阻止默认操作 === //
// === 4.transferData对象：事件对象中有个dataTransfer属性，用于把目标元素处的信息传达到释放区域 === //
// === 5.传递信息：在dragstart中通过 e.transferData.setData() ，在drop中getData() === //
// === 6.从操作系统拖放图片到页面：把图片drop到 释放区域后，图片信息存到了 e.transferData.files, 然后遍历，通过FileReader实例的readAdDataURL()来获取信息，获取完毕后通过实例的 load 事件的e.target.result获取的base64，再赋值给img节点的src属性 === //

// === state如何管理复杂的数据结构？ === //
// === 1. === //

var Upload = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    role: state.UserReducer.role
  };
}), _dec2 = (0, _reactRedux.connect)(function (state) {
  return null, (0, _extends3.default)({}, _Popup.actions);
}), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(Upload, _Component);

  function Upload(props) {
    (0, _classCallCheck3.default)(this, Upload);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Upload.__proto__ || (0, _getPrototypeOf2.default)(Upload)).call(this, props));

    _this.state = {// file存储集合
      // [id]: {
      //   name: '',
      //  src: '',
      //  file: null,
      //  uploaded: 0,
      //  isUploading: false
      // }
    };

    _this.dragenterHandle = _this.dragenterHandle.bind(_this);
    _this.dragoverHandle = _this.dragoverHandle.bind(_this);
    _this.dropHandle = _this.dropHandle.bind(_this);
    _this.uploadHandle = _this.uploadHandle.bind(_this);
    _this.deleteHandle = _this.deleteHandle.bind(_this);
    _this.resetHandle = _this.resetHandle.bind(_this);
    _this.preview = _this.preview.bind(_this);
    _this.readFile = _this.readFile.bind(_this);
    _this.ajax = _this.ajax.bind(_this);
    _this.mapHandle = _this.mapHandle.bind(_this);
    return _this;
  }

  /**
   * 读取出src
   * @param item {Object} item
   * @return {Object} Promise
   */


  (0, _createClass3.default)(Upload, [{
    key: 'readFile',
    value: function readFile(item) {
      var _this2 = this;

      var self = this;

      return new _promise2.default(function (resolve, reject) {
        var reader = new FileReader();

        reader.onload = function (e) {
          // 找到对应id并更新src
          // 这里用lastModified作为id巧妙地避免了重复图片上传
          for (var id in _this2.state) {
            var file = _this2.state[id];
            if (_type2.default.isObject(file) && id == item.file.lastModified + item.file.size) {
              self.setState((0, _defineProperty3.default)({}, id, (0, _assign2.default)({}, item, {
                src: e.target.result
              })));

              break;
            }
          }

          resolve();
        };

        reader.readAsDataURL(item.file);
      });
    }

    /**
     * 预览图片
     */

  }, {
    key: 'preview',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var id;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _regenerator2.default.keys(this.state);

              case 1:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 9;
                  break;
                }

                id = _context.t1.value;
                _context.t2 = _type2.default.isObject(this.state[id]);

                if (!_context.t2) {
                  _context.next = 7;
                  break;
                }

                _context.next = 7;
                return this.readFile(this.state[id]);

              case 7:
                _context.next = 1;
                break;

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function preview() {
        return _ref.apply(this, arguments);
      }

      return preview;
    }()

    /**
     * ajax请求
     * @param {Object} file 上传文件
     * @param {Number} id
     */

  }, {
    key: 'ajax',
    value: function ajax(item) {
      var _this3 = this;

      if (this.props.role !== 1) {
        return this.props.update_popup({
          isOpen: 1,
          header: '提示:',
          content: '您当前只有参阅权限!'
        });
      }

      var xhr = new XMLHttpRequest();

      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          _this3.setState((0, _defineProperty3.default)({}, item.file.lastModified + item.file.size, (0, _assign2.default)({}, item, {
            uploaded: e.loaded / e.total
          })));
        }
      };

      xhr.open('post', _axios.api.uploadImgApi(), true);

      var data = new FormData();
      data.append('file', item.file);
      xhr.send(data);
    }

    /**
     * 上传操作
     */

  }, {
    key: 'uploadHandle',
    value: function uploadHandle() {
      for (var id in this.state) {
        var item = this.state[id];

        if (!_type2.default.isObject(item)) {
          continue;
        }

        // 展示出进度数据
        this.setState({
          uploadedId: id
        });

        // ajax请求
        this.ajax(item);
      }
    }

    /**
     * 阻止默认事件
     */

  }, {
    key: 'dragenterHandle',
    value: function dragenterHandle(e) {
      e.preventDefault();
    }

    /**
     * 阻止默认事件
     */

  }, {
    key: 'dragoverHandle',
    value: function dragoverHandle(e) {
      e.preventDefault();
    }

    /**
     * 释放处理
     * @param {Object} e 事件对象
     */

  }, {
    key: 'dropHandle',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, total_count;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 禁止 打开图片 的默认行为
                e.preventDefault();

                // 放进files集合
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 4;
                _iterator = (0, _getIterator3.default)(e.dataTransfer.files);

              case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 17;
                  break;
                }

                item = _step.value;

                if (!(item.type.indexOf('image/') === -1)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt('return');

              case 10:

                // 上限10个图片
                total_count = this.state.length;

                if (!(total_count >= 11)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt('break', 17);

              case 13:

                // 放进数组
                this.setState((0, _defineProperty3.default)({}, item.lastModified + item.size, {
                  name: item.name,
                  src: '',
                  file: item,
                  uploaded: 0
                }));

              case 14:
                _iteratorNormalCompletion = true;
                _context2.next = 6;
                break;

              case 17:
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](4);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 23:
                _context2.prev = 23;
                _context2.prev = 24;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 26:
                _context2.prev = 26;

                if (!_didIteratorError) {
                  _context2.next = 29;
                  break;
                }

                throw _iteratorError;

              case 29:
                return _context2.finish(26);

              case 30:
                return _context2.finish(23);

              case 31:
                _context2.next = 33;
                return this.preview();

              case 33:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 19, 23, 31], [24,, 26, 30]]);
      }));

      function dropHandle(_x) {
        return _ref2.apply(this, arguments);
      }

      return dropHandle;
    }()

    /**
     * 删除处理
     */

  }, {
    key: 'deleteHandle',
    value: function deleteHandle(e) {
      var target = e.target;

      if (target.className.indexOf('btn-delete') > -1) {
        this.setState((0, _defineProperty3.default)({}, target.getAttribute('data-id'), null));

        e.stopPropagation();
      }
    }

    /**
     * 重置处理
     */

  }, {
    key: 'resetHandle',
    value: function resetHandle() {
      // 重置数据
      for (var id in this.state) {
        _type2.default.isObject(this.state[id]) && this.setState((0, _defineProperty3.default)({}, id, null));
      }
    }

    /**
     * 转化为数组来遍历
     */

  }, {
    key: 'mapHandle',
    value: function mapHandle() {
      var arr = [];
      for (var key in this.state) {
        _type2.default.isObject(this.state[key]) && arr.push((0, _assign2.default)({}, this.state[key], {
          id: key
        }));
      }

      return arr;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var files = this.mapHandle();

      return _react2.default.createElement(
        'div',
        { className: _index2.default['upload-wrap'] },
        _react2.default.createElement(
          'ul',
          { ref: function ref($area) {
              return _this4.$area = $area;
            }, className: _index2.default['upload-img-list'] },
          files.map(function (item, i) {
            return _react2.default.createElement(ImgItem, {
              key: i,
              id: item.id,
              src: item.src,
              name: item.name,
              uploaded: item.uploaded
            });
          })
        ),
        _react2.default.createElement(
          'span',
          { className: _index2.default['upload-tips'] },
          'Upload File: png/jpg/jpeg/webp/gif '
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default['upload-inp-wrap'] },
          _react2.default.createElement('input', { type: 'file', className: _index2.default['upload-inp'] })
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default['upload-btn-wrap'] + ' ' + (files.length > 0 ? '' : _index2.default['hide']) },
          _react2.default.createElement(
            'button',
            { ref: function ref($uploadBtn) {
                return _this4.$uploadBtn = $uploadBtn;
              }, className: _index2.default['btn-upload'], type: 'button' },
            '\u4E0A\u4F20'
          ),
          _react2.default.createElement(
            'button',
            { ref: function ref($resetBtn) {
                return _this4.$resetBtn = $resetBtn;
              }, className: _index2.default['btn-reset'], type: 'button' },
            '\u6E05\u7A7A'
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 拖入
      this.$area.addEventListener('dragenter', this.dragenterHandle, false);
      // 在区域上拖动
      this.$area.addEventListener('dragover', this.dragoverHandle, false);
      // 释放
      this.$area.addEventListener('drop', this.dropHandle, false);
      // 删除
      this.$area.addEventListener('click', this.deleteHandle, false);
      // 上传
      this.$uploadBtn.addEventListener('click', this.uploadHandle, false);
      // 重置
      this.$resetBtn.addEventListener('click', this.resetHandle, false);
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Upload;
}(_react.Component)) || _class) || _class);
exports.default = Upload;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImgItem, 'ImgItem', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Upload/index.jsx');
  reactHotLoader.register(Upload, 'Upload', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Upload/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/ArticlePost/index.css":
/*!*******************************************************!*\
  !*** ./client/Admin/containers/ArticlePost/index.css ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"admin-article-post-wrap":"admin-article-post-wrap_1_ELu","field":"field_1KFqs","title":"title_ZP4pt","article-post-form":"article-post-form_M9FDc","textarea":"textarea_30TiU","field--btn":"field--btn_3kxJV","btn-submit":"btn-submit_FOD3s"};

/***/ }),

/***/ "./client/Admin/containers/ArticlePost/index.jsx":
/*!*******************************************************!*\
  !*** ./client/Admin/containers/ArticlePost/index.jsx ***!
  \*******************************************************/
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

var _dec, _dec2, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../components/Slidebar/index */ "./client/Admin/components/Slidebar/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _Upload = __webpack_require__(/*! ../../components/Upload */ "./client/Admin/components/Upload/index.jsx");

var _Upload2 = _interopRequireDefault(_Upload);

var _TipsBar = __webpack_require__(/*! ../../components/TipsBar */ "./client/Admin/components/TipsBar/index.jsx");

var _TipsBar2 = _interopRequireDefault(_TipsBar);

var _simpTrad = __webpack_require__(/*! ../../../lib/simp-trad */ "./client/lib/simp-trad.js");

var _simpTrad2 = _interopRequireDefault(_simpTrad);

var _ArticleCategory = __webpack_require__(/*! ../../redux/ArticleCategory */ "./client/Admin/redux/ArticleCategory.js");

var _ArticleLinkList = __webpack_require__(/*! ../../redux/ArticleLinkList */ "./client/Admin/redux/ArticleLinkList.js");

var _Article = __webpack_require__(/*! ../../redux/Article */ "./client/Admin/redux/Article.js");

var _Popup = __webpack_require__(/*! ../../redux/Popup */ "./client/Admin/redux/Popup.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _validator = __webpack_require__(/*! ../../../lib/validator */ "./client/lib/validator.js");

var _index3 = __webpack_require__(/*! ./index.css */ "./client/Admin/containers/ArticlePost/index.css");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var get_category_list = _ArticleCategory.actions.get_category_list;
var get_article_link_list = _ArticleLinkList.actions.get_article_link_list;

// === redux优化之connect: 当state更新时会更新props, 因此只传组件有关的state, 从而避免不相关的state更新时也重新渲染了组件 === //

var AdminArticlePost = (_dec = (0, _reactRedux.connect)(function (state) {
  return (0, _extends3.default)({}, state.ArticleReducer, {
    tagsList: state.ArticleCategoryReducer.data,
    articleList: state.ArticleLinkListReducer.data
  });
}, (0, _extends3.default)({}, _Article.actions, {
  get_category_list: get_category_list,
  get_article_link_list: get_article_link_list
})), _dec2 = (0, _reactRedux.connect)(null, (0, _extends3.default)({}, _Popup.actions)), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(AdminArticlePost, _Component);

  function AdminArticlePost(props) {
    (0, _classCallCheck3.default)(this, AdminArticlePost);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AdminArticlePost.__proto__ || (0, _getPrototypeOf2.default)(AdminArticlePost)).call(this, props));

    _this.state = {};

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AdminArticlePost, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}

    /**
     * 更新数据处理
     */

  }, {
    key: 'handleChange',
    value: function handleChange(e) {

      var target = e.target;
      var value = target.value;
      var name = target.name;
      var dispatch = 'update_' + name;

      this.props[dispatch](value);
    }

    /**
     * 发表文章
     */

  }, {
    key: 'saveArticle',
    value: function saveArticle() {
      var _props = this.props,
          title = _props.title,
          summary = _props.summary,
          content = _props.content,
          pubtime = _props.pubtime,
          category_id = _props.category_id,
          prev_id = _props.prev_id,
          next_id = _props.next_id,
          cover_url = _props.cover_url,
          tagsList = _props.tagsList,
          articleList = _props.articleList;

      // 标签 - 默认值

      if (category_id === 0) {

        if (tagsList.length === 0) {
          return this.props.update_popup({
            isOpen: 1,
            header: '提示:',
            content: '无可选标签!'
          });
        }

        category_id = tagsList[0].id;
      }

      // 上一篇 - 默认值
      if (prev_id === 0) {

        if (articleList.length === 0) {
          return this.props.update_popup({
            isOpen: 1,
            header: '提示:',
            content: '无可选文章!'
          });
        }

        prev_id = articleList[0].id;
      }

      // 下一篇 - 默认值
      if (next_id === 0) {

        if (articleList.length === 0) {
          return this.props.update_popup({
            isOpen: 1,
            header: '提示:',
            content: '无可选文章!'
          });
        }

        next_id = articleList[0].id;
      }

      // 检验
      var validator = new _validator.Validator();

      validator.add(title, [{
        strategy: 'isEmpty',
        errMsg: '标题不能为空!'
      }]).add(summary, [{
        strategy: 'isEmpty',
        errMsg: '摘要不能为空!'
      }]).add(pubtime, [{
        strategy: 'isEmpty',
        errMsg: '日期不能为空!'
      }, {
        strategy: 'isDate',
        errMsg: '日期不符合 YYYY-MM-DD 格式!'
      }]);

      var ret = validator.start();
      if (ret) {
        return this.props.update_popup({
          isOpen: 1,
          header: '提示:',
          content: ret
        });
      }

      // 发送请求
      this.props.save_article({
        title: title, summary: summary, content: content, pubtime: pubtime, category_id: category_id, prev_id: prev_id, next_id: next_id, cover_url: cover_url
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'admin-page' },
        _react2.default.createElement(_TipsBar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'sildebar-wrap' },
          _react2.default.createElement(_index2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'admin-wrap' },
          _react2.default.createElement(
            'div',
            { className: _index4.default['admin-article-post-wrap'] + ' ' + _index4.default['admin-inner'] },
            _react2.default.createElement(
              'form',
              { className: _index4.default['article-post-form'] },
              _react2.default.createElement(
                'p',
                { className: _index4.default["field"] },
                _react2.default.createElement(
                  'span',
                  { className: _index4.default['title'] },
                  '\u6807\u9898\uFF1A'
                ),
                _react2.default.createElement('input', {
                  type: 'text',
                  className: 'inp-title',
                  name: 'title',
                  value: this.props.title,
                  onChange: this.handleChange
                })
              ),
              _react2.default.createElement(
                'p',
                { className: _index4.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index4.default['title'] },
                  '\u65E5\u671F\uFF1A'
                ),
                _react2.default.createElement('input', {
                  type: 'date',
                  className: 'inp-date',
                  name: 'pubtime',
                  value: this.props.pubtime,
                  onChange: this.handleChange
                })
              ),
              _react2.default.createElement(
                'p',
                { className: _index4.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index4.default['title'] },
                  '\u6458\u8981\uFF1A'
                ),
                _react2.default.createElement('input', {
                  type: 'text',
                  className: 'inp-summary',
                  name: 'summary',
                  value: this.props.summary,
                  onChange: this.handleChange
                })
              ),
              _react2.default.createElement(
                'p',
                { className: _index4.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index4.default['title'] },
                  '\u7C7B\u522B\uFF1A'
                ),
                _react2.default.createElement(
                  'select',
                  {
                    name: 'article_type_id',
                    value: this.props.category_id,
                    onChange: this.handleChange,
                    className: 'select-type' },
                  this.props.tagsList.map(function (item) {
                    return _react2.default.createElement(
                      'option',
                      { key: item.id, value: item.id },
                      item.name
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'p',
                { className: _index4.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index4.default['title'] },
                  '\u4E0A\u4E00\u7BC7\uFF1A'
                ),
                _react2.default.createElement(
                  'select',
                  {
                    name: 'prev_id',
                    value: this.props.prev_id,
                    onChange: this.handleChange,
                    className: 'select-prev' },
                  this.props.articleList.map(function (item) {
                    return _react2.default.createElement(
                      'option',
                      { key: item.id, value: item.id },
                      item.name
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'p',
                { className: _index4.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index4.default['title'] },
                  '\u4E0B\u4E00\u7BC7\uFF1A'
                ),
                _react2.default.createElement(
                  'select',
                  {
                    name: 'next_id',
                    value: this.props.next_id,
                    onChange: this.handleChange,
                    className: 'select-next' },
                  this.props.articleList.map(function (item) {
                    return _react2.default.createElement(
                      'option',
                      { key: item.id, value: item.id },
                      item.name
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'p',
                { className: _index4.default['field'] },
                _react2.default.createElement(
                  'span',
                  { className: _index4.default['title'] },
                  '\u5C01\u9762uri\uFF1A'
                ),
                _react2.default.createElement('input', {
                  type: 'text',
                  className: 'inp-cover_url',
                  name: 'cover_url',
                  value: this.props.cover_url,
                  onChange: this.handleChange
                })
              ),
              _react2.default.createElement(
                'p',
                { className: _index4.default['field'] },
                _react2.default.createElement('textarea', {
                  name: 'content',
                  value: this.props.content,
                  onChange: this.handleChange,
                  className: _index4.default['textarea']
                })
              ),
              _react2.default.createElement(
                'p',
                { className: _index4.default['field'] + ' ' + _index4.default['field--btn'] },
                _react2.default.createElement('input', {
                  type: 'button',
                  className: _index4.default['btn-submit'],
                  onClick: this.saveArticle.bind(this),
                  value: '\u53D1\u8868' })
              )
            ),
            _react2.default.createElement(_Upload2.default, null)
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.props.get_category_list();
      this.props.get_article_link_list();

      (0, _simpTrad2.default)(true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _simpTrad2.default)(false);
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return AdminArticlePost;
}(_react.Component)) || _class) || _class);
exports.default = AdminArticlePost;


AdminArticlePost.defualtProps = {
  tagsList: [],
  articleList: []
};

if (_config2.default.ISDEV) {
  AdminArticlePost.propTypes = {
    tagsList: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    articleList: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get_category_list, 'get_category_list', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/ArticlePost/index.jsx');
  reactHotLoader.register(get_article_link_list, 'get_article_link_list', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/ArticlePost/index.jsx');
  reactHotLoader.register(AdminArticlePost, 'AdminArticlePost', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/ArticlePost/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/fetch/jsonp.js":
/*!*************************************!*\
  !*** ./client/Admin/fetch/jsonp.js ***!
  \*************************************/
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

  reactHotLoader.register(jsonp, 'jsonp', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/jsonp.js');
  reactHotLoader.register(cache, 'cache', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/jsonp.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/Admin/fetch/jsonp.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/datetime.js":
/*!********************************!*\
  !*** ./client/lib/datetime.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(/*! ./type */ "./client/lib/type.js");

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var datetime = {};

var handleZero = function handleZero(num) {
  return num < 10 ? '0' + num : num;
};

datetime.toRegular = function (dateObj) {
  if (!_type2.default.isDate(dateObj)) {
    throw new Error('非Date对象！');
  }

  return dateObj.getFullYear() + '-' + handleZero(dateObj.getMonth()) + '-' + handleZero(dateObj.getDate()) + ' ' + handleZero(dateObj.getHours()) + ':' + handleZero(dateObj.getMinutes()) + ':' + handleZero(dateObj.getSeconds());
};

var _default = datetime;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(datetime, 'datetime', '/Users/garven/codetest/realProject/myblog/client/lib/datetime.js');
  reactHotLoader.register(handleZero, 'handleZero', '/Users/garven/codetest/realProject/myblog/client/lib/datetime.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/lib/datetime.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/reg.js":
/*!***************************!*\
  !*** ./client/lib/reg.js ***!
  \***************************/
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

var _default = {
  date: /^\d{4}-(?:0[1-9]|1[12])-(?:0[1-9]|[12][1-9]|3[01])(?:\s(?:[01][0-9]|2[0-3])\:[0-6][0-9]\:[0-5][0-9]|$)/,
  phone: /^1(3|5|8)\d{9}$/,
  mail: /^[\w\W]+?@\w+?\.(?:com|cn)$/,
  num: /^\d*$/,
  legal: /[^\*\\\/\?\"\'\+\^]/,

  // 1 通过 \B: 先匹配每个除了\b外的边界
  // 2 通过 \B(?=(\d{3}): 边界后面紧跟着3个数字
  // 3 通过 \B(?=(\d{3})(?!\d)): 3个数字后面不能再为数字
  // 4 通过 + : 这样的边界在全局匹配多份
  num2money: /\B(?=(\d{3})+(?!\d))/g
};
// === 边界: 只匹配位置 === //
// === 零宽度断言: 不匹配字符而是匹配字符之间的位置 === //
// === ^: 匹配开头位置 === //
// === $: 匹配结尾位置 === //
// === \b: 匹配单词边界 === //
/*

123fsd3;24325.435,fdffdas`2324

1的前面位置
3与;之间的位置
;与2之间的位置
5与.之间的位置
.与4之间的位置
5与,之间的位置
,与f之间的位置
s与`之间的位置
`与2之间的位置
4的后面位置

*/
// === \B: 除了\b匹配到的位置 === //

// === 环视: 是一种非捕获分组, 根据某个模式之前或之后的内容来匹配其它模式(方向: 后 ---> 前) === //
// === 1 正前瞻: 匹配单词abc, 且紧随后的单词为fg --- abc(?=fg)  === //
// === 2 反前瞻: 匹配单词abc, 且紧随后的单词不为fg --- abc(?!fg) === //
// === 3 正后顾: 匹配单词fg, 且前面为abc --- (?<=fg)abc  === //
// === 4 反后顾: 匹配单词fg, 且前面不为abc --- (?<!fg)abc === //

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/garven/codetest/realProject/myblog/client/lib/reg.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/simp-trad.js":
/*!*********************************!*\
  !*** ./client/lib/simp-trad.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonp = __webpack_require__(/*! ../Admin/fetch/jsonp */ "./client/Admin/fetch/jsonp.js");

var _jsonp2 = _interopRequireDefault(_jsonp);

var _axios = __webpack_require__(/*! ../Admin/fetch/axios */ "./client/Admin/fetch/axios.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function keydownHandle(e, data) {
  var target = e.target;
  var value = target.value;

  if (target.tagName.toLowerCase() === 'input' && target.type === 'text' || target.tagName.toLowerCase() === 'textarea') {
    var SIMP = data.SIMP;
    var TRAD = data.TRAD;
    var ret = '';

    for (var i = 0; i < value.length; ++i) {
      ret += SIMP.indexOf(value[i]) > -1 ? TRAD.charAt(SIMP.indexOf(value[i])) : value[i];
    }

    target.value = ret;
  }
}

var _default = function _default(isOpen) {

  if (!isOpen) {
    window.jp_dictionary = null;
    return;
  }

  window.jp_dictionary = {

    getDictionary: function getDictionary(data) {
      document.addEventListener('input', function (e) {
        keydownHandle(e, data);
      }, false);
    }

  };

  _jsonp2.default.get(_axios.api.getDictionary(), 'dictionary');
  _jsonp2.default.delete('dictionary');
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(keydownHandle, 'keydownHandle', '/Users/garven/codetest/realProject/myblog/client/lib/simp-trad.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/lib/simp-trad.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/type.js":
/*!****************************!*\
  !*** ./client/lib/type.js ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * typeof: 可判断基本类型(null 为 'object') / 引用类型中的'function'
 * instanceof: 可判断数组，自定义对象, 但引用类型 instanceof Object 都为true
 * Object.prototype.toString.call(): [object Constructor]: 最保险
 */

var type = {};

var isType = function isType(target, constructor) {
  return Object.prototype.toString.call(target) === '[object ' + constructor + ']';
};

/**
 * 判断是否为对象
 * @param {Object} obj - 判断参数
 * @return {Boolean}
 */
type.isObject = function (obj) {
  return isType(obj, 'Object');
};

type.isBelongsToObject = function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj);
};

type.isPlainObject = function (obj) {
  return isType(obj, 'Object') && (0, _stringify2.default)(obj) === '{}';
};

type.isArray = function (arr) {
  return Array.isArray(arr) || isType(arr, 'Array');
};

type.isDate = function (date) {
  return isType(date, 'Date');
};

var _default = type;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(type, 'type', '/Users/garven/codetest/realProject/myblog/client/lib/type.js');
  reactHotLoader.register(isType, 'isType', '/Users/garven/codetest/realProject/myblog/client/lib/type.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/lib/type.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/validator.js":
/*!*********************************!*\
  !*** ./client/lib/validator.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validator = exports.strategies = undefined;

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _reg = __webpack_require__(/*! ./reg */ "./client/lib/reg.js");

var _reg2 = _interopRequireDefault(_reg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === 策略模式: 定义一系列的算法，把它们一个个封装起来, 将算法的使用和算法的实现分离开来 === //
// === 1 组成: === //
// === 1.1 策略类: 封装了具体的算法, 负责具体的计算过程 === //
// === 1.2 环境类Context:  === //
// === 1.2.a 接受客户的请求 === //
// === 1.2.b 把请求委托给某一个策略类 === //
// === 1.2.c Context要维持对某个策略对象的引用 === //

// === 多态: 每个策略对象负责的算法已被各自封装在对象内部。当我们对这些策略对象发出请求时，它们会返回不同的计算结果，这正是对象多态性的体现 === //

// 把检验逻辑封装成策略对象
var strategies = exports.strategies = {
  isEmpty: function isEmpty(value, errMsg) {
    return value === '' ? errMsg : false;
  },
  isPhone: function isPhone(value, errMsg) {
    return _reg2.default.phone.test(value) ? true : errMsg;
  },
  isMail: function isMail(value, errMsg) {
    return _reg2.default.mail.test(value) ? true : errMsg;
  },
  isDate: function isDate(value, errMsg) {
    return _reg2.default.date.test(value) ? true : errMsg;
  },
  isLegal: function isLegal(value, errMsg) {
    return _reg2.default.legal.test(value) ? true : errMsg;
  },
  isNum: function isNum(value, errMsg) {
    return _reg2.default.num.test(value) ? true : errMsg;
  },
  minLength: function minLength(value, length, errMsg) {
    return value.length < length ? errMsg : true;
  },
  maxLength: function maxLength(value, length, errMsg) {
    return value.length > length ? errMsg : true;
  }

  /**
   * Validator 类在这里作为context，负责接收用户的请求并委托给strategy对象
   */
};
var Validator = exports.Validator = function () {
  function Validator() {
    (0, _classCallCheck3.default)(this, Validator);

    this.cache = [];
  }

  /**
   * 添加检验规则
   * @param {*} value - 待检验的值
   * @param {Object[]} rules - 检验规则数组
   * @param {String} rules[].strategy - 策略
   * @param {String} rules[].errMsg - 错误提示信息
   * @return {Object} - validator实例
   */


  (0, _createClass3.default)(Validator, [{
    key: 'add',
    value: function add(value, rules) {

      var self = this;

      for (var i = 0, rule; rule = rules[i++];) {

        (function (rule) {

          var strategyArr = rule.strategy.split(':');
          var errMsg = rule.errMsg;

          self.cache.push(function () {

            var stratety = strategyArr.shift();
            strategyArr.unshift(value);
            strategyArr.push(errMsg);

            return strategies[stratety].apply(strategies, (0, _toConsumableArray3.default)(strategyArr));
          });
        })(rule);
      }

      return this;
    }

    /**
     * 开始检验
     * @return {String|Boolean} 检验结果
     */

  }, {
    key: 'start',
    value: function start() {

      for (var i = 0, validatorFn; validatorFn = this.cache[i++];) {

        var errMsg = validatorFn();

        if (typeof errMsg === 'string') {
          return errMsg;
        }
      }
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Validator;
}();

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(strategies, 'strategies', '/Users/garven/codetest/realProject/myblog/client/lib/validator.js');
  reactHotLoader.register(Validator, 'Validator', '/Users/garven/codetest/realProject/myblog/client/lib/validator.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

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

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js");


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ })

}]);
//# sourceMappingURL=post-ed416e2d4a1a10d2c7b7.js.map
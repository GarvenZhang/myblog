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

/***/ }),

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

/***/ "./client/Admin/containers/GeneralCatalogue/index.css":
/*!************************************************************!*\
  !*** ./client/Admin/containers/GeneralCatalogue/index.css ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"general-catalogue-wrap":"general-catalogue-wrap_25vrX","select":"select_2YgXP","table-hd":"table-hd_jx8nH","table-tr":"table-tr_2oKxC","table-td":"table-td_2Nn21","table-bd":"table-bd_BKXrc"};

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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Slidebar = __webpack_require__(/*! ../../components/Slidebar */ "./client/Admin/components/Slidebar/index.jsx");

var _Slidebar2 = _interopRequireDefault(_Slidebar);

var _Icon = __webpack_require__(/*! ../../components/Icon */ "./client/Admin/components/Icon/index.jsx");

var _TipsBar = __webpack_require__(/*! ../../components/TipsBar */ "./client/Admin/components/TipsBar/index.jsx");

var _TipsBar2 = _interopRequireDefault(_TipsBar);

var _ArticleList = __webpack_require__(/*! ../../../Admin/redux/ArticleList */ "./client/Admin/redux/ArticleList.js");

var _curring = __webpack_require__(/*! ../../../lib/curring */ "./client/lib/curring.js");

var _curring2 = _interopRequireDefault(_curring);

var _insertionSort = __webpack_require__(/*! ./insertionSort */ "./client/Admin/containers/GeneralCatalogue/insertionSort.js");

var _mergeSort = __webpack_require__(/*! ./mergeSort */ "./client/Admin/containers/GeneralCatalogue/mergeSort.js");

var _quickSort = __webpack_require__(/*! ./quickSort */ "./client/Admin/containers/GeneralCatalogue/quickSort.js");

var _selectSort = __webpack_require__(/*! ./selectSort */ "./client/Admin/containers/GeneralCatalogue/selectSort.js");

var _shellSort = __webpack_require__(/*! ./shellSort */ "./client/Admin/containers/GeneralCatalogue/shellSort.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/containers/GeneralCatalogue/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var GeneralCatalogue = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.allReducer;
}, (0, _extends3.default)({}, _ArticleList.actions)), _dec(_class = function (_Component) {
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
    key: 'searchHandle',
    value: function searchHandle() {}
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: _index2.default['general-catalogue-page'] },
        _react2.default.createElement(_TipsBar2.default, null),
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
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_selectSort.selectSort, ['title']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u53D1\u8868\u65E5\u671F',
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_quickSort.quickSort, ['pubtime']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u70B9\u8D5E\u6570',
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_shellSort.shellSort, ['liked_num']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u8BC4\u8BBA\u6570',
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_mergeSort.mergeSort, ['comment_num']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u6D4F\u89C8\u6570',
                    _react2.default.createElement(_Icon.SortIcon, { sort: this.sortHandle(_insertionSort.insertionSort, ['read_num']) })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['table-td'] },
                    '\u7EFC\u5408'
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
                      item.liked_num
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: _index2.default['table-td'] },
                      item.comment_num
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: _index2.default['table-td'] },
                      item.read_num
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: _index2.default['table-td'] },
                      parseFloat((item.liked_num * 0.7 + item.comment_num * 0.3) / item.read_num).toFixed(3)
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
}(_react.Component)) || _class);
GeneralCatalogue.defaultProps = {
  data: [{
    title: '',
    pubtime: '',
    liked_num: 0,
    read_num: 0,
    commentNum: 0
  }]
};
exports.default = GeneralCatalogue;


if (_config2.default.ISDEV) {
  GeneralCatalogue.propTypes = {
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      title: _propTypes2.default.string.isRequired,
      pubtime: _propTypes2.default.string.isRequired,
      liked_num: _propTypes2.default.number.isRequired,
      commentNum: _propTypes2.default.number.isRequired,
      read_num: _propTypes2.default.number.isRequired
    }).isRequired).isRequired
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GeneralCatalogue, 'GeneralCatalogue', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/GeneralCatalogue/insertionSort.js":
/*!*******************************************************************!*\
  !*** ./client/Admin/containers/GeneralCatalogue/insertionSort.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertionSort = insertionSort;

var _deepCopy = __webpack_require__(/*! ../../../lib/deepCopy */ "./client/lib/deepCopy.js");

var _deepCopy2 = _interopRequireDefault(_deepCopy);

var _sort = __webpack_require__(/*! ./sort */ "./client/Admin/containers/GeneralCatalogue/sort.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * // === 插入排序 === //
 * // === 思想：[a, b, c, d, e], 外循环从b开始，内循环比较b之前的元素，若a比b大，a插入到b的位置，b之前的元素都比较完(内循环完)，b插入到前面所比较的元素中最小的位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */
function insertionSort(arr, property, sequence) {

  arr = (0, _deepCopy2.default)(arr);

  // 判断函数
  var judge = function judge(sequence, property, arr, inner, tmp) {
    if (sequence === true) {
      return inner > 0 && (0, _sort.findProperty)(arr[inner - 1], property) > (0, _sort.findProperty)(tmp, property);
    } else {
      return inner > 0 && (0, _sort.findProperty)(arr[inner - 1], property) < (0, _sort.findProperty)(tmp, property);
    }
  };

  var outer = void 0;
  var inner = void 0;
  var len = arr.length;
  var tmp = void 0;

  // 从第二个开始遍历
  // 先把遍历的第一个元素用变量存起来
  for (outer = 1; outer < len; ++outer) {
    inner = outer;
    tmp = arr[outer];

    // 与前一个比较, 若比它小, 则它移到现在的位置上
    // 下边再向前移动, 继续比较
    // 直到条件不成立则不用继续比较, 因为前面都是已经排好相对顺序的
    while (judge(sequence, property, arr, inner, tmp)) {
      arr[inner] = arr[inner - 1];
      --inner;
    }

    // 最后把 tmp 插入到最后 下标inner 停止的位置
    arr[inner] = tmp;
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

  reactHotLoader.register(insertionSort, 'insertionSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/insertionSort.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

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
 * // === 思想：[a, b, c, d ,e], 用分治划出左右数组，递归直到长度为1；比如a与b比较，c与d比较，排序后放入新数组返回，之后，cd与e比较，ab与cde比较 === //
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

/***/ }),

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
 * f[n] 为平分这个数组时所花的时间
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

/***/ }),

/***/ "./client/Admin/containers/GeneralCatalogue/selectSort.js":
/*!****************************************************************!*\
  !*** ./client/Admin/containers/GeneralCatalogue/selectSort.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSort = selectSort;

var _deepCopy = __webpack_require__(/*! ../../../lib/deepCopy */ "./client/lib/deepCopy.js");

var _deepCopy2 = _interopRequireDefault(_deepCopy);

var _sort = __webpack_require__(/*! ./sort */ "./client/Admin/containers/GeneralCatalogue/sort.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
      return (0, _sort.findProperty)(arr[inner], property).localeCompare((0, _sort.findProperty)(arr[target], property)) < 0;
    } else {
      return (0, _sort.findProperty)(arr[inner], property).localeCompare((0, _sort.findProperty)(arr[target], property)) > 0;
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
      (0, _sort.swap)(arr, target, outer);
    }
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

  reactHotLoader.register(selectSort, 'selectSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/selectSort.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/Admin/containers/GeneralCatalogue/shellSort.js":
/*!***************************************************************!*\
  !*** ./client/Admin/containers/GeneralCatalogue/shellSort.js ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shellSort = shellSort;

var _deepCopy = __webpack_require__(/*! ../../../lib/deepCopy */ "./client/lib/deepCopy.js");

var _deepCopy2 = _interopRequireDefault(_deepCopy);

var _sort = __webpack_require__(/*! ./sort */ "./client/Admin/containers/GeneralCatalogue/sort.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 希尔
 * // === 思想：[a, b, c, d, e], 先计算出动态间隔, 比如h = h * 3 + 1，然后外循环从h开始逐一遍历，内循环将外循环选定的元素及其前h位置的元素比较，当外循环遍历到最后时，再次动态计算h为(h - 1) / 3, 即以更小的间隔重复刚才的操作，直到h为1 === //
 * // === 优势：较快地将较远的元素归到正确的位置 === //
 * @param {Array} arr - 数组
 * @param {Boolean} sequence - true为正序，false为倒序
 * @param {Array} property - 排序时比较的属性名
 * @return {Array}
 */

function shellSort(arr, property, sequence) {

  arr = (0, _deepCopy2.default)(arr);

  /**
   * 判断函数
   */
  var judge = function judge(inner, h, sequence, property) {
    if (sequence === true) {
      return (0, _sort.findProperty)(arr[inner], property) < (0, _sort.findProperty)(arr[inner - h], property);
    } else {
      return (0, _sort.findProperty)(arr[inner], property) > (0, _sort.findProperty)(arr[inner - h], property);
    }
  };

  var len = arr.length;
  var h = 1;

  // 升级版的插入排序, 只是将插入排序中每次与前一个比较 改变成 与前h个比较
  // h是希尔排序的关键
  // 能更快地将不正确的元素从较远的地方拉回来
  while (h < len / 3) {
    h = h * 3 + 1;
  }

  while (h >= 1) {

    var outer = void 0;
    var inner = void 0;

    for (outer = h; outer < len; ++outer) {
      for (inner = outer; inner >= h && judge(inner, h, sequence, property); inner -= h) {
        (0, _sort.swap)(arr, inner, inner - h);
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

  reactHotLoader.register(shellSort, 'shellSort', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/shellSort.js');
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
exports.findProperty = exports.swap = undefined;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
var swap = exports.swap = function swap(arr, prev, next) {
  arr[next] = [arr[prev], arr[prev] = arr[next]][0];
};

/**
 * 查找对象属性
 * @param {Object} obj 对象
 * @param {Array} property - 属性为顺序的数组，如：{one: {two: '1'}} 为 ['one', 'two']
 * @private
 * @return {String|Number}
 */
var findProperty = exports.findProperty = function findProperty(obj, property) {
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
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(swap, 'swap', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
  reactHotLoader.register(findProperty, 'findProperty', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/GeneralCatalogue/sort.js');
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
exports.default = _curring;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === 柯里化: 将使用多个参数的一个函数转换成使用一系列使用一个参数的函数的技巧，以达到参数复用的目的 === //
// === 1 思路: 将需要柯里化的函数fn的参数个数保存起来，每次调用只传一个参数，只要传入的参数总个数未达到总个数，就会重复执行curry函数以保存参数，否则执行fn === //
function _curring(fn) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var len = fn.length;

  return function () {
    for (var _len = arguments.length, param = Array(_len), _key = 0; _key < _len; _key++) {
      param[_key] = arguments[_key];
    }

    var _args = args.slice(0).concat(param);

    return _args.length < len ? _curring.call(this, fn, _args) : fn.apply(this, _args);
  };
}

// === 多重箭头函数写法: === //
// === 1 暴露一个名为curry的函数，接受一个参数fn，返回一个名为judge的函数，judge函数接受多个参数，通过rest参数将每次传进来的参数都组合成数组 === //
// === 2 judge函数返回一个三元运算符: 若本次传来的参数个数为fn的个数, 则执行fn；否则，继续返回一个函数，该函数接受一个参数arg，返回judge函数的调用，并将到目前为止目前传进来的参数数组 以及 本次传来的参数传给judge === //
// === 3 参数的积累主要是依靠 rest 参数完成的 === //
var curry = exports.curry = function curry(fn) {
  return judge = function (_judge) {
    function judge() {
      return _judge.apply(this, arguments);
    }

    judge.toString = function () {
      return _judge.toString();
    };

    return judge;
  }(function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length === fn.length() ? fn.apply(undefined, args) : function (arg) {
      return judge.apply(undefined, args.concat([arg]));
    };
  });
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_curring, "_curring", "/Users/garven/codetest/realProject/myblog/client/lib/curring.js");
  reactHotLoader.register(curry, "curry", "/Users/garven/codetest/realProject/myblog/client/lib/curring.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

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
//# sourceMappingURL=general-catalogue-f655ce9601393b06ba29.js.map
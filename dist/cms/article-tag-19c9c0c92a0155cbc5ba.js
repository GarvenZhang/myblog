(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-tag"],{

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

/***/ "./client/Admin/components/Table/index.css":
/*!*************************************************!*\
  !*** ./client/Admin/components/Table/index.css ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tags-table":"tags-table_3NM0z","table-data":"table-data_2R3OU","table-row":"table-row_2C1D2"};

/***/ }),

/***/ "./client/Admin/components/Table/index.jsx":
/*!*************************************************!*\
  !*** ./client/Admin/components/Table/index.jsx ***!
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

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _dec, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Popup = __webpack_require__(/*! ../Popup */ "./client/Admin/components/Popup/index.jsx");

var _Popup2 = _interopRequireDefault(_Popup);

var _Popup3 = __webpack_require__(/*! ../../redux/Popup */ "./client/Admin/redux/Popup.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ./index.css */ "./client/Admin/components/Table/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var update_popup = _Popup3.actions.update_popup;
var Row = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row(props) {
    (0, _classCallCheck3.default)(this, Row);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).call(this, props));

    _this.editHandle = _this.editHandle.bind(_this);
    _this.deleteHandle = _this.deleteHandle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Row, [{
    key: 'editHandle',
    value: function editHandle() {
      this.props.update_popup({
        isOpen: 1,
        header: '请修改:',
        category: 'prompt'
      });
    }
  }, {
    key: 'deleteHandle',
    value: function deleteHandle() {
      this.props.delete_category(this.props.id);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: _index2.default['table-row'] },
        _react2.default.createElement(
          'li',
          { className: _index2.default['table-data'] },
          this.props.id
        ),
        _react2.default.createElement(
          'li',
          { className: _index2.default['table-data'] },
          this.props.name
        ),
        _react2.default.createElement(
          'li',
          { className: _index2.default['table-data'] },
          _react2.default.createElement('span', { className: 'iconfont icon-edit', onClick: this.editHandle }),
          _react2.default.createElement('span', { className: 'iconfont icon-delete', onClick: this.deleteHandle })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Row;
}(_react.Component)) || _class);
Row.defaultProps = {
  id: 0,
  name: ''
};


if (_config2.default.ISDEV) {
  Row.propTypes = {
    id: _propTypes.PropTypes.number.isRequired,
    name: _propTypes.PropTypes.string.isRequired
  };
}

var Table = function (_Component2) {
  (0, _inherits3.default)(Table, _Component2);

  function Table(props) {
    (0, _classCallCheck3.default)(this, Table);
    return (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call(this, props));
  }

  (0, _createClass3.default)(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          tagList = _props.tagList,
          delete_category = _props.delete_category;


      return _react2.default.createElement(
        'div',
        { className: _index2.default['tags-table'] },
        _react2.default.createElement(
          'ul',
          { className: _index2.default['table-head'] },
          _react2.default.createElement(
            'li',
            { className: _index2.default['table-data'] },
            'id'
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['table-data'] },
            '\u6807\u7B7E\u540D'
          ),
          _react2.default.createElement(
            'li',
            { className: _index2.default['table-data'] },
            '\u64CD\u4F5C'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default['table-body'] },
          tagList.map(function (item) {
            return _react2.default.createElement(Row, (0, _extends3.default)({ key: item.id }, item, { delete_category: delete_category }));
          })
        ),
        _react2.default.createElement(_Popup2.default, null)
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Table;
}(_react.Component);

exports.default = Table;


function mapStateToProps(state) {
  return state.PopupReducer;
}

function mapDispatchToProps(dispatch) {
  return {
    update_popup: (0, _redux.bindActionCreators)(update_popup, dispatch)
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(update_popup, 'update_popup', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Table/index.jsx');
  reactHotLoader.register(Row, 'Row', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Table/index.jsx');
  reactHotLoader.register(Table, 'Table', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Table/index.jsx');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Table/index.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/garven/codetest/realProject/myblog/client/Admin/components/Table/index.jsx');
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

/***/ "./client/Admin/containers/ArticleTag/index.css":
/*!******************************************************!*\
  !*** ./client/Admin/containers/ArticleTag/index.css ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"add-wrap":"add-wrap_1FdPU","add-inner":"add-inner_1I2Ns","add-text-wrap":"add-text-wrap_1fxUu","btn-control":"btn-control_2PaN6","rotate":"rotate_1uYfh","text":"text_2xEJN","btn-add":"btn-add_3rRMg"};

/***/ }),

/***/ "./client/Admin/containers/ArticleTag/index.jsx":
/*!******************************************************!*\
  !*** ./client/Admin/containers/ArticleTag/index.jsx ***!
  \******************************************************/
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

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _index = __webpack_require__(/*! ../../components/Slidebar/index */ "./client/Admin/components/Slidebar/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../components/Table/index */ "./client/Admin/components/Table/index.jsx");

var _index4 = _interopRequireDefault(_index3);

var _TipsBar = __webpack_require__(/*! ../../components/TipsBar */ "./client/Admin/components/TipsBar/index.jsx");

var _TipsBar2 = _interopRequireDefault(_TipsBar);

var _ArticleCategory = __webpack_require__(/*! ../../redux/ArticleCategory */ "./client/Admin/redux/ArticleCategory.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _index5 = __webpack_require__(/*! ./index.css */ "./client/Admin/containers/ArticleTag/index.css");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var AdminArticleTag = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    tagList: state.ArticleCategoryReducer.data,
    text: state.ArticleCategoryReducer.text
  };
}, (0, _extends3.default)({}, _ArticleCategory.actions)), _dec(_class = function (_Component) {
  (0, _inherits3.default)(AdminArticleTag, _Component);

  function AdminArticleTag(props) {
    (0, _classCallCheck3.default)(this, AdminArticleTag);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AdminArticleTag.__proto__ || (0, _getPrototypeOf2.default)(AdminArticleTag)).call(this, props));

    _this.changeHandle = _this.changeHandle.bind(_this);
    _this.addHandle = _this.addHandle.bind(_this);

    return _this;
  }

  /**
   * 更新处理
   */


  (0, _createClass3.default)(AdminArticleTag, [{
    key: 'changeHandle',
    value: function changeHandle(e) {

      var text = e.target.value;
      this.props.update_text(text);
    }

    /**
     * 添加处理
     */

  }, {
    key: 'addHandle',
    value: function addHandle() {
      this.props.add_category({
        name: this.props.text
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
            { className: 'admin-article-tag-wrap admin-inner' },
            _react2.default.createElement(
              'div',
              { className: _index6.default["add-wrap"] },
              _react2.default.createElement(
                'div',
                { className: _index6.default["add-inner"] },
                _react2.default.createElement(
                  'div',
                  { className: _index6.default["btn-control"] },
                  '+'
                ),
                _react2.default.createElement(
                  'div',
                  { className: _index6.default[["add-text-wrap"]] },
                  _react2.default.createElement('input', { type: 'text',
                    className: _index6.default["text"],
                    onChange: this.changeHandle,
                    placeholder: '\u6DFB\u52A0\u4E2A\u6807\u7B7E\u5457~~'
                  }),
                  _react2.default.createElement('input', { type: 'button',
                    className: _index6.default["btn-add"],
                    onClick: this.addHandle,
                    value: '\u65B0\u589E'
                  })
                )
              )
            ),
            _react2.default.createElement(_index4.default, { tagList: this.props.tagList, delete_category: this.props.delete_category })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.get_category_list();
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return AdminArticleTag;
}(_react.Component)) || _class);
exports.default = AdminArticleTag;


AdminArticleTag.defualtProps = {
  tagList: []
};

if (_config2.default.ISDEV) {
  AdminArticleTag.propTypes = {
    tagList: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AdminArticleTag, 'AdminArticleTag', '/Users/garven/codetest/realProject/myblog/client/Admin/containers/ArticleTag/index.jsx');
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
//# sourceMappingURL=article-tag-19c9c0c92a0155cbc5ba.js.map
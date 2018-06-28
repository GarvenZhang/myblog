webpackHotUpdate("index",{

/***/ "./client/User/containers/Home/index.jsx":
/*!***********************************************!*\
  !*** ./client/User/containers/Home/index.jsx ***!
  \***********************************************/
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

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");

var _Popup = __webpack_require__(/*! ../../components/Popup */ "./client/User/components/Popup/index.jsx");

var _Popup2 = _interopRequireDefault(_Popup);

var _index = __webpack_require__(/*! ../../components/HomeList/index */ "./client/User/components/HomeList/index.jsx");

var _Header = __webpack_require__(/*! ../../components/Header */ "./client/User/components/Header/index.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Bg = __webpack_require__(/*! ../../components/Bg */ "./client/User/components/Bg/index.jsx");

var _Bg2 = _interopRequireDefault(_Bg);

var _Nav = __webpack_require__(/*! ../../components/Nav */ "./client/User/components/Nav/index.jsx");

var _Nav2 = _interopRequireDefault(_Nav);

var _LoadMore = __webpack_require__(/*! ../../components/LoadMore */ "./client/User/components/LoadMore/index.jsx");

var _LoadMore2 = _interopRequireDefault(_LoadMore);

var _ArticleList = __webpack_require__(/*! ../../redux/reducers/ArticleList */ "./client/User/redux/reducers/ArticleList.js");

var _debounce = __webpack_require__(/*! ../../../lib/debounce */ "./client/lib/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _detectWebp = __webpack_require__(/*! ../../../lib/detectWebp */ "./client/lib/detectWebp.js");

var _detectWebp2 = _interopRequireDefault(_detectWebp);

var _cookie = __webpack_require__(/*! ../../../lib/cookie */ "./client/lib/cookie.js");

__webpack_require__(/*! ./index.css */ "./client/User/containers/Home/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var get_latest_list = _ArticleList.actions.get_latest_list;

// === 生命周期: === //
// === 1 挂载或卸载: === //
// === 1.1 constructor(props): 初始化组件, 绑定函数到this === //
// === 1.2 componentWillMount(): 挂载前 === //
// === 1.3 render(): 将虚拟dom插到到真实dom === //
// === 1.4 componentDidMount(): 挂载后, 进行异步请求等 === //
// === 1.5 componentWillUnMount(): 卸载前,  === //
// === 2 更新: === //
// === 2.1 componentWillReceiveProps(nextProps) === //
// === 2.2 shouldComponentUpdate(nextProps, nextState): 判断是否应该更新 === //
// === 2.3 componentWillUpdate(nextProps, nextState): 更新前 === //
// === 2.4 render(): 将虚拟dom中改变了的反映到真实dom === //
// === 2.5 componentDidUpdate(): 更新后 === //

// === 装饰器: === //
// ===  === //

var Home = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.loadMoreHandle = _this.loadMoreHandle.bind(_this);
    _this.debounce = null;

    return _this;
  }

  // === 提供默认值，当父组件没有提供相应的props时就使用此 === //


  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.debounce = (0, _debounce2.default)(this.loadMoreHandle, 100).bind(this);

      if (typeof window !== 'undefined') {

        (0, _detectWebp2.default)('alpha', function (feature, isSupport) {

          // === 二级域名cookie共享： === //
          // === cookie只能读写大于等于自己的域，因此同一级域名间的cookie共享需要将cookie设置到更高的域中 === //
          if (isSupport) {
            _cookie.Cookies.set('supportWebp', true, {
              maxAge: 60 * 60 * 24 * 7,
              domain: '.hellojm.cn'
            });
          } else {
            _cookie.Cookies.set('supportWebp', false, {
              domain: '.hellojm.cn'
            });
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'home-page' },
        _react2.default.createElement(_Bg2.default, null),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'main',
          { className: 'main' },
          _react2.default.createElement(_Nav2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'latest-article-block nav-details-item' },
            _react2.default.createElement(
              'div',
              { className: 'nav-details-inner', ref: function ref(div) {
                  return _this2.$scrollWrap = div;
                } },
              _react2.default.createElement(
                'ul',
                { className: 'article-list latest--list' },
                this.props.data.map(function (item) {
                  return _react2.default.createElement(_index.LatestItem, (0, _extends3.default)({}, item, { key: item.id }));
                }),
                _react2.default.createElement(_LoadMore2.default, {
                  isEndPage: this.props.isEndPage,
                  loadMoreRef: function loadMoreRef(area) {
                    return _this2.$loadmore = area;
                  }
                })
              )
            )
          )
        ),
        _react2.default.createElement(_Popup2.default, null)
      );
    }

    /**
     * 加载更多
     * // === 判断条件：以底部的下拉提示框为目标，判断它 距离可视区顶部的距离(getBoundingClientRect().top()) 以及 可视区高度，若小于则证明出现在了可视区，此时应该去请求数据 === //
     */

  }, {
    key: 'loadMoreHandle',
    value: function loadMoreHandle() {

      var sHeight = window.screen.height;
      var top = this.$loadmore.getBoundingClientRect().top;

      if (top < sHeight && !this.props.isEndPage) {
        this.props.get_latest_list(this.props.pageNum + 1, this.props.perPage);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      // 第一页的数据
      if (this.props.data.length === 0) {
        this.props.get_latest_list(0, 10);
      }
      this.$scrollWrap.addEventListener('scroll', this.debounce, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.$scrollWrap.removeEventListener('scroll', this.debounce, false);
      this.debounce = null;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Home;
}(_react.Component)) || _class);

// === propTypes 会在 defaultProps 之后执行，因此对 defaultProps 也会检查 === //

Home.defaultProps = {
  data: [{}],
  pageNum: 0,
  perPage: 10,
  totalCount: 10,
  isEndPage: false
};
exports.default = Home;
if (true) {
  Home.propTypes = {
    data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    pageNum: _propTypes2.default.number.isRequired,
    perPage: _propTypes2.default.number.isRequired,
    totalCount: _propTypes2.default.number.isRequired,
    isEndPage: _propTypes2.default.bool.isRequired
  };
}

function mapStateToProps(state) {
  return state.latestReducer;
}

function mapDispatchToProps(dispatch) {
  return {
    get_latest_list: (0, _redux.bindActionCreators)(get_latest_list, dispatch)
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get_latest_list, 'get_latest_list', '/Users/garven/codetest/realProject/myblog/client/User/containers/Home/index.jsx');
  reactHotLoader.register(Home, 'Home', '/Users/garven/codetest/realProject/myblog/client/User/containers/Home/index.jsx');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/garven/codetest/realProject/myblog/client/User/containers/Home/index.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/garven/codetest/realProject/myblog/client/User/containers/Home/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.fdcd07c90d9f87bb99b9.hot-update.js.map
webpackHotUpdate("cms",{

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _asyncLoad = __webpack_require__(/*! ./asyncLoad */ "./client/Admin/router/asyncLoad.js");

var _asyncLoad2 = _interopRequireDefault(_asyncLoad);

var _index = __webpack_require__(/*! ../../Admin/containers/Login/index */ "./client/Admin/containers/Login/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../containers/NoMatch/index */ "./client/Admin/containers/NoMatch/index.jsx");

var _index4 = _interopRequireDefault(_index3);

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
    _reactRouterDom.HashRouter,
    null,
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

/***/ })

})
//# sourceMappingURL=cms.bfdd0b6c0f39ffb56bc5.hot-update.js.map
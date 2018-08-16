(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils"],{

/***/ "./client/User/assets/font/iconfont.css":
/*!**********************************************!*\
  !*** ./client/User/assets/font/iconfont.css ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/User/assets/style/reset.css":
/*!********************************************!*\
  !*** ./client/User/assets/style/reset.css ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/User/components/Bg/bst.js":
/*!******************************************!*\
  !*** ./client/User/components/Bg/bst.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bst = __webpack_require__(/*! ../../../lib/bst */ "./client/lib/bst.js");

var _bst2 = _interopRequireDefault(_bst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function setWidth(tree) {
  if (tree === null) {
    return 0;
  }

  if (tree.width > 0) {
    return tree.width;
  }

  if (!(tree.left || tree.right)) {
    tree.width = 60;
    return 60;
  }

  tree.width = setWidth(tree.left) + setWidth(tree.right) + 45;
  return tree.width;
}

var curY = 100;

function setPosition(tree, left, right) {
  if (tree === null) {
    return;
  }

  var x = left + right >> 1;
  tree.position = {
    x: x,
    y: curY
  };

  curY += 90;

  setPosition(tree.left, x - tree.width / 2, x);
  setPosition(tree.right, x, x + tree.width / 2);

  curY -= 90;
}

function draw(tree, ctx) {
  var predecessor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (tree === null) {
    return;
  }

  var x = tree.position.x;
  var y = tree.position.y;

  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);

  if (predecessor) {
    ctx.moveTo(x, y - 30);
    ctx.lineTo(predecessor.position.x, predecessor.position.y + 30);
  }

  ctx.stroke();

  ctx.fillText(tree.data, x - 12, y + 12);
  draw(tree.left, ctx, tree);
  draw(tree.right, ctx, tree);
}

var inOrder = '';
var preOrder = '';
var postOrder = '';

function writeText(ctx, bst) {
  ctx.font = '16px cursive';

  bst.inOrder(bst.root, function (data) {
    return inOrder += data + ' ';
  });
  bst.preOrder(bst.root, function (data) {
    return preOrder += data + ' ';
  });
  bst.postOrder(bst.root, function (data) {
    return postOrder += data + ' ';
  });

  ctx.fillText(inOrder, 100, 400);
  ctx.fillText(preOrder, 50, 450);
  ctx.fillText(postOrder, 80, 500);
}

var _default = function _default(ctx) {
  var bst = new _bst2.default();
  bst.insert(77);
  bst.insert(34);
  bst.insert(9);
  bst.insert(120);
  bst.insert(83);
  bst.insert(11);
  bst.insert(56);
  bst.insert(2);
  bst.insert(98);

  setWidth(bst.root);
  setPosition(bst.root, 0, 600);

  ctx.strokeStyle = 'rgba(0, 249, 0, .2)';
  ctx.fillStyle = 'rgba(0, 249, 0, .2)';
  ctx.font = '24px cursive';
  ctx.textAligin = 'center';

  draw(bst.root, ctx);

  writeText(ctx, bst);
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(setWidth, 'setWidth', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/bst.js');
  reactHotLoader.register(curY, 'curY', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/bst.js');
  reactHotLoader.register(setPosition, 'setPosition', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/bst.js');
  reactHotLoader.register(draw, 'draw', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/bst.js');
  reactHotLoader.register(inOrder, 'inOrder', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/bst.js');
  reactHotLoader.register(preOrder, 'preOrder', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/bst.js');
  reactHotLoader.register(postOrder, 'postOrder', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/bst.js');
  reactHotLoader.register(writeText, 'writeText', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/bst.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/bst.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Bg/fibonacci.js":
/*!************************************************!*\
  !*** ./client/User/components/Bg/fibonacci.js ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fibonacci = __webpack_require__(/*! ../../../lib/fibonacci */ "./client/lib/fibonacci.js");

var _fibonacci2 = _interopRequireDefault(_fibonacci);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(n) {
  var ctx = this.ctx;

  // ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height)

  for (var i = 1; i < n; ++i) {
    var len = _fibonacci2.default.recurse(i);

    // ctx.strokeRect(0, 0, len, len)

    ctx.strokeStyle = 'rgba(0, 249, 0, .2)';
    ctx.beginPath();
    ctx.arc(len, 0, len, Math.PI / 2, Math.PI);
    ctx.stroke();

    ctx.translate(len, len);
    ctx.rotate(3 * Math.PI / 2);
  }
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/fibonacci.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Bg/index.css":
/*!*********************************************!*\
  !*** ./client/User/components/Bg/index.css ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bg-wrap":"bg-wrap_1ryLK"};

/***/ }),

/***/ "./client/User/components/Bg/index.jsx":
/*!*********************************************!*\
  !*** ./client/User/components/Bg/index.jsx ***!
  \*********************************************/
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

var _fibonacci = __webpack_require__(/*! ./fibonacci */ "./client/User/components/Bg/fibonacci.js");

var _fibonacci2 = _interopRequireDefault(_fibonacci);

var _bst = __webpack_require__(/*! ./bst */ "./client/User/components/Bg/bst.js");

var _bst2 = _interopRequireDefault(_bst);

var _index = __webpack_require__(/*! ./index.css */ "./client/User/components/Bg/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Bg = function (_Component) {
  (0, _inherits3.default)(Bg, _Component);

  function Bg(props) {
    (0, _classCallCheck3.default)(this, Bg);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Bg.__proto__ || (0, _getPrototypeOf2.default)(Bg)).call(this, props));

    _this.ctx = null;
    return _this;
  }

  (0, _createClass3.default)(Bg, [{
    key: 'sizeHandle',
    value: function sizeHandle() {
      this.$canvas.width = document.body.clientWidth;
      this.$canvas.height = document.body.clientHeight;

      this.ctx.save();

      this.ctx.translate(0, 0);
      (0, _bst2.default)(this.ctx);

      this.ctx.restore();

      this.ctx.translate(500, 200);
      _fibonacci2.default.call(this, 15);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: _index2.default['bg-wrap'] },
        _react2.default.createElement('canvas', { ref: function ref($canvas) {
            return _this2.$canvas = $canvas;
          } })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ctx = this.$canvas.getContext('2d');

      if (this.ctx) {
        this.sizeHandle();

        window.addEventListener('size', this.sizeHandle.bind(this), false);
      }
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Bg;
}(_react.Component);

var _default = Bg;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bg, 'Bg', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Bg/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Comment/github-default-avatar.png":
/*!******************************************************************!*\
  !*** ./client/User/components/Comment/github-default-avatar.png ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkCAIAAADxLsZiAAAF70lEQVR4nOzXwY3bMAAF0ThQJS7K5eigclSUamAJOQTINcBil5Q97zXAD9AYU9sY4xfAp/u9egDADGIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckbNNOuo5z2lnTPPfX6gnfyR3dnzv6Mi87IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgYVs94L1dx7l6Av/hjvjLyw5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyDhMcZYvYG7uI5z9YTv99xfqydwC152QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2Q8BhjzDnpOs45BwHv5bm/JpyyTTiDNzLnZzeNv1j+8RkLJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJ2+oB3Mt1nKsnwI94jDFWb+AuPrJ0z/21egK34DMWSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IeIwxVm8A+HFedkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QMKfAAAA//+n4Cx9wpUIdQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./client/User/components/Comment/index.css":
/*!**************************************************!*\
  !*** ./client/User/components/Comment/index.css ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"comment-wrap":"comment-wrap_1Knl9","form-comment":"form-comment_10r1a","form-hd":"form-hd_jBxmo","info":"info_3JiSG","avatar":"avatar_-JgDG","name":"name_OlkLi","btn-post":"btn-post_30SuH","link":"link_2K7E1","link--logout":"link--logout_3gaYw","form-bd":"form-bd_3ey4E","textarea":"textarea_1O2fL","comment-item":"comment-item_8oFTT","comment-hd":"comment-hd_2pzCX","username":"username_2ns4e","btn-like":"btn-like_yLeoP","time":"time_2hGbZ","liked-num":"liked-num_3V0wb","icon--liked":"icon--liked_UeU7P","icon--unliked":"icon--unliked_2F635","btn-reply":"btn-reply_2YVWF","to-name":"to-name_1yHGk","comment-bd":"comment-bd_kCGfs","content":"content_2ftMJ"};

/***/ }),

/***/ "./client/User/components/Comment/index.jsx":
/*!**************************************************!*\
  !*** ./client/User/components/Comment/index.jsx ***!
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

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _User = __webpack_require__(/*! ../../redux/User */ "./client/User/redux/User.js");

var _Iframe = __webpack_require__(/*! ../../redux/Iframe */ "./client/User/redux/Iframe.js");

var _Comment = __webpack_require__(/*! ../../redux/Comment */ "./client/User/redux/Comment.js");

var _Popup = __webpack_require__(/*! ../../redux/Popup */ "./client/User/redux/Popup.js");

var _datetime = __webpack_require__(/*! ../../../lib/datetime */ "./client/lib/datetime.js");

var _datetime2 = _interopRequireDefault(_datetime);

var _iterator = __webpack_require__(/*! ../../../lib/iterator */ "./client/lib/iterator.js");

var _Img = __webpack_require__(/*! ../Img */ "./client/User/components/Img/index.jsx");

var _Img2 = _interopRequireDefault(_Img);

var _index = __webpack_require__(/*! ./index.css */ "./client/User/components/Comment/index.css");

var _index2 = _interopRequireDefault(_index);

var _githubDefaultAvatar = __webpack_require__(/*! ./github-default-avatar.png */ "./client/User/components/Comment/github-default-avatar.png");

var _githubDefaultAvatar2 = _interopRequireDefault(_githubDefaultAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var get_user = _User.actions.get_user,
    logout = _User.actions.logout;
var send_message = _Iframe.actions.send_message;

// === sessionStorage: 会话级别的浏览器存储 === //
// === 1 特点：5M左右, 仅存在客户端, 当前tab关闭后消失 === //
// === 2 使用：表单信息的维护(防止页面 刷新后/跳转后 已填写的表单数据丢失)，是否支持webp等 === //

var Comment = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.UserReducer;
}, { get_user: get_user, logout: logout }), _dec2 = (0, _reactRedux.connect)(function (state) {
  return state.IframeReducer;
}, { send_message: send_message }), _dec3 = (0, _reactRedux.connect)(function (state) {
  return state.CommentReducer;
}, (0, _extends3.default)({}, _Comment.actions)), _dec4 = (0, _reactRedux.connect)(function (state) {
  return {
    user_id: state.UserReducer.id
  };
}), _dec5 = (0, _reactRedux.connect)(null, (0, _extends3.default)({}, _Popup.actions)), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = function (_Component) {
  (0, _inherits3.default)(Comment, _Component);

  function Comment(props) {
    (0, _classCallCheck3.default)(this, Comment);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Comment.__proto__ || (0, _getPrototypeOf2.default)(Comment)).call(this, props));

    _this.state = {
      location: ''
    };

    _this.submitHandle = _this.submitHandle.bind(_this);
    _this.infoHandle = _this.infoHandle.bind(_this);
    _this.changeHandle = _this.changeHandle.bind(_this);
    _this.replyHandle = _this.replyHandle.bind(_this);
    _this.likedHandle = _this.likedHandle.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Comment, [{
    key: 'infoHandle',
    value: function infoHandle() {

      switch (this.props.role) {

        case -1:
          return _react2.default.createElement(
            'a',
            { href: _config2.default.SSO_DOMAIN + '?from=' + this.state.location, className: _index2.default['link'] },
            '\u767B\u5F55\u540E\u53EF\u8BC4\u8BBA'
          );

        default:
          return _react2.default.createElement(
            'div',
            { className: _index2.default['info'] },
            _react2.default.createElement(_Img2.default, { src: this.props.avatar_url, className: _index2.default['avatar'] }),
            _react2.default.createElement(
              'span',
              { className: _index2.default['name'] },
              this.props.name
            ),
            _react2.default.createElement(
              'span',
              { onClick: this.props.logout, className: _index2.default['link--logout'] },
              '\u767B\u51FA'
            )
          );

      }
    }

    /**
     * change处理函数
     */

  }, {
    key: 'changeHandle',
    value: function changeHandle(e) {
      this.props.update_content(e.target.value);
    }

    /**
     * 回复处理
     */

  }, {
    key: 'replyHandle',
    value: function replyHandle(e) {

      var target = e.target;
      var from_uid = target.getAttribute('data-from-uid');

      this.props.update_to_user(parseInt(from_uid));
    }

    /**
     * 点赞处理
     */

  }, {
    key: 'likedHandle',
    value: function likedHandle(e) {
      var _this2 = this;

      if (!window.localStorage.getItem('access_token')) {
        return this.props.update_popup({
          isOpen: 1,
          header: '提示:',
          content: '请先登录'
        });
      }

      // === target 与 currentTarget: === //
      // === 1 currentTarget: 绑定事件的对象, 若想要获取的目标元素有子元素, 最好对目标元素进行事件绑定并通过 currentTarget 获取 === //
      // === 2 target: 触发事件的对象, 如有嵌套的div，对父级div绑定click事件，当点击子div时，currentTarget为父div，target为子div === //

      var target = e.currentTarget;
      var has_liked = target.getAttribute('data-has-liked');
      var comment_id = parseInt(target.parentNode.parentNode.getAttribute('data-comment-id'));

      // 没有点赞过的情况
      if (has_liked === 'false') {

        this.props.add_liked({
          type: 1,
          status: 1,
          comment_id: parseInt(comment_id)
        });

        return;
      }

      // 点赞过的情况

      // 找出liked_id
      var liked_id = void 0;
      var liked_status = void 0;
      this.props.data.forEach(function (outer) {
        if (parseInt(comment_id) === outer.id) {
          outer.liked.forEach(function (inner) {
            if (inner.user_id === _this2.props.user_id) {
              liked_id = inner.id;
              liked_status = inner.status === 1 ? 0 : 1;
            }
          });
        }
      });

      if (!liked_id && !liked_status) {
        return;
      }

      this.props.update_liked({
        id: liked_id,
        status: liked_status,
        comment_id: comment_id
      });
    }

    /**
     * 发表评论处理函数
     */

  }, {
    key: 'submitHandle',
    value: function submitHandle() {

      if (this.props.role === -1 || this.props.role === 2) {
        return this.props.update_popup({
          isOpen: 1,
          header: '提示:',
          content: '请先登录'
        });
      }

      var content = this.props.content;

      // to_uid
      var to_uid = 0;
      if (/^@(\w+?):/.test(content)) {
        var to_name = RegExp.$1;
        (0, _iterator.stop)(this.props.data, function (item) {
          if (to_name === item.from_name) {
            to_uid = item.from_uid;
            content = content.replace(/^@\w+?:/, '');
            return false;
          }
        });
      }

      var time = _datetime2.default.toRegular(new Date());
      this.props.post_comment({
        article_id: this.props.article_id,
        to_uid: to_uid,
        time: time,
        content: content
      });
    }

    /**
     * 获取点赞数
     */

  }, {
    key: 'getLikedNum',
    value: function getLikedNum(arr) {

      if (!arr) {
        return;
      }

      var num = 0;
      arr.forEach(function (item) {
        if (item.status === 1) {
          ++num;
        }
      });
      return num;
    }

    /**
     * 是否已经点赞过
     */

  }, {
    key: 'hasLiked',
    value: function hasLiked(arr) {
      var _this3 = this;

      if (!arr) {
        return;
      }

      var flag = false;
      arr.forEach(function (item) {
        if (item.user_id === _this3.props.user_id) {
          flag = true;
        }
      });

      return flag;
    }

    /**
     * 点赞状态
     */

  }, {
    key: 'getLikedStatus',
    value: function getLikedStatus(arr) {
      var _this4 = this;

      if (!arr) {
        return;
      }

      var flag = false;
      arr.forEach(function (item) {
        if (item.user_id === _this4.props.user_id && item.status === 1) {
          flag = true;
        }
      });

      return flag;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement(
        'section',
        { className: _index2.default['comment-wrap'] },
        _react2.default.createElement(
          'form',
          { className: '' + _index2.default['form-comment'], onSubmit: this.submitHandle },
          _react2.default.createElement(
            'div',
            { className: _index2.default['form-hd'] },
            _react2.default.createElement('input', {
              type: 'button',
              onClick: this.submitHandle,
              className: _index2.default['btn-post'],
              value: '\u53D1\u8868'
            }),
            this.infoHandle()
          ),
          _react2.default.createElement(
            'div',
            { className: _index2.default['form-bd'] },
            _react2.default.createElement('textarea', {
              className: _index2.default['textarea'],
              name: 'commentContent',
              value: this.props.content,
              placeholder: '\u8BF7\u586B\u5199\u60A8\u7684\u8BC4\u8BBA\u3002(\u5927\u795E\u8BF7\u6012\u55B7^_^)',
              onChange: this.changeHandle })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default['comment-list'] },
          this.props.data.map(function (item, i) {

            return _react2.default.createElement(
              'div',
              { className: _index2.default['comment-item'], key: item.id, 'data-comment-id': item.id },
              _react2.default.createElement(
                'div',
                { className: _index2.default['comment-hd'] },
                _react2.default.createElement(_Img2.default, { src: item.from_avatar_url, alt: '\u5934\u50CF', className: _index2.default['avatar'], defaultSrc: _githubDefaultAvatar2.default }),
                _react2.default.createElement(
                  'span',
                  { className: _index2.default['username'] },
                  item.from_name
                ),
                _react2.default.createElement(
                  'span',
                  { className: _index2.default['time'] },
                  item.time
                ),
                _react2.default.createElement(
                  'span',
                  { className: _index2.default['btn-reply'], 'data-from-uid': item.from_uid, onClick: _this5.replyHandle },
                  '\u56DE\u590D'
                ),
                _react2.default.createElement(
                  'span',
                  { className: _index2.default['btn-like'], 'data-has-liked': _this5.hasLiked(item.liked), onClick: _this5.likedHandle },
                  _this5.getLikedStatus(item.liked) ? _react2.default.createElement(
                    'svg',
                    { t: '1533043872992', className: _index2.default["icon--liked"], viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', 'p-id': '5835', width: '20', height: '20' },
                    _react2.default.createElement('path', { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z', 'p-id': '5836', fill: '#e7d71b' })
                  ) : _react2.default.createElement(
                    'svg',
                    { t: '1533043671931', className: _index2.default["icon--unliked"], viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', 'p-id': '5833', width: '20', height: '20' },
                    _react2.default.createElement('path', { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z', 'p-id': '5834', fill: '#e7d71b' })
                  ),
                  '<',
                  _react2.default.createElement(
                    'b',
                    { className: _index2.default['liked-num'] },
                    _this5.getLikedNum(item.liked) || 0
                  ),
                  '>'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _index2.default["comment-bd"] },
                _react2.default.createElement(
                  'p',
                  { className: _index2.default['content'] },
                  item.to_uid ? _react2.default.createElement(
                    'span',
                    { className: _index2.default['to-name'] },
                    '@',
                    item.to_name,
                    ':'
                  ) : '',
                  item.content
                )
              )
            );
          })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.setState({
        location: location.href
      });

      this.props.get_comment(this.props.article_id, 0, 10);
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Comment;
}(_react.Component)) || _class) || _class) || _class) || _class) || _class);
exports.default = Comment;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get_user, 'get_user', '/Users/garven/codetest/realProject/myblog/client/User/components/Comment/index.jsx');
  reactHotLoader.register(logout, 'logout', '/Users/garven/codetest/realProject/myblog/client/User/components/Comment/index.jsx');
  reactHotLoader.register(send_message, 'send_message', '/Users/garven/codetest/realProject/myblog/client/User/components/Comment/index.jsx');
  reactHotLoader.register(Comment, 'Comment', '/Users/garven/codetest/realProject/myblog/client/User/components/Comment/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Header/calcHandle.js":
/*!*****************************************************!*\
  !*** ./client/User/components/Header/calcHandle.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 计算乘积
 * @param {Arguments} nums - 参数
 * @return {Number}
 * @private
 */
function _mult() {

  var ret = 1;

  for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(nums), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;

      ret *= num;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
}

/**
 * 计算加和
 * @param {Arguments} nums - 参数
 * @return {Number}
 * @private
 */
function _plus() {

  var ret = 0;

  for (var _len2 = arguments.length, nums = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    nums[_key2] = arguments[_key2];
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(nums), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var num = _step2.value;

      ret += num;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return ret;
}

/**
 * 算术处理
 * // === 缓存代理: 缓存代理，为一些开销很大的运算结果提供暂时的存储，在下次运算时，如果参数跟之前的一致，则可以直接返回前面存储的结果 === //
 * // === 1 实现: === //
 * // === 1.1 使用高阶函数动态创建代理 === //
 * // === 1.2 把计算方法当作参数传入一个专门用于创建缓存代理的工厂中 === //
 * @param {Function} fn - 回调
 * @private
 */
function _createProxyFactory(fn) {

  var cache = {};

  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var _args = args.replace(/[+*]/, '').split(' ');

    if (args in cache) {
      return cache[args];
    }

    return cache[args] = fn.apply(this, _args);
  };
}

/**
 * 判断计算类型
 * @return {Boolean}
 */

var _default = function _default() {

  var key = this.state.key;

  if (/^[+\d]+$/.test(key)) {

    var proxyPlus = _createProxyFactory(_plus);

    this.props.update_popup({
      isOpen: 1,
      header: '计算结果:',
      content: proxyPlus(key)
    });

    return true;
  }

  if (/^[+\d]+$/.test(key)) {

    var proxyMult = _createProxyFactory(_mult);

    this.props.update_popup({
      isOpen: 1,
      header: '计算结果:',
      content: proxyMult(key)
    });

    return true;
  }

  return false;
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_mult, '_mult', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/calcHandle.js');
  reactHotLoader.register(_plus, '_plus', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/calcHandle.js');
  reactHotLoader.register(_createProxyFactory, '_createProxyFactory', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/calcHandle.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/calcHandle.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Header/eventloop.js":
/*!****************************************************!*\
  !*** ./client/User/components/Header/eventloop.js ***!
  \****************************************************/
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

var _default = function _default() {
  var _this = this;

  // === 事件循环机制： === //

  // === 1.分为4部分：代码、调用栈、webcore模块、任务队列 === //
  // === 1.1 代码：可执行代码 === //
  // === 1.2 调用栈：js有一个 主进程 和 调用堆栈，对一个调用堆栈中的任务进行处理时，其它的都要等着 === //
  // === 1.3 webcore模块：webkit内核在js执行引擎外，提供了webcore模块，用来对类似DOM，ajax，setTimeout这些api提供底层的如DOM Binding，network，timer模块进行处理 === //
  // === 1.4 任务队列：等webcore模块处理完后将回调放入任务队列，之后等调用栈中的任务执行完后再去执行队列中的任务 === //

  // === 2.以下面为例： === //
  // === 2.1 当i为5时，调用栈 发现 循环体 内是setTimeout，将其出栈后把延时执行的函数交给 timer 模块处理  === //
  // === 2.2 当为 4，3，2，1 时，和 i 为 5 时相同，因此 timer 模块会有5个相同的延时执行函数 === //
  // === 2.3 当为 0 时，不满足循环条件，循环结束，this.setState({title: `${this.state.title}-blur`}) 入调用栈，执行后出栈 === //
  // === 2.4 1s后，timer 模块将 5 个回调按照注册顺序依次返回给任务队列 === //
  // === 2.5 执行引擎去执行 任务队列时，5个函数依次 入调用栈，执行，出栈，此时5个函数访问到的 i 都为 0 === //
  // === 2.6 第一个回调执行后，key变为true，之后的4个回调都无法执行 === //

  var i = 0;

  var _loop = function _loop(_key2) {

    setTimeout(function () {

      if (i === 0 && !_key2) {

        _this.setState({
          title: "\u60F3\u641C\u7D22\u4E9B\u5565\u6587\u7AE0\u5462\uFF1F",
          isDetectKeyEvent: false
        });

        _key2 = true;
      }
    }, 1000);

    _key = _key2;
  };

  for (var _key = false; i--;) {
    _loop(_key);
  }

  // === 闭包：由执行上下文及执行上下文中的函数组成，是有权访问另一个函数作用域中的函数，也可简便地理解为有数据的函数 === //
  // === 分析如下代码： === //
  // === 1.若没有IIFE，setTimeout中的回调获取到的i是 5 === //
  // === 2.有了IIFE，setTimeout中的回调获取到的是传进去IIFE中的实参 === //
  // === 3.闭包就是：setTimeout代码块与index等IIFE中的数据组成 === //

  // === 函数声明与函数表达式: === //
  // === 1 函数声明: function关键字开头, 后跟着函数标识符名称 === //
  // === 1.1 特点：函数声明提升 === //
  // === 2 函数表达式: === //

  // === IIFE: 立即执行的函数表达式, 形成闭包，用来处理模块化可以减少全局变量造成的空间污染，构造跟多私有变量 === //
  // === 1 写法: 将函数声明转化为函数表达式 === //
  /*
   // 最常用的写法
  (function () {}()}
  (function () {})()
   // 其它写法
  var i = function () {}()
  true && function () {}()
  0, function () {}()
  +function () {}()
  -function () {}()
  !function () {}()
  ~function () {}()
   // 可以但不建议
  new function () {}
  new function () {}(参数)
   */
  // === 2 创建module: === //
  /*
   var module = (function () {
     let num = 1
     return {
      get () {
        return num
      },
      set () {
        num = value
      }
    }
   })()
   */

  for (var j = 0; j < 5; ++j) {

    ~function (index) {

      setTimeout(function () {
        i = index;
      }, 0);
    }(j);
  }

  // === es6 块级作用域 中的 let 等价于以上用IIFE的方法 === //

  var _loop2 = function _loop2(k) {

    setTimeout(function () {
      i = k;
    }, 10);
  };

  for (var k = 0; k < 5; ++k) {
    _loop2(k);
  }

  // === 3.任务源： === //
  // === 3.1 macro-task：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。 === //
  // === 3.2 micro-task: process.nextTick, Promises, Object.observe, MutationObserver === //

  // === 4.执行顺序：=== //
  // === 4.1 事件循环的顺序是从script开始第一次循环，随后全局上下文进入函数调用栈，碰到macro-task就将其交给处理它的模块处理完之后将回调函数放进macro-task的队列之中，碰到micro-task也是将其回调函数放进micro-task的队列之中。 === //
  // === 4.2 直到函数调用栈清空只剩全局执行上下文，然后开始执行所有的micro-task。当所有可执行的micro-task执行完毕之后。=== //
  // === 4.3 循环再次执行macro-task中的一个任务队列，执行完之后再执行所有的micro-task，就这样一直循环。=== //

  // === 5.分析如下代码： === //
  // === 5.1 script任务源先执行，全局上下文入栈 === //
  // === 5.2 script任务源的代码执行之前的。。。。，到这一步为止(这里才是重点) === //
  // === 5.3 script任务源的代码的代码执行到 let key = 0, 入调用栈，执行，出栈 === //
  // === 5.4 script任务源执行到setTimeout时，作为一个macro-task，将其回调放入自己的队列 === //
  // === 5.5 script任务源执行到Promise实例时，Promise中的第一个参数直接执行，入栈执行后，即 key 此时为 1 ，resolve执行，状态变为 Fullfilled 出栈 === //
  // === 5.6 script任务源执行到then，将其作为回调放入 micro-task 队列 === //
  // === 5.7 script任务源执行到 return，此时 macro-task 中的script执行完毕 === //
  // === 5.8 接着先执行 micro-task 队列中的任务，then的回调入栈执行后出栈，key变为 2 === //
  // === 5.9 接着执行 macro-task 队列中的任务，setTimeout的回调入栈执行后出栈，key变为 1，满足条件，执行了setState === //

  var key = 0;

  setTimeout(function () {

    --key;

    if (key === 1) {
      _this.setState({
        title: _this.state.title + "-blur"
      });
    }
  }, 0);

  new _promise2.default(function (resolve, reject) {

    ++key;
    resolve();
  }).then(function (resolve, reject) {

    ++key;
  });
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/garven/codetest/realProject/myblog/client/User/components/Header/eventloop.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Header/index.css":
/*!*************************************************!*\
  !*** ./client/User/components/Header/index.css ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hackGreen":"#00F900","header":"header_2vJyv","search-wrap":"search-wrap_1gAH-","search-inp":"search-inp_3ceww","search-btn":"search-btn_3kVmT","search-list":"search-list_DsHZu","search-item":"search-item_abfKi","item-link":"item-link_2h7-A"};

/***/ }),

/***/ "./client/User/components/Header/index.jsx":
/*!*************************************************!*\
  !*** ./client/User/components/Header/index.jsx ***!
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

var _dec, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _index = __webpack_require__(/*! ./index.css */ "./client/User/components/Header/index.css");

var _index2 = _interopRequireDefault(_index);

var _xss = __webpack_require__(/*! ../../../lib/xss */ "./client/lib/xss.js");

var _ArticleLinkList = __webpack_require__(/*! ../../redux/ArticleLinkList */ "./client/User/redux/ArticleLinkList.js");

var _Popup = __webpack_require__(/*! ../../redux/Popup */ "./client/User/redux/Popup.js");

var _eventloop = __webpack_require__(/*! ./eventloop */ "./client/User/components/Header/eventloop.js");

var _eventloop2 = _interopRequireDefault(_eventloop);

var _searchResult = __webpack_require__(/*! ./searchResult */ "./client/User/components/Header/searchResult.js");

var _searchResult2 = _interopRequireDefault(_searchResult);

var _num2money = __webpack_require__(/*! ./num2money */ "./client/User/components/Header/num2money.js");

var _num2money2 = _interopRequireDefault(_num2money);

var _calcHandle = __webpack_require__(/*! ./calcHandle */ "./client/User/components/Header/calcHandle.js");

var _calcHandle2 = _interopRequireDefault(_calcHandle);

var _palindrome = __webpack_require__(/*! ./palindrome */ "./client/User/components/Header/palindrome.js");

var _palindrome2 = _interopRequireDefault(_palindrome);

var _titleHandle = __webpack_require__(/*! ./titleHandle */ "./client/User/components/Header/titleHandle.js");

var _titleHandle2 = _interopRequireDefault(_titleHandle);

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var get_article_link_list = _ArticleLinkList.actions.get_article_link_list;
var update_popup = _Popup.actions.update_popup;

// === 原生键盘类事件 === //
// === 1.触发顺序: focus - keydown - keypress - input - keyup - change - blur  === //
// === 2.触发时机：focus - 聚焦时 ; keydown / keypress / input - 按下键盘时，其中keypress不可通过特殊键触发，input是真正改变文本框内容的时机； change - 改变 ; blur - 失焦时 === //
// === react中：input 和 change 同时改变state的话，input的失效，change会代替input === //

var Search = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.ArticleLinkListReducer;
}, { get_article_link_list: get_article_link_list, update_popup: update_popup }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search(props) {
    (0, _classCallCheck3.default)(this, Search);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this, props));

    _this.state = {
      key: '',
      selectedData: [],
      title: (0, _titleHandle2.default)(),
      isFocus: false,
      isDetectKeyEvent: false
    };

    _this.focusHandle = _this.focusHandle.bind(_this);
    _this.keydownHandle = _this.keydownHandle.bind(_this);
    _this.keypressHandle = _this.keypressHandle.bind(_this);
    _this.inputHandle = _this.inputHandle.bind(_this);
    _this.keyupHandle = _this.keyupHandle.bind(_this);
    _this.changeHandle = _this.changeHandle.bind(_this);
    _this.blurHandle = _this.blurHandle.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Search, [{
    key: 'focusHandle',


    /**
     * focus事件处理程序
     */
    value: function focusHandle() {}

    // this.$list.classList.remove('hide')

    /**
     * keydown事件处理程序
     */

  }, {
    key: 'keydownHandle',
    value: function keydownHandle(e) {

      if (e.keyCode === 186) {
        this.setState({
          isDetectKeyEvent: true,
          title: 'focus-keydown'
        });
      }
    }

    /**
     * keypress事件处理程序
     */

  }, {
    key: 'keypressHandle',
    value: function keypressHandle(e) {

      if (this.state.isDetectKeyEvent) {
        this.setState({
          title: this.state.title + '-keypress'
        });
        return;
      }

      if (e.type === 'keypress' && e.key !== 'Enter') {
        return;
      }

      var key = this.state.key;

      // 回文
      if (_palindrome2.default.call(this, key)) {
        return;
      }

      // 拦截器

      // 跳转
      window.open('/search?title=' + encodeURIComponent(key) + '&page_num=0&per_page=10');
    }

    /**
     * input事件处理程序
     */

  }, {
    key: 'inputHandle',
    value: function inputHandle() {

      if (this.state.isDetectKeyEvent) {
        this.setState({
          title: this.state.title + '-input'
        });
      }
    }

    /**
     * keyup事件处理程序
     */

  }, {
    key: 'keyupHandle',
    value: function keyupHandle() {

      if (this.state.isDetectKeyEvent) {
        this.setState({
          title: this.state.title + '-keyup'
        });
      }
    }

    /**
     * change事件处理程序
     */

  }, {
    key: 'changeHandle',
    value: function changeHandle(e) {

      if (this.state.isDetectKeyEvent) {
        this.setState({
          title: this.state.title + '-change'
        });
        return;
      }

      // 计算
      if (_calcHandle2.default.call(this)) {
        return;
      }

      // 数字格式化为千分位money格式
      if (_num2money2.default.call(this)) {
        return;
      }

      // 正常搜索结果处理
      _searchResult2.default.call(this, e);
    }

    /**
     * blur事件处理程序
     */

  }, {
    key: 'blurHandle',
    value: function blurHandle(e) {

      if (this.state.isDetectKeyEvent && e.type !== 'click') {
        _eventloop2.default.call(this);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'header',
        { className: _index2.default['header'] },
        _react2.default.createElement(
          'h1',
          { className: 'page-title hide' },
          '\u5F20\u76CA\u94ED\u7684\u524D\u7AEF\u5C0F\u535A\u5BA2'
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default['search-wrap'] },
          _react2.default.createElement('input', { type: 'text',
            className: _index2.default['search-inp'],
            value: this.state.key,
            onFocus: this.focusHandle,
            onKeyDown: this.keydownHandle,
            onInput: this.inputHandle,
            onKeyUp: this.keyupHandle,
            onKeyPress: this.keypressHandle,
            onChange: this.changeHandle,
            onBlur: this.blurHandle,
            placeholder: (0, _xss.escapeHtml)(this.state.title)
          }),
          _react2.default.createElement('input', { type: 'button',
            className: _index2.default['search-btn'],
            onClick: this.keypressHandle,
            value: '搜索'
          }),
          _react2.default.createElement(
            'ul',
            { className: _index2.default['search-list'] + ' ' + (this.state.selectedData.length === 0 ? 'hide' : ''), ref: function ref(list) {
                return _this2.$list = list;
              } },
            this.state.selectedData.map(function (item) {
              return _react2.default.createElement(
                'li',
                { className: _index2.default['search-item'], key: item.id },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { target: '_blank', to: '/article/' + item.id, className: _index2.default["item-link"] },
                  item.name
                )
              );
            })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      if (this.props.data.length === 0) {
        this.props.get_article_link_list();
      }

      document.body.addEventListener('click', this.blurHandle, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.blurHandle, false);
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Search;
}(_react.Component)) || _class);
Search.defaultProps = {
  data: [] };
exports.default = Search;


if (_config2.default.ISDEV) {
  Search.propTypess = {
    data: _propTypes2.default.arrayOf(_propTypes2.default.object.isRequired).isRequired
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get_article_link_list, 'get_article_link_list', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/index.jsx');
  reactHotLoader.register(update_popup, 'update_popup', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/index.jsx');
  reactHotLoader.register(Search, 'Search', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Header/num2money.js":
/*!****************************************************!*\
  !*** ./client/User/components/Header/num2money.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reg = __webpack_require__(/*! ../../../lib/reg */ "./client/lib/reg.js");

var _reg2 = _interopRequireDefault(_reg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 将任意长数字变成逗号分隔
 * 通过前缀 $: 激活
 * @return {Boolean}
 */
var _default = function _default() {
  var str = this.state.key;

  if (str.indexOf('$:') !== 0) {
    return false;
  }

  str = str.slice(2).trim().replace(_reg2.default.num2money, ',');

  this.setState({
    key: str
  });

  return str;
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/num2money.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Header/palindrome.js":
/*!*****************************************************!*\
  !*** ./client/User/components/Header/palindrome.js ***!
  \*****************************************************/
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

var _default = function _default(key) {

  if (key !== key.split('').reverse().join('')) {
    return false;
  }

  this.props.update_popup({
    isOpen: 1,
    header: 'Warning:',
    content: '回文是吧？不行不行~~'
  });

  return true;
};

/**
 * 判断回文
 * // === 回文：正着倒着都一样 === //
 * // === 改变字符最容易的思路：转成数组操作后再转回 === //
 * @param {String} key - 字符
 * @return {Boolean}
 */
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/palindrome.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Header/searchResult.js":
/*!*******************************************************!*\
  !*** ./client/User/components/Header/searchResult.js ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(e) {
  // 修改key
  var key = e.target.value;

  // 空则
  if (key === '') {
    this.setState({
      key: key,
      selectedData: []
    });
    return;
  }

  // 修改selectedData
  var selectedData = [];
  this.props.data.forEach(function (item) {
    var pos = item.name.indexOf(key);
    if (pos > -1) {
      selectedData.push((0, _extends3.default)({}, item, {
        pos: pos
      }));
    }
  });

  // 排序
  selectedData = selectedData.sort(function (prev, next) {
    return prev - next;
  });

  // 改变状态
  this.setState({
    key: key,
    selectedData: selectedData
  });
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/searchResult.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Header/titleHandle.js":
/*!******************************************************!*\
  !*** ./client/User/components/Header/titleHandle.js ***!
  \******************************************************/
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

var _default = function _default() {

  // server端
  if (typeof window === 'undefined') {
    return '';
  }

  // 没有则不处理
  var search = window.location.search;
  if (search === '') {
    return '';
  }

  // 从url中获取title
  var querys = decodeURIComponent(search.slice(1));

  var paramsObj = {};

  querys.split('&').forEach(function (item) {
    var key = item.split('=')[0];
    var val = item.split('=')[1];
    paramsObj[key] = val;
  });

  return paramsObj.title || paramsObj.tag;
};

/**
 * 处理title
 * @return {String}
 */
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Header/titleHandle.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/HomeList/index.css":
/*!***************************************************!*\
  !*** ./client/User/components/HomeList/index.css ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hackGreen":"#00F900","shadowGreen":"rgba(0, 249, 0, .5)","article-list":"article-list_3igXC","article-item":"article-item_KVfIm","item-tt":"item-tt_nM5RF","item-info":"item-info_3e4C8","info-tag":"info-tag_xeucm","item-cover--LatestList":"item-cover--LatestList_2VFsX","item-summary":"item-summary_szdsr","data-read":"data-read_1vcPC","data-comments":"data-comments_2ssWA","works--list":"works--list_3CPXw","item-cover--WorksItem":"item-cover--WorksItem_269-7","link":"link_2zcZu"};

/***/ }),

/***/ "./client/User/components/HomeList/index.jsx":
/*!***************************************************!*\
  !*** ./client/User/components/HomeList/index.jsx ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorksItem = exports.BestItem = exports.LatestItem = undefined;

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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _Img = __webpack_require__(/*! ../Img */ "./client/User/components/Img/index.jsx");

var _Img2 = _interopRequireDefault(_Img);

var _index = __webpack_require__(/*! ./index.css */ "./client/User/components/HomeList/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var getSrc = function getSrc(src) {
  return _config2.default.FILE_SERVER_DOMAIN + src;
};
// === 代理模式: 当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对本体对象的访问，客户实际上访问的是替身对象。替身对象对请求做出一些处理之后，再把请求转交给本体对象。 === //
// === 1 类型: === //
// === 1.1 保护代理 === //
// === 1.2 虚拟代理 === //
// === 1.3 缓存代理 === //
// === 2 注意点: 代理对象和本体对象都对外提供一致的接口，用户并不请求代理和本体的区别，代理接手请求的过程对于用户来说是透明的。 === //

var LatestItem = function (_Component) {
  (0, _inherits3.default)(LatestItem, _Component);

  function LatestItem(props) {
    (0, _classCallCheck3.default)(this, LatestItem);
    return (0, _possibleConstructorReturn3.default)(this, (LatestItem.__proto__ || (0, _getPrototypeOf2.default)(LatestItem)).call(this, props));
  }

  (0, _createClass3.default)(LatestItem, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'li',
        { className: _index2.default['article-item'] },
        _react2.default.createElement(_Img2.default, { src: getSrc(this.props.cover_url), alt: '', className: _index2.default['item-cover--LatestList'] + ' fr' }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: _index2.default['link'], target: '_blank', to: '/article/' + this.props.id },
          _react2.default.createElement(
            'h3',
            { className: _index2.default['item-tt'] },
            this.props.title
          )
        ),
        _react2.default.createElement(
          'p',
          { className: _index2.default['item-summary'] },
          this.props.summary
        ),
        _react2.default.createElement(
          'p',
          { className: _index2.default['item-info'] + ' clearfix' },
          _react2.default.createElement(
            'span',
            { className: _index2.default['info-pubtime'] },
            this.props.pubtime
          ),
          _react2.default.createElement(
            'span',
            { className: '' + _index2.default['info-tag'] },
            this.props.tag
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
  return LatestItem;
}(_react.Component);

LatestItem.defaultProps = {
  title: '',
  link: '',
  summary: '',
  pubtime: '',
  tag: '',
  cover_url: ''
};


if (_config2.default.ISDEV) {
  LatestItem.propTypes = {
    title: _propTypes2.default.string.isRequired,
    link: _propTypes2.default.string.isRequired,
    summary: _propTypes2.default.string.isRequired,
    pubtime: _propTypes2.default.string.isRequired,
    tag: _propTypes2.default.string.isRequired,
    cover: _propTypes2.default.string.isRequired
  };
}

var BestItem = function (_Component2) {
  (0, _inherits3.default)(BestItem, _Component2);

  function BestItem(props) {
    (0, _classCallCheck3.default)(this, BestItem);
    return (0, _possibleConstructorReturn3.default)(this, (BestItem.__proto__ || (0, _getPrototypeOf2.default)(BestItem)).call(this, props));
  }

  (0, _createClass3.default)(BestItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: _index2.default['article-item'] },
        _react2.default.createElement(
          'p',
          { className: _index2.default['item-data'] + ' fr' },
          '\u6D4F\u89C8\u6570\uFF1A',
          _react2.default.createElement(
            'span',
            { className: _index2.default['data-read'] },
            this.props.read_num
          ),
          '\u8BC4\u8BBA\u6570\uFF1A',
          _react2.default.createElement(
            'span',
            { className: _index2.default['data-comments'] },
            this.props.comment_num
          ),
          '\u70B9\u8D5E\u6570\uFF1A',
          _react2.default.createElement(
            'span',
            { className: _index2.default['data-like'] },
            this.props.liked_num
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: _index2.default['link'], target: '_blank', to: '/article/' + this.props.id },
          _react2.default.createElement(
            'h3',
            { className: _index2.default['item-tt'] },
            this.props.title
          )
        ),
        _react2.default.createElement(
          'p',
          { className: _index2.default['item-info'] },
          _react2.default.createElement(
            'span',
            { className: _index2.default['info-pubtime'] },
            this.props.pubtime
          ),
          _react2.default.createElement(
            'span',
            { className: _index2.default['info-tag'] + ' fr' },
            this.props.tag
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
  return BestItem;
}(_react.Component);

BestItem.defaultProps = {
  read_num: 0,
  comment_num: 0,
  liked_num: 0,
  title: '',
  link: '',
  pubtime: '',
  tag: ''
};


if (_config2.default.ISDEV) {
  BestItem.propTypes = {
    read_num: _propTypes2.default.number.isRequired,
    comment_num: _propTypes2.default.number.isRequired,
    liked_num: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string.isRequired,
    link: _propTypes2.default.string.isRequired,
    pubtime: _propTypes2.default.string.isRequired,
    tag: _propTypes2.default.string.isRequired
  };
}

var WorksItem = function (_Component3) {
  (0, _inherits3.default)(WorksItem, _Component3);

  function WorksItem(props) {
    (0, _classCallCheck3.default)(this, WorksItem);
    return (0, _possibleConstructorReturn3.default)(this, (WorksItem.__proto__ || (0, _getPrototypeOf2.default)(WorksItem)).call(this, props));
  }

  (0, _createClass3.default)(WorksItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: _index2.default['article-item'] },
        _react2.default.createElement(_Img2.default, { src: getSrc(this.props.imgSrc), alt: this.props.imgAlt, className: _index2.default['item-cover--WorksItem'] }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: _index2.default['link'], to: this.props.link },
          _react2.default.createElement(
            'h3',
            { className: _index2.default['item-tt'] },
            this.props.title
          )
        ),
        _react2.default.createElement(
          'p',
          { className: _index2.default['item-info'] },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: this.props.sourceLink, className: _index2.default['link'] },
            '\u6E90\u7801\u89E3\u6790'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: this.props.demoLink, className: _index2.default['link'] },
            '\u67E5\u770B\u6F14\u793A'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: this.props.githubLink, className: _index2.default['link'] },
            'github\u5730\u5740'
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
  return WorksItem;
}(_react.Component);

WorksItem.defaultProps = {
  imgSrc: '',
  imgAlt: '',
  link: '',
  title: '',
  sourceLink: '',
  demoLink: '',
  githubLink: ''
};


if (_config2.default.ISDEV) {
  WorksItem.propTypes = {
    imgSrc: _propTypes2.default.string.isRequired,
    imgAlt: _propTypes2.default.string.isRequired,
    link: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired,
    sourceLink: _propTypes2.default.string.isRequired,
    demoLink: _propTypes2.default.string.isRequired,
    githubLink: _propTypes2.default.string.isRequired
  };
}

exports.LatestItem = LatestItem;
exports.BestItem = BestItem;
exports.WorksItem = WorksItem;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getSrc, 'getSrc', '/Users/garven/codetest/realProject/myblog/client/User/components/HomeList/index.jsx');
  reactHotLoader.register(LatestItem, 'LatestItem', '/Users/garven/codetest/realProject/myblog/client/User/components/HomeList/index.jsx');
  reactHotLoader.register(BestItem, 'BestItem', '/Users/garven/codetest/realProject/myblog/client/User/components/HomeList/index.jsx');
  reactHotLoader.register(WorksItem, 'WorksItem', '/Users/garven/codetest/realProject/myblog/client/User/components/HomeList/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Img/index.css":
/*!**********************************************!*\
  !*** ./client/User/components/Img/index.css ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = __webpack_require__(/*! ../../fetch/axios */ "./client/User/fetch/axios.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./index.css */ "./client/User/components/Img/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Image = function (_Component) {
  (0, _inherits3.default)(Image, _Component);

  function Image(props) {
    (0, _classCallCheck3.default)(this, Image);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call(this, props));

    _this.state = {
      src: _this.props.defaultSrc || ''
    };

    return _this;
  }

  (0, _createClass3.default)(Image, [{
    key: 'getLoadingGif',


    /**
     * 加载loadingGif
     */
    value: function getLoadingGif() {
      var _this2 = this;

      _axios.api.getIndexStorage().then(function (res) {

        for (var key in res.data) {
          localStorage.setItem(key, res.data[key]);
        }

        _this2.setState({
          src: localStorage.getItem('loadingGif')
        });
      }).catch(function (err) {
        console.error(err.message);
      });
    }

    // === react中用 new Image() 加载不了图片的bug: === //
    /*
    
      context: undefined,
      onerror: ƒ (e),
      onload: ƒ (),
      props: undefined,
      refs: {},
      src: "https://avatars2.githubusercontent.com/u/20942047?v=4",
      state: {src: ""},
      updater: {isMounted: ƒ, enqueueForceUpdate: ƒ, enqueueReplaceState: ƒ, enqueueSetState: ƒ},
      isMounted: (...),
      replaceState: (...)
    
    */
    // === 1 原因: 可能是因为 react 对于 原生的Image进行了覆盖 === //
    // === 2 解决: 需要手动引用挂载到window上的 Image 或者 document.createElement('img') === //

    /**
     * 预加载
     */

  }, {
    key: 'preload',
    value: function preload() {
      var _this3 = this;

      var img = new window.Image();
      img.src = this.props.src;

      img.onload = function () {
        _this3.setState({
          src: img.src
        });
      };
      img.onerror = function (e) {
        console.error(e);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('img', { src: this.state.src, className: this.props.className, alt: this.props.alt });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.props.src && this.preload();

      // 有特指定默认图片则不用 laoding.gif
      if (this.props.defaultSrc) {
        return;
      }

      var loadingGif = localStorage.getItem('loadingGif');

      if (loadingGif) {

        this.setState({
          src: loadingGif
        });
      } else {

        this.getLoadingGif();
      }
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
  src: '' };
exports.default = Image;


if (_config2.default.ISDEV) {
  Image.propTypes = {
    src: _propTypes2.default.string,
    defaultSrc: _propTypes2.default.string,
    alt: _propTypes2.default.string,
    className: _propTypes2.default.string
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Image, 'Image', '/Users/garven/codetest/realProject/myblog/client/User/components/Img/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/LoadMore/index.css":
/*!***************************************************!*\
  !*** ./client/User/components/LoadMore/index.css ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"load-more-area":"load-more-area_JawNV","icon-loading":"icon-loading_3Fn_e"};

/***/ }),

/***/ "./client/User/components/LoadMore/index.jsx":
/*!***************************************************!*\
  !*** ./client/User/components/LoadMore/index.jsx ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ./index.css */ "./client/User/components/LoadMore/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === 无状态组件: 使用无状态函数构建的组件 === //
// === 1 与React.Component的异同: === //
// === > 同: 都接受props和context, 都可设置静态属性propsType和defaultProps === //
// === > 异: 无state和声明周期, 创建时始终保持一个实例, 避免了不必要的检查和内存分配 === //

var LoadMore = function LoadMore(props) {
  return _react2.default.createElement(
    'div',
    { className: _index2.default['load-more-area'], ref: props.loadMoreRef },
    props.is_end_page ? _react2.default.createElement(
      'p',
      null,
      '\u6570\u636E\u5DF2\u5168\u90E8\u52A0\u8F7D'
    ) : _react2.default.createElement(
      'p',
      null,
      '\u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A ',
      _react2.default.createElement('i', { className: _index2.default['icon-loading'] })
    )
  );
};

var _default = LoadMore;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoadMore, 'LoadMore', '/Users/garven/codetest/realProject/myblog/client/User/components/LoadMore/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/LoadMore/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Nav/index.css":
/*!**********************************************!*\
  !*** ./client/User/components/Nav/index.css ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/User/components/Nav/index.jsx":
/*!**********************************************!*\
  !*** ./client/User/components/Nav/index.jsx ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

__webpack_require__(/*! ./index.css */ "./client/User/components/Nav/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Nav = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav(props) {
    (0, _classCallCheck3.default)(this, Nav);
    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call(this, props));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'nav' },
        _react2.default.createElement(
          'ul',
          { className: 'nav-list nav-tabs' },
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'link', to: '/' },
              _react2.default.createElement(
                'h2',
                { className: 'nav-title' },
                '\u6700\u65B0\u6587\u7AE0',
                _react2.default.createElement('i', { className: 'icon iconfont icon-magic' })
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'link', to: '/bestlist' },
              _react2.default.createElement(
                'h2',
                { className: 'nav-title' },
                '\u6700\u4F73\u535A\u6587',
                _react2.default.createElement('i', { className: 'icon iconfont icon-medal_light' })
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'link', to: '/category' },
              _react2.default.createElement(
                'h2',
                { className: 'nav-title' },
                '\u535A\u6587\u5206\u7C7B',
                _react2.default.createElement('i', { className: 'icon iconfont icon-circle' })
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'link', to: '/works' },
              _react2.default.createElement(
                'h2',
                { className: 'nav-title' },
                '\u4F5C\u54C1\u96C6',
                _react2.default.createElement('i', { className: 'icon iconfont icon-selection' })
              )
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
  return Nav;
}(_react.Component);

var _default = Nav;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Nav, 'Nav', '/Users/garven/codetest/realProject/myblog/client/User/components/Nav/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/components/Nav/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/components/Popup/index.css":
/*!************************************************!*\
  !*** ./client/User/components/Popup/index.css ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popup-wrap":"popup-wrap_1piIX","popup-bg":"popup-bg_5lxgx","drag-area":"drag-area_2639x","btn-close":"btn-close_145ZU","popup-body":"popup-body_1iDK1","popup-open":"popup-open_2VJxm","popupOpen":"popupOpen_18Mif","popup-close":"popup-close_2GKJ3","popupClose":"popupClose_3OZxL"};

/***/ }),

/***/ "./client/User/components/Popup/index.jsx":
/*!************************************************!*\
  !*** ./client/User/components/Popup/index.jsx ***!
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

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _dec, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Popup = __webpack_require__(/*! ../../redux/Popup */ "./client/User/redux/Popup.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ./index.css */ "./client/User/components/Popup/index.css");

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

      if (typeof e.target.className === 'string' && e.target.className.indexOf('drag-area') > -1) {
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

  reactHotLoader.register(Popup, 'Popup', '/Users/garven/codetest/realProject/myblog/client/User/components/Popup/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/containers/Article/index.css":
/*!**************************************************!*\
  !*** ./client/User/containers/Article/index.css ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hackGreen":"#00F900","article-page":"article-page_3m6Uw","nav-move-list":"nav-move-list_3WSJl","header":"header_3UkAJ","header-location":"header-location_1hrFt","header-search":"header-search_3PyHl","header-control":"header-control_3ZIN4","title":"title_1MD6f","item-link":"item-link_17n9Q","location-link":"location-link_1QKJV","container":"container_2p67p","main-block":"main-block_3n31y","aside":"aside_2Lw2_","nav":"nav_9MEc0","main-inner":"main-inner_5Uylg","btn-like":"btn-like_2zrNW","icon--unliked":"icon--unliked_2UpG4","icon--liked":"icon--liked_3lBPM","article":"article_ID3mx","article-tt":"article-tt_1Ioca","article-desc-list":"article-desc-list_2aGb2","article-desc-item":"article-desc-item_IxIhu"};

/***/ }),

/***/ "./client/User/containers/Article/index.jsx":
/*!**************************************************!*\
  !*** ./client/User/containers/Article/index.jsx ***!
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

var _set = __webpack_require__(/*! babel-runtime/core-js/set */ "./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

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

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _dec, _dec2, _dec3, _class, _Article$defaultProps;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _remark = __webpack_require__(/*! remark */ "./node_modules/remark/index.js");

var _remark2 = _interopRequireDefault(_remark);

var _remarkReact = __webpack_require__(/*! remark-react */ "./node_modules/remark-react/index.js");

var _remarkReact2 = _interopRequireDefault(_remarkReact);

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _Article = __webpack_require__(/*! ../../redux/Article */ "./client/User/redux/Article.js");

var _Popup = __webpack_require__(/*! ../../redux/Popup */ "./client/User/redux/Popup.js");

var _Comment = __webpack_require__(/*! ../../components/Comment */ "./client/User/components/Comment/index.jsx");

var _Comment2 = _interopRequireDefault(_Comment);

var _index = __webpack_require__(/*! ./index.css */ "./client/User/containers/Article/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Article = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.ArticleReducer;
}, (0, _extends3.default)({}, _Article.actions)), _dec2 = (0, _reactRedux.connect)(function (state) {
  return {
    user_id: state.UserReducer.id
  };
}), _dec3 = (0, _reactRedux.connect)(null, (0, _extends3.default)({}, _Popup.actions)), _dec(_class = _dec2(_class = _dec3(_class = function (_Component) {
  (0, _inherits3.default)(Article, _Component);

  function Article(props) {
    (0, _classCallCheck3.default)(this, Article);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this, props));

    _this.state = {
      name: '',
      email: '',
      isMemoried: false,
      commentContent: '请发表您的评论！'
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.likedHandle = _this.likedHandle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Article, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var target = e.target;
      var value = target.type === 'checkbox' ? target.checked : target.valueOf;
      var name = target.name;
      this.setState((0, _defineProperty3.default)({}, name, value));
    }
  }, {
    key: 'getUniqueWordsNum',
    value: function getUniqueWordsNum(str) {

      return new _set2.default(str).size;
    }

    // === xss防御之富文本过滤: === //
    // === 1 黑名单: 给出不通过的代码, 如`<script>`, `javascript:;`, `onerror`，但太多要考虑 === //
    // === 1.1 实现原理: 正则替换 === //
    // === 2 白名单：给出通过的代码，其它一律不通过, 如`img: src, alt, title`, 用于输入检出 / 输出检查，可用插件xss === //
    // === 2.1 实现原理: 现将html解析成dom树, 遍历每个元素，只留下允许的，再返回新的字符 === //

  }, {
    key: 'contentHandle',
    value: function contentHandle() {
      var content = (0, _remark2.default)().use(_remarkReact2.default).processSync(this.changeImgUrl(this.props.content)).contents;
      // console.log(content)
      // console.log(xss(content))
      // return xss(content, {
      //   whiteList: {
      //     a: ['href', 'target'],
      //     img: ['src', 'alt', 'title'],
      //     p: [],
      //     span: []
      //   }
      // })
      return content;
    }

    /**
     * 改变图片uri链接
     * @param {String} content - 文章内容
     * @return {String}
     */

  }, {
    key: 'changeImgUrl',
    value: function changeImgUrl(content) {
      return content.replace(/!\[(.+?)\]\((.+?)\)/g, '![$1](' + _config2.default.FILE_SERVER_DOMAIN + '$2)');
    }

    /**
     * 点赞处理
     */

  }, {
    key: 'likedHandle',
    value: function likedHandle(e) {
      var _this2 = this;

      if (!window.localStorage.getItem('access_token')) {
        return this.props.update_popup({
          isOpen: 1,
          header: '提示:',
          content: '请先登录'
        });
      }

      // === target 与 currentTarget: === //
      // === 1 currentTarget: 绑定事件的对象, 若想要获取的目标元素有子元素, 最好对目标元素进行事件绑定并通过 currentTarget 获取 === //
      // === 2 target: 触发事件的对象, 如有嵌套的div，对父级div绑定click事件，当点击子div时，currentTarget为父div，target为子div === //

      var target = e.currentTarget;
      var has_liked = target.getAttribute('data-has-liked');
      // 没有点赞过的情况
      if (has_liked === 'false') {

        this.props.add_liked({
          type: 0,
          status: 1,
          article_id: this.props.id
        });

        return;
      }

      // 点赞过的情况

      // 找出liked_id
      var liked_id = void 0;
      var liked_status = void 0;
      this.props.liked.forEach(function (item) {
        if (item.user_id === _this2.props.user_id) {
          liked_id = item.id;
          liked_status = item.status === 1 ? 0 : 1;
        }
      });

      if (!liked_id && !liked_status) {
        return;
      }

      this.props.update_liked({
        id: liked_id,
        status: liked_status,
        article_id: this.props.id
      });
    }

    /**
     * 是否已经点赞过
     */

  }, {
    key: 'hasLiked',
    value: function hasLiked(arr) {
      var _this3 = this;

      if (!arr) {
        return;
      }

      var flag = false;
      arr.forEach(function (item) {
        if (item.user_id === _this3.props.user_id) {
          flag = true;
        }
      });

      return flag;
    }

    /**
     * 获取点赞数
     */

  }, {
    key: 'getLikedNum',
    value: function getLikedNum(arr) {

      if (!arr) {
        return;
      }

      var num = 0;
      arr.forEach(function (item) {
        if (item.status === 1) {
          ++num;
        }
      });
      return num;
    }

    /**
     * 点赞状态
     */

  }, {
    key: 'getLikedStatus',
    value: function getLikedStatus(arr) {
      var _this4 = this;

      if (!arr) {
        return;
      }

      var flag = false;
      arr.forEach(function (item) {
        if (item.user_id === _this4.props.user_id && item.status === 1) {
          flag = true;
        }
      });

      return flag;
    }

    // === 语义化的优点： === //
    // === 1.可读性更高，利于团队合作与开发 === //
    // === 2.利于SEO === //
    // === 3.利于屏幕阅读软件根据结构来读页面 === //
    // === 4.一般可让HTML文件变的更小 === //

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _index2.default['article-page'] },
        _react2.default.createElement(
          'header',
          { className: _index2.default['header'] + ' ' + _index2.default['clearfix'] },
          _react2.default.createElement(
            'div',
            { className: _index2.default['header-search'] },
            _react2.default.createElement('input', { type: 'text', className: _index2.default['search-inp'], placeholder: '\u641C\u7D22\u70B9\u5565\u5457' }),
            _react2.default.createElement('input', { type: 'button', value: '\uD83D\uDD0D' })
          ),
          _react2.default.createElement(
            'div',
            { className: _index2.default['header-location'] },
            _react2.default.createElement(
              'p',
              { className: _index2.default['location-text'] },
              '\u6240\u5728\u4F4D\u7F6E\uFF1A',
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/article/' + this.props.id, className: _index2.default['location-link'] },
                this.props.title
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _index2.default['header-control'] },
            _react2.default.createElement(
              'ul',
              { className: _index2.default['control-list'] },
              _react2.default.createElement(
                'li',
                { className: _index2.default['control-item'] },
                _react2.default.createElement(
                  'span',
                  { className: _index2.default['title'] },
                  '\u4E0A\u4E00\u7BC7:'
                ),
                this.props.prev_id == 0 ? _react2.default.createElement(
                  'span',
                  null,
                  '\u65E0'
                ) : _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _index2.default['item-link'], target: '_bank', to: '/article/' + this.props.prev_id },
                  this.props.prev_title
                )
              ),
              _react2.default.createElement(
                'li',
                { className: _index2.default['control-item'] },
                _react2.default.createElement(
                  'span',
                  { className: _index2.default['title'] },
                  '\u4E0B\u4E00\u7BC7:'
                ),
                this.props.next_id == 0 ? _react2.default.createElement(
                  'span',
                  null,
                  '\u65E0'
                ) : _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _index2.default['item-link'], target: '_bank', to: '/article/' + this.props.next_id },
                  this.props.next_title
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default['container'] },
          _react2.default.createElement(
            'div',
            { className: _index2.default['main-block'] },
            _react2.default.createElement(
              'main',
              { className: _index2.default['main-inner'] },
              _react2.default.createElement(
                'article',
                { className: _index2.default['article'] },
                _react2.default.createElement(
                  'h1',
                  { className: _index2.default['article-tt'] },
                  this.props.title
                ),
                _react2.default.createElement(
                  'ul',
                  { className: _index2.default['article-desc-list'] + ' clearfix' },
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['article-desc-item'] },
                    '\u4F5C\u8005\uFF1Agarven'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    '\u53D1\u8868\u65F6\u95F4\uFF1A',
                    _react2.default.createElement(
                      'time',
                      { className: _index2.default['pubdate'], dateTime: this.props.pubtime + 'T00:00' },
                      this.props.pubtime
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['article-desc-item'] },
                    '\u6D4F\u89C8\u6570\uFF1A',
                    this.props.read_num
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['article-desc-item'] },
                    '\u70B9\u8D5E\u6B21\u6570\uFF1A',
                    this.getLikedNum(this.props.liked),
                    _react2.default.createElement(
                      'span',
                      { className: _index2.default['btn-like'], onClick: this.likedHandle, 'data-has-liked': this.hasLiked(this.props.liked) },
                      this.getLikedStatus(this.props.liked) ? _react2.default.createElement(
                        'svg',
                        { t: '1533042701079', className: _index2.default["icon--liked"], viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', 'p-id': '5991', width: '16', height: '16' },
                        _react2.default.createElement('path', { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z', 'p-id': '5992', fill: '#1afa29' })
                      ) : _react2.default.createElement(
                        'svg',
                        { t: '1533042671250', className: _index2.default["icon--unliked"], viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', 'p-id': '5831', width: '16', height: '16' },
                        _react2.default.createElement('path', { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z', 'p-id': '5832', fill: '#1afa29' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['article-desc-item'] },
                    '\u8BC4\u8BBA\u6570\uFF1A',
                    this.props.comment_num
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['article-desc-item'] },
                    '\u6709\u6548\u5B57\u6570\uFF1A',
                    this.getUniqueWordsNum(this.props.content)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: _index2.default['article-desc-item'] },
                    '\u7B80\u4ECB\uFF1A',
                    this.props.summary
                  )
                ),
                this.contentHandle()
              ),
              _react2.default.createElement('div', { className: _index2.default['comment-wrap'] })
            )
          ),
          _react2.default.createElement(
            'aside',
            { className: _index2.default['aside'] },
            '\u6587\u7AE0\u5927\u7EB2'
          ),
          _react2.default.createElement(
            'nav',
            { className: _index2.default['nav'] },
            '\u5E7F\u544A\u680F'
          )
        ),
        _react2.default.createElement(_Comment2.default, { article_id: this.props.id })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Article;
}(_react.Component)) || _class) || _class) || _class);
Article.defaultProps = (_Article$defaultProps = {
  id: 0,
  title: '',
  summary: '',
  content: '',
  pubtime: '',
  comment_num: 0,
  read_num: 0,
  category_id: 0,
  prev_id: 0,
  prev_title: '',
  next_id: 0
}, (0, _defineProperty3.default)(_Article$defaultProps, 'prev_title', ''), (0, _defineProperty3.default)(_Article$defaultProps, 'comments', []), (0, _defineProperty3.default)(_Article$defaultProps, 'liked', []), _Article$defaultProps);
exports.default = Article;


if (_config2.default.ISDEV) {
  Article.propTypess = {
    title: _propTypes2.default.string.isRequired,
    summary: _propTypes2.default.string.isRequired,
    content: _propTypes2.default.string.isRequired,
    pubtime: _propTypes2.default.string.isRequired,
    comment_num: _propTypes2.default.number.isRequired,
    category_id: _propTypes2.default.number.isRequired,
    prev_id: _propTypes2.default.number.isRequired,
    prev_title: _propTypes2.default.number.isRequired,
    next_id: _propTypes2.default.number.isRequired,
    next_title: _propTypes2.default.number.isRequired,
    comments: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    liked: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Article, 'Article', '/Users/garven/codetest/realProject/myblog/client/User/containers/Article/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/containers/ArticleCategory/index.css":
/*!**********************************************************!*\
  !*** ./client/User/containers/ArticleCategory/index.css ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"category-list":"category-list_2XKkf","category-item":"category-item_3yWMK","link":"link_2lphH"};

/***/ }),

/***/ "./client/User/containers/ArticleCategory/index.jsx":
/*!**********************************************************!*\
  !*** ./client/User/containers/ArticleCategory/index.jsx ***!
  \**********************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Header = __webpack_require__(/*! ../../components/Header */ "./client/User/components/Header/index.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(/*! ../../components/Nav */ "./client/User/components/Nav/index.jsx");

var _Nav2 = _interopRequireDefault(_Nav);

var _ArticleCategory = __webpack_require__(/*! ../../redux/ArticleCategory */ "./client/User/redux/ArticleCategory.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ./index.css */ "./client/User/containers/ArticleCategory/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Tag = function (_PureComponent) {
  (0, _inherits3.default)(Tag, _PureComponent);

  function Tag() {
    (0, _classCallCheck3.default)(this, Tag);
    return (0, _possibleConstructorReturn3.default)(this, (Tag.__proto__ || (0, _getPrototypeOf2.default)(Tag)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tag, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: _index2.default['category-item'] },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: _index2.default['link'], target: '_blank', to: '/search?tag=' + this.props.name + '&page_num=0&per_page=10' },
          this.props.name
        ),
        '[',
        _react2.default.createElement(
          'span',
          { className: _index2.default['num'] },
          this.props.count
        ),
        ']'
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Tag;
}(_react.PureComponent);

Tag.defaultProps = {
  name: '',
  count: 0,
  link: '',
  total: ''
};


if (_config2.default.ISDEV) {
  Tag.propTypes = {
    link: _propTypes2.default.string.isRequired,
    count: _propTypes2.default.number.isRequired,
    name: _propTypes2.default.string.isRequired,
    total: _propTypes2.default.number.isRequired
  };
}

var ArticleCategory = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    tagsList: state.ArticleCategoryReducer.data
  };
}, (0, _extends3.default)({}, _ArticleCategory.actions)), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ArticleCategory, _Component);

  function ArticleCategory(props) {
    (0, _classCallCheck3.default)(this, ArticleCategory);
    return (0, _possibleConstructorReturn3.default)(this, (ArticleCategory.__proto__ || (0, _getPrototypeOf2.default)(ArticleCategory)).call(this, props));
  }

  (0, _createClass3.default)(ArticleCategory, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'home-page' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'main',
          { className: 'main' },
          _react2.default.createElement(_Nav2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'category-block nav-details-item' },
            _react2.default.createElement(
              'div',
              { className: 'nav-details-inner' },
              _react2.default.createElement(
                'ul',
                { className: _index2.default['category-list'] },
                this.props.tagsList.map(function (item) {
                  return _react2.default.createElement(Tag, (0, _extends3.default)({ key: item.id }, item));
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

      if (this.props.tagsList.length === 0) {
        this.props.get_category_list();
      }
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return ArticleCategory;
}(_react.Component)) || _class);
ArticleCategory.defaultProps = {
  tagsList: []
};
exports.default = ArticleCategory;


if (_config2.default.ISDEV) {
  ArticleCategory.propTypes = {
    tagsList: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tag, 'Tag', '/Users/garven/codetest/realProject/myblog/client/User/containers/ArticleCategory/index.jsx');
  reactHotLoader.register(ArticleCategory, 'ArticleCategory', '/Users/garven/codetest/realProject/myblog/client/User/containers/ArticleCategory/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/containers/Auth/index.css":
/*!***********************************************!*\
  !*** ./client/User/containers/Auth/index.css ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sso-iframe":"sso-iframe_1kMR3","global-component-wrap":"global-component-wrap_18g8E"};

/***/ }),

/***/ "./client/User/containers/Auth/index.jsx":
/*!***********************************************!*\
  !*** ./client/User/containers/Auth/index.jsx ***!
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

var _detectWebp = __webpack_require__(/*! ../../../lib/detectWebp */ "./client/lib/detectWebp.js");

var _detectWebp2 = _interopRequireDefault(_detectWebp);

var _cookie = __webpack_require__(/*! ../../../lib/cookie */ "./client/lib/cookie.js");

var _cookie2 = _interopRequireDefault(_cookie);

var _Popup = __webpack_require__(/*! ../../components/Popup */ "./client/User/components/Popup/index.jsx");

var _Popup2 = _interopRequireDefault(_Popup);

var _axios = __webpack_require__(/*! ../../fetch/axios */ "./client/User/fetch/axios.js");

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

var _User = __webpack_require__(/*! ../../redux/User */ "./client/User/redux/User.js");

var _Iframe = __webpack_require__(/*! ../../redux/Iframe */ "./client/User/redux/Iframe.js");

var _index = __webpack_require__(/*! ./index.css */ "./client/User/containers/Auth/index.css");

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

    _this.state = {
      iframeNow: false
    };

    _this.responseInterceptorsHandle = _this.responseInterceptorsHandle.bind(_this);
    _this.messageHandle = _this.messageHandle.bind(_this);
    _this.loadHandle = _this.loadHandle.bind(_this);

    return _this;
  }

  /**
   * 响应拦截处理
   */


  (0, _createClass3.default)(Auth, [{
    key: 'responseInterceptorsHandle',
    value: function responseInterceptorsHandle() {

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
          window.localStorage.removeItem('access_token');
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

          window.localStorage.setItem('access_token', e.data.access_token);
          this.props.get_user();

          break;

        case 'logout':

          if (e.data.retCode !== 1) {
            return;
          }
          window.localStorage.removeItem('access_token');

          break;

      }
    }
  }, {
    key: 'detectWebpHandle',
    value: function detectWebpHandle() {

      // 检测浏览器是否支持webp
      (0, _detectWebp2.default)('alpha', function (feature, isSupport) {

        // === 二级域名cookie共享： === //
        // === cookie只能读写大于等于自己的域，因此同一级域名间的cookie共享需要将cookie设置到更高的域中 === //
        if (isSupport) {
          _cookie2.default.set('supportWebp', '1', {
            maxAge: 60 * 60 * 24 * 7,
            domain: _config2.default.COOKIE_DOMAIN,
            path: '/'
          });
        } else {
          _cookie2.default.set('supportWebp', '', {
            maxAge: 60 * 60 * 24 * 7,
            domain: _config2.default.COOKIE_DOMAIN,
            path: '/'
          });
        }
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      if (typeof window !== 'undefined') {

        this.detectWebpHandle();

        this.responseInterceptorsHandle();
      }
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
      var _this2 = this;

      return this.state.iframeNow ? _react2.default.createElement(
        'div',
        { className: 'global-component-wrap' },
        _react2.default.createElement('iframe', { ref: function ref($iframe) {
            return _this2.$iframe = $iframe;
          },
          src: _config2.default.SSO_DOMAIN + '?from=' + (this.props.href || location.href) + '&noOwnIframe=true',
          frameBorder: '0',
          className: _index2.default['sso-iframe'],
          onLoad: this.loadHandle
        }),
        _react2.default.createElement(_Popup2.default, null)
      ) : _react2.default.createElement(_Popup2.default, null);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      // === ssr方案中iframe不会触发load事件: 若是在服务器端整合了react再发给前端, 此时不会触发iframe的 load 事件, 只有在客户端中进行第一次渲染时才会触发 load 事件 === //
      // === 1 原因: 未查明, 估计是 renderToString 后iframe的 load事件 失效 ？？ === //
      // === 2 解决办法: 只能在客户端中动态插入 iframe 才能触发其 load 事件 === //
      this.setState({
        iframeNow: true
      });

      // 接收消息
      window.addEventListener('message', this.messageHandle, false);

      // 若redux中没有用户信息(如刷新页面后)
      var access_token = window.localStorage.getItem('access_token');
      if (access_token) {
        if (this.props.role !== -1) {
          return;
        }
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

  reactHotLoader.register(get_user, 'get_user', '/Users/garven/codetest/realProject/myblog/client/User/containers/Auth/index.jsx');
  reactHotLoader.register(send_message, 'send_message', '/Users/garven/codetest/realProject/myblog/client/User/containers/Auth/index.jsx');
  reactHotLoader.register(update_loaded_status, 'update_loaded_status', '/Users/garven/codetest/realProject/myblog/client/User/containers/Auth/index.jsx');
  reactHotLoader.register(Auth, 'Auth', '/Users/garven/codetest/realProject/myblog/client/User/containers/Auth/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/containers/BestArticle/index.css":
/*!******************************************************!*\
  !*** ./client/User/containers/BestArticle/index.css ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/User/containers/BestArticle/index.jsx":
/*!******************************************************!*\
  !*** ./client/User/containers/BestArticle/index.jsx ***!
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

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../components/HomeList/index */ "./client/User/components/HomeList/index.jsx");

var _Header = __webpack_require__(/*! ../../components/Header */ "./client/User/components/Header/index.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(/*! ../../components/Nav */ "./client/User/components/Nav/index.jsx");

var _Nav2 = _interopRequireDefault(_Nav);

var _LoadMore = __webpack_require__(/*! ../../components/LoadMore */ "./client/User/components/LoadMore/index.jsx");

var _LoadMore2 = _interopRequireDefault(_LoadMore);

var _ArticleList = __webpack_require__(/*! ../../redux/ArticleList */ "./client/User/redux/ArticleList.js");

var _debounce = __webpack_require__(/*! ../../../lib/debounce */ "./client/lib/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./index.css */ "./client/User/containers/BestArticle/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var BestArticle = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.bestReducer;
}, (0, _extends3.default)({}, _ArticleList.actions)), _dec(_class = function (_Component) {
  (0, _inherits3.default)(BestArticle, _Component);

  function BestArticle(props) {
    (0, _classCallCheck3.default)(this, BestArticle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BestArticle.__proto__ || (0, _getPrototypeOf2.default)(BestArticle)).call(this, props));

    _this.loadMoreHandle = _this.loadMoreHandle.bind(_this);
    _this.debounce = null;
    return _this;
  }

  (0, _createClass3.default)(BestArticle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.debounce = (0, _debounce2.default)(this.loadMoreHandle, 250);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'home-page' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'main',
          { className: 'main' },
          _react2.default.createElement(_Nav2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'best-article-block nav-details-item' },
            _react2.default.createElement(
              'div',
              { className: 'nav-details-inner', ref: function ref(div) {
                  return _this2.$scrollWrap = div;
                } },
              _react2.default.createElement(
                'ul',
                { className: 'article-list best--list' },
                this.props.data.map(function (item) {
                  return _react2.default.createElement(_index.BestItem, (0, _extends3.default)({}, item, { key: item.id }));
                }),
                _react2.default.createElement(_LoadMore2.default, {
                  is_end_page: this.props.is_end_page,
                  loadMoreRef: function loadMoreRef(area) {
                    return _this2.$area = area;
                  }
                })
              )
            )
          )
        )
      );
    }
  }, {
    key: 'loadMoreHandle',
    value: function loadMoreHandle() {
      var sHeight = window.screen.height;
      var top = this.$area.getBoundingClientRect().top;

      if (top < sHeight && !this.props.is_end_page) {
        this.props.get_best_list(this.props.page_num + 1, this.props.per_page);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 第一页的数据
      if (this.props.data.length === 0) {
        this.props.get_best_list(0, 10);
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
  return BestArticle;
}(_react.Component)) || _class);
BestArticle.defaultProps = {
  data: [],
  page_num: 0,
  per_page: 10,
  total_count: 10,
  is_end_page: false
};
exports.default = BestArticle;


if (_config2.default.ISDEV) {
  BestArticle.propTypess = {
    data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    page_num: _propTypes2.default.number.isRequired,
    per_page: _propTypes2.default.number.isRequired,
    total_count: _propTypes2.default.number.isRequired,
    is_end_page: _propTypes2.default.bool.isRequired
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BestArticle, 'BestArticle', '/Users/garven/codetest/realProject/myblog/client/User/containers/BestArticle/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/containers/CollectionOfWorks/index.css":
/*!************************************************************!*\
  !*** ./client/User/containers/CollectionOfWorks/index.css ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/User/containers/CollectionOfWorks/index.jsx":
/*!************************************************************!*\
  !*** ./client/User/containers/CollectionOfWorks/index.jsx ***!
  \************************************************************/
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

var _index = __webpack_require__(/*! ../../components/HomeList/index */ "./client/User/components/HomeList/index.jsx");

var _Header = __webpack_require__(/*! ../../components/Header */ "./client/User/components/Header/index.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(/*! ../../components/Nav */ "./client/User/components/Nav/index.jsx");

var _Nav2 = _interopRequireDefault(_Nav);

__webpack_require__(/*! ./index.css */ "./client/User/containers/CollectionOfWorks/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var CollectionOfWorks = function (_Component) {
  (0, _inherits3.default)(CollectionOfWorks, _Component);

  function CollectionOfWorks(props) {
    (0, _classCallCheck3.default)(this, CollectionOfWorks);
    return (0, _possibleConstructorReturn3.default)(this, (CollectionOfWorks.__proto__ || (0, _getPrototypeOf2.default)(CollectionOfWorks)).call(this, props));
  }

  (0, _createClass3.default)(CollectionOfWorks, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home-page' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'main',
          { className: 'main' },
          _react2.default.createElement(_Nav2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'collection-block nav-details-item' },
            _react2.default.createElement(
              'div',
              { className: 'nav-details-inner' },
              _react2.default.createElement(_index.WorksItem, null)
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = '作品集 - 张益铭';
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return CollectionOfWorks;
}(_react.Component);

exports.default = CollectionOfWorks;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CollectionOfWorks, 'CollectionOfWorks', '/Users/garven/codetest/realProject/myblog/client/User/containers/CollectionOfWorks/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/containers/Home/index.css":
/*!***********************************************!*\
  !*** ./client/User/containers/Home/index.css ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../components/HomeList/index */ "./client/User/components/HomeList/index.jsx");

var _Header = __webpack_require__(/*! ../../components/Header */ "./client/User/components/Header/index.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Bg = __webpack_require__(/*! ../../components/Bg */ "./client/User/components/Bg/index.jsx");

var _Bg2 = _interopRequireDefault(_Bg);

var _Nav = __webpack_require__(/*! ../../components/Nav */ "./client/User/components/Nav/index.jsx");

var _Nav2 = _interopRequireDefault(_Nav);

var _LoadMore = __webpack_require__(/*! ../../components/LoadMore */ "./client/User/components/LoadMore/index.jsx");

var _LoadMore2 = _interopRequireDefault(_LoadMore);

var _ArticleList = __webpack_require__(/*! ../../redux/ArticleList */ "./client/User/redux/ArticleList.js");

var _Storage = __webpack_require__(/*! ../../redux/Storage */ "./client/User/redux/Storage.js");

var _debounce = __webpack_require__(/*! ../../../lib/debounce */ "./client/lib/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./index.css */ "./client/User/containers/Home/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var get_latest_list = _ArticleList.actions.get_latest_list;
var get_storage = _Storage.actions.get_storage;

// === 生命周期: === //
// === 1 挂载或卸载: === //
// === 1.1 constructor(props): 初始化组件, 绑定函数到this === //
// === 1.2 componentWillMount(): 挂载前, 无法进行dom操作, 不能更新state, 一般用于配置根组件, 除此外能做的都可以在 constructor 中完成 === //
// === 1.3 render(): 将虚拟dom插到到真实dom === //
// === 1.4 componentDidMount(): 挂载后, 进行异步请求等 === //
// === 1.5 componentWillUnMount(): 卸载前, 通常做的是 释放内存, 重置选项等
//  === //
// === 2 更新: === //
// === 2.1 componentWillReceiveProps(nextProps) === //
// === 2.2 shouldComponentUpdate(nextProps, nextState): 判断是否应该更新 === //
// === 2.3 componentWillUpdate(nextProps, nextState): 更新前 === //
// === 2.4 render(): 将虚拟dom中改变了的反映到真实dom === //
// === 2.5 componentDidUpdate(): 更新后 === //

// === 装饰器: === //
// === 1 类的装饰: 必须在类的上一行写，用来修改类的行为, 将对象(函数/类)传入, 通过内部加强返回新的对象(函数/类) === //
// === 1.1 例子: @connect === //
/*
@connect (mapStateToProps, mapDispatchToProps)
class Home {}

// 等同于

class Home {}
Home = connect (mapStateToProps, mapDispatchToProps)(Home)
*/
// === 配置: babel-plugin-transform-decorators-legacy + bebal plugins中 "transform-decorators-legacy" === //

var Home = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.latestReducer;
}, { get_latest_list: get_latest_list, get_storage: get_storage }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.loadMoreHandle = _this.loadMoreHandle.bind(_this);
    _this.debounce = null;

    return _this;
  }

  // === defaultProps: 提供默认值，当父组件没有提供相应的props时就使用此 === //


  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.debounce = (0, _debounce2.default)(this.loadMoreHandle, 100).bind(this);
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
                  is_end_page: this.props.is_end_page,
                  loadMoreRef: function loadMoreRef(area) {
                    return _this2.$loadmore = area;
                  }
                })
              )
            )
          )
        )
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

      if (top < sHeight && !this.props.is_end_page) {
        this.props.get_latest_list(this.props.page_num + 1, this.props.per_page);
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

      // 存localStorage
      !localStorage.getItem('loadingGif') && this.props.get_storage();
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

// === propTypes: 会在 defaultProps 之后执行，因此对 defaultProps 也会检查 === //

Home.defaultProps = {
  data: [{}],
  page_num: 0,
  per_page: 10,
  total_count: 10,
  is_end_page: false
};
exports.default = Home;
if (_config2.default.ISDEV) {
  Home.propTypes = {
    data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    page_num: _propTypes2.default.number.isRequired,
    per_page: _propTypes2.default.number.isRequired,
    total_count: _propTypes2.default.number.isRequired,
    is_end_page: _propTypes2.default.bool.isRequired
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
  reactHotLoader.register(get_storage, 'get_storage', '/Users/garven/codetest/realProject/myblog/client/User/containers/Home/index.jsx');
  reactHotLoader.register(Home, 'Home', '/Users/garven/codetest/realProject/myblog/client/User/containers/Home/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/containers/NoMatch/index.css":
/*!**************************************************!*\
  !*** ./client/User/containers/NoMatch/index.css ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/User/containers/NoMatch/index.jsx":
/*!**************************************************!*\
  !*** ./client/User/containers/NoMatch/index.jsx ***!
  \**************************************************/
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

__webpack_require__(/*! ./index.css */ "./client/User/containers/NoMatch/index.css");

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

  reactHotLoader.register(NoMatch, 'NoMatch', '/Users/garven/codetest/realProject/myblog/client/User/containers/NoMatch/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/containers/NoMatch/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/containers/SearchList/index.css":
/*!*****************************************************!*\
  !*** ./client/User/containers/SearchList/index.css ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home-page":"home-page_3F-rO","nav-details-item":"nav-details-item_1teX-","article-search-block":"article-search-block_2Tg6P","ant-pagination":"ant-pagination_3Cdwa"};

/***/ }),

/***/ "./client/User/containers/SearchList/index.jsx":
/*!*****************************************************!*\
  !*** ./client/User/containers/SearchList/index.jsx ***!
  \*****************************************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../components/HomeList/index */ "./client/User/components/HomeList/index.jsx");

var _Header = __webpack_require__(/*! ../../components/Header */ "./client/User/components/Header/index.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _ArticleList = __webpack_require__(/*! ../../redux/ArticleList */ "./client/User/redux/ArticleList.js");

var _config = __webpack_require__(/*! ../../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./index.css */ "./client/User/containers/SearchList/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var get_search_list = _ArticleList.actions.get_search_list;
var SearchList = (_dec = (0, _reactRedux.connect)(function (state) {
  return state.searchReducer;
}, { get_search_list: get_search_list }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(SearchList, _Component);

  function SearchList(props) {
    (0, _classCallCheck3.default)(this, SearchList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchList.__proto__ || (0, _getPrototypeOf2.default)(SearchList)).call(this, props));

    _this.paginateHandle = _this.paginateHandle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SearchList, [{
    key: 'paginateHandle',
    value: function paginateHandle() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'home-page' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'main',
          { className: 'main' },
          _react2.default.createElement(
            'div',
            { className: 'article-search-block nav-details-item' },
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
      if (this.props.data.length === 0) {
        // 通过url获取参数
        var querys = this.props.location.search.slice(1);
        var paramsObj = {};
        querys.split('&').forEach(function (item) {
          var key = item.split('=')[0];
          var val = item.split('=')[1];
          paramsObj[key] = val;
        });
        this.props.get_search_list(paramsObj.title, paramsObj.page_num, paramsObj.per_page);
      }
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return SearchList;
}(_react.Component)) || _class);
SearchList.defaultProps = {
  data: [],
  page_num: 0,
  per_page: 10,
  total_count: 10,
  is_end_page: false
};
exports.default = SearchList;


if (_config2.default.ISDEV) {
  SearchList.propTypess = {
    articleList: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    page_num: _propTypes2.default.number.isRequired,
    per_page: _propTypes2.default.number.isRequired,
    total_count: _propTypes2.default.number.isRequired,
    is_end_page: _propTypes2.default.bool.isRequired
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get_search_list, 'get_search_list', '/Users/garven/codetest/realProject/myblog/client/User/containers/SearchList/index.jsx');
  reactHotLoader.register(SearchList, 'SearchList', '/Users/garven/codetest/realProject/myblog/client/User/containers/SearchList/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/fetch/axios.js":
/*!************************************!*\
  !*** ./client/User/fetch/axios.js ***!
  \************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === 状态码分类: === //
/*

1xx: 信息，服务器收到请求，需要请求者继续执行操作
2xx: 成功，操作被成功接收并处理
3xx: 重定向，需要进一步的操作以完成请求
4xx: 客户端错误，请求包含语法错误或无法完成请求
5xx: 服务器错误，服务器在处理请求的过程中发生了错误

*/

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
var domainFileServer = _config2.default.FILE_SERVER_DOMAIN;

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

  // works
  get_works: function get_works() {
    return get(domainFileServer + '/api/works');
  },

  // user
  get_user: function get_user() {
    return get(domainIndex + '/api/user');
  },
  logout: function logout() {
    return patch(domainIndex + '/api/logout');
  },

  // comment
  get_comment: function get_comment(article_id, page_num, per_page) {
    return get(domainIndex + '/api/comment?article_id=' + article_id + '&per_page=' + per_page + '&page_num=' + page_num);
  },
  add_comment: function add_comment(data) {
    return post(domainIndex + '/api/comment', data);
  },

  // 获取点赞数
  get_liked: function get_liked(name, value, page_num, per_page) {
    return get(domainIndex + '/api/liked?' + name + '=' + value + '&per_page=' + per_page + '&page_num=' + page_num);
  },
  add_liked: function add_liked(data) {
    return post(domainIndex + '/api/liked', data);
  },
  update_liked: function update_liked(data) {
    return patch(domainIndex + '/api/liked', data);
  },

  // other
  getIndexStorage: function getIndexStorage() {
    return get(domainIndex + '/api/index/storage');
  }

};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(axios, 'axios', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(config, 'config', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(isSetInterceptors, 'isSetInterceptors', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(setResponseInterceptorsInfo, 'setResponseInterceptorsInfo', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(getRespnseInterceptorsInfo, 'getRespnseInterceptorsInfo', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(get, 'get', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(post, 'post', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(del, 'del', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(patch, 'patch', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(domainIndex, 'domainIndex', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(domainFileServer, 'domainFileServer', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(api, 'api', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/fetch/axios.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/index.jsx":
/*!*******************************!*\
  !*** ./client/User/index.jsx ***!
  \*******************************/
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

var _index = __webpack_require__(/*! ./router/index */ "./client/User/router/index.jsx");

var _store = __webpack_require__(/*! ./redux/store */ "./client/User/redux/store.js");

var _store2 = _interopRequireDefault(_store);

var _config = __webpack_require__(/*! ../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./assets/font/iconfont.css */ "./client/User/assets/font/iconfont.css");

__webpack_require__(/*! ./assets/style/reset.css */ "./client/User/assets/style/reset.css");

__webpack_require__(/*! ./router/index.css */ "./client/User/router/index.css");

__webpack_require__(/*! ../../favicon.ico */ "./favicon.ico");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === 点击劫持防御 - 禁止内嵌: window有两个属性, top和parent, top指向最上层的window, parent指向父window, 可通过 top.location 与 window.location 对比来确定是否被内嵌 === //
if (typeof window !== 'undifined' && top.location != window.location) {
  top.location = window.location;
}

// 入口
render();

// hrm
module.hot && module.hot.accept(/*! ./router */ "./client/User/router/index.jsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {
  return render();
})(__WEBPACK_OUTDATED_DEPENDENCIES__); });

/**
 * render函数
 */
function render() {
  _reactDom2.default.render(_config2.default.ISDEV ? _react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: _store2.default },
      _react2.default.createElement(_index.IndexRouteMap, null)
    )
  ) : _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_index.IndexRouteMap, null)
  ), document.getElementById('root'));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, 'render', '/Users/garven/codetest/realProject/myblog/client/User/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/Article.js":
/*!**************************************!*\
  !*** ./client/User/redux/Article.js ***!
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

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _initialState;

exports.reducer = reducer;

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/User/fetch/axios.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = (_initialState = {
  id: 0,
  title: '',
  summary: '',
  content: '',
  pubtime: '',
  article_type_id: 0,
  prev_id: 0,
  prev_title: 0,
  next_id: 0
}, (0, _defineProperty3.default)(_initialState, 'prev_title', 0), (0, _defineProperty3.default)(_initialState, 'cover', ''), (0, _defineProperty3.default)(_initialState, 'read_num', 0), (0, _defineProperty3.default)(_initialState, 'liked', []), (0, _defineProperty3.default)(_initialState, 'comment_num', 0), _initialState);

var actionTypes = exports.actionTypes = {
  RESPONSE_ARTICLE: 'RESPONSE_ARTICLE',
  ADD_LIKED: 'ADD_LIKED',
  UPDATE_LIKED: 'UPDATE_LIKED'
};

var actions = exports.actions = {

  get_article: function get_article(id) {
    return function (dispatch) {
      return _axios.api.get_article(id).then(function (res) {
        return dispatch((0, _extends3.default)({}, res.data, {
          type: actionTypes.RESPONSE_ARTICLE
        }));
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  add_liked: function add_liked(data) {
    return function (dispatch) {
      return _axios.api.add_liked(data).then(function (res) {
        return dispatch({
          type: actionTypes.ADD_LIKED,
          article_id: data.article_id,
          liked_id: res.id,
          user_id: res.user_id
        });
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  update_liked: function update_liked(data) {
    return function (dispatch) {
      return _axios.api.update_liked(data).then(function (res) {
        return dispatch({
          type: actionTypes.UPDATE_LIKED,
          liked_id: data.id,
          article_id: data.article_id,
          status: data.status
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

    case actionTypes.RESPONSE_ARTICLE:
      return (0, _extends3.default)({}, state, action);

    case actionTypes.ADD_LIKED:

      var newItem = {
        id: action.liked_id,
        status: 1,
        user_id: action.user_id
      };

      return (0, _extends3.default)({}, state, {
        liked: state.liked.concat(newItem)
      });

    case actionTypes.UPDATE_LIKED:
      return (0, _extends3.default)({}, state, {
        liked: state.liked.map(function (item) {
          if (item.id === action.liked_id) {
            return (0, _extends3.default)({}, item, {
              status: action.status
            });
          }
          return item;
        })
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/User/redux/Article.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/User/redux/Article.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/User/redux/Article.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/Article.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/ArticleCategory.js":
/*!**********************************************!*\
  !*** ./client/User/redux/ArticleCategory.js ***!
  \**********************************************/
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

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/User/fetch/axios.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  data: []
};

var actionTypes = exports.actionTypes = {
  GET_CATEGORY_LIST: 'GET_CATEGORY_LIST'
};

var actions = exports.actions = {
  get_category_list: function get_category_list() {
    return function (dispatch) {
      return _axios.api.get_category().then(function (res) {
        return dispatch({
          type: actionTypes.GET_CATEGORY_LIST,
          data: res.data
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
    case actionTypes.GET_CATEGORY_LIST:
      return (0, _extends3.default)({}, state, {
        data: [].concat((0, _toConsumableArray3.default)(action.data))
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleCategory.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleCategory.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleCategory.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleCategory.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/ArticleLinkList.js":
/*!**********************************************!*\
  !*** ./client/User/redux/ArticleLinkList.js ***!
  \**********************************************/
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

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/User/fetch/axios.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  data: []
};

var actionTypes = exports.actionTypes = {
  GET_ARTICLE_LINK_LIST: 'RESPONSE_CATEGORY_LIST'
};

var actions = exports.actions = {
  get_article_link_list: function get_article_link_list() {
    return function (dispatch) {
      return _axios.api.get_article_linkList().then(function (res) {
        return dispatch({
          type: actionTypes.GET_ARTICLE_LINK_LIST,
          data: res.data
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
    case actionTypes.GET_ARTICLE_LINK_LIST:
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleLinkList.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleLinkList.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleLinkList.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleLinkList.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/ArticleList.js":
/*!******************************************!*\
  !*** ./client/User/redux/ArticleList.js ***!
  \******************************************/
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

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/User/fetch/axios.js");

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
        return dispatch((0, _extends3.default)({}, res, {
          type: actionTypes.RESPONSE_LATEST_LIST
        }));
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  get_best_list: function get_best_list(page_num, per_page) {
    return function (dispatch) {
      return _axios.api.get_article_bestlist(page_num, per_page).then(function (res) {
        return dispatch((0, _extends3.default)({}, res, {
          type: actionTypes.RESPONSE_BEST_LIST
        }));
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  get_search_list: function get_search_list(title, page_num, per_page) {
    return function (dispatch) {
      return _axios.api.get_searchlist(title, page_num, per_page).then(function (res) {
        return dispatch((0, _extends3.default)({}, res, {
          type: actionTypes.RESPONSE_SEARCH_LIST
        }));
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  get_all_list: function get_all_list(data) {
    return {
      type: actionTypes.GET_All_LIST,
      data: data
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

  reactHotLoader.register(initialStateForLatest, 'initialStateForLatest', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  reactHotLoader.register(initialStateForBest, 'initialStateForBest', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  reactHotLoader.register(initialStateForSearch, 'initialStateForSearch', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  reactHotLoader.register(initialStateForAll, 'initialStateForAll', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  reactHotLoader.register(latestReducer, 'latestReducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  reactHotLoader.register(bestReducer, 'bestReducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  reactHotLoader.register(searchReducer, 'searchReducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  reactHotLoader.register(allReducer, 'allReducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/ArticleList.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/Comment.js":
/*!**************************************!*\
  !*** ./client/User/redux/Comment.js ***!
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

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/User/fetch/axios.js");

var _iterator = __webpack_require__(/*! ../../lib/iterator */ "./client/lib/iterator.js");

var _type = __webpack_require__(/*! ../../lib/type */ "./client/lib/type.js");

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  data: [],
  page_num: 0,
  per_page: 10,
  total_count: 0,
  is_end_page: false,
  content: '',
  to_uid: '',
  to_name: ''
};

var actionTypes = exports.actionTypes = {
  GET_COMMENTS: 'GET_COMMENTS',
  GET_LIKED: 'GET_LIKED',
  ADD_LIKED: 'ADD_LIKED',
  UPDATE_LIKED: 'UPDATE_LIKED',
  UPDATE_TO_USER: 'UPDATE_TO_USER',
  UPDATE_CONTENT: 'UPDATE_CONTENT',
  POST_COMMENT: 'POST_COMMENT'
};

var actions = exports.actions = {
  get_comment: function get_comment(article_id, page_num, per_page) {
    return function (dispatch) {
      return _axios.api.get_comment(article_id, page_num, per_page).then(function (res) {

        dispatch((0, _extends3.default)({}, res, {
          type: actionTypes.GET_COMMENTS
        }));

        // 转换成 1,2,3,4 的格式
        var comments_id = '';
        res.data.forEach(function (item) {
          comments_id += item.id + ',';
        });
        comments_id = comments_id.slice(0, comments_id.length - 1);

        actions.get_liked('comments_id', comments_id, page_num, per_page)(dispatch);
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  get_liked: function get_liked(name, value, per_page, page_num) {
    return function (dispatch) {
      return _axios.api.get_liked(name, value, per_page, page_num).then(function (res) {
        return dispatch((0, _extends3.default)({}, res, {
          type: actionTypes.GET_LIKED
        }));
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  add_liked: function add_liked(data) {
    return function (dispatch) {
      return _axios.api.add_liked(data).then(function (res) {
        return dispatch({
          type: actionTypes.ADD_LIKED,
          comment_id: data.comment_id,
          liked_id: res.id,
          user_id: res.user_id
        });
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  update_liked: function update_liked(data) {
    return function (dispatch) {
      return _axios.api.update_liked(data).then(function (res) {
        return dispatch({
          type: actionTypes.UPDATE_LIKED,
          liked_id: data.id,
          comment_id: data.comment_id,
          status: data.status
        });
      }).catch(function (err) {
        console.error(err.message);
      });
    };
  },

  update_to_user: function update_to_user(from_uid) {
    return {
      type: actionTypes.UPDATE_TO_USER,
      from_uid: from_uid
    };
  },

  update_content: function update_content(content) {
    return {
      type: actionTypes.UPDATE_CONTENT,
      content: content
    };
  },

  post_comment: function post_comment(data) {
    return function (dispatch) {
      return _axios.api.add_comment(data).then(function (res) {

        // 更新数据
        dispatch({
          type: actionTypes.POST_COMMENT,
          commentItem: res.data
        });

        // 清空textarea
        dispatch({
          type: actionTypes.UPDATE_CONTENT,
          content: ''
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

    case actionTypes.GET_COMMENTS:

      return (0, _extends3.default)({}, state, action);

    case actionTypes.GET_LIKED:

      if (_type2.default.isPlainObject(action.data)) {
        return state;
      }

      return (0, _extends3.default)({}, state, {
        data: state.data.map(function (outerItem) {
          for (var comment_id in action.data) {
            if (parseInt(comment_id) === parseInt(outerItem.id)) {
              return (0, _extends3.default)({}, outerItem, {
                liked: outerItem.liked.concat(action.data[comment_id])
              });
            }
          }

          return outerItem;
        })

        // === 不能直接修改 state, reducer是纯函数,是通过比较旧的 state 以及 旧的 state 通过现在的 action 计算后的 新state 来决定是否数据由变化  === //
      });case actionTypes.ADD_LIKED:

      // let data = state.data
      //
      // stop(data, item => {
      //
      //   if (item.id === action.comment_id) {
      //     item.liked_num = 1
      //     return false
      //   }
      //
      // })

      return (0, _extends3.default)({}, state, {
        data: state.data.map(function (item) {
          if (item.id === action.comment_id) {

            var newItem = {
              id: action.liked_id,
              status: 1,
              user_id: action.user_id
            };

            return (0, _extends3.default)({}, item, {
              liked: item.liked.concat(newItem)
            });
          }
          return item;
        })
      });

    case actionTypes.UPDATE_LIKED:

      return (0, _extends3.default)({}, state, {
        data: state.data.map(function (outer) {
          if (action.comment_id === outer.id) {
            return (0, _extends3.default)({}, outer, {
              liked: outer.liked.map(function (inner) {
                if (inner.id === action.liked_id) {
                  return (0, _extends3.default)({}, inner, {
                    status: action.status
                  });
                }
                return inner;
              })
            });
          }
          return outer;
        })
      });

    case actionTypes.UPDATE_CONTENT:

      return (0, _extends3.default)({}, state, {
        content: action.content
      });

    case actionTypes.UPDATE_TO_USER:

      var content = state.content;

      var to_name = '';
      (0, _iterator.stop)(state.data, function (item) {
        if (item.from_uid === action.from_uid) {
          to_name = item.from_name;
          return false;
        }
      });

      to_name = '@' + to_name + ':';

      if (content === '') {
        content = to_name;
      } else if (/^(@\w+?:)/.test(content)) {
        content.replace(RegExp.$1, to_name);
      } else {
        content = to_name + content;
      }

      return (0, _extends3.default)({}, state, {
        content: content,
        to_uid: action.to_uid
      });

    case actionTypes.POST_COMMENT:

      return (0, _extends3.default)({}, state, {
        data: [action.commentItem].concat(state.data)
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/User/redux/Comment.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/User/redux/Comment.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/User/redux/Comment.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/Comment.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/Iframe.js":
/*!*************************************!*\
  !*** ./client/User/redux/Iframe.js ***!
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

var _User = __webpack_require__(/*! ./User */ "./client/User/redux/User.js");

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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/User/redux/Iframe.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/User/redux/Iframe.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/User/redux/Iframe.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/Iframe.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/Popup.js":
/*!************************************!*\
  !*** ./client/User/redux/Popup.js ***!
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/User/redux/Popup.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/User/redux/Popup.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/User/redux/Popup.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/Popup.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/Storage.js":
/*!**************************************!*\
  !*** ./client/User/redux/Storage.js ***!
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
exports.reducer = reducer;

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/User/fetch/axios.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  data: {}
};

var actionTypes = exports.actionTypes = {
  GET_STORAGE: 'GET_STORAGE'
};

var actions = exports.actions = {
  get_storage: function get_storage() {

    return function (dispatch) {};
  }
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.GET_STORAGE:
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/User/redux/Storage.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/User/redux/Storage.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/User/redux/Storage.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/Storage.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/User.js":
/*!***********************************!*\
  !*** ./client/User/redux/User.js ***!
  \***********************************/
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

var _axios = __webpack_require__(/*! ../fetch/axios */ "./client/User/fetch/axios.js");

var _Iframe = __webpack_require__(/*! ./Iframe */ "./client/User/redux/Iframe.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initialState = {
  id: -1,
  name: '',
  github_url: '',
  avatar_url: '',
  email: '',
  role: -1
};

var actionTypes = exports.actionTypes = {
  GET_USER_INFO: 'GET_USER_INFO',
  RESET_USER_INFO: 'RESET_USER_INFO',
  LOGOUT: 'LOGOUT'
};

var actions = exports.actions = {

  get_user: function get_user() {
    return function (dispatch) {
      return _axios.api.get_user().then(function (res) {
        return dispatch((0, _extends3.default)({}, res.data, {
          type: actionTypes.GET_USER_INFO
        }));
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
  }

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.GET_USER_INFO:
      return (0, _extends3.default)({}, state, action);

    case actionTypes.RESET_USER_INFO:
      return (0, _extends3.default)({}, state, {
        name: '',
        github_url: '',
        avatar_url: '',
        email: '',
        role: -1
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

  reactHotLoader.register(initialState, 'initialState', '/Users/garven/codetest/realProject/myblog/client/User/redux/User.js');
  reactHotLoader.register(actionTypes, 'actionTypes', '/Users/garven/codetest/realProject/myblog/client/User/redux/User.js');
  reactHotLoader.register(actions, 'actions', '/Users/garven/codetest/realProject/myblog/client/User/redux/User.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/garven/codetest/realProject/myblog/client/User/redux/User.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/index.js":
/*!************************************!*\
  !*** ./client/User/redux/index.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _ArticleList = __webpack_require__(/*! ./ArticleList */ "./client/User/redux/ArticleList.js");

var _ArticleCategory = __webpack_require__(/*! ./ArticleCategory */ "./client/User/redux/ArticleCategory.js");

var _Article = __webpack_require__(/*! ./Article */ "./client/User/redux/Article.js");

var _ArticleLinkList = __webpack_require__(/*! ./ArticleLinkList */ "./client/User/redux/ArticleLinkList.js");

var _Popup = __webpack_require__(/*! ./Popup */ "./client/User/redux/Popup.js");

var _Storage = __webpack_require__(/*! ./Storage */ "./client/User/redux/Storage.js");

var _User = __webpack_require__(/*! ./User */ "./client/User/redux/User.js");

var _Iframe = __webpack_require__(/*! ./Iframe */ "./client/User/redux/Iframe.js");

var _Comment = __webpack_require__(/*! ./Comment */ "./client/User/redux/Comment.js");

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
  PopupReducer: _Popup.reducer,
  StorageReducer: _Storage.reducer,
  UserReducer: _User.reducer,
  IframeReducer: _Iframe.reducer,
  CommentReducer: _Comment.reducer
});

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/redux/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/redux/store.js":
/*!************************************!*\
  !*** ./client/User/redux/store.js ***!
  \************************************/
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

var _index = __webpack_require__(/*! ./index */ "./client/User/redux/index.js");

var _index2 = _interopRequireDefault(_index);

var _config = __webpack_require__(/*! ../../../config */ "./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var IS_CLIENT_ENV = typeof window !== 'undefined';

// === redux middleware: 提供了一个分类处理action的机会，可检阅每个流过的action，挑选出特定类型的action进行相应操作 === //
// === 1 没有middleware: === //
/*
        callback            action            state
button ---------> dispatch --------> reducer --------> view
*/
// === 2 有middleware: === //
/*
                 ---------------------------------------- 
                 |           new dispatch                |
        callback |             action                    | action
button ---------> mid1 -> mid2 ---------> ... -> dispatch --------> reducer
*/
// === 3 middleware运行原理: === //
// === 3.1 函数式编程思想设计: === //


// === 函数组合: 利用compose将多个函数组合成一个函数，让代码从右向左执行而非由内而外执行，提高可读性 === //

var middlewares = [_reduxThunk2.default];

var storeEnhancers = _config2.default.ISDEV && IS_CLIENT_ENV ? (0, _redux.compose)( // 开发环境 + 客户端
_redux.applyMiddleware.apply(undefined, middlewares), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}) : (0, _redux.compose)( // 开发环境 + 后端 || 生产环境
_redux.applyMiddleware.apply(undefined, middlewares));

function configureStore() {
  var initialStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = (0, _redux.createStore)(_index2.default, initialStore, storeEnhancers);

  return store;
}

// 前后端同构时的数据埋点
var store = configureStore(IS_CLIENT_ENV && window.__REDUX_DATA__ || {});

var _default = store;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IS_CLIENT_ENV, 'IS_CLIENT_ENV', '/Users/garven/codetest/realProject/myblog/client/User/redux/store.js');
  reactHotLoader.register(middlewares, 'middlewares', '/Users/garven/codetest/realProject/myblog/client/User/redux/store.js');
  reactHotLoader.register(storeEnhancers, 'storeEnhancers', '/Users/garven/codetest/realProject/myblog/client/User/redux/store.js');
  reactHotLoader.register(configureStore, 'configureStore', '/Users/garven/codetest/realProject/myblog/client/User/redux/store.js');
  reactHotLoader.register(store, 'store', '/Users/garven/codetest/realProject/myblog/client/User/redux/store.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/redux/store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/router/history.js":
/*!***************************************!*\
  !*** ./client/User/router/history.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

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

var _default = typeof window !== 'undefined' ? (0, _createBrowserHistory2.default)() : {};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/User/router/history.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/User/router/index.css":
/*!**************************************!*\
  !*** ./client/User/router/index.css ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/User/router/index.jsx":
/*!**************************************!*\
  !*** ./client/User/router/index.jsx ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexRouteMap = undefined;

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../containers/Home/index */ "./client/User/containers/Home/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../containers/SearchList/index */ "./client/User/containers/SearchList/index.jsx");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../containers/BestArticle/index */ "./client/User/containers/BestArticle/index.jsx");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../containers/ArticleCategory/index */ "./client/User/containers/ArticleCategory/index.jsx");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ../containers/CollectionOfWorks/index */ "./client/User/containers/CollectionOfWorks/index.jsx");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ../containers/Article/index */ "./client/User/containers/Article/index.jsx");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(/*! ../containers/NoMatch/index */ "./client/User/containers/NoMatch/index.jsx");

var _index14 = _interopRequireDefault(_index13);

var _Auth = __webpack_require__(/*! ../containers/Auth */ "./client/User/containers/Auth/index.jsx");

var _Auth2 = _interopRequireDefault(_Auth);

var _history = __webpack_require__(/*! ./history */ "./client/User/router/history.js");

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// 官网
var IndexRouteMap = function IndexRouteMap() {
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
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _index2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/search', component: _index4.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/bestlist', component: _index6.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/category', component: _index8.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/works', component: _index10.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/article/:id', component: _index12.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _index14.default })
      )
    )
  );
};

exports.IndexRouteMap = IndexRouteMap;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexRouteMap, 'IndexRouteMap', '/Users/garven/codetest/realProject/myblog/client/User/router/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/bst.js":
/*!***************************!*\
  !*** ./client/lib/bst.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inheritPrototype = __webpack_require__(/*! ./inheritPrototype */ "./client/lib/inheritPrototype.js");

var _inheritPrototype2 = _interopRequireDefault(_inheritPrototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})(); // === 树: 由n个结点组成的有限集合 === //
// === 1 根结点: 只有后继结点没有前驱结点 === //
// === 2 度: 节点所拥有子树的棵树 === //
// === 3 层次: 节点处于树中的层次位置, 如根结点的层次为1, 之后+1 === //
// === 4 高度/深度: 树中节点的最大层次数 === //
/*
      A
    B   C
  D   E   F
*/
// === 5 有序对(A, B) 称为连接 A, B 结点的分支/边 === //
// === 6 设 (X0, X1, ..., Xk)(0 <= k < n) 是由树中结点组成的一个序列, 且(Xi, Xi+1)(0 <= i< k)都是树中的边, 则称该序列为从 X0到Xk 的一条路径, 路径长度为路径上的边数 === //
// === 6.1 如: A 到 D 的路径为 (A, B, D), 路径长度为2 === //
// === 7 直径: 从根到叶子结点一条最长路径，路径长度为 树的高度 - 1 === //
// === 8 森林: m(m >= 0)棵互不相交的树的集合 === //

// === 二叉树: === //
// === 1 解题思路: === //
/*

1 连续两个结点可推断出相对位置
2 充分利用猜测会更快

前: 1 | 2 4 | 3 5 7 6      根左右, 第一个为根
中: 2 4 | 1 | 5 7 3 6      左根右, 用根划分出 左子树 右子树
后: 4 2 | 7 5 6 3 | 1      左右根, 最后一个为根

*/

// === 二叉查找树： === //
// === 1 优点：O(logn)的查找效率和插入效率 === //
// === 2 使用场景: === //
// === 2.1 数据量大且随机分布 === //
// === 2.2 频繁地查找和插入 === //
// === 3 缺点：若数据有序，会造成只有左子树或右子树，从而退化为链表，查找变成O(n) === //

/**
 * 二叉树节点
 * @constructs Node
 * @param {*} data - 数据
 * @param {Object} left - 左子树
 * @param {Object} right - 右子树
 */
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

/**
 * 获取数据
 * @return {*}
 */
var show = function show() {
  return this.data;
};

/**
 * @constructs BST
 * // === 只初始化根节点为null === //
 */
function BST() {
  this.root = null;
}

BST.prototype = {

  constructor: BST,

  /**
   * 插入
   * // === 思路： === //
   * // === 1.若没有根节点则新节点为根节点 === //
   * // === 2.否则，循环中，设置一个当前节点变量，从根节点开始，数据比cur小的，cur更新为其左子树，若为null，则将新节点的引用给它，退出循环；右子树的判断同理 === //
   * @param {*} data - 数据
   */
  insert: function insert(data) {
    var n = new Node(data, null, null);

    if (this.root === null) {
      this.root = n;
    } else {
      var cur = this.root;
      var parent = void 0;

      while (true) {
        parent = cur;

        if (data < cur.data) {
          cur = cur.left;

          if (cur === null) {
            parent.left = n;
            break;
          }
        } else {
          cur = cur.right;

          if (cur === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  },

  /**
   * 中序遍历
   * // === 利用递归，顺序为：左子树 - 显示当前节点 - 右子树 === //
   * @param {Object} node - 节点
   * @param {Function} fn - 回调
   */
  inOrder: function inner(node, fn) {
    if (!(node === null)) {
      inner(node.left, fn);
      fn(node.show());
      inner(node.right, fn);
    }
  },

  /**
   * 先序遍历
   * // === 函数表达式中，name为函数内部属性，只在函数内部有效；省略则为匿名函数，如inner === //
   * // === arguments.callee在es5中的严格模式下被禁用，由于性能问题最好递归时不要用匿名函数 === //
   * // === 利用递归，顺序为：显示当前节点 - 左子树 - 右子树 === //
   * @param {Object} node - 节点
   * @param {Function} fn - 回调
   */
  preOrder: function inner(node, fn) {
    if (!(node === null)) {
      fn(node.show());
      inner(node.left, fn);
      inner(node.right, fn);
    }
  },

  /**
   * 后序遍历
   * // === 利用递归，顺序为：左子树 - 右子树 - 显示当前节点 === //
   * @param {Object} node - 节点
   * @param {Function} fn - 回调
   */
  postOrder: function inner(node, fn) {
    if (!(node === null)) {
      inner(node.left, fn);
      inner(node.right, fn);
      fn(node.show());
    }
  },

  /**
   * 获取最小值
   * // === 左子树的顶端永远最小，实质上是链表的查找 === //
   * @param {Object} node - 起点
   * @return {*}
   */
  getMin: function getMin(node) {
    var cur = node || this.root;

    while (!(cur.left === null)) {
      cur = cur.left;
    }

    return cur.data;
  },

  /**
   * 获取最大值
   * // === 右子树的顶端永远最大，实质上是链表的查找 === //
   * @param {Object} node - 起点
   * @return {*}
   */
  getMax: function getMax(node) {
    var cur = node || this.root;

    while (!(cur.right === null)) {
      cur = cur.right;
    }

    return cur.data;
  },

  /**
   * 查找节点
   * // === 只要不为null就继续，若与当前节点的数据相等则返回，否则，小往左，大往右 === //
   * @param {*} data - 数据
   * @return {Null|Object}
   */
  find: function find(data) {
    var cur = this.root;

    while (cur !== null) {
      if (data === cur.data) {
        return cur;
      } else if (data < cur.data) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }

    return null;
  },

  /**
   * 移除节点
   * // === 思路：从根节点开始递归查找，查到目标后，一层层返回 === //
   * // === 4种情况：null, 等于, 小于， 大于 === //
   * // === 等于的时候考虑：无子节点(置为null)，无左子节点(返右子节点)，无右子节点(返左子节点)，都有(替换为找到右子节点的最小值，因为比左后代都大比右后代都小) === //
   * // === 小于的时候，往左子树找；大于的时候往右子节点找 === //
   * @param {Object} node - 节点
   * @param {*} data - 数据
   * @private
   */
  removeNode: function inner(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      var tmpNode = this.getMin(node.right);
      node.data = tmpNode.data;
      node.right = inner(node.right, tmpNode.data);

      return node;
    } else if (data < node.data) {
      node.left = inner(node.left, data);
      return node;
    } else {
      node.right = inner(node.right, data);
      return node;
    }
  },

  /**
   * 移除节点
   * // === 递归到的节点都重新赋值1次 === //
   * @param {*} data - 数据
   */
  remove: function remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // for count:
};function Node4C(data, left, right) {
  Node.apply(this, arguments);
  this.count = 1;
}

function BST4C() {
  BST.call(this);
}

(0, _inheritPrototype2.default)(BST4C, BST);

BST4C.prototype.update = function (data) {
  var d = this.find(data);
  ++d.count;
  return d;
};

var _default = BST;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Node, 'Node', '/Users/garven/codetest/realProject/myblog/client/lib/bst.js');
  reactHotLoader.register(show, 'show', '/Users/garven/codetest/realProject/myblog/client/lib/bst.js');
  reactHotLoader.register(BST, 'BST', '/Users/garven/codetest/realProject/myblog/client/lib/bst.js');
  reactHotLoader.register(Node4C, 'Node4C', '/Users/garven/codetest/realProject/myblog/client/lib/bst.js');
  reactHotLoader.register(BST4C, 'BST4C', '/Users/garven/codetest/realProject/myblog/client/lib/bst.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/lib/bst.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/cookie.js":
/*!******************************!*\
  !*** ./client/lib/cookie.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 获取cookie
 * // === 思路: 从字符串中获取特定字符   === //
 * // === 1 用例: "supportWebp=true; csrf_token=1530792624239" === //
 * // === 2 获取如 csrf_token= 后面的位置, 截取到 ; 或者 结尾 === //
 * @param {String} name - cookie名称
 * @return {String}
 */
function get(name) {

  var cookie = document.cookie;
  var cName = encodeURIComponent(name) + '=';
  var cStart = cookie.indexOf(cName);
  var cVal = '';

  if (cStart > -1) {

    var cEnd = cookie.indexOf(';', cStart);
    if (cEnd === -1) {
      cEnd = cookie.length;
    }

    cVal = decodeURIComponent(cookie.substring(cStart + cName.length, cEnd));
  }

  return cVal;
}

/**
 * 设置cookie
 * @param {String} name - cookie名称
 * @param {String} value - 值
 * @param {[Object]} options - 选项
 */
function set(name, value, options) {

  if ((typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) !== 'object') {
    throw new Error('options must be a object');
  }

  var cookie = name + '=' + value + ';';

  if (options.expires) {
    cookie += '; expires=' + options.expires.toUTCString();
  }
  if (options.maxAge) {
    cookie += '; max-age=' + options.maxAge;
  }
  if (options.domain) {
    cookie += '; domain=' + options.domain;
  }
  if (options.path) {
    cookie += '; path=' + options.path;
  }
  if (options.httpOnly) {
    cookie += '; httponly';
  }
  if (options.sameSite) {
    cookie += '; samesite';
  }
  if (options.secure) {
    cookie += '; secure';
  }

  document.cookie = cookie;
}

// === es6 - 函数 - 与解构赋值默认值结合使用: 左边是解构赋值, 右边是默认值, 不传值会选取右边的默认值, 若此时有解构赋值会再去解构赋值; 若传值会直接取解构赋值 === //
/*

// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1() // [0, 0]  // 先选取右边的默认值 {} , 默认值是个对象, 则再选取左边的解构赋值
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

*/

/**
 * 删除cookie
 * // === 删除cookie: 不同的域、不同的路径下可以存在同样名字的cookie, 因此一定要相同才能删除 === //
 * @param {String} name - cookie名称
 * @param {String} value - 值
 * @param {[Object]} options - 选项
 */
function unset(name, options) {
  set(name, '', (0, _assign2.default)({}, options, { expires: new Date(0), path: '/' }));
}

var _default = {
  get: get,
  set: set,
  unset: unset
};
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get, 'get', '/Users/garven/codetest/realProject/myblog/client/lib/cookie.js');
  reactHotLoader.register(set, 'set', '/Users/garven/codetest/realProject/myblog/client/lib/cookie.js');
  reactHotLoader.register(unset, 'unset', '/Users/garven/codetest/realProject/myblog/client/lib/cookie.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/lib/cookie.js');
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

/***/ "./client/lib/debounce.js":
/*!********************************!*\
  !*** ./client/lib/debounce.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 防抖
 * // === 特点：频繁地调用中只允许一次成功地调用 === //
 * // === 1.立即执行：以点击按钮为例，连续点击10次，结果是立即执行第一次点击的效果，之后的都无效 === //
 * // === 2.非立即执行：以点击按钮为例，连续点击10次，结果是前九次都无效，直到第十次点击后wait秒，才生效 === //
 * @param {Function} fn - 函数
 * @param {Number} wait - 毫秒数
 * @return {Function}
 */
function debounce(fn, wait, immediate) {
  var timer = void 0;

  return function () {
    var args = arguments;
    var self = this;

    timer && clearTimeout(timer);

    if (immediate) {
      timer = setTimeout(function () {
        timer = null;
      }, wait);

      !timer && fn.apply(self, args);
    } else {
      timer = setTimeout(function () {
        fn.apply(self, args);
      }, wait);
    }
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(debounce, "debounce", "/Users/garven/codetest/realProject/myblog/client/lib/debounce.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/detectWebp.js":
/*!**********************************!*\
  !*** ./client/lib/detectWebp.js ***!
  \**********************************/
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

var _default = function _default(feature, callback) {
  var kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
    alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
    animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
  };
  var img = new Image();
  img.onload = function () {
    var result = img.width > 0 && img.height > 0;
    callback(feature, result);
  };
  img.onerror = function () {
    callback(feature, false);
  };
  img.src = 'data:image/webp;base64,' + kTestImages[feature];
};

// === 图片优化之webp === //
// === 1.特点：压缩率高和解码较好，在ios中有兼容问题，安卓中有很好支持 === //
// === 2.手段：智图，cwebp工具，webpack中转换，nodejs中imagemin-webp === //
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/lib/detectWebp.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/fibonacci.js":
/*!*********************************!*\
  !*** ./client/lib/fibonacci.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {// === 尾递归: 尾调用自身, 本质：将方法需要的上下文通过方法的参数传递进下一次调用之中，以达到去除上层依赖 === //
// === 1 递归导致的内存溢出: 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误 === //
// === 2 递归：函数调用自身 === //
// === 3 调用栈：函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息 === //
// === 3.1 形成原理: 如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack） === //
// === 4 尾调用：函数的最后一步是调用另一个函数作为返回值 === //
// === 4.1 尾调用优化(TCO): 只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义 === //
// === 4.2 TCO条件：不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧 === //
// === 4.3 开启尾递归优化: === //
// === > es6开启严格模式(因为引用了追踪函数调用栈的fn.arguments和fn.caller) === //
// === > 正常模式: 减少调用栈, 用循环代替递归 === //
// === 4.4 兼容性：除SF, 其它都还没有实现，根本原因是优化是 === //
// === > 隐式的, 开发者难辨别 === //
// === > 会导致执行流中堆栈信息丢失，不利于错误收集与调试 === //



Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var fibonacci = {};

/**
 * 尾递归优化
 * // === 思路： === //
 * // === 用单例模式将递归进行处理，每次递归实质上是：将参数用存储起来，根据参数个数来循环，而在每次循环中，调用的递归会将新的参数传给数组，但是由于active为true，就会退出到循环体中，此时循环体的arr个数又更新了 === //
 * // === 实质：用递归来改变循环条件，但不进行真正的递归 === //
 * @param {Function} fn - 函数
 * @return {Function}
 */
function tco(fn) {
  var value = void 0;
  var active = false;
  var arr = [];

  // 1
  return function () {
    // 2 // 9   // 15
    arr.push(arguments);

    // 3
    if (!active) {
      // 4
      active = true;

      // 5  // 11
      while (arr.length) {
        // 6  // 12
        value = fn.apply(this, arr.shift());
      }

      active = false;

      return value;
    }
  };

  // 10 // 16 ...
}

/**
 * 递归
 * // === 第一次传的是次数，比如5；第二次：4, 0, 1; 第三次：3, 1, 1; 第四次： 2, 1, 2; 第五次： 1, 2, 3 === //
 */
var recurse = tco(function (n) {
  var cur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  // 7  // 13
  if (n === 1) {
    return next;
  }

  if (n === 0) {
    return 0;
  }

  // 8  // 14
  return recurse(n - 1, next, cur + next);
});

fibonacci.recurse = recurse;

/**
 * 尾递归转化为遍历
 * // === 事先预备好[0, 1]; 从i为2开始，后一项都为前两项之和 === //
 * @param {Number} n - 次数
 * @return {Array}
 */
fibonacci.iterator = function (n) {
  var arr = [0, 1];
  var len = arr.length;
  var i = len;

  while (i <= n) {
    arr.push(arr[i - 1] + arr[i - 2]);
    ++i;
  }

  return arr;
};

// === 斐波那契数列： === //
// ===        0, n = 0               === //
// === F(n) = 1, n = 1               === //
// ===        F(n - 1) + F(n - 2)    === //
// === A(n) = 1 / √5 * [ ((1 + √5) / 2) ^ n - ((1 - √5) / 2) ^ n ] === //

fibonacci.math = function (n) {
  var SQRT_FIVE = Math.sqrt(5);
  return Math.round(1 / SQRT_FIVE * (Math.pow(0.5 + SQRT_FIVE / 2, n) - Math.pow(0.5 - SQRT_FIVE / 2, n)));
};

var _default = fibonacci;
exports.default = _default;

// === 动态规划: 将原问题拆解成若干个子问题, 同时保存若干个子问题的答案, 使得每个子问题只求解一次, 最终获得原问题的答案 === //
/*
                              记忆化搜索(自顶向下的解决问题)
                            /
  递归问题 -> 发现重叠的子问题
                            \
                              动态规划(自底向上的解决问题)

*/

// === 函数记忆: 将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据 === //
// === 1 原理: 把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据 === //
// === 2 本质: 牺牲算法的空间复杂度以换取更优的时间复杂度，在客户端 JavaScript 中代码的执行时间复杂度往往成为瓶颈，因此在大多数场景下，这种牺牲空间换取时间的做法以提升程序执行效率的做法是非常可取的 === //
// === 3 注意: 简单的情况下会适得其反 === //

var memorize = exports.memorize = function memorize(fn) {

  var memorize = function memorize() {
    for (var _len = arguments.length, key = Array(_len), _key = 0; _key < _len; _key++) {
      key[_key] = arguments[_key];
    }

    var cache = memorize.cache;
    var address = key.join(',');

    if (!cache[address]) {
      cache[address] = fn.apply(this, arguments);
    }

    return cache[address];
  };

  memorize.cache = {};
  return memorize;
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fibonacci, 'fibonacci', '/Users/garven/codetest/realProject/myblog/client/lib/fibonacci.js');
  reactHotLoader.register(tco, 'tco', '/Users/garven/codetest/realProject/myblog/client/lib/fibonacci.js');
  reactHotLoader.register(recurse, 'recurse', '/Users/garven/codetest/realProject/myblog/client/lib/fibonacci.js');
  reactHotLoader.register(memorize, 'memorize', '/Users/garven/codetest/realProject/myblog/client/lib/fibonacci.js');
  reactHotLoader.register(_default, 'default', '/Users/garven/codetest/realProject/myblog/client/lib/fibonacci.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/inheritPrototype.js":
/*!****************************************!*\
  !*** ./client/lib/inheritPrototype.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(subType, superType) {
  var prototype = (0, _create2.default)(superType.prototype);

  prototype.constructor = subType;

  subType.prototype = prototype;
};

/**
 * 继承父类原型
 * // === 步骤： === //
 * // === 1.将父类原型通过Object.create()复制一份 === //
 * // === 2.将其构造函数指向子类构造函数 === //
 * // === 3.将子类原型指向副本 === //
 * @param {Obejct} subType - 子类构造函数
 * @param {Obejct} superType - 父类构造函数
 */

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/garven/codetest/realProject/myblog/client/lib/inheritPrototype.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/lib/iterator.js":
/*!********************************!*\
  !*** ./client/lib/iterator.js ***!
  \********************************/
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

// === 迭代器模式: 提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示 === //
// === 0 可迭代对象: 只要被迭代的聚合对象拥有length属性而且可以用下标访问，那它就可以被迭代 === //
// === 1 内部迭代器: 内部迭代器在调用的时候非常方便，外界不用关心迭代器的内部实现，跟迭代器的交互也仅仅是一次初始调用 === //
// === 1.1 缺点: 迭代规则已经被提前规定，不灵活 === //
// === 2 外部迭代器: 增加了一些调用的复杂度，但相对也增强了迭代器的灵活性，我们可以手工控制迭代的过程或者顺序 === //
// === 3 倒序迭代器: === //
// === 4 中止迭代器: 如果回调函数的执行结果返回false则提前终止循环 === //

/**
 * 内部迭代器
 */
var inner = exports.inner = Array.prototype.forEach;

/**
 * 外部迭代器
 */
var outer = exports.outer = function outer(obj) {

  var cur = 0;

  var next = function next() {
    return cur += 1;
  };
  var isDone = function isDone() {
    return cur >= obj.length;
  };
  var getCurItem = function getCurItem() {
    return obj[cur];
  };

  return {
    next: next,
    isDone: isDone,
    getCurItem: getCurItem
  };
};

/**
 * 倒序迭代
 * @param {Array} arr - 数组
 * @param {Function} cb - 回调
 */
var reverse = exports.reverse = function reverse(arr, cb) {

  for (var l = arr.length; l--;) {
    cb(arr[l], l, arr);
  }
};

/**
 * 中止迭代
 * @param {Array} arr - 数组
 * @param {Function} cb - 回调
 */
var stop = exports.stop = function stop(arr, cb) {

  for (var l = arr.length; l--;) {
    if (cb(arr[l], l, arr) === false) {
      break;
    }
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(inner, "inner", "/Users/garven/codetest/realProject/myblog/client/lib/iterator.js");
  reactHotLoader.register(outer, "outer", "/Users/garven/codetest/realProject/myblog/client/lib/iterator.js");
  reactHotLoader.register(reverse, "reverse", "/Users/garven/codetest/realProject/myblog/client/lib/iterator.js");
  reactHotLoader.register(stop, "stop", "/Users/garven/codetest/realProject/myblog/client/lib/iterator.js");
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

/***/ "./client/lib/xss.js":
/*!***************************!*\
  !*** ./client/lib/xss.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;
exports.escapeJs = escapeJs;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// === XSS: === //
// === 1 攻击原理: 程序 + 数据 = 结果，而通常数据加入了其它网站的脚本，从而使得数据也变成了包含其它网站脚本程序的数据 === //
// === 2 危害: === //
// === 2.1 获取页面数据：偷取网站任意数据 === //
// === 2.2 获取Cookies：获得登录态，从而进行csrf攻击 === //
// === 2.3 劫持前端逻辑：去到钓鱼网站 === //
// === 2.4 发送请求：欺骗用户 === //
// === 3 攻击类型: === //
// === 3.1 反射型: uri参数直接注入, 如经过处理后的url短网址 === //
// === 3.2 存储型: 存储到DB后读取时注入 === //
// === 3.3 DOM-base型: 改版了html原有结构，如转义掉了字符或提前闭合掉了标签，为跨站的脚本代码提供了执行环境 === //
// === 4 攻击注入点: === //
// === 4.1 HTML节点内容：节点动态生成，且包含了用户输入的信息 === //
/*
<div>                        <div>
  {content}       ==》         <script > xxxx </script>
</div>                       </div>
*/
// === 4.2 HTML属性：某个属性值由用户输入组成 === //
/*
<img src={item.src} />   ==》    <img src="1" onerror="alert(1);" />
*/
// === 4.3 Javascript代码：某段js代码包含了由用户注入的信息，如从后端出来的变量 === //
/*
var data = "#{data}"    ==》     var data = "hello";alert(1);"";
*/
// === 4.4 富文本：既要保持格式，且HTML有XSS攻击风险 === //
// === 5 防御 === //
// === 5.1 X-XSS-Protection === //
// === 5.2 实体转义 === //
/*
html环境:
< : '&lt;'
> : '&gt;'

html属性环境:
& : '&amp;'
" : '&quto;'
' : '&#39;'
*/
// === 5.3 js转义: `"`和`\`转义 === //
// === 5.4 富文本过滤:  === //
// === 5.5 CSP === //

/**
 * 转义危险html字符
 * // === 参数传递：形参是实参在栈内存的副本，改变形参则为按值传递，改变形参的属性则为引用传递(若是对象) === //
 * @param {String} str - html字符
 * @return {String}
 */
function escapeHtml(str) {

  str = str + '';

  if (!str) {
    return '';
  }

  return str
  // html
  .replace(/&/g, '&amp;') // 只能放最前面
  .replace(/</g, '&lt;').replace(/>/g, '&gt;')
  // html property
  .replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}

/**
 * 转义危险js字符
 * @param {String} str - js字符
 * @return {String}
 */
function escapeJs(str) {

  if (!str) {
    return '';
  }

  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(escapeHtml, 'escapeHtml', '/Users/garven/codetest/realProject/myblog/client/lib/xss.js');
  reactHotLoader.register(escapeJs, 'escapeJs', '/Users/garven/codetest/realProject/myblog/client/lib/xss.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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
/*!****************************************************************************************************************************************!*\
  !*** multi react-hot-loader/patch webpack-dev-server/client?http://127.0.0.1:3003 webpack/hot/only-dev-server ./client/User/index.jsx ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! react-hot-loader/patch */"./node_modules/react-hot-loader/patch.js");
__webpack_require__(/*! webpack-dev-server/client?http://127.0.0.1:3003 */"./node_modules/webpack-dev-server/client/index.js?http://127.0.0.1:3003");
__webpack_require__(/*! webpack/hot/only-dev-server */"./node_modules/webpack/hot/only-dev-server.js");
module.exports = __webpack_require__(/*! ./client/User/index.jsx */"./client/User/index.jsx");


/***/ })

}]);
//# sourceMappingURL=utils-a9db5dd53c502a04c5b1.js.map
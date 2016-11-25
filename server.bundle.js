/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use((0, _compression2.default)());

	// serve our static stuff like index.css
	app.use(_express2.default.static(_path2.default.join(__dirname, 'build'), { index: false }));

	// send all requests to index.html so browserHistory works
	app.get('*', function (req, res) {
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	        if (err) {
	            res.status(500).send(err.message);
	        } else if (redirect) {
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {
	            // hey we made it!
	            var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	            var appTitle = 'Vmaking!';
	            res.send(renderPage(appHtml, appTitle));
	        } else {
	            res.status(404).send('Not Found');
	        }
	    });
	});

	function renderPage(appHtml, appTitle) {
	    return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <meta charset=utf-8/>\n      <meta charset="utf-8">\n      <meta http-equiv="X-UA-Compatible" content="IE=edge">\n      <meta name="description" content="">\n      <meta name="keywords" content="">\n      <meta name="viewport" content="width=device-width,initial-scale=1">\n      <title>' + appTitle + '</title>\n      <meta name="renderer" content="webkit">\n    </head>\n    <body>\n      <div id=app>' + appHtml + '</div>\n      <script src="/bundle.js"></script>\n    </body>\n    </html>\n   ';
	}

	var PORT = process.env.PORT || 3000;
	app.listen(PORT, function () {
	    console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	var _Register = __webpack_require__(10);

	var _Register2 = _interopRequireDefault(_Register);

	var _Login = __webpack_require__(13);

	var _Login2 = _interopRequireDefault(_Login);

	var _User = __webpack_require__(14);

	var _User2 = _interopRequireDefault(_User);

	var _UserInfo = __webpack_require__(15);

	var _UserInfo2 = _interopRequireDefault(_UserInfo);

	var _UserServer = __webpack_require__(16);

	var _UserServer2 = _interopRequireDefault(_UserServer);

	var _UserRequire = __webpack_require__(18);

	var _UserRequire2 = _interopRequireDefault(_UserRequire);

	var _Home = __webpack_require__(20);

	var _Home2 = _interopRequireDefault(_Home);

	var _Server = __webpack_require__(26);

	var _Server2 = _interopRequireDefault(_Server);

	var _ServerInfo = __webpack_require__(27);

	var _ServerInfo2 = _interopRequireDefault(_ServerInfo);

	var _Require = __webpack_require__(28);

	var _Require2 = _interopRequireDefault(_Require);

	var _RequireInfo = __webpack_require__(29);

	var _RequireInfo2 = _interopRequireDefault(_RequireInfo);

	var _Search = __webpack_require__(31);

	var _Search2 = _interopRequireDefault(_Search);

	var _Tribe = __webpack_require__(32);

	var _Tribe2 = _interopRequireDefault(_Tribe);

	var _Tribeinfo = __webpack_require__(33);

	var _Tribeinfo2 = _interopRequireDefault(_Tribeinfo);

	var _TribeAlbum = __webpack_require__(34);

	var _TribeAlbum2 = _interopRequireDefault(_TribeAlbum);

	var _TribeAlbumInfo = __webpack_require__(35);

	var _TribeAlbumInfo2 = _interopRequireDefault(_TribeAlbumInfo);

	var _TribeImgCom = __webpack_require__(36);

	var _TribeImgCom2 = _interopRequireDefault(_TribeImgCom);

	var _TribeTopic = __webpack_require__(37);

	var _TribeTopic2 = _interopRequireDefault(_TribeTopic);

	var _TribePerson = __webpack_require__(38);

	var _TribePerson2 = _interopRequireDefault(_TribePerson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//search  module


	//require  module


	//server  module


	//login  module
	module.exports = _react2.default.createElement(
	            _reactRouter.Router,
	            null,
	            _react2.default.createElement(
	                        _reactRouter.Route,
	                        { path: '/', component: _App2.default },
	                        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/register', component: _Register2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/user/:userId', component: _User2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/user/info/:userId', component: _UserInfo2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/user/server/:userId', component: _UserServer2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/user/require/:userId', component: _UserRequire2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/server', component: _Server2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/server/info/:serverId', component: _ServerInfo2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/require', component: _Require2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/require/info/:requireId', component: _RequireInfo2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/search', component: _Search2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe', component: _Tribe2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/info/:tribeId', component: _Tribeinfo2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/album/:albumId', component: _TribeAlbum2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/album/:tribeId', component: _TribeAlbum2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/album/info/:albumId', component: _TribeAlbumInfo2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/album/img/:imgId', component: _TribeImgCom2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/topic/01', component: _TribeTopic2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/person', component: _TribePerson2.default })
	            )
	);

	//tribe  module


	//home  module


	//user  module


	//register  module

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'App',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.Container,
	            null,
	            this.props.children
	        );
	    }
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("amazeui-touch");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'Register',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { className: 'regLog-logo' },
	                    _react2.default.createElement('div', { className: 'regLog-logo-img' })
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { className: 'bgNone' },
	                    _react2.default.createElement(
	                        'form',
	                        { action: '', className: 'form-register' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.List.Item,
	                                { key: '1', className: 'margin-bottom', media: _react2.default.createElement(_amazeuiTouch.Icon, { className: 'icon-phone', name: '' }), nested: 'input' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { type: 'number', placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.List.Item,
	                                { key: '2', className: 'margin-bottom', media: _react2.default.createElement(_amazeuiTouch.Icon, { className: 'icon-pwd', name: '' }), nested: 'input' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { type: 'password', placeholder: '\u8BF7\u8BBE\u7F6E6-16\u4F4D\u5BC6\u7801', btnAfter: _react2.default.createElement(_amazeuiTouch.Icon, { className: 'icon-pwdHid', name: '' }) })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.List.Item,
	                                { key: '3', className: 'margin-bottom', media: _react2.default.createElement(_amazeuiTouch.Icon, { className: 'icon-nickname', name: '' }), nested: 'input' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { type: 'text', placeholder: '\u8BF7\u8BBE\u7F6E\u60A8\u7684\u7528\u6237\u6635\u79F0' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                null,
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-0' },
	                                    _react2.default.createElement(_amazeuiTouch.Field, { className: 'auth-code', type: 'number', placeholder: '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-0' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Button,
	                                        { className: 'btn-white margin-0 margin-left-xs text-size-13' },
	                                        '\u70B9\u51FB\u83B7\u53D6\u9A8C\u8BC1\u7801'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                null,
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { shrink: true, className: 'padding-h-0' },
	                                    _react2.default.createElement('input', { type: 'checkbox', className: 'input-terms' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    null,
	                                    '\u6211\u5DF2\u9605\u8BFB\u5E76\u63A5\u53D7\u4F17\u521B\u90E8\u843D\u7684 ',
	                                    _react2.default.createElement(
	                                        'a',
	                                        { className: 'text-color-6' },
	                                        '\u7528\u6237\u534F\u8BAE'
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Button,
	                            { className: 'btn-yellow margin-top-xl padding-v' },
	                            '\u6CE8\u518C'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _NavLink = __webpack_require__(12);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//公用头部组件
	var _Header = function (_React$Component) {
	    _inherits(_Header, _React$Component);

	    function _Header(props) {
	        _classCallCheck(this, _Header);

	        //判断当前是否在搜索页，如果是搜索页则默认显示搜索导航条
	        var _this = _possibleConstructorReturn(this, (_Header.__proto__ || Object.getPrototypeOf(_Header)).call(this, props));

	        if (_this.props.isSearch) {
	            _this.state = {
	                visible: true,
	                searchVal: _this.props.searchVal
	            };
	        } else {
	            _this.state = {
	                visible: false,
	                searchVal: ''
	            };
	        }
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(_Header, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}

	        //打开搜索

	    }, {
	        key: 'openNotification',
	        value: function openNotification(item) {
	            if (item.className == 'search') {
	                this.setState({
	                    visible: true
	                });
	            } else {
	                this.setState({
	                    visible: false
	                });
	            }
	        }

	        //关闭搜索

	    }, {
	        key: 'closeNotification',
	        value: function closeNotification() {
	            this.setState({
	                visible: false
	            });
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(event) {
	            this.setState({
	                searchVal: event.target.value
	            });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'header' },
	                _react2.default.createElement(
	                    _amazeuiTouch.Notification,
	                    {
	                        className: 'padding-v-xs',
	                        amStyle: this.state.amStyle,
	                        visible: this.state.visible,
	                        animated: true,
	                        closeBtn: false,
	                        onDismiss: this.closeNotification.bind(this)
	                    },
	                    _react2.default.createElement(
	                        _amazeuiTouch.Grid,
	                        { className: 'bgNone' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Col,
	                            { cols: 5, className: 'padding-0' },
	                            _react2.default.createElement(
	                                'form',
	                                { action: '/search' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { name: 'search', onChange: this.handleChange.bind(this), value: this.state.searchVal,
	                                    className: 'margin-0 padding-v-xs text-size-14', placeholder: '\u4F17\u521B' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Col,
	                            { cols: 1, className: 'padding-0 bgNone text-right', onClick: this.closeNotification.bind(this) },
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-size-14 padding-v-xs' },
	                                '\u53D6\u6D88'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(_amazeuiTouch.NavBar, {
	                    className: 'Header',
	                    title: _react2.default.createElement('div', { className: 'home-logo text-size-12' }),
	                    leftNav: [{ title: '',
	                        component: _amazeuiTouch.OffCanvasTrigger,
	                        className: "leftNav",
	                        offCanvas: _react2.default.createElement(
	                            _amazeuiTouch.OffCanvas,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.Group,
	                                { className: 'header-login bgNone margin-0 padding-v hidden' },
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/register', className: 'btn-yellow margin-bottom' },
	                                    '\u6CE8\u518C'
	                                ),
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/login', className: 'btn-white-noBorder' },
	                                    '\u767B\u9646'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Group,
	                                { className: 'header-login bgNone margin-0' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'header-user-avatar margin-v' },
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '/user/01' },
	                                        _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg', height: '50', width: '50', alt: '' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'header-user-name text-color-7 text-size-16' },
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '/user/01' },
	                                        '\u7528\u6237\u540D\u7528\u6237\u540D'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                { className: 'header-nav' },
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    linkComponent: _NavLink2.default,
	                                    media: _react2.default.createElement(_amazeuiTouch.Icon, { name: '' }),
	                                    linkProps: {
	                                        to: '/',
	                                        onClick: this.onDismiss,
	                                        onlyActiveOnIndex: true
	                                    },
	                                    title: '\u9996\u9875',
	                                    className: 'header-nav-icon header-nav-index'
	                                }),
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    linkComponent: _NavLink2.default,
	                                    media: _react2.default.createElement(_amazeuiTouch.Icon, { name: '' }),
	                                    linkProps: {
	                                        to: '/tribe',
	                                        onClick: this.onDismiss
	                                    },
	                                    title: '\u90E8\u843D',
	                                    className: 'header-nav-icon header-nav-tribe'
	                                }),
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    linkComponent: _NavLink2.default,
	                                    media: _react2.default.createElement(_amazeuiTouch.Icon, { name: '' }),
	                                    linkProps: {
	                                        to: '/require',
	                                        onClick: this.onDismiss
	                                    },
	                                    title: '\u9700\u6C42',
	                                    className: 'header-nav-icon header-nav-require'
	                                }),
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    linkComponent: _NavLink2.default,
	                                    media: _react2.default.createElement(_amazeuiTouch.Icon, { name: '' }),
	                                    linkProps: {
	                                        to: '/server',
	                                        onClick: this.onDismiss
	                                    },
	                                    title: '\u670D\u52A1',
	                                    className: 'header-nav-icon header-nav-server'
	                                })
	                            )
	                        ),
	                        isClone: true }],
	                    rightNav: [{
	                        title: '',
	                        className: 'search'
	                    }],
	                    onAction: this.openNotification.bind(this),
	                    amStyle: 'dark' })
	            );
	        }
	    }]);

	    return _Header;
	}(_react2.default.Component);

	exports.default = _Header;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'NavLink',
	    render: function render() {
	        return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'header-link-active' }));
	    }
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'Login',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { className: 'regLog-logo' },
	                    _react2.default.createElement('div', { className: 'regLog-logo-img' })
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { className: 'bgNone' },
	                    _react2.default.createElement(
	                        'form',
	                        { action: '', className: 'form-login' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.List.Item,
	                                { key: '1', className: 'margin-bottom', media: _react2.default.createElement(
	                                        _amazeuiTouch.Icon,
	                                        { name: '' },
	                                        '\u624B\u673A\u53F7'
	                                    ), nested: 'input' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { type: 'number' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.List.Item,
	                                { key: '1', className: 'margin-bottom', media: _react2.default.createElement(
	                                        _amazeuiTouch.Icon,
	                                        { name: '' },
	                                        '\u5BC6\u7801'
	                                    ), nested: 'input' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { type: 'password' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Button,
	                            { className: 'btn-yellow margin-top-xl padding-v' },
	                            '\u767B\u5F55'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'User',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { noPadded: true, className: 'margin-0 userDesc' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.List,
	                        null,
	                        _react2.default.createElement(_amazeuiTouch.List.Item, {
	                            className: 'padding-v',
	                            media: _react2.default.createElement(
	                                'div',
	                                { className: 'user-avatar' },
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: '/user/info/01' },
	                                    _react2.default.createElement('img', { width: '65', height: '65', src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' })
	                                ),
	                                _react2.default.createElement('span', { className: 'user-woman' }),
	                                _react2.default.createElement('span', { className: 'user-man hidden' })
	                            ),
	                            after: _react2.default.createElement(
	                                'button',
	                                { className: 'btn-yellow' },
	                                '\u5173\u6CE8'
	                            ),
	                            title: '\u7528\u6237\u540D\u7528\u6237\u540D\u7528\u6237\u540D\u7528\u6237\u540D'
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { noPadded: true, className: 'margin-0 userTag' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.Grid,
	                        { className: 'padding-v-xs' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Col,
	                            null,
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'userTagTit' },
	                                '\u5173\u6CE8'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'userTagNum' },
	                                '123'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Col,
	                            { className: 'user-fans' },
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'userTagTit' },
	                                '\u7C89\u4E1D'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'userTagNum' },
	                                '123'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Col,
	                            null,
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'userTagTit' },
	                                '\u8D5E'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'userTagNum' },
	                                '123'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { noPadded: true, className: 'margin-v userNav' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.List,
	                        null,
	                        _react2.default.createElement(_amazeuiTouch.List.Item, { href: '#', title: '\u90E8\u843D', media: _react2.default.createElement('span', { className: 'userNav-bl' }) }),
	                        _react2.default.createElement(_amazeuiTouch.List.Item, { href: '#', title: '\u8BDD\u9898', media: _react2.default.createElement('span', { className: 'userNav-ht' }) })
	                    )
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { noPadded: true, className: 'margin-0 userNav' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.List,
	                        null,
	                        _react2.default.createElement(_amazeuiTouch.List.Item, { href: '/user/require/01', title: '\u9700\u6C42', media: _react2.default.createElement('span', { className: 'userNav-xq' }) }),
	                        _react2.default.createElement(_amazeuiTouch.List.Item, { href: '/user/server/01', title: '\u670D\u52A1', media: _react2.default.createElement('span', { className: 'userNav-fw' }) })
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'UserInfo',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { noPadded: true, className: 'bgNone  userInfo margin-0' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.List,
	                        { className: 'padding-0' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.List.Item,
	                            { key: '1', media: _react2.default.createElement(
	                                    _amazeuiTouch.Icon,
	                                    { name: '' },
	                                    '\u7528\u6237\u540D'
	                                ) },
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                '\u660E\u660E'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _amazeuiTouch.List,
	                        null,
	                        _react2.default.createElement(
	                            _amazeuiTouch.List.Item,
	                            { key: '1', media: _react2.default.createElement(
	                                    _amazeuiTouch.Icon,
	                                    { name: '' },
	                                    '\u5E74\u9F84'
	                                ) },
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                '22'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _amazeuiTouch.List,
	                        null,
	                        _react2.default.createElement(
	                            _amazeuiTouch.List.Item,
	                            { key: '1', media: _react2.default.createElement(
	                                    _amazeuiTouch.Icon,
	                                    { name: '' },
	                                    '\u6240\u5728\u5730\u533A'
	                                ) },
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                '\u5317\u4EAC'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _amazeuiTouch.List,
	                        null,
	                        _react2.default.createElement(
	                            _amazeuiTouch.List.Item,
	                            { key: '1', media: _react2.default.createElement(
	                                    _amazeuiTouch.Icon,
	                                    { name: '' },
	                                    '\u4E2A\u4EBA\u7B80\u4ECB'
	                                ) },
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                '\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB\u4E2A\u4EBA\u7B80\u4ECB'
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _Server2 = __webpack_require__(17);

	var _Server3 = _interopRequireDefault(_Server2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//服务数据
	var serverList = [{
	    title: '女爵',
	    subTitle: '名称',
	    href: '/server/info/01',
	    desc: '服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述',
	    target: '_blank',
	    bottomLeft: '交易成功',
	    bottomRight: '剩余50天'
	}, {
	    title: "女爵",
	    subTitle: "发行公司：环球唱片",
	    href: "/server/info/01",
	    desc: "服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述",
	    target: "_blank",
	    bottomLeft: '征集作品',
	    bottomRight: '剩余50天'
	}];

	exports.default = _react2.default.createClass({
	    displayName: 'UserServer',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(_Server3.default, { serverList: serverList })
	            )
	        );
	    }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//公用服务列表组件
	var _Server = function (_React$Component) {
	    _inherits(_Server, _React$Component);

	    function _Server() {
	        _classCallCheck(this, _Server);

	        return _possibleConstructorReturn(this, (_Server.__proto__ || Object.getPrototypeOf(_Server)).apply(this, arguments));
	    }

	    _createClass(_Server, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'serverList' },
	                _react2.default.createElement(
	                    _amazeuiTouch.List,
	                    { className: 'margin-top-0' },
	                    this.props.serverList.map(function (item, i) {
	                        return _react2.default.createElement(
	                            _amazeuiTouch.List.Item,
	                            {
	                                title: item.title,
	                                subTitle: item.subTitle,
	                                href: item.href,
	                                desc: item.desc,
	                                target: item.target,
	                                after: item.after,
	                                key: i
	                            },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { align: 'between', className: 'margin-top-xs' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { cols: 2, className: 'padding-0' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-size-12 text-color-6' },
	                                        item.bottomLeft
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { cols: 2, className: ' text-right' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-size-12 text-color-4' },
	                                        item.bottomRight
	                                    )
	                                )
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return _Server;
	}(_react2.default.Component);

	exports.default = _Server;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _Require2 = __webpack_require__(19);

	var _Require3 = _interopRequireDefault(_Require2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//需求数据
	var requireList = [{
	    title: '12345元',
	    subTitle: '名称',
	    href: '/require/info/01',
	    desc: '需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述',
	    target: '_blank',
	    after: '保证金300元',
	    bottomLeft: '招募创作人',
	    bottomRight: '剩余50天'
	}, {
	    title: "女爵",
	    subTitle: "发行公司：环球唱片",
	    href: "/require/info/01",
	    desc: "需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述",
	    target: "_blank",
	    bottomLeft: '征集作品',
	    bottomRight: '剩余50天'
	}];

	exports.default = _react2.default.createClass({
	    displayName: 'UserRequire',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'require-tabs-list' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.Tabs,
	                        { activeKey: this.state.activeTab, onAction: this.handleAction, className: 'margin-0' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u53D1\u5E03\u7684\u9700\u6C42', key: '1', className: 'padding-0' },
	                            _react2.default.createElement(_Require3.default, { requireList: requireList })
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u53C2\u4E0E\u7684\u9700\u6C42', key: '2', className: 'padding-0' },
	                            _react2.default.createElement(_Require3.default, { requireList: requireList })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//公用需求列表组件
	var _Require = function (_React$Component) {
	    _inherits(_Require, _React$Component);

	    function _Require() {
	        _classCallCheck(this, _Require);

	        return _possibleConstructorReturn(this, (_Require.__proto__ || Object.getPrototypeOf(_Require)).apply(this, arguments));
	    }

	    _createClass(_Require, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'requireList' },
	                _react2.default.createElement(
	                    _amazeuiTouch.List,
	                    { className: 'margin-top-0' },
	                    this.props.requireList.map(function (item, i) {
	                        return _react2.default.createElement(
	                            _amazeuiTouch.List.Item,
	                            {
	                                title: item.title,
	                                subTitle: item.subTitle,
	                                href: item.href,
	                                desc: item.desc,
	                                target: item.target,
	                                after: item.after,
	                                key: i
	                            },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { align: 'between', className: 'margin-top-xs' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { cols: 2, className: 'padding-0' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-size-12 text-color-6' },
	                                        item.bottomLeft
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { cols: 2, className: ' text-right' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-size-12 text-color-4' },
	                                        item.bottomRight
	                                    )
	                                )
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return _Require;
	}(_react2.default.Component);

	exports.default = _Require;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _HomeStore = __webpack_require__(21);

	var _HomeStore2 = _interopRequireDefault(_HomeStore);

	var _HomeActions = __webpack_require__(24);

	var _HomeActions2 = _interopRequireDefault(_HomeActions);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home(props) {
	        _classCallCheck(this, Home);

	        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

	        _this.state = _HomeStore2.default.getState();
	        _this.state.home = [];
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Home, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _HomeStore2.default.listen(this.onChange);
	            _HomeActions2.default.updateHome();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _HomeStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _amazeuiTouch.View,
	                null,
	                _react2.default.createElement(_Header3.default, null),
	                _react2.default.createElement(
	                    _amazeuiTouch.Container,
	                    { scrollable: true, className: 'home' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'home-slide' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Slider,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.Slider.Item,
	                                null,
	                                _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' })
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Slider.Item,
	                                null,
	                                _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'home-tribe border-d7d7d7 bgF' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Group,
	                            { noPadded: true, className: 'margin-0' },
	                            _react2.default.createElement(
	                                'h5',
	                                { className: 'home-group-header margin-sm' },
	                                '\u90E8\u843D'
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { avg: 4 },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-v-0' },
	                                    _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-v-0' },
	                                    _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-v-0' },
	                                    _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-3.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-v-0' },
	                                    _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-4.jpg' })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { avg: 4, className: 'text-center' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-v-xs' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'home-tribe-name' },
	                                        '\u5251\u7075\u90E8\u843D'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-v-xs' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'home-tribe-name' },
	                                        '\u6D77\u8D3C\u738B\u90E8\u843D'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-v-xs' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'home-tribe-name' },
	                                        '\u9B54\u517D\u90E8\u843D'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-v-xs' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'home-tribe-name' },
	                                        '\u5947\u8FF9\u738B\u5EA7\u90E8\u843D'
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'home-square border-d7d7d7 bgF margin-top-sm' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Group,
	                            { noPadded: true, className: 'margin-v-0' },
	                            _react2.default.createElement(
	                                'h5',
	                                { className: 'home-group-header margin-sm' },
	                                '\u5E7F\u573A'
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { align: 'between', className: 'padding-v-sm home-square-borderT' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { cols: 3 },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        null,
	                                        _react2.default.createElement(_amazeuiTouch.Col, { className: 'home-square-img home-square-require', shrink: true }),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { className: 'home-square-btn' },
	                                            _react2.default.createElement(
	                                                'a',
	                                                { className: 'btn-gray', href: '/require' },
	                                                '\u9700\u6C42'
	                                            ),
	                                            _react2.default.createElement(
	                                                'p',
	                                                null,
	                                                '\u4E3A\u4E13\u4E1A\u56E2\u961F\u63D0\u4F9B\u5BF9\u63A5\u670D\u52A1'
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { cols: 3, className: 'home-square-borderL' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        null,
	                                        _react2.default.createElement(_amazeuiTouch.Col, { className: 'home-square-img home-square-server', shrink: true }),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { className: 'home-square-btn' },
	                                            _react2.default.createElement(
	                                                'a',
	                                                { className: 'btn-gray', href: 'server' },
	                                                '\u670D\u52A1'
	                                            ),
	                                            _react2.default.createElement(
	                                                'p',
	                                                null,
	                                                '\u539F\u521B\u4EBA\u7F51\u4E0A\u4E2A\u6027\u5316\u7A7A\u95F4'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'home-square border-d7d7d7 bgF margin-top-sm hidden' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Group,
	                            { noPadded: true, className: 'margin-v-0' },
	                            _react2.default.createElement(
	                                'h5',
	                                { className: 'home-group-header margin-sm' },
	                                '\u5E7F\u573A'
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { align: 'between', className: 'padding-v-sm' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { cols: 3 },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { className: 'btn-yellow' },
	                                        '\u9700\u6C42'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { cols: 3 },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { className: 'btn-blue' },
	                                        '\u670D\u52A1'
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'border-d7d7d7 bgF margin-top-sm' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Group,
	                            { noPadded: true, className: 'margin-v-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                null,
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    media: _react2.default.createElement('img', { className: 'home-tribe-media', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' }),
	                                    after: _react2.default.createElement(
	                                        'div',
	                                        { className: 'home-tribe-tag' },
	                                        '\u6D77\u8D3C\u738B\u90E8\u843D'
	                                    ),
	                                    title: _react2.default.createElement(
	                                        'div',
	                                        { className: 'home-tribe-item' },
	                                        _react2.default.createElement(
	                                            'p',
	                                            { className: 'text-color-3 text-size-14' },
	                                            '\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89'
	                                        ),
	                                        _react2.default.createElement(
	                                            'p',
	                                            { className: 'text-color-4 text-size-13' },
	                                            '1\u5C0F\u65F6\u524D'
	                                        )
	                                    )
	                                }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'padding-h margin-v-xs' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'text-size-15 text-color-3' },
	                                        '\u6807\u9898\u540D\u79F0\u540D\u79F0\u540D\u79F0'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'text-size-13 text-color-2 home-tribe-desc' },
	                                        '\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Grid,
	                                    { avg: 3 },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { className: 'padding-h padding-top-xs padding-bottom-0' },
	                                        _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' })
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { className: 'padding-h padding-top-xs padding-bottom-0' },
	                                        _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { className: 'padding-h padding-top-xs padding-bottom-0' },
	                                        _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-3.jpg' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Grid,
	                                    { align: 'between' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'padding-h text-size-12 text-color-4' },
	                                        _react2.default.createElement('span', { className: 'icon home-icon-view margin-right-xs' }),
	                                        '123'
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'padding-h text-size-12 text-color-4 text-right' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Grid,
	                                            null,
	                                            _react2.default.createElement(
	                                                _amazeuiTouch.Col,
	                                                null,
	                                                _react2.default.createElement('span', { className: 'icon home-icon-view margin-right-xs' }),
	                                                '123'
	                                            ),
	                                            _react2.default.createElement(
	                                                _amazeuiTouch.Col,
	                                                null,
	                                                _react2.default.createElement('span', { className: 'icon home-icon-view margin-right-xs' }),
	                                                '123'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'margin-h margin-v' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Group,
	                            { noPadded: true, className: 'margin-0' },
	                            _react2.default.createElement(
	                                'a',
	                                { className: 'btn-white', href: '/tribe' },
	                                '\u67E5\u770B\u66F4\u591A'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'margin-h margin-v bgNone' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-center text-size-12 text-color-2' },
	                            _react2.default.createElement(
	                                'a',
	                                { href: '', className: 'text-size-12 text-color-2' },
	                                '\u610F\u89C1\u53CD\u9988'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'padding-h-xs text-size-12 text-color-2' },
	                                '|'
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '', className: 'text-size-12 text-color-2' },
	                                '\u5173\u4E8E\u6211\u4EEC'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-center text-size-14 text-color-2' },
	                            '\u4EACICP\u590714057447\u53F7-3'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(22);

	var _alt2 = _interopRequireDefault(_alt);

	var _HomeActions = __webpack_require__(24);

	var _HomeActions2 = _interopRequireDefault(_HomeActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeStore = function () {
	    function HomeStore() {
	        _classCallCheck(this, HomeStore);

	        this.bindActions(_HomeActions2.default);
	        this.home = [];
	    }

	    //updateHome(todo) {
	    //    this.setState({ todos: this.state.todos.concat(todo) });
	    //}

	    _createClass(HomeStore, [{
	        key: 'onUpdateHomeSuccess',
	        value: function onUpdateHomeSuccess(data) {
	            this.home = data.result;
	            console.info('onUpdateHomeSuccess', this.home);
	        }
	    }, {
	        key: 'onUpdateHomeFail',
	        value: function onUpdateHomeFail() {
	            console.info('onUpdateHomeFail', data);
	        }
	    }]);

	    return HomeStore;
	}();

	exports.default = _alt2.default.createStore(HomeStore, 'HomeStore');

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alt = __webpack_require__(23);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _alt2.default();

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("alt");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(22);

	var _alt2 = _interopRequireDefault(_alt);

	var _jquery = __webpack_require__(25);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeActions = function () {
	    function HomeActions() {
	        _classCallCheck(this, HomeActions);

	        this.generateActions('updateHomeSuccess', 'updateHomeFail');
	    }

	    _createClass(HomeActions, [{
	        key: 'updateHome',
	        value: function updateHome() {
	            var _this = this;

	            _jquery2.default.ajax({
	                type: 'Get',
	                url: 'http://www.ibanyi.com/api/user'
	            }).done(function (data) {
	                _this.updateHomeSuccess(data);
	            }).fail(function (jqXhr) {
	                _this.updateHomeFail(jqXhr);
	            });
	        }
	    }]);

	    return HomeActions;
	}();

	exports.default = _alt2.default.createActions(HomeActions);

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _Server2 = __webpack_require__(17);

	var _Server3 = _interopRequireDefault(_Server2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//个人服务数据
	var personalList = [{
	    title: '女爵',
	    subTitle: '名称',
	    href: '/server/info/01',
	    desc: '服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述',
	    target: '_blank',
	    bottomLeft: '交易成功',
	    bottomRight: '剩余50天'
	}, {
	    title: "女爵",
	    subTitle: "发行公司：环球唱片",
	    href: "/server/info/01",
	    desc: "服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述",
	    target: "_blank",
	    bottomLeft: '征集作品',
	    bottomRight: '剩余50天'
	}];

	//工作室服务数据
	var studioList = [{
	    title: "女爵",
	    subTitle: "发行公司：环球唱片",
	    href: "/server/info/01",
	    desc: "111",
	    target: "_blank",
	    bottomLeft: '交易成功',
	    bottomRight: '北京'
	}];

	//企业服务数据
	var companyList = [{
	    title: "女爵",
	    subTitle: "发行公司：环球唱片",
	    href: "/server/info/01",
	    desc: "111",
	    target: "_blank",
	    bottomLeft: '交易成功',
	    bottomRight: '北京'
	}];

	exports.default = _react2.default.createClass({
	    displayName: 'Server',

	    contextTypes: {
	        router: _react2.default.PropTypes.object
	    },

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'server-tabs-list' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.Tabs,
	                        { activeKey: this.state.activeTab, onAction: this.handleAction, className: 'margin-0' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u4E2A\u4EBA', key: '1', className: 'padding-0' },
	                            _react2.default.createElement(_Server3.default, { serverList: personalList })
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u5DE5\u4F5C\u5BA4', key: '2', className: 'padding-0' },
	                            _react2.default.createElement(_Server3.default, { serverList: studioList })
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u4F01\u4E1A', key: '3', className: 'padding-0' },
	                            _react2.default.createElement(_Server3.default, { serverList: companyList })
	                        )
	                    )
	                )
	            ),
	            this.props.children
	        );
	    }
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'ServerInfo',
	    render: function render() {
	        var serverId = this.props.params.serverId;

	        var img = _react2.default.createElement('img', { className: 'server-user-avatar', width: '44', height: '44',
	            src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' });
	        var tit = _react2.default.createElement(
	            'div',
	            { className: 'server-user-name' },
	            _react2.default.createElement(
	                'p',
	                { className: 'text-color-3 text-size-14' },
	                '\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89'
	            ),
	            _react2.default.createElement(
	                'p',
	                { className: 'text-color-4 text-size-13' },
	                '\u5317\u4EAC'
	            )
	        );
	        var btn = _react2.default.createElement(
	            'div',
	            { className: 'server-user-tag' },
	            '\u5173\u6CE8'
	        );
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'border-d7d7d7 bgF server-info-user' },
	                    _react2.default.createElement(_amazeuiTouch.List.Item, {
	                        media: img,
	                        after: btn,
	                        title: tit
	                    })
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { noPadded: true, className: 'margin-0' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'server-info text-size-14' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Grid,
	                            { className: 'padding-v margin-left' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { shrink: true, className: 'padding-left-0 server-info-tit-l text-color-4' },
	                                '\u670D\u52A1\u540D\u79F0'
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { className: 'padding-left-0 text-color-3' },
	                                '\u540D\u79F0\u540D\u79F0\u540D\u79F0\u540D\u79F0'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Grid,
	                            { className: 'padding-v margin-left' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { shrink: true, className: 'padding-left-0 server-info-tit-l text-color-4' },
	                                '\u64C5\u957F\u6280\u80FD'
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { className: 'padding-left-0 text-color-3' },
	                                '\u6280\u80FD\u540D\u79F0\uFF0C\u6280\u80FD\u540D\u79F0\uFF0C\u6280\u80FD\u540D\u79F0\uFF0C\u6280\u80FD\u540D\u79F0\uFF0C\u6280\u80FD\u540D\u79F0\uFF0C\u6280\u80FD\u540D\u79F0'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Grid,
	                            { className: 'padding-v margin-left' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { shrink: true, className: 'padding-left-0 server-info-tit-l text-color-4' },
	                                '\u916C\u52B3\u6A21\u5F0F'
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { className: 'padding-left-0 text-color-5' },
	                                '100\u5143\u6BCF\u5C0F\u65F6'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Grid,
	                            { className: 'padding-v margin-left' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { shrink: true, className: 'padding-left-0 server-info-tit-l text-color-4' },
	                                '\u670D\u52A1\u7C7B\u578B'
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { className: 'padding-left-0 text-color-3' },
	                                '\u4E2A\u4EBA\u670D\u52A1'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Grid,
	                            { className: 'padding-v margin-left' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { shrink: true, className: 'padding-left-0 server-info-tit-l text-color-4' },
	                                '\u670D\u52A1\u8BE6\u60C5'
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { className: 'padding-left-0 text-color-3' },
	                                '\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Grid,
	                            { className: 'padding-v margin-left' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { shrink: true, className: 'padding-left-0 server-info-tit-l text-color-4' },
	                                '\u4EE3\u8868\u4F5C\u54C1'
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { className: 'padding-left-0 text-color-3' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Grid,
	                                    { className: 'border-none' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        null,
	                                        _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' })
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        null,
	                                        _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        null,
	                                        _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-3.jpg' })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _Require2 = __webpack_require__(19);

	var _Require3 = _interopRequireDefault(_Require2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//个人需求数据
	var personalList = [{
	    title: '12345元',
	    subTitle: '名称',
	    href: '/require/info/01',
	    desc: '需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述',
	    target: '_blank',
	    after: '保证金300元',
	    bottomLeft: '招募创作人',
	    bottomRight: '剩余50天'
	}, {
	    title: "女爵",
	    subTitle: "发行公司：环球唱片",
	    href: "/require/info/01",
	    desc: "需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述",
	    target: "_blank",
	    bottomLeft: '征集作品',
	    bottomRight: '剩余50天'
	}];

	//工作室需求数据
	var studioList = [{
	    title: "女爵",
	    subTitle: "发行公司：环球唱片",
	    href: "/require/info/01",
	    desc: "111",
	    target: "_blank",
	    bottomLeft: '交易成功',
	    bottomRight: '北京'
	}];

	//企业需求数据
	var companyList = [{
	    title: "女爵",
	    subTitle: "发行公司：环球唱片",
	    href: "/require/info/01",
	    desc: "111",
	    target: "_blank",
	    bottomLeft: '交易成功',
	    bottomRight: '北京'
	}];
	exports.default = _react2.default.createClass({
	    displayName: 'Require',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'require-tabs-list' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.Tabs,
	                        { activeKey: this.state.activeTab, onAction: this.handleAction, className: 'margin-0' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u4E2A\u4EBA', key: '1', className: 'padding-0' },
	                            _react2.default.createElement(_Require3.default, { requireList: personalList })
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u5DE5\u4F5C\u5BA4', key: '2', className: 'padding-0' },
	                            _react2.default.createElement(_Require3.default, { requireList: studioList })
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u4F01\u4E1A', key: '3', className: 'padding-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                { className: 'margin-top-0' },
	                                _react2.default.createElement(_Require3.default, { requireList: companyList })
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _Comments2 = __webpack_require__(30);

	var _Comments3 = _interopRequireDefault(_Comments2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RequireInfo = function (_React$Component) {
	    _inherits(RequireInfo, _React$Component);

	    function RequireInfo(props) {
	        _classCallCheck(this, RequireInfo);

	        var _this = _possibleConstructorReturn(this, (RequireInfo.__proto__ || Object.getPrototypeOf(RequireInfo)).call(this, props));

	        _this.state = {};
	        _this.state.hotCommentList = [{
	            media: 'http://s.amazeui.org/media/i/demos/bing-2.jpg', //头像地址
	            title: '女爵', //标题
	            subTitle: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内', //描述
	            time: '10分钟前', //时间
	            like: '2' //点赞人数
	        }];

	        _this.state.commentList = [{
	            media: 'http://s.amazeui.org/media/i/demos/bing-2.jpg', //头像地址
	            title: '女爵', //标题
	            subTitle: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内', //描述
	            time: '10分钟前', //时间
	            like: '2' //点赞人数
	        }, {
	            media: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
	            title: '女爵',
	            subTitle: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内',
	            time: '10分钟前',
	            like: '2'
	        }];
	        return _this;
	    }

	    _createClass(RequireInfo, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _amazeuiTouch.View,
	                null,
	                _react2.default.createElement(_Header3.default, null),
	                _react2.default.createElement(
	                    _amazeuiTouch.Container,
	                    { scrollable: true },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'bgF require-info-user' },
	                        _react2.default.createElement(_amazeuiTouch.List.Item, {
	                            media: _react2.default.createElement('img', { className: 'require-user-avatar', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' }),
	                            after: _react2.default.createElement(
	                                'div',
	                                { className: 'require-user-tag' },
	                                '\u5173\u6CE8'
	                            ),
	                            title: _react2.default.createElement(
	                                'div',
	                                { className: 'require-user-name' },
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'text-color-3 text-size-14' },
	                                    '\u767D\u53D1\u9B54\u5973'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'text-color-4 text-size-13' },
	                                    '\u5317\u4EAC'
	                                )
	                            )
	                        })
	                    ),
	                    _react2.default.createElement(
	                        _amazeuiTouch.Group,
	                        { noPadded: true, className: 'margin-0' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'require-info text-size-14' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { className: 'padding-v margin-left' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { shrink: true, className: 'padding-left-0 require-info-tit-l text-color-4' },
	                                    '\u9700\u6C42\u540D\u79F0'
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-left-0 text-color-3' },
	                                    '\u540D\u79F0\u540D\u79F0\u540D\u79F0\u540D\u79F0'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { className: 'padding-v margin-left' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { shrink: true, className: 'padding-left-0 require-info-tit-l text-color-4' },
	                                    '\u6240\u9700\u6280\u80FD'
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-left-0 text-color-3' },
	                                    '\u6280\u80FD\u540D\u79F0\uFF0C\u6280\u80FD\u540D\u79F0\uFF0C'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { className: 'padding-v margin-left' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { shrink: true, className: 'padding-left-0 require-info-tit-l text-color-4' },
	                                    '\u916C\u91D1'
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-left-0 text-color-5' },
	                                    '100\u5143\u6BCF\u5C0F\u65F6'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { className: 'padding-v margin-left' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { shrink: true, className: 'padding-left-0 require-info-tit-l text-color-4' },
	                                    '\u4FDD\u8BC1\u91D1'
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-left-0 text-color-5' },
	                                    '100\u5143\u6BCF\u5C0F\u65F6'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { className: 'padding-v margin-left' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { shrink: true, className: 'padding-left-0 require-info-tit-l text-color-4' },
	                                    '\u9700\u6C42\u5730\u70B9'
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-left-0 text-color-3' },
	                                    '\u5317\u4EAC'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { className: 'padding-v margin-left' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { shrink: true, className: 'padding-left-0 require-info-tit-l text-color-4' },
	                                    '\u53D1\u5E03\u65E5\u671F'
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-left-0 text-color-3' },
	                                    '2016.1.11'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { className: 'padding-v margin-left' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { shrink: true, className: 'padding-left-0 require-info-tit-l text-color-4' },
	                                    '\u622A\u6B62\u65E5\u671F'
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-left-0 text-color-3' },
	                                    '2016.12.11'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _amazeuiTouch.Group,
	                        { noPadded: true, className: 'margin-v' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'padding-v require-badge' },
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-size-14' },
	                                _react2.default.createElement(_amazeuiTouch.Badge, null),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'padding-left-sm' },
	                                    '\u62A5\u540D\u5217\u8868\uFF0820\u4EBA\uFF09'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Group,
	                            { noPadded: true, className: 'margin-0 require-apply-list' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                { className: 'padding-v-xs' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-xs text-center' },
	                                    _react2.default.createElement('img', { width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-xs text-center' },
	                                    _react2.default.createElement('img', { width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-xs text-center' },
	                                    _react2.default.createElement('img', { width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-xs text-center' },
	                                    _react2.default.createElement('img', { width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-xs text-center' },
	                                    _react2.default.createElement('img', { width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-xs text-center' },
	                                    _react2.default.createElement('img', { width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-xs text-center' },
	                                    _react2.default.createElement('img', { width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _amazeuiTouch.Group,
	                        { noPadded: true, className: 'margin-v' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'padding-top require-badge' },
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-size-14' },
	                                _react2.default.createElement(_amazeuiTouch.Badge, null),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'padding-left-sm' },
	                                    '\u70ED\u95E8\u8BC4\u8BBA'
	                                )
	                            ),
	                            _react2.default.createElement(_Comments3.default, { commentList: this.state.hotCommentList })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'padding-top require-badge border-none' },
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-size-14' },
	                                _react2.default.createElement(_amazeuiTouch.Badge, null),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'padding-left-sm' },
	                                    '\u5168\u90E8\u8BC4\u8BBA\uFF0830\u6761\uFF09'
	                                )
	                            ),
	                            _react2.default.createElement(_Comments3.default, { commentList: this.state.commentList })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return RequireInfo;
	}(_react2.default.Component);

	exports.default = RequireInfo;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//公用评论组件
	var _Comments = function (_React$Component) {
	    _inherits(_Comments, _React$Component);

	    function _Comments() {
	        _classCallCheck(this, _Comments);

	        return _possibleConstructorReturn(this, (_Comments.__proto__ || Object.getPrototypeOf(_Comments)).apply(this, arguments));
	    }

	    _createClass(_Comments, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _amazeuiTouch.List,
	                { className: 'comments' },
	                this.props.commentList.map(function (item, i) {
	                    return _react2.default.createElement(_amazeuiTouch.List.Item, {
	                        media: _react2.default.createElement('img', { className: 'comments-avatar', width: '44', height: '44', src: item.media }),
	                        title: item.title,
	                        subTitle: item.subTitle,
	                        desc: _react2.default.createElement(
	                            _amazeuiTouch.Grid,
	                            { align: 'between' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { cols: 2, className: 'text-left padding-0' },
	                                item.time
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Col,
	                                { cols: 2, className: 'text-right' },
	                                item.like
	                            )
	                        ),
	                        key: i
	                    });
	                })
	            );
	        }
	    }]);

	    return _Comments;
	}(_react2.default.Component);

	exports.default = _Comments;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = function (_React$Component) {
	    _inherits(Search, _React$Component);

	    function Search(props) {
	        _classCallCheck(this, Search);

	        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

	        _this.state = {
	            visible: true,
	            searchVal: _this.props.location.query.search
	        };
	        return _this;
	    }

	    _createClass(Search, [{
	        key: 'handleChange',
	        value: function handleChange(event) {
	            this.setState({
	                searchVal: event.target.value
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _amazeuiTouch.View,
	                { className: 'header' },
	                _react2.default.createElement(_Header3.default, { isSearch: true, onChange: this.handleChange.bind(this), searchVal: this.state.searchVal }),
	                _react2.default.createElement(
	                    _amazeuiTouch.Container,
	                    { scrollable: true },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'require-tabs-list' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs,
	                            { onAction: this.handleAction, className: 'margin-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Tabs.Item,
	                                { title: '\u90E8\u843D', key: '1', className: 'padding-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List,
	                                    { className: 'margin-top-0' },
	                                    this.state.searchVal
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Tabs.Item,
	                                { title: '\u8BDD\u9898', key: '2', className: 'padding-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List,
	                                    { className: 'margin-top-0' },
	                                    's'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Tabs.Item,
	                                { title: '\u9700\u6C42', key: '3', className: 'padding-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List,
	                                    { className: 'margin-top-0' },
	                                    's'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Tabs.Item,
	                                { title: '\u670D\u52A1', key: '3', className: 'padding-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List,
	                                    { className: 'margin-top-0' },
	                                    's'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Search;
	}(_react2.default.Component);

	exports.default = Search;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var albums = [{
	    title: '女爵',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：环球唱片',
	    href: '/tribe/info/01',
	    desc: '\n      \u5979\u5766\u767D\u4E86\u6211\u4EEC\u6240\u865A\u4F2A\u7684 \u5979\u5355\u7EAF\u4E86\u6211\u4EEC\u6240\u590D\u6742\u7684\n      \u4E94\u5E74\u4EE5\u6765\u2026\n      5\u5E74\u7684\u7B49\u5F85\uFF0C\u662F\u4E2A\u6F2B\u957F\u4E5F\u662F\u8017\u635F\u7684\u8FC7\u7A0B\u3002\n      \u770B\u5C3D\u4E50\u575B\u82AD\u6BD4\u5A03\u5A03\u7684\u751C\u7F8E\u9762\u5177\uFF0C\u300C\u6027\u683C\u300D\u8FD9\u4E24\u4E2A\u5B57\uFF0C\u4F3C\u4E4E\u5FEB\u8981\u6D88\u5931\uFF01\n      \u5979\u7684\u58F0\u97F3\uFF0C\u5979\u7684\u4E2A\u6027\uFF0C\u8C61\u5FB5\u8457\u65E0\u53EF\u53D6\u4EE3\u7684\u9AD8\u50B2\u3001\u72EC\u7279\u7684\u59FF\u6001\uFF0C\n      \u8FD9\u6837\u4E00\u80A1\u5145\u6EE1\u7075\u9B42\u7684\u97F3\u4E50\u3001\u6C89\u5BC2\u800C\u521A\u82CF\u9192\u7684\u771F\u58F0\u97F3\uFF0C\n      \u662F\u6211\u4EEC\u552F\u4E00\u76F8\u4FE1\u4E14\u671F\u5F85\u6768\u4E43\u6587\u7684\u7406\u7531\u3002'
	}, {
	    title: '第一张精选',
	    media: 'http://lorempixel.com/128/128/people/',
	    subTitle: '发行公司：滚石唱片',
	    href: '/tribe/info/01',
	    desc: '\n        \u51FA\u9053\u516D\u5E74\u6765\u53EA\u51FA\u8FC7\u4E09\u5F20\u4E13\u8F91\u7684\u6768\u4E43\u6587\uFF0C\u7B2C\u4E00\u6B21\u96C6\u5408\u4E09\u5F20\u4E13\u8F91\u7684\u7CBE\u534E\u6784\u6210\u4E86\u8FD9\u5F20\u5145\u6EE1\u4E2A\u6027\u7684\u7CBE\u9009\u8F91\u3002\u4E13\u8F91\u6536\u5F55\u5C1A\u672A\u53D1\u7247\u524D\u9996\u5148\u66DD\u5149\uFF0C\u539F\u59CB\u6D53\u70C8\u7684\u6768\u4E43\u6587\u72EC\u5531\u66F2[\u7231\u4E0A\u4F60\u53EA\u662F\u6211\u7684\u9519]\u3001\u66FE\u8BA9\u65E0\u6570\u4EBA\u4F24\u611F\u843D\u6CEA\u7684\u300A\u6211\u7ED9\u7684\u7231\u300B\u3001\u60B2\u60C5\u7ECF\u5178\u300Asilence\u300B\u3001\u6768\u4E43\u658796\u5E74\u5728\u9B54\u5CA9\u6821\u56EDlive\u6F14\u5531\u4F1A\u4E0A\u654F\u611F\u70ED\u70C8\u7684\u521B\u4F5C\u300Afear\u300B\u3001\u5145\u6EE1\u53E4\u5178\u4F18\u96C5\u6C14\u8D28\u7684\u7535\u5F71[\u7B2C\u51E1\u5185\u65E9\u9910]\u7684\u4E3B\u9898\u66F2\u300Amonn river\u300B\u7B49\u597D\u6B4C\u3002\u901A\u8FC7\u5C1D\u8BD5\u5404\u79CD\u65B0\u9C9C\u5F62\u8C61\uFF0C\u642D\u914DMV\u8425\u9020\u7684\u6C1B\u56F4\uFF0C\u603B\u662F\u7ED9\u4EBA\u8033\u76EE\u4E00\u65B0\u7684\u65B0\u611F\u89C9\u3002'
	}, {
	    title: 'Silence',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：魔岩唱片',
	    href: '/tribe/info/01',
	    desc: '\u6240\u6709\u4EBA\u90FD\u80FD\u4ECE\u4F5C\u54C1\u4E2D\u542C\u5230\u80FD\u91CF\u548C\u9707\u64BC\u7684\u5448\u73B0\uFF0C\u77DB\u76FE\u4E0E\u59A5\u534F\uFF0C\u5931\u610F\u4E0E\u5FEB\u4E50\uFF0C\u5236\u4F5C\u4EBA\u6797\u709C\u54F2\u662F\u771F\u6B63\u8FDB\u5165\u5230\u6B4C\u624B\u7684\u7075\u9B42\uFF0C\u627E\u51FA\u6700\u771F\u5B9E\u7684\u77AC\u95F4\u518D\u71C3\u70E7\u91CA\u653E\uFF0C\u732E\u7ED9\u5927\u5BB6\uFF1B\u8FD9\u79CD\u5B8C\u5168\u8BA4\u771F\u4F5C\u97F3\u4E50\u4E0D\u54C8\u5566\u7684\u6001\u5EA6\uFF0C\u4E0D\u662F\u53EA\u5B57\u7247\u8BED\u80FD\u5F62\u5BB9\uFF0C\u4E5F\u5E76\u975E\u901F\u98DF\u6587\u5316\u6240\u80FD\u6BD4\u62DF\uFF0C\u8FD9\u79CD\u7CBE\u795E\u662F\u548C\u5168\u4E16\u754C\u7684\u97F3\u4E50\u4EBA\u540C\u6B65\uFF0C\u8FD9\u4E5F\u662F\u4ED6\u4EEC\u7684\u4F5C\u54C1\u548C\u53F0\u6E7E\u5927\u90E8\u4EFD\u622A\u7136\u4E0D\u540C\u7684\u539F\u56E0\u3002\u8FD9\u6837\u7684\u97F3\u4E50\u6B63\u662F\u53F0\u6E7E\u5E74\u8F7B\u4EBA\u76EE\u524D\u9700\u8981\u7684\uFF0C\u4E0E\u4E16\u754C\u5904\u5728\u540C\u6B65\u6F6E\u6D41\uFF0C\u6240\u6709\u5E74\u8F7B\u4EBA\u90FD\u80FD\u611F\u53D7\u7684\u70ED\u60C5\u548C\u529B\u91CF'
	}, {
	    title: '女爵',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：环球唱片',
	    href: '/tribe/info/01',
	    desc: '\n      \u5979\u5766\u767D\u4E86\u6211\u4EEC\u6240\u865A\u4F2A\u7684 \u5979\u5355\u7EAF\u4E86\u6211\u4EEC\u6240\u590D\u6742\u7684\n      \u4E94\u5E74\u4EE5\u6765\u2026\n      5\u5E74\u7684\u7B49\u5F85\uFF0C\u662F\u4E2A\u6F2B\u957F\u4E5F\u662F\u8017\u635F\u7684\u8FC7\u7A0B\u3002\n      \u770B\u5C3D\u4E50\u575B\u82AD\u6BD4\u5A03\u5A03\u7684\u751C\u7F8E\u9762\u5177\uFF0C\u300C\u6027\u683C\u300D\u8FD9\u4E24\u4E2A\u5B57\uFF0C\u4F3C\u4E4E\u5FEB\u8981\u6D88\u5931\uFF01\n      \u5979\u7684\u58F0\u97F3\uFF0C\u5979\u7684\u4E2A\u6027\uFF0C\u8C61\u5FB5\u8457\u65E0\u53EF\u53D6\u4EE3\u7684\u9AD8\u50B2\u3001\u72EC\u7279\u7684\u59FF\u6001\uFF0C\n      \u8FD9\u6837\u4E00\u80A1\u5145\u6EE1\u7075\u9B42\u7684\u97F3\u4E50\u3001\u6C89\u5BC2\u800C\u521A\u82CF\u9192\u7684\u771F\u58F0\u97F3\uFF0C\n      \u662F\u6211\u4EEC\u552F\u4E00\u76F8\u4FE1\u4E14\u671F\u5F85\u6768\u4E43\u6587\u7684\u7406\u7531\u3002'
	}, {
	    title: '第一张精选',
	    media: 'http://lorempixel.com/128/128/people/',
	    subTitle: '发行公司：滚石唱片',
	    href: '/tribe/info/01',
	    desc: '\n        \u51FA\u9053\u516D\u5E74\u6765\u53EA\u51FA\u8FC7\u4E09\u5F20\u4E13\u8F91\u7684\u6768\u4E43\u6587\uFF0C\u7B2C\u4E00\u6B21\u96C6\u5408\u4E09\u5F20\u4E13\u8F91\u7684\u7CBE\u534E\u6784\u6210\u4E86\u8FD9\u5F20\u5145\u6EE1\u4E2A\u6027\u7684\u7CBE\u9009\u8F91\u3002\u4E13\u8F91\u6536\u5F55\u5C1A\u672A\u53D1\u7247\u524D\u9996\u5148\u66DD\u5149\uFF0C\u539F\u59CB\u6D53\u70C8\u7684\u6768\u4E43\u6587\u72EC\u5531\u66F2[\u7231\u4E0A\u4F60\u53EA\u662F\u6211\u7684\u9519]\u3001\u66FE\u8BA9\u65E0\u6570\u4EBA\u4F24\u611F\u843D\u6CEA\u7684\u300A\u6211\u7ED9\u7684\u7231\u300B\u3001\u60B2\u60C5\u7ECF\u5178\u300Asilence\u300B\u3001\u6768\u4E43\u658796\u5E74\u5728\u9B54\u5CA9\u6821\u56EDlive\u6F14\u5531\u4F1A\u4E0A\u654F\u611F\u70ED\u70C8\u7684\u521B\u4F5C\u300Afear\u300B\u3001\u5145\u6EE1\u53E4\u5178\u4F18\u96C5\u6C14\u8D28\u7684\u7535\u5F71[\u7B2C\u51E1\u5185\u65E9\u9910]\u7684\u4E3B\u9898\u66F2\u300Amonn river\u300B\u7B49\u597D\u6B4C\u3002\u901A\u8FC7\u5C1D\u8BD5\u5404\u79CD\u65B0\u9C9C\u5F62\u8C61\uFF0C\u642D\u914DMV\u8425\u9020\u7684\u6C1B\u56F4\uFF0C\u603B\u662F\u7ED9\u4EBA\u8033\u76EE\u4E00\u65B0\u7684\u65B0\u611F\u89C9\u3002'
	}, {
	    title: 'Silence',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：魔岩唱片',
	    href: '/tribe/info/01',
	    desc: '\u6240\u6709\u4EBA\u90FD\u80FD\u4ECE\u4F5C\u54C1\u4E2D\u542C\u5230\u80FD\u91CF\u548C\u9707\u64BC\u7684\u5448\u73B0\uFF0C\u77DB\u76FE\u4E0E\u59A5\u534F\uFF0C\u5931\u610F\u4E0E\u5FEB\u4E50\uFF0C\u5236\u4F5C\u4EBA\u6797\u709C\u54F2\u662F\u771F\u6B63\u8FDB\u5165\u5230\u6B4C\u624B\u7684\u7075\u9B42\uFF0C\u627E\u51FA\u6700\u771F\u5B9E\u7684\u77AC\u95F4\u518D\u71C3\u70E7\u91CA\u653E\uFF0C\u732E\u7ED9\u5927\u5BB6\uFF1B\u8FD9\u79CD\u5B8C\u5168\u8BA4\u771F\u4F5C\u97F3\u4E50\u4E0D\u54C8\u5566\u7684\u6001\u5EA6\uFF0C\u4E0D\u662F\u53EA\u5B57\u7247\u8BED\u80FD\u5F62\u5BB9\uFF0C\u4E5F\u5E76\u975E\u901F\u98DF\u6587\u5316\u6240\u80FD\u6BD4\u62DF\uFF0C\u8FD9\u79CD\u7CBE\u795E\u662F\u548C\u5168\u4E16\u754C\u7684\u97F3\u4E50\u4EBA\u540C\u6B65\uFF0C\u8FD9\u4E5F\u662F\u4ED6\u4EEC\u7684\u4F5C\u54C1\u548C\u53F0\u6E7E\u5927\u90E8\u4EFD\u622A\u7136\u4E0D\u540C\u7684\u539F\u56E0\u3002\u8FD9\u6837\u7684\u97F3\u4E50\u6B63\u662F\u53F0\u6E7E\u5E74\u8F7B\u4EBA\u76EE\u524D\u9700\u8981\u7684\uFF0C\u4E0E\u4E16\u754C\u5904\u5728\u540C\u6B65\u6F6E\u6D41\uFF0C\u6240\u6709\u5E74\u8F7B\u4EBA\u90FD\u80FD\u611F\u53D7\u7684\u70ED\u60C5\u548C\u529B\u91CF'
	}, {
	    title: '女爵',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：环球唱片',
	    href: '/tribe/info/01',
	    desc: '\n      \u5979\u5766\u767D\u4E86\u6211\u4EEC\u6240\u865A\u4F2A\u7684 \u5979\u5355\u7EAF\u4E86\u6211\u4EEC\u6240\u590D\u6742\u7684\n      \u4E94\u5E74\u4EE5\u6765\u2026\n      5\u5E74\u7684\u7B49\u5F85\uFF0C\u662F\u4E2A\u6F2B\u957F\u4E5F\u662F\u8017\u635F\u7684\u8FC7\u7A0B\u3002\n      \u770B\u5C3D\u4E50\u575B\u82AD\u6BD4\u5A03\u5A03\u7684\u751C\u7F8E\u9762\u5177\uFF0C\u300C\u6027\u683C\u300D\u8FD9\u4E24\u4E2A\u5B57\uFF0C\u4F3C\u4E4E\u5FEB\u8981\u6D88\u5931\uFF01\n      \u5979\u7684\u58F0\u97F3\uFF0C\u5979\u7684\u4E2A\u6027\uFF0C\u8C61\u5FB5\u8457\u65E0\u53EF\u53D6\u4EE3\u7684\u9AD8\u50B2\u3001\u72EC\u7279\u7684\u59FF\u6001\uFF0C\n      \u8FD9\u6837\u4E00\u80A1\u5145\u6EE1\u7075\u9B42\u7684\u97F3\u4E50\u3001\u6C89\u5BC2\u800C\u521A\u82CF\u9192\u7684\u771F\u58F0\u97F3\uFF0C\n      \u662F\u6211\u4EEC\u552F\u4E00\u76F8\u4FE1\u4E14\u671F\u5F85\u6768\u4E43\u6587\u7684\u7406\u7531\u3002'
	}, {
	    title: '第一张精选',
	    media: 'http://lorempixel.com/128/128/people/',
	    subTitle: '发行公司：滚石唱片',
	    href: '/tribe/info/01',
	    desc: '\n        \u51FA\u9053\u516D\u5E74\u6765\u53EA\u51FA\u8FC7\u4E09\u5F20\u4E13\u8F91\u7684\u6768\u4E43\u6587\uFF0C\u7B2C\u4E00\u6B21\u96C6\u5408\u4E09\u5F20\u4E13\u8F91\u7684\u7CBE\u534E\u6784\u6210\u4E86\u8FD9\u5F20\u5145\u6EE1\u4E2A\u6027\u7684\u7CBE\u9009\u8F91\u3002\u4E13\u8F91\u6536\u5F55\u5C1A\u672A\u53D1\u7247\u524D\u9996\u5148\u66DD\u5149\uFF0C\u539F\u59CB\u6D53\u70C8\u7684\u6768\u4E43\u6587\u72EC\u5531\u66F2[\u7231\u4E0A\u4F60\u53EA\u662F\u6211\u7684\u9519]\u3001\u66FE\u8BA9\u65E0\u6570\u4EBA\u4F24\u611F\u843D\u6CEA\u7684\u300A\u6211\u7ED9\u7684\u7231\u300B\u3001\u60B2\u60C5\u7ECF\u5178\u300Asilence\u300B\u3001\u6768\u4E43\u658796\u5E74\u5728\u9B54\u5CA9\u6821\u56EDlive\u6F14\u5531\u4F1A\u4E0A\u654F\u611F\u70ED\u70C8\u7684\u521B\u4F5C\u300Afear\u300B\u3001\u5145\u6EE1\u53E4\u5178\u4F18\u96C5\u6C14\u8D28\u7684\u7535\u5F71[\u7B2C\u51E1\u5185\u65E9\u9910]\u7684\u4E3B\u9898\u66F2\u300Amonn river\u300B\u7B49\u597D\u6B4C\u3002\u901A\u8FC7\u5C1D\u8BD5\u5404\u79CD\u65B0\u9C9C\u5F62\u8C61\uFF0C\u642D\u914DMV\u8425\u9020\u7684\u6C1B\u56F4\uFF0C\u603B\u662F\u7ED9\u4EBA\u8033\u76EE\u4E00\u65B0\u7684\u65B0\u611F\u89C9\u3002'
	}, {
	    title: 'Silence',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：魔岩唱片',
	    href: '/tribe/info/01',
	    desc: '\u6240\u6709\u4EBA\u90FD\u80FD\u4ECE\u4F5C\u54C1\u4E2D\u542C\u5230\u80FD\u91CF\u548C\u9707\u64BC\u7684\u5448\u73B0\uFF0C\u77DB\u76FE\u4E0E\u59A5\u534F\uFF0C\u5931\u610F\u4E0E\u5FEB\u4E50\uFF0C\u5236\u4F5C\u4EBA\u6797\u709C\u54F2\u662F\u771F\u6B63\u8FDB\u5165\u5230\u6B4C\u624B\u7684\u7075\u9B42\uFF0C\u627E\u51FA\u6700\u771F\u5B9E\u7684\u77AC\u95F4\u518D\u71C3\u70E7\u91CA\u653E\uFF0C\u732E\u7ED9\u5927\u5BB6\uFF1B\u8FD9\u79CD\u5B8C\u5168\u8BA4\u771F\u4F5C\u97F3\u4E50\u4E0D\u54C8\u5566\u7684\u6001\u5EA6\uFF0C\u4E0D\u662F\u53EA\u5B57\u7247\u8BED\u80FD\u5F62\u5BB9\uFF0C\u4E5F\u5E76\u975E\u901F\u98DF\u6587\u5316\u6240\u80FD\u6BD4\u62DF\uFF0C\u8FD9\u79CD\u7CBE\u795E\u662F\u548C\u5168\u4E16\u754C\u7684\u97F3\u4E50\u4EBA\u540C\u6B65\uFF0C\u8FD9\u4E5F\u662F\u4ED6\u4EEC\u7684\u4F5C\u54C1\u548C\u53F0\u6E7E\u5927\u90E8\u4EFD\u622A\u7136\u4E0D\u540C\u7684\u539F\u56E0\u3002\u8FD9\u6837\u7684\u97F3\u4E50\u6B63\u662F\u53F0\u6E7E\u5E74\u8F7B\u4EBA\u76EE\u524D\u9700\u8981\u7684\uFF0C\u4E0E\u4E16\u754C\u5904\u5728\u540C\u6B65\u6F6E\u6D41\uFF0C\u6240\u6709\u5E74\u8F7B\u4EBA\u90FD\u80FD\u611F\u53D7\u7684\u70ED\u60C5\u548C\u529B\u91CF'
	}, {
	    title: '女爵',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：环球唱片',
	    href: '/tribe/info/01',
	    desc: '\n      \u5979\u5766\u767D\u4E86\u6211\u4EEC\u6240\u865A\u4F2A\u7684 \u5979\u5355\u7EAF\u4E86\u6211\u4EEC\u6240\u590D\u6742\u7684\n      \u4E94\u5E74\u4EE5\u6765\u2026\n      5\u5E74\u7684\u7B49\u5F85\uFF0C\u662F\u4E2A\u6F2B\u957F\u4E5F\u662F\u8017\u635F\u7684\u8FC7\u7A0B\u3002\n      \u770B\u5C3D\u4E50\u575B\u82AD\u6BD4\u5A03\u5A03\u7684\u751C\u7F8E\u9762\u5177\uFF0C\u300C\u6027\u683C\u300D\u8FD9\u4E24\u4E2A\u5B57\uFF0C\u4F3C\u4E4E\u5FEB\u8981\u6D88\u5931\uFF01\n      \u5979\u7684\u58F0\u97F3\uFF0C\u5979\u7684\u4E2A\u6027\uFF0C\u8C61\u5FB5\u8457\u65E0\u53EF\u53D6\u4EE3\u7684\u9AD8\u50B2\u3001\u72EC\u7279\u7684\u59FF\u6001\uFF0C\n      \u8FD9\u6837\u4E00\u80A1\u5145\u6EE1\u7075\u9B42\u7684\u97F3\u4E50\u3001\u6C89\u5BC2\u800C\u521A\u82CF\u9192\u7684\u771F\u58F0\u97F3\uFF0C\n      \u662F\u6211\u4EEC\u552F\u4E00\u76F8\u4FE1\u4E14\u671F\u5F85\u6768\u4E43\u6587\u7684\u7406\u7531\u3002'
	}, {
	    title: '第一张精选',
	    media: 'http://lorempixel.com/128/128/people/',
	    subTitle: '发行公司：滚石唱片',
	    href: '/tribe/info/01',
	    desc: '\n        \u51FA\u9053\u516D\u5E74\u6765\u53EA\u51FA\u8FC7\u4E09\u5F20\u4E13\u8F91\u7684\u6768\u4E43\u6587\uFF0C\u7B2C\u4E00\u6B21\u96C6\u5408\u4E09\u5F20\u4E13\u8F91\u7684\u7CBE\u534E\u6784\u6210\u4E86\u8FD9\u5F20\u5145\u6EE1\u4E2A\u6027\u7684\u7CBE\u9009\u8F91\u3002\u4E13\u8F91\u6536\u5F55\u5C1A\u672A\u53D1\u7247\u524D\u9996\u5148\u66DD\u5149\uFF0C\u539F\u59CB\u6D53\u70C8\u7684\u6768\u4E43\u6587\u72EC\u5531\u66F2[\u7231\u4E0A\u4F60\u53EA\u662F\u6211\u7684\u9519]\u3001\u66FE\u8BA9\u65E0\u6570\u4EBA\u4F24\u611F\u843D\u6CEA\u7684\u300A\u6211\u7ED9\u7684\u7231\u300B\u3001\u60B2\u60C5\u7ECF\u5178\u300Asilence\u300B\u3001\u6768\u4E43\u658796\u5E74\u5728\u9B54\u5CA9\u6821\u56EDlive\u6F14\u5531\u4F1A\u4E0A\u654F\u611F\u70ED\u70C8\u7684\u521B\u4F5C\u300Afear\u300B\u3001\u5145\u6EE1\u53E4\u5178\u4F18\u96C5\u6C14\u8D28\u7684\u7535\u5F71[\u7B2C\u51E1\u5185\u65E9\u9910]\u7684\u4E3B\u9898\u66F2\u300Amonn river\u300B\u7B49\u597D\u6B4C\u3002\u901A\u8FC7\u5C1D\u8BD5\u5404\u79CD\u65B0\u9C9C\u5F62\u8C61\uFF0C\u642D\u914DMV\u8425\u9020\u7684\u6C1B\u56F4\uFF0C\u603B\u662F\u7ED9\u4EBA\u8033\u76EE\u4E00\u65B0\u7684\u65B0\u611F\u89C9\u3002'
	}, {
	    title: 'Silence',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：魔岩唱片',
	    href: '/tribe/info/01',
	    desc: '\u6240\u6709\u4EBA\u90FD\u80FD\u4ECE\u4F5C\u54C1\u4E2D\u542C\u5230\u80FD\u91CF\u548C\u9707\u64BC\u7684\u5448\u73B0\uFF0C\u77DB\u76FE\u4E0E\u59A5\u534F\uFF0C\u5931\u610F\u4E0E\u5FEB\u4E50\uFF0C\u5236\u4F5C\u4EBA\u6797\u709C\u54F2\u662F\u771F\u6B63\u8FDB\u5165\u5230\u6B4C\u624B\u7684\u7075\u9B42\uFF0C\u627E\u51FA\u6700\u771F\u5B9E\u7684\u77AC\u95F4\u518D\u71C3\u70E7\u91CA\u653E\uFF0C\u732E\u7ED9\u5927\u5BB6\uFF1B\u8FD9\u79CD\u5B8C\u5168\u8BA4\u771F\u4F5C\u97F3\u4E50\u4E0D\u54C8\u5566\u7684\u6001\u5EA6\uFF0C\u4E0D\u662F\u53EA\u5B57\u7247\u8BED\u80FD\u5F62\u5BB9\uFF0C\u4E5F\u5E76\u975E\u901F\u98DF\u6587\u5316\u6240\u80FD\u6BD4\u62DF\uFF0C\u8FD9\u79CD\u7CBE\u795E\u662F\u548C\u5168\u4E16\u754C\u7684\u97F3\u4E50\u4EBA\u540C\u6B65\uFF0C\u8FD9\u4E5F\u662F\u4ED6\u4EEC\u7684\u4F5C\u54C1\u548C\u53F0\u6E7E\u5927\u90E8\u4EFD\u622A\u7136\u4E0D\u540C\u7684\u539F\u56E0\u3002\u8FD9\u6837\u7684\u97F3\u4E50\u6B63\u662F\u53F0\u6E7E\u5E74\u8F7B\u4EBA\u76EE\u524D\u9700\u8981\u7684\uFF0C\u4E0E\u4E16\u754C\u5904\u5728\u540C\u6B65\u6F6E\u6D41\uFF0C\u6240\u6709\u5E74\u8F7B\u4EBA\u90FD\u80FD\u611F\u53D7\u7684\u70ED\u60C5\u548C\u529B\u91CF'
	}, {
	    title: '女爵',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：环球唱片',
	    href: '/tribe/info/01',
	    desc: '\n      \u5979\u5766\u767D\u4E86\u6211\u4EEC\u6240\u865A\u4F2A\u7684 \u5979\u5355\u7EAF\u4E86\u6211\u4EEC\u6240\u590D\u6742\u7684\n      \u4E94\u5E74\u4EE5\u6765\u2026\n      5\u5E74\u7684\u7B49\u5F85\uFF0C\u662F\u4E2A\u6F2B\u957F\u4E5F\u662F\u8017\u635F\u7684\u8FC7\u7A0B\u3002\n      \u770B\u5C3D\u4E50\u575B\u82AD\u6BD4\u5A03\u5A03\u7684\u751C\u7F8E\u9762\u5177\uFF0C\u300C\u6027\u683C\u300D\u8FD9\u4E24\u4E2A\u5B57\uFF0C\u4F3C\u4E4E\u5FEB\u8981\u6D88\u5931\uFF01\n      \u5979\u7684\u58F0\u97F3\uFF0C\u5979\u7684\u4E2A\u6027\uFF0C\u8C61\u5FB5\u8457\u65E0\u53EF\u53D6\u4EE3\u7684\u9AD8\u50B2\u3001\u72EC\u7279\u7684\u59FF\u6001\uFF0C\n      \u8FD9\u6837\u4E00\u80A1\u5145\u6EE1\u7075\u9B42\u7684\u97F3\u4E50\u3001\u6C89\u5BC2\u800C\u521A\u82CF\u9192\u7684\u771F\u58F0\u97F3\uFF0C\n      \u662F\u6211\u4EEC\u552F\u4E00\u76F8\u4FE1\u4E14\u671F\u5F85\u6768\u4E43\u6587\u7684\u7406\u7531\u3002'
	}, {
	    title: '第一张精选',
	    media: 'http://lorempixel.com/128/128/people/',
	    subTitle: '发行公司：滚石唱片',
	    href: '/tribe/info/01',
	    desc: '\n        \u51FA\u9053\u516D\u5E74\u6765\u53EA\u51FA\u8FC7\u4E09\u5F20\u4E13\u8F91\u7684\u6768\u4E43\u6587\uFF0C\u7B2C\u4E00\u6B21\u96C6\u5408\u4E09\u5F20\u4E13\u8F91\u7684\u7CBE\u534E\u6784\u6210\u4E86\u8FD9\u5F20\u5145\u6EE1\u4E2A\u6027\u7684\u7CBE\u9009\u8F91\u3002\u4E13\u8F91\u6536\u5F55\u5C1A\u672A\u53D1\u7247\u524D\u9996\u5148\u66DD\u5149\uFF0C\u539F\u59CB\u6D53\u70C8\u7684\u6768\u4E43\u6587\u72EC\u5531\u66F2[\u7231\u4E0A\u4F60\u53EA\u662F\u6211\u7684\u9519]\u3001\u66FE\u8BA9\u65E0\u6570\u4EBA\u4F24\u611F\u843D\u6CEA\u7684\u300A\u6211\u7ED9\u7684\u7231\u300B\u3001\u60B2\u60C5\u7ECF\u5178\u300Asilence\u300B\u3001\u6768\u4E43\u658796\u5E74\u5728\u9B54\u5CA9\u6821\u56EDlive\u6F14\u5531\u4F1A\u4E0A\u654F\u611F\u70ED\u70C8\u7684\u521B\u4F5C\u300Afear\u300B\u3001\u5145\u6EE1\u53E4\u5178\u4F18\u96C5\u6C14\u8D28\u7684\u7535\u5F71[\u7B2C\u51E1\u5185\u65E9\u9910]\u7684\u4E3B\u9898\u66F2\u300Amonn river\u300B\u7B49\u597D\u6B4C\u3002\u901A\u8FC7\u5C1D\u8BD5\u5404\u79CD\u65B0\u9C9C\u5F62\u8C61\uFF0C\u642D\u914DMV\u8425\u9020\u7684\u6C1B\u56F4\uFF0C\u603B\u662F\u7ED9\u4EBA\u8033\u76EE\u4E00\u65B0\u7684\u65B0\u611F\u89C9\u3002'
	}, {
	    title: 'Silence',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：魔岩唱片',
	    href: '/tribe/info/01',
	    desc: '\u6240\u6709\u4EBA\u90FD\u80FD\u4ECE\u4F5C\u54C1\u4E2D\u542C\u5230\u80FD\u91CF\u548C\u9707\u64BC\u7684\u5448\u73B0\uFF0C\u77DB\u76FE\u4E0E\u59A5\u534F\uFF0C\u5931\u610F\u4E0E\u5FEB\u4E50\uFF0C\u5236\u4F5C\u4EBA\u6797\u709C\u54F2\u662F\u771F\u6B63\u8FDB\u5165\u5230\u6B4C\u624B\u7684\u7075\u9B42\uFF0C\u627E\u51FA\u6700\u771F\u5B9E\u7684\u77AC\u95F4\u518D\u71C3\u70E7\u91CA\u653E\uFF0C\u732E\u7ED9\u5927\u5BB6\uFF1B\u8FD9\u79CD\u5B8C\u5168\u8BA4\u771F\u4F5C\u97F3\u4E50\u4E0D\u54C8\u5566\u7684\u6001\u5EA6\uFF0C\u4E0D\u662F\u53EA\u5B57\u7247\u8BED\u80FD\u5F62\u5BB9\uFF0C\u4E5F\u5E76\u975E\u901F\u98DF\u6587\u5316\u6240\u80FD\u6BD4\u62DF\uFF0C\u8FD9\u79CD\u7CBE\u795E\u662F\u548C\u5168\u4E16\u754C\u7684\u97F3\u4E50\u4EBA\u540C\u6B65\uFF0C\u8FD9\u4E5F\u662F\u4ED6\u4EEC\u7684\u4F5C\u54C1\u548C\u53F0\u6E7E\u5927\u90E8\u4EFD\u622A\u7136\u4E0D\u540C\u7684\u539F\u56E0\u3002\u8FD9\u6837\u7684\u97F3\u4E50\u6B63\u662F\u53F0\u6E7E\u5E74\u8F7B\u4EBA\u76EE\u524D\u9700\u8981\u7684\uFF0C\u4E0E\u4E16\u754C\u5904\u5728\u540C\u6B65\u6F6E\u6D41\uFF0C\u6240\u6709\u5E74\u8F7B\u4EBA\u90FD\u80FD\u611F\u53D7\u7684\u70ED\u60C5\u548C\u529B\u91CF'
	}, {
	    title: '女爵',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：环球唱片',
	    href: '/tribe/info/01',
	    desc: '\n      \u5979\u5766\u767D\u4E86\u6211\u4EEC\u6240\u865A\u4F2A\u7684 \u5979\u5355\u7EAF\u4E86\u6211\u4EEC\u6240\u590D\u6742\u7684\n      \u4E94\u5E74\u4EE5\u6765\u2026\n      5\u5E74\u7684\u7B49\u5F85\uFF0C\u662F\u4E2A\u6F2B\u957F\u4E5F\u662F\u8017\u635F\u7684\u8FC7\u7A0B\u3002\n      \u770B\u5C3D\u4E50\u575B\u82AD\u6BD4\u5A03\u5A03\u7684\u751C\u7F8E\u9762\u5177\uFF0C\u300C\u6027\u683C\u300D\u8FD9\u4E24\u4E2A\u5B57\uFF0C\u4F3C\u4E4E\u5FEB\u8981\u6D88\u5931\uFF01\n      \u5979\u7684\u58F0\u97F3\uFF0C\u5979\u7684\u4E2A\u6027\uFF0C\u8C61\u5FB5\u8457\u65E0\u53EF\u53D6\u4EE3\u7684\u9AD8\u50B2\u3001\u72EC\u7279\u7684\u59FF\u6001\uFF0C\n      \u8FD9\u6837\u4E00\u80A1\u5145\u6EE1\u7075\u9B42\u7684\u97F3\u4E50\u3001\u6C89\u5BC2\u800C\u521A\u82CF\u9192\u7684\u771F\u58F0\u97F3\uFF0C\n      \u662F\u6211\u4EEC\u552F\u4E00\u76F8\u4FE1\u4E14\u671F\u5F85\u6768\u4E43\u6587\u7684\u7406\u7531\u3002'
	}, {
	    title: '第一张精选',
	    media: 'http://lorempixel.com/128/128/people/',
	    subTitle: '发行公司：滚石唱片',
	    href: '/tribe/info/01',
	    desc: '\n        \u51FA\u9053\u516D\u5E74\u6765\u53EA\u51FA\u8FC7\u4E09\u5F20\u4E13\u8F91\u7684\u6768\u4E43\u6587\uFF0C\u7B2C\u4E00\u6B21\u96C6\u5408\u4E09\u5F20\u4E13\u8F91\u7684\u7CBE\u534E\u6784\u6210\u4E86\u8FD9\u5F20\u5145\u6EE1\u4E2A\u6027\u7684\u7CBE\u9009\u8F91\u3002\u4E13\u8F91\u6536\u5F55\u5C1A\u672A\u53D1\u7247\u524D\u9996\u5148\u66DD\u5149\uFF0C\u539F\u59CB\u6D53\u70C8\u7684\u6768\u4E43\u6587\u72EC\u5531\u66F2[\u7231\u4E0A\u4F60\u53EA\u662F\u6211\u7684\u9519]\u3001\u66FE\u8BA9\u65E0\u6570\u4EBA\u4F24\u611F\u843D\u6CEA\u7684\u300A\u6211\u7ED9\u7684\u7231\u300B\u3001\u60B2\u60C5\u7ECF\u5178\u300Asilence\u300B\u3001\u6768\u4E43\u658796\u5E74\u5728\u9B54\u5CA9\u6821\u56EDlive\u6F14\u5531\u4F1A\u4E0A\u654F\u611F\u70ED\u70C8\u7684\u521B\u4F5C\u300Afear\u300B\u3001\u5145\u6EE1\u53E4\u5178\u4F18\u96C5\u6C14\u8D28\u7684\u7535\u5F71[\u7B2C\u51E1\u5185\u65E9\u9910]\u7684\u4E3B\u9898\u66F2\u300Amonn river\u300B\u7B49\u597D\u6B4C\u3002\u901A\u8FC7\u5C1D\u8BD5\u5404\u79CD\u65B0\u9C9C\u5F62\u8C61\uFF0C\u642D\u914DMV\u8425\u9020\u7684\u6C1B\u56F4\uFF0C\u603B\u662F\u7ED9\u4EBA\u8033\u76EE\u4E00\u65B0\u7684\u65B0\u611F\u89C9\u3002'
	}, {
	    title: 'Silence',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '发行公司：魔岩唱片',
	    href: '/tribe/info/01',
	    desc: '\u6240\u6709\u4EBA\u90FD\u80FD\u4ECE\u4F5C\u54C1\u4E2D\u542C\u5230\u80FD\u91CF\u548C\u9707\u64BC\u7684\u5448\u73B0\uFF0C\u77DB\u76FE\u4E0E\u59A5\u534F\uFF0C\u5931\u610F\u4E0E\u5FEB\u4E50\uFF0C\u5236\u4F5C\u4EBA\u6797\u709C\u54F2\u662F\u771F\u6B63\u8FDB\u5165\u5230\u6B4C\u624B\u7684\u7075\u9B42\uFF0C\u627E\u51FA\u6700\u771F\u5B9E\u7684\u77AC\u95F4\u518D\u71C3\u70E7\u91CA\u653E\uFF0C\u732E\u7ED9\u5927\u5BB6\uFF1B\u8FD9\u79CD\u5B8C\u5168\u8BA4\u771F\u4F5C\u97F3\u4E50\u4E0D\u54C8\u5566\u7684\u6001\u5EA6\uFF0C\u4E0D\u662F\u53EA\u5B57\u7247\u8BED\u80FD\u5F62\u5BB9\uFF0C\u4E5F\u5E76\u975E\u901F\u98DF\u6587\u5316\u6240\u80FD\u6BD4\u62DF\uFF0C\u8FD9\u79CD\u7CBE\u795E\u662F\u548C\u5168\u4E16\u754C\u7684\u97F3\u4E50\u4EBA\u540C\u6B65\uFF0C\u8FD9\u4E5F\u662F\u4ED6\u4EEC\u7684\u4F5C\u54C1\u548C\u53F0\u6E7E\u5927\u90E8\u4EFD\u622A\u7136\u4E0D\u540C\u7684\u539F\u56E0\u3002\u8FD9\u6837\u7684\u97F3\u4E50\u6B63\u662F\u53F0\u6E7E\u5E74\u8F7B\u4EBA\u76EE\u524D\u9700\u8981\u7684\uFF0C\u4E0E\u4E16\u754C\u5904\u5728\u540C\u6B65\u6F6E\u6D41\uFF0C\u6240\u6709\u5E74\u8F7B\u4EBA\u90FD\u80FD\u611F\u53D7\u7684\u70ED\u60C5\u548C\u529B\u91CF'
	}];

	exports.default = _react2.default.createClass({
	    displayName: 'Tribe',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, className: 'tribe' },
	                _react2.default.createElement(
	                    _amazeuiTouch.List,
	                    { className: 't-index-list' },
	                    albums.map(function (album, i) {
	                        return _react2.default.createElement(_amazeuiTouch.List.Item, _extends({}, album, {
	                            target: '_blank',
	                            media: _react2.default.createElement('img', { src: album.media }),
	                            key: i
	                        }));
	                    })
	                )
	            )
	        );
	    }
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var albums = {
	    title: '原画部落',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '123456',
	    desc: '一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介',
	    personHref: "/tribe/person",
	    albumHref: "/tribe/album/01"

	};
	var listName = ["原画CG部落规定", "原画硬件设备：手绘板的参数调整", "别停笔，一直画", "【重要通知】关于最近删帖状况解释"];

	var topicList = [{
	    username: "嗨粉",
	    media: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    userhref: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    topichref: "/tribe/topic/01",
	    time: "1小时前",
	    titname: "标题名称标题名称",
	    desc: "帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内",
	    say: "123",
	    zan: "123",
	    com: "123",
	    imgarr: ["http://s.amazeui.org/media/i/demos/bing-1.jpg", "http://s.amazeui.org/media/i/demos/bing-2.jpg", "http://s.amazeui.org/media/i/demos/bing-3.jpg"]
	}, {
	    username: "嗨粉",
	    media: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    time: "1小时前",
	    titname: "标题名称标题名称",
	    desc: "帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内",
	    say: "123",
	    zan: "123",
	    com: "123",
	    imgarr: ["http://s.amazeui.org/media/i/demos/bing-1.jpg", "http://s.amazeui.org/media/i/demos/bing-2.jpg", "http://s.amazeui.org/media/i/demos/bing-3.jpg"]
	}, {
	    username: "嗨粉",
	    media: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    time: "1小时前",
	    titname: "标题名称标题名称",
	    desc: "帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内",
	    say: "123",
	    zan: "123",
	    com: "123",
	    imgarr: ["http://s.amazeui.org/media/i/demos/bing-1.jpg", "http://s.amazeui.org/media/i/demos/bing-2.jpg", "http://s.amazeui.org/media/i/demos/bing-3.jpg"]
	}];
	var img = _react2.default.createElement('img', { className: 'home-tribe-media', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' });
	var tit = _react2.default.createElement(
	    'div',
	    { className: 'home-tribe-item' },
	    _react2.default.createElement(
	        'p',
	        { className: 'text-color-3 text-size-14' },
	        '\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89'
	    ),
	    _react2.default.createElement(
	        'p',
	        { className: 'text-color-4 text-size-13' },
	        '1\u5C0F\u65F6\u524D'
	    )
	);
	var btn = _react2.default.createElement(
	    'div',
	    { className: 'home-tribe-tag' },
	    '\u6D77\u8D3C\u738B\u90E8\u843D'
	);

	exports.default = _react2.default.createClass({
	    displayName: 'Tribeinfo',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, className: 'tribe' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'bgF tribe-info-user' },
	                    _react2.default.createElement(_amazeuiTouch.List.Item, {
	                        title: _react2.default.createElement(
	                            'div',
	                            { className: 'tribe-user-name' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'item-title' },
	                                albums.title
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'item-subtitle' },
	                                '\u65CF\u5458\uFF1A',
	                                albums.subTitle
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'item-desc padding-right' },
	                                albums.desc
	                            )
	                        ),
	                        media: _react2.default.createElement('img', { src: albums.media }),
	                        after: _react2.default.createElement(
	                            'button',
	                            { className: 'tribe-user-btn' },
	                            '\u52A0\u5165\u90E8\u843D'
	                        )
	                    }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'tirbe-info-tab' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: albums.personHref },
	                            '\u65CF\u5458'
	                        ),
	                        _react2.default.createElement('hr', null),
	                        _react2.default.createElement(
	                            'a',
	                            { href: albums.albumHref },
	                            '\u76F8\u518C'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { className: 'margin-v tribe-toTopList' },
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        listName.map(function (ln, i) {
	                            return _react2.default.createElement(
	                                'li',
	                                { className: 'icon-toTop', key: i },
	                                ln
	                            );
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'tribe-topic-list' },
	                    topicList.map(function (topic, i) {
	                        return _react2.default.createElement(
	                            'div',
	                            { className: 'border-d7d7d7 bgF margin-top-sm', key: i },
	                            _react2.default.createElement(
	                                _amazeuiTouch.Group,
	                                { noPadded: true, className: 'margin-v-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List,
	                                    null,
	                                    _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                        media: _react2.default.createElement(
	                                            'a',
	                                            { href: topic.userhref },
	                                            _react2.default.createElement('img', { className: 'home-tribe-media', width: '44', height: '44', src: topic.media })
	                                        ),
	                                        title: _react2.default.createElement(
	                                            'div',
	                                            { className: 'home-tribe-item' },
	                                            _react2.default.createElement(
	                                                'a',
	                                                { href: topic.userhref },
	                                                _react2.default.createElement(
	                                                    'p',
	                                                    { className: 'text-color-3 text-size-14' },
	                                                    topic.username
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'p',
	                                                { className: 'text-color-4 text-size-13' },
	                                                topic.time
	                                            )
	                                        )
	                                    }),
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: topic.topichref },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'padding-h margin-v-xs' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'text-size-15 text-color-3 font-weight' },
	                                                topic.titname
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'text-size-13 text-color-2 home-tribe-desc' },
	                                                topic.desc
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Grid,
	                                            { avg: 3 },
	                                            topic.imgarr.map(function (img, f) {
	                                                return _react2.default.createElement(
	                                                    _amazeuiTouch.Col,
	                                                    { className: 'padding-h padding-top-xs padding-bottom-0', key: f },
	                                                    _react2.default.createElement('img', { src: img })
	                                                );
	                                            })
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Grid,
	                                            { align: 'between' },
	                                            _react2.default.createElement(
	                                                _amazeuiTouch.Col,
	                                                { cols: 2, className: 'padding-h text-size-12 text-color-4' },
	                                                _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
	                                                topic.say
	                                            ),
	                                            _react2.default.createElement(
	                                                _amazeuiTouch.Col,
	                                                { cols: 2, className: 'padding-h text-size-12 text-color-4 text-right' },
	                                                _react2.default.createElement(
	                                                    _amazeuiTouch.Grid,
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        _amazeuiTouch.Col,
	                                                        null,
	                                                        _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
	                                                        topic.zan
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        _amazeuiTouch.Col,
	                                                        null,
	                                                        _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
	                                                        topic.com
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        );
	                    })
	                )
	            )
	        );
	    }
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var albumList = [{
	    img: "http://lorempixel.com/160/160/people/",
	    name: "相册名称",
	    href: "/tribe/album/info/01"
	}, {
	    img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    name: "相册2",
	    href: "/tribe/album/info/01"

	}, {
	    img: "http://lorempixel.com/128/128/people/",
	    name: "相册3",
	    href: "/tribe/album/info/01"
	}, {
	    img: "http://lorempixel.com/160/160/people/",
	    name: "相册4",
	    href: "/tribe/album/info/01"
	}, {
	    img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    name: "相册5",
	    href: "/tribe/album/info/01"
	}, {
	    img: "http://lorempixel.com/128/128/people/",
	    name: "相册6",
	    href: "/tribe/album/info/01"
	}, {
	    img: "http://lorempixel.com/160/160/people/",
	    name: "相册7",
	    href: "/tribe/album/info/01"
	}, {
	    img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    name: "相册8",
	    href: "/tribe/album/info/01"
	}, {
	    img: "http://lorempixel.com/128/128/people/",
	    name: "相册9",
	    href: "/tribe/album/info/01"
	}];

	exports.default = _react2.default.createClass({
	    displayName: 'TribeAlbum',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, className: 'tribe' },
	                _react2.default.createElement(
	                    _amazeuiTouch.Grid,
	                    { avg: 3, className: 'text-center tribe-album' },
	                    albumList.map(function (album, i) {
	                        return _react2.default.createElement(
	                            _amazeuiTouch.Col,
	                            { key: i },
	                            _react2.default.createElement(
	                                'a',
	                                { href: album.href },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'albumImg' },
	                                    _react2.default.createElement('img', { src: album.img, alt: '' })
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'tribe-albumName' },
	                                    album.name
	                                )
	                            )
	                        );
	                    })
	                )
	            )
	        );
	    }
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var albumList = {
	    "msg": "23",
	    "imgarr": [{
	        img: "http://lorempixel.com/160/160/people/",
	        href: "/tribe/album/img/01"
	    }, {
	        img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	        href: "/tribe/album/img/01"

	    }, {
	        img: "http://lorempixel.com/128/128/people/",
	        href: "/tribe/album/img/01"
	    }, {
	        img: "http://lorempixel.com/160/160/people/",
	        href: "/tribe/album/img/01"
	    }, {
	        img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	        href: "/tribe/album/img/01"
	    }, {
	        img: "http://lorempixel.com/128/128/people/",
	        href: "/tribe/album/img/01"
	    }, {
	        img: "http://lorempixel.com/160/160/people/",
	        href: "/tribe/album/img/01"
	    }, {
	        img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	        href: "/tribe/album/img/01"
	    }, {
	        img: "http://lorempixel.com/128/128/people/",
	        href: "/tribe/album/img/01"
	    }]
	};

	exports.default = _react2.default.createClass({
	    displayName: 'TribeAlbumInfo',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, fill: true, className: 'tribe' },
	                _react2.default.createElement(
	                    _amazeuiTouch.Grid,
	                    { avg: 3, className: 'text-center tribe-album' },
	                    albumList.imgarr.map(function (album, i) {
	                        return _react2.default.createElement(
	                            _amazeuiTouch.Col,
	                            { key: i },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'albumImg' },
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: album.href },
	                                    _react2.default.createElement('img', { src: album.img, alt: '' })
	                                )
	                            )
	                        );
	                    })
	                )
	            )
	        );
	    }
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var imgcom = {
	    "img": "http://lorempixel.com/160/160/people/"
	};

	exports.default = _react2.default.createClass({
	    displayName: 'TribeImgCom',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, fill: true, className: 'tribe' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'tribe-imgcom-img' },
	                    _react2.default.createElement('img', { src: imgcom.img, alt: '' })
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { noPadded: true, className: 'margin-v' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'padding-top require-badge' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-size-14' },
	                            _react2.default.createElement(_amazeuiTouch.Badge, null),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'padding-left-sm' },
	                                '\u70ED\u95E8\u8BC4\u8BBA'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            { className: 'comments' },
	                            _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                media: _react2.default.createElement('img', { className: 'comments-avatar', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' }),
	                                title: '\u5973\u7235',
	                                subTitle: '\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185',
	                                desc: _react2.default.createElement(
	                                    _amazeuiTouch.Grid,
	                                    { align: 'between' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-left padding-0' },
	                                        '10\u5206\u949F\u524D'
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-right' },
	                                        '2'
	                                    )
	                                )
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'padding-top require-badge border-none' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-size-14' },
	                            _react2.default.createElement(_amazeuiTouch.Badge, null),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'padding-left-sm' },
	                                '\u5168\u90E8\u8BC4\u8BBA\uFF0830\u6761\uFF09'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            { className: 'comments' },
	                            _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                media: _react2.default.createElement('img', { className: 'comments-avatar', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' }),
	                                title: '\u5973\u7235',
	                                subTitle: '\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185',
	                                desc: _react2.default.createElement(
	                                    _amazeuiTouch.Grid,
	                                    { align: 'between' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-left padding-0' },
	                                        '10\u5206\u949F\u524D'
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-right' },
	                                        '2'
	                                    )
	                                )
	                            }),
	                            _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                media: _react2.default.createElement('img', { className: 'comments-avatar', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' }),
	                                title: '\u5973\u7235',
	                                subTitle: '\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185',
	                                desc: _react2.default.createElement(
	                                    _amazeuiTouch.Grid,
	                                    { align: 'between' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-left padding-0' },
	                                        '10\u5206\u949F\u524D'
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-right' },
	                                        '2'
	                                    )
	                                )
	                            })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _Comments2 = __webpack_require__(30);

	var _Comments3 = _interopRequireDefault(_Comments2);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var albums = [{
	    title: '女爵',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '10分钟',
	    tribe: "海贼王",
	    userhref: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    tribehref: "/tribe/info/01",
	    topicTit: "标题名称标题名称",
	    topicDesc: "帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容",
	    topicImg: "http://lorempixel.com/128/128/people/"

	}];
	var hotCommentList = [{
	    media: 'http://s.amazeui.org/media/i/demos/bing-2.jpg', //头像地址
	    title: '女爵', //标题
	    subTitle: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内', //描述
	    time: '10分钟前', //时间
	    like: '2' //点赞人数
	}];
	var commentList = [{
	    media: 'http://s.amazeui.org/media/i/demos/bing-2.jpg', //头像地址
	    title: '女爵', //标题
	    subTitle: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内', //描述
	    time: '10分钟前', //时间
	    like: '2' //点赞人数
	}, {
	    media: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
	    title: '女爵',
	    subTitle: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内',
	    time: '10分钟前',
	    like: '2'
	}];

	exports.default = _react2.default.createClass({
	    displayName: 'TribeTopic',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, className: 'tribe tribe-topic' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'tribe-info-user bgF' },
	                    albums.map(function (album, i) {
	                        return _react2.default.createElement(_amazeuiTouch.List.Item, {
	                            title: _react2.default.createElement(
	                                'div',
	                                { className: 'tribe-user-name' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'item-title' },
	                                    album.title
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'item-subtitle' },
	                                    album.subTitle
	                                )
	                            ),
	                            target: '_blank',
	                            media: _react2.default.createElement('img', { src: album.media }),
	                            after: _react2.default.createElement(
	                                'a',
	                                { href: album.tribehref, className: 'tribe-tribe-btn' },
	                                album.tribe,
	                                '\u90E8\u843D'
	                            )
	                            //href={i === 0 ? null : album.href}
	                            , key: i
	                        });
	                    })
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { className: 'topic-box' },
	                    _react2.default.createElement(
	                        'h1',
	                        { className: 'topic-title' },
	                        '\u6807\u9898\u540D\u79F0\u6807\u9898\u540D\u79F0\u6807\u9898'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'topic-p' },
	                        '\u300A\u5B88\u671B\u5148\u950B\u300B\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6\u52A8\u753B\u7CFB\u5217\u6700\u65B0\u4E00\u96C6'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'topic-img' },
	                        _react2.default.createElement('img', { src: 'http://lorempixel.com/160/160/people/', alt: '' })
	                    )
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { noPadded: true, className: 'margin-v' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'padding-top require-badge' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-size-14' },
	                            _react2.default.createElement(_amazeuiTouch.Badge, null),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'padding-left-sm' },
	                                '\u70ED\u95E8\u8BC4\u8BBA'
	                            )
	                        ),
	                        _react2.default.createElement(_Comments3.default, { commentList: hotCommentList })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'padding-top require-badge border-none' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-size-14' },
	                            _react2.default.createElement(_amazeuiTouch.Badge, null),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'padding-left-sm' },
	                                '\u5168\u90E8\u8BC4\u8BBA\uFF0830\u6761\uFF09'
	                            )
	                        ),
	                        _react2.default.createElement(_Comments3.default, { commentList: commentList })
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'TribePerson',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(_Header3.default, null),
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, fill: true, className: 'tribe' },
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { noPadded: true, className: 'margin-v' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'padding-top require-badge' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-size-14' },
	                            _react2.default.createElement(_amazeuiTouch.Badge, null),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'padding-left-sm' },
	                                '\u70ED\u95E8\u8BC4\u8BBA'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            { className: 'comments' },
	                            _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                media: _react2.default.createElement('img', { className: 'comments-avatar', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' }),
	                                title: '\u5973\u7235',
	                                subTitle: '\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185',
	                                desc: _react2.default.createElement(
	                                    _amazeuiTouch.Grid,
	                                    { align: 'between' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-left padding-0' },
	                                        '10\u5206\u949F\u524D'
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-right' },
	                                        '2'
	                                    )
	                                )
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'padding-top require-badge border-none' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-size-14' },
	                            _react2.default.createElement(_amazeuiTouch.Badge, null),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'padding-left-sm' },
	                                '\u5168\u90E8\u8BC4\u8BBA\uFF0830\u6761\uFF09'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            { className: 'comments' },
	                            _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                media: _react2.default.createElement('img', { className: 'comments-avatar', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' }),
	                                title: '\u5973\u7235',
	                                subTitle: '\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185',
	                                desc: _react2.default.createElement(
	                                    _amazeuiTouch.Grid,
	                                    { align: 'between' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-left padding-0' },
	                                        '10\u5206\u949F\u524D'
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-right' },
	                                        '2'
	                                    )
	                                )
	                            }),
	                            _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                media: _react2.default.createElement('img', { className: 'comments-avatar', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' }),
	                                title: '\u5973\u7235',
	                                subTitle: '\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185',
	                                desc: _react2.default.createElement(
	                                    _amazeuiTouch.Grid,
	                                    { align: 'between' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-left padding-0' },
	                                        '10\u5206\u949F\u524D'
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Col,
	                                        { cols: 2, className: 'text-right' },
	                                        '2'
	                                    )
	                                )
	                            })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ }
/******/ ]);
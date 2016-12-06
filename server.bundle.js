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

	var _httpProxyMiddleware = __webpack_require__(47);

	var _httpProxyMiddleware2 = _interopRequireDefault(_httpProxyMiddleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use((0, _compression2.default)());

	// serve our static stuff like index.css
	app.use(_express2.default.static(_path2.default.join(__dirname, 'build'), { index: false }));
	app.use('/app', (0, _httpProxyMiddleware2.default)({ target: 'http://www.vmaking.com', changeOrigin: true }));
	app.use('/code', (0, _httpProxyMiddleware2.default)({ target: 'http://www.vmaking.com', changeOrigin: true }));

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

	var _Agreement = __webpack_require__(18);

	var _Agreement2 = _interopRequireDefault(_Agreement);

	var _Login = __webpack_require__(19);

	var _Login2 = _interopRequireDefault(_Login);

	var _ForgetPwd = __webpack_require__(22);

	var _ForgetPwd2 = _interopRequireDefault(_ForgetPwd);

	var _User = __webpack_require__(23);

	var _User2 = _interopRequireDefault(_User);

	var _UserInfo = __webpack_require__(24);

	var _UserInfo2 = _interopRequireDefault(_UserInfo);

	var _UserServer = __webpack_require__(25);

	var _UserServer2 = _interopRequireDefault(_UserServer);

	var _UserRequire = __webpack_require__(27);

	var _UserRequire2 = _interopRequireDefault(_UserRequire);

	var _Home = __webpack_require__(29);

	var _Home2 = _interopRequireDefault(_Home);

	var _Server = __webpack_require__(34);

	var _Server2 = _interopRequireDefault(_Server);

	var _ServerInfo = __webpack_require__(35);

	var _ServerInfo2 = _interopRequireDefault(_ServerInfo);

	var _Require = __webpack_require__(36);

	var _Require2 = _interopRequireDefault(_Require);

	var _RequireInfo = __webpack_require__(37);

	var _RequireInfo2 = _interopRequireDefault(_RequireInfo);

	var _Search = __webpack_require__(39);

	var _Search2 = _interopRequireDefault(_Search);

	var _Tribe = __webpack_require__(40);

	var _Tribe2 = _interopRequireDefault(_Tribe);

	var _Tribeinfo = __webpack_require__(41);

	var _Tribeinfo2 = _interopRequireDefault(_Tribeinfo);

	var _TribeAlbum = __webpack_require__(42);

	var _TribeAlbum2 = _interopRequireDefault(_TribeAlbum);

	var _TribeAlbumInfo = __webpack_require__(43);

	var _TribeAlbumInfo2 = _interopRequireDefault(_TribeAlbumInfo);

	var _TribeImgCom = __webpack_require__(44);

	var _TribeImgCom2 = _interopRequireDefault(_TribeImgCom);

	var _TribeTopic = __webpack_require__(45);

	var _TribeTopic2 = _interopRequireDefault(_TribeTopic);

	var _TribePerson = __webpack_require__(46);

	var _TribePerson2 = _interopRequireDefault(_TribePerson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//search  module


	//require  module


	//server  module


	//ForgetPwd module
	module.exports = _react2.default.createElement(
	            _reactRouter.Router,
	            null,
	            _react2.default.createElement(
	                        _reactRouter.Route,
	                        { path: '/', component: _App2.default },
	                        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/agreement', component: _Agreement2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/register', component: _Register2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/forgetpwd', component: _ForgetPwd2.default }),
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
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/topic/:topicId', component: _TribeTopic2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/person', component: _TribePerson2.default })
	            )
	);

	//tribe  module


	//home  module


	//user  module


	//login  module


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

	var _jquery = __webpack_require__(13);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _RegisterActions = __webpack_require__(14);

	var _RegisterActions2 = _interopRequireDefault(_RegisterActions);

	var _RegisterStore = __webpack_require__(17);

	var _RegisterStore2 = _interopRequireDefault(_RegisterStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'Register',

	    getInitialState: function getInitialState() {
	        this.state = _RegisterStore2.default.getState();
	        return {
	            'passwordType': 'password',
	            'passwordIconClass': 'icon-pwdHid',
	            'btnCode': '点击获取验证码',
	            'btnDisabled': ''
	        };
	    },

	    //密码隐藏显示
	    showPassword: function showPassword() {
	        if (this.state.passwordType == 'password') {
	            this.setState({
	                'passwordType': 'text',
	                'passwordIconClass': 'icon-pwdShow'
	            });
	        } else {
	            this.setState({
	                'passwordType': 'password',
	                'passwordIconClass': 'icon-pwdHid'
	            });
	        }
	    },

	    //提交注册表单验证
	    subRegister: function subRegister() {
	        var mobileReg = /^[1][3-9][0-9]{9}$/;
	        if (!this.state.mobile) {
	            alert('请输入手机号！');
	        } else if (!mobileReg.test(this.state.mobile)) {
	            alert('请输入正确的手机号码！');
	        } else if (!this.state.password) {
	            alert('请输入密码！');
	        } else if (this.state.password.length < 6 || this.state.password.length > 16) {
	            alert('请设置6-16位密码！');
	        } else if (!this.state.nickName) {
	            alert('请输入昵称！');
	        } else if (!this.state.code) {
	            alert('请输入验证码！');
	        } else if (!this.state.agreement) {
	            alert('请阅读并接受众创部落的用户协议！');

	            //校验验证码
	        } else if (!_RegisterActions2.default.checkCode({ mobile: this.state.mobile, code: this.state.code })) {
	            alert('验证码不成功');

	            //用户注册
	        } else {
	            _RegisterActions2.default.register({
	                mobile: this.state.mobile,
	                password: this.state.password,
	                nickName: this.state.nickName,
	                category: 1
	            });
	        }
	    },

	    //监听手机号码，更改state
	    changeMoile: function changeMoile(event) {
	        this.setState({ mobile: event.target.value });
	    },

	    //监听密码，更改state
	    changePassword: function changePassword(event) {
	        this.setState({ password: event.target.value });
	    },

	    //监听昵称，更改state
	    changeNickName: function changeNickName(event) {
	        this.setState({ nickName: event.target.value });
	    },

	    //监听验证码，更改state
	    changeCode: function changeCode(event) {
	        this.setState({ code: event.target.value });
	    },

	    //监听用户协议选中状态，更改state
	    changeAgreement: function changeAgreement(event) {
	        this.setState({ agreement: event.target.checked });
	    },

	    //获取验证码
	    sendCode: function sendCode() {
	        var mobileReg = /^[1][3-9][0-9]{9}$/;
	        if (!this.state.mobile) {
	            alert('请输入手机号！');
	        } else if (!mobileReg.test(this.state.mobile)) {
	            alert('请输入正确的手机号码！');
	        } else {
	            //发送验证码
	            _RegisterActions2.default.getCode(this.state.mobile);
	            var timeer = 60;
	            this.setState({ btnCode: '重新发送' + timeer });
	            this.setState({ btnDisabled: 'disabled' });
	            if (timeer > 0) {
	                var _this = this;
	                var codeTimeer = setInterval(function () {
	                    //console.info(_this.state.btnCode);
	                    timeer--;
	                    if (timeer == 0 || timeer < 0) {
	                        _this.setState({ btnCode: '点击获取验证码' });
	                        _this.setState({ btnDisabled: '' });
	                        clearInterval(codeTimeer);
	                    } else {
	                        _this.setState({ btnCode: '重新发送' + timeer });
	                    }
	                }, 1000);
	            }
	        }
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
	                    _amazeuiTouch.Group,
	                    { className: 'regLog-logo' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'regLog-logo-box' },
	                        _react2.default.createElement('div', { className: 'regLog-logo-img' })
	                    )
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { className: 'bgNone' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-register' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.List.Item,
	                                { key: '1', className: 'margin-bottom', media: _react2.default.createElement(_amazeuiTouch.Icon, { className: 'icon-phone', name: '' }), nested: 'input' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { ref: 'mobile', type: 'number', placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7', onChange: this.changeMoile })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.List.Item,
	                                { key: '2', className: 'margin-bottom', media: _react2.default.createElement(_amazeuiTouch.Icon, { className: 'icon-pwd', name: '' }), nested: 'input' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { ref: 'password', type: this.state.passwordType, className: 'password', placeholder: '\u8BF7\u8BBE\u7F6E6-16\u4F4D\u5BC6\u7801', btnAfter: _react2.default.createElement(_amazeuiTouch.Icon, { className: this.state.passwordIconClass, name: '', onClick: this.showPassword }), onChange: this.changePassword })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(
	                                _amazeuiTouch.List.Item,
	                                { key: '3', className: 'margin-bottom', media: _react2.default.createElement(_amazeuiTouch.Icon, { className: 'icon-nickname', name: '' }), nested: 'input' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { ref: 'nickName', type: 'text', placeholder: '\u8BF7\u8BBE\u7F6E\u60A8\u7684\u7528\u6237\u6635\u79F0', onChange: this.changeNickName })
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
	                                    _react2.default.createElement(_amazeuiTouch.Field, { ref: 'code', className: 'auth-code', type: 'number', placeholder: '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801', onChange: this.changeCode })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { className: 'padding-0' },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { disabled: this.state.btnDisabled, ref: 'codeBtn', className: 'btn-white margin-0 margin-left-xs text-size-13', onClick: this.sendCode },
	                                        this.state.btnCode
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _amazeuiTouch.Grid,
	                                null,
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    { shrink: true, className: 'padding-h-0' },
	                                    _react2.default.createElement('input', { ref: 'agreement', type: 'checkbox', className: 'input-terms', onChange: this.changeAgreement })
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.Col,
	                                    null,
	                                    '\u6211\u5DF2\u9605\u8BFB\u5E76\u63A5\u53D7\u4F17\u521B\u90E8\u843D\u7684 ',
	                                    _react2.default.createElement(
	                                        'a',
	                                        { className: 'text-color-6', href: '/agreement', target: '_blank' },
	                                        '\u7528\u6237\u534F\u8BAE'
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Button,
	                            { className: 'btn-yellow margin-top-xl padding-v', onClick: this.subRegister },
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
	        key: 'changeSearch',
	        value: function changeSearch(event) {
	            this.setState({
	                searchVal: event.target.value
	            });
	        }
	    }, {
	        key: 'cleanSearch',
	        value: function cleanSearch() {
	            this.setState({
	                searchVal: ''
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
	                        { className: 'bgNone header-search' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Col,
	                            { cols: 5, className: 'padding-0' },
	                            _react2.default.createElement(
	                                'div',
	                                { action: '/search' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List,
	                                    { className: 'margin-0' },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.List.Item,
	                                        { key: '1', media: _react2.default.createElement(_amazeuiTouch.Icon, { className: 'header-icon-search', name: '' }), nested: 'input' },
	                                        _react2.default.createElement(_amazeuiTouch.Field, { ref: 'search', type: 'search', name: 'search', onChange: this.changeSearch.bind(this), value: this.state.searchVal, className: 'margin-0 padding-v-xs text-size-14', placeholder: '', btnAfter: _react2.default.createElement(_amazeuiTouch.Icon, { className: 'header-icon-close', name: '', onClick: this.cleanSearch.bind(this) }) })
	                                    )
	                                )
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
	                                { className: 'header-login bgNone margin-0 padding-v' },
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
	                                { className: 'header-login bgNone margin-0 hidden' },
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
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(15);

	var _alt2 = _interopRequireDefault(_alt);

	var _jquery = __webpack_require__(13);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterActions = function () {
	    function RegisterActions() {
	        _classCallCheck(this, RegisterActions);

	        this.generateActions('getCodeSuccess', 'getCodeFail', 'checkCodeSuccess', 'checkCodeFail', 'registerSuccess', 'registerFail');
	    }

	    //发送验证码


	    _createClass(RegisterActions, [{
	        key: 'getCode',
	        value: function getCode(mobile) {
	            var _this = this;

	            _jquery2.default.ajax({
	                type: 'Get',
	                url: '/code/send',
	                data: { mobile: mobile }
	            }).done(function (data) {
	                _this.getCodeSuccess(data);
	            }).fail(function (jqXhr) {
	                _this.getCodeFail(jqXhr);
	            });
	        }

	        //验证验证码

	    }, {
	        key: 'checkCode',
	        value: function checkCode(data) {
	            var _this2 = this;

	            _jquery2.default.ajax({
	                type: 'POST',
	                url: '/code/check',
	                data: data
	            }).done(function (data) {
	                _this2.checkCodeSuccess(data);
	            }).fail(function (jqXhr) {
	                _this2.checkCodeFail(jqXhr);
	            });
	        }

	        //用户注册

	    }, {
	        key: 'register',
	        value: function register(data) {
	            var _this3 = this;

	            _jquery2.default.ajax({
	                type: 'POST',
	                dataType: 'json',
	                contentType: 'application/json; charset=utf-8',
	                url: '/app/user/register',
	                data: JSON.stringify(data)
	            }).done(function (data) {
	                _this3.registerSuccess(data);
	            }).fail(function (jqXhr) {
	                _this3.registerFail(jqXhr);
	            });
	        }
	    }]);

	    return RegisterActions;
	}();

	exports.default = _alt2.default.createActions(RegisterActions);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alt = __webpack_require__(16);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _alt2.default();

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("alt");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(15);

	var _alt2 = _interopRequireDefault(_alt);

	var _RegisterActions = __webpack_require__(14);

	var _RegisterActions2 = _interopRequireDefault(_RegisterActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterStore = function () {
	    function RegisterStore() {
	        _classCallCheck(this, RegisterStore);

	        this.bindActions(_RegisterActions2.default);
	    }

	    //发送验证码--成功


	    _createClass(RegisterStore, [{
	        key: 'onGetCodeSuccess',
	        value: function onGetCodeSuccess(data) {
	            console.info('onGetCodeSuccess', data);
	            this.code = data.code;
	        }

	        //发送验证码--失败

	    }, {
	        key: 'onGetCodeFail',
	        value: function onGetCodeFail(data) {
	            console.info('onGetCodeFail', data);
	            this.code = data.data;
	        }

	        //验证验证码--成功

	    }, {
	        key: 'onCheckCodeSuccess',
	        value: function onCheckCodeSuccess(data) {
	            console.info('onCheckCodeSuccess', data);
	            if (data.status) {
	                return true;
	            } else {
	                return false;
	            }
	        }

	        //验证验证码--失败

	    }, {
	        key: 'onCheckCodeFail',
	        value: function onCheckCodeFail(data) {
	            console.info('onCheckCodeFail', data);
	            return false;
	        }

	        //用户注册--成功

	    }, {
	        key: 'onRegisterSuccess',
	        value: function onRegisterSuccess(data) {
	            console.info('onRegisterSuccess', data);
	            this.code = data.code;
	        }

	        //用户注册--失败

	    }, {
	        key: 'onRegisterFail',
	        value: function onRegisterFail(data) {
	            console.info('onRegisterFail', data);
	            this.code = data.data;
	        }
	    }]);

	    return RegisterStore;
	}();

	exports.default = _alt2.default.createStore(RegisterStore, 'RegisterStore');

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'Agreement',
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
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'text-center' },
	                        '\u300A\u7528\u6237\u534F\u8BAE\u300B'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'about-article padding' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u7248\u6743\u58F0\u660E'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u5317\u4EAC\u7248\u6620\u79D1\u6280\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u7248\u6620\u79D1\u6280\u201D\u6216\u8005\u201C\u672C\u516C\u53F8\u201D\uFF09\u5BF9\u5176\u5F00\u53D1\u53CA\u8FD0\u8425\u7684\u6216\u4E0E\u5408\u4F5C\u516C\u53F8\u5171\u540C\u5F00\u53D1\u53CA\u8FD0\u8425\u7684\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4EA7\u54C1\u6216\u670D\u52A1\u7684\u5168\u90E8\u5185\u5BB9\u62E5\u6709\u7248\u6743\u7B49\u77E5\u8BC6\u4EA7\u6743\uFF0C\u53D7\u6CD5\u5F8B\u4FDD\u62A4\u3002\u672A\u7ECF\u672C\u516C\u53F8\u8BB8\u53EF\uFF0C\u4EFB\u4F55\u4EBA\u4E0D\u5F97\u64C5\u81EA\u4F7F\u7528\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u590D\u5236\u3001\u4F20\u64AD\u3001\u5C55\u793A\u3001\u955C\u50CF\u3001\u4E0A\u8F7D\u3001\u4E0B\u8F7D\uFF09\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u516C\u53F8\u7684\u6807\u8BC6\u3001LOGO\u7B49\u6587\u5B57\u3001\u56FE\u5F62\u53CA\u5176\u7EC4\u5408\uFF0C\u6E90\u4EE3\u7801\u4EE5\u53CA\u6240\u6709\u9875\u9762\u7684\u7248\u5F0F\u8BBE\u8BA1\u7B49\u7248\u6743\u5C5E\u4E8E\u672C\u516C\u53F8\u6240\u6709\uFF0C\u672A\u7ECF\u6388\u6743\uFF0C\u4E0D\u5F97\u7528\u4E8E\u672C\u7F51\u7AD9\u4E4B\u5916\u7684\u4EFB\u4F55\u7AD9\u70B9\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u516C\u53F8\u6240\u8FD0\u8425\u7684\u4F17\u521B\u90E8\u843D\u7F51\u6CE8\u518C\u7528\u6237\u5728\u4F17\u521B\u90E8\u843D\u7F51\u7AD9\u6240\u53D1\u5E03\u5C55\u793A\u7684\u201C\u5C55\u793A\u4F5C\u54C1\u201D\u53CA\u201C\u6388\u6743\u4F5C\u54C1\u201D\uFF0C\u7248\u6743\u5F52\u539F\u8457\u4F5C\u6743\u4EBA\u6240\u6709\u3002\u5728\u672C\u7F51\u7AD9\u516C\u5F00\u4E0A\u4F20\u3001\u53D1\u5E03\u3001\u5206\u4EAB\u5185\u5BB9\u65F6\uFF0C\u8BF7\u4E25\u683C\u9075\u5B88\u300A\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u8457\u4F5C\u6743\u6CD5\u300B\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u7F51\u7AD9\u7684\u5185\u5BB9\u4E3B\u8981\u6765\u81EA\u6CE8\u518C\u7528\u6237\u6240\u4E0A\u4F20\u7684\u5185\u5BB9\u3002\u60A8\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u4E0A\u4F20\u3001\u53D1\u5E03\u3001\u5206\u4EAB\u4E8E\u672C\u7F51\u7AD9\u7684\u4EFB\u4F55\u4FE1\u606F\u4E0E\u5185\u5BB9\uFF0C\u5747\u4E3A\u60A8\u7684\u4E2A\u4EBA\u884C\u4E3A\uFF0C\u5982\u679C\u4EFB\u4F55\u7B2C\u4E09\u65B9\u5BF9\u8BE5\u5185\u5BB9\u63D0\u51FA\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7248\u6743\u5728\u5185\u7684\u5F02\u8BAE\uFF0C\u672C\u7F51\u7AD9\u5E94\u786E\u5B9E\u7684\u6743\u5229\u4EBA\u8BF7\u6C42\uFF0C\u5C06\u8BE5\u5185\u5BB9\u5220\u9664\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u4F17\u521B\u90E8\u843D\u7F51\u6CE8\u518C\u7528\u6237\u6388\u6743\u672C\u7F51\u7AD9\u53EF\u4EE5\u5728\u672C\u7F51\u7AD9\u8303\u56F4\u5185\uFF0C\u4EE5\u53CA\u672C\u7F51\u7AD9\u8FDB\u884C\u76F8\u5173\u7684\u5E02\u573A\u516C\u5173\u63A8\u5E7F\u65F6\u5F15\u7528\u3001\u53D1\u5E03\u3001\u8F6C\u8F7D\u60A8\u5728\u4F17\u521B\u90E8\u843D\u7F51\u7AD9\u6240\u53D1\u5E03\u5C55\u793A\u7684\u4F5C\u54C1\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u5728\u672A\u83B7\u5F97\u8457\u4F5C\u6743\u4EBA\u6388\u6743\u8BB8\u53EF\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5F97\u5C06\u8457\u4F5C\u6743\u4EBA\u7684\u4F5C\u54C1\u5168\u90E8\u6216\u90E8\u5206\u53D1\u8868\u53CA\u5C55\u793A\u4E8E\u4F17\u521B\u90E8\u843D\u7F51\u3002'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'about-article padding' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u670D\u52A1\u6761\u6B3E'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u4F17\u521B\u90E8\u843D\u7F51\u7AD9vmaking.com\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u6211\u4EEC\u201D\u6216\u8005\u201C\u672C\u7F51\u7AD9\u201D\uFF09\u7684\u7F51\u7EDC\u8FD0\u8425\u670D\u52A1\u4E3B\u4F53\u4E3A\u5317\u4EAC\u7248\u6620\u79D1\u6280\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u7248\u6620\u79D1\u6280\u201D\u6216\u8005\u201C\u672C\u516C\u53F8\u201D\uFF09\uFF0C\u672C\u7F51\u7AD9\u7684\u6240\u6709\u6743\u5F52\u5C5E\u4E8E\u5317\u4EAC\u7248\u6620\u79D1\u6280\u6709\u9650\u516C\u53F8\u53CA\u5176\u8BB8\u53EF\u4EBA\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u8BF7\u60A8\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u5168\u90E8\u5185\u5BB9\u3002\u5982\u679C\u60A8\u4E0D\u540C\u610F\u672C\u7F51\u7AD9\u670D\u52A1\u6761\u6B3E\u4E2D\u7684\u4EFB\u610F\u5185\u5BB9\uFF0C\u8BF7\u52FF\u6CE8\u518C\u6216\u4F7F\u7528\u672C\u7F51\u7AD9\u6240\u63D0\u4F9B\u7684\u670D\u52A1\u3002\u5728\u60A8\u4F7F\u7528\u67D0\u7279\u5B9A\u4EA7\u54C1\u6216\u8005\u670D\u52A1\u7684\u60C5\u51B5\u4E0B\uFF0C\u60A8\u9700\u8981\u540C\u65F6\u9075\u5B88\u5E76\u63A5\u53D7\u76F8\u5173\u9002\u7528\u4E8E\u90A3\u4E9B\u4EA7\u54C1\u548C\u670D\u52A1\u7684\u6761\u6B3E\u6216\u8005\u534F\u8BAE\uFF08\u4EE5\u4E0B\u7EDF\u79F0\u4E3A\u201C\u5176\u4ED6\u6761\u6B3E\u201D\uFF09\u3002\u4F8B\u5982\uFF0C\u5F53\u60A8\u901A\u8FC7\u672C\u7F51\u7AD9\u8FDB\u884C\u7248\u6743\u7D20\u6750\u9500\u552E\u5408\u4F5C\u65F6\uFF0C\u9700\u8981\u540C\u65F6\u9075\u5B88\u300A\u4F17\u521B\u90E8\u843D\u7F51\u7AD9\u7248\u6743\u7D20\u6750\u9500\u552E\u5408\u4F5C\u534F\u8BAE\u300B\uFF1B\u5F53\u60A8\u901A\u8FC7\u672C\u7F51\u7AD9\u8D2D\u4E70\u672C\u7F51\u7AD9\u6CE8\u518C\u7528\u6237\u6240\u63D0\u4F9B\u7684\u7248\u6743\u7D20\u6750\u65F6\uFF0C\u60A8\u9700\u8981\u540C\u65F6\u9075\u5B88\u300A\u7248\u6743\u7D20\u6750\u6807\u51C6\u6388\u6743\u534F\u8BAE\u300B\u6216\u8005\u300A\u7248\u6743\u7D20\u6750\u6269\u5C55\u6388\u6743\u534F\u8BAE\u300B\u3002\u5982\u679C\u4EE5\u4E0B\u670D\u52A1\u6761\u6B3E\u4E0E\u201C\u5176\u4ED6\u6761\u6B3E\u201D\u6709\u4E0D\u4E00\u81F4\u4E4B\u5904\uFF0C\u5219\u4EE5\u201C\u5176\u4ED6\u6761\u6B3E\u201D\u4E3A\u51C6\u3002\u5982\u679C\u60A8\u5DF2\u7ECF\u901A\u8FC7\u8FDB\u5165\u6CE8\u518C\u7A0B\u5E8F\u5E76\u52FE\u9009\u201C\u6211\u5DF2\u9605\u8BFB\u5E76\u63A5\u53D7\u4F17\u521B\u90E8\u843D\u7F51\u7AD9\u7F51\u7AD9\u670D\u52A1\u6761\u6B3E\u201D\u5728\u672C\u7F51\u7AD9\u8D2D\u4E70\u4E0A\u5546\u54C1\u548C\u4F7F\u7528\u6240\u63D0\u4F9B\u7684\u670D\u52A1\uFF0C\u5373\u8868\u793A\u60A8\u4E0E\u672C\u7F51\u7AD9\u5DF2\u8FBE\u6210\u534F\u8BAE\uFF0C\u81EA\u613F\u540C\u610F\u5E76\u63A5\u53D7\u672C\u670D\u52A1\u6761\u6B3E\u548C\u6240\u6709\u76F8\u5173\u7684\u6761\u6B3E\u3001\u653F\u7B56\u548C\u534F\u8BAE\u7684\u7EA6\u675F\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u4E00 : \u6761\u6B3E\u7684\u4FEE\u6539'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u7F51\u7AD9\u6709\u6743\u4FEE\u6539\u670D\u52A1\u6761\u6B3E\u4EE5\u53CA\u5176\u4ED6\u6761\u6B3E\uFF0C\u672C\u7F51\u7AD9\u4F1A\u5C3D\u53EF\u80FD\u63D0\u524D\u5728\u672C\u7F51\u7AD9\u91CD\u8981\u9875\u9762\u4E0A\u8FDB\u884C\u516C\u544A\u901A\u77E5\u7528\u6237\u4FEE\u6539\u5185\u5BB9\u3002\u5982\u679C\u60A8\u4E0D\u540C\u610F\u670D\u52A1\u6761\u6B3E\u6240\u4FEE\u6539\u7684\u5185\u5BB9\uFF0C\u60A8\u53EF\u4EE5\u4E3B\u52A8\u8054\u7CFB\u672C\u7F51\u7AD9\u53D6\u6D88\u7F51\u7EDC\u670D\u52A1\u3002\u5982\u679C\u60A8\u7EE7\u7EED\u4F7F\u7528\u672C\u7F51\u7AD9\u6240\u63D0\u4F9B\u7684\u670D\u52A1\uFF0C\u5219\u89C6\u4E3A\u60A8\u63A5\u6536\u670D\u52A1\u6761\u6B3E\u7684\u53D8\u52A8\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u4E8C : \u670D\u52A1\u5185\u5BB9'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u7F51\u7AD9\u6240\u63D0\u4F9B\u7684\u5177\u4F53\u670D\u52A1\u4E0E\u5185\u5BB9\u7531\u672C\u7F51\u7AD9\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u63D0\u4F9B\uFF0C\u4F8B\u5982\u901A\u8FC7\u5728\u7EBF\u3001\u7535\u5B50\u90AE\u4EF6\u6216\u8005\u624B\u673A\u8FDB\u884C\u5185\u5BB9\u4E0A\u4F20\u3001\u5171\u4EAB\u6216\u9500\u552E\uFF0C\u901A\u8FC7\u5728\u7EBF\u6216\u8005\u624B\u673A\u8FDB\u884C\u5185\u5BB9\u641C\u7D22\u3001\u8D2D\u4E70\u3002\u60A8\u660E\u786E\u77E5\u6653\uFF0C\u672C\u7F51\u7AD9\u4EC5\u63D0\u4F9B\u76F8\u5173\u7684\u7F51\u7EDC\u670D\u52A1\uFF0C\u9664\u6B64\u4E4B\u5916\u4E0E\u76F8\u5173\u7F51\u7EDC\u670D\u52A1\u6709\u5173\u7684\u8BBE\u5907\uFF08\u5982\u4E2A\u4EBA\u7535\u8111\u3001\u624B\u673A\u3001\u4EE5\u53CA\u5176\u4ED6\u4E0E\u63A5\u5165\u4E92\u8054\u7F51\u6216\u79FB\u52A8\u7269\u8054\u7F51\u6709\u5173\u7684\u88C5\u7F6E\uFF09\u53CA\u6240\u9700\u7684\u8D39\u7528\uFF08\u5982\u4E3A\u63A5\u5165\u4E92\u8054\u7F51\u800C\u652F\u4ED8\u7684\u4E0A\u7F51\u8D39\u4EE5\u53CA\u7535\u8BDD\u8D39\u3001\u4E3A\u4F7F\u7528\u79FB\u52A8\u4E92\u8054\u7F51\u800C\u652F\u4ED8\u7684\u624B\u673A\u8BDD\u8D39\uFF09\u5747\u5E94\u7531\u60A8\u81EA\u884C\u627F\u62C5\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u4E09 : \u670D\u52A1\u7684\u53D8\u66F4\u3001\u4E2D\u65AD\u6216\u8005\u7EC8\u6B62'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u9274\u4E8E\u7F51\u7EDC\u670D\u52A1\u7684\u7279\u6B8A\u6027\uFF0C\u60A8\u540C\u610F\u672C\u7F51\u7AD9\u6709\u6743\u968F\u65F6\u53D8\u66F4\u3001\u4E2D\u65AD\u6216\u7EC8\u6B62\u90E8\u5206\u6216\u5168\u90E8\u7684\u7F51\u7EDC\u670D\u52A1\u3002\u5982\u53D8\u66F4\u3001\u4E2D\u65AD\u6216\u7EC8\u6B62\u7F51\u7EDC\u670D\u52A1\uFF0C\u672C\u7F51\u7AD9\u4F1A\u5C3D\u53EF\u80FD\u63D0\u524D\u8FDB\u884C\u516C\u544A\u901A\u77E5\u7528\u6237\uFF0C\u65E0\u9700\u5BF9\u4EFB\u4F55\u7528\u6237\u6216\u4EFB\u4F55\u7B2C\u4E09\u65B9\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u7528\u6237\u7406\u89E3\uFF0C\u672C\u7F51\u7AD9\u9700\u8981\u5B9A\u671F\u6216\u4E0D\u5B9A\u671F\u5730\u5BF9\u63D0\u4F9B\u7F51\u7EDC\u670D\u52A1\u7684\u5E73\u53F0\uFF08\u5982\u4E92\u8054\u7F51\u7F51\u7AD9\u3001\u79FB\u52A8\u7F51\u7EDC\u7B49\uFF09\u6216\u76F8\u5173\u7684\u8BBE\u5907\u8FDB\u884C\u68C0\u4FEE\u6216\u8005\u7EF4\u62A4\uFF0C\u5982\u56E0\u6B64\u7C7B\u60C5\u51B5\u800C\u9020\u6210\u6536\u8D39\u7F51\u7EDC\u670D\u52A1\u5728\u5408\u7406\u65F6\u95F4\u5185\u7684\u4E2D\u65AD\uFF0C\u672C\u7F51\u7AD9\u65E0\u9700\u4E3A\u6B64\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\uFF0C\u4F46\u672C\u7F51\u7AD9\u5E94\u5C3D\u53EF\u80FD\u4E8B\u5148\u8FDB\u884C\u901A\u544A\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u7528\u6237\u8FDD\u53CD\u672C\u6761\u6B3E\u4E2D\u89C4\u5B9A\u7684\u4F7F\u7528\u89C4\u5219\uFF0C\u672C\u7F51\u7AD9\u6709\u6743\u968F\u65F6\u4E2D\u65AD\u6216\u7EC8\u6B62\u5411\u7528\u6237\u63D0\u4F9B\u672C\u6761\u6B3E\u9879\u4E0B\u7684\u7F51\u7EDC\u670D\u52A1\u800C\u65E0\u9700\u5BF9\u7528\u6237\u6216\u4EFB\u4F55\u7B2C\u4E09\u65B9\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u56DB : \u7528\u6237\u548C\u8D26\u6237'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u5728\u60A8\u4F7F\u7528\u672C\u7F51\u7AD9\u7684\u67D0\u4E9B\u529F\u80FD\u548C\u670D\u52A1\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u9700\u8981\u60A8\u5728\u672C\u7F51\u7AD9\u521B\u5EFA\u8D26\u6237\uFF0C\u60A8\u540C\u610F\u4E3A\u5728\u60A8\u7684\u8D26\u6237\u548C\u5BC6\u7801\u4E0B\u53D1\u751F\u7684\u6240\u6709\u884C\u4E3A\u627F\u62C5\u8D23\u4EFB\u3002\u5BF9\u4E8E\u56E0\u60A8\u672A\u80FD\u4FDD\u62A4\u4FE1\u606F\u5B89\u5168\u4EE5\u53CA\u4FDD\u5BC6\u800C\u5728\u60A8\u7684\u8D26\u6237\u4E0B\u53D1\u751F\u7684\u4EFB\u4F55\u884C\u4E3A\uFF0C\u60A8\u627F\u62C5\u5168\u90E8\u8D23\u4EFB\u3002\u5982\u679C\u60A8\u672A\u6EE118\u5468\u5C81\uFF0C\u60A8\u53EA\u80FD\u5728\u7236\u6BCD\u6216\u8005\u76D1\u62A4\u4EBA\u7684\u53C2\u4E0E\u4E0B\u4F7F\u7528\u672C\u7F51\u7AD9\u3002\u6211\u4EEC\u4FDD\u7559\u81EA\u884C\u51B3\u5B9A\u62D2\u7EDD\u63D0\u4F9B\u670D\u52A1\u3001\u5173\u95ED\u8D26\u53F7\u3001\u5220\u9664\u6216\u8005\u7F16\u8F91\u5185\u5BB9\u6216\u8005\u53D6\u6D88\u8BA2\u5355\u7684\u6743\u5229\u3002\u5982\u679C\u60A8\u7684\u6CE8\u518C\u8D26\u53F7\u5728180\u65E5\u5185\u672A\u88AB\u6FC0\u6D3B\u5E76\u5B9E\u9645\u4F7F\u7528\uFF0C\u672C\u7F51\u7AD9\u6709\u6743\u5220\u9664\u8BE5\u5E10\u53F7\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u4E94 : \u4F7F\u7528\u884C\u4E3A'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u60A8\u6709\u6743\u968F\u65F6\u4FEE\u6539\u6216\u8005\u5220\u9664\u81EA\u5DF1\u7684\u8D26\u6237\u4FE1\u606F\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u60A8\u6709\u4E49\u52A1\u548C\u8D23\u4EFB\u59A5\u5584\u4FDD\u7BA1\u60A8\u5728\u672C\u7F51\u7AD9\u6CE8\u518C\u7684\u81EA\u5DF1\u8D26\u6237\u4FE1\u606F\u3002\u60A8\u4E0D\u5E94\u5C06\u8D26\u53F7\u548C\u5BC6\u7801\u8F6C\u8BA9\u6216\u8005\u51FA\u501F\u4ED6\u4EBA\u4F7F\u7528\u3002\u5982\u679C\u60A8\u53D1\u73B0\u60A8\u7684\u8D26\u53F7\u906D\u4ED6\u4EBA\u975E\u6CD5\u4F7F\u7528\uFF0C\u5E94\u7ACB\u5373\u901A\u77E5\u672C\u7F51\u7AD9\u3002\u56E0\u9ED1\u5BA2\u884C\u4E3A\u6216\u8005\u7528\u6237\u7684\u4FDD\u7BA1\u758F\u5FFD\u5BFC\u81F4\u8D26\u53F7\u3001\u5BC6\u7801\u906D\u4ED6\u4EBA\u975E\u6CD5\u4F7F\u7528\uFF0C\u672C\u7F51\u7AD9\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u60A8\u5728\u4F7F\u7528\u672C\u7F51\u7AD9\u6240\u63D0\u4F9B\u7684\u670D\u52A1\u8FC7\u7A0B\u4E2D\uFF0C\u5FC5\u987B\u9075\u5B88\u4EE5\u4E0B\u539F\u5219\uFF1A'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '1. \u9075\u5B88\u4E2D\u56FD\u6709\u5173\u7684\u6CD5\u5F8B\u548C\u6CD5\u89C4\uFF0C\u4E0D\u4F1A\u8FDD\u53CD\u4EFB\u4F55\u9002\u7528\u7684\u56FD\u5BB6\u6216\u8005\u56FD\u9645\u6CD5\u5F8B\u3001\u6CD5\u4EE4\u3001\u8C03\u7406\u3001\u89C4\u5219\u6216\u8005\u89C4\u5B9A\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '2. \u9075\u5B88\u6240\u6709\u4E0E\u7F51\u7EDC\u670D\u52A1\u6709\u5173\u7684\u7F51\u7EDC\u534F\u8BAE\u3001\u89C4\u5B9A\u548C\u7A0B\u5E8F\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '3. \u4E0D\u5F97\u4E3A\u4EFB\u4F55\u975E\u6CD5\u76EE\u7684\u800C\u4F7F\u7528\u7F51\u7EDC\u670D\u52A1\u7CFB\u7EDF\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '4. \u4E0D\u5F97\u5229\u7528\u672C\u7F51\u7AD9\u6240\u63D0\u4F9B\u7684\u7F51\u7EDC\u670D\u52A1\u4E0A\u4F20\u3001\u5C55\u793A\u6216\u4F20\u64AD\uFF1A'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'a. \u4FB5\u72AF\u7B2C\u4E09\u65B9\u6743\u5229\u7684\u4EFB\u4F55\u5185\u5BB9\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E13\u5229\u6743\u3001\u8457\u4F5C\u6743\u3001\u5546\u6807\u6743\u3001\u540D\u8A89\u6743\u6216\u8005\u6216\u8005\u4EFB\u4F55\u5176\u4ED6\u5408\u6CD5\u6743\u76CA\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'b. \u5546\u4E1A\u5E7F\u544A\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'c. \u4EFB\u4F55\u7B2C\u4E09\u65B9\u5E7F\u544A\uFF0C\u5305\u62EC\u6A2A\u5E45\u5E7F\u544A\u8054\u76DF\u7B49\u670D\u52A1\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'd. \u4EFB\u4F55\u865A\u5047\u7684\u3001\u9A9A\u6270\u6027\u7684\u3001\u4E2D\u4F24\u4ED6\u4EBA\u7684\u3001\u8FB1\u9A82\u6027\u7684\u3001\u6050\u5413\u6027\u7684\u3001\u5EB8\u4FD7\u6DEB\u79FD\u7684\u6216\u5176\u4ED6\u4EFB\u4F55\u975E\u6CD5\u7684\u4FE1\u606F\u8D44\u6599\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '5. \u4E0D\u5F97\u5229\u7528\u672C\u7F51\u7AD9\u7F51\u7EDC\u670D\u52A1\u7CFB\u7EDF\u8FDB\u884C\u4EFB\u4F55\u4E0D\u5229\u4E8E\u672C\u7F51\u7AD9\u7684\u884C\u4E3A\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '6. \u4E0D\u5F97\u5BF9\u5176\u4ED6\u7528\u6237\u8FDB\u884C\u4FAE\u8FB1\u3001\u8C29\u9A82\u3001\u6076\u610F\u8C03\u4F83\u7B49\u4EBA\u8EAB\u653B\u51FB\u7684\u884C\u4E3A\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '7. \u5982\u53D1\u73B0\u4EFB\u4F55\u975E\u6CD5\u4F7F\u7528\u7528\u6237\u5E10\u53F7\u6216\u5E10\u53F7\u51FA\u73B0\u5B89\u5168\u6F0F\u6D1E\u7684\u60C5\u51B5\uFF0C\u5E94\u7ACB\u5373\u901A\u77E5\u672C\u7F51\u7AD9\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '8. \u60A8\u4E0D\u4F1A\u5047\u5192\u4EFB\u4F55\u4EBA\u6216\u8005\u6CD5\u4EBA\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u5982\u7528\u6237\u5728\u4F7F\u7528\u7F51\u7EDC\u670D\u52A1\u65F6\u8FDD\u53CD\u4EFB\u4F55\u4E0A\u8FF0\u89C4\u5B9A\uFF0C\u672C\u7F51\u7AD9\u6216\u5176\u6388\u6743\u7684\u4EBA\u6709\u6743\u8981\u6C42\u7528\u6237\u6539\u6B63\u6216\u76F4\u63A5\u91C7\u53D6\u4E00\u5207\u5FC5\u8981\u7684\u63AA\u65BD\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u66F4\u6539\u6216\u5220\u9664\u7528\u6237\u5F20\u8D34\u7684\u5185\u5BB9\u7B49\u3001\u6682\u505C\u6216\u7EC8\u6B62\u7528\u6237\u4F7F\u7528\u7F51\u7EDC\u670D\u52A1\u7684\u6743\u5229\uFF09\u4EE5\u51CF\u8F7B\u7528\u6237\u4E0D\u5F53\u884C\u4E3A\u9020\u6210\u7684\u5F71\u54CD\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u7F51\u7AD9\u5BF9\u6240\u63D0\u4F9B\u7684\u67D0\u4E9B\u7279\u5B9A\u7684\u7F51\u7EDC\u670D\u52A1\u7684\u4F7F\u7528\u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7F51\u9875\u516C\u544A\u3001\u7535\u5B50\u90AE\u4EF6\u3001\u53D1\u9001\u7AD9\u5185\u4FE1\u63D0\u9192\u7B49\uFF09\u4F5C\u51FA\u7684\u4EFB\u4F55\u58F0\u660E\u3001\u901A\u77E5\u3001\u8B66\u793A\u7B49\u5185\u5BB9\u89C6\u4E3A\u672C\u6761\u6B3E\u7684\u4E00\u90E8\u5206\uFF0C\u7528\u6237\u5982\u4F7F\u7528\u8BE5\u672C\u7F51\u7AD9\u7F51\u7EDC\u670D\u52A1\uFF0C\u89C6\u4E3A\u7528\u6237\u540C\u610F\u8BE5\u7B49\u58F0\u660E\u3001\u901A\u77E5\u3001\u8B66\u793A\u7684\u5185\u5BB9\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u516D\u3001\u514D\u8D23\u58F0\u660E'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u7F51\u7AD9\u5728\u63D0\u4F9B\u4EA7\u54C1\u6216\u670D\u52A1\u53EF\u80FD\u4F1A\u9047\u5230\u4E0D\u53EF\u6297\u529B\u7B49\u98CE\u9669\u56E0\u7D20\uFF0C\u56E0\u6B64\u672C\u7F51\u7AD9\u65E0\u6CD5\u62C5\u4FDD\u7F51\u7EDC\u670D\u52A1\u4E0D\u4F1A\u4E2D\u65AD\uFF0C\u4E5F\u65E0\u6CD5\u62C5\u4FDD\u7F51\u7EDC\u670D\u52A1\u4E00\u5B9A\u80FD\u6EE1\u8DB3\u60A8\u7684\u8981\u6C42\uFF0C\u5BF9\u7F51\u7EDC\u670D\u52A1\u7684\u53CA\u65F6\u6027\u3001\u5B89\u5168\u6027\u3001\u51C6\u786E\u6027\u4E5F\u90FD\u65E0\u6CD5\u4F5C\u51FA\u62C5\u4FDD\u3002\u60A8\u540C\u610F\u4FDD\u969C\u548C\u7EF4\u62A4\u672C\u7F51\u7AD9\u53CA\u5176\u4ED6\u7528\u6237\u7684\u5229\u76CA\uFF0C\u7531\u4E8E\u60A8\u767B\u5F55\u7F51\u7AD9\u4EA7\u751F\u7684\u5185\u5BB9\u8FDD\u6CD5\u3001\u4E0D\u771F\u5B9E\u3001\u4E0D\u6B63\u5F53\u3001\u4FB5\u72AF\u7B2C\u4E09\u65B9\u5408\u6CD5\u6743\u76CA\uFF0C\u6216\u8005\u60A8\u8FDD\u53CD\u672C\u6761\u6B3E\u9879\u4E0B\u7684\u4EFB\u4F55\u6761\u6B3E\u800C\u7ED9\u672C\u7F51\u7AD9\u6216\u4EFB\u4F55\u5176\u4ED6\u7B2C\u4E09\u65B9\u9020\u6210\u635F\u5931\uFF0C\u60A8\u540C\u610F\u627F\u62C5\u635F\u5BB3\u8D54\u507F\u8D23\u4EFB\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u4E03\u3001\u901A\u77E5\u9001\u8FBE'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u6761\u6B3E\u9879\u4E0B\u672C\u7F51\u7AD9\u5BF9\u4E8E\u7528\u6237\u6240\u6709\u7684\u901A\u77E5\u5747\u53EF\u901A\u8FC7\u7F51\u9875\u516C\u544A\u3001\u7535\u5B50\u90AE\u4EF6\u3001\u53D1\u9001\u4FE1\u606F\u6216\u5E38\u89C4\u7684\u4FE1\u4EF6\u4F20\u9001\u7B49\u65B9\u5F0F\u8FDB\u884C\uFF1B\u8BE5\u7B49\u901A\u77E5\u4E8E\u53D1\u9001\u4E4B\u65E5\u89C6\u4E3A\u5DF2\u9001\u8FBE\u6536\u4EF6\u4EBA\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u7528\u6237\u5BF9\u4E8E\u672C\u7F51\u7AD9\u7684\u901A\u77E5\u5E94\u5F53\u901A\u8FC7\u672C\u7F51\u7AD9\u5BF9\u5916\u6B63\u5F0F\u516C\u5E03\u7684\u901A\u4FE1\u5730\u5740\u3001\u4F20\u771F\u53F7\u7801\u3001\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u7B49\u8054\u7CFB\u4FE1\u606F\u8FDB\u884C\u9001\u8FBE\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            ' \u516B\u3001\u6CD5\u5F8B\u7BA1\u8F96'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u6761\u6B3E\u7684\u8BA2\u7ACB\u3001\u6267\u884C\u548C\u89E3\u91CA\u53CA\u4E89\u8BAE\u7684\u89E3\u51B3\u5747\u5E94\u9002\u7528\u4E2D\u56FD\u6CD5\u5F8B\u5E76\u53D7\u4E2D\u56FD\u6CD5\u9662\u7BA1\u8F96\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u5982\u53CC\u65B9\u5C31\u672C\u534F\u8BAE\u5185\u5BB9\u6216\u5176\u6267\u884C\u53D1\u751F\u4EFB\u4F55\u4E89\u8BAE\uFF0C\u53CC\u65B9\u5E94\u5C3D\u91CF\u53CB\u597D\u534F\u5546\u89E3\u51B3\uFF1B\u534F\u5546\u4E0D\u6210\u65F6\uFF0C\u4EFB\u4F55\u4E00\u65B9\u5747\u53EF\u5411\u672C\u7F51\u7AD9\u6240\u5728\u5730\u7684\u4EBA\u6C11\u6CD5\u9662\u63D0\u8D77\u8BC9\u8BBC\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u4E5D\u3001\u7591\u95EE\u89E3\u7B54'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u5982\u679C\u60A8\u5BF9\u4EE5\u4E0A\u6761\u6B3E\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u8BF7\u901A\u8FC7\u90AE\u4EF6\u8054\u7CFB\u6211\u4EEC help@copyrightshow.cn\u3002'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'about-article padding' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u9690\u79C1\u534F\u8BAE'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u7528\u6237\u5728\u4F17\u521B\u90E8\u843D\u7F51\u7AD9\u8FDB\u884C\u767B\u8BB0\u6CE8\u518C\u3001\u4E0A\u4F20\u5185\u5BB9\u3001\u53C2\u4E0E\u8BA8\u8BBA\u7B49\u6D3B\u52A8\u65F6\uFF0C\u7ECF\u7528\u6237\u540C\u610F\u53CA\u786E\u8BA4\uFF0C\u672C\u7F51\u7AD9\u5C06\u901A\u8FC7\u6CE8\u518C\u8868\u683C\u3001\u8BA2\u5355\u7B49\u5F62\u5F0F\u8981\u6C42\u7528\u6237\u63D0\u4F9B\u4E00\u4E9B\u4E2A\u4EBA\u8D44\u6599\u3002\u672C\u7F51\u7AD9\u6536\u96C6\u6B64\u7C7B\u4E2A\u4EBA\u8EAB\u4EFD\u4FE1\u606F\uFF0C\u4E3B\u8981\u662F\u4E3A\u6CE8\u518C\u7528\u6237\u7528\u4E8E\u63D0\u4F9B\u548C\u6539\u8FDB\u6211\u4EEC\u7684\u4EA7\u54C1\u3001\u670D\u52A1\u3001\u5185\u5BB9\u548C\u5E7F\u544A\u5BA3\u4F20'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u7F51\u7AD9\u6240\u6536\u96C6\u7684\u4E2A\u4EBA\u4FE1\u606F\u6216\u4F01\u4E1A\u4FE1\u606F\u5305\u62EC\uFF1A'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '1. \u4E2A\u4EBA/\u4F01\u4E1A\u8BC6\u522B\u8D44\u6599\uFF1A\u5982\u59D3\u540D\u3001\u4F01\u4E1A\u540D\u79F0\u3001\u7EC4\u7EC7\u673A\u6784\u4EE3\u7801\u3001\u6CD5\u4EBA\u4EE3\u8868\u3001\u4E2A\u4EBA\u6027\u522B\u3001\u4E2A\u4EBA\u751F\u65E5\u3001\u4E2A\u4EBA\u4E3B\u9875\u3001\u516C\u53F8\u7F51\u7AD9\u5730\u5740\u3001\u5373\u65F6\u901A\u8BAF\u3001\u6240\u5728\u5730\u3001\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u7B49\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '2. \u4E2A\u4EBA\u80CC\u666F\uFF1A \u804C\u4E1A\u3001\u5A5A\u59FB\u3001\u5174\u8DA3\u7231\u597D\u7B49\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u7F51\u7AD9\u5BF9\u7528\u6237\u6240\u63D0\u4F9B\u7684\u4E2A\u4EBA\u8D44\u6599\u8FDB\u884C\u4E25\u683C\u7684\u7BA1\u7406\u53CA\u4FDD\u62A4\uFF0C\u672C\u7F51\u7AD9\u5C06\u4F7F\u7528\u76F8\u5E94\u7684\u6280\u672F\uFF0C\u9632\u6B62\u60A8\u7684\u4E2A\u4EBA\u8D44\u6599\u4E22\u5931\u3001\u88AB\u76D7\u7528\u6216\u906D\u7BE1\u6539\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u67D0\u4E9B\u4E2A\u4EBA\u4FE1\u606F\u56E0\u5176\u7279\u6B8A\u6027\u53EF\u80FD\u88AB\u8BA4\u4E3A\u662F\u654F\u611F\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u4F8B\u5982\u60A8\u7684\u79CD\u65CF\u3001\u5B97\u6559\u3001\u4E2A\u4EBA\u5065\u5EB7\u548C\u533B\u7597\u4FE1\u606F\u7B49\u3002\u76F8\u6BD4\u5176\u4ED6\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u654F\u611F\u4E2A\u4EBA\u4FE1\u606F\u53D7\u5230\u66F4\u52A0\u4E25\u683C\u7684\u4FDD\u62A4\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u8BF7\u6CE8\u610F\uFF0C\u60A8\u5728\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\u65F6\u6240\u63D0\u4F9B\u3001\u4E0A\u4F20\u6216\u53D1\u5E03\u7684\u5185\u5BB9\u548C\u4FE1\u606F\uFF08\u4F8B\u5982\u6709\u5173\u60A8\u793E\u4EA4\u6D3B\u52A8\u7684\u7167\u7247\u7B49\u4FE1\u606F\uFF09\uFF0C\u53EF\u80FD\u4F1A\u6CC4\u9732\u60A8\u7684\u654F\u611F\u4E2A\u4EBA\u4FE1\u606F\u3002\u60A8\u9700\u8981\u8C28\u614E\u5730\u8003\u8651\uFF0C\u662F\u5426\u5728\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\u65F6\u62AB\u9732\u76F8\u5173\u654F\u611F\u4E2A\u4EBA\u4FE1\u606F\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u516C\u53F8\u7684\u7F51\u7AD9\u3001\u5728\u7EBF\u670D\u52A1\u3001\u4E92\u52A8\u5E94\u7528\u8F6F\u4EF6\u3001\u7535\u5B50\u90AE\u4EF6\u548C\u5E7F\u544A\u53EF\u80FD\u4F1A\u4F7F\u7528\u201CCookie\u201D\u548C\u5176\u4ED6\u6280\u672F\uFF0C\u5982\u50CF\u7D20\u6807\u7B7E\u548C\u7F51\u7AD9\u4FE1\u6807\u3002\u6B64\u7C7B\u6280\u672F\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u4E86\u89E3\u7528\u6237\u7684\u884C\u4E3A\uFF0C\u544A\u8BC9\u672C\u7F51\u7AD9\u4EBA\u4EEC\u6D4F\u89C8\u4E86\u672C\u7F51\u7AD9\u7684\u54EA\u4E9B\u90E8\u5206\uFF0C\u8861\u91CF\u5E7F\u544A\u548C\u7F51\u7EDC\u641C\u7D22\u7684\u6548\u679C\u5E76\u52A0\u4EE5\u6539\u5584\u3002\u672C\u7F51\u7AD9\u5C06\u901A\u8FC7 Cookie \u548C\u5176\u4ED6\u6280\u672F\u6536\u96C6\u7684\u4FE1\u606F\u89C6\u4E3A\u975E\u4E2A\u4EBA\u4FE1\u606F\u3002\u4F46\u662F\uFF0C\u5982\u679C\u5F53\u5730\u6CD5\u5F8B\u5C06 Internet \u534F\u8BAE (IP) \u5730\u5740\u6216\u7C7B\u4F3C\u8BC6\u522B\u6807\u8BB0\u89C6\u4E3A\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u5219\u6211\u4EEC\u4EA6\u5C06\u6B64\u7B49\u8BC6\u522B\u6807\u8BB0\u89C6\u4E3A\u4E2A\u4EBA\u4FE1\u606F\u3002\u540C\u6837\uFF0C\u5C31\u672C\u9690\u79C1\u653F\u7B56\u800C\u8A00\uFF0C\u5728\u5C06\u975E\u4E2A\u4EBA\u4FE1\u606F\u4E0E\u4E2A\u4EBA\u4FE1\u606F\u7ED3\u5408\u4F7F\u7528\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C06\u7ED3\u5408\u4F7F\u7528\u7684\u4FE1\u606F\u89C6\u4E3A\u4E2A\u4EBA\u4FE1\u606F\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u5728\u672A\u7ECF\u8BBF\u95EE\u8005\u6388\u6743\u540C\u610F\u7684\u60C5\u51B5\u4E0B\uFF0C\u672C\u7F51\u7AD9\u4E0D\u4F1A\u5C06\u8BBF\u95EE\u8005\u7684\u4E2A\u4EBA\u4FE1\u606F\u3001\u4F01\u4E1A\u4FE1\u606F\u6CC4\u9732\u7ED9\u4EFB\u4F55\u7B2C\u4E09\u65B9\u3002\u4EE5\u4E0B\u60C5\u51B5\u9664\u5916\uFF1A'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '1. \u6839\u636E\u6267\u6CD5\u5355\u4F4D\u4E4B\u8981\u6C42\u6216\u4E3A\u516C\u5171\u4E4B\u76EE\u7684\u5411\u76F8\u5173\u5355\u4F4D\u63D0\u4F9B\u4E2A\u4EBA\u8D44\u6599\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '2. \u7531\u4E8E\u8BBF\u95EE\u8005\u5C06\u7528\u6237\u5BC6\u7801\u544A\u77E5\u4ED6\u4EBA\u6216\u4E0E\u4ED6\u4EBA\u5171\u4EAB\u6CE8\u518C\u5E10\u6237\uFF0C\u7531\u6B64\u5BFC\u81F4\u7684\u4EFB\u4F55\u4E2A\u4EBA\u8D44\u6599\u6CC4\u9732\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '3. \u7531\u4E8E\u9ED1\u5BA2\u653B\u51FB\u3001\u8BA1\u7B97\u673A\u75C5\u6BD2\u4FB5\u5165\u6216\u53D1\u4F5C\u3001\u56E0\u653F\u5E9C\u7BA1\u5236\u800C\u9020\u6210\u7684\u6682\u65F6\u6027\u5173\u95ED\u7B49\u5F71\u54CD\u7F51\u7EDC\u6B63\u5E38\u7ECF\u8425\u4E4B\u4E0D\u53EF\u6297\u529B\u800C\u9020\u6210\u7684\u4E2A\u4EBA\u8D44\u6599\u6CC4\u9732\u3001\u4E22\u5931\u3001\u88AB\u76D7\u7528\u6216\u88AB\u7A9C\u6539\u7B49\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '4. \u7531\u4E8E\u4E0E\u672C\u7F51\u7AD9\u94FE\u63A5\u7684\u5176\u4ED6\u7F51\u7AD9\u6240\u9020\u6210\u4E4B\u4E2A\u4EBA\u8D44\u6599\u6CC4\u9732\u53CA\u7531\u6B64\u800C\u5BFC\u81F4\u7684\u4EFB\u4F55\u6CD5\u5F8B\u4E89\u8BAE\u548C\u540E\u679C\uFF1B'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '5. \u4E3A\u514D\u9664\u8BBF\u95EE\u8005\u5728\u751F\u547D\u3001\u8EAB\u4F53\u6216\u8D22\u4EA7\u65B9\u9762\u4E4B\u6025\u8FEB\u5371\u9669\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u672C\u7F51\u7AD9\u53EF\u80FD\u4F1A\u4E0E\u7B2C\u4E09\u65B9\u5408\u4F5C\u5411\u7528\u6237\u63D0\u4F9B\u76F8\u5173\u7684\u7F51\u7EDC\u670D\u52A1\uFF0C\u5728\u6B64\u60C5\u51B5\u4E0B\uFF0C\u5982\u8BE5\u7B2C\u4E09\u65B9\u540C\u610F\u627F\u62C5\u4E0E\u672C\u7F51\u7AD9\u540C\u7B49\u7684\u4FDD\u62A4\u7528\u6237\u9690\u79C1\u7684\u8D23\u4EFB\uFF0C\u5219\u672C\u7F51\u7AD9\u6709\u6743\u5C06\u7528\u6237\u7684\u6CE8\u518C\u8D44\u6599\u7B49\u63D0\u4F9B\u7ED9\u8BE5\u7B2C\u4E09\u65B9\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u5728\u4E0D\u900F\u9732\u5355\u4E2A\u7528\u6237\u9690\u79C1\u8D44\u6599\u7684\u524D\u63D0\u4E0B\uFF0C\u672C\u7F51\u7AD9\u6709\u6743\u5BF9\u6574\u4E2A\u7528\u6237\u6570\u636E\u5E93\u8FDB\u884C\u5206\u6790\u5E76\u5BF9\u7528\u6237\u6570\u636E\u5E93\u8FDB\u884C\u5546\u4E1A\u4E0A\u7684\u5229\u7528\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u5982\u679C\u60A8\u5BF9\u4F17\u521B\u90E8\u843D\u7F51\u7AD9\u7684\u9690\u79C1\u653F\u7B56\u6216\u6570\u636E\u5904\u7406\u6709\u4EFB\u4F55\u95EE\u9898\u6216\u8005\u7591\u95EE\uFF0C\u6216\u8005\u5E0C\u671B\u5C31\u53EF\u80FD\u8FDD\u53CD\u5F53\u5730\u9690\u79C1\u6743\u6CD5\u5F8B\u7684\u60C5\u51B5\u8FDB\u884C\u6295\u8BC9\uFF0C\u8BF7\u901A\u8FC7help@copyrightshow.cn\u8054\u7CFB\u6211\u4EEC\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u6211\u4EEC\u53EF\u80FD\u9002\u65F6\u4FEE\u8BA2\u672C\u300A\u9690\u79C1\u653F\u7B56\u300B\u7684\u6761\u6B3E\uFF0C\u8BE5\u7B49\u4FEE\u8BA2\u6784\u6210\u672C\u300A\u9690\u79C1\u653F\u7B56\u300B\u7684\u4E00\u90E8\u5206\u3002\u5982\u8BE5\u7B49\u4FEE\u8BA2\u9020\u6210\u60A8\u5728\u672C\u300A\u9690\u79C1\u653F\u7B56\u300B\u4E0B\u6743\u5229\u7684\u5B9E\u8D28\u51CF\u5C11\uFF0C\u6211\u4EEC\u5C06\u5728\u4FEE\u8BA2\u751F\u6548\u524D\u901A\u8FC7\u5728\u4E3B\u9875\u4E0A\u663E\u8457\u4F4D\u7F6E\u63D0\u793A\u6216\u5411\u60A8\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\u6216\u4EE5\u5176\u4ED6\u65B9\u5F0F\u901A\u77E5\u60A8\u3002\u5728\u8BE5\u79CD\u60C5\u51B5\u4E0B\uFF0C\u82E5\u60A8\u7EE7\u7EED\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\uFF0C\u5373\u8868\u793A\u540C\u610F\u53D7\u7ECF\u4FEE\u8BA2\u7684\u672C\u300A\u9690\u79C1\u653F\u7B56\u300B\u7684\u7EA6\u675F\u3002'
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

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _LoginStore = __webpack_require__(20);

	var _LoginStore2 = _interopRequireDefault(_LoginStore);

	var _LoginActions = __webpack_require__(21);

	var _LoginActions2 = _interopRequireDefault(_LoginActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'Login',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    subLogin: function subLogin() {
	        var mobileReg = /^[1][3-9][0-9]{9}$/;
	        if (!this.state.mobile) {
	            alert('请输入手机号！');
	        } else if (!mobileReg.test(this.state.mobile)) {
	            alert('请输入正确的手机号码！');
	        } else if (!this.state.password) {
	            alert('请输入密码！');
	        } else if (this.state.password.length < 6 || this.state.password.length > 16) {
	            alert('请输入6-16位密码！');

	            //用户注册
	        } else {
	            _LoginActions2.default.login({
	                mobile: this.state.mobile,
	                password: this.state.password
	            });
	        }
	    },

	    //监听手机号码，更改state
	    changeMoile: function changeMoile(event) {
	        this.setState({ mobile: event.target.value });
	    },

	    //监听密码，更改state
	    changePassword: function changePassword(event) {
	        this.setState({ password: event.target.value });
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
	                    _amazeuiTouch.Group,
	                    { className: 'regLog-logo' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'regLog-logo-box' },
	                        _react2.default.createElement('div', { className: 'regLog-logo-img' })
	                    )
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { className: 'bgNone margin-bottom-0' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-login' },
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
	                                _react2.default.createElement(_amazeuiTouch.Field, { type: 'number', onChange: this.changeMoile })
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
	                                _react2.default.createElement(_amazeuiTouch.Field, { type: 'password', onChange: this.changePassword })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Button,
	                            { className: 'btn-yellow margin-top-xl padding-v', onClick: this.subLogin },
	                            '\u767B\u5F55'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'forgetPwd text-size-13' },
	                            _react2.default.createElement(
	                                'a',
	                                { href: '/forgetpwd' },
	                                '\u5FD8\u8BB0\u5BC6\u7801\uFF1F'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _amazeuiTouch.Group,
	                    { className: 'registerNow bgNone margin-v-xs' },
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'text-size-13 text-color-2' },
	                        '\u60A8\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF1F\u73B0\u5728',
	                        _react2.default.createElement(
	                            'a',
	                            { href: '/register' },
	                            ' \u6CE8\u518C'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(15);

	var _alt2 = _interopRequireDefault(_alt);

	var _LoginActions = __webpack_require__(21);

	var _LoginActions2 = _interopRequireDefault(_LoginActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginStore = function () {
	    function LoginStore() {
	        _classCallCheck(this, LoginStore);

	        this.bindActions(_LoginActions2.default);
	    }

	    //用户登录--成功


	    _createClass(LoginStore, [{
	        key: 'onLoginSuccess',
	        value: function onLoginSuccess(data) {
	            console.info('onLoginSuccess', data);
	            if (data.status) {
	                alert('登录成功');
	            } else {
	                alert(data.msg);
	            }
	        }

	        //用户登录--失败

	    }, {
	        key: 'onLoginFail',
	        value: function onLoginFail(data) {
	            console.info('onLoginFail', data);
	            this.code = data.data;
	        }
	    }]);

	    return LoginStore;
	}();

	exports.default = _alt2.default.createStore(LoginStore, 'LoginStore');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(15);

	var _alt2 = _interopRequireDefault(_alt);

	var _jquery = __webpack_require__(13);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginActions = function () {
	    function LoginActions() {
	        _classCallCheck(this, LoginActions);

	        this.generateActions('loginSuccess', 'loginFail');
	    }

	    //用户登录


	    _createClass(LoginActions, [{
	        key: 'login',
	        value: function login(data) {
	            var _this = this;

	            _jquery2.default.ajax({
	                type: 'POST',
	                dataType: 'json',
	                contentType: 'application/json; charset=utf-8',
	                url: '/app/user/login',
	                data: JSON.stringify(data)
	            }).done(function (data) {
	                _this.loginSuccess(data);
	            }).fail(function (jqXhr) {
	                _this.LoginFail(jqXhr);
	            });
	        }
	    }]);

	    return LoginActions;
	}();

	exports.default = _alt2.default.createActions(LoginActions);

/***/ },
/* 22 */
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

	var _jquery = __webpack_require__(13);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'ForgetPwd',

	    getInitialState: function getInitialState() {
	        return {
	            'passwordType': 'password',
	            'passwordIconClass': 'icon-pwdHid'
	        };
	    },
	    showPassword: function showPassword() {
	        console.info('this.refspassword', this.refs.password);
	        if (this.state.passwordType == 'password') {
	            this.setState({
	                'passwordType': 'text',
	                'passwordIconClass': 'icon-pwdShow'
	            });
	        } else {
	            this.setState({
	                'passwordType': 'password',
	                'passwordIconClass': 'icon-pwdHid'
	            });
	        }
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
	                    _amazeuiTouch.Group,
	                    { className: 'regLog-logo' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'regLog-logo-box' },
	                        _react2.default.createElement('div', { className: 'regLog-logo-img' })
	                    )
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
	                                _react2.default.createElement(_amazeuiTouch.Field, { type: this.state.passwordType, className: 'password', placeholder: '\u8BF7\u8BBE\u7F6E6-16\u4F4D\u5BC6\u7801', btnAfter: _react2.default.createElement(_amazeuiTouch.Icon, { className: this.state.passwordIconClass, name: '', onClick: this.showPassword }) })
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
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Button,
	                            { className: 'btn-yellow margin-top-xl padding-v' },
	                            '\u5B8C\u6210'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 23 */
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
/* 24 */
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
/* 25 */
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

	var _Server2 = __webpack_require__(26);

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
/* 26 */
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

	var _Require2 = __webpack_require__(28);

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
/* 28 */
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

	var _HomeStore = __webpack_require__(30);

	var _HomeStore2 = _interopRequireDefault(_HomeStore);

	var _HomeActions = __webpack_require__(31);

	var _HomeActions2 = _interopRequireDefault(_HomeActions);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _reactDynamicSwiper = __webpack_require__(32);

	var _Moment2 = __webpack_require__(33);

	var _Moment3 = _interopRequireDefault(_Moment2);

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
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Home, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _HomeStore2.default.listen(this.onChange);
	            _HomeActions2.default.getSlide();
	            _HomeActions2.default.getTribe();
	            _HomeActions2.default.getTopic(1);
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

	        //查看更多话题

	    }, {
	        key: 'loadTopic',
	        value: function loadTopic() {
	            if (!this.state.lastPage) {
	                _HomeActions2.default.getTopic(this.state.topicPage + 1);
	            }
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
	                            this.state.slideList.map(function (item, i) {
	                                return _react2.default.createElement(
	                                    _amazeuiTouch.Slider.Item,
	                                    { key: i },
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '#' },
	                                        _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' })
	                                    )
	                                );
	                            })
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
	                                _amazeuiTouch.Group,
	                                { noPadded: true, className: 'margin-h-xs margin-v-0' },
	                                _react2.default.createElement(
	                                    _reactDynamicSwiper.Swiper,
	                                    {
	                                        swiperOptions: { slidesPerView: 'auto' },
	                                        navigation: false,
	                                        pagination: false
	                                    },
	                                    this.state.tribeList.map(function (item, i) {
	                                        return _react2.default.createElement(
	                                            _reactDynamicSwiper.Slide,
	                                            { key: i },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'swiper-slide' },
	                                                _react2.default.createElement(
	                                                    'a',
	                                                    { href: '/tribe/info/' + item.id },
	                                                    _react2.default.createElement('img', { src: item.logo })
	                                                ),
	                                                _react2.default.createElement(
	                                                    'a',
	                                                    { href: '/tribe/info/' + item.id },
	                                                    _react2.default.createElement(
	                                                        'p',
	                                                        { className: 'home-tribe-name' },
	                                                        item.title
	                                                    )
	                                                )
	                                            )
	                                        );
	                                    })
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
	                        { className: 'margin-top-sm home-topic-list' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            { className: 'margin-0' },
	                            this.state.topicList.map(function (item, i) {
	                                return _react2.default.createElement(
	                                    _amazeuiTouch.Group,
	                                    { noPadded: true, className: 'margin-v bgF border-d7d7d7', key: i },
	                                    _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                        media: _react2.default.createElement(
	                                            'a',
	                                            { href: '/user/' + item.uid },
	                                            _react2.default.createElement('img', { className: 'home-topic-media', width: '44', height: '44', src: item.userAvatar })
	                                        ),
	                                        after: _react2.default.createElement(
	                                            'div',
	                                            { className: 'home-topic-tag' },
	                                            _react2.default.createElement('a', { href: '/tribe/info/' + item.tribesId }),
	                                            item.tribeName
	                                        ),
	                                        title: _react2.default.createElement(
	                                            'div',
	                                            { className: 'home-topic-item' },
	                                            _react2.default.createElement(
	                                                'p',
	                                                { className: 'text-color-3 text-size-14' },
	                                                _react2.default.createElement(
	                                                    'a',
	                                                    { href: '/user/' + item.uid },
	                                                    item.userName
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'p',
	                                                { className: 'text-color-4 text-size-13' },
	                                                _react2.default.createElement(_Moment3.default, { momentTime: item.createTime })
	                                            )
	                                        )
	                                    }),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'padding-h margin-v-xs' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'text-size-15 text-color-3 margin-bottom-xs home-topic-tit' },
	                                            _react2.default.createElement(
	                                                'a',
	                                                { href: '/tribe/topic/' + item.id },
	                                                item.title
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'text-size-13 text-color-2 home-topic-desc' },
	                                            _react2.default.createElement(
	                                                'a',
	                                                { href: '/tribe/topic/' + item.id },
	                                                item.description
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { avg: 3 },
	                                        item.topicPic.map(function (topicPic, topicPicI) {
	                                            return _react2.default.createElement(
	                                                _amazeuiTouch.Col,
	                                                { key: topicPicI, className: 'padding-h padding-top-xs padding-bottom-0' },
	                                                _react2.default.createElement(
	                                                    'a',
	                                                    { href: '/tribe/topic/' + item.id },
	                                                    _react2.default.createElement('img', { src: topicPic })
	                                                )
	                                            );
	                                        })
	                                    ),
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { align: 'between', className: 'margin-v-xs' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: 'padding-h text-size-12 text-color-4' },
	                                            _react2.default.createElement('span', { className: 'icon home-icon-view margin-right-xs' }),
	                                            item.lookNum
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
	                                                    _react2.default.createElement('span', {
	                                                        className: 'icon home-icon-fabulous margin-right-xs' }),
	                                                    item.like
	                                                ),
	                                                _react2.default.createElement(
	                                                    _amazeuiTouch.Col,
	                                                    null,
	                                                    _react2.default.createElement('span', { className: 'icon home-icon-comment margin-right-xs' }),
	                                                    item.commentAmount
	                                                )
	                                            )
	                                        )
	                                    )
	                                );
	                            })
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
	                                { className: 'btn-white', href: 'javascript:;', onClick: this.loadTopic.bind(this) },
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(15);

	var _alt2 = _interopRequireDefault(_alt);

	var _HomeActions = __webpack_require__(31);

	var _HomeActions2 = _interopRequireDefault(_HomeActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeStore = function () {
	    function HomeStore() {
	        _classCallCheck(this, HomeStore);

	        this.bindActions(_HomeActions2.default);
	        this.slideList = [];
	        this.tribeList = [];
	        this.topicList = [];
	    }

	    //获取首页幻灯片---成功


	    _createClass(HomeStore, [{
	        key: 'onGetSlideSuccess',
	        value: function onGetSlideSuccess(data) {
	            this.slideList = data.data;
	        }

	        //获取首页幻灯片---失败

	    }, {
	        key: 'onGetSlideFail',
	        value: function onGetSlideFail() {
	            this.slideList = [];
	        }

	        //获取首页部落列表---成功

	    }, {
	        key: 'onGetTribeSuccess',
	        value: function onGetTribeSuccess(data) {
	            this.tribeList = data.data;
	        }

	        //获取首页部落列表---失败

	    }, {
	        key: 'onGetTribeFail',
	        value: function onGetTribeFail() {
	            this.tribeList = [];
	        }

	        //获取首页话题列表---成功

	    }, {
	        key: 'onGetTopicSuccess',
	        value: function onGetTopicSuccess(data) {
	            this.topicPage = data.currentPage;
	            this.lastPage = data.lastPage;
	            this.topicList = this.topicList.concat(data.data);
	        }

	        //获取首页话题列表---失败

	    }, {
	        key: 'onGetTopicFail',
	        value: function onGetTopicFail() {
	            this.topicList = [];
	        }
	    }]);

	    return HomeStore;
	}();

	exports.default = _alt2.default.createStore(HomeStore, 'HomeStore');

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(15);

	var _alt2 = _interopRequireDefault(_alt);

	var _jquery = __webpack_require__(13);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeActions = function () {
	    function HomeActions() {
	        _classCallCheck(this, HomeActions);

	        this.generateActions('getSlideSuccess', 'getSlideFail', 'getTribeSuccess', 'getTribeFail', 'getTopicSuccess', 'getTopicFail');
	    }

	    //获取首页幻灯片


	    _createClass(HomeActions, [{
	        key: 'getSlide',
	        value: function getSlide() {
	            var _this = this;

	            _jquery2.default.ajax({
	                type: 'Get',
	                url: '/app/banner'
	            }).done(function (data) {
	                _this.getSlideSuccess(data);
	            }).fail(function (jqXhr) {
	                _this.getSlideFail(jqXhr);
	            });
	        }

	        //获取首页部落列表

	    }, {
	        key: 'getTribe',
	        value: function getTribe() {
	            var _this2 = this;

	            _jquery2.default.ajax({
	                type: 'Get',
	                url: '/app/index/tribe/list'
	            }).done(function (data) {
	                _this2.getTribeSuccess(data);
	            }).fail(function (jqXhr) {
	                _this2.getTribeFail(jqXhr);
	            });
	        }

	        //获取首页话题列表

	    }, {
	        key: 'getTopic',
	        value: function getTopic(topicPage) {
	            var _this3 = this;

	            _jquery2.default.ajax({
	                type: 'Get',
	                url: '/app/index/topic/list',
	                data: {
	                    currentPage: topicPage,
	                    itemsPerPage: 10
	                }
	            }).done(function (data) {
	                _this3.getTopicSuccess(data);
	            }).fail(function (jqXhr) {
	                _this3.getTopicFail(jqXhr);
	            });
	        }
	    }]);

	    return HomeActions;
	}();

	exports.default = _alt2.default.createActions(HomeActions);

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("react-dynamic-swiper");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(13);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//公用时间控件
	var _Moment = function (_React$Component) {
	    _inherits(_Moment, _React$Component);

	    function _Moment(props) {
	        _classCallCheck(this, _Moment);

	        var _this = _possibleConstructorReturn(this, (_Moment.__proto__ || Object.getPrototypeOf(_Moment)).call(this, props));

	        _this.momentTime = _this.props.momentTime;
	        _this.onChange = _this.onChange.bind(_this);
	        var minute = 1000 * 60;
	        var hour = minute * 60;
	        var day = hour * 24;
	        var month = day * 30;

	        var now = new Date().getTime();
	        var diffValue = now - _this.props.momentTime;
	        if (diffValue < 0) {
	            //结束日期不能小于开始日期！
	            _this.momentTime = '';
	        }
	        var monthC = diffValue / month;
	        var dayC = diffValue / day;
	        var hourC = diffValue / hour;
	        var minC = diffValue / minute;
	        var result = '';

	        if (monthC >= 1) {
	            result = parseInt(monthC) + "个月前";
	        } else if (dayC >= 1) {
	            result = parseInt(dayC) + "天前";
	        } else if (hourC >= 1) {
	            result = parseInt(hourC) + "个小时前";
	        } else if (minC >= 1) {
	            result = parseInt(minC) + "分钟前";
	        } else {
	            result = "刚刚发表";
	        }
	        _this.momentTime = result;
	        return _this;
	    }

	    _createClass(_Moment, [{
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'span',
	                null,
	                this.momentTime
	            );
	        }
	    }]);

	    return _Moment;
	}(_react2.default.Component);

	exports.default = _Moment;

/***/ },
/* 34 */
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

	var _Server2 = __webpack_require__(26);

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
/* 35 */
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
/* 36 */
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

	var _Require2 = __webpack_require__(28);

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
/* 37 */
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

	var _Comments2 = __webpack_require__(38);

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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header2 = __webpack_require__(11);

	var _Header3 = _interopRequireDefault(_Header2);

	var _Comments2 = __webpack_require__(38);

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
/* 46 */
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

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("http-proxy-middleware");

/***/ }
/******/ ]);
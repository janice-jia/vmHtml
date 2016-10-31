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

	var PORT = process.env.PORT || 8080;
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

	var _Home = __webpack_require__(11);

	var _Home2 = _interopRequireDefault(_Home);

	var _Test = __webpack_require__(17);

	var _Test2 = _interopRequireDefault(_Test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/test', component: _Test2.default })
	);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _NavLink = __webpack_require__(9);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _amazeuiTouch = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'App',
	    onDismiss: function onDismiss(e) {
	        // 从 OffCanvas 内部元素关闭 OffCanvas
	        // 紧耦合，需要重构 OffCanvas
	        this.refs.oct.close();
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.Container,
	            null,
	            this.props.children,
	            _react2.default.createElement(_amazeuiTouch.NavBar, {
	                title: 'vmaking',
	                leftNav: [{ title: '',
	                    icon: 'bars',
	                    component: _amazeuiTouch.OffCanvasTrigger,
	                    offCanvas: _react2.default.createElement(
	                        _amazeuiTouch.OffCanvas,
	                        null,
	                        _react2.default.createElement(
	                            _amazeuiTouch.List,
	                            null,
	                            _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                linkComponent: _reactRouter.Link,
	                                linkProps: {
	                                    to: '/',
	                                    onClick: this.onDismiss
	                                },
	                                title: 'Home'
	                            }),
	                            _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                linkComponent: _reactRouter.Link,
	                                linkProps: {
	                                    to: '/test',
	                                    onClick: this.onDismiss
	                                },
	                                title: 'Test'
	                            })
	                        )
	                    ),
	                    isClone: true }],
	                rightNav: [{ title: 'right' }],
	                amStyle: 'dark' })
	        );
	    }
	});

/***/ },
/* 9 */
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
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("amazeui-touch");

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

	var _amazeuiTouch = __webpack_require__(10);

	var _HomeStore = __webpack_require__(12);

	var _HomeStore2 = _interopRequireDefault(_HomeStore);

	var _HomeActions = __webpack_require__(15);

	var _HomeActions2 = _interopRequireDefault(_HomeActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var sliderIntance = _react2.default.createElement(
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
	);

	var img = _react2.default.createElement('img', { className: 'home-tribe-media', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' });
	var tit = _react2.default.createElement(
	    'div',
	    { className: 'home-tribe-item' },
	    _react2.default.createElement(
	        'p',
	        { className: 'text-color-3 text-size-sm' },
	        '\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89\u55E8\u7C89'
	    ),
	    _react2.default.createElement(
	        'p',
	        { className: 'text-color-4 text-size-xs' },
	        '1\u5C0F\u65F6\u524D'
	    )
	);
	var btn = _react2.default.createElement(
	    'div',
	    { className: 'home-tribe-tag' },
	    '\u6D77\u8D3C\u738B\u90E8\u843D'
	);

	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home(props) {
	        _classCallCheck(this, Home);

	        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

	        _this.state = _HomeStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        _this.state.home = [];
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
	        key: 'handleToggleClick',
	        value: function handleToggleClick() {
	            this.setState(function (prevState) {
	                return {
	                    showWarning: !prevState.showWarning
	                };
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _amazeuiTouch.View,
	                null,
	                _react2.default.createElement(
	                    _amazeuiTouch.Container,
	                    { scrollable: true, className: 'home' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'home-slide' },
	                        sliderIntance
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
	                                    media: img,
	                                    after: btn,
	                                    title: tit
	                                }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'padding-h margin-v-xs' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'text-size-lg text-color-3' },
	                                        '\u6807\u9898\u540D\u79F0\u540D\u79F0\u540D\u79F0'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'text-size-xs text-color-2' },
	                                        '\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0'
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
	                                { className: 'btn-white' },
	                                '\u67E5\u770B\u66F4\u591A'
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
	                                { className: 'btn-white' },
	                                '\u67E5\u770B\u66F4\u591A'
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
	                                { className: 'btn-white' },
	                                '\u67E5\u770B\u66F4\u591A'
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
	                                { className: 'btn-white' },
	                                '\u67E5\u770B\u66F4\u591A'
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
	                                { className: 'btn-white' },
	                                '\u67E5\u770B\u66F4\u591A'
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
	                                { className: 'btn-white' },
	                                '\u67E5\u770B\u66F4\u591A'
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
	                                { className: 'btn-white' },
	                                '\u67E5\u770B\u66F4\u591A'
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
	                                { className: 'btn-white' },
	                                '\u67E5\u770B\u66F4\u591A1'
	                            )
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(13);

	var _alt2 = _interopRequireDefault(_alt);

	var _HomeActions = __webpack_require__(15);

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alt = __webpack_require__(14);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _alt2.default();

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("alt");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(13);

	var _alt2 = _interopRequireDefault(_alt);

	var _jquery = __webpack_require__(16);

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
/* 16 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'Test',

	    getInitialState: function getInitialState() {
	        return { value: "test" };
	    },
	    render: function render() {
	        var value = this.state.value;
	        return _react2.default.createElement(
	            _amazeuiTouch.Button,
	            { amStyle: 'primary' },
	            value
	        );
	    }
	});

/***/ }
/******/ ]);
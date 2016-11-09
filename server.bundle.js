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

	var _Home = __webpack_require__(10);

	var _Home2 = _interopRequireDefault(_Home);

	var _Server = __webpack_require__(18);

	var _Server2 = _interopRequireDefault(_Server);

	var _ServerInfo = __webpack_require__(19);

	var _ServerInfo2 = _interopRequireDefault(_ServerInfo);

	var _Require = __webpack_require__(20);

	var _Require2 = _interopRequireDefault(_Require);

	var _RequireInfo = __webpack_require__(21);

	var _RequireInfo2 = _interopRequireDefault(_RequireInfo);

	var _Tribe = __webpack_require__(22);

	var _Tribe2 = _interopRequireDefault(_Tribe);

	var _TribeInfo = __webpack_require__(23);

	var _TribeInfo2 = _interopRequireDefault(_TribeInfo);

	var _TribeAlbum = __webpack_require__(24);

	var _TribeAlbum2 = _interopRequireDefault(_TribeAlbum);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _App2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/server', component: _Server2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/server/info/:serverId', component: _ServerInfo2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/require', component: _Require2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/require/info/:requireId', component: _RequireInfo2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/tribe', component: _Tribe2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/info/:tribeId', component: _TribeInfo2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/tribe/album/:albumId', component: _TribeAlbum2.default })
	    )
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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _HomeStore = __webpack_require__(11);

	var _HomeStore2 = _interopRequireDefault(_HomeStore);

	var _HomeActions = __webpack_require__(14);

	var _HomeActions2 = _interopRequireDefault(_HomeActions);

	var _Header = __webpack_require__(16);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);

	    _createClass(Home, [{
	        key: 'setHeight',
	        value: function setHeight() {
	            console.info('myImg', this.refs);
	        }
	    }]);

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
	                _react2.default.createElement(
	                    _amazeuiTouch.Container,
	                    { scrollable: true, className: 'home' },
	                    _react2.default.createElement(_Header2.default, null),
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
	                                    _react2.default.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg', ref: 'myImg', onLoad: this.setHeight() })
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
	                                        _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
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
	                                                _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
	                                                '123'
	                                            ),
	                                            _react2.default.createElement(
	                                                _amazeuiTouch.Col,
	                                                null,
	                                                _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
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
	                                { className: 'btn-white' },
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
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '\u610F\u89C1\u53CD\u9988\u610F\u89C1\u53CD\u9988\u610F\u89C1\u53CD\u9988\u610F\u89C1\u53CD\u9988\u610F\u89C1\u53CD\u9988\u610F\u89C1\u53CD\u9988\u610F\u89C1\u53CD\u9988'
	                    )
	                )
	            );
	        }
	    }]);

	    return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(12);

	var _alt2 = _interopRequireDefault(_alt);

	var _HomeActions = __webpack_require__(14);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alt = __webpack_require__(13);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _alt2.default();

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("alt");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(12);

	var _alt2 = _interopRequireDefault(_alt);

	var _jquery = __webpack_require__(15);

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
/* 15 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _NavLink = __webpack_require__(17);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _amazeuiTouch = __webpack_require__(9);

	var _jquery = __webpack_require__(15);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	        _this.state = {
	            visible: false
	        };
	        return _this;
	    }

	    _createClass(Header, [{
	        key: 'openNotification',
	        value: function openNotification() {
	            this.setState({
	                visible: true
	            });
	        }
	    }, {
	        key: 'closeNotification',
	        value: function closeNotification() {
	            this.setState({
	                visible: false
	            });
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
	                                { action: '' },
	                                _react2.default.createElement(_amazeuiTouch.Field, { className: 'margin-0 padding-v-xs text-size-14',
	                                    placeholder: '\u4F17\u521B'
	                                })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Col,
	                            { cols: 1, className: 'padding-0 bgNone text-right' },
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
	                                    linkComponent: _NavLink2.default,
	                                    linkProps: {
	                                        to: '/',
	                                        onClick: this.onDismiss,
	                                        onlyActiveOnIndex: true
	                                    },
	                                    title: '\u9996\u9875'
	                                }),
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    linkComponent: _NavLink2.default,
	                                    linkProps: {
	                                        to: '/tribe',
	                                        onClick: this.onDismiss
	                                    },
	                                    title: '\u90E8\u843D'
	                                }),
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    linkComponent: _NavLink2.default,
	                                    linkProps: {
	                                        to: '/require',
	                                        onClick: this.onDismiss
	                                    },
	                                    title: '\u9700\u6C42'
	                                }),
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    linkComponent: _NavLink2.default,
	                                    linkProps: {
	                                        to: '/server',
	                                        onClick: this.onDismiss
	                                    },
	                                    title: '\u670D\u52A1'
	                                })
	                            )
	                        ),
	                        isClone: true }],
	                    rightNav: [{
	                        title: 'right'
	                    }],
	                    onAction: this.openNotification.bind(this),
	                    amStyle: 'dark' })
	            );
	        }
	    }]);

	    return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header = __webpack_require__(16);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                null,
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'server-tabs-list' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.Tabs,
	                        { activeKey: this.state.activeTab, onAction: this.handleAction, className: 'margin-0' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u4E2A\u4EBA', key: '1', className: 'padding-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                { className: 'margin-top-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List.Item,
	                                    {
	                                        title: '\u5973\u7235',
	                                        subTitle: '\u53D1\u884C\u516C\u53F8\uFF1A\u73AF\u7403\u5531\u7247',
	                                        href: 'server/info/01',
	                                        desc: '\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0\u670D\u52A1\u63CF\u8FF0',
	                                        target: '_blank'
	                                    },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { align: 'between' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: 'padding-0' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u4EA4\u6613\u6210\u529F'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: ' text-right' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u5317\u4EAC'
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List.Item,
	                                    {
	                                        title: '\u5973\u7235',
	                                        subTitle: '\u53D1\u884C\u516C\u53F8\uFF1A\u73AF\u7403\u5531\u7247',
	                                        href: 'server/info/01',
	                                        desc: '111',
	                                        target: '_blank'
	                                    },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { align: 'between' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: 'padding-0' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u4EA4\u6613\u6210\u529F'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: ' text-right' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u5317\u4EAC'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u5DE5\u4F5C\u5BA4', key: '2', className: 'padding-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                { className: 'margin-top-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List.Item,
	                                    {
	                                        title: '\u5973\u7235',
	                                        subTitle: '\u53D1\u884C\u516C\u53F8\uFF1A\u73AF\u7403\u5531\u7247',
	                                        href: 'server/info/01',
	                                        desc: '111',
	                                        target: '_blank'
	                                    },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { align: 'between' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: 'padding-0' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u4EA4\u6613\u6210\u529F'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: ' text-right' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u5317\u4EAC'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u4F01\u4E1A', key: '3', className: 'padding-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                { className: 'margin-top-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List.Item,
	                                    {
	                                        title: '\u5973\u7235',
	                                        subTitle: '\u53D1\u884C\u516C\u53F8\uFF1A\u73AF\u7403\u5531\u7247',
	                                        href: 'server/info/01',
	                                        desc: '111',
	                                        target: '_blank'
	                                    },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { align: 'between' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: 'padding-0' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u4EA4\u6613\u6210\u529F'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: ' text-right' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u5317\u4EAC'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            ),
	            this.props.children
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

	var _Header = __webpack_require__(16);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'ServerInfo',
	    render: function render() {
	        var serverId = this.props.params.serverId;

	        var img = _react2.default.createElement('img', { className: 'server-user-avatar', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' });
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
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                null,
	                _react2.default.createElement(_Header2.default, null),
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header = __webpack_require__(16);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'Require',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                null,
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'require-tabs-list' },
	                    _react2.default.createElement(
	                        _amazeuiTouch.Tabs,
	                        { activeKey: this.state.activeTab, onAction: this.handleAction, className: 'margin-0' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u4E2A\u4EBA', key: '1', className: 'padding-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                { className: 'margin-top-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List.Item,
	                                    {
	                                        title: '12345\u5143',
	                                        subTitle: '\u540D\u79F0',
	                                        href: '/require/info/01',
	                                        desc: '\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0',
	                                        target: '_blank'
	                                    },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { align: 'between' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: 'padding-0' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-6' },
	                                                '\u62DB\u52DF\u521B\u4F5C\u4EBA'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: ' text-right' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u5269\u4F5950\u5929'
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List.Item,
	                                    {
	                                        title: '\u5973\u7235',
	                                        subTitle: '\u53D1\u884C\u516C\u53F8\uFF1A\u73AF\u7403\u5531\u7247',
	                                        href: '/require/info/01',
	                                        desc: '\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0\u9700\u6C42\u63CF\u8FF0',
	                                        target: '_blank'
	                                    },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { align: 'between' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: 'padding-0' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-6' },
	                                                '\u5F81\u96C6\u4F5C\u54C1'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: ' text-right' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u5269\u4F5950\u5929'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u5DE5\u4F5C\u5BA4', key: '2', className: 'padding-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                { className: 'margin-top-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List.Item,
	                                    {
	                                        title: '\u5973\u7235',
	                                        subTitle: '\u53D1\u884C\u516C\u53F8\uFF1A\u73AF\u7403\u5531\u7247',
	                                        href: '/require/info/01',
	                                        desc: '111',
	                                        target: '_blank'
	                                    },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { align: 'between' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: 'padding-0' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-6' },
	                                                '\u4EA4\u6613\u6210\u529F'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: ' text-right' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u5317\u4EAC'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _amazeuiTouch.Tabs.Item,
	                            { title: '\u4F01\u4E1A', key: '3', className: 'padding-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                { className: 'margin-top-0' },
	                                _react2.default.createElement(
	                                    _amazeuiTouch.List.Item,
	                                    {
	                                        title: '\u5973\u7235',
	                                        subTitle: '\u53D1\u884C\u516C\u53F8\uFF1A\u73AF\u7403\u5531\u7247',
	                                        href: '/require/info/01',
	                                        desc: '111',
	                                        target: '_blank'
	                                    },
	                                    _react2.default.createElement(
	                                        _amazeuiTouch.Grid,
	                                        { align: 'between' },
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: 'padding-0' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-6' },
	                                                '\u4EA4\u6613\u6210\u529F'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            _amazeuiTouch.Col,
	                                            { cols: 2, className: ' text-right' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'text-size-12 text-color-4' },
	                                                '\u5317\u4EAC'
	                                            )
	                                        )
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _amazeuiTouch = __webpack_require__(9);

	var _Header = __webpack_require__(16);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'RequireInfo',
	    render: function render() {
	        var serverId = this.props.params.serverId;

	        var img = _react2.default.createElement('img', { className: 'require-user-avatar', width: '44', height: '44', src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' });
	        var tit = _react2.default.createElement(
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
	        );
	        var btn = _react2.default.createElement(
	            'div',
	            { className: 'require-user-tag' },
	            '\u5173\u6CE8'
	        );
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true },
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'bgF require-info-user' },
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
	                            { className: 'padding-v-xs', align: 'left' },
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(16);

	var _Header2 = _interopRequireDefault(_Header);

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
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, className: 'tribe' },
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(
	                    _amazeuiTouch.List,
	                    { className: 't-index-list' },
	                    albums.map(function (album, i) {
	                        return _react2.default.createElement(_amazeuiTouch.List.Item, _extends({}, album, {
	                            target: '_blank',
	                            media: _react2.default.createElement('img', { src: album.media })
	                            //href={i === 0 ? null : album.href}
	                            , key: i
	                        }));
	                    })
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

	var _Header = __webpack_require__(16);

	var _Header2 = _interopRequireDefault(_Header);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var albums = {
	    title: '原画部落',
	    media: 'http://lorempixel.com/160/160/people/',
	    subTitle: '123456',
	    desc: '一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介'
	};
	var listName = ["原画CG部落规定", "原画硬件设备：手绘板的参数调整", "别停笔，一直画", "【重要通知】关于最近删帖状况解释"];

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
	    displayName: 'TribeInfo',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, className: 'tribe' },
	                _react2.default.createElement(_Header2.default, null),
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
	                        //title={tit}
	                    }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'tirbe-info-tab' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            '\u65CF\u5458'
	                        ),
	                        _react2.default.createElement('hr', null),
	                        _react2.default.createElement(
	                            'a',
	                            { href: '/tribe/album/01' },
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
	                                    media: img
	                                    //after={btn}
	                                    , title: tit
	                                }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'padding-h margin-v-xs' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'text-size-15 text-color-3 font-weight' },
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
	                                        _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
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
	                                                _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
	                                                '123'
	                                            ),
	                                            _react2.default.createElement(
	                                                _amazeuiTouch.Col,
	                                                null,
	                                                _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
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
	                        { className: 'border-d7d7d7 bgF margin-top-sm' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Group,
	                            { noPadded: true, className: 'margin-v-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                null,
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    media: img
	                                    //after={btn}
	                                    , title: tit
	                                }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'padding-h margin-v-xs' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'text-size-15 text-color-3 font-weight' },
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
	                                        _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
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
	                                                _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
	                                                '123'
	                                            ),
	                                            _react2.default.createElement(
	                                                _amazeuiTouch.Col,
	                                                null,
	                                                _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
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
	                        { className: 'border-d7d7d7 bgF margin-top-sm' },
	                        _react2.default.createElement(
	                            _amazeuiTouch.Group,
	                            { noPadded: true, className: 'margin-v-0' },
	                            _react2.default.createElement(
	                                _amazeuiTouch.List,
	                                null,
	                                _react2.default.createElement(_amazeuiTouch.List.Item, {
	                                    media: img
	                                    //after={btn}
	                                    , title: tit
	                                }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'padding-h margin-v-xs' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'text-size-15 text-color-3 font-weight' },
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
	                                        _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
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
	                                                _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
	                                                '123'
	                                            ),
	                                            _react2.default.createElement(
	                                                _amazeuiTouch.Col,
	                                                null,
	                                                _react2.default.createElement('span', { className: 'icon icon-back text-size-12' }),
	                                                '123'
	                                            )
	                                        )
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(16);

	var _Header2 = _interopRequireDefault(_Header);

	var _amazeuiTouch = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var albumList = [{
	    img: "http://lorempixel.com/160/160/people/",
	    name: "相册名称"
	}, {
	    img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    name: "相册2"
	}, {
	    img: "http://lorempixel.com/128/128/people/",
	    name: "相册3"
	}, {
	    img: "http://lorempixel.com/160/160/people/",
	    name: "相册4"
	}, {
	    img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    name: "相册5"
	}, {
	    img: "http://lorempixel.com/128/128/people/",
	    name: "相册6"
	}, {
	    img: "http://lorempixel.com/160/160/people/",
	    name: "相册7"
	}, {
	    img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
	    name: "相册8"
	}, {
	    img: "http://lorempixel.com/128/128/people/",
	    name: "相册9"
	}];

	exports.default = _react2.default.createClass({
	    displayName: 'TribeAlbum',
	    render: function render() {
	        return _react2.default.createElement(
	            _amazeuiTouch.View,
	            null,
	            _react2.default.createElement(
	                _amazeuiTouch.Container,
	                { scrollable: true, className: 'tribe' },
	                _react2.default.createElement(_Header2.default, null)
	            )
	        );
	    }
	});

/***/ }
/******/ ]);
# 首先组织项目结构 #
    your project
		|--app
    		|--components
      			|--App.js
  		|--build
    		|--bundle.js(该文件是webpack打包后生成的)
		|index.js
		|--index.html	

	# 需要的依赖包 #
	react								 
	react-dom							 
	react-addons-css-transition-group	 
	react-router	
	if-env						 
	……

	webpack
	webpack-dev-server
	babel-loader
	babel-core
	babel-preset-es2015
	babel-preset-react
	css-loader
	amazeui-touch
	file-loader
	url-loader
	node-sass
	sass-loader
	style-loader
	……


# start #

	## npm init根据提示输入内容并创建package.json文件，然后依次输入 ##

	npm install react react-dom --save

	npm install webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev

	

	## 根目录创建webpack.config.js ##
	module.exports = {
	    entry: './index.js',
	    output: {
	        filename: 'build/bundle.js',
	        publicPath: ''
	    },
	    module: {
	        loaders: [
	            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
	        ]
	    }
	}
	
	
	## 修改package.json ##
	"scripts": {
	    "build": "webpack",
	    "start": "webpack-dev-server --inline --content-base ."
	  }

	## 修改index.html、index.js、app.js ##
	/index.js

		import React from 'react'
		import { render } from 'react-dom'
		import App from './app/components/App'
		render(<App/>, document.getElementById('app'))

	/app/components/app.js

		import React from 'react'
		export default React.createClass({
		    render() {
		        return <div>Hello, World!!!</div>
		    }
		})

	/index.html

		<!DOCTYPE html>
		<html>
		    <head>
		        <meta charset="utf-8">
			    <meta http-equiv="X-UA-Compatible" content="IE=edge">
			    <meta name="description" content="">
			    <meta name="keywords" content="">
			    <meta name="viewport" content="width=device-width,initial-scale=1">
			    <title>vmaking</title>
			    <meta name="renderer" content="webkit">
		    </head>
		    <body>
		        <div id="app"></div>
		        <script src="build/bundle.js"></script>
		    </body>
		</html>


	## 运行`webpack` 然后运行 `npm run start`打开浏览器http://localhost:8080/访问 出现Hello, World!!!##

# 添加react-router #

	npm install react-router --save

	**/index.js**

		import React from 'react'
		import { render } from 'react-dom'
		import { Router, browserHistory } from 'react-router'
		import routes from './app/components/routes'
		
		render(
		    <Router routes={routes} history={browserHistory}/>,
		    document.getElementById('app')
		)

	**/app/components/routes.js**
		
		import React from 'react'
		import { Route, IndexRoute } from 'react-router'
		import App from './App'
		import Home from './Home'
		import Test from './Test'
		
		module.exports = (
		  <Route path="/" component={App}>
		    <IndexRoute component={Home}/>
		    <Route path="/test" component={Test}/>
		  </Route>
		)

	**/app/components/App.js**

		import React from 'react'
		import NavLink from './NavLink'
		
		export default React.createClass({
		    render() {
		        return (
		            <div>
		                <h1>vmaking Testing</h1>
		                <ul role="nav">
		                    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
		                    <li><NavLink to="/test">Test</NavLink></li>
		                </ul>
		                {this.props.children}
		            </div>
		        )
		    }
		})

	**/app/components/NavLink.js**
	
		import React from 'react'
		import { Link } from 'react-router'
		
		export default React.createClass({
		  render() {
		    return <Link {...this.props} activeClassName="active"/>
		  }
		})

	**/app/components/Home.js**
		
		import React from 'react'
		export default React.createClass({
		    getInitialState: function(){
		        return {value:"Home"}
		    },
		    render() {
		        var value = this.state.value;
		        return <div>{value}</div>
		    }
		})

	**/app/components/Test.js**

		import React from 'react'
		import { Route, IndexRoute } from 'react-router'
		import App from './App'
		import Home from './Home'
		import Test from './Test'
		
		module.exports = (
		  <Route path="/" component={App}>
		    <IndexRoute component={Home}/>
		    <Route path="/test" component={Test}/>
		  </Route>
		)


		
	**到此react-router添加成功；**

 

# 准备加载 UI组件amazeui-touch #

	**安装和设置加载器**

	Amaze UI Touch 使用了 React CSS Transition Group add-on，需安装react-addons-css-transition-group

	npm install react-addons-css-transition-group --save

	npm install amazeui-touch css-loader style-loader sass-loader node-sass file-loader url-loader --save-dev
	
	在webpack.config.js loaders模块中添加sass
		module.exports = {
		    entry: './index.js',
		    output: {
		        path: 'build',         //打包文件存放的绝对路径
		        filename: 'bundle.js',  //打包后的文件名
		        publicPath: '/'         //网站运行时的访问路径
		    },
		    module: {
		        loaders: [
		            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
		            {test: /\.scss$/, loader: "style-loader!css-loader!sass"},
		            {test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,loader: 'url?prefix=font/&limit=10000'}
		        ]
		    }
		}

	配置package.json

		"scripts": {
		    "build": "webpack",
		    "start": "webpack-dev-server --devtool eval --progress --colors --watch --inline  --content-base build/ --history-api-fallback"
		  }
		（需将index.html放在build目录下）

	use

		|--index.js

			import './app/stylesheets/app.scss'

		|--app/stylesheets/app.scss

			// 覆盖字体路径变量，以防止编译出错
			$ratchicons-path: "../../node_modules/amazeui-touch/fonts/";
			@import "../../node_modules/amazeui-touch/scss/amazeui.touch.scss";

		|--app/components/test.js

			import React from 'react'
			import {
			    Button,
			} from 'amazeui-touch';
			
			export default React.createClass({
			    getInitialState: function(){
			        return {value:"test1"}
			    },
			    render() {
			        var value = this.state.value;
			        return <Button amStyle="primary">{value}</Button>
			    }
			})

	
	**到此amazeui-touch添加成功；**

# 部署 #

	新建webpack.server.config.js

	|--webpack.server.config.js

		var fs = require('fs')
		var path = require('path')
		
		module.exports = {
		  entry: path.resolve(__dirname, 'server.js'),
		  output: {
		    filename: 'server.bundle.js'
		  },
		  target: 'node',
		  // keep node_module paths out of the bundle
		  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		    'react-dom/server'
		  ]).reduce(function (ext, mod) {
		    ext[mod] = 'commonjs ' + mod
		    return ext
		  }, {}),
		  node: {
		    __filename: false,
		    __dirname: false
		  },
		  module: {
		    loaders: [
		      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
		      {test: /\.scss$/, loader: "style-loader!css-loader!sass"},
		      {test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,loader: 'url?prefix=font/&limit=10000'}
		    ]
		  }
		}

	|--package.json

		"scripts": {
		    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
		    "start:dev": "webpack-dev-server --inline --content-base build/ --history-api-fallback",
		    "start:prod": "npm run build && node server.bundle.js",
		    "build:client": "webpack",
		    "build:server": "webpack --config webpack.server.config.js",
		    "build": "npm run build:client && npm run build:server"
		  }
	
	|server.js

		import express from 'express'
		import path from 'path'
		import compression from 'compression'
		import React from 'react'
		import { renderToString } from 'react-dom/server'
		import { match, RouterContext } from 'react-router'
		import routes from './app/components/routes'
		
		var app = express()
		
		app.use(compression())
		
		// serve our static stuff like index.css
		app.use(express.static(path.join(__dirname, 'build'), {index: false}))
		
		// send all requests to index.html so browserHistory works
		app.get('*', (req, res) => {
		  match({ routes, location: req.url }, (err, redirect, props) => {
		    if (err) {
		      res.status(500).send(err.message)
		    } else if (redirect) {
		      res.redirect(redirect.pathname + redirect.search)
		    } else if (props) {
		      // hey we made it!
		      const appHtml = renderToString(<RouterContext {...props}/>)
		      res.send(renderPage(appHtml))
		    } else {
		      res.status(404).send('Not Found')
		    }
		  })
		})
		
		function renderPage(appHtml) {
		  return `
		    <!DOCTYPE html>
		    <html>
		    <head>
		      <meta charset=utf-8/>
		      <meta charset="utf-8">
		      <meta http-equiv="X-UA-Compatible" content="IE=edge">
		      <meta name="description" content="">
		      <meta name="keywords" content="">
		      <meta name="viewport" content="width=device-width,initial-scale=1">
		      <title>vmaking</title>
		      <meta name="renderer" content="webkit">
		    </head>
		    <body>
		      <div id=app>${appHtml}</div>
		      <script src="/bundle.js"></script>
		    </body>
		    </html>
		   `
		}
		
		var PORT = process.env.PORT || 8080
		app.listen(PORT, function() {
		  console.log('Production Express server running at localhost:' + PORT)
		})




# 参考文档 #

	**webpack**
	http://webpack.github.io/docs/tutorials/getting-started/	

	**react-router**
	https://github.com/reactjs/react-router-tutorial/tree/master/lessons		
	
	**amazeui-touch**
	http://t.amazeui.org/#/docs/getting-started?_k=fa51ar
	
	**es6**
	http://es6.ruanyifeng.com/#README



import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Server from './components/Server'
import Require from './components/Require'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/server" component={Server}/>
            <Route path="/require" component={Require}/>
        </Route>
    </Router>
)

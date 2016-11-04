import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Server from './components/Server'
import ServerInfo from './components/ServerInfo'
import Require from './components/Require'
import RequireInfo from './components/RequireInfo'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/server" component={Server}/>
            <Route path="/server/info/:serverId" component={ServerInfo}/>
            <Route path="/require" component={Require}/>
            <Route path="/require/info/:requireId" component={RequireInfo}/>
        </Route>
    </Router>
)

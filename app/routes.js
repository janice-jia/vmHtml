import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Server from './components/Server'
import ServerInfo from './components/ServerInfo'
import Require from './components/Require'
import RequireInfo from './components/RequireInfo'
import Tribe from './components/Tribe'
import TribeInfo from './components/TribeInfo'
import TribeAlbum from './components/TribeAlbum'
import Search from './components/Search'


function requireCredentials(nextState, replace, next) {
    //const query = nextState.location.query
    console.info('nextState.location',nextState);
    const searchVal = nextState.location.state.searchVal;
    console.info('searchVal',searchVal);
    next();
}

module.exports = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/server" component={Server}/>
            <Route path="/server/info/:serverId" component={ServerInfo}/>
            <Route path="/require" component={Require}/>
            <Route path="/require/info/:requireId" component={RequireInfo}/>
            <Route path="/tribe" component={Tribe}/>
            <Route path="/tribe/info/:tribeId" component={TribeInfo}/>
            <Route path="/tribe/album/:albumId" component={TribeAlbum}/>
            <Route path="/search"  component={Search} onEnter={requireCredentials}/>
        </Route>
    </Router>
)

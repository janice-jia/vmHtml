import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Server from './components/Server'
import ServerInfo from './components/ServerInfo'
import Require from './components/Require'
import RequireInfo from './components/RequireInfo'
import Search from './components/Search'
import Tribe from './components/Tribe'
import TribeInfo from './components/TribeInfo'
import TribeAlbum from './components/TribeAlbum'
import TribeAlbumInfo from './components/TribeAlbumInfo'
import TribeImgCom from './components/TribeImgCom'
import TribeTopic from './components/TribeTopic'
import TribePerson from './components/TribePerson'


module.exports = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/Login" component={Login}/>
            <Route path="/server" component={Server}/>
            <Route path="/server/info/:serverId" component={ServerInfo}/>
            <Route path="/require" component={Require}/>
            <Route path="/require/info/:requireId" component={RequireInfo}/>
            <Route path="/search"  component={Search}/>
            <Route path="/tribe" component={Tribe}/>
            <Route path="/tribe/info/:tribeId" component={TribeInfo}/>
            <Route path="/tribe/album/:albumId" component={TribeAlbum}/>
            <Route path="/tribe/album/:tribeId" component={TribeAlbum}/>
            <Route path="/tribe/album/info/:albumId" component={TribeAlbumInfo}/>
            <Route path="/tribe/album/img/:imgId" component={TribeImgCom}/>
            <Route path="/tribe/topic/01" component={TribeTopic}/>
            <Route path="/tribe/person" component={TribePerson}/>
        </Route>
    </Router>
)

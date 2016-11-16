import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './page/App'
import Register from './page/Register'
import Login from './page/Login'
import Home from './page/Home'
import Server from './page/Server'
import ServerInfo from './page/ServerInfo'
import Require from './page/Require'
import RequireInfo from './page/RequireInfo'
import Search from './page/Search'
import Tribe from './page/Tribe'
import TribeInfo from './page/Tribeinfo'
import TribeAlbum from './page/TribeAlbum'
import TribeAlbumInfo from './page/TribeAlbumInfo'
import TribeImgCom from './page/TribeImgCom'
import TribeTopic from './page/TribeTopic'
import TribePerson from './page/TribePerson'


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

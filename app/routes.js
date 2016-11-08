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
import TribeAlbumInfo from './components/TribeAlbumInfo'
import TribeImgMsg from './components/TribeImgMsg'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/server" component={Server}/>
            <Route path="/server/info/:serverId" component={ServerInfo}/>
            <Route path="/require" component={Require}/>
            <Route path="/require/info/:requireId" component={RequireInfo}/>
            <Route path="/tribe" component={Tribe}/>
            <Route path="/tribe/info/:tribeId" component={TribeInfo}/>
            <Route path="/tribe/album/:tribeId" component={TribeAlbum}/>
            <Route path="/tribe/album/info/:albumId" component={TribeAlbumInfo}/>
            <Route path="/tribe/album/img/:imgId" component={TribeImgMsg}/>
        </Route>
    </Router>
)

import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './page/App'

//register  module
import Register from './page/Register'

//login  module
import Login from './page/Login'

//ForgetPwd module
import ForgetPwd from './page/ForgetPwd'

//user  module
import User from './page/User'
import UserInfo from './page/UserInfo'
import UserServer from './page/UserServer'
import UserRequire from './page/UserRequire'

//home  module
import Home from './page/Home'

//server  module
import Server from './page/Server'
import ServerInfo from './page/ServerInfo'

//require  module
import Require from './page/Require'
import RequireInfo from './page/RequireInfo'

//search  module
import Search from './page/Search'

//tribe  module
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
            <Route path="/login" component={Login}/>
            <Route path="/forgetpwd" component={ForgetPwd}/>

            <Route path="/user/:userId" component={User}/>
            <Route path="/user/info/:userId" component={UserInfo}/>
            <Route path="/user/server/:userId" component={UserServer}/>
            <Route path="/user/require/:userId" component={UserRequire}/>

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
            <Route path="/tribe/topic/:topicId" component={TribeTopic}/>
            <Route path="/tribe/person" component={TribePerson}/>
        </Route>
    </Router>
)

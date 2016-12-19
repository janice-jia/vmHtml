import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './page/App'

//register  module
import Register from './page/Register'
import Agreement from './page/Agreement'

//login  module
import Login from './page/Login'

//ForgetPwd module
import ForgetPwd from './page/ForgetPwd'

//user  module
import User from './page/User'
import UserInfo from './page/UserInfo'
import UserServer from './page/UserServer'
import UserRequire from './page/UserRequire'
import UserTribe from './page/UserTribe'
import UserTopic from './page/UserTopic'

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
import TribeInfo from './page/TribeInfo'
import TribeAlbum from './page/TribeAlbum'
import TribeAlbumInfo from './page/TribeAlbumInfo'
import TribeImgCom from './page/TribeImgCom'
import TribeTopic from './page/TribeTopic'
import TribeMember from './page/TribeMember'


module.exports = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/agreement" component={Agreement}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgetpwd" component={ForgetPwd}/>

            <Route path="/user/:uid" component={User}/>
            <Route path="/user/info/:uid" component={UserInfo}/>
            <Route path="/user/server/:uid" component={UserServer}/>
            <Route path="/user/require/:uid" component={UserRequire}/>
            <Route path="/user/tribe/:uid" component={UserTribe}/>
            <Route path="/user/topic/:uid" component={UserTopic}/>


            <Route path="/server" component={Server}/>
            <Route path="/server/info/:serverId" component={ServerInfo}/>

            <Route path="/require" component={Require}/>
            <Route path="/require/info/:requireId" component={RequireInfo}/>

            <Route path="/search"  component={Search}/>

            <Route path="/tribe" component={Tribe}/>
            <Route path="/tribe/info/:tribeId" component={TribeInfo}/>
            <Route path="/tribe/album/:albumId" component={TribeAlbum}/>
            <Route path="/tribe/album/info/:albumId" component={TribeAlbumInfo}/>
            <Route path="/tribe/album/img/:imgId" component={TribeImgCom}/>
            <Route path="/tribe/topic/:topicId" component={TribeTopic}/>
            <Route path="/tribe/member/:topicId" component={TribeMember}/>
        </Route>
    </Router>
)

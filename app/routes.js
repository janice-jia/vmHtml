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

//FeedBack module
import FeedBack from './page/FeedBack'

//Notice module
import Notice from './page/Notice'
import NoticeAttention from './page/NoticeAttention'
import NoticeRequire from './page/NoticeRequire'
import NoticeComment from './page/NoticeComment'
import NoticeSystem from './page/NoticeSystem'

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
import TribeList from './page/TribeList'
import TribeItem from './page/TribeItem'
import TribeInfo from './page/TribeInfo'
import TribeAlbum from './page/TribeAlbum'
import TribeAlbumInfo from './page/TribeAlbumInfo'
import TribeAlbumImgInfo from './page/TribeAlbumImgInfo'
import TribeVideo from './page/TribeVideo'
import TribeVideoInfo from './page/TribeVideoInfo'
import TribeNovel from './page/TribeNovel'
import TribeNovelInfo from './page/TribeNovelInfo'
import TribeComic from './page/TribeComic'
import TribeComicInfo from './page/TribeComicInfo'
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
            <Route path="/feedback" component={FeedBack}/>

            <Route path="/notice" component={Notice}/>
            <Route path="/notice/attention" component={NoticeAttention}/>
            <Route path="/notice/require" component={NoticeRequire}/>
            <Route path="/notice/comment" component={NoticeComment}/>
            <Route path="/notice/system" component={NoticeSystem}/>

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

            <Route path="/tribe/list" component={TribeList}/>
            <Route path="/tribe/item/:tribeId" component={TribeItem}/>
            <Route path="/tribe/info/:tribeId" component={TribeInfo}/>
            <Route path="/tribe/:tribeId/album/:tabId" component={TribeAlbum}/>
            <Route path="/tribe/:tribeId/album/info/:albumId" component={TribeAlbumInfo}/>
            <Route path="/tribe/album/img/:photoId" component={TribeAlbumImgInfo}/>
            <Route path="/tribe/:tribeId/video/:tabId" component={TribeVideo}/>
            <Route path="/tribe/video/info/:videoId" component={TribeVideoInfo}/>
            <Route path="/tribe/:tribeId/novel/:tabId" component={TribeNovel}/>
            <Route path="/tribe/novel/info/:novelId" component={TribeNovelInfo}/>
            <Route path="/tribe/:tribeId/comic/:tabId" component={TribeComic}/>
            <Route path="/tribe/comic/info/:comicId" component={TribeComicInfo}/>
            <Route path="/tribe/topic/:topicId" component={TribeTopic}/>
            <Route path="/tribe/member/:tribeId" component={TribeMember}/>
        </Route>
    </Router>
)

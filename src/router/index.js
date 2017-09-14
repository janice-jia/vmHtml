import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'

import News from '../components/News.vue'
import NewsInfo from '../components/NewsInfo.vue'

import RelatedInfo from '../components/RelatedInfo.vue'

import Content from '../components/Content.vue'
import ContentInfo from '../components/ContentInfo.vue'
import Album from '../components/Album.vue'

import Video from '../components/Video.vue'
import Series from '../components/Series.vue'
import SeriesInfo from '../components/SeriesInfo.vue'
import SeriesInfoShare from '../components/SeriesInfoShare.vue'
import Trivia from '../components/Trivia.vue'

import Characters from '../components/Characters.vue'
import CharactersInfo from '../components/CharactersInfo.vue'
import CommentList from '../components/CommentList.vue'

import Mine from '../components/Mine.vue'
import About from '../components/About.vue'
import Invite from '../components/Invite.vue'
import UserInfo from '../components/UserInfo.vue'

import Login from '../components/Login.vue'

import ForgotPwd from '../components/ForgotPwd.vue'
import ForgotPwd2 from '../components/ForgotPwd2.vue'

import Register from '../components/Register.vue'
import RegisterSteps1 from '../components/RegisterSteps1.vue'
import RegisterSteps2 from '../components/RegisterSteps2.vue'

import Feedback from '../components/Feedback.vue'

import Message from '../components/Message.vue'

import Setting from '../components/Setting.vue'

import ResetPwd from '../components/ResetPwd.vue'

import Welfare from '../components/Welfare.vue'
import WelfareInfo from '../components/WelfareInfo.vue'

import officialWeiboPath from '../assets/officialWeibo.jpg'
import officialWeChatPath from '../assets/officialWeChat.jpg'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            redirect: '/news',
            component: Home
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/news/info/:newsId',
            name: 'newsInfo',
            component: NewsInfo
        },
        {
            path: '/related/info/:contentId',
            name: 'relatedInfo',
            component: RelatedInfo
        },
        {
            name: 'newsCommentList',
            path: '/news/:newsId/comment/list',
            component: CommentList
        },
        {
            path: '/content',
            name: 'content',
            component: Content
        },
        {
            name: 'contentInfo',
            path: '/content/info/:contentId',
            component: ContentInfo
        },
        {
            name: 'contentAlbum',
            path: '/content/album/:contentId',
            component: Album
        },
        {
            name: 'contentCommentList',
            path: '/content/:contentId/comment/list',
            component: CommentList
        },
        {
            name: 'characters',
            path: '/characters',
            component: Characters
        },
        {
            name: 'charactersInfo',
            path: '/characters/info/:characterId',
            component: CharactersInfo
        },
        {
            name: 'charactersCommentList',
            path: '/character/:characterId/comment/list',
            component: CommentList
        },
        {
            name: 'characterAlbum',
            path: '/character/album/:characterId',
            component: Album
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: UserInfo
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/invite',
            name: 'invite',
            component: Invite
        },
        {
            path: '/official/weibo',
            name: 'officialWeibo',
            component: {template: '<div class="officialImg"><img src="' + officialWeiboPath + '" alt=""></div>'}
        },
        {
            path: '/official/weChat',
            name: 'officialWeChat',
            component: {template: '<div class="officialImg"><img src="' + officialWeChatPath + '" alt=""></div>'}
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: Feedback
        },
        {
            path: '/message',
            name: 'message',
            component: Message
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        },
        {
            path: '/setting/resetPwd',
            name: 'resetPwd',
            component: ResetPwd
        },
        {
            path: '/welfare',
            name: 'welfare',
            component: Welfare
        },
        {
            path: '/welfareInfo',
            name: 'welfareInfo',
            component: WelfareInfo
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/forgotPwd',
            name: 'forgotPwd',
            component: ForgotPwd
        },
        {
            path: '/forgotPwd2',
            name: 'forgotPwd2',
            component: ForgotPwd2
        },
        {
            path: '/register',
            name: 'register',
            redirect: '/register/steps/1',
            children: [
                {
                    path: '/register/steps/1',
                    name: 'registerSteps1',
                    component: RegisterSteps1
                },
                {
                    path: '/register/steps/2',
                    name: 'registerSteps2',
                    component: RegisterSteps2
                }
            ],
            component: Register
        },
        {
            path: '/video',
            name: 'video',
            component: Video
        },
        {
            path: '/video/series',
            name: 'series',
            component: Series
        },
        {
          path: '/video/series/info/:seriesId',
          name: 'seriesInfo',
          component: SeriesInfo
        },
        {
            path: '/video/series/info/:seriesId/:eid',
            name: 'seriesInfo',
            component: SeriesInfo
        },{
            path: '/video/series/share/:seriesId',
            name: 'seriesInfo',
            component: SeriesInfoShare
        },{
            path: '/video/series/share/:seriesId/:eid',
            name: 'seriesInfo',
            component: SeriesInfoShare
        },
        {
            name: 'seriesCommentList',
            path: '/video/series/:seriesId/comment/list',
            component: CommentList
        },
        {
            path: '/video/trivia/:episode',
            name: 'trivia',
            component: Trivia
        }
    ]
})

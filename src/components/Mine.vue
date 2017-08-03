<template>
  <div class="mine">
    <div class="userBg">
      <img :src="userInfo.bgImage" alt="" v-if="userInfo.bgImage"/>
      <img src="../assets/bg@2x.png" alt="" v-if="!userInfo.bgImage"/>
    </div>
    <div class="userInfo">
      <div class="userAvatar">
        <router-link :to="{name: 'userInfo'}">
          <img :src="userInfo.avatar" alt=""  v-show="userInfo.avatar"/>
          <img src="../assets/avatar.png" alt="" v-show="!userInfo.avatar"/>
        </router-link>
      </div>
      <p class="userName" v-show="isUser">
        <router-link :to="{name: 'userInfo'}">
          {{userInfo.nickName}}
          <img src="../assets/F.png" alt="" v-if="userInfo.gender == 'F'">
          <img src="../assets/M.png" alt="" v-if="userInfo.gender == 'M'">
        </router-link>
      </p>
      <p class="noUser" v-show="!isUser">
        <router-link to="login">点击登录/注册</router-link>
      </p>
      <p class="welfare">
        <router-link :to="{name: 'welfare'}">福利</router-link>
      </p>
    </div>
    <div class="mineMenu">
      <ul>
        <li class="message noBottomBorder"><router-link :to="{name: 'message'}">我的消息<badge v-show="messageCount.messageCount" :text="messageCount.messageCount"></badge></router-link></li>
      </ul>
    </div>
    <div class="mineMenu">
      <ul>
        <li class="about"><router-link :to="{name: 'about'}">关于</router-link></li>
        <li class="invite"><router-link :to="{name: 'invite'}">邀请好友</router-link></li>
        <!--<li class="score"><router-link to="/">评分</router-link></li>-->
        <li class="feedback"><router-link :to="{name: 'feedback'}">反馈</router-link></li>
        <li class="setting noBottomBorder"><router-link :to="{name: 'setting', query: {mobile: userInfo.mobile}}">设置</router-link></li>
      </ul>
    </div>
    <div style="margin-top: 19px; height: 1px;">&nbsp;</div>
  </div>
</template>

<script>
import publicFn from '../publicFn'
import {Badge} from 'vux'
export default {
    name: 'mine',
//    beforeRouteEnter (to, from, next) {
//        if (publicFn.isUser()) {
//            next()
//        } else {
//            next('/login')
//        }
//    },
    data () {
        return {
            userInfo: {},
            isUser: publicFn.isUser(),
            messageCount: {}
        }
    },
    components: {
        Badge
    },
    created () {
        if (this.isUser) {
            this.getUserInfo(publicFn.isUser())
            this.getMessageCount()
        }
    },
    methods: {
        getUserInfo (uid) {
            this.$http.get('/app/user/' + uid).then(function (data) {
                if (data) {
                    this.userInfo = data.body.data
//                    console.info('this.userInfo', data.body.data)
//                    console.info('this.userInfo', this.userInfo)
                }
            }, function (response) {
                return null
            })
        },
        getMessageCount () {
            this.$http.get('/app/message/' + publicFn.isUser() + '/count').then(function (data) {
                this.messageCount = data.body.data
            }, function (response) {
                console.info(response)
            })
        }
    }
}
</script>

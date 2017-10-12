<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox" :body-padding-top="!isHeader ? '46px' : '0'" :body-padding-bottom="isTabbar ? '55px' : '0'">
      <x-header slot="header"
                style="width:100%;position:absolute;left:0;top:0;z-index:100;"
                v-show="!isHeader"
                :left-options="leftOptions"
                :right-options="rightOptions"
                :title="appTitle"
      ><span slot="right" class="rightMenu" v-html="rightLink"></span></x-header>
      <transition>
        <router-view></router-view>
      </transition>

      <!--底部导航-->
      <tabbar icon-class="vux-center" v-show="isTabbar" slot="bottom">
        <tabbar-item class="content-icon" selected link="/news" :selected="route.path === '/news'">
          <img slot="icon" src="./assets/tab_information_btn.png">
          <img slot="icon-active" src="./assets/tab_information_btn_selected.png">
          <span slot="label">资讯</span>
        </tabbar-item>
        <tabbar-item link="/content/0" :selected="route.path === '/content'">
          <img slot="icon" src="./assets/tab_tribe_btn.png">
          <img slot="icon-active" src="./assets/tab_tribe_btn_selected.png">
          <span slot="label">专区</span>
        </tabbar-item>
        <tabbar-item link="/video" :selected="route.path === '/video'">
          <img slot="icon" src="./assets/video.png">
          <img slot="icon-active" src="./assets/video_selected.png">
          <span slot="label">视频</span>
        </tabbar-item>
        <tabbar-item link="/mine" :selected="route.path === '/mine'">
          <img slot="icon" src="./assets/tab_my_btn.png">
          <img slot="icon-active" src="./assets/tab_my_btn_selected.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import { ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'
  import { mapState } from 'vuex'

  export default {
      components: {
          ViewBox,
          XHeader,
          Tabbar,
          TabbarItem
      },
      computed: {
          ...mapState({
              route: state => state.route,
              path: state => state.route.path
          }),
          leftOptions () {
              return {
                  showBack: (this.route.name !== 'Home' && this.route.name !== 'news' && this.route.name !== 'video'),
                  backText: ''
              }
          },
          rightOptions () {
              return {
                  showMore: false
              }
          },
          rightLink () {
              if (this.route.path === '/login') return '<a href="/register"> 注册</a>'
              if (this.route.path === '/news') return '<a href="/welfare" class="home-welfare"></a>'
          },
          isHeader () {
              if (this.route.name === 'content') return true
              if (this.route.path === '/characters') return true
              if (this.route.path === '/mine') return true
              if (this.route.name === 'resetPwd') return true
              if (this.route.name === 'userInfo') return true
          },
          isTabbar () {
              if (this.route.path === '/') return true
              if (this.route.path === '/news') return true
              if (this.route.path === '/mine') return true
              if (this.route.name === 'content') return true
              if (this.route.path === '/characters') return true
              if (this.route.path === '/video') return true
          },
          appTitle () {
              if (this.route.path === '/') return '众创部落'
              if (this.route.name === 'news') return '众创部落'
              if (this.route.name === 'newsInfo') return '资讯详细'
              if (this.route.name === 'content') return '专区'
              if (this.route.name === 'contentAlbum') return '照片'
              if (this.route.name === 'characterAlbum') return '照片'
              if (this.route.name === 'mine') return '我的'
              if (this.route.name === 'feedback') return '反馈'
              if (this.route.name === 'message') return '消息'
              if (this.route.name === 'setting') return '设置'
              if (this.route.name === 'welfare') return '福利'
              if (this.route.name === 'welfareInfo') return '福利'
              if (this.route.name === 'login') return '登录'
              if (this.route.name === 'forgotPwd') return '忘记密码'
              if (this.route.name === 'forgotPwd2') return '忘记密码'
              if (this.route.name === 'register') return '注册'
              if (this.route.name === 'about') return '关于'
              if (this.route.name === 'invite') return '邀请好友'
              if (this.route.name === 'officialWeibo') return '官方微博'
              if (this.route.name === 'officialWeChat') return '官方微信公众号'
              if (this.route.name === 'video') return '视频'
              if (this.route.name === 'series') return '快看剧集'
              if (this.route.name === 'trivia' && this.route.params.episode == 2) return '花絮'
              if (this.route.name === 'trivia' && this.route.params.episode == 3) return '原创'
              if (this.route.name === 'trivia' && this.route.params.episode == 4) return '热门视频'
          }
      },
      data () {
          return {
              showMenu: false,
              currentRoute: window.location.pathname,
              paddingTop: '46px'
          }
      }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import "./styles/all";
</style>

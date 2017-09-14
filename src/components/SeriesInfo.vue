<template>
  <div class="seriesInfo">
    <div class="seriesPlay">
      <div class="prism-player" id="J_prismPlayer" style="position: absolute"></div>
    </div>
    <div class="seriesDesc">
      <div class="seriesInfo-tit">
        <p class="tit">{{videoDetails.title}} <router-link :to="{name:'series'}">简介</router-link></p>
        <p class="info">
          <span class="red">{{videoDetails.score}}分</span>
          <span class="dot">·</span>
          {{videoDetails.category}}
          <span class="dot">·</span>
          快看
          <span class="dot">·</span>
          {{videoDetails.playCount}}次播放
        </p>
        <p class="seriesInfo-comNum">{{videoDetails.comCount}}条评论</p>
      </div>
    </div>
    <div class="series-select" v-if="videoDetails.episode == 1">
      <div class="series-select-tit">
        选集
        <router-link :to="{name: 'series'}">{{videoDetails.updateDesc}}</router-link>
      </div>
      <div class="series-select-list">
        <scroller lock-y scrollbar-x  ref="scrollerStills">
          <div class="seriesList" id="seriesList">
            <div :class="{ hover: item.playEpi == index+1,seriesItem: true}" v-for="(item, index) in videoDetails.epiList">{{index+1}}</div>
          </div>
        </scroller>
      </div>
    </div>
    <div class="series-about">
      <div class="series-about-tit">
        相关花絮
        <router-link :to="{name:'home'}">更多</router-link>
      </div>
      <div class="trivia">
        <div class="triviaItem" v-for="(item, index) in videoDetails.recommends">
            <div class="triviaItemL">
              <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
                <img :src="item.cover" alt="">
              </router-link>
            </div>
            <div class="triviaItemR">
              <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
              <p class="color-1">{{item.title}}{{item.eid}}</p> <p class="color-2">发布时间：{{item.publishTime | getFormat}}</p>
              </router-link>
            </div>

        </div>

      </div>
    </div>




    <div class="contentInfo" ref="contentInfo">
      <!--评论-->
      <div class="app-newsInfoCom" style="margin: 0 10px;">
        评论
        <router-link :to="{name: 'seriesCommentList', params: {videoId: videoDetails.id}}" v-show="videoDetails.comCount">更多</router-link>
      </div>
      <div class="app-newsInfoList" style="margin: 0 10px;">
        <p class="nullCon" v-show="!videoDetails.comCount">内容为空</p>
        <ul>
          <li v-for="(item, index) in videoDetails.comments">
            <div class="app-newsInfoItem">
              <div class="app-newsInfoItemL">
                <img :src="item.avatar" alt="" />
              </div>
              <div class="app-newsInfoItemR">
                <div class="app-newsInfoItemR01">
                  <span class="user">{{item.userName}}</span>
                  <span class="reply" @click="replyCom(item)">
                        回复
                    </span>
                </div>
                <!--<div class="app-newsInfoItemR02">-->
                <!--{{item.createTime}}-->
                <!--</div>-->
                <div class="app-newsInfoItemR03">
                  <span v-show="item.commentId">回复 {{item.replyNickName}}:&nbsp;</span>
                  {{item.content}}
                </div>
                <div class="app-newsInfoItemR04">
                  <span class="time">{{item.createTime}}</span>
                  <span class="del" v-if="item.uid == uid"><a href="javascript:;" @click="delComment(item)">删除</a></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="app-newsInfoBtn" v-show="videoDetails.comCount" style="border-bottom: none">
        <router-link :to="{name: 'seriesCommentList', params: {videoId: videoDetails.id}}">全部评论{{videoDetails.comCount}} 条</router-link>
      </div>

    </div>
    <div style="height: 47px;"></div>
    <Comment :module="{name: 'video'}" ref="comment"></Comment>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Scroller } from 'vux'
  import Comment from './Comment.vue'
  import publicFn from '../publicFn'
  export default {
      components: { Scroller, Comment },
      name: 'series',
      data () {
          return {
              uid: publicFn.isUser(),
              videoDetails: {},
              replyComData: {}
          }
      },
      filters: {
        getFormat (time) {
          return publicFn.getFormat(time, '-')
        }
      },
      created () {
        this.getVideoDetails()
      },
      watch: {
        '$route' (to, from) {
          this.getVideoDetails()
        }
      },
      methods: {
        getVideoDetails () {
          var str = '/app/video/details?id=' + this.$route.params.seriesId
          if(this.$route.params.eid){
              str = '/app/video/details?id=' + this.$route.params.seriesId + '&eid=' + this.$route.params.eid
          }
          this.$http.get(str).then(function (data) {
            if (data.body.data) {
              this.videoDetails = data.body.data
            }
            let player = new prismplayer({
              id: 'J_prismPlayer',
              width: '100%',
              source: this.videoDetails.SDUrl,
              cover: this.videoDetails.cover,
              playsinline:true,
              autoplay: false,
              isLive:false,
              controlBarVisibility:"always",
              useH5Prism:false,
              useFlashPrism:false,
              skinLayout:
                [{"name":"controlBar","align":"blabs","x":0,"y":0,"children":
                [{"name":"progress","align":"tlabs","x":0,"y":0},
                {"name":"playButton","align":"tl","x":15,"y":26},
                {"name":"fullScreenButton","align":"tr","x":20,"y":25},
                {"name":"timeDisplay","align":"tl","x":10,"y":24},
                {"name":"setButton","align":"tr","x":20,"y":25},
                {"name":"streamButton","align":"tr","x":20,"y":23}]},
                {"name":"fullControlBar","align":"tlabs","x":0,"y":0,"children":[{"name":"fullTitle","align":"tl","x":25,"y":6},
                {"name":"fullNormalScreenButton","align":"tr","x":24,"y":13},
                {"name":"fullTimeDisplay","align":"tr","x":10,"y":12},
                {"name":"fullZoom","align":"cc"}]}
              ]
            });
          }, function (response) {
            console.info(response)
          })
        },
        replyCom (data) {
          this.replyComData = {
            id: data.id,
            userName: data.userName
          }
          this.$refs.comment.commentFocus(this.replyComData)
        },
        delComment(delInfo){
          const _this = this
          this.$vux.confirm.show({
            // 组件除show外的属性
            content: '确定删除吗？',
            name: '',
            onCancel () {
            },
            onConfirm () {
              _this.$http.delete('/app/video/comments/delete', {body: {
                "id": delInfo.id,
                "uid": _this.uid
              }}).then(function (data) {
                if (data.body.status) {
                  this.$router.go(0);
                }else{
                  this.$vux.alert.show({
                    title: '',
                    content: data.body.msg,
                    buttonText: '关闭'
                  })
                  setTimeout(() => {
                    this.$vux.alert.hide()
                  }, 2000)
                }
              }, function (response) {
                console.info(response)
              })
            }
          })
        }
      }
  }
</script>


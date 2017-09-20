<template>
  <div class="seriesInfo">
    <div class="seriesPlay">
      <div class="prism-player" id="J_prismPlayer" style="position: absolute"></div>
    </div>
    <div class="series-select" v-if="videoDetails.episode == 1">
      <div class="seriesDescript-tit">
        <p class="tit">选集
        <router-link :to="{name:'seriesInfo', params: {seriesId:videoDetails.id}}">
          <img src="../assets/video_closed_btn.png" alt="">
        </router-link>
        </p>
      </div>
      <div class="seriesList">
        <grid :rows="6">
          <grid-item :class="{new: item.isNew}" v-for="(item, index) in videoDetails.epiList" :key="index">
            <span class="newIcon"></span>
            <span :class="{'grid-center': true, hover: (videoDetails.playEpi==0 ? videoDetails.playEpi=1 : videoDetails.playEpi = videoDetails.playEpi) == index+1}">
              <router-link :to="{name:'seriesInfo1', params: {seriesId: videoDetails.id, eid: item.eid}}">
                {{index+1}}
              </router-link>
            </span>
          </grid-item>
        </grid>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Scroller, Grid, GridItem  } from 'vux'
  import Comment from './Comment.vue'
  import publicFn from '../publicFn'
  export default {
      components: { Scroller, Comment, Grid, GridItem },
      name: 'seriesEpiList',
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


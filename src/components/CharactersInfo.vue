<template>
  <div>
    <div class="charactersInfo">
      <div class="charactersInfoConBox">
        <div class="charactersInfoCon" :style="{backgroundImage: 'url(' + charactersInfo.avatar + ')'}">
          <!--<img :src="charactersInfo.avatar" alt="">-->
          <p class="hot"><span>{{charactersInfo.hot | thousandFilter}}</span></p>
          <p class="name">{{charactersInfo.name}}</p>
          <p class="tag">
            <span v-for="(item, index) in charactersInfo.lables">
              {{item.content}}
              <span v-show="index < charactersInfo.lables.length-1">/</span>
            </span>
          </p>
          <p class="signIn" v-show="charactersInfo.isCheckIn" ></p>
          <p class="signIn-select" v-show="!charactersInfo.isCheckIn" @click="changeCheckIn"></p>
        </div>
      </div>

      <!--剧照-->
      <div class="app-newsInfoCom" style="margin: 0 10px;">
        剧照
      </div>
      <div class="stills">
        <p class="nullCon" v-show="!charactersInfo.stills">内容为空</p>
        <scroller lock-y scrollbar-x  ref="scrollerStills" v-show="charactersInfo.stills">
          <div class="stillsList" id="stillsList">
            <div class="stillsItem" v-for="item in charactersInfo.stills">
              <img :src="item.image" alt="">
            </div>
            <div class="stillsItem">
              <router-link :to="{name: 'characterAlbum', params: {characterId: charactersInfo.id}}">查<br/>看<br/>更<br/>多</router-link>
            </div>
          </div>
        </scroller>
      </div>

      <!--代表作-->
      <div class="app-newsInfoCom" style="margin: 0 10px;">
        代表作
      </div>
      <div class="masterpiece">
        <p class="nullCon" v-show="!charactersInfo.masterpiece">内容为空</p>
        <scroller lock-y scrollbar-x  ref="scrollerMasterpiece">
          <div class="masterpieceList" id="masterpieceList" v-show="charactersInfo.masterpiece">
            <div class="masterpieceItem" v-for="item in charactersInfo.masterpiece">
              <img :src="item.cover" alt="">
            </div>
          </div>
        </scroller>
      </div>
    </div>
    <div class="contentInfo" ref="contentInfo">
        <!--评论-->
        <div class="app-newsInfoCom" style="margin: 0 10px;">
          评论
        </div>
        <div class="app-newsInfoList" style="margin: 0 10px;">
          <p class="nullCon" v-show="!charactersInfo.comments">内容为空</p>
          <ul>
            <li v-for="(item, index) in charactersInfo.comments">
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
        <div class="app-newsInfoBtn" v-show="charactersInfo.commentCount" style="border-bottom: none">
          <router-link :to="{name: 'charactersCommentList'}">全部评论{{charactersInfo.commentCount}} 条</router-link>
        </div>

        <!--相关资讯-->
        <div class="app-newsInfoCom" style="margin: 0 10px;">
          相关资讯
        </div>
        <div class="relatedInfos">
          <p class="nullCon" v-show="!charactersInfo.relatedInfos">内容为空</p>
          <flexbox class="relatedInfosItem" v-for="item in charactersInfo.relatedInfos" key="index">
            <flexbox-item :span="2/6" class="image">
              <router-link :to="{ name: 'newsInfo', params: { newsId: item.id }}">
                <img :src="item.image" alt="">
              </router-link>
            </flexbox-item>
            <flexbox-item>
              <router-link :to="{ name: 'newsInfo', params: { newsId: item.id }}">
                <p class="title">{{item.title}}</p>
                <p class="publishTime">{{item.publishTime | getFormat}}</p>
              </router-link>
            </flexbox-item>
          </flexbox>
        </div>

    </div>
    <Comment :module="{name: 'character'}" ref="comment"></Comment>
  </div>
</template>


<script type="text/ecmascript-6">
import publicFn from '../publicFn'
import {Flexbox, FlexboxItem, Scroller} from 'vux'
import Comment from './Comment.vue'
export default {
    name: 'charactersInfo',
    components: {
        Flexbox,
        FlexboxItem,
        Scroller,
        Comment
    },
    data () {
        return {
            uid: publicFn.isUser(),
            charactersInfo: {},
            stillLength: 0,
            commetnTotalItems: 0,
            replyComData: {}
        }
    },
    created () {
        if (this.$route.params.characterId) {
            this.getCharactersInfo(this.$route.params.characterId)
        }
    },
    methods: {
        /*
         *获取专区人物详细
         */
        getCharactersInfo (characterId) {
            let urlStr = '/app/character/' + characterId
            if (publicFn.isUser()) {
                urlStr = '/app/character/' + characterId + '/?uid=' + publicFn.isUser()
            }
            this.$http.get(urlStr).then(function (data) {
                if (data.body.data) {
                    this.charactersInfo = data.body.data
                    document.getElementById('stillsList').style.width = this.charactersInfo.stills ? (this.charactersInfo.stills.length + 1) * '110' + 10 + 'px' : ''
                    document.getElementById('masterpieceList').style.width = this.charactersInfo.masterpiece ? this.charactersInfo.masterpiece.length * '110' + 10 + 'px' : ''
                    this.$nextTick(() => {
                        this.$refs.scrollerStills.reset()
                        this.$refs.scrollerMasterpiece.reset()
                    })
                }
            }, function (response) {
                console.info(response)
            })
        },
        changeCheckIn () {
            if (publicFn.isUser()) {
                this.$http.post('/app/character/' + this.charactersInfo.id + '/checkin/' + publicFn.isUser()).then(function (data) {
                    if (data.body.status) {
                        this.charactersInfo.isCheckIn = !this.charactersInfo.isCheckIn
                    }
                }, function (response) {
                    console.info(response)
                })
            } else {
                this.$router.push({name: 'login', params: {jumpUrlName: this.$route.fullPath}})
            }
        },
        replyCom (data) {
            this.replyComData = {
                id: data.id,
                userName: data.userName
            }
            console.info('this', this.$refs.comment)
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
                    _this.$http.delete('/app/character/comment', {body: {
                      "characterId": delInfo.characterId,
                      "commentId": delInfo.id
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
    },
    filters: {
        getFormat (time) {
            return publicFn.getFormat(time)
        },
        getFromNow (time) {
            return publicFn.getFromNow(time)
        },
        thousandFilter (num) {
            return publicFn.thousandFilter(num)
        }
    }
}
</script>


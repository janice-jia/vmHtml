<template>
  <div class="commentList" ref="commentList">
    <x-header slot="header"
              style="width:100%;position:absolute;left:0;top:0;z-index:100;"
              v-show="true"
              :left-options="{showBack: true, backText: ''}"
              :right-options="{showMore: false}"
              :title="this.$route.name === 'contentCommentList' ? totalItems+'条影评' : totalItems+'条评论'"
    ><span slot="right" class="rightMenu red" v-if="this.$route.name === 'contentCommentList'"><a href="javascript:;" @click="showAddCom">写影评</a></span></x-header>
    <div class="app-newsInfoList" style="margin: 0 10px;">
      <p class="nullCon" v-show="!commentList">内容为空</p>
      <ul>
        <scroller lock-x :height="this.$route.name !== 'contentCommentList' ? '-100' : '-50'" @on-scroll-bottom="onScrollComList" ref="scrollerComList" :scroll-bottom-offst="50">
          <div>
            <li v-for="(item, index) in commentList">
          <div class="app-newsInfoItem">
            <div class="app-newsInfoItemL">
              <img :src="item.avatar" alt="" />
            </div>
            <div class="app-newsInfoItemR">
              <div class="app-newsInfoItemR01">
                <span class="user">
                  {{item.userName}}
                  <b v-if="item.type == 0">想看</b>
                  <b v-if="item.type == 1">不想看</b>
                  <b v-if="item.type == 2">看过</b>
                </span>
                <span class="reply" @click="replyCom(item)" v-if="isShowReply()">
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
          </div>
        </scroller>
      </ul>
    </div>
    <Comment :module="{name: commentModule}" ref="comment" v-if="this.$route.name !== 'contentCommentList'"></Comment>
    <Filmcritic :showDialog="showDialogStyle"></Filmcritic>
  </div>
</template>
<script>
  import Comment from './Comment.vue'
  import Filmcritic from './Filmcritic.vue'
  import {Scroller, XHeader} from 'vux'
  import publicFn from '../publicFn'
  export default {
      name: 'commentList',
      components: {
          Comment,
          Scroller,
          Filmcritic,
          XHeader
      },
      data () {
          return {
              uid: publicFn.isUser(),
              commentList: [],
              replyComData: {},
              itemsPerPage: 10,
              currentPage: 1,
              totalItems: 0,
              onFetching: false,
              comGetStr: '',
              commentModule: this.commentModuleFn(),
              showDialogStyle: false
          }
      },
      created () {
          this.getComList()
      },
      mounted () {
      },
      methods: {
          getComList () {
              if (this.$route.name === 'charactersCommentList') {
                  this.comGetStr = '/app/character/' + this.$route.params.characterId + '/comment/list/?itemsPerPage=' + this.itemsPerPage + '&currentPage=' + this.currentPage
              } else if (this.$route.name === 'newsCommentList') {
                  this.comGetStr = '/app/news/' + this.$route.params.newsId + '/comment/?itemsPerPage=' + this.itemsPerPage + '&currentPage=' + this.currentPage
              } else if (this.$route.name === 'contentCommentList') {
                  this.comGetStr = '/app/content/' + this.$route.params.contentId + '/filmcritic/?itemsPerPage=' + this.itemsPerPage + '&currentPage=' + this.currentPage
              }
              this.$http.get(this.comGetStr).then(function (data) {
                  this.totalItems = data.body.totalItems
                  if (data.body.data) {
                      for (var i = 0; i < data.body.data.length; i++) {
                          this.commentList.push(data.body.data[i])
                      }
                  }
                  this.currentPage = data.body.currentPage
                  if (!data.body.lastPage) {
                      this.onFetching = false
                  }
                  this.$nextTick(function () {
                      // DOM 现在更新了
                      // `this` 绑定到当前实例
                      this.$refs.scrollerComList.reset()
                  })
              }, function (response) {
                  console.info(response)
              })
          },
          onScrollComList () {
              if (this.onFetching) {
                // do nothing
              } else {
                  this.currentPage += 1
                  this.getComList()
                  this.onFetching = true
              }
          },
          replyCom (data) {
              this.replyComData = {
                  id: data.id,
                  userName: data.userName
              }
              this.$refs.comment.commentFocus(this.replyComData)
          },
          commentModuleFn () {
              // 发布评论模块区分
              if (this.$route.name === 'charactersCommentList' || this.$route.name === 'charactersInfo') {
                  return 'character'
              } else if (this.$route.name === 'newsCommentList' || this.$route.name === 'newsInfo') {
                  return 'news'
              }
          },
          isShowReply () {
              if (this.$route.name === 'contentCommentList') {
                  return false
              } else {
                  return true
              }
          },
          showAddCom () {
//              console.info('this.showDialogStyle', this.showDialogStyle)
              this.showDialogStyle = !this.showDialogStyle
          },
          delComment(delInfo){
              const _this = this
              this.$vux.confirm.show({
                  // 组件除show外的属性
                  content: '确定删除吗？',
                  name:'',
                  onCancel () {
                  },
                  onConfirm () {
                      let delLink = ''
                      let delData = {}
                      if (_this.$route.name === 'charactersCommentList') {
                          delLink = '/app/character/comment'
                          delData = {
                              "characterId": delInfo.characterId,
                              "commentId": delInfo.id
                          }
                      } else if (_this.$route.name === 'newsCommentList') {
                          delLink = '/app/news/comment/delete'
                          delData = {
                            "commentId": delInfo.id
                          }
                      } else if (_this.$route.name === 'contentCommentList') {
                          delLink = '/app/content/filmcritic'
                          delData = {
                            "contentId": _this.$route.params.contentId,
                            "commentId": delInfo.id
                          }
                      }
                      _this.$http.delete(delLink, {body: delData}).then(function (data) {
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

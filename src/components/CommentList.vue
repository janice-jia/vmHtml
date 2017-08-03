<template>
  <div class="commentList" ref="commentList">
    <x-header slot="header"
              style="width:100%;position:absolute;left:0;top:0;z-index:100;"
              v-show="true"
              :left-options="{showBack: true, backText: ''}"
              :right-options="{showMore: false}"
              :title="totalItems+'条影评'"
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
                <span class="user">{{item.userName}}</span>
                <span class="reply" @click="replyCom(item)" v-if="isShowReply()">
                  回复
                </span>
              </div>
              <div class="app-newsInfoItemR02">
                {{item.createTime}}
              </div>
              <div class="app-newsInfoItemR03">
                <span v-show="item.commentId">回复 {{item.replyNickName}}:&nbsp;</span>
                {{item.content}}
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
//              console.info('this', this.$refs.comment)
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
          }
      }
  }
</script>

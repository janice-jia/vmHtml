<template>
    <div class="newsInfo">
      <div class="appNewsInfo">
        <div class="app-newsInfoTit">
          {{newsInfoData.title}}
        </div>
        <div class="app-newsInfoUser">
          <div class="userImg">
            <img :src="newsInfoData.authorAvatar" alt="" />
          </div>
          <span class="user">{{newsInfoData.author}}</span>
          <span class="time">{{newsInfoData.createTime | getFormat}}</span>
        </div>
        <div class="app-newsInfoCon" v-html="newsInfoData.content">
        </div>

        <div class="app-newsInfoCom">
          评论
        </div>

        <div class="app-newsInfoList">
          <ul>
            <li v-for="(item, index) in newsCommetn">
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
                  <div class="app-newsInfoItemR02">
                    {{item.createTime | getFromNow}}
                  </div>
                  <div class="app-newsInfoItemR03">
                    <span v-show="item.commentId">回复 {{item.replyNickName}}:&nbsp;</span>
                    {{item.content}}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="app-newsInfoBtn" v-show="commetnTotalItems">
          <router-link :to="{name: 'newsCommentList'}">全部评论{{commetnTotalItems}} 条</router-link>
        </div>
      </div>
      <Comment  v-if="newsInfoData.hasLiked || newsInfoData.hasLiked == false"  v-bind:module="{name: 'news', showLike: true, hasLiked: this.newsInfoData.hasLiked}" ref="comment"></Comment>
    </div>
</template>


<script type="text/ecmascript-6">
import publicFn from '../publicFn'
import Comment from './Comment.vue'
export default {
    name: 'newsInfo',
    data () {
        return {
            newsInfoData: {},
            newsCommetn: [],
            commetnTotalItems: 0,
            replyComData: {}
        }
    },
    watch: {
    },
    computed: {
    },
    mounted () {
    },
    components: {
        Comment
    },
    filters: {
        getFormat (time) {
            return publicFn.getFormat(time)
        },
        getFromNow (time) {
            return publicFn.getFromNow(time)
        }
    },
    created () {
        this.getNewInfo(this.$route.params.newsId)
        this.getComment(this.$route.params.newsId)
    },
    methods: {
        /*
         *获取资讯详细
         */
        getNewInfo (newsId) {
            this.$http.get('/webapp/news/' + newsId + '?uid=' + publicFn.isUser()).then(function (data) {
                this.newsInfoData = data.body.data
            }, function (response) {
                console.info(response)
            })
        },
        /*
         *获取资讯评论列表
         */
        getComment (newsId) {
            this.$http.get('/app/news/' + newsId + '/comment?itemsPerPage=3&currentPage=1').then(function (data) {
                if (data.body.data) {
                    this.newsCommetn = data.body.data
                    this.commetnTotalItems = data.body.totalItems
                }
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
        }
    }
}
</script>

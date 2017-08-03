<template>
  <div class="message">
    <div class="app-newsInfoList">
      <ul>
        <scroller lock-x  :height="messageType ? '-93' : '-50'" @on-scroll-bottom="onScrollMessageList" ref="scrollerMessageList" :scroll-bottom-offst="50">
        <div>
          <li v-for="(item, index) in messageList">
            <div class="app-newsInfoItem">
              <div class="app-newsInfoItemL">
                <img :src="item.avatar ? item.avatar : 'http://www.vmaking.com/default.png'" alt="" />
              </div>
              <div class="app-newsInfoItemR">
                <div class="app-newsInfoItemR01">
                  <span class="user">{{item.userName}}</span>
                  <span class="reply" @click="replyCom(item)">
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
    <Comment :module="{name: 'message'}" ref="comment" v-show="messageType"></Comment>
  </div>
</template>

<script>
import Comment from './Comment.vue'
import publicFn from '../publicFn'
import {Scroller} from 'vux'
export default {
    name: 'message',
    data () {
        return {
            messageList: [],
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0,
            messageType: 0,
            replyComData: {},
            contentId: 0
        }
    },
    components: {
        Comment,
        Scroller
    },
    watch: {},
    created () {
        if (!publicFn.isUser()) {
            this.$router.push({name: 'mine'})
//            this.$router.push({name: 'mine'})
        } else {
            this.getMessageList()
        }
    },
    methods: {
        /*
         *获取消息列表
         */
        getMessageList (newsId) {
            this.$http.get('/app/message/' + publicFn.isUser() + '/list?itemsPerPage=' + this.itemsPerPage + '&currentPage=' + this.currentPage).then(function (data) {
                if (data.body.data) {
                    for (var i = 0; i < data.body.data.length; i++) {
                        this.messageList.push(data.body.data[i])
                    }
                    this.totalItems = data.body.totalItems
                }
                this.currentPage = data.body.currentPage
                if (!data.body.lastPage) {
                    this.onFetching = false
                }
                this.$nextTick(function () {
                    // DOM 现在更新了
                    // `this` 绑定到当前实例
                    this.$refs.scrollerMessageList.reset()
                })
            }, function (response) {
                console.info(response)
            })
        },
        onScrollMessageList () {
            if (this.onFetching) {
                // do nothing
            } else {
                this.currentPage += 1
                this.getMessageList()
                this.onFetching = true
            }
        },
        replyCom (data) {
            this.replyComData = {
                id: data.id,
                userName: data.userName
            }
            this.messageType = data.messageType
            this.contentId = data.contentId
            if (this.messageType) this.$refs.comment.commentFocus(this.replyComData, this.messageType, this.contentId)
        }
    }
}
</script>


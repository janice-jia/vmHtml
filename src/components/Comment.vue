<template>
  <div class="comment" ref="comment">
    <div class="commentHandle">
      <p class="p1" @click="commentBlur">取消</p>
      <p class="p2">写评论</p>
      <p class="p3" >
        <button type="button" disabled ref="addBtn" @click="addComment">确定</button>
      </p>
    </div>
    <div :class="{ commentCon:true, showLike: this.$props.module.showLike }">
      <input type="text" name="" placeholder="请发表您的看法…" @focus="commentFocus">
      <p :class="{like: !hasLiked, disLike: hasLiked}" @click="hasLikedFn"></p>
    </div>
    <textarea v-model="commentCon" :placeholder="placeholder" cols="30" rows="10" ref="commentCon"></textarea>
  </div>
</template>
<script>
  import publicFn from '../publicFn'
  import {Scroller} from 'vux'
  export default {
      name: 'about',
      props: ['module'],
      components: {
          Scroller
      },
      data () {
          return {
              commentId: '',
              commentCon: '',
              addComData: {},
              placeholder: this.$props.module.replyComData ? '回复:' + this.$props.module.replyComData.userName : '请发表您的看法…',
              hasLiked: this.$props.module.hasLiked,
              messageType: 0,
              contentId: 0,
              moduleName: this.$props.module.name
          }
      },
      created () {
//          console.info('this.$props.module', this.$props.module)
      },
      mounted () {
      },
      computed: {
      },
      watch: {
          commentCon: function () {
              this.addComData.content = this.commentCon
              if (this.addComData.content.length > 1) {
                  this.$refs.addBtn.disabled = false
              } else {
                  this.$refs.addBtn.disabled = true
              }
          }
      },
      methods: {
          commentFocus (replyComData, messageType, contentId) {
              /*
              *messageType :消息类型，1代表人物回复评论时产生的消息  2代表资讯回复评论时产生的消息
              *contentId   :资讯或人物的ID，对应type的值;
              *messageType, contentId 仅模块名为message时，需要传递这两个参数
               */
              if (publicFn.isUser()) {
                  if (this.$props.module.name === 'message') {
                      this.$refs.comment.style.display = 'block'
                  }
                  this.$refs.comment.className = 'comment commentCheck'
                  this.$refs.commentCon.focus()
                  this.messageType = messageType
                  this.contentId = contentId

                  // 是否为回复
                  if (replyComData && replyComData.id) {
                      this.addComData.commentId = replyComData.id
                      this.placeholder = '回复:' + replyComData.userName
                  } else {
                      this.commentId = replyComData.id
                      this.placeholder = '请发表您的看法…'
                  }
              } else {
                  this.$router.push({name: 'login', params: {jumpUrlName: this.$route.fullPath}})
              }
          },

          commentBlur () {
              if (this.$props.module.name === 'message') {
                  this.$refs.comment.style.display = 'none'
              } else {
                  this.$refs.comment.className = 'comment'
              }
              // 取消评论 内容重置，状态重置
              this.commentCon = ''
              this.addComData = {}
              this.$refs.addBtn.disabled = true
          },

          addComment () {
              if (this.$props.module.name === 'character') {
                  this.addComData.characterId = this.$route.params.characterId
              } else if (this.$props.module.name === 'news') {
                  this.addComData.newsId = this.$route.params.newsId
              } else if (this.$props.module.name === 'message' && this.messageType === 1) {
                  this.addComData.characterId = this.contentId
                  this.moduleName = 'character'
              } else if (this.$props.module.name === 'message' && this.messageType === 2) {
                  this.addComData.newsId = this.contentId
                  this.moduleName = 'news'
              }
              this.addComData.uid = publicFn.isUser()

              if (publicFn.isUser()) {
                  if (this.addComData.content.length < 0) {
                      return false
                  } else {
                      this.$http.post('/app/' + this.moduleName + '/comment/add', this.addComData).then(function (data) {
                          if (data.body.status) {
                              this.$vux.alert.show({
                                  title: '',
                                  content: '评论成功！',
                                  buttonText: '关闭'
                              })
                              this.commentBlur()
                              if (this.$route.name === 'charactersCommentList' || this.$route.name === 'newsCommentList') {
                                  this.$router.go(0)
                              }
                          } else {
                              this.$vux.alert.show({
                                  title: '',
                                  content: data.body.msg,
                                  buttonText: '关闭'
                              })
                              this.commentBlur()
                          }
                      }, function (response) {
                          console.info(response)
                      })
                  }
              } else {
                  this.$router.push({name: 'login', params: {jumpUrlName: this.$route.fullPath}})
              }
          },

          hasLikedFn () {
              if (this.hasLiked) {
                  this.$http.delete('/app/news/' + this.$route.params.newsId, {body: {deviceId: '', uid: publicFn.isUser()}}).then(function (data) {
                      if (data.body.status) {
                          this.hasLiked = !this.hasLiked
                      }
                  }, function (response) {
                      console.info(response)
                  })
              } else {
                  this.$http.post('/app/news/' + this.$route.params.newsId, {deviceId: '', uid: publicFn.isUser()}).then(function (data) {
                      if (data.body.status) {
                          this.hasLiked = !this.hasLiked
                      }
                  }, function (response) {
                      console.info(response)
                  })
              }
          }
      }
  }
</script>

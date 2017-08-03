<template>
  <div class="filmcritic" ref="filmcritic">
    <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': '#ffffff'}">
        <div>
          <x-header slot="header"
                    style="width:100%;position:absolute;left:0;top:0;z-index:100;"
                    v-show="true"
                    :left-options="{showBack: true, backText: '', preventGoBack: true}"
                    :right-options="{showMore: false}"
                    title="写短评"
                    @on-click-back="hiddenAddCom"
          ><span slot="right" class="rightMenu red"><button disabled ref="addBtn" @click="addComment">保存</button></span></x-header>
          <div class="dialog">
            <div class="contentType">
              <button type="button" v-model="contentType" :class="{typeSelect: contentType===0}" @click="contentType=0">想看</button>
              <button type="button" v-model="contentType" :class="{typeSelect: contentType===1}" @click="contentType=1">在看</button>
              <button type="button" v-model="contentType" :class="{typeSelect: contentType===2}" @click="contentType=2">看过</button>
            </div>
            <div class="contentCon">
              <textarea v-model="commentCon"  ref="commentCon" name="" id="" cols="30" rows="10" placeholder="评论代表您的观点，让所有人都知道…………"></textarea>
            </div>
          </div>
        </div>

      </x-dialog>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  import publicFn from '../publicFn'
  import {XDialog, XHeader, TransferDomDirective as TransferDom} from 'vux'
  export default {
      name: 'filmcritic',
      components: {
          XDialog,
          XHeader
      },
      directives: {
          TransferDom
      },
      props: ['showDialog'],
      data () {
          return {
              showDialogStyle: this.$props.showDialog,
              contentType: 0,
              commentCon: '',
              addComData: {}
          }
      },
      watch: {
          commentCon: function () {
              if (this.commentCon.length > 1) {
                  this.$refs.addBtn.disabled = false
              } else {
                  this.$refs.addBtn.disabled = true
              }
          },
          showDialog: function () {
              this.showDialogStyle = !this.showDialogStyle
          }
      },
      created () {
//          console.info('showDialog', this.$props.showDialog)
      },
      methods: {
          hiddenAddCom () {
              this.showDialogStyle = false
              this.commentCon = ''
              this.contentType = 0
              this.addComData.content = ''
          },
          addComment () {
              this.addComData.contentId = this.$route.params.contentId
              this.addComData.uid = publicFn.isUser()
              this.addComData.type = this.contentType
              this.addComData.content = this.commentCon
              if (publicFn.isUser()) {
                  if (this.addComData.content.length < 0) {
                      return false
                  } else {
                      this.$http.post('/app/content/filmcritic', this.addComData).then(function (data) {
                          if (data.body.status) {
                              this.$vux.alert.show({
                                  title: '',
                                  content: '评论成功！',
                                  buttonText: '关闭'
                              })
                              this.hiddenAddCom()
                              if (this.$route.name === 'contentCommentList') {
                                  this.$router.go(0)
                              }
                          } else {
                              this.$vux.alert.show({
                                  title: '',
                                  content: data.body.msg,
                                  buttonText: '关闭'
                              })
                              this.hiddenAddCom()
                          }
                      }, function (response) {
                          console.info(response)
                      })
                  }
              } else {
                  this.$router.push({name: 'login', params: {jumpUrlName: this.$route.fullPath}})
              }
          }
      }
  }
</script>

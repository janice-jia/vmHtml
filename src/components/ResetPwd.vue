<template>
  <div class="resetPwd">
    <x-header slot="header"
              style="width:100%;position:absolute;left:0;top:0;z-index:100;"
              v-show="true"
              :left-options="{showBack: true, backText: '', preventGoBack: true}"
              :right-options="{showMore: false}"
              title="修改密码"
              @on-click-back="$router.go(-1)"
    ><span slot="right" class="rightMenu red"><button ref="addBtn" @click="editPwd">保存</button></span></x-header>
    <div class="resetPwd-pwd">
      <input type="password" ref="oldPassword" v-model="oldPassword" placeholder="请输入旧密码"/>
    </div>
    <div class="resetPwd-pwd">
      <input type="password" ref="newPassword" v-model="newPassword" placeholder="请输入新密码（6-20字符）"/>
      <p class="eyes" v-show="!closeEyes" @click="isCloseEyes"></p>
      <p class="closeEyes" v-show="closeEyes" @click="isCloseEyes"></p>
    </div>
  </div>
</template>

<script>
import publicFn from '../publicFn'
import { XHeader, cookie } from 'vux'
export default {
    name: 'resetPwd',
    components: {
        XHeader
    },
    data () {
        return {
            closeEyes: false,
            newPassword: '',
            oldPassword: ''
        }
    },
    created () {
        if (!publicFn.isUser()) this.$router.push({name: 'mine'})
    },
    methods: {
        // 密码可见、不可见
        isCloseEyes () {
            this.closeEyes = !this.closeEyes
            if (this.closeEyes) {
                this.$refs.newPassword.type = 'text'
            } else {
                this.$refs.newPassword.type = 'password'
            }
        },
        editPwd () {
            if (!this.oldPassword.length || this.oldPassword.length < 6 || this.oldPassword.length > 20) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入正确的旧密码',
                    buttonText: '关闭'
                })
            } else if (!this.newPassword.length || this.newPassword.length < 6 || this.newPassword.length > 20) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入新密码（2-20字符）',
                    buttonText: '关闭'
                })
            } else {
                //  修改密码
                this.$http.post('/app/user/' + publicFn.isUser() + '/password/modify', {
                    newPassword: this.newPassword,
                    oldPassword: this.oldPassword
                }).then(function (data) {
                    if (data.body.status) {
                        this.$vux.alert.show({
                            title: '',
                            content: '修改密码成功，请重新登录',
                            buttonText: '关闭'
                        })
                        cookie.remove('uid', {
                            path: '/'
                        })
                        this.$router.push({name: 'login'})
                    } else {
                        this.$vux.alert.show({
                            title: '',
                            content: data.body.msg,
                            buttonText: '关闭'
                        })
                    }
                }, function (response) {
                    console.info(response)
                })
            }
        }
    }
}
</script>


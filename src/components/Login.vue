<template>
  <div class="login">
    <div class="loginForm">
      <form action=""  @submit.prevent="loginSubmit">
        <div class="formLabel">
          <input class="mobile" type="number" placeholder="输入手机号" name="mobile" ref="mobile"/>
        </div>
        <p class="prompt" ref="mobilePrompt">手机号有误</p>

        <div class="formLabel">
          <input class="password" type="password" placeholder="输入密码" name="pwd" ref="pwd"/>
          <p class="eyes" v-show="!closeEyes" @click="isCloseEyes"></p>
          <p class="closeEyes" v-show="closeEyes" @click="isCloseEyes"></p>
        </div>
        <p class="prompt" ref="pwdPrompt">密码有误</p>

        <div class="subBtn">
          <button type="submit">登录</button>
          <p class="forgotPwd"><router-link :to="{name: 'forgotPwd'}">忘记密码</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { cookie } from 'vux'
export default {
    name: 'login',
    data () {
        return {
            closeEyes: false,
            pwdType: 'password'
        }
    },
    created () {
//        console.info('this.$route', this.$route)
    },
    methods: {
        // 密码可见、不可见
        isCloseEyes () {
            this.closeEyes = !this.closeEyes
            if (this.closeEyes) {
                this.$refs.pwd.type = 'text'
            } else {
                this.$refs.pwd.type = 'password'
            }
        },

        // 提交登录表单
        loginSubmit () {
            let flag = false
            let mobileReg = /^[1][3-9][0-9]{9}$/
            // 手机号验证
            if (!this.$refs.mobile.value) {
                this.$refs.mobilePrompt.style.display = 'block'
            } else if (this.$refs.mobile.value.length !== 11) {
                this.$refs.mobilePrompt.style.display = 'block'
            } else if (!mobileReg.test(this.$refs.mobile.value)) {
                this.$refs.mobilePrompt.style.display = 'block'
            } else {
                this.$refs.mobilePrompt.style.display = 'none'
            }

            // 密码验证
            if (!this.$refs.pwd.value) {
                this.$refs.pwdPrompt.style.display = 'block'
            } else if (this.$refs.pwd.value.length < 6 || this.$refs.pwd.value.length > 20) {
                this.$refs.pwdPrompt.style.display = 'block'
            } else {
                this.$refs.pwdPrompt.style.display = 'none'
                flag = true
            }

            if (flag === true) {
                // 登录
                this.$http.post('/app/user/login', {mobile: this.$refs.mobile.value, password: this.$refs.pwd.value}).then(function (data) {
                    console.info('data', data)
                    if (data.body.data) {
                        cookie.set('uid', data.body.data.uid, {
                            path: '/',
                            expires: 7
                        })
                        if (this.$route.params.jumpUrlName) {
                            this.$router.push({path: this.$route.params.jumpUrlName})
                        } else {
                            this.$router.push({path: '/mine'})
                        }
                    } else {
                        this.$refs.pwdPrompt.innerHTML = data.body.msg
                        this.$refs.pwdPrompt.style.display = 'block'
                        return false
                    }
                }, function (response) {
                    console.info(response)
                })
            } else {
                return false
            }
        }
    }
}
</script>


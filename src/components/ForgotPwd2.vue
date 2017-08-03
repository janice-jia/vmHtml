<template>
  <div class="forgotPwd2">
    <form action="" @submit.prevent="forgotPwdSubmitStep2">
      <p class="forgotPwd2-desc">已向手机号 {{this.$route.query.mobile}} 发送短信验证码</p>
      <div class="forgotPwd2-code">
        <input class="forgotPwd2-code-input" type="text" v-model="code" placeholder="输入验证码" />
        <button class="forgotPwd2-code-send" type="button" @click="sendCode" ref="sendCode" :disabled="codeDisabled">发送验证码</button>
      </div>
      <div class="forgotPwd2-pwd">
        <input class="forgotPwd2-pwd-input" v-model="password" ref="password" type="password" placeholder="输入6-20位密码" />
        <p class="eyes" v-show="!closeEyes" @click="isCloseEyes"></p>
        <p class="closeEyes" v-show="closeEyes" @click="isCloseEyes"></p>
      </div>
      <button class="forgotPwd2-btn" type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'forgotPwd2',
    data () {
        return {
            mobile: '',
            code: '',
            password: '',
            codeDisabled: false,
            closeEyes: false
        }
    },
    created () {
        if (!this.$route.query.mobile) this.$router.push({name: 'forgotPwd'})
    },
    methods: {
        // 密码可见、不可见
        isCloseEyes () {
            this.closeEyes = !this.closeEyes
            if (this.closeEyes) {
                this.$refs.password.type = 'text'
            } else {
                this.$refs.password.type = 'password'
            }
        },
        // 发送验证码
        sendCode () {
            // 手机号验证
            if (this.$route.query.mobile) {
                this.$http.get('/code/send/?mobile=' + this.$route.query.mobile).then(function (data) {
                    let _self = this
                    let time = 60
                    this.$refs.sendCode.innerHTML = '重新发送' + time
                    this.codeDisabled = true
                    let timer = setInterval(function () {
                        time--
                        if (time === 0 || time < 0) {
                            _self.$refs.sendCode.innerHTML = '重新发送'
                            _self.codeDisabled = false
                            clearInterval(timer)
                        } else {
                            _self.$refs.sendCode.innerHTML = '重新发送' + time
                        }
                    }, 1000)
                }, function (response) {
                    console.info(response)
                })
            } else {
                console.info(1)
            }
        },

        forgotPwdSubmitStep2 () {
            if (!this.code) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入验证码',
                    buttonText: '关闭'
                })
                return false
            } else if (!this.password || (this.password.length < 6) || (this.password.length > 20)) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入6-20位密码',
                    buttonText: '关闭'
                })
                return false
            } else {
                //  找回密码
                this.$http.post('/app/user/password/forget', {
                    mobile: this.$route.query.mobile,
                    password: this.password,
                    code: this.code
                }).then(function (data) {
                    if (data.body.status) {
                        this.$vux.alert.show({
                            title: '',
                            content: '修改密码成功，请重新登录',
                            buttonText: '关闭'
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


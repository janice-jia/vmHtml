<template>
    <div class="login">
      <div class="loginForm">
        <form action=""  @submit.prevent="registerSubmitStep1">
          <div class="formLabel">
            <input class="mobile" type="number" placeholder="输入11位手机号" name="mobile" ref="mobile" :value="registerStep1Data.mobile"/>
          </div>
          <p class="prompt" ref="mobilePrompt">手机号有误</p>

          <div class="formLabel">
            <input class="password" type="password" placeholder="输入6-20位密码" name="password" ref="password" :value="registerStep1Data.password"/>
            <p class="eyes" v-show="!closeEyes" @click="isCloseEyes"></p>
            <p class="closeEyes" v-show="closeEyes" @click="isCloseEyes"></p>
          </div>
          <p class="prompt" ref="passwordPrompt">密码有误</p>

          <div class="formLabel">
            <input class="code" type="number" placeholder="输入验证码" name="code" ref="code" :value="registerStep1Data.code"/>
            <p class="sendCode">
              <button @click="sendCode" ref="sendCode" :disabled="codeDisabled">发送验证码</button>
            </p>
          </div>
          <p class="prompt" ref="codePrompt">验证码有误</p>

          <div class="subBtn">
            <button type="submit">下一步</button>
            <p class="agree">
              <span class="agreeChecked" v-show="isAgree" @click="changeAgree"></span>
              <span class="agreeNoChecked" v-show="!isAgree" @click="changeAgree"></span>
              本人已阅读并同意 注册协议
            </p>
          </div>
        </form>
      </div>
      <div class="loginBottom">
        已注册过？点击 <router-link to="/login">登录</router-link>
      </div>
    </div>
</template>

<script>
import { cookie } from 'vux'
export default {
    name: 'registerSteps1',
    data () {
        return {
            step: 1,
            closeEyes: false,
            codeDisabled: false,
            isMobile: false,
            isCode: false,
            registerStep1Data: {},
            isAgree: true
        }
    },
    created () {
        cookie.get('registerStep1Data') ? this.registerStep1Data = JSON.parse(cookie.get('registerStep1Data')) : ''
    },
    watch: {
        isMobile: function () {
            if (this.isMobile && this.isCode) {
                const registerStep1Data = JSON.stringify({mobile: this.$refs.mobile.value, password: this.$refs.password.value, code: this.$refs.code.value})
                document.cookie = 'registerStep1Data=' + registerStep1Data
                this.$router.push({name: 'registerSteps2'})
            }
        },
        isCode: function () {
            if (this.isMobile && this.isCode) {
                localStorage.setItem('registerStep1Data', JSON.stringify({mobile: this.$refs.mobile.value, password: this.$refs.password.value, code: this.$refs.code.value}))
                this.$router.push({name: 'registerSteps2'})
            }
        }
    },
    methods: {
        changeAgree () {
            if (this.isAgree) {
                this.isAgree = false
            } else {
                this.isAgree = true
            }
        },
        // 密码可见、不可见
        isCloseEyes () {
            this.closeEyes = !this.closeEyes
            if (this.closeEyes) {
                this.$refs.password.type = 'text'
            } else {
                this.$refs.password.type = 'password'
            }
        },

        // 手机号验证
        checkMobile () {
            let mobileReg = /^[1][3-9][0-9]{9}$/

            // 手机号验证
            if (!this.$refs.mobile.value) {
                this.$refs.mobilePrompt.style.display = 'block'
                return false
            } else if (this.$refs.mobile.value.length !== 11) {
                this.$refs.mobilePrompt.style.display = 'block'
                return false
            } else if (!mobileReg.test(this.$refs.mobile.value)) {
                this.$refs.mobilePrompt.style.display = 'block'
                return false
            } else {
                return true
            }
        },

        // 密码验证
        checkPwd () {
            if (!this.$refs.password.value) {
                this.$refs.passwordPrompt.style.display = 'block'
                return false
            } else if (this.$refs.password.value.length < 6 || this.$refs.password.value.length > 20) {
                this.$refs.passwordPrompt.style.display = 'block'
                return false
            } else {
                this.$refs.passwordPrompt.style.display = 'none'
                return true
            }
        },

        // 验证码验证
        checkCode () {
            // 验证码验证
            if (!this.$refs.code.value) {
                this.$refs.codePrompt.style.display = 'block'
                return false
            } else {
                return true
            }
        },

        // 是否同意用户注册协议
        isAgreeCheck () {
            if (!this.isAgree) {
                this.$vux.alert.show({
                    title: '',
                    content: '请认真阅读注册协议并同意',
                    buttonText: '关闭'
                })
                return false
            } else {
                return true
            }
        },
        // 验证验证码是否正确
        checkIsCode () {
            this.$http.post('/code/check', {mobile: this.$refs.mobile.value, code: this.$refs.code.value}).then(function (data) {
                if (data.body.status) {
                    this.$refs.codePrompt.style.display = 'none'
                    this.isCode = true
                    console.info('this.isCode = true', this.isCode = true)
                    this.$nextTick(function () {
                        console.info('checkIsCode')
                    })
                } else {
                    this.$refs.codePrompt.style.display = 'block'
                }
            }, function (response) {
                this.$refs.codePrompt.style.display = 'block'
                console.info(response)
            })
        },

        // 验证手机号是否注册
        checkMobileRegister () {
            this.$http.post('/app/user/mobile-check', {mobile: this.$refs.mobile.value}).then(function (data) {
                if (data.body.status) {
                    this.$refs.mobilePrompt.style.display = 'none'
                    this.isMobile = true
                    this.$nextTick(function () {
                        console.info('checkMobileRegister')
                    })
                } else {
                    this.$refs.mobilePrompt.innerHTML = '用户已存在'
                    this.$refs.mobilePrompt.style.display = 'block'
                }
            }, function (response) {
                this.$refs.mobilePrompt.innerHTML = '用户已存在'
                this.$refs.mobilePrompt.style.display = 'block'
            })
        },

        // 发送验证码
        sendCode () {
            // 手机号验证
            if (this.checkMobile()) {
                this.$http.get('/code/send/?mobile=' + this.$refs.mobile.value).then(function (data) {
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
            }
        },

        // 提交注册表单第一步
        registerSubmitStep1 () {
            if (this.checkMobile() && this.checkPwd() && this.checkCode() && this.isAgreeCheck()) {
                this.checkMobileRegister()
                this.checkIsCode()
                return true
            } else {
                return false
            }
        }

    }
}
</script>

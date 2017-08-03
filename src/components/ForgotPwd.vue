<template>
  <div class="forgotPwd">
    <form action="" @submit.prevent="forgotPwdSubmitStep1">
      <div class="forgotPwd-mobile">
        <input class="forgotPwd-input" type="tel" placeholder="请输入11位手机号" v-model="mobile"/>
      </div>
      <p class="forgotPwd-desc">为了安全，我们会向您的手机发送验证码</p>
      <button class="forgotPwd-btn" type="submit">下一步</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'forgotPwd',
    data () {
        return {
            mobile: ''
        }
    },
    created () { },
    methods: {
        forgotPwdSubmitStep1 () {
            let mobileReg = /^[1][3-9][0-9]{9}$/
            // 手机号验证
            if (!this.mobile) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入11位手机号',
                    buttonText: '关闭'
                })
                return false
            } else if (this.mobile.length !== 11) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入11位手机号',
                    buttonText: '关闭'
                })
                return false
            } else if (!mobileReg.test(this.mobile)) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入11位手机号',
                    buttonText: '关闭'
                })
                return false
            } else {
                this.sendCode()
            }
        },
        sendCode () {
            this.$http.get('/code/send?mobile=' + this.mobile).then(function (data) {
                if (data.body.status) {
                    this.$router.push({name: 'forgotPwd2', query: {mobile: this.mobile}})
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
</script>


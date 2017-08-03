<template>
  <div class="feedback">
    <form action="" @submit.prevent="addFeedback">
      <div class="feedbackLabel">
        <label for="type">分类标签</label>
        <div id="type" class="feedback-type">
          <span :class="{hover: type==0}" v-model="type" @click="type=0">功能建议</span>
          <span :class="{hover: type==1}" v-model="type" @click="type=1">体验建议</span>
          <span :class="{hover: type==2}" v-model="type" @click="type=2">内容建议</span>
        </div>
      </div>
      <div class="feedbackLabel">
        <label for="content">我要反馈</label>
        <div class="feedback-content">
          <textarea name="" id="content" cols="30" rows="10" placeholder="请在下方留下您的手机号，快速帮您解决" ref="content"></textarea>
        </div>
      </div>
      <div class="feedbackLabel">
        <label for="mobile">手机号</label>
        <div class="feedback-mobile">
          <input name="" id="mobile" placeholder="请输入您的手机号" ref="mobile"/>
        </div>
      </div>
      <button class="feedback-sub" type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'feedback',
    data () {
        return {
            type: 0
        }
    },
    created () {
    },
    methods: {
        // 手机号验证
        checkMobile () {
            let mobileReg = /^[1][3-9][0-9]{9}$/
            // 手机号验证
            if (!this.$refs.mobile.value) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入手机号',
                    buttonText: '关闭'
                })
                return false
            } else if (this.$refs.mobile.value.length !== 11) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入正确的手机号',
                    buttonText: '关闭'
                })
                return false
            } else if (!mobileReg.test(this.$refs.mobile.value)) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入正确的手机号',
                    buttonText: '关闭'
                })
                return false
            } else {
                return true
            }
        },
        // 反馈内容验证
        checkContent () {
            if (this.$refs.content.value.length < 1) {
                this.$vux.alert.show({
                    title: '',
                    content: '请输入您要反馈的意见',
                    buttonText: '关闭'
                })
                return false
            } else {
                return true
            }
        },
        // 手机号验证
        addFeedback () {
            if (this.checkContent() && this.checkMobile()) {
                this.$http.post('/app/user/feedback', {type: this.type, mobile: this.$refs.mobile.value, content: this.$refs.content.value}).then(function (data) {
                    if (data.body.status) {
                        this.$vux.alert.show({
                            title: '',
                            content: '反馈意见提交成功',
                            buttonText: '关闭'
                        })
                        this.$router.go(-1)
                    } else {
                        this.$vux.alert.show({
                            title: '',
                            content: data.body.msg,
                            buttonText: '关闭'
                        })
                    }
                }, function (response) {
                    this.$vux.alert.show({
                        title: '',
                        content: '提交失败',
                        buttonText: '关闭'
                    })
                })
            } else {
                return false
            }
        }
    }
}
</script>


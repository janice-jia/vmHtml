<template>
  <div class="setting">
    <ul class="setting-list">
      <li>
        <div class="mobile">
          <div class="mobile-left">手机绑定</div>
          <div class="mobile-right" v-if="this.$route.query.mobile">{{this.$route.query.mobile | hideMobile}}</div>
          <div class="mobile-right" v-if="!this.$route.query.mobile">未绑定</div>
        </div>
      </li>
      <li class="no-border-bottom right-link">
        <router-link :to="{name: 'resetPwd'}" class="pwd-reset">密码设置</router-link>
      </li>
    </ul>
    <div class="bg"></div>
    <div class="logout">
      <p @click="logout">退出登录</p>
    </div>
  </div>
</template>

<script>
import publicFn from '../publicFn'
import { cookie } from 'vux'
export default {
    name: 'setting',
    data () {
        return {
        }
    },
    filters: {
        hideMobile (mobile) {
            return publicFn.hideMobile(mobile)
        }
    },
    created () {
        console.info(this.$route)
    },
    methods: {
        logout () {
            cookie.remove('uid', {
                path: '/'
            })
            this.$router.go(-1)
        }
    }
}
</script>


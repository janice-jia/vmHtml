<template>
  <div class="mine">
    <div class="mineMenu">
      <ul class="noLeftIcon">
        <li><a href="http://www.vmaking.com/" target="_blank">官方网站</a></li>
        <li><router-link :to="{name:'officialWeibo'}">官方微博</router-link></li>
        <li class="noBottomBorder"><router-link :to="{name:'officialWeChat'}">官方微信公众号</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'about',
    data () {
        return {
        }
    },
    created () {
    },
    methods: { }
}
</script>


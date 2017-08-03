<template>
  <div class="welfare">
    <ul class="welfare-list">
      <li>
        <router-link :to="{name: 'welfareInfo'}">
          <img src="../assets/welfare.jpg" alt="" />
        </router-link>
      </li>
      <!--<li v-for="item in welfare">-->
        <!--<img :src="item.appImage" alt="" />-->
      <!--</li>-->
    </ul>
  </div>
</template>

<script>
export default {
    name: 'welfare',
    data () {
        return {
            welfare: {}
        }
    },
    created () {
//        this.getWelfare()
    },
    methods: {
        getWelfare () {
            this.$http.get('/app/welfare').then(function (data) {
                this.welfare = data.body.data
            }, function (response) {
                console.info(response)
            })
        }
    }
}
</script>


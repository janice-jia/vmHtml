<template>
  <scroller lock-x height="-55" @on-scroll-bottom="onScrollerTrivia" ref="scrollerTrivia" :scroll-bottom-offst="0">
  <div class="trivia">
    <div class="triviaItem" v-for="(item, index) in trivia">
      <div class="triviaItemL">
        <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
        <img :src="item.cover" alt="">
        </router-link>
      </div>
      <div class="triviaItemR">
        <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
        <p class="color-1">{{item.title}}</p>
        <p class="color-2">发布时间：{{item.publishTime | getFormat}}</p>
        </router-link>
      </div>
    </div>
  </div>
  </scroller>
</template>

<script type="text/ecmascript-6">
  import publicFn from '../publicFn'
  import { Scroller } from 'vux'
  export default {
      components: {
          Scroller
      },
      name: 'trivia',
      data () {
          return {
            trivia: [],
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0,
            lastPage: false,
            onFetching: false
          }
      },
      filters: {
          getFormat (time) {
              return publicFn.getFormat(time, '-')
          }
      },
      created () {
        this.getCharacters(this.currentPage)
      },
      methods: {
        /*
         *获取专区人物列表
         */
        getCharacters (currentPage) {
          this.$http.get('/app/video/list?classify='+this.$route.params.episode+'&itemsPerPage=' + this.itemsPerPage + '&currentPage=' + currentPage).then(function (data) {
            if (data.body.data) {
              for (var i = 0; i < data.body.data.length; i++) {
                this.trivia.push(data.body.data[i])
              }
            }
            this.currentPage = data.body.currentPage
            this.lastPage = data.body.lastPage
            this.totalItems = data.body.totalItems
            this.$nextTick(function () {
              // DOM 现在更新了
              // `this` 绑定到当前实例
              this.$refs.scrollerTrivia.reset()
            })
          }, function (response) {
            console.info(response)
          })
        },
        onScrollerTrivia () {
          if (this.onFetching) {
            // do nothing
          } else {
            this.onFetching = true
            if(!this.lastPage){
              this.getCharacters(this.currentPage + 1)
            }
          }
        }
      }
  }
</script>


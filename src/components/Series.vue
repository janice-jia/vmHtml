<template>
  <scroller lock-x height="-55" @on-scroll-bottom="onScrollSerise" ref="scrollerSerise" :scroll-bottom-offst="0">
  <div class="series">
    <div class="seriesItem" v-for="(item, index) in series" v-model="series" v-if="series">
      <div class="seriesItemBox">
        <div class="seriesItemL">
          <img :src="item.cover" alt="">
        </div>
        <div class="seriesItemR">
          <div class="seriesItemR01">
            <!--<p class="type">{{item.category}}</p>-->
            <p class="type">{{item.title}}</p>
            <p class="year">年份：{{item.airTime}}</p>
            <p class="desc">演员：{{item.actors}}</p>
          </div>
          <router-link :to="{name:'seriesInfo', params: {seriesId: item.id, eid: item.epiList ? item.epiList[0].eid : null}}" v-show="item.epiList">
            <button type="button" class="playBtn"></button>
          </router-link>
        </div>
      </div>
      <div class="seriesList">
        <grid :rows="6">
          <grid-item :class="{new: epItem.isNew}" v-for="(epItem, epIndex) in item.epiList" :key="epIndex">
            <span class="newIcon"></span>
            <span class="grid-center">
              <router-link :to="{name:'seriesInfo1', params: {seriesId: item.id, eid: epItem.eid}}">
                {{epIndex+1}}
              </router-link>
            </span>
          </grid-item>
        </grid>
      </div>
    </div>
  </div>
  </scroller>
</template>

<script type="text/ecmascript-6">
  import { Scroller, Grid, GridItem } from 'vux'
  export default {
      components: {
          Scroller,
          Grid,
          GridItem
      },
      name: 'series',
      data () {
          return {
            series: [],
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0,
            lastPage: false,
            onFetching: false
          }
      },
      created () {
        this.getSeries(this.currentPage)
      },
      methods: {
        getSeries (currentPage) {
          this.$http.get('/app/video/list?classify=1&itemsPerPage=' + this.itemsPerPage + '&currentPage=' + currentPage).then(function (data) {
            if (data.body.data) {
              for (var i = 0; i < data.body.data.length; i++) {
                this.series.push(data.body.data[i])
              }
            }
            this.currentPage = data.body.currentPage
            this.lastPage = data.body.lastPage
            this.totalItems = data.body.totalItems
            this.$nextTick(function () {
              // DOM 现在更新了
              // `this` 绑定到当前实例
              this.$refs.scrollerSerise.reset()
            })
          }, function (response) {
            console.info(response)
          })
        },
        onScrollSerise () {
          if (this.onFetching) {
            // do nothing
          } else {
            this.onFetching = true
            if(!this.lastPage){
              this.getSeries(this.currentPage + 1)
            }
          }
        }
      }
  }
</script>


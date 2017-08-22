<template>
  <div class="content">
    <div>
      <div style="height:44px;">
        <sticky scrollBox="vux_view_box_body" :check-sticky-support="false" :offset="0">
          <div class="contentTab">
              <tab :line-width=3 custom-bar-width="15px"  active-color='#fc378c' v-model="index">
                <tab-item class="contentTab-left" selected  :key="0">
                  <router-link to="/content">精彩</router-link>
                </tab-item>
                <tab-item class="contentTab-left" :key="1">
                  <router-link to="/characters">人物</router-link>
                </tab-item>
              </tab>
          </div>
        </sticky>
      </div>
      <div class="conten-list" >
        <scroller lock-x height="-100" @on-scroll-bottom="onScrollContentList" ref="scrollerContentList" :scroll-bottom-offst="55">
          <div>
            <router-link
            v-for="(item, index) in contents"
            :to="{
                name: 'contentInfo',
                params: {
                  contentId: item.id,
                }
             }" key="index">
            <div class="conten-item">
                <div class="conten-itemLeft">
                  <div class="conten-img" :style="{backgroundImage: 'url(' + item.cover + ')'}">
                    <!--<img :src="item.cover" alt="">-->
                  </div>
                </div>
                <div class="conten-itemCenter">
                    <p class="name">{{item.name}}</p>
                    <div class="lablesBox">
                      <p class="lables">
                        <span v-for="(lableIitem, index) in item.lables">#{{lableIitem.content}}</span>
                      </p>
                    </div>
                    <p>
                      <span class="like">{{item.likeCount ? Math.round(item.likeCount/(item.likeCount+item.dislikeCount)*100) : 0 }}%</span>
                      <img src="../assets/like@2x.png" alt="" class="img">
                      <span class="vs">VS</span>
                      <span class="dislike">{{item.dislikeCount ? Math.round(item.dislikeCount/(item.likeCount+item.dislikeCount)*100) : 0}}%
                      </span>
                      <img src="../assets/don't-like@2x.png" alt="" class="img">
                    </p>
                </div>
                <div class="conten-itemRight">
                    <p class="score" v-html="scoreMean(item.scores)">
                    </p>
                    <p class="platform">众创评分</p>
                </div>
            </div>
          </router-link>
            <load-more tip="正在加载更多" v-show="!lastPage"></load-more>
            <p class="bottom-line" v-show="lastPage && totalItems > 6">
              <span>请记住，我们是有底线的</span>
            </p>
          </div>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, Sticky, Flexbox, FlexboxItem, Scroller, LoadMore } from 'vux'
  export default {
      components: {
          Tab,
          TabItem,
          Sticky,
          Flexbox,
          FlexboxItem,
          Scroller,
          LoadMore
      },
      name: 'content',
      data () {
          return {
              index: 0,
              contents: [],
              itemsPerPage: 10,
              currentPage: 1,
              totalItems: 0,
              lastPage: false,
              onFetching: false
          }
      },
      filters: {},
      created () {
          this.getContents(this.currentPage)
      },
      methods: {
          /*
           *获取精彩列表
           */
          getContents (currentPage) {
              this.$http.get('/app/content/movie/list?itemsPerPage=' + this.itemsPerPage + '&currentPage=' + currentPage).then(function (data) {
                  if (data.body.data) {
                      for (var i = 0; i < data.body.data.length; i++) {
                          this.contents.push(data.body.data[i])
                      }
                  }
                  this.currentPage = data.body.currentPage
                  this.lastPage = data.body.lastPage
                  this.totalItems = data.body.totalItems
                  this.$nextTick(function () {
                      // DOM 现在更新了
                      // `this` 绑定到当前实例
                      this.$refs.scrollerContentList.reset()
                  })
              }, function (response) {
                  console.info(response)
              })
          },
          onScrollContentList () {
              if (this.onFetching) {
                  // do nothing
              } else {
                  this.onFetching = true
                  this.getContents(this.currentPage + 1)
              }
          },
          scoreMean (score) {
              var scoreTotal = 0
              if (score && score.length) {
                  score.forEach(function (val) {
                      scoreTotal += val.score
                  })
                  scoreTotal = scoreTotal / score.length
                  scoreTotal = Math.round(scoreTotal * 10) / 10
                  scoreTotal = (scoreTotal % 1 === 0) ? scoreTotal + '.0' : scoreTotal
              }
              return scoreTotal === 0 ? '<span style="font-size: 20px;">暂无</span>' : scoreTotal
          }
      }
  }
</script>


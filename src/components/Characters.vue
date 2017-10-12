<template>
  <div>
    <div class="content">
      <div style="height:44px;">
        <sticky scrollBox="vux_view_box_body" :check-sticky-support="false" :offset="0">
          <div class="contentTab">
              <tab :line-width=3 custom-bar-width="15px"  active-color='#fc378c' v-model="index">
                <tab-item class="contentTab-left" :key="0">
                  <router-link to="/content/0">影视</router-link>
                </tab-item>
                <tab-item class="contentTab-left" :key="1">
                  <router-link to="/characters">人物</router-link>
                </tab-item>
                <tab-item class="contentTab-left" :key="2">
                  <router-link to="/content/2">电影</router-link>
                </tab-item>
              </tab>
          </div>
        </sticky>
      </div>
    </div>

    <div class="characters">
      <ul>
        <scroller lock-x height="-100" @on-scroll-bottom="onScrollCharactersList" ref="scrollerCharactersList" :scroll-bottom-offst="55">
          <div>
            <li v-for="(item, index) in characters">
            <router-link :to="{
                name: 'charactersInfo',
                params: {
                  characterId: item.id,
                }
              }">
              <div class="charactersItem">
                <img :src="item.avatar" alt="">
                <div class="charactersBg">
                  <div class="img">
                    <div class="minImg" :style="{backgroundImage: 'url(' + item.avatar + ')'}"><img :src="item.avatar" alt=""></div>
                    <span class="first-man top" v-show="index == 0"></span>
                    <span class="second-man top" v-show="index == 2"></span>
                    <span class="three-man top" v-show="index == 4"></span>

                    <span class="first-woman top" v-show="index == 1"></span>
                    <span class="second-woman top" v-show="index == 3"></span>
                    <span class="three-woman top" v-show="index == 5"></span>
                  </div>
                  <p class="name">{{item.name}}</p>
                  <p class="tag">
                    <span v-for="(itemLables, index) in item.lables">
                      {{itemLables.content}}
                      <span v-show="index < item.lables.length-1">/</span>
                    </span>
                  </p>
                </div>
              </div>
            </router-link>
          </li>
            <load-more tip="正在加载更多" v-show="!lastPage"></load-more>
            <p class="bottom-line" v-show="lastPage && totalItems > 3">
              <span>每周一，根据百度指数+上周打卡数，统计排名</span>
            </p>
          </div>
        </scroller>
      </ul>
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
              index: 1,
              characters: [],
              itemsPerPage: 10,
              currentPage: 1,
              totalItems: 0,
              lastPage: false,
              onFetching: false
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
              this.$http.get('/app/characters?itemsPerPage=' + this.itemsPerPage + '&currentPage=' + currentPage).then(function (data) {
                  if (data.body.data) {
                      for (var i = 0; i < data.body.data.length; i++) {
                          this.characters.push(data.body.data[i])
                      }
                  }
                  this.currentPage = data.body.currentPage
                  this.lastPage = data.body.lastPage
                  this.totalItems = data.body.totalItems
                  this.$nextTick(function () {
                      // DOM 现在更新了
                      // `this` 绑定到当前实例
                      this.$refs.scrollerCharactersList.reset()
                  })
              }, function (response) {
                  console.info(response)
              })
          },
          onScrollCharactersList () {
              if (this.onFetching) {
                // do nothing
              } else {
                  this.onFetching = true
                  this.getCharacters(this.currentPage + 1)
              }
          }
      }
  }
</script>


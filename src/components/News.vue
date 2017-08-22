<template>
    <div class="news">
        <div class="newListScroller">
          <scroller lock-x height="-110" @on-scroll-bottom="onScrollNewsList" ref="scrollerNewsList" :scroll-bottom-offst="55">
            <div class="newList">
              <!--<swiper auto v-model="newsSwiper_index" @on-index-change="newsSwiper_onIndexChange">-->
              <swiper loop auto v-model="newsSwiper_index" @on-index-change="newsSwiper_onIndexChange">
                <swiper-item class="swiper-demo-img" v-for="(item, index) in newsSwiper" :key="index">
                  <router-link :to="{name: 'newsInfo', params: {newsId: item.targetId}}" v-if="item.category == 1">
                    <img :src="item.image" />
                  </router-link>
                  <router-link :to="{name: 'contentInfo', params: {contentId: item.targetId}}" v-if="item.category == 2">
                    <img :src="item.image" />
                  </router-link>
                  <router-link :to="{name: 'charactersInfo', params: {characterId: item.targetId}}" v-if="item.category == 3">
                    <img :src="item.image" />
                  </router-link>
                </swiper-item>
              </swiper>
              <div class="newItem" v-for="(item, index) in newList">
                <div>
                  <router-link :to="{ name: 'newsInfo', params: { newsId: item.id }}">
                    <grid :rows="5">
                      <flexbox class="newItemTop">
                        <flexbox-item>
                          <div class="newItemUser">
                            <img :src="item.avatar" alt="">
                            {{item.author}}
                          </div>
                        </flexbox-item>
                        <flexbox-item align="right" :span="4">
                          <div class="newItemTime">{{item.publishTime | getFromNow}}</div>
                        </flexbox-item>
                      </flexbox>
                    </grid>
                    <div class="newItemImg" :style="{backgroundImage: 'url(' + item.cover + ')'}">
                      <!--<img :src="item.cover" alt="">-->
                    </div>
                    <div class="newItemDesc">
                      {{item.title}}
                    </div>
                  </router-link>
                </div>
              </div>
              <load-more tip="正在加载更多" v-show="!lastPage"></load-more>
              <p class="bottom-line" v-show="lastPage && totalItems > 3">
                <span>请记住，我们是有底线的</span>
              </p>
            </div>
          </scroller>
        </div>
    </div>
</template>


<script type="text/ecmascript-6">
import publicFn from '../publicFn'
import { Swiper, SwiperItem, Group, Grid, Flexbox, FlexboxItem, Divider, Scroller, LoadMore } from 'vux'
export default {
    name: 'news',
    components: {
        Swiper,
        SwiperItem,
        Group,
        Grid,
        Flexbox,
        FlexboxItem,
        Divider,
        Scroller,
        LoadMore
    },
    data () {
        return {
            newsSwiper: [],
            newsSwiper_index: 0,
            newList: [],
            bottomCount: 20,
            lastPage: false,
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0,
            items: [],
            onFetching: false
        }
    },
    filters: {
        getFromNow (time) {
            return publicFn.getFromNow(time)
        }
    },
    created () {
        this.getSwiper()
        this.getNewList(this.currentPage)
    },
    methods: {
        newsSwiper_onIndexChange (index) {
            this.newsSwiper_index = index
        },

        /*
        *获取幻灯片数据
        */
        getSwiper () {
            this.$http.get('/app/banner').then(function (data) {
                this.newsSwiper = data.body.data
            }, function (response) {
                console.info(response)
            })
        },
        /*
        *获取资讯列表
        */
        getNewList (currentPage) {
            this.$http.get('/app/news/list?itemsPerPage=' + this.itemsPerPage + '&currentPage=' + currentPage).then(function (data) {
                if (data.body.data) {
                    for (var i = 0; i < data.body.data.length; i++) {
                        this.newList.push(data.body.data[i])
                    }
                }
                this.currentPage = data.body.currentPage
                this.lastPage = data.body.lastPage
                this.totalItems = data.body.totalItems
                this.$nextTick(function () {
                    // DOM 现在更新了
                    // `this` 绑定到当前实例
                    this.$refs.scrollerNewsList.reset()
                })
                this.onFetching = false
            }, function (response) {
                console.info(response)
            })
        },
        onScrollNewsList () {
            if (this.onFetching) {
                // do nothing
            } else {
                this.onFetching = true
                if (!this.lastPage) this.getNewList(this.currentPage + 1)
            }
        }
    }
}
</script>

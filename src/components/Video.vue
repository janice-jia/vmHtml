<template>
  <div class="video">
    <div class="KK">
      <div class="vide-tit">
        <router-link :to="{name:'series'}">快看剧情</router-link>
      </div>
      <div class="banner" v-if="video.banner">
        <router-link :to="{name:'seriesInfo', params: {seriesId: video.banner.id}}">
          <img :src="video.banner.cover" alt="">
          <p>{{video.banner.title}}</p>
        </router-link>
      </div>
      <div class="kkList">
        <div class="stills" v-if="video.banner && video.banner.epiList">
          <!--<p class="nullCon" v-show="!charactersInfo.stills">内容为空</p>-->
          <scroller lock-y scrollbar-x  ref="scrollerEpiList" v-if="video.banner.epiList">
            <div class="stillsList" id="stillsList">
              <div class="stillsItem"  v-for="item in video.banner.epiList">
                <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
                  <img :src="item.cover" alt="">
                  <p>{{item.title}}</p>
                </router-link>
              </div>
              <!--<div class="stillsItem">-->
                <!--<router-link :to="{name: 'characterAlbum', params: {characterId: 1}}">查<br/>看<br/>更<br/>多</router-link>-->
              <!--</div>-->
            </div>
          </scroller>
        </div>

      </div>
    </div>
    <div class="HX">
      <div class="vide-tit">
        <router-link :to="{name:'trivia', params: {episode: 2}}">花絮</router-link>
      </div>
      <div class="video-list">
        <ul>
          <li v-for="(item, index) in  video.creditsofList">
            <div class="video-list-img">
              <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
              <img :src="item.cover" alt="">
              </router-link>
            </div>
            <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
            <p>{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="YC">
      <div class="vide-tit">
        <router-link :to="{name:'trivia', params: {episode: 3}}">原创</router-link>
      </div>
      <div class="video-list">
        <ul>
          <li v-for="(item, index) in  video.originalList">
            <div class="video-list-img">
              <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
              <img :src="item.cover" alt="">
              </router-link>
            </div>
            <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
            <p>{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="RMSP">
      <div class="vide-tit">
        <router-link :to="{name:'trivia', params: {episode: 4}}">热门视频</router-link>
      </div>
      <div class="video-list">
        <ul>
          <li v-for="(item, index) in  video.hotList">
            <div class="video-list-img">
              <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
              <img :src="item.cover" alt="">
              </router-link>
            </div>
            <router-link :to="{name:'seriesInfo', params: {seriesId: item.id}}">
            <p>{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Scroller } from 'vux'
  export default {
      components: {
          Scroller
      },
      name: 'video',
      data () {
          return {
              video:{
                  banner:{}
              },
              stills:[
                  {image:'http://test.vmaking.com/pictures/images/20170623/I20170623Z1KJZTE3ZTZAY5GC-CS.jpg'}
              ]
          }
      },
      created () {
        this.getVideo()
      },
      methods: {
        getVideo () {
          this.$http.get('/app/video/index').then(function (data) {
              if (data.body.data) {
                  this.video = data.body.data
                  this.$nextTick(() => {
                    document.getElementById('stillsList').style.width = this.video.banner.epiList ? (this.video.banner.epiList.length + 1) * '134' + 10 + 'px' : ''
                    this.$refs.scrollerEpiList.reset()
                  })
              }
          }, function (response) {
            console.info(response)
          })
        }
      }
  }
</script>


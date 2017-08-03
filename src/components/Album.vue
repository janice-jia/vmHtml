<template>
  <div class="ContentAlbum">
    <scroller lock-x height="-50" @on-scroll-bottom="onScrollAlbumList" ref="scrollerAlbumList" :scroll-bottom-offst="50">
      <div class="waterfall">
        <div class="item" v-for="(item, index) in ContentAlbum">
          <img class="previewer-demo-img"  :src="item.src" @click="show(index)">
        </div>
      </div>
    </scroller>
    <div v-transfer-dom>
      <previewer :list="ContentAlbum" ref="previewer" :options="options"></previewer>
    </div>
  </div>
</template>

<script>
import { Previewer, TransferDom, Scroller } from 'vux'
export default {
    name: 'ContentAlbum',
    directives: {
        TransferDom
    },
    components: {
        Previewer,
        Scroller
    },
    data () {
        return {
            ContentAlbum: [],
            lastPage: false,
            itemsPerPage: 10,
            currentPage: 1,
            onFetching: false,
            options: {
                getThumbBoundsFn (index) {
                    // find thumbnail element
                    let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
                    console.info('thumbnail', thumbnail)
                    // get window scroll Y
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                    // optionally get horizontal scroll
                    // get position of element relative to viewport
                    let rect = thumbnail.getBoundingClientRect()
                    console.info('rect', rect)
                    // w = width
                    return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                }
            }
        }
    },
    watch: {
        ContentAlbum: function () {
            this.$refs.scrollerAlbumList.reset()
        }
    },
    created () {
        this.getAlbum(this.currentPage)
    },
    methods: {
        /*
         *获取专区精彩详细
         */
        getAlbum (currentPage) {
            var str = ''
            var albumId = 0
            if (this.$route.name === 'contentAlbum') {
                albumId = this.$route.params.contentId
            } else if (this.$route.name === 'characterAlbum') {
                albumId = this.$route.params.characterId
            }
            if (this.$route.name === 'contentAlbum') {
                str = '/app/content/' + albumId + '/album/?itemsPerPage=' + this.itemsPerPage + '&currentPage=' + currentPage
            } else if (this.$route.name === 'characterAlbum') {
                str = '/app/characters/' + albumId + '/stills/list/?itemsPerPage=' + this.itemsPerPage + '&currentPage=' + currentPage
            }
            this.$http.get(str).then(function (data) {
                if (data.body.data) {
                    for (var i = 0; i < data.body.data.length; i++) {
                        this.ContentAlbum.push({
                            h: data.body.data[i].height,
                            id: data.body.data[i].id,
                            src: data.body.data[i].image,
                            name: data.body.data[i].name,
                            w: data.body.data[i].width
                        })
                    }
                }
                this.currentPage = data.body.currentPage
                this.lastPage = data.body.lastPage
                this.$nextTick(function () {
                    // DOM 现在更新了
                    // `this` 绑定到当前实例
                    this.$refs.scrollerAlbumList.reset()
                })
                this.onFetching = false
//                console.info('this.ContentAlbum', this.ContentAlbum)
            }, function (response) {
                console.info(response)
            })
        },
        onScrollAlbumList () {
            if (this.onFetching) {
                // do nothing
            } else {
                this.onFetching = true
                if (!this.lastPage) this.getAlbum(this.currentPage + 1)
            }
        },
        show (index) {
            this.$refs.previewer.show(index)
        }
    }
}
</script>


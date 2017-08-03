<template>
    <div class="newsInfo">
      <div class="appNewsInfo">
        <div class="app-newsInfoCon" v-html="relatedInfo.content">
        </div>
      </div>
    </div>
</template>


<script type="text/ecmascript-6">
import publicFn from '../publicFn'
export default {
    name: 'relatedInfo',
    data () {
        return {
            relatedInfo: {}
        }
    },
    watch: {
    },
    computed: {
    },
    mounted () {
    },
    components: {
        Comment
    },
    filters: {
        getFormat (time) {
            return publicFn.getFormat(time)
        },
        getFromNow (time) {
            return publicFn.getFromNow(time)
        }
    },
    created () {
        this.getRelatedInfo(this.$route.params.contentId)
    },
    methods: {
        /*
         *获取资讯详细
         */
        getRelatedInfo (contentId) {
            this.$http.get('/pc/content/' + contentId + '/official-recommend').then(function (data) {
                this.relatedInfo = data.body.data
            }, function (response) {
                console.info(response)
            })
        }
    }
}
</script>

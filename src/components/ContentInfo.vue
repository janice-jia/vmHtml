<template>
    <div class="contentInfo" ref="contentInfo">
        <div class="content-tit">
          <div class="content-titBgImg" :style="{background: 'url(' + contentInfo.cover + ')  0% 0% / cover no-repeat rgba(29, 32, 37, .8)'}"></div>
          <div class="content-titBgColor"></div>
          <flexbox style="position: relative; z-index: 1">
            <flexbox-item :span="2/3">
              <div class="flex-demo">
                <div class="name">{{contentInfo.name}}</div>
                <div class="description">{{contentInfo.description}}</div>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="scoreBox">
                <p class="score" v-html="scoreMean(contentInfo.scores)"></p>
                <p class="platform">众创评分</p>
              </div>
            </flexbox-item>
          </flexbox>
          <div class="content-lable">
            <flexbox class="content-lable-box">
              <flexbox-item :span="2/5">
                <div class="cover-box">
                  <img :src="contentInfo.cover" alt="">
                  <p>
                    <router-link :to="{name: 'contentAlbum'}"></router-link>
                    <span>{{contentInfo.imageCount}} 张{{this.$refs.myImg}}</span>
                  </p>
                </div>
              </flexbox-item>
              <flexbox-item style="height: 80%">
                <div class="lables" style="height: 80%">
                  <span v-for="item in contentInfo.lables">{{item.content}}</span>
                </div>
                <div style="height: 20%">
                  <flexbox>
                    <flexbox-item class="ipExponent">
                      <p class="count">{{contentInfo.ipExponent ? contentInfo.ipExponent : 0}}</p>
                      <p class="countTit">ip指数</p>
                    </flexbox-item>
                    <flexbox-item class="ratings">
                      <p class="count">{{contentInfo.ratings ? contentInfo.ratings : 0}}</p>
                      <p class="countTit">收视率</p>
                    </flexbox-item>
                  </flexbox>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
        </div>

        <!--喜欢vs不喜欢-->
        <div class="likeDislike">
          <flexbox class="likeBox">
            <flexbox-item :span="2/5">
              <div class="like select">{{contentInfo.likeCount ? Math.round(contentInfo.likeCount/(contentInfo.likeCount+contentInfo.dislikeCount)*100) : 0 }}%喜欢</div>
            </flexbox-item>
            <flexbox-item class="vsBox">
              <div class="vs">VS</div>
            </flexbox-item>
            <flexbox-item :span="2/5" class="dislikeBox">
              <div class="dislike select">{{contentInfo.dislikeCount ? Math.round(contentInfo.dislikeCount/(contentInfo.likeCount+contentInfo.dislikeCount)*100) : 0}}%不喜欢</div>
            </flexbox-item>
          </flexbox>
        </div>

        <!--评分-->
        <div class="scoresBox">
          <flexbox>
            <flexbox-item>
              <div class="platform">
                <img src="../assets/douban_icon.png" alt="">
                <p v-for="(item, index) in contentInfo.scores" v-if="item.platform === '豆瓣'">{{item.score}}</p>
              </div>
            </flexbox-item>
            <flexbox-item class="add"><img src="../assets/add.png" alt=""></flexbox-item>
            <flexbox-item>
              <div class="platform">
                <img src="../assets/dushe_icon.png" alt="">
                <p v-for="(item, index) in contentInfo.scores" v-if="item.platform === '毒舌'">{{item.score}}</p>
              </div>
            </flexbox-item>
            <flexbox-item class="add"><img src="../assets/add.png" alt=""></flexbox-item>
            <flexbox-item>
              <div class="platform">
                <img src="../assets/mtime_icon.png" alt="">
                <p v-for="(item, index) in contentInfo.scores" v-if="item.platform === '时光网'">{{item.score}}</p>
              </div>
            </flexbox-item>
            <flexbox-item class="add"><img src="../assets/add.png" alt=""></flexbox-item>
            <flexbox-item>
              <div class="platform" >
                <img src="../assets/zhongchuang_icon.png" alt="">
                <p v-for="(item, index) in contentInfo.scores" v-if="item.platform === '众创部落'">{{item.score}}</p>
              </div>
            </flexbox-item>
          </flexbox>
        </div>

        <!--官方推荐-->
        <div class="app-newsInfoCom" style="margin: 0 10px;">
          官方推荐
        </div>
        <div class="recommend" v-for="item in otherInfos.recommend">
          <router-link :to="{
            name: 'relatedInfo',
            params: {
              contentId: item.contentId,
            }
          }">
            <p class="cover"><img :src="item.cover" alt=""></p>
            <p class="introduction">{{item.introduction}}</p>
            <p class="createTime">{{item.createTime | getFormat}}</p>
          </router-link>
        </div>


        <!--短影评-->
        <div class="app-newsInfoCom" style="margin: 0 10px;">
          短影评
          <p class="addFilmCritics">
            <a href="javascript:;" @click="showAddCom">写影评</a>
          </p>
        </div>
        <div class="app-newsInfoList" style="margin: 0 10px;">
          <ul>
            <li v-for="(item, index) in otherInfos.comments">
              <div class="app-newsInfoItem">
                <div class="app-newsInfoItemL">
                  <img :src="item.avatar" alt="" />
                </div>
                <div class="app-newsInfoItemR">
                  <div class="app-newsInfoItemR01">
                    <span class="user">
                      {{item.userName}}
                      <b v-if="item.type == 0">想看</b>
                      <b v-if="item.type == 1">不想看</b>
                      <b v-if="item.type == 2">看过</b>
                    </span>

                  </div>
                  <!--<div class="app-newsInfoItemR02">-->
                    <!--{{item.createTime}}-->
                  <!--</div>-->
                  <div class="app-newsInfoItemR03">
                    {{item.content}}
                  </div>
                  <div class="app-newsInfoItemR04">
                    <span class="time">{{item.createTime}}</span>
                    <span class="del" v-if="item.uid == uid"><a href="javascript:;" @click="delComment(item)">删除</a></span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="app-newsInfoBtn" v-show="otherInfos.commentCount" style="border-bottom: none">
          <router-link :to="{name: 'contentCommentList'}">全部短影评{{otherInfos.commentCount}} 条</router-link>
        </div>


        <!--相关资讯-->
        <div class="app-newsInfoCom" style="margin: 0 10px;">
          相关资讯
        </div>
        <div class="relatedInfos">
          <p class="nullCon" v-show="!otherInfos.relatedInfos">内容为空</p>
          <flexbox class="relatedInfosItem" v-for="(item, index) in otherInfos.relatedInfos" key="index">
              <flexbox-item :span="2/6" class="image">
                <router-link :to="{ name: 'newsInfo', params: { newsId: item.id }}">
                  <img :src="item.image" alt="">
                </router-link>
              </flexbox-item>
              <flexbox-item>
                <router-link :to="{ name: 'newsInfo', params: { newsId: item.id }}">
                  <p class="title">{{item.title}}</p>
                  <p class="publishTime">{{item.publishTime | getFormat}}</p>
                </router-link>
              </flexbox-item>
          </flexbox>
        </div>

        <Filmcritic :showDialog="showDialogStyle"></Filmcritic>
    </div>
</template>


<script type="text/ecmascript-6">
import Filmcritic from './Filmcritic.vue'
import publicFn from '../publicFn'
import {Flexbox, FlexboxItem, XDialog, XHeader, TransferDomDirective as TransferDom} from 'vux'
export default {
    name: 'newsInfo',
    beforeRouteUpdate  (to, from, next) {
        this.$http.get('/app/content/' + to.params.contentId + '/baseInfo').then(function (data) {
            if (data.body.data) {
                next(vm => {
                    vm.contentInfo = data.body.data
                })
            }
        }, function (response) {
            next(false)
        })
    },
    components: {
        Flexbox,
        FlexboxItem,
        XDialog,
        XHeader,
        Filmcritic
    },
    directives: {
        TransferDom
    },
    data () {
        return {
            uid: publicFn.isUser(),
            contentInfo: {},
            otherInfos: {},
            commetnTotalItems: 0,
            showDialogStyle: false
        }
    },
    filters: {
        getFormat (time) {
            return publicFn.getFormat(time)
        }
    },
    mounted () {
    },
    watch: {
        $route () {
            this.getContentInfo(this.$route.params.contentId)
        },
        commentCon: function () {
            if (this.commentCon.length > 1) {
                this.$refs.addBtn.disabled = false
            } else {
                this.$refs.addBtn.disabled = true
            }
        }
    },
    created () {
        this.getContentInfo(this.$route.params.contentId)
        this.getOtherInfos(this.$route.params.contentId)
    },
    methods: {
        /*
         *获取专区精彩详细
         */
        getContentInfo (contentId) {
            this.$http.get('/app/content/' + contentId + '/baseInfo').then(function (data) {
                if (data.body.data) {
                    this.contentInfo = data.body.data
                }
            }, function (response) {
                console.info(response)
            })
        },
        /*
         *获取相关资讯/短影评/官方推荐
         */
        getOtherInfos (contentId) {
            this.$http.get('/app/content/' + contentId).then(function (data) {
                if (data.body.data) {
                    this.otherInfos = data.body.data
                }
            }, function (response) {
                console.info(response)
            })
        },
        showAddCom () {
            this.showDialogStyle = !this.showDialogStyle
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
        },
        delComment(delInfo){
            const _this = this
            this.$vux.confirm.show({
                // 组件除show外的属性
                content: '确定删除吗？',
                name: '',
                onCancel () {
                },
                onConfirm () {
                    _this.$http.delete('/app/content/filmcritic', {body: {
                        "contentId": _this.$route.params.contentId,
                        "commentId": delInfo.id
                    }}).then(function (data) {
                        if (data.body.status) {
                            this.$router.go(0);
                        }else{
                            this.$vux.alert.show({
                                title: '',
                                content: data.body.msg,
                                buttonText: '关闭'
                            })
                            setTimeout(() => {
                              this.$vux.alert.hide()
                            }, 2000)
                        }
                    }, function (response) {
                      console.info(response)
                    })
                }
            })
        }
    }
}
</script>

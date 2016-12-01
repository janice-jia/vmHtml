import alt from '../alt'
import $ from 'jquery'

class HomeActions {
    constructor() {
        this.generateActions(
            'getSlideSuccess',
            'getSlideFail',
            'getTribeSuccess',
            'getTribeFail',
            'getTopicSuccess',
            'getTopicFail'
        );
    }

    //获取首页幻灯片
    getSlide() {
        $.ajax({
            type: 'Get',
            url: '/app/banner',
        })
        .done((data) => {
            this.getSlideSuccess(data);
        })
        .fail((jqXhr) => {
            this.getSlideFail(jqXhr);
        });
    }

    //获取首页部落列表
    getTribe(){
        $.ajax({
            type: 'Get',
            url: '/app/index/tribe/list',
        })
        .done((data) => {
            this.getTribeSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTribeFail(jqXhr);
        });
    }

    //获取首页话题列表
    getTopic(topicPage){
        $.ajax({
            type: 'Get',
            url: '/app/index/topic/list',
            data: {
                currentPage : topicPage,
                itemsPerPage : 10
            }
        })
        .done((data) => {
            this.getTopicSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTopicFail(jqXhr);
        });
    }
}

export default alt.createActions(HomeActions);
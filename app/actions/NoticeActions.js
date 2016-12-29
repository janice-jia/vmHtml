import alt from '../alt'
import $ from 'jquery'

class NoticeActions {
    constructor() {
        this.generateActions(
            'getNoticeAttentionSuccess',
            'getNoticeAttentionFail',
            'getNoticeRequireSuccess',
            'getNoticeRequireFail',
            'getNoticeCommentSuccess',
            'getNoticeCommentFail',
            'getNoticeSystemSuccess',
            'getNoticeSystemFail'

        );
    }

    //关注消息列表
    getNoticeAttention(data){
        $.ajax({
            type: 'Get',
            url: '/app/notice/attention/list',
            data:data
        })
        .done((data) => {
            this.getNoticeAttentionSuccess(data);
        })
        .fail((jqXhr) => {
            this.getNoticeAttentionFail(jqXhr);
        });
    }

    //需求消息列表
    getNoticeRequire(data){
        $.ajax({
                type: 'Get',
                url: '/app/notice/require/list',
                data:data
            })
            .done((data) => {
                this.getNoticeRequireSuccess(data);
            })
            .fail((jqXhr) => {
                this.getNoticeRequireFail(jqXhr);
            });
    }

    //评论消息列表
    getNoticeComment(data){
        $.ajax({
                type: 'Get',
                url: '/app/notice/comment/list',
                data:data
            })
            .done((data) => {
                this.getNoticeCommentSuccess(data);
            })
            .fail((jqXhr) => {
                this.getNoticeCommentFail(jqXhr);
            });
    }

    //系统消息列表
    getNoticeSystem(data){
        $.ajax({
                type: 'Get',
                url: '/app/notice/system/list',
                data:data
            })
            .done((data) => {
                this.getNoticeSystemSuccess(data);
            })
            .fail((jqXhr) => {
                this.getNoticeSystemFail(jqXhr);
            });
    }

}

export default alt.createActions(NoticeActions);
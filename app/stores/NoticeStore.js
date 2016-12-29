import alt from '../alt'
import NoticeActions from '../actions/NoticeActions'
import {browserHistory} from 'react-router'

class TribeListStore{
    constructor() {
        this.bindActions(NoticeActions);
        this.noticeAttention = [];
        this.noticeRequire = [];
        this.noticeComment = [];
        this.noticeSystem = [];
        this.lastPage = false;
    }

    //关注消息列表--成功
    onGetNoticeAttentionSuccess(data){
        if(data.status) {
            //console.info('onGgetNoticeAttentionSuccess',data);
            if(data.currentPage > 1){
                if(data.data) {
                    this.noticeAttention = this.noticeAttention.concat(data.data);
                }
            }else{
                if(data.data) {
                    this.noticeAttention = data.data;
                }
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //关注消息列表--失败
    onGetNoticeAttentionFail(data){
        //console.info('onGetNoticeAttentionFail',data);
        this.noticeAttention = [];
    }

    //需求消息列表--成功
    ongGetNoticeRequireSuccess(data){
        if(data.status) {
            //console.info('ongGetNoticeRequireSuccess',data);
            if(data.currentPage > 1){
                if(data.data) {
                    this.noticeRequire = this.noticeRequire.concat(data.data);
                }
            }else{
                if(data.data) {
                    this.noticeRequire = data.data;
                }
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //需求消息列表--失败
    onGetNoticeRequireFail(data){
        //console.info('onGetNoticeRequireFail',data);
        this.noticeRequire = [];
    }

    //评论消息列表--成功
    onGetNoticeCommentSuccess(data){
        if(data.status) {
            //console.info('onGetNoticeCommentSuccess',data);
            if(data.currentPage > 1){
                if(data.data) {
                    this.noticeComment = this.noticeComment.concat(data.data);
                }
            }else{
                if(data.data) {
                    this.noticeComment = data.data;
                }
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //评论消息列表--失败
    onGetNoticeCommentFail(data){
        //console.info('onGetNoticeCommentFail',data);
        this.noticeComment = [];
    }

    //系统消息列表--成功
    onGetNoticeSystemSuccess(data){
        if(data.status) {
            console.info('onGetNoticeSystemSuccess',data);
            if(data.currentPage > 1){
                if(data.data) {
                    this.noticeSystem = this.noticeSystem.concat(data.data);
                }
            }else{
                if(data.data) {
                    this.noticeSystem = data.data;
                }
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //系统消息列表--失败
    onGetNoticeSystemFail(data){
        //console.info('onGetNoticeSystemFail',data);
        this.noticeSystem = [];
    }
}

export default alt.createStore(TribeListStore, 'TribeListStore');

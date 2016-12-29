import alt from '../alt'
import _CommentsActions from '../actions/_CommentsActions'
import {browserHistory} from 'react-router'

class _CommentsStore{
    constructor() {
        this.bindActions(_CommentsActions);
        this.commentList = [];
        this.hotsCommentList = [];
        this.totalItems = 0;
        this.lastPage = false;
    }

    //获取评论列表--成功
    onGetCommentSuccess(data){
        if(data.status) {
            //console.info('onGetCommentSuccess',data);
            if(data.currentPage > 1){
                this.commentList = this.commentList.concat(data.data.comments);
            }else{
                if(data.data){
                    this.commentList = data.data.comments;
                    this.hotsCommentList = data.data.hots;
                    this.totalItems = data.totalItems;
                }
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //获取评论列表--失败
    onGetCommentFail(data){
        //console.info('onGetCommentFail',data);
        this.commentList = [];
        this.hotsCommentList = [];
    }

    //获取评论列表--成功
    onGetCommentListSuccess(data){
        if(data.status) {
            //console.info('onGetCommentListSuccess',data);
            if(data.currentPage > 1){
                this.commentList = this.commentList.concat(data.data);
            }else{
                if(data.data){
                    this.commentList = data.data;
                    this.totalItems = data.totalItems;
                }
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //获取评论列表--失败
    onGetCommentListFail(data){
        //console.info('onGetCommentListFail',data);
        this.commentList = [];
    }
}

export default alt.createStore(_CommentsStore, '_CommentsStore');

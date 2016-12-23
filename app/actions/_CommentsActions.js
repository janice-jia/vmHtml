import alt from '../alt'
import $ from 'jquery'

class _CommentsActions {
    constructor() {
        this.generateActions(
            'getCommentSuccess',
            'getCommentFail',
            'getCommentListSuccess',
            'getCommentListFail'
        );
    }

    //获取评论列表（包含热门评论、全部评论列表）
    getComment(data){
        $.ajax({
            type: 'Get',
            url: data.url,
            data:{
                "uid"  :  data.uid,
                "currentPage": data.currentPage,
                "itemsPerPage": data.itemsPerPage
            }
        })
        .done((data) => {
            this.getCommentSuccess(data);
        })
        .fail((jqXhr) => {
            this.getCommentFail(jqXhr);
        });
    }

    //获取评论列表（全部评论列表）
    getCommentList(data){
        $.ajax({
                type: 'Get',
                url: data.url,
                data:{
                    "uid"  :  data.uid,
                    "currentPage": data.currentPage,
                    "itemsPerPage": data.itemsPerPage
                }
            })
            .done((data) => {
                this.getCommentListSuccess(data);
            })
            .fail((jqXhr) => {
                this.getCommentListFail(jqXhr);
            });
    }
}

export default alt.createActions(_CommentsActions);
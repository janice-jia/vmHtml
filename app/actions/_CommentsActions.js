import alt from '../alt'
import $ from 'jquery'

class _CommentsActions {
    constructor() {
        this.generateActions(
            'getCommentSuccess',
            'getCommentFail'
        );
    }

    //获取评论列表
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
}

export default alt.createActions(_CommentsActions);
import alt from '../alt'
import $ from 'jquery'

class FeedBackActions {
    constructor() {
        this.generateActions(
            'feedBackSuccess',
            'feedBackFail'
        );
    }

    //反馈意见
    feedBack(data){
        $.ajax({
            type: 'POST',
            dataType:'json',
            contentType:'application/json; charset=utf-8',
            url: '/app/user/feedback',
            data:JSON.stringify(data)
        })
        .done((data) => {
            this.feedBackSuccess(data);
        })
        .fail((jqXhr) => {
            this.feedBackFail(jqXhr);
        });
    }
}

export default alt.createActions(FeedBackActions);
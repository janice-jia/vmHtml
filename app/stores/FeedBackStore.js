import alt from '../alt'
import FeedBackActions from '../actions/FeedBackActions'
import {browserHistory} from 'react-router'
import $ from 'jquery'

class FeedBackStore{
    constructor() {
        this.bindActions(FeedBackActions);
    }

    //反馈意见--成功
    onFeedBackSuccess(data){
        if(data.status) {
            //console.info('onFeedBackSuccess',data.data);
            alert('提交成功！');
        }else{
            alert(data.msg);
        }
    }

    //反馈意见--失败
    onFeedBackFail(data){
        console.info('onFeedBackFail',data);
        this.code = data.data;
    }
}

export default alt.createStore(FeedBackStore, 'FeedBackStore');

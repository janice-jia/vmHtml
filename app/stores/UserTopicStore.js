import alt from '../alt'
import UserTopicActions from '../actions/UserTopicActions'
import {browserHistory} from 'react-router'

class UserTopicStore{
    constructor() {
        this.bindActions(UserTopicActions);
        this.topicList = [];
        this.lastPage = false;
    }

    //某用户话题列表--成功
    onGetTopicSuccess(data){
        if(data.status) {
            console.info('onGetTopicSuccess',data);
            if(data.currentPage > 1){
                this.topicList = this.topicList.concat(data.data);
            }else{
                this.topicList = data.data;
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //某用户话题列表--失败
    onGetTopicFail(data){
        //console.info('onGetTopicFail',data);
        this.topicList = [];
    }
}

export default alt.createStore(UserTopicStore, 'UserTopicStore');

import alt from '../alt'
import TribeInfoActions from '../actions/TribeInfoActions'
import {browserHistory} from 'react-router'

class TribeInfoStore{
    constructor() {
        this.bindActions(TribeInfoActions);
        this.tribeInfo = {};
        this.tribeInfo.topTopics = [];

    }

    //部落详情接口--成功
    onGetTribeInfoSuccess(data){
        if(data.status) {
            console.info('onGetTribeInfoSuccess',data);
            this.tribeInfo = data.data;
        }else{
            alert(data.msg);
        }
    }
    //部落详情接口--失败
    onGetTribeInfoFail(data){
        console.info('onGetTribeInfoFail',data);
        this.tribeInfo = {};
    }
}

export default alt.createStore(TribeInfoStore, 'TribeInfoStore');

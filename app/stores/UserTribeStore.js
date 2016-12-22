import alt from '../alt'
import UserTribeActions from '../actions/UserTribeActions'
import {browserHistory} from 'react-router'

class UserTribeStore{
    constructor() {
        this.bindActions(UserTribeActions);
        this.tribeList = [];
        this.lastPage = false;
    }

    //某用户部落列表--成功
    onGetTribeSuccess(data){
        if(data.status) {
            //console.info('onGetTribeSuccess',data);
            if(data.currentPage > 1){
                if(data.data) {
                    this.tribeList = this.tribeList.concat(data.data);
                }
            }else{
                if(data.data){
                    this.tribeList = data.data;
                }
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //某用户部落列表--失败
    onGetTribeFail(data){
        //console.info('onGetTribeFail',data);
        this.tribeList = {};
    }
}

export default alt.createStore(UserTribeStore, 'UserTribeStore');

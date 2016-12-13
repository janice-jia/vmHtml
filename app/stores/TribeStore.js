import alt from '../alt'
import TribeActions from '../actions/TribeActions'
import {browserHistory} from 'react-router'

class TribeStore{
    constructor() {
        this.bindActions(TribeActions);
        this.tribeList = [];
        this.lastPage = false;
    }

    //所有部落列表接口--成功
    onGetTribeSuccess(data){
        if(data.status) {
            console.info('onGetTribeSuccess',data);
            if(data.currentPage > 1){
                this.tribeList = this.tribeList.concat(data.data);
            }else{
                this.tribeList = data.data;
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //所有部落列表接口--失败
    onGetTribeFail(data){
        console.info('onGetTribeFail',data);
        this.tribeList = {};
    }
}

export default alt.createStore(TribeStore, 'TribeStore');

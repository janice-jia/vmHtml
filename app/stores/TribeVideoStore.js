import alt from '../alt'
import TribeVideoActions from '../actions/TribeVideoActions'
import {browserHistory} from 'react-router'

class TribeVideoStore{
    constructor() {
        this.bindActions(TribeVideoActions);
        this.tribeVideoList = [];
        this.lastPage = false;
    }

    //部落所有视频列表--成功
    onGetTribeVideoSuccess(data){
        if(data.status) {
            //console.info('onGetTribeVideoSuccess',data);
            if(data.currentPage > 1){
                this.tribeVideoList = this.tribeVideoList.concat(data.data);
            }else{
                this.tribeVideoList = data.data;
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //部落所有视频列表--失败
    onGetTribeVideoFail(data){
        //console.info('onGetTribeVideoFail',data);
        this.tribeVideoList = [];
    }
}

export default alt.createStore(TribeVideoStore, 'TribeVideoStore');

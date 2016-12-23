import alt from '../alt'
import TribeNovelActions from '../actions/TribeNovelActions'
import {browserHistory} from 'react-router'

class TribeNovelStore{
    constructor() {
        this.bindActions(TribeNovelActions);
        this.tribeNovelList = [];
        this.lastPage = false;
    }

    //部落所有小说列表--成功
    onGetTribeNovelSuccess(data){
        if(data.status) {
            //console.info('onGetTribeNovelSuccess',data);
            if(data.currentPage > 1){
                if(data.data) {
                    this.tribeNovelList = this.tribeNovelList.concat(data.data);
                }
            }else{
                if(data.data) {
                    this.tribeNovelList = data.data;
                }
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //部落所有小说列表--失败
    onGetTribeNovelFail(data){
        //console.info('onGetTribeNovelFail',data);
        this.tribeNovelList = [];
    }
}

export default alt.createStore(TribeNovelStore, 'TribeNovelStore');

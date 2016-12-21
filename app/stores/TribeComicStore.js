import alt from '../alt'
import TribeComicActions from '../actions/TribeComicActions'
import {browserHistory} from 'react-router'

class TribeComicStore{
    constructor() {
        this.bindActions(TribeComicActions);
        this.tribeComicList = [];
        this.lastPage = false;
    }

    //部落所有漫画列表--成功
    onGetTribeComicSuccess(data){
        if(data.status) {
            //console.info('onGetTribeComicSuccess',data);
            if(data.currentPage > 1){
                this.tribeComicList = this.tribeComicList.concat(data.data);
            }else{
                this.tribeComicList = data.data;
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //部落所有漫画列表--失败
    onGetTribeComicFail(data){
        //console.info('onGetTribeComicFail',data);
        this.tribeComicList = [];
    }
}

export default alt.createStore(TribeComicStore, 'TribeComicStore');

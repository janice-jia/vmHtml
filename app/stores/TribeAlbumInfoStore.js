import alt from '../alt'
import TribeAlbumInfoActions from '../actions/TribeAlbumInfoActions'
import {browserHistory} from 'react-router'

class TribeAlbumInfoStore{
    constructor() {
        this.bindActions(TribeAlbumInfoActions);
        this.tribeAlbumInfoList = [];
        this.lastPage = false;
    }

    //所有部落相册详细列表--成功
    onGetTribeAlbumInfoSuccess(data){
        if(data.status) {
            //console.info('onGetTribeAlbumInfoSuccess',data);
            if(data.currentPage > 1){
                this.tribeAlbumInfoList = this.tribeAlbumInfoList.concat(data.data);
            }else{
                this.tribeAlbumInfoList = data.data;
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //所有部落相册详细列表--失败
    onGetTribeAlbumInfoFail(data){
        //console.info('onGetTribeAlbumInfoFail',data);
        this.tribeAlbumInfoList = [];
    }
}

export default alt.createStore(TribeAlbumInfoStore, 'TribeAlbumInfoStore');

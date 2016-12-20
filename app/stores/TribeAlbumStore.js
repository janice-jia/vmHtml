import alt from '../alt'
import TribeAlbumActions from '../actions/TribeAlbumActions'
import {browserHistory} from 'react-router'

class TribeAlbumStore{
    constructor() {
        this.bindActions(TribeAlbumActions);
        this.tribeAlbumList = [];
        this.lastPage = false;
    }

    //部落所有相册列表--成功
    onGetTribeAlbumSuccess(data){
        if(data.status) {
            //console.info('onGetTribeAlbumSuccess',data);
            if(data.currentPage > 1){
                this.tribeAlbumList = this.tribeAlbumList.concat(data.data);
            }else{
                this.tribeAlbumList = data.data;
            }
            this.lastPage = data.lastPage;

        }else{
            alert(data.msg);
        }
    }
    //部落所有相册列表--失败
    onGetTribeAlbumFail(data){
        //console.info('onGetTribeAlbumFail',data);
        this.tribeAlbumList = [];
    }
}

export default alt.createStore(TribeAlbumStore, 'TribeAlbumStore');

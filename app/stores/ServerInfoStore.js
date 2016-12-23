import alt from '../alt'
import ServerInfoActions from '../actions/ServerInfoActions'

class ServerInfoStore{
    constructor() {
        this.bindActions(ServerInfoActions);
        this.serverInfo = {};
        this.serverInfo.skills = [];
        this.serverInfo.artworkList = [];
    }

    //服务详细接口--成功
    onGetServerInfoSuccess(data){
        if(data.status) {
            //console.info('onGetServerInfoSuccess',data);
            if(data.data.status == 1){
                data.data.skills = data.data;
            }
            this.serverInfo = data.data;
        }else{
            alert(data.msg);
        }
    }
    //服务详细接口--失败
    onGetServerInfoFail(data){
        //console.info('onGetServerInfoFail',data);
        this.serverInfo = {};
    }

    //关注某人--成功
    onAttentionUserSuccess(data){
        if(data.status) {
            //console.info('onAttentionUserSuccess',data);
            this.serverInfo.isAttention = true;
        }else{
            this.serverInfo.isAttention = false;
        }
    }
    //关注某人--失败
    onAttentionUserFail(data){
        //console.info('onAttentionUserFail',data);
        this.serverInfo.isAttention = false;
    }


    //取消关注--成功
    onAttentionCancelSuccess(data){
        if(data.status) {
            //console.info('onAttentionCancelSuccess',data);
            this.requireInfo.isAttention = false;
        }else{
            this.requireInfo.isAttention = true;
        }
    }
    //取消关注--失败
    onAttentionCancelFail(data){
        //console.info('onAttentionCancelFail',data);
        this.requireInfo.isAttention = true;
    }
}

export default alt.createStore(ServerInfoStore, 'ServerInfoStore');

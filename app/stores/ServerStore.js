import alt from '../alt'
import ServerActions from '../actions/ServerActions'

class ServerStore{
    constructor() {
        this.bindActions(ServerActions);
        this.personalServerList = [];
        this.studioServerList = [];
        this.companyServerList = [];
    }

    //服务列表接口--成功
    onGetServerListSuccess(data){
        if(data.status) {
            if(data.type ==1){
                this.personalServerList = data.data;
            }else if(data.type ==2){
                this.studioServerList = data.data;
            }else if(data.type ==3){
                this.companyServerList = data.data;
            }
            console.info('onGetServerListSuccess',data);

            //获取部落详细成功--unshift族员
            this.serverList = data.data;
        }else{
            alert(data.msg);
        }
    }
    //服务列表接口--失败
    onGetServerListFail(data){
        //console.info('onGetServerListFail',data);
        this.serverList = [];
    }
}

export default alt.createStore(ServerStore, 'ServerStore');

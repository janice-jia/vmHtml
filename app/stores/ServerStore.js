import alt from '../alt'
import ServerActions from '../actions/ServerActions'

class ServerStore{
    constructor() {
        this.bindActions(ServerActions);
        this.personalServerList = [];
        this.studioServerList = [];
        this.companyServerList = [];
        this.lastPage = false;
    }

    //服务列表接口--成功
    onGetServerListSuccess(data){
        if(data.status) {
            if(data.type ==1){
                if(data.data){
                    if(data.currentPage > 1){
                        this.personalServerList = this.personalServerList.concat(data.data);
                    }else{
                        this.personalServerList = data.data;
                    }
                }
            }else if(data.type ==2){
                if(data.currentPage > 1){
                    this.studioServerList = this.studioServerList.concat(data.data);
                }else{
                    this.studioServerList = data.data;
                }
            }else if(data.type ==3){
                if(data.currentPage > 1){
                    this.companyServerList = this.companyServerList.concat(data.data);
                }else{
                    this.companyServerList = data.data;
                }
            }
            this.lastPage = data.lastPage;
            //console.info('onGetServerListSuccess',data);

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

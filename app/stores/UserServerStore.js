import alt from '../alt'
import UserServerActions from '../actions/UserServerActions'

class UserServerStore{
    constructor() {
        this.bindActions(UserServerActions);
        this.serverList = [];
    }

    //查看用户服务列表接口--成功
    onGetServerListSuccess(data){
        if(data.status) {
            //console.info('onGetServerListSuccess',data);
            if(data.data){
                this.serverList = data.data;
            }else{
                this.serverList = [];
            }

        }else{
            alert(data.msg);
        }
    }

    //查看用户服务列表接口--失败
    onGetServerListFail(data){
        //console.info('onGetServerListFail',data);
        this.serverList = [];
    }

}

export default alt.createStore(UserServerStore, 'UserServerStore');

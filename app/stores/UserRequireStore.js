import alt from '../alt'
import UserRequireActions from '../actions/UserRequireActions'

class UserRequireStore{
    constructor() {
        this.bindActions(UserRequireActions);
        this.requireList = [];
        this.applyRequireList = [];
    }

    //我发布的需求列表接口--成功
    onGetRuquireListSuccess(data){
        if(data.status) {
            console.info('onGetRuquireListSuccess',data);
            if(data.data){
                this.requireList = data.data;
            }else{
                this.requireList = [];
            }

        }else{
            alert(data.msg);
        }
    }

    //我发布的需求列表接口--失败
    onGetRuquireListFail(data){
        //console.info('onGetRuquireListFail',data);
        this.requireList = [];
    }

    //我参与的需求列表接口--成功
    ongGetApplyRuquireListSuccess(data){
        if(data.status) {
            //console.info('onGetRuquireListSuccess',data);
            if(data.data){
                this.applyRequireList = data.data;
            }else{
                this.applyRequireList = [];
            }
        }else{
            alert(data.msg);
        }
    }

    //我参与的需求列表接口--失败
    onGgetApplyRuquireListFail(data){
        //console.info('onGetRuquireListFail',data);
        this.applyRequireList = [];
    }
}

export default alt.createStore(UserRequireStore, 'UserRequireStore');

import alt from '../alt'
import RequireActions from '../actions/RequireActions'

class RequireStore{
    constructor() {
        this.bindActions(RequireActions);
        this.requireList = [];
    }

    //需求列表接口--成功
    onGetRuquireListSuccess(data){
        if(data.status) {
            console.info('onGetRuquireListSuccess',data);
            this.requireList = data.data;
        }else{
            alert(data.msg);
        }
    }
    //需求列表接口--失败
    onGetRuquireListFail(data){
        //console.info('onGetRuquireListFail',data);
        this.serverList = [];
    }
}

export default alt.createStore(RequireStore, 'RequireStore');

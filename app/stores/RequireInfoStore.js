import alt from '../alt'
import RequireInfoActions from '../actions/RequireInfoActions'

class RequireInfoStore{
    constructor() {
        this.bindActions(RequireInfoActions);
        this.requireInfo = {};
        this.requireInfo.skills = [];
        this.requireInfo.userInfo = {};
    }

    //需求详细接口--成功
    onGetRuquireInfoSuccess(data){
        if(data.status) {
            console.info('onGetRuquireInfoSuccess',data);
            if(data.data.status == 1){
                data.data.skills = data.data.worksTypes;
            }
            this.requireInfo = data.data;
        }else{
            alert(data.msg);
        }
    }
    //需求详细接口--失败
    onGetRuquireInfoFail(data){
        //console.info('onGetRuquireInfoFail',data);
        this.requireInfo = {};
    }

    //关注某人--成功
    onAttentionUserSuccess(data){
        if(data.status) {
            console.info('onAttentionUserSuccess',data);
            this.requireInfo.isAttention = true;
            console.info('this.requireInfo',this.requireInfo);
        }else{
            this.requireInfo.isAttention = false;
        }
    }
    //关注某人--失败
    onAttentionUserFail(data){
        //console.info('onAttentionUserFail',data);
        this.requireInfo.isAttention = false;
    }


    //取消关注--成功
    onAttentionCancelSuccess(data){
        if(data.status) {
            console.info('onAttentionCancelSuccess',data);
            this.requireInfo.isAttention = false;
            console.info('this.requireInfo',this.requireInfo);
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

export default alt.createStore(RequireInfoStore, 'RequireInfoStore');

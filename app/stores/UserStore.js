import alt from '../alt'
import UserActions from '../actions/UserActions'
import {browserHistory} from 'react-router'

class UserStore{
    constructor() {
        this.bindActions(UserActions);
        this.userInfo = {};
    }

    //当前用户信息--成功
    onGetUserSuccess(data){
        if(data.status) {
            //console.info('onGetUserSuccess',data);
            this.userInfo = data.data;
        }else{
            alert(data.msg);
        }
    }
    //当前用户信息--失败
    onGetUserFail(data){
        //console.info('onGetUserFail',data);
        this.userInfo = {};
    }

    //查看他人用户信息--成功
    onGetLookUserSuccess(data){
        if(data.status) {
            //console.info('onGetLookUserSuccess',data);
            this.userInfo = data.data;
        }else{
            this.userInfo = {};
        }
    }

    //查看他人用户信息--失败
    onGetUserFail(data){
        //console.info('onGetUserFail',data);
        this.userInfo = {};
    }

    //关注某人--成功
    onAttentionUserSuccess(data){
        if(data.status) {
            //console.info('onAttentionUserSuccess',data);
            this.userInfo.isAttention = true;
        }else{
            this.userInfo.isAttention = false;
        }
    }
    //关注某人--失败
    onAttentionUserFail(data){
        //console.info('onAttentionUserFail',data);
        this.userInfo.isAttention = false;
    }


    //取消关注--成功
    onAttentionCancelSuccess(data){
        if(data.status) {
            //console.info('onAttentionCancelSuccess',data);
            this.userInfo.isAttention = false;
        }else{
            this.userInfo.isAttention = true;
        }
    }
    //取消关注--失败
    onAttentionCancelFail(data){
        //console.info('onAttentionCancelFail',data);
        this.userInfo.isAttention = true;
    }
}

export default alt.createStore(UserStore, 'UserStore');

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
            console.info('onGetLookUserSuccess',data);
            this.userInfo = data.data;
        }else{
            this.userInfo = [];
        }
    }

    //查看他人用户信息--失败
    onGetUserFail(data){
        console.info('onGetUserFail',data);
        this.userInfo = [];
    }
}

export default alt.createStore(UserStore, 'UserStore');

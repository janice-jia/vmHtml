import alt from '../alt'
import RegisterActions from '../actions/RegisterActions'

class RegisterStore{
    constructor() {
        this.bindActions(RegisterActions);
        this.userInfo = {}
    }

    //发送验证码--成功
    onGetCodeSuccess(data){
        console.info('onGetCodeSuccess',data);
        this.code = data.code;
    }

    //发送验证码--失败
    onGetCodeFail(data){
        console.info('onGetCodeFail',data);
        this.code = data.data;
    }

    //验证验证码--成功
    onCheckCodeSuccess(data){
        console.info('onCheckCodeSuccess',data);
        if(data.status){
            return true;
        }else{
            return false;
        }
    }

    //验证验证码--失败
    onCheckCodeFail(data){
        console.info('onCheckCodeFail',data);
        return false;
    }

    //用户注册--成功
    onRegisterSuccess(data){
        //console.info('onRegisterSuccess',data);
        this.code = data.code;
        if(data.status){
            this.userInfo = data.data;
            return true;
        }else{
            this.userInfo = {};
            alert(data.msg);
            return false;
        }
    }

    //用户注册--失败
    onRegisterFail(data){
        //console.info('onRegisterFail',data);
        this.userInfo = {};
        return false;
    }
}

export default alt.createStore(RegisterStore, 'RegisterStore');

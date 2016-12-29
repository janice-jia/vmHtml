import alt from '../alt'
import ForgetPwdActions from '../actions/ForgetPwdActions'
import {browserHistory} from 'react-router'

class ForgetPwdStore{
    constructor() {
        this.bindActions(ForgetPwdActions);
    }

    //发送验证码--成功
    onGetCodeSuccess(data){
        //console.info('onGetCodeSuccess',data);
        this.code = data.code;
    }

    //发送验证码--失败
    onGetCodeFail(data){
        //console.info('onGetCodeFail',data);
        this.code = data.data;
    }

    //验证验证码--成功
    onCheckCodeSuccess(data){
        //console.info('onCheckCodeSuccess',data);
        if(data.status){
            return true;
        }else{
            return false;
        }
    }

    //验证验证码--失败
    onCheckCodeFail(data){
        //console.info('onCheckCodeFail',data);
        return false;
    }

    //忘记密码--成功
    onForgetPwdSuccess(data){
        //console.info('onForgetPwdSuccess',data);
        if(data.status){
            alert('修改密码成功');
            browserHistory.push('/login/');
            return true;
        }else{
            alert(data.msg);
            return false;
        }
    }

    //忘记密码--失败
    onForgetPwdFail(data){
        //console.info('onForgetPwdFail',data);
        return false;
    }
}

export default alt.createStore(ForgetPwdStore, 'ForgetPwdStore');

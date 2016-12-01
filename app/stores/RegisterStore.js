import alt from '../alt'
import RegisterActions from '../actions/RegisterActions'

class RegisterStore{
    constructor() {
        this.bindActions(RegisterActions);
    }

    //获取验证码--成功
    onGetCodeSuccess(data){
        this.code = data.code;
    }

    //获取验证码--失败
    onGetCodeFail(data){
        this.code = data.data;
    }
}

export default alt.createStore(RegisterStore, 'RegisterStore');

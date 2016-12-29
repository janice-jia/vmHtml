import alt from '../alt'
import LoginActions from '../actions/LoginActions'
import {browserHistory} from 'react-router'
import $ from 'jquery'
import cookie from 'react-cookie'

class LoginStore{
    constructor() {
        this.bindActions(LoginActions);
    }

    //用户登录--成功
    onLoginSuccess(data){
        if(data.status) {
            alert('登录成功');
            //console.info(data.data);
            //localStorage.setItem('uid', data.data.uid);
            cookie.save('uid', data.data.uid, { path: '/' });
            browserHistory.push('/user/'+data.data.uid);
        }else{
            alert(data.msg);
        }
    }

    //用户登录--失败
    onLoginFail(data){
        //console.info('onLoginFail',data);
        this.code = data.data;
    }
}

export default alt.createStore(LoginStore, 'LoginStore');

import alt from '../alt'
import $ from 'jquery'

class LoginActions {
    constructor() {
        this.generateActions(
            'loginSuccess',
            'loginFail'
        );
    }

    //用户登录
    login(data){
        $.ajax({
            type: 'POST',
            dataType:'json',
            contentType:'application/json; charset=utf-8',
            url: '/app/user/login',
            data:JSON.stringify(data)
        })
        .done((data) => {
            this.loginSuccess(data);
        })
        .fail((jqXhr) => {
            this.LoginFail(jqXhr);
        });
    }
}

export default alt.createActions(LoginActions);
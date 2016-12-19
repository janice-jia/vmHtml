import alt from '../alt'
import $ from 'jquery'

class RegisterActions {
    constructor() {
        this.generateActions(
            'getCodeSuccess',
            'getCodeFail',
            'checkCodeSuccess',
            'checkCodeFail',
            'registerSuccess',
            'registerFail'
        );
    }

    //发送验证码
    getCode(mobile) {
        $.ajax({
            type: 'Get',
            url: '/code/send',
            data:{mobile:mobile}
        })
        .done((data) => {
            this.getCodeSuccess(data);
        })
        .fail((jqXhr) => {
            this.getCodeFail(jqXhr);
        });
    }

    //验证验证码
    checkCode(data) {
        $.ajax({
            type: 'POST',
            dataType:'json',
            contentType:'application/json; charset=utf-8',
            url: '/code/check',
            data:JSON.stringify(data)
        })
        .done((data) => {
            this.checkCodeSuccess(data);
        })
        .fail((jqXhr) => {
            this.checkCodeFail(jqXhr);
        });
    }

    //用户注册
    register(data){
        $.ajax({
            type: 'POST',
            dataType:'json',
            contentType:'application/json; charset=utf-8',
            url: '/app/user/register',
            data:JSON.stringify(data)
        })
        .done((data) => {
            this.registerSuccess(data);
        })
        .fail((jqXhr) => {
            this.registerFail(jqXhr);
        });
    }
}

export default alt.createActions(RegisterActions);
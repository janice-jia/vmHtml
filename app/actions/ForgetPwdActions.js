import alt from '../alt'
import $ from 'jquery'

class ForgetPwdActions {
    constructor() {
        this.generateActions(
            'getCodeSuccess',
            'getCodeFail',
            'checkCodeSuccess',
            'checkCodeFail',
            'forgetPwdSuccess',
            'forgetPwdFail'
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

    //忘记密码
    forgetPwd(data){
        $.ajax({
            type: 'POST',
            dataType:'json',
            contentType:'application/json; charset=utf-8',
            url: '/app/user/forgot/password',
            data:JSON.stringify(data)
        })
        .done((data) => {
            this.forgetPwdSuccess(data);
        })
        .fail((jqXhr) => {
            this.forgetPwdFail(jqXhr);
        });
    }
}

export default alt.createActions(ForgetPwdActions);
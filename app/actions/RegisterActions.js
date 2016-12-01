import alt from '../alt'
import $ from 'jquery'

class RegisterActions {
    constructor() {
        this.generateActions(
            'getCodeSuccess',
            'getCodeFail'
        );
    }

    //获取验证码
    getCode(mobile) {
        $.ajax({
            type: 'Get',
            url: '/code/check',
            data:{mobile:mobile}
        })
        .done((data) => {
            this.getCodeSuccess(data);
        })
        .fail((jqXhr) => {
            this.getCodeFail(jqXhr);
        });
    }
}

export default alt.createActions(RegisterActions);
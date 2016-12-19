import alt from '../alt'
import $ from 'jquery'

class UserTribeActions {
    constructor() {
        this.generateActions(
            'getTribeSuccess',
            'getTribeFail'
        );
    }

    //某用户部落列表
    getTribe(data){
        $.ajax({
            type: 'Get',
            url: '  /app/user/'+data.uid+'/tribe/list',
            data:data
        })
        .done((data) => {
            this.getTribeSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTribeFail(jqXhr);
        });
    }
}

export default alt.createActions(UserTribeActions);
import alt from '../alt'
import $ from 'jquery'

class TribeInfoActions {
    constructor() {
        this.generateActions(
            'getTribeInfoSuccess',
            'getTribeInfoFail'
        );
    }

    //部落详情接口
    getTribeInfo(tribeId){
        $.ajax({
            type: 'Get',
            url: '/app/tribe/'+tribeId,
        })
        .done((data) => {
            this.getTribeInfoSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTribeInfoFail(jqXhr);
        });
    }

    //加入部落
    addMember(){

    }
}

export default alt.createActions(TribeInfoActions);
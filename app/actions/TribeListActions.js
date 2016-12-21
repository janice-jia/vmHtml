import alt from '../alt'
import $ from 'jquery'

class TribeActions {
    constructor() {
        this.generateActions(
            'getTribeSuccess',
            'getTribeFail'
        );
    }

    //所有部落列表
    getTribe(data){
        $.ajax({
            type: 'Get',
            url: ' /app/tribe/list',
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

export default alt.createActions(TribeActions);
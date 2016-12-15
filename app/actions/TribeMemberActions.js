import alt from '../alt'
import $ from 'jquery'

class TribeMemberActions {
    constructor() {
        this.generateActions(
            'getMemberSuccess',
            'getMemberFail'
        );
    }

    //部落族员列表
    getMember(data){
        $.ajax({
            type: 'Get',
            url: '/app/tribe/'+data.tribeId+'/member/list',
            data:{
                "currentPage": data.currentPage,
                "itemsPerPage": data.itemsPerPage
            }
        })
        .done((data) => {
            this.getMemberSuccess(data);
        })
        .fail((jqXhr) => {
            this.getMemberFail(jqXhr);
        });
    }


}

export default alt.createActions(TribeMemberActions);
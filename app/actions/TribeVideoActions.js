import alt from '../alt'
import $ from 'jquery'

class TribeVideoActions {
    constructor() {
        this.generateActions(
            'getTribeVideoSuccess',
            'getTribeVideoFail'
        );
    }

    //部落所有视频列表
    getTribeVideo(data){
        $.ajax({
            type: 'Get',
            url: '/app/tribe/'+data.tribeId+'/video/list',
            data:{
                "currentPage": data.currentPage,
                "itemsPerPage": data.itemsPerPage
            }
        })
        .done((data) => {
            this.getTribeVideoSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTribeVideoFail(jqXhr);
        });
    }
}

export default alt.createActions(TribeVideoActions);
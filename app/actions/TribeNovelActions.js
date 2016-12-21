import alt from '../alt'
import $ from 'jquery'

class TribeNovelActions {
    constructor() {
        this.generateActions(
            'getTribeNovelSuccess',
            'getTribeNovelFail'
        );
    }

    //部落所有小说列表
    getTribeNovel(data){
        $.ajax({
            type: 'Get',
            url:  '/app/tribe/'+data.tribeId+'/tab/'+data.tabId+'/content/list/',
            data:{
                "currentPage": data.currentPage,
                "itemsPerPage": data.itemsPerPage
            }
        })
        .done((data) => {
            this.getTribeNovelSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTribeNovelFail(jqXhr);
        });
    }
}

export default alt.createActions(TribeNovelActions);
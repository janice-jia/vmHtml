import alt from '../alt'
import $ from 'jquery'

class TribeComicActions {
    constructor() {
        this.generateActions(
            'getTribeComicSuccess',
            'getTribeComicFail'
        );
    }

    //部落所有漫画列表
    getTribeComic(data){
        $.ajax({
            type: 'Get',
            url:  '/app/tribe/'+data.tribeId+'/tab/'+data.tabId+'/content/list/',
            data:{
                "currentPage": data.currentPage,
                "itemsPerPage": data.itemsPerPage
            }
        })
        .done((data) => {
            this.getTribeComicSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTribeComicFail(jqXhr);
        });
    }
}

export default alt.createActions(TribeComicActions);
import alt from '../alt'
import $ from 'jquery'

class TribeAlbumActions {
    constructor() {
        this.generateActions(
            'getTribeAlbumSuccess',
            'getTribeAlbumFail'
        );
    }

    //部落所有相册列表
    getTribeAlbum(data){
        $.ajax({
            type: 'Get',
            url:  '/app/tribe/'+data.tribeId+'/tab/'+data.tabId+'/content/list/',
            data:{
                "currentPage": data.currentPage,
                "itemsPerPage": data.itemsPerPage
            }
        })
        .done((data) => {
            this.getTribeAlbumSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTribeAlbumFail(jqXhr);
        });
    }
}

export default alt.createActions(TribeAlbumActions);
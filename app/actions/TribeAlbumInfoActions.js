import alt from '../alt'
import $ from 'jquery'

class TribeAlbumInfoActions {
    constructor() {
        this.generateActions(
            'getTribeAlbumInfoSuccess',
            'getTribeAlbumInfoFail'
        );
    }

    //所有部落相册详细列表
    getTribeAlbumInfo(data){
        $.ajax({
            type: 'Get',
            url: '/app/tribe/'+data.tribeId+'/photo-album/'+data.albumId+'/photo/list',
            data:{
                "uid"  :  data.uid,
                "currentPage": data.currentPage,
                "itemsPerPage": data.itemsPerPage
            }
        })
        .done((data) => {
            this.getTribeAlbumInfoSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTribeAlbumInfoFail(jqXhr);
        });
    }
}

export default alt.createActions(TribeAlbumInfoActions);
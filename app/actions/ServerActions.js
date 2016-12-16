import alt from '../alt'
import $ from 'jquery'

class ServerActions{
    constructor() {
        this.generateActions(
            'getServerListSuccess',
            'getServerListFail'
        );
    }

    //服务列表接口
    getServerList(data){
        var type = data.type;
        $.ajax({
            type: 'Get',
            url: '/app/server/list/filter',
            data:{
                "currentPage":data.currentPage , // 当前页 int
                "itemsPerPage":data.itemsPerPage ,// 每一页数据条数 int
                "type":type
            }
        })
        .done((data) => {
            data.type = type;
            this.getServerListSuccess(data);
        })
        .fail((jqXhr) => {
            this.getServerListFail(jqXhr);
        });
    }

}

export default alt.createActions(ServerActions);
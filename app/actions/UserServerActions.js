import alt from '../alt'
import $ from 'jquery'
import publicFn from '../publicFn'

class UserServerActions{
    constructor() {
        this.generateActions(
            'getServerListSuccess',
            'getServerListFail'
        );
    }

    //查看用户服务列表接口
    getServerList(data){
        $.ajax({
            type: 'Get',
            url: '/app/server/list/'+data.uid,
            data:{
                "uid":publicFn.getUser() , // 当前用户 int
                "currentPage":data.currentPage , // 当前页 int
                "itemsPerPage":data.itemsPerPage ,// 每一页数据条数 int
            }
        })
        .done((data) => {
            this.getServerListSuccess(data);
        })
        .fail((jqXhr) => {
            this.getServerListFail(jqXhr);
        });
    }
}

export default alt.createActions(UserServerActions);
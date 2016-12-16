import alt from '../alt'
import $ from 'jquery'

class RequireActions{
    constructor() {
        this.generateActions(
            'getRuquireListSuccess',
            'getRuquireListFail'
        );
    }

    //需求列表接口
    getRuquireList(data){
        $.ajax({
            type: 'Get',
            url: '/app/require/list',
            data:{
                "currentPage":data.currentPage , // 当前页 int
                "itemsPerPage":data.itemsPerPage ,// 每一页数据条数 int
            }
        })
        .done((data) => {
            this.getRuquireListSuccess(data);
        })
        .fail((jqXhr) => {
            this.getRuquireListFail(jqXhr);
        });
    }

}

export default alt.createActions(RequireActions);
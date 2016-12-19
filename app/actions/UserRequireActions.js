import alt from '../alt'
import $ from 'jquery'
import publicFn from '../publicFn'

class UserRequireActions{
    constructor() {
        this.generateActions(
            'getRuquireListSuccess',
            'getRuquireListFail',
            'getApplyRuquireListSuccess',
            'getApplyRuquireListFail'
        );
    }

    //我发布的需求列表接口
    getRuquireList(data){
        $.ajax({
            type: 'Get',
            url: '/app/user/'+data.uid+'/require/list',
            data:{
                "currentUid":publicFn.getUser() , // 当前页 int
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

    //我参与的需求列表接口
    getApplyRuquireList(data){
        $.ajax({
                type: 'Get',
                url: '/app/user/'+data.uid+'/apply/require/list',
                data:{
                    "currentPage":data.currentPage , // 当前页 int
                    "itemsPerPage":data.itemsPerPage ,// 每一页数据条数 int
                }
            })
            .done((data) => {
                this.getApplyRuquireListSuccess(data);
            })
            .fail((jqXhr) => {
                this.getApplyRuquireListFail(jqXhr);
            });
    }

}

export default alt.createActions(UserRequireActions);
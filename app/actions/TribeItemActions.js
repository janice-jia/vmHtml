import alt from '../alt'
import $ from 'jquery'

class TribeItemActions {
    constructor() {
        this.generateActions(
            'getTribeInfoSuccess',
            'getTribeInfoFail',
            'getTopicConSuccess',
            'getTopicConFail',
            'addMemberSuccess',
            'addMemberFail',
            'delMemberSuccess',
            'delMemberFail'
        );
    }

    //部落详情接口
    getTribeInfo(data){
        $.ajax({
            type: 'Get',
            url: '/app/tribe/'+data.tribeId,
            data:{uid:data.uid}
        })
        .done((data) => {
            this.getTribeInfoSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTribeInfoFail(jqXhr);
        });
    }

    //部落话题列表
    getTopicCon(data){
        $.ajax({
                type: 'Get',
                url: '/app/tribe/'+data.tribeId+'/tab/'+data.tabId+'/content/list',
                data:{
                    uid: data.uid,
                    currentPage: data.currentPage,
                    itemsPerPage: data.itemsPerPage
                }
            })
            .done((data) => {
                this.getTopicConSuccess(data);
            })
            .fail((jqXhr) => {
                this.getTopicConConFail(jqXhr);
            });
    }

    //加入部落
    addMember(data){
        $.ajax({
            type: 'POST',
            dataType:'json',
            contentType:'application/json; charset=utf-8',
            url: '/app/tribe/'+data.tribeId+'/member',
            data:JSON.stringify({uid:data.uid})
        })
        .done((data) => {
            this.addMemberSuccess(data);
        })
        .fail((jqXhr) => {
            this.addMemberFail(jqXhr);
        });
    }

    //退出部落
    delMember(data){
        $.ajax({
                type: 'DELETE',
                url: '/app/tribe/'+data.tribeId+'/member/'+data.uid,
            })
            .done((data) => {
                this.delMemberSuccess(data);
            })
            .fail((jqXhr) => {
                this.delMemberFail(jqXhr);
            });
    }
}

export default alt.createActions(TribeItemActions);
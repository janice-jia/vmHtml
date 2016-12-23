import alt from '../alt'
import $ from 'jquery'
import publicFn from '../publicFn'

class ServerInfoActions{
    constructor() {
        this.generateActions(
            'getServerInfoSuccess',
            'getServerInfoFail',
            'attentionUserSuccess',
            'attentionUserFail',
            'attentionCancelSuccess',
            'attentionCancelFail'
        );
    }

    //服务详细接口
    getServerInfo(serverId){
        $.ajax({
            type: 'Get',
            url: '/app/server/'+serverId,
            data:{
                "uid":publicFn.getUser()
            }
        })
        .done((data) => {
            this.getServerInfoSuccess(data);
        })
        .fail((jqXhr) => {
            this.getServerInfoFail(jqXhr);
        });
    }



    //关注某人
    attentionUser(uid){
        $.ajax({
            type: 'Get',
            url: '/app/user/attention/'+uid+'/',
            data:{
                "attentionId":publicFn.getUser()
            }
        })
        .done((data) => {
            this.attentionUserSuccess(data);
        })
        .fail((jqXhr) => {
            this.attentionUserFail(jqXhr);
        });
    }

    //关注某人
    attentionCancel(uid){
        $.ajax({
                type: 'Get',
                url: '/app/user/attention/cancel/'+uid+'/',
                data:{
                    "attentionId":publicFn.getUser()
                }
            })
            .done((data) => {
                this.attentionCancelSuccess(data);
            })
            .fail((jqXhr) => {
                this.attentionCancelFail(jqXhr);
            });
    }
}

export default alt.createActions(ServerInfoActions);
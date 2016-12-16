import alt from '../alt'
import $ from 'jquery'
import publicFn from '../publicFn'

class RequireInfoActions{
    constructor() {
        this.generateActions(
            'getRuquireInfoSuccess',
            'getRuquireInfoFail',
            'attentionUserSuccess',
            'attentionUserFail',
            'attentionCancelSuccess',
            'attentionCancelFail'
        );
    }

    //需求详细接口
    getRuquireInfo(requireId){
        $.ajax({
            type: 'Get',
            url: '/app/require/'+requireId,
            data:{
                "uid":publicFn.getUser()
            }
        })
        .done((data) => {
            this.getRuquireInfoSuccess(data);
        })
        .fail((jqXhr) => {
            this.getRuquireInfoFail(jqXhr);
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

export default alt.createActions(RequireInfoActions);
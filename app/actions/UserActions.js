import alt from '../alt'
import $ from 'jquery'
import publicFn from '../publicFn'

class UserActions {
    constructor() {
        this.generateActions(
            'getUserSuccess',
            'getUserFail',
            'getLookUserSuccess',
            'getLookUserFail',
            'attentionUserSuccess',
            'attentionUserFail',
            'attentionCancelSuccess',
            'attentionCancelFail'
        );
    }

    //当前用户信息
    getUser(data){
        $.ajax({
            type: 'Get',
            url: '/app/user/'+data.uid+'/infos',
            data:{password:data.password}
        })
        .done((data) => {
            this.getUserSuccess(data);
        })
        .fail((jqXhr) => {
            this.getUserFail(jqXhr);
        });
    }

    //查看他人用户信息
    getLookUser(uid){
        $.ajax({
                type: 'Get',
                url: '/app/user/look/'+uid+'/infos',
                data:{lookUid:publicFn.getUser()}
            })
            .done((data) => {
                this.getLookUserSuccess(data);
            })
            .fail((jqXhr) => {
                this.getUserFail(jqXhr);
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

export default alt.createActions(UserActions);
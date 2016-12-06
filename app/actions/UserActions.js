import alt from '../alt'
import $ from 'jquery'

class UserActions {
    constructor() {
        this.generateActions(
            'getUserSuccess',
            'getUserFail',
            'getLookUserSuccess',
            'getLookUserFail'
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
                data:{lookUid:uid}
            })
            .done((data) => {
                this.getLookUserSuccess(data);
            })
            .fail((jqXhr) => {
                this.getUserFail(jqXhr);
            });
    }
}

export default alt.createActions(UserActions);
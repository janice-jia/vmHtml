import alt from '../alt'
import $ from 'jquery'

class UserTopicActions {
    constructor() {
        this.generateActions(
            'getTopicSuccess',
            'getTopicFail'
        );
    }

    //某用户话题列表
    getTopic(data){
        $.ajax({
            type: 'Get',
            url: '/app/user/'+data.uid+'/topic/list/',
            data:data
        })
        .done((data) => {
            this.getTopicSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTopicFail(jqXhr);
        });
    }
}

export default alt.createActions(UserTopicActions);
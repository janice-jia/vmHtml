import alt from '../alt'
import $ from 'jquery'

class TribeTopicAction {
    constructor() {
        this.generateActions(
            'getTopicInfoSuccess',
            'getTopicInfoFail'
        );
    }

    //部落话题详情接口
    getTopicInfo(topicId){
        $.ajax({
            type: 'Get',
            url: '/tribe/theme/'+topicId,
        })
        .done((data) => {
            this.getTopicInfoSuccess(data);
        })
        .fail((jqXhr) => {
            this.getTopicInfoFail(jqXhr);
        });
    }

}

export default alt.createActions(TribeTopicAction);
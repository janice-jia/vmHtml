import alt from '../alt'
import TribeTopicActions from '../actions/TribeTopicActions'

class TribeTopicStore{
    constructor() {
        this.bindActions(TribeTopicActions);
        this.topicInfo = {};
    }

    //部落话题详情接口--成功
    onGetTopicInfoSuccess(data){
        if(data.status) {
            //console.info('onGetTopicInfoSuccess',data);

            this.topicInfo = data.data;
        }else{
            //alert(data.msg);
        }
    }
    //部落话题详情接口--失败
    onGetTopicInfoFail(data){
        //console.info('onGetTopicInfoFail',data);
        this.topicInfo = {};
    }
}

export default alt.createStore(TribeTopicStore, 'TribeTopicStore');

import alt from '../alt'
import TribeInfoActions from '../actions/TribeInfoActions'
import {browserHistory} from 'react-router'
import publicFn from '../publicFn'

class TribeInfoStore{
    constructor() {
        this.bindActions(TribeInfoActions);
        this.tribeInfo = {};
        this.tribeInfo.topTopics = [];
        this.tribeInfo.tabs = [];
        this.topicList = [];
        this.currentPage = 1;
        this.lastPage = true;
        this.tabId = null;
    }

    //部落详情接口--成功
    onGetTribeInfoSuccess(data){
        if(data.status) {
            //console.info('onGetTribeInfoSuccess',data);

            //获取部落详细成功--unshift族员
            var num = 0;
            for (var i in data.data.tabs){
                if(data.data.tabs[i].category != 1){
                    num = num+1;
                }else if(data.data.tabs[i].category == 1){
                    this.tabId = data.data.tabs[i].id;
                }
            }
            data.data.tabs.unshift({name:'族员',category:0, className: num>0 ? 'border-none': 'border-none text-left padding-h'});
            this.tribeInfo = data.data;

            //获取部落详细成功--获取部落话题
            this.lastPage = data.lastPage;
            if(this.tabId){
                TribeInfoActions.getTopicCon({
                    tribeId:this.tribeInfo.id,
                    tabId:201,
                    uid:publicFn.getUser(),
                    currentPage:this.currentPage,
                    itemsPerPage:10
                });
            }
        }else{
            alert(data.msg);
        }
    }
    //部落详情接口--失败
    onGetTribeInfoFail(data){
        //console.info('onGetTribeInfoFail',data);
        this.tribeInfo = {};
    }

    //部落话题列表--成功
    onGetTopicConSuccess(data){
        if(data.status) {
            console.info('onGetTopicConSuccess',data);
            if(data.data != null && data.currentPage > 1){
                this.topicList = this.topicList.concat(data.data);
                this.currentPage = data.currentPage;
            } else{
                this.topicList = data.data;
            }
            this.lastPage = data.lastPage;
        }else{
            alert(data.msg);
        }
    }
    //部落话题列表--失败
    onGetTopicConFail(data){
        //console.info('onGetTopicConFail',data);
        this.topicList = {};
    }

    //加入部落--成功
    onAddMemberSuccess(data){
        if(data.status) {
            this.tribeInfo.hasJoined = true;
        }else{
            alert(data.msg);
        }
    }
    //加入部落--失败
    onAddMemberFail(data){
        this.tribeInfo.hasJoined = false;
    }

    //退出部落--成功
    onDelMemberSuccess(data){
        if(data.status) {
            this.tribeInfo.hasJoined = false;
        }else{
            alert(data.msg);
        }
    }
    //退出部落--失败
    onDelMemberFail(data){
        this.tribeInfo.hasJoined = true;
    }
}

export default alt.createStore(TribeInfoStore, 'TribeInfoStore');

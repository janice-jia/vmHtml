import alt from '../alt'
import SearchActions from '../actions/SearchActions'

class SearchStore{
    constructor() {
        this.bindActions(SearchActions);
    }

    //部落搜索--成功
    onSearchTribesSuccess(data){
        console.info('onSearchTribesSuccess',data);
        if(data.status){
            if(data.data){
                this.tribeList = data.data;
            }
        }else{
            this.tribeList = [];
        }
    }
    //部落搜索--失败
    onSearchTribesFail(data){
        console.info('onSearchTribesFail',data);
        this.tribeList = [];
    }

    //话题搜索--成功
    onSearchTopicSuccess(data){
        console.info('onSearchTribesSuccess',data);
        if(data.status){
            if(data.data) {
                this.TopicList = data.data;
            }
        }else{
            this.TopicList = [];
        }
    }
    //话题搜索--失败
    onSearchTopicFail(data){
        console.info('onSearchTribesFail',data);
        this.TopicList = [];
    }

    //需求搜索--成功
    onSearchRequireSuccess(data){
        console.info('onSearchRequireSuccess',data);
        if(data.status){
            if(data.data){
                this.requireList = data.data;
            }
        }else{
            this.requireList = [];
        }
    }
    //需求搜索--失败
    onSearchRequireFail(data){
        console.info('onSearchRequireFail',data);
        this.requireList = [];
    }

    //服务搜索--成功
    onSearchServerSuccess(data){
        console.info('onSearchServerSuccess',data);
        if(data.status){
            if(data.data) {
                this.serverList = data.data;
            }
        }else{
            this.serverList = [];
        }
    }
    //服务搜索--失败
    onSearchServerFail(data){
        console.info('onSearchServerFail',data);
        this.serverList = [];
    }
}

export default alt.createStore(SearchStore, 'SearchStore');

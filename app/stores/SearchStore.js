import alt from '../alt'
import SearchActions from '../actions/SearchActions'

class SearchStore{
    constructor() {
        this.bindActions(SearchActions);
        this.tribeList = [];
        this.topicList = [];
        this.requireList = [];
        this.serverList = [];
        this.lastPage_tribe = false;
        this.lastPage_topic = false;
        this.lastPage_require = false;
        this.lastPage_server = false;
    }

    //部落搜索--成功
    onSearchTribesSuccess(data){
        console.info('onSearchTribesSuccess',data);
        if(data.status){
            if(data.data){
                if(data.currentPage > 1) {
                    this.tribeList = this.tribeList.concat(data.data);
                }else{
                    this.tribeList = data.data;
                }
            }
            this.lastPage_tribe = data.lastPage;
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
        console.info('onSearchTopicSuccess',data);
        if(data.status){
            if(data.data) {
                if(data.currentPage > 1) {
                    this.topicList = this.topicList.concat(data.data);
                }else{
                    this.topicList = data.data;
                }
            }
            this.lastPage_topic = data.lastPage;
        }else{
            this.topicList = [];
        }
    }
    //话题搜索--失败
    onSearchTopicFail(data){
        console.info('onSearchTribesFail',data);
        this.topicList = [];
    }

    //需求搜索--成功
    onSearchRequireSuccess(data){
        console.info('onSearchRequireSuccess',data);
        if(data.status){
            if(data.data){
                if(data.currentPage > 1) {
                    this.requireList = this.requireList.concat(data.data);
                }else{
                    this.requireList = data.data;
                }
            }
            this.lastPage_require = data.lastPage;
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
                if(data.currentPage > 1) {
                    this.serverList = this.serverList.concat(data.data);
                }else{
                    this.serverList = data.data;
                }
                this.lastPage_server = data.lastPage;
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

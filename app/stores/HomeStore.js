import alt from '../alt'
import HomeActions from '../actions/HomeActions'

class HomeStore{
    constructor() {
        this.bindActions(HomeActions);
        this.slideList = [];
        this.tribeList = [];
        this.topicList = [];
    }

    //获取首页幻灯片---成功
    onGetSlideSuccess(data) {
        this.slideList = data.data;
    }

    //获取首页幻灯片---失败
    onGetSlideFail(){
        this.slideList = [];
    }

    //获取首页部落列表---成功
    onGetTribeSuccess(data) {
        this.tribeList = data.data;
    }

    //获取首页部落列表---失败
    onGetTribeFail(){
        this.tribeList = [];
    }

    //获取首页话题列表---成功
    onGetTopicSuccess(data) {
        this.topicPage = data.currentPage;
        this.lastPage = data.lastPage;
        this.topicList = this.topicList.concat(data.data);
    }

    //获取首页话题列表---失败
    onGetTopicFail(){
        this.topicList = [];
    }
}

export default alt.createStore(HomeStore, 'HomeStore');

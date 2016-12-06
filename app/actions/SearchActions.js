import alt from '../alt'
import $ from 'jquery'

class SearchActions {
    constructor() {
        this.generateActions(
            'searchTribesSuccess',
            'searchTribesFail',

            'searchTopicSuccess',
            'searchTopicFail',

            'searchRequireSuccess',
            'searchRequireFail',

            'searchServerSuccess',
            'searchServerFail'
        );
    }

    //部落搜索
    searchTribes(data) {
        $.ajax({
            type: 'Get',
            url: '/app/tribes/search',
            data:data
        })
        .done((data) => {
            this.searchTribesSuccess(data);
        })
        .fail((jqXhr) => {
            this.searchTribesFail(jqXhr);
        });
    }

    //话题搜索
    searchTopic(data) {
        $.ajax({
                type: 'Get',
                url: '/app/tribe/themes/search',
                data:data
            })
            .done((data) => {
                this.searchTopicSuccess(data);
            })
            .fail((jqXhr) => {
                this.searchTopicFail(jqXhr);
            });
    }

    //需求搜索
    searchRequire(data) {
        $.ajax({
                type: 'Get',
                url: '/app/require/search',
                data:data
            })
            .done((data) => {
                this.searchRequireSuccess(data);
            })
            .fail((jqXhr) => {
                this.searchRequireFail(jqXhr);
            });
    }

    //服务搜索
    searchServer(data) {
        $.ajax({
                type: 'Get',
                url: '/app/server/search',
                data:data
            })
            .done((data) => {
                this.searchServerSuccess(data);
            })
            .fail((jqXhr) => {
                this.searchServerFail(jqXhr);
            });
    }
}

export default alt.createActions(SearchActions);
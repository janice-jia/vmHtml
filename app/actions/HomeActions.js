import alt from '../alt'
import $ from 'jquery'

class HomeActions {
    constructor() {
        this.generateActions(
            'updateHomeSuccess',
            'updateHomeFail'
        );
    }

    updateHome() {
        $.ajax({
                type: 'Get',
                url: '/app/banner',
            })
            .done((data) => {
                console.info('data',data);
                this.updateHomeSuccess(data);
            })
            .fail((jqXhr) => {
                this.updateHomeFail(jqXhr);
            });
    }

}

export default alt.createActions(HomeActions);
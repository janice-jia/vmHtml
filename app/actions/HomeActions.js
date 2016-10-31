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
                url: 'http://www.ibanyi.com/api/user',
            })
            .done((data) => {
                this.updateHomeSuccess(data);
            })
            .fail((jqXhr) => {
                this.updateHomeFail(jqXhr);
            });
    }

}

export default alt.createActions(HomeActions);
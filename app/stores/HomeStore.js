import alt from '../alt'
import HomeActions from '../actions/HomeActions'

class HomeStore{
    constructor() {
        this.bindActions(HomeActions);
        this.home=[];
    }

    //updateHome(todo) {
    //    this.setState({ todos: this.state.todos.concat(todo) });
    //}

    onUpdateHomeSuccess(data) {
        this.home = data.result;
        console.info('onUpdateHomeSuccess',this.home);
    }

    onUpdateHomeFail(){
        console.info('onUpdateHomeFail',data);
    }

}

export default alt.createStore(HomeStore, 'HomeStore');

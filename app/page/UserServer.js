import React from 'react'
import {View, Container} from 'amazeui-touch';
import _Header from './../components/_Header'
import _Server from './../components/_Server'
import UserServerStore from './../stores/UserServerStore'
import UserServerActions from './../actions/UserServerActions'

class UserServer extends React.Component{
    constructor(props){
        super(props);
        this.state = UserServerStore.getState();
        this.state.currentPage = 1;
        this.state.itemsPerPage = 10;
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        UserServerStore.listen(this.onChange);
        UserServerActions.getServerList({uid:this.props.params.uid, currentPage: this.state.currentPage,itemsPerPage: this.state.itemsPerPage})
    }

    componentWillUnmount() {
        UserServerStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <_Server serverList={this.state.serverList}></_Server>
                </Container>
            </View>
        )
    }
}
export default UserServer;

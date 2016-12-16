import React from 'react'
import {
    Button,
    View,
    Container,
    Tabs,
    Group,
    List,
    Grid,
    Col
} from 'amazeui-touch';
import _Header from './../components/_Header';
import _Require from '../components/_Require'
import RequireActions from '../actions/RequireActions'
import RequireStore from '../stores/RequireStore'

class Require extends React.Component{
    constructor(props){
        super(props);
        this.state = RequireStore.getState();
        this.state.currentPage = 1;
        this.state.itemsPerPage = 10;
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        RequireStore.listen(this.onChange);
        RequireActions.getRuquireList({currentPage: this.state.currentPage,itemsPerPage: this.state.itemsPerPage})
    }

    componentWillUnmount() {
        RequireStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }
    render() {
        return <View>
            <_Header/>
            <Container scrollable>
                <div className="require-tabs-list">
                    <_Require requireList={this.state.requireList}></_Require>
                </div>
            </Container>
        </View>;
    }
}
export default Require;



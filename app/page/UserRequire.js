import React from 'react'
import {View, Container, Tabs} from 'amazeui-touch';
import _Header from './../components/_Header'
import _Require from './../components/_Require'
import UserRequireStore from './../stores/UserRequireStore'
import UserRequireActions from './../actions/UserRequireActions'

class UserRequire extends React.Component{
    constructor(props){
        super(props);
        this.state = UserRequireStore.getState();
        this.state.currentPage = 1;
        this.state.itemsPerPage = 10;
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        UserRequireStore.listen(this.onChange);
        UserRequireActions.getRuquireList({uid:this.props.params.uid, currentPage: this.state.currentPage,itemsPerPage: this.state.itemsPerPage})
        UserRequireActions.getApplyRuquireList({uid:this.props.params.uid, currentPage: this.state.currentPage,itemsPerPage: this.state.itemsPerPage});
    }

    componentWillUnmount() {
        UserRequireStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }
    handleAction(key){
        //this.state.type = key+1;
        //
        //this.onChange(this);
    }

    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <div className={this.state.requireList.length>0 ? 'require-tabs-list' : 'require-tabs-list require-tabs-100' }>
                    <Tabs onAction={this.handleAction.bind(this)}  className="margin-0">
                        <Tabs.Item title='发布的需求' key='1' className="padding-0">
                            <_Require requireList={this.state.requireList}></_Require>
                        </Tabs.Item>
                        <Tabs.Item title='参与的需求' key='2' className="padding-0">
                            <_Require requireList={this.state.applyRequireList}></_Require>
                        </Tabs.Item>
                    </Tabs>
                    </div>
                </Container>
            </View>
        )
    }
}
export default UserRequire;
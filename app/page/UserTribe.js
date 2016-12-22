import React from 'react';
import _Header from './../components/_Header'
import _Tribe from './../components/_Tribe'
import {Container, Group, List, View, Badge} from 'amazeui-touch';
import UserTribeActions from './../actions/UserTribeActions'
import UserTribeStore from './../stores/UserTribeStore'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'
import $  from 'jquery'

class UserTribe extends React.Component{
    constructor(props){
        super(props);
        this.state = UserTribeStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state.currentPage = 1;
        this.state.uid = this.props.params.uid;
        this.state.iScrollOptions={
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: true,
            click:true
        }
    }

    componentDidMount(){
        UserTribeStore.listen(this.onChange);
        UserTribeActions.getTribe({
            uid:this.state.uid,
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
        //console.info('tribeList',this.state.tribeList);
    }

    componentWillUnmount() {
        UserTribeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                UserTribeActions.getTribe({
                    uid:this.state.uid,
                    currentPage:this.state.currentPage,
                    itemsPerPage:10
                });
            }
        }
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable id="wrapper" className={this.state.tribeList.length>0 ? '' : 'hidden'}>
                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                >
                    <_Tribe tribeList={this.state.tribeList}></_Tribe>
                </ReactIScroll>
            </Container>
            <Group  className={this.state.tribeList.length>0 ? 'hidden' : 'null-con bgF margin-0'}>部落为空</Group>
        </View>
    }
}

export default UserTribe


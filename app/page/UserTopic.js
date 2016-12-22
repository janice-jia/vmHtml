import React from 'react';
import _Header from './../components/_Header'
import _TopicItem from './../components/_TopicItem'
import {Container, Group, List, View, Badge} from 'amazeui-touch';
import UserTopicActions from './../actions/UserTopicActions'
import UserTopicStore from './../stores/UserTopicStore'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'
import $  from 'jquery'

class UserTopic extends React.Component{
    constructor(props){
        super(props);
        this.state = UserTopicStore.getState();
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
        UserTopicStore.listen(this.onChange);
        UserTopicActions.getTopic({
            uid:this.state.uid,
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
        //console.info('tribeList',this.state.tribeList);
    }

    componentWillUnmount() {
        UserTopicStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                UserTopicActions.getTopic({
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
            <Container scrollable id="wrapper">
                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                >
                    <_TopicItem topicList={this.state.topicList}></_TopicItem>
                </ReactIScroll>
            </Container>

        </View>
    }
}

export default UserTopic


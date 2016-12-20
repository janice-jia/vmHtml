import React from 'react';
import _Header from './../components/_Header'
import {Container, Group, List, View, Badge, Grid, Col,TabBar} from 'amazeui-touch';
import TribeMemberActions from '../actions/TribeMemberActions'
import TribeMemberStore from '../stores/TribeMemberStore'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'

class TribeMember extends  React.Component{
    constructor(props){
        super(props);
        this.state = TribeMemberStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state.currentPage = 1;
        this.state.iScrollOptions={
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: true,
            click:true
        }
    }

    componentDidMount(){
        TribeMemberStore.listen(this.onChange);
        TribeMemberActions.getMember({tribeId:this.props.params.tribeId, currentPage:this.state.currentPage, itemsPerPage:18});
    }

    componentWillUnmount(){
        TribeMemberStore.unlisten(this.onChange)
    }

    onChange(state){
        this.setState(state);
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            console.info(1);
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                TribeMemberActions.getMember({
                    tribeId:this.props.params.tribeId,
                    currentPage:this.state.currentPage,
                    itemsPerPage:18
                });
            }
        }
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable  className="tribe">
                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                >
                <div className="member bgF">
                    <Group noPadded className="margin-0">
                        <h5 className="member-tit padding-sm margin-0 text-size-14 text-color-3">酋长</h5>
                        <List className="member-list">
                                    <List.Item
                                        title={this.state.tribeMember.creator.userName}
                                        subTitle={this.state.tribeMember.creator.userDesc}
                                        target="_blank"
                                        media={<img width="48" src={this.state.tribeMember.creator.avatar} />}
                                        href={'/user/'+this.state.tribeMember.creator.uid}
                                    />
                        </List>
                    </Group>
                    <Group noPadded className="margin-0">
                        <h5 className="member-tit padding-sm margin-0 text-size-14 text-color-3 border-top">族员（{this.state.tribeMember.totalItems}人）</h5>

                            <List className="member-list">
                                {this.state.tribeMember.members.map((item, i) => {
                                    return (

                                        <List.Item
                                            key={i}
                                            title={item.userName}
                                            subTitle={item.userDesc}
                                            target="_blank"
                                            media={<img width="48" src={item.avatar} />}
                                            href={'/user/'+item.uid}
                                        />
                                    );
                                })}
                            </List>
                    </Group>
                </div>
                </ReactIScroll>
            </Container>
        </View>

    }
}
export default TribeMember;

import React from 'react';
import _Header from './../components/_Header'
import {Container, Group, List, View, Badge, Grid, Col,TabBar} from 'amazeui-touch';
import TribeMemberActions from '../actions/TribeMemberActions'
import TribeMemberStore from '../stores/TribeMemberStore'

class TribeMember extends  React.Component{
    constructor(props){
        super(props);
        this.state = TribeMemberStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        TribeMemberStore.listen(this.onChange);
        TribeMemberActions.getMember({tribeId:this.props.params.tribeId, currentPage:1, itemsPerPage:10});
    }

    componentWillUnmount(){
        TribeMemberStore.unlisten(this.onChange)
    }

    onChange(state){
        this.setState(state);
    }

    render() {
        const albums = [
            {
                title: '女爵',
                subTitle: '发行公司：环球唱片发行公司：环球唱片发行公司：环球唱片发行公司：环球唱片',
                href: 'http://music.163.com/#/album?id=31308'
            },
            {
                title: '第一张精选',
                subTitle: '发行公司：滚石唱片',
                href: 'http://music.163.com/#/album?id=31312'
            }
        ];
        return <View>
            <_Header></_Header>
            <Container scrollable fill className="tribe">
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
            </Container>
        </View>

    }
}
export default TribeMember;

import React from 'react';
import _Header from './../components/_Header'
import {Container, Group, List, View, Badge, Grid, Col} from 'amazeui-touch';
import TribeInfoActions from './../actions/TribeInfoActions'
import TribeInfoStore from './../stores/TribeInfoStore'
import publicFn from '../publicFn'
import { Swiper, Slide } from 'react-dynamic-swiper'
import _Topic from '../components/_Topic'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'

const img = <img className="home-tribe-media" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />


class TribeInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = TribeInfoStore.getState();
        this.state.addDelTribeBtn = <button className="tribe-addMember-btn" onClick={this.addMember.bind(this)}>加入部落</button>;
        this.onChange = this.onChange.bind(this);
        this.state.iScrollOptions={
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: true,
            click:true
        }
    }
    componentDidMount(){
        TribeInfoStore.listen(this.onChange);
        TribeInfoActions.getTribeInfo({tribeId:this.props.params.tribeId, uid:publicFn.getUser()})
    }

    componentWillUnmount(){
        TribeInfoStore.unlisten(this.onChange)
    }

    onChange(state){
        this.setState(state);
    }

    //加入部落
    addMember(){
        if(publicFn.isUser()){
            TribeInfoActions.addMember({tribeId:this.props.params.tribeId, uid:publicFn.getUser()});
        }else{
            alert('您还没有登录');
        }
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 10){
            if(!this.state.lastPage){
                TribeInfoActions.getTopicCon({
                    tribeId:this.state.tribeInfo.id,
                    tabId:this.state.tabId,
                    uid:publicFn.getUser(),
                    currentPage:this.state.currentPage+1,
                    itemsPerPage:10
                });
            }
        }
    }



    //退出部落
    delMember(){
        if(publicFn.isUser()) {
            TribeInfoActions.delMember({tribeId: this.props.params.tribeId, uid: publicFn.getUser()});
        }else{
            alert('您还没有登录');
        }
    }


    render() {
        return <View>
            <_Header></_Header>
            <div className="bgF tribe-info-user">
                <List.Item
                    title={
                        <a href="" className="text-color-3"><div className="tribe-user-name">
                            <div className="item-title">{this.state.tribeInfo.title}</div>
                            <div className="item-subtitle">族员：{this.state.tribeInfo.memberAmount}</div>
                            <div className="item-desc padding-right">{this.state.tribeInfo.descript}</div>
                         </div></a>
                        }
                    media={<img src={ this.state.tribeInfo.logo}/>}
                    after={this.state.tribeInfo.hasJoined ? <button className="tribe-delMember-btn" onClick={this.delMember.bind(this)}>退出部落</button> : <button className="tribe-addMember-btn" onClick={this.addMember.bind(this)}>加入部落</button>}
                />
                <div className="tirbe-info-tab">
                    <Swiper
                        swiperOptions={{slidesPerView:'auto'}}
                        navigation={false}
                        pagination={false}
                    >
                        {
                            this.state.tribeInfo.tabs.map((item, i) => {
                                var itemView = '';
                                if(item.category == 0){
                                    itemView = <Slide key={i}><a href={'/tribe/member/'+this.state.tribeInfo.id} className={item.className}>{item.name}</a></Slide>;
                                }else if(item.category == 2){
                                    itemView = <Slide key={i}><a href={'/tribe/album/'+this.state.tribeInfo.id} className={item.className}>{item.name}</a></Slide>
                                }else if(item.category == 3){
                                    itemView = <Slide key={i}><a href={'/tribe/video/'+item.id} className={item.className}>{item.name}</a></Slide>
                                }else if(item.category == 4){
                                    itemView = <Slide key={i}><a href={'/tribe/novel/'+item.id} className={item.className}>{item.name}</a></Slide>
                                }else if(item.category == 5){
                                    itemView = <Slide key={i}><a href={'/tribe/comic/'+item.id} className={item.className}>{item.name}</a></Slide>
                                }
                                return itemView;
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <Group className={this.state.tribeInfo.topTopics.length>0 ? "margin-v tribe-toTopList" : 'hidden'}>
                <ul>
                    {this.state.tribeInfo.topTopics.map((item, i) => {
                        return (
                            <li className="icon-toTop text-color-3" key={i}><a href={'/tribe/topic/'+item.id}>{item.title}</a></li>
                        );
                    })}
                </ul>
            </Group>
            <Container scrollable className="tribe">
                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                >
                <div className="comp-topic-list">
                    <_Topic topicList={this.state.topicList} showTribe={false}></_Topic>
                </div>
                </ReactIScroll>
            </Container>
        </View>

    }
}

export default TribeInfo


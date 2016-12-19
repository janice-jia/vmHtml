import React from 'react';
import _Header from './../components/_Header'
import _Comments from './../components/_Comments'
import {Container, Group, List, View, Badge, Grid, Col} from 'amazeui-touch';
import TribeTopicActions from './../actions/TribeTopicActions'
import TribeTopicStore from './../stores/TribeTopicStore'
import publicFn from '../publicFn'


const hotCommentList = [
    {
        media:'http://s.amazeui.org/media/i/demos/bing-2.jpg',//头像地址
        title:'女爵',                                         //标题
        subTitle:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内',//描述
        time:'10分钟前',                                      //时间
        like:'2'                                              //点赞人数
    }
]
const commentList = [
    {
        media:'http://s.amazeui.org/media/i/demos/bing-2.jpg',//头像地址
        title:'女爵',                                         //标题
        subTitle:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内',//描述
        time:'10分钟前',                                      //时间
        like:'2'                                              //点赞人数
    },
    {
        media:'http://s.amazeui.org/media/i/demos/bing-1.jpg',
        title:'女爵',
        subTitle:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内',
        time:'10分钟前',
        like:'2'
    }
];

class TribeTopic extends React.Component{
    constructor(pops){
        super(pops);
        this.state = TribeTopicStore.getState();
        this.state.topicId = this.props.params.topicId;
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
        TribeTopicStore.listen(this.onChange);
        TribeTopicActions.getTopicInfo(this.state.topicId)
    }

    componentWillUnmount(){
        TribeTopicStore.unlisten(this.onChange)
    }
    onChange(state){
        this.setState(state);
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable className="tribe tribe-topic">
                <div className="tribe-info-user bgF">
                            <List.Item
                                title={
                                        <div className="tribe-user-name">
                                            <a href={'/user/'+this.props.location.query.uid} className="text-color-3">
                                                <div className="item-title">{this.props.location.query.userName}</div>
                                                <div className="item-subtitle">{publicFn.getFromNow(this.props.location.query.createTime)}</div>
                                            </a>
                                        </div>
                                            }
                                target="_blank"
                                media={
                                <img src={ this.props.location.query.userAvatar}/>
                                }
                                after={<a href={'/tribe/info/'+this.props.location.query.tribesId} className="tribe-tribe-btn">{this.props.location.query.tribeName}</a>}
                            />
                </div>
                <iframe src={'http://www.vmaking.com/tribe/theme/'+this.props.params.topicId} frameBorder="0" width="100%" height="auto" ></iframe>
                <Group noPadded className="margin-v">
                    <div className="padding-top require-badge">
                        <p className="text-size-14">
                            <Badge></Badge>
                            <span className="padding-left-sm">热门评论</span>
                        </p>
                        <_Comments commentList={hotCommentList}></_Comments>
                    </div>
                    <div className="padding-top require-badge border-none">
                        <p className="text-size-14">
                            <Badge></Badge>
                            <span className="padding-left-sm">全部评论（30条）</span>
                        </p>
                        <_Comments commentList={commentList}></_Comments>
                    </div>
                </Group>
            </Container>
        </View>

    }
}
export default TribeTopic;


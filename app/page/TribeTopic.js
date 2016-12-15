import React from 'react';
import _Header from './../components/_Header'
import _Comments from './../components/_Comments'
import {Container, Group, List, View, Badge, Grid, Col} from 'amazeui-touch';
import TribeTopicActions from './../actions/TribeTopicActions'
import TribeTopicStore from './../stores/TribeTopicStore'


const albums = [
    {
        title: '女爵',
        media:'http://lorempixel.com/160/160/people/',
        subTitle: '10分钟',
        tribe:"海贼王",
        userhref:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        tribehref:"/tribe/info/01",
        topicTit:"标题名称标题名称",
        topicDesc:"帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容",
        topicImg:"http://lorempixel.com/128/128/people/"

    }
];
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
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
        TribeTopicStore.listen(this.onChange);
        TribeTopicActions.getTopicInfo()
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
                    {albums.map((album, i) => {
                        return (
                            <List.Item
                                title={
                                        <div className="tribe-user-name">
                                            <div className="item-title">{album.title}</div>
                                            <div className="item-subtitle">{album.subTitle}</div>
                                        </div>
                                            }
                                target="_blank"
                                media={
                                <img src={ album.media }/>
                                }
                                after={<a href={album.tribehref} className="tribe-tribe-btn">{album.tribe}部落</a>}
                                //href={i === 0 ? null : album.href}
                                key={i}
                            />
                        );
                    })}
                </div>
                <iframe src={'http://test.vmaking.com/tribe/theme/'+this.props.params.topicId} frameBorder="0" width="100%" height="100%"></iframe>
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


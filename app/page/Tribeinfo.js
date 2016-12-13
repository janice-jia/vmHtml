import React from 'react';
import _Header from './../components/_Header'
import {Container, Group, List, View, Badge, Grid, Col} from 'amazeui-touch';
import TribeInfoActions from './../actions/TribeInfoActions'
import TribeInfoStore from './../stores/TribeInfoStore'

const topicList=[
    {
        username:"嗨粉",
        media:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        userhref:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        topichref:"/tribe/topic/01",
        time:"1小时前",
        titname:"标题名称标题名称",
        desc:"帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内",
        say:"123",
        zan:"123",
        com:"123",
        imgarr:[
            "http://s.amazeui.org/media/i/demos/bing-1.jpg",
            "http://s.amazeui.org/media/i/demos/bing-2.jpg",
            "http://s.amazeui.org/media/i/demos/bing-3.jpg"
        ]
    },
    {
        username:"嗨粉",
        media:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        time:"1小时前",
        titname:"标题名称标题名称",
        desc:"帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内",
        say:"123",
        zan:"123",
        com:"123",
        imgarr:[
            "http://s.amazeui.org/media/i/demos/bing-1.jpg",
            "http://s.amazeui.org/media/i/demos/bing-2.jpg",
            "http://s.amazeui.org/media/i/demos/bing-3.jpg"
        ]
    },
    {
        username:"嗨粉",
        media:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        time:"1小时前",
        titname:"标题名称标题名称",
        desc:"帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容帖子内",
        say:"123",
        zan:"123",
        com:"123",
        imgarr:[
            "http://s.amazeui.org/media/i/demos/bing-1.jpg",
            "http://s.amazeui.org/media/i/demos/bing-2.jpg",
            "http://s.amazeui.org/media/i/demos/bing-3.jpg"
        ]
    }
];
const img = <img className="home-tribe-media" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
const tit = (
    <div className="home-tribe-item">
        <p className="text-color-3 text-size-14">嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉</p>
        <p className="text-color-4 text-size-13">1小时前</p>
    </div>
);
const btn = <div className="home-tribe-tag">海贼王部落</div>


class TribeInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = TribeInfoStore.getState();
        this.state.addDelTribeBtn = <button className="tribe-user-btn" onClick={this.addMember.bind(this)}>加入部落</button>;
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        TribeInfoStore.listen(this.onChange);
        TribeInfoActions.getTribeInfo(this.props.params.tribeId);
        //console.info('this.state',this.state);
    }

    componentWillUnmount(){
        TribeInfoStore.unlisten(this.onChange)
    }

    onChange(state){
        this.setState(state);
    }

    //加入部落
    addMember(){
        this.state.addDelTribeBtn = <button className="tribe-user-btn" onClick={this.delMember.bind(this)}>退出部落</button>;
        this.setState(this.state);
    }

    //退出部落
    delMember(){
        this.state.addDelTribeBtn = <button className="tribe-user-btn" onClick={this.addMember.bind(this)}>加入部落</button>;
        this.setState(this.state);
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable className="tribe">
                <div className="bgF tribe-info-user">
                    <List.Item
                        title={
                        <div className="tribe-user-name">
                            <div className="item-title">{this.state.tribeInfo.title}</div>
                            <div className="item-subtitle">族员：{this.state.tribeInfo.memberAmount}</div>
                            <div className="item-desc padding-right">{this.state.tribeInfo.descript}</div>
                         </div>
                        }
                        media={<img src={ this.state.tribeInfo.logo}/>}
                        after={this.state.addDelTribeBtn}
                    />
                    <div className="tirbe-info-tab">
                        <a href="/tribe/person">族员</a>
                        <hr/>
                        <a href="/tribe/album/01">相册</a>
                    </div>
                </div>
                <Group className="margin-v tribe-toTopList">
                    <ul>
                        {this.state.tribeInfo.topTopics.map((item, i) => {
                            return (
                                <li className="icon-toTop" key={i}>{item.title}</li>
                            );
                        })}
                    </ul>
                </Group>

                <div className="tribe-topic-list">

                    {topicList.map((topic, i) => {
                        return (
                            <div className="border-d7d7d7 bgF margin-top-sm" key={i}>
                                <Group noPadded className="margin-v-0">
                                    <List>
                                        <List.Item
                                            media= {
                                            <a href={topic.userhref}>
                                                <img className="home-tribe-media" width="44" height="44" src= {topic.media}/>
                                            </a>
                                            }
                                            title={
                                             <div className="home-tribe-item">
                                                <a href={topic.userhref}>
                                                    <p className="text-color-3 text-size-14">{topic.username}</p>
                                                </a>
                                                <p className="text-color-4 text-size-13">{topic.time}</p>
                                            </div>
                                            }
                                        />
                                        <a href={topic.topichref}>
                                            <div className="padding-h margin-v-xs">
                                                <div className="text-size-15 text-color-3 font-weight">{topic.titname}</div>
                                                <div className="text-size-13 text-color-2 home-tribe-desc">{topic.desc}</div>
                                            </div>
                                            <Grid avg={3}>
                                                {topic.imgarr.map((img,f) => {
                                                    return (
                                                        <Col className="padding-h padding-top-xs padding-bottom-0" key={f}>
                                                            <img src={img}  />
                                                        </Col>
                                                    );
                                                })}

                                            </Grid>
                                            <Grid align="between">
                                                <Col cols={2} className="padding-h text-size-12 text-color-4">
                                                    <span className="icon icon-back text-size-12"></span>
                                                    {topic.say}
                                                </Col>
                                                <Col cols={2} className="padding-h text-size-12 text-color-4 text-right">
                                                    <Grid>
                                                        <Col>
                                                            <span className="icon icon-back text-size-12"></span>
                                                            {topic.zan}
                                                        </Col>
                                                        <Col>
                                                            <span className="icon icon-back text-size-12"></span>
                                                            {topic.com}
                                                        </Col>
                                                    </Grid>
                                                </Col>
                                            </Grid>
                                        </a>

                                    </List>
                                </Group>
                            </div>
                        );
                    })}
                </div>



            </Container>
        </View>

    }
}

export default TribeInfo


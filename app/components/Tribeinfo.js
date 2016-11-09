import React from 'react';
import Header from './Header'
import {
    Container, Group, List, View, Badge,Grid,Col
} from 'amazeui-touch';

const albums = {
        title: '原画部落',
        media: 'http://lorempixel.com/160/160/people/',
        subTitle: '123456',
        desc: '一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介',
        personHref:"/tribe/person",
        albumHref:"/tribe/album/01",

};
const listName=[
  "原画CG部落规定","原画硬件设备：手绘板的参数调整","别停笔，一直画","【重要通知】关于最近删帖状况解释"
];

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


export default React.createClass({
    render() {
        return <View>
            <Container scrollable className="tribe">
                <Header></Header>
                <div className="bgF tribe-info-user">
                    <List.Item
                        title={
                        <div className="tribe-user-name">
                            <div className="item-title">{albums.title}</div>
                            <div className="item-subtitle">族员：{albums.subTitle}</div>
                            <div className="item-desc padding-right">{albums.desc}</div>
                         </div>
                        }
                        media={<img src={ albums.media }/>}
                        after={<button className="tribe-user-btn">加入部落</button>}
                        //title={tit}
                    />
                    <div className="tirbe-info-tab">
                        <a href={albums.personHref}>族员</a>
                        <hr/>
                        <a href={albums.albumHref}>相册</a>
                    </div>
                </div>
                <Group className="margin-v tribe-toTopList">
                    <ul>
                        {listName.map((ln, i) => {
                            return (
                                <li className="icon-toTop" key={i}>{ln}</li>

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
})


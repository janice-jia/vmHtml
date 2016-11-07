import React from 'react';
import Header from './Header'
import {
    Container, Group, List, View, Badge,Grid,Col
} from 'amazeui-touch';

const albums = {
        title: '原画部落',
        media: 'http://lorempixel.com/160/160/people/',
        subTitle: '123456',
        desc: '一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介'
    };
const listName=[
  "原画CG部落规定","原画硬件设备：手绘板的参数调整","别停笔，一直画","【重要通知】关于最近删帖状况解释"
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
                        <a href="#">族员</a>
                        <hr/>
                        <a href="/tribe/album/01">相册</a>
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
                    <div className="border-d7d7d7 bgF margin-top-sm">
                        <Group noPadded className="margin-v-0">
                            <List>
                                <List.Item
                                    media={img}
                                    //after={btn}
                                    title={tit}
                                />
                                <div className="padding-h margin-v-xs">
                                    <div className="text-size-15 text-color-3 font-weight">标题名称名称名称</div>
                                    <div className="text-size-13 text-color-2 home-tribe-desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
                                </div>
                                <Grid avg={3}>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
                                    </Col>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
                                    </Col>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
                                    </Col>
                                </Grid>
                                <Grid align="between">
                                    <Col cols={2} className="padding-h text-size-12 text-color-4">
                                        <span className="icon icon-back text-size-12"></span>
                                        123
                                    </Col>
                                    <Col cols={2} className="padding-h text-size-12 text-color-4 text-right">
                                        <Grid>
                                            <Col>
                                                <span className="icon icon-back text-size-12"></span>
                                                123
                                            </Col>
                                            <Col>
                                                <span className="icon icon-back text-size-12"></span>
                                                123
                                            </Col>
                                        </Grid>
                                    </Col>
                                </Grid>
                            </List>
                        </Group>
                    </div>
                    <div className="border-d7d7d7 bgF margin-top-sm">
                        <Group noPadded className="margin-v-0">
                            <List>
                                <List.Item
                                    media={img}
                                    //after={btn}
                                    title={tit}
                                />
                                <div className="padding-h margin-v-xs">
                                    <div className="text-size-15 text-color-3 font-weight">标题名称名称名称</div>
                                    <div className="text-size-13 text-color-2 home-tribe-desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
                                </div>
                                <Grid avg={3}>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
                                    </Col>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
                                    </Col>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
                                    </Col>
                                </Grid>
                                <Grid align="between">
                                    <Col cols={2} className="padding-h text-size-12 text-color-4">
                                        <span className="icon icon-back text-size-12"></span>
                                        123
                                    </Col>
                                    <Col cols={2} className="padding-h text-size-12 text-color-4 text-right">
                                        <Grid>
                                            <Col>
                                                <span className="icon icon-back text-size-12"></span>
                                                123
                                            </Col>
                                            <Col>
                                                <span className="icon icon-back text-size-12"></span>
                                                123
                                            </Col>
                                        </Grid>
                                    </Col>
                                </Grid>
                            </List>
                        </Group>
                    </div>
                    <div className="border-d7d7d7 bgF margin-top-sm">
                        <Group noPadded className="margin-v-0">
                            <List>
                                <List.Item
                                    media={img}
                                    //after={btn}
                                    title={tit}
                                />
                                <div className="padding-h margin-v-xs">
                                    <div className="text-size-15 text-color-3 font-weight">标题名称名称名称</div>
                                    <div className="text-size-13 text-color-2 home-tribe-desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
                                </div>
                                <Grid avg={3}>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
                                    </Col>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
                                    </Col>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
                                    </Col>
                                </Grid>
                                <Grid align="between">
                                    <Col cols={2} className="padding-h text-size-12 text-color-4">
                                        <span className="icon icon-back text-size-12"></span>
                                        123
                                    </Col>
                                    <Col cols={2} className="padding-h text-size-12 text-color-4 text-right">
                                        <Grid>
                                            <Col>
                                                <span className="icon icon-back text-size-12"></span>
                                                123
                                            </Col>
                                            <Col>
                                                <span className="icon icon-back text-size-12"></span>
                                                123
                                            </Col>
                                        </Grid>
                                    </Col>
                                </Grid>
                            </List>
                        </Group>
                    </div>
                </div>
                


            </Container>
        </View>

    }
})


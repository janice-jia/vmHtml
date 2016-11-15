import React from 'react';
import Header from './_Header'
import {
    Container,Group,List,View,Badge,Grid, Col,
} from 'amazeui-touch';

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

export default React.createClass({
    render() {
        return <View>
            <Container scrollable className="tribe tribe-topic">
                <Header></Header>
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
                <Group className="topic-box">
                        <h1 className="topic-title">标题名称标题名称标题</h1>
                        <p className="topic-p">
                            《守望先锋》动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集动画系列最新一集
                        </p>
                        <div className="topic-img">
                            <img src="http://lorempixel.com/160/160/people/" alt=""/>
                        </div>
                </Group>


                <Group noPadded className="margin-v">
                    <div className="padding-top require-badge">
                        <p className="text-size-14">
                            <Badge></Badge>
                            <span className="padding-left-sm">热门评论</span>
                        </p>
                        <List className="comments">
                            <List.Item
                                media={<img className="comments-avatar" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />}
                                title="女爵"
                                subTitle="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内"
                                desc={<Grid align="between">
                                        <Col cols={2} className="text-left padding-0">10分钟前</Col>
                                        <Col cols={2} className="text-right">2</Col>
                                      </Grid>}
                            />
                        </List>
                    </div>
                    <div className="padding-top require-badge border-none">
                        <p className="text-size-14">
                            <Badge></Badge>
                            <span className="padding-left-sm">全部评论（30条）</span>
                        </p>
                        <List className="comments">
                            <List.Item
                                media={<img className="comments-avatar" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />}
                                title="女爵"
                                subTitle="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内"
                                desc={<Grid align="between">
                                        <Col cols={2} className="text-left padding-0">10分钟前</Col>
                                        <Col cols={2} className="text-right">2</Col>
                                      </Grid>}
                            />
                            <List.Item
                                media={<img className="comments-avatar" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />}
                                title="女爵"
                                subTitle="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内"
                                desc={<Grid align="between">
                                        <Col cols={2} className="text-left padding-0">10分钟前</Col>
                                        <Col cols={2} className="text-right">2</Col>
                                      </Grid>}
                            />
                        </List>
                    </div>
                </Group>
            </Container>
        </View>

    }
})


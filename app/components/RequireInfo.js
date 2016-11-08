import React from 'react'
import {
    View,
    Container,
    Grid,
    Col,
    Group,
    List,
    Badge
} from 'amazeui-touch';
import Header from './Header'

export default React.createClass({
    render() {
        const { serverId } = this.props.params
        const img = <img className="require-user-avatar" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
        const tit = (
            <div className="require-user-name">
                <p className="text-color-3 text-size-14">白发魔女</p>
                <p className="text-color-4 text-size-13">北京</p>
            </div>
        )
        const btn = <div className="require-user-tag">关注</div>
        return <View>
            <Container scrollable>
                <Header></Header>
                <div className="bgF require-info-user">
                    <List.Item
                        media={img}
                        after={btn}
                        title={tit}
                    />
                </div>
                <Group noPadded className="margin-0">
                    <div className="require-info text-size-14">
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">需求名称</Col>
                            <Col className="padding-left-0 text-color-3">名称名称名称名称</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">所需技能</Col>
                            <Col className="padding-left-0 text-color-3">技能名称，技能名称，</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">酬金</Col>
                            <Col className="padding-left-0 text-color-5">100元每小时</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">保证金</Col>
                            <Col className="padding-left-0 text-color-5">100元每小时</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">需求地点</Col>
                            <Col className="padding-left-0 text-color-3">北京</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">发布日期</Col>
                            <Col className="padding-left-0 text-color-3">2016.1.11</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">截止日期</Col>
                            <Col className="padding-left-0 text-color-3">2016.12.11</Col>
                        </Grid>
                    </div>
                </Group>

                <Group noPadded className="margin-v">
                    <div className="padding-v require-badge">
                        <p className="text-size-14">
                            <Badge></Badge>
                            <span className="padding-left-sm">报名列表（20人）</span></p>
                    </div>
                    <Group noPadded className="margin-0 require-apply-list">
                        <Grid className="padding-v-xs"  align="left">
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                        </Grid>
                    </Group>
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
        </View>;
    }
})

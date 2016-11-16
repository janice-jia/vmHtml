import React from 'react';
import _Header from './../components/_Header'
import {
    Container, Group, List, View, Badge, Grid, Col,TabBar
} from 'amazeui-touch';

export default React.createClass({
    render() {
        return <View>
            <Container scrollable fill className="tribe">
                <_Header></_Header>
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
